const config = require('../../config.json')
const { ipcRenderer } = require('electron')

module.exports = (target, userInfo = {}) => {

    let targets = {
        topics() {
            let data = {
                type: config.APP_BUNDLE_ID+".topics",
                userInfo
            }
            log(target, data)
            ipcRenderer.send('emmit-handoff', data)
        },
        about() {
            let data = {
                type: config.APP_BUNDLE_ID+".about",
                userInfo
            }
            log(target, data)
            ipcRenderer.send('emmit-handoff', data)
        }
    }

    if (Object.keys(targets).includes(target)) {
        targets[target]();
    }

}

function log(target, data) {

    console.groupCollapsed(`Emmit Handoff [${target}]`)
    console.log(data);
    console.groupEnd(`Emmit Handoff [${target}]`)
    
}
