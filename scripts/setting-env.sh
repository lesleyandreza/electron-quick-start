#!/bin/bash

PATH_TO_JSON='./config.json'

export APP_NAME=$(node -pe 'JSON.parse(process.argv[1]).APP_NAME' "$(cat $PATH_TO_JSON)");
export APP_PRODUCT_NAME=$(node -pe 'JSON.parse(process.argv[1]).APP_PRODUCT_NAME' "$(cat $PATH_TO_JSON)");
export APP_BUNDLE_ID=$(node -pe 'JSON.parse(process.argv[1]).APP_BUNDLE_ID' "$(cat $PATH_TO_JSON)");
export TeamID=$(node -pe 'JSON.parse(process.argv[1]).TeamID' "$(cat $PATH_TO_JSON)");
export SIGN_IDENTITY=$(node -pe 'JSON.parse(process.argv[1]).SIGN_IDENTITY' "$(cat $PATH_TO_JSON)");
export ELECTRON_VERSION=$(node -pe 'JSON.parse(process.argv[1]).ELECTRON_VERSION' "$(cat $PATH_TO_JSON)");
export VERSION_NAME=$(node -pe 'JSON.parse(process.argv[1]).VERSION_NAME' "$(cat $PATH_TO_JSON)");
