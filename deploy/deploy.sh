#!/usr/bin/env bash
set -euo pipefail

HOST="${DEPLOY_HOST:-root@155.212.141.54}"
REMOTE_ROOT="/var/www/vhf-helper"
DOMAIN="vhf.p4e1.ru"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT_DIR/dist"

if [[ ! -d "$DIST" ]]; then
  echo "dist/ is missing. Run npm run build first." >&2
  exit 1
fi

ssh "$HOST" "mkdir -p '$REMOTE_ROOT'"
rsync -avz --delete "$DIST/" "$HOST:$REMOTE_ROOT/"

scp "$ROOT_DIR/deploy/vhf-helper.nginx.conf" "$HOST:/etc/nginx/sites-available/vhf-helper"
if ! ssh "$HOST" "test -f /etc/letsencrypt/live/$DOMAIN/fullchain.pem && nginx -t"; then
  scp "$ROOT_DIR/deploy/vhf-helper.http.nginx.conf" "$HOST:/etc/nginx/sites-available/vhf-helper"
fi

ssh "$HOST" "ln -sfn /etc/nginx/sites-available/vhf-helper /etc/nginx/sites-enabled/vhf-helper && nginx -t && systemctl reload nginx"

if ssh "$HOST" "test -f /etc/letsencrypt/live/$DOMAIN/fullchain.pem"; then
  echo "Deployed https://$DOMAIN"
  exit 0
fi

if ssh "$HOST" "certbot certonly --webroot -w '$REMOTE_ROOT' -d '$DOMAIN' --non-interactive --agree-tos --keep-until-expiring --register-unsafely-without-email"; then
  scp "$ROOT_DIR/deploy/vhf-helper.nginx.conf" "$HOST:/etc/nginx/sites-available/vhf-helper"
  ssh "$HOST" "nginx -t && systemctl reload nginx"
  echo "Deployed https://$DOMAIN"
else
  echo "HTTPS certificate was not issued."
  echo "Add an A-record at reg.ru: $DOMAIN -> 155.212.141.54"
  echo "Then rerun: npm run deploy"
fi
