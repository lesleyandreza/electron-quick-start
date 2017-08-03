const chalk = require('chalk')
const highlight = require('cli-highlight').highlight
const windowStateKeeper = require('electron-window-state');
const electron = require('electron')
const { ipcMain, app, BrowserWindow } = electron

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const _promiseContinueActivity = () => {
  return new Promise((resolve, reject) => {

    let _bridgeServerIsLoaded = undefined;
    let _count = 0

    let _timer = setInterval(() => {
      if (mainWindow) {
        clearInterval(_timer)
        resolve(mainWindow)
      }
      if (_count > 20) {
        clearInterval(_timer)
      }
      _count++
    }, 500)

  })
}

ipcMain.on('emmit-handoff', (event, arg) => {

  console.log(chalk.green('⬆️  Emmit Handoff:'))
  console.log(highlight(JSON.stringify(arg, null, 2), { language: 'json' }))
  let { type, userInfo } = arg;
  app.setUserActivity(type, userInfo);

})

ipcMain.on('clear-handoff', (event) => {

  console.log(chalk.red('❌  Clear Handoff'))
  app.invalidateCurrentActivity();

})

function createWindow() {

  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });

  // Create the browser window.
  mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    minHeight: 460,
    minWidth: 800,
  })

  mainWindowState.manage(mainWindow);

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../../src/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('continue-activity', function (a, b, c) {

  _promiseContinueActivity().then((mainWindow) => {
    mainWindow.webContents.send('continue-activity', { a, b, c })
  })

})

app.on('will-continue-activity', function (a, b, c) {

  _promiseContinueActivity().then((mainWindow) => {
    mainWindow.webContents.send('will-continue-activity', { a, b, c });
  })

})

app.on('continue-activity-error', function (a, b, c) {

  _promiseContinueActivity().then((mainWindow) => {
    mainWindow.webContents.send('continue-activity-error', { a, b, c });
  })

})

app.on('activity-continued', function (a, b, c) {

  _promiseContinueActivity().then((mainWindow) => {
    mainWindow.webContents.send('activity-continued', { a, b, c });
  })

})

