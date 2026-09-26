#!/bin/sh
# Copy the public files into dist/ and deploy to Cloudflare (max.impossible.rocks).
set -e
cd "$(dirname "$0")"
rm -rf dist
mkdir -p dist
cp index.html styles.css main.js dist/
cp -R assets dist/assets
npx -y wrangler@4 deploy
