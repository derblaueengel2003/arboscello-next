#!/usr/bin/env bash

REMOTE_USER="angarbos"
REMOTE_HOST="arboscello"
REMOTE_PATH="/var/www/arboscello.com/public_html"
LOCAL_PATH="$(pwd)/out"

echo "Building Next.js static site..."
npm run build

echo "Deploy from $LOCAL_PATH to $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"
rsync -avz --delete \
  "$LOCAL_PATH"/ \
  "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"
