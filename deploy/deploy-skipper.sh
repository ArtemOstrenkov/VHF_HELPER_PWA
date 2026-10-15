#!/usr/bin/env bash
set -euo pipefail

# Configuration
HOST="${DEPLOY_HOST:-root@155.212.141.54}"
REMOTE_ROOT="/var/www/skippers-companion"
DOMAIN="skipper.p4e1.ru"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT_DIR/dist"
SSH_DIR="${HOME}/.ssh"
IDENTITY_FILE="${SSH_DIR}/id_ed25519_deploy"
SSH_OPTS=(-o BatchMode=yes -o StrictHostKeyChecking=accept-new)

echo "🚀 Deploying Skipper's Companion to $DOMAIN"

# Prefer Cursor / CI secret SSH_PRIVATE_KEY, else existing deploy key / default id
setup_ssh_identity() {
  mkdir -p "$SSH_DIR"
  chmod 700 "$SSH_DIR"

  if [[ -n "${SSH_PRIVATE_KEY:-}" ]]; then
    # Support both literal newlines and \n-escaped secrets
    printf '%s\n' "${SSH_PRIVATE_KEY//\\n/$'\n'}" >"$IDENTITY_FILE"
    chmod 600 "$IDENTITY_FILE"
    echo "🔑 Using SSH_PRIVATE_KEY from environment"
  elif [[ -f "$IDENTITY_FILE" ]]; then
    echo "🔑 Using existing $IDENTITY_FILE"
  elif [[ -f "${SSH_DIR}/id_ed25519" ]]; then
    IDENTITY_FILE="${SSH_DIR}/id_ed25519"
    echo "🔑 Using ${IDENTITY_FILE}"
  else
    echo "❌ No SSH key found." >&2
    echo "   Set Cloud Agent secret SSH_PRIVATE_KEY, or place a key at ~/.ssh/id_ed25519_deploy" >&2
    exit 1
  fi

  SSH_OPTS+=(-i "$IDENTITY_FILE" -o IdentitiesOnly=yes)
}

run_ssh() {
  ssh "${SSH_OPTS[@]}" "$HOST" "$@"
}

run_rsync() {
  rsync -avz --delete -e "ssh ${SSH_OPTS[*]}" "$@"
}

run_scp() {
  scp "${SSH_OPTS[@]}" "$@"
}

if [[ ! -d "$DIST" ]]; then
  echo "❌ dist/ is missing. Run 'npm run build' first." >&2
  exit 1
fi

setup_ssh_identity

echo "🔌 Testing SSH..."
run_ssh "echo 'SSH OK'"

echo "📁 Creating directories on server..."
run_ssh "mkdir -p '$REMOTE_ROOT' && chown -R www-data:www-data '$REMOTE_ROOT'"

echo "📤 Uploading files..."
if ! run_rsync "$DIST/" "$HOST:$REMOTE_ROOT/"; then
  echo "⚠️  rsync failed, falling back to tar+scp..."
  tar -czf /tmp/skipper-dist.tar.gz -C "$DIST" .
  run_scp /tmp/skipper-dist.tar.gz "$HOST:/tmp/skipper-dist.tar.gz"
  run_ssh "tar -xzf /tmp/skipper-dist.tar.gz -C '$REMOTE_ROOT' && rm /tmp/skipper-dist.tar.gz && chown -R www-data:www-data '$REMOTE_ROOT'"
fi

echo "⚙️  Uploading Nginx configuration..."
run_scp "$ROOT_DIR/deploy/skipper.nginx.conf" "$HOST:/etc/nginx/sites-available/skipper.p4e1.ru"

echo "🔗 Enabling site in Nginx..."
run_ssh "ln -sfn /etc/nginx/sites-available/skipper.p4e1.ru /etc/nginx/sites-enabled/skipper.p4e1.ru"

echo "✅ Testing Nginx configuration..."
run_ssh "nginx -t"

echo "🔄 Reloading Nginx..."
run_ssh "systemctl reload nginx"

echo "🔒 Checking SSL certificate..."
run_ssh "if [ ! -f /etc/letsencrypt/live/$DOMAIN/fullchain.pem ]; then
  echo '📜 Obtaining SSL certificate...'
  certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@p4e1.ru || true
else
  echo '✅ SSL certificate already exists'
fi"

echo "✨ Deployment complete!"
echo "🌐 Site available at: https://$DOMAIN"
