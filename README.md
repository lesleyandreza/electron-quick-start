# Electron Dummy Handoff App

This sample App demonstrates [Handoff](https://support.apple.com/en-us/HT204681) API usage.
Handoff can only work in a properly signed app, with a valid provisioning profile and entitlements.

# Get started

## Config

1. Clone this repo
1. Execute `npm install`
1. Duplicate `config-template.json` and rename it to `config.json`
1. Fill the `APP_BUNDLE_ID` and `TeamID` keys in the `config.json` file according to your [Apple Developer Account](https://developer.apple.com/)
1. Fill the `SIGN_IDENTITY` key according to your signing identity in `KeyChain Access` app, such as `Mac Developer: John Doe (BK2LD34S34)`
1. Add the development `.provisionprofile` file in `scripts/assets/` with the name `development.provisionprofile`

## Run

* Use `npm start` to start debug mode. Note: Handoff API will not work.
* Use `npm run pack` to generate a properly signed and provisioned App in which Handoff will work.
* You can observe Handoff working by allowing two compatible Mac devices which are signed into the same iCloud ID and have Handoff enabled in Preferences > General.
* Switching between tabs will use the `invalidateCurrentActivity` API to stop the previous user activity and broadcast a new one, or stopping broadcasting altogether in the `Any thing` tab which doesn't have an associated user activity.
* On the `topics` tab, the `update-activity-state` API is used to grab the latest data available from the `First name` field before a second device tries to continue it. If `event.preventDefault()` is not called, the Handoff continues as is. If it is called however, Electron will wait a call to `app.updateCurrentActivity()`, providing the updated data to the activity to be continued. If `app.updateCurrentActivity()` isn't called in a timely manner (1 second or less, depending on the devices being used, software version and or network/bluetooth conditions), the Handoff will fail and `continue-activity-error` will be called.

