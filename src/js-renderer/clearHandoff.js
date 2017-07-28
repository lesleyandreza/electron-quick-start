const { ipcRenderer } = require('electron')

module.exports = () => {

    console.log('clear handoff');
    ipcRenderer.send('clear-handoff', {})

}