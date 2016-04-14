var path = require('path');
var ipc = require('electron').ipcRenderer;

var notificationCount;

document.addEventListener('DOMContentLoaded', function() {
    //Wait for the Done Done iFrame to load
    document.getElementById("DoneDonePage").addEventListener("load", function(){
        //The element we want to observe and see if any changes were created
        var target = document.getElementById("DoneDonePage").contentDocument.getElementById("notification-count");

        updateDockBadge(target);

        //The items we want to observer to see if things changed
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };

        //Assign the observer to our DOM element
        var observer = new MutationObserver(function(mutations){
            mutations.forEach(function(mutation) {
                updateDockBadge(target);
            });
        });

        //Start the Observer
        observer.observe(target, config);
    });
});

function updateDockBadge(target){
    var count = parseInt(target.innerText);

    //set current number of notifications
    if(count > 0){
        notificationCount = count;
    }
    else{
        notificationCount = "";
    }

    //Send the call to the main process to update the badge icon
    ipc.send('update-dock-badge', notificationCount.toString());
}