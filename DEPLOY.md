# 🚀 Инструкция по деплою Skipper's Companion

## Быстрый деплой

### Шаг 1: Добавьте SSH ключ на сервер

На вашем локальном компьютере:

```bash
# Добавьте этот публичный ключ на сервер
ssh root@155.212.141.54
echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDuif1TREhbjEmZ9aHLWTstk40IGjtDpWkfyhE0dM+A4 cursor-deploy@skippers-companion" >> ~/.ssh/authorized_keys
exit
```

### Шаг 2: Разверните приложение

Из этой директории:

```bash
# Уже собрано! Просто запустите деплой:
./deploy/deploy-skipper.sh
```

---

## Альтернатива: Ручной деплой

Если автоматический скрипт не работает:

### 1. Загрузите файлы на сервер

```bash
# Скопируйте dist/ на сервер
scp -r dist/* root@155.212.141.54:/var/www/skippers-companion/
```

### 2. Настройте Nginx

```bash
# Скопируйте конфиг
scp deploy/skipper.nginx.conf root@155.212.141.54:/etc/nginx/sites-available/skipper.p4e1.ru

# На сервере:
ssh root@155.212.141.54

# Включите сайт
ln -sf /etc/nginx/sites-available/skipper.p4e1.ru /etc/nginx/sites-enabled/

# Проверьте конфигурацию
nginx -t

# Перезагрузите Nginx
systemctl reload nginx
```

### 3. Получите SSL сертификат

```bash
# На сервере
certbot --nginx -d skipper.p4e1.ru --non-interactive --agree-tos --email admin@p4e1.ru
```

### 4. Проверьте сайт

Откройте https://skipper.p4e1.ru

---

## Структура на сервере

```
/var/www/skippers-companion/    # Файлы приложения
/etc/nginx/sites-available/skipper.p4e1.ru    # Nginx конфиг
/etc/nginx/sites-enabled/skipper.p4e1.ru      # Симлинк
/etc/letsencrypt/live/skipper.p4e1.ru/        # SSL сертификаты
```

---

## Обновление приложения

```bash
# Пересобрать
npm run build

# Загрузить
./deploy/deploy-skipper.sh
```

Или вручную:
```bash
rsync -avz --delete dist/ root@155.212.141.54:/var/www/skippers-companion/
```

---

## Проверка статуса

```bash
# Nginx
ssh root@155.212.141.54 "systemctl status nginx"

# Логи
ssh root@155.212.141.54 "tail -f /var/log/nginx/skipper.p4e1.ru.access.log"

# SSL сертификат
ssh root@155.212.141.54 "certbot certificates | grep skipper"
```

---

## Troubleshooting

### Nginx ошибки
```bash
# Проверить синтаксис
ssh root@155.212.141.54 "nginx -t"

# Посмотреть логи ошибок
ssh root@155.212.141.54 "tail -50 /var/log/nginx/error.log"
```

### SSL проблемы
```bash
# Обновить сертификат вручную
ssh root@155.212.141.54 "certbot renew --force-renewal"
```

### Права доступа
```bash
# Установить правильные права
ssh root@155.212.141.54 "chown -R www-data:www-data /var/www/skippers-companion"
```

---

## DNS настройки

Убедитесь, что A-запись для skipper.p4e1.ru указывает на 155.212.141.54

Проверка:
```bash
dig skipper.p4e1.ru +short
# Должно вывести: 155.212.141.54
```
