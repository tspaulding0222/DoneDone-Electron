var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('electron').ipcMain;
var mainWindow = null;

//When the app is ready then start
app.on('ready', function(){
    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin'){
        app.quit();
    }
});

app.on('activate-with-no-open-windows', function () {
    if (process.platform == 'darwin'){
        createWindow();
    }
});

//Listens for call from Renderer Thread to update the dock badge icon
ipc.on('update-dock-badge', function(event, arg){
    updateDockBadge(arg)
});

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1201, height: 600
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
}
 
function updateDockBadge(number){
    if(number >= 100){
        app.dock.setBadge(".");
    }
    else{
        app.dock.setBadge(number);
    }
}