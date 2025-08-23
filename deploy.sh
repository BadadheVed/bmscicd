#!/bin/bash
set -e

echo "🚀 Starting deployment..."

# Ensure Node.js PATH
export PATH=$HOME/.nvm/versions/node/v22.18.0/bin:$PATH

# Go to project directory
cd ~/bmscicd/

# Pull latest code
git pull

# Ensure pnpm exists
if ! command -v pnpm &> /dev/null
then
  echo "📦 pnpm not found. Installing..."
  npm install -g pnpm
else
  echo "✅ pnpm already installed at $(which pnpm)"
fi

# Install dependencies and build
pnpm install --frozen-lockfile
pnpm run build

# Restart services with PM2
pm2 restart "Frontend Next"
pm2 restart "WebSocket"
pm2 restart "http-server"

echo "✅ Deployment completed!"
