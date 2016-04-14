var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('electron').ipcMain;

//When the app is ready then start
app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        width: 1201, height: 600
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
});

//Listens for call from Renderer Thread to update the dock badge icon
ipc.on('update-dock-badge', function(event, arg){
    updateDockBadge(arg)
});

function updateDockBadge(number){
    if(number >= 100){
        app.dock.setBadge(".");
    }
    else{
        app.dock.setBadge(number);
    }
}