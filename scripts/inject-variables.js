const fse = require('fs-extra')
const plist = require('plist')

let config = fse.readJsonSync('./config.json')
let infoPlistFile = fse.readFileSync('./scripts/assets/info.plist.model', 'utf8')
let masEntitlementsFile = fse.readFileSync('./scripts/assets/mas.entitlements.model', 'utf8')

/**
 * Inject data into info.plist
 */

let infoPlist = plist.parse(infoPlistFile)

infoPlist.ElectronTeamID = config.TeamID
infoPlist.CFBundleURLTypes[0].CFBundleURLSchemes[0] = config.APP_NAME
infoPlist.CFBundleURLTypes[0].CFBundleURLName = config.APP_PRODUCT_NAME
infoPlist.NSUserActivityTypes = []
config.USER_ACTIVITY_TYPES.forEach((type) => {
    infoPlist.NSUserActivityTypes.push(type)
})

let plistBuilt = plist.build(infoPlist)

fse.outputFile('./scripts/assets/info.plist', plistBuilt)
.then(() => {
  console.log('Write info.plist with success!')
})
.catch(err => {
  console.error('Error to write info.plist ' + err)
})

/**
 * Inject data into mas.entitlements
 */

let masEntitlements = plist.parse(masEntitlementsFile)

masEntitlements['com.apple.developer.team-identifier'] = config.TeamID
masEntitlements['com.apple.security.application-groups'] = `${config.TeamID}.${config.APP_BUNDLE_ID}`

let masEntitlementsBuilt = plist.build(masEntitlements)

fse.outputFile('./scripts/assets/mas.entitlements', masEntitlementsBuilt, 'utf8')
.then(() => {
  console.log('Write mas.entitlements with success!')
})
.catch(err => {
  console.error('Error to write mas.entitlements ' + err)
})
