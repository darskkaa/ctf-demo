#!/bin/bash
hostname target-01

cat > /etc/motd << 'MOTD'
FGCU Internal Network | target-01
Last login: Mon Apr 28 03:12:44 2026 from 10.0.0.12
WARNING: all sessions are logged and monitored.
MOTD

mkdir -p /home/admin
cat > /home/admin/notes.txt << 'NOTE'
moved the listener off the default port.
running on 8888 now. token auth is on.
token is saved in the backup config.
NOTE

cat > /etc/backup.conf << 'CONF'
# system backup config
schedule=daily
target=/var/backups
token=open_sesame
CONF

python3 /flag_server.py &
ttyd --port "${PORT:-8080}" --writable bash
