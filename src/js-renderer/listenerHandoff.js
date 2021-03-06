const { ipcRenderer } = require('electron')
const config = require('../../config.json')

module.exports = function () {

    ipcRenderer.on('continue-activity', (event, obj) => {
        let { a, b, c } = obj
        console.groupCollapsed('[HANDOFF] continue-activity')
        console.log(a)
        console.log(b)
        console.log(c)
        console.groupEnd('[HANDOFF] continue-activity')
    })

    ipcRenderer.on('will-continue-activity', (event, obj) => {
        let { a, b, c } = obj
        console.groupCollapsed('[HANDOFF] will-continue-activity')
        console.log(a)
        console.log(b)
        console.log(c)
        console.groupEnd('[HANDOFF] will-continue-activity')
    })

    ipcRenderer.on('continue-activity-error', (event, obj) => {
        let { a, b, c } = obj
        console.groupCollapsed('[HANDOFF] continue-activity-error')
        console.log(a)
        console.log(b)
        console.log(c)
        console.groupEnd('[HANDOFF] continue-activity-error')
    })

    ipcRenderer.on('activity-was-continued', (event, obj) => {
        let { a, b, c } = obj
        console.groupCollapsed('[HANDOFF] activity-was-continued')
        console.log(a)
        console.log(b)
        console.log(c)
        console.groupEnd('[HANDOFF] activity-was-continued')
    })

    ipcRenderer.on('update-activity-state', (event, obj) => {
        let { a, b, c } = obj
        console.groupCollapsed('[HANDOFF] update-activity-state')
        console.log(a)
        console.log(b)
        console.log(c)
        console.groupEnd('[HANDOFF] update-activity-state')

        let objTest = {
            type: config.APP_BUNDLE_ID + ".topics",
            userInfo: {
                firstName: document.getElementById('first-name').value
            }
        }

        ipcRenderer.send('update-activity', objTest)

        console.groupCollapsed('[HANDOFF] update-activity')
        console.log(objTest)
        console.groupEnd('[HANDOFF] update-activity')

})

}
