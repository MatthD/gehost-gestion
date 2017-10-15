'use strict';

const {app, BrowserWindow} = require('electron'),
  path = require('path'),
  url = require('url');

let win;

// When electron is ready to start, just create a beautiful window
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

/*
* This function create the electron chrome window
*/
function createWindow () {
  win = new BrowserWindow({
    width: 1366,
    height: 768,
    icon: path.join(__dirname, 'public/img/hotel.png')
  });
  console.log(path.join(__dirname, 'index.html'))
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}