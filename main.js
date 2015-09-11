var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl('http://feedhop.io');
  // DevTools.
  // mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});