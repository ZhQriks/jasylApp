const {app, BrowserWindow} = require('electron')

const url = require("url");
const path = require("path");

let mainWindow;
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 360,
    height: 640,
    backgroundColor: '#ffffff',

  })
}
mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
mainWindow.on('closed', function (){
  mainWindow = null;
})
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
