#!/bin/bash

source ./scripts/setting-env.sh

set -ex

electron-packager . \
  "$APP_PRODUCT_NAME" \
  --overwrite \
  --platform=mas \
  --out=releases/mas-dev \
  --ignore="scripts" \
  --electron-version="$ELECTRON_VERSION"\
  --arch=x64 \
  --asar.unpack=protocol-link.html \
  --app-bundle-id="$APP_BUNDLE_ID" \
  --osx-sign.type=development \
  --osx-sign.identity="$SIGN_IDENTITY" \
  --osx-sign.entitlements="scripts/assets/mas.entitlements" \
  --osx-sign.provisioning-profile="scripts/assets/development.provisionprofile" \
  --app-version="$npm_package_version" \
  --build-version="100" \
  --prune=true \
  --extend-info="scripts/assets/info.plist"
