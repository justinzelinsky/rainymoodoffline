$(document).ready(function() {
    var on = false;
    var rainy = $('#rainy');

    function turnOn() {
        chrome.browserAction.setIcon({
            path: 'images/cloud.png'
        });
        rainy.trigger('play');
    }

    function turnOff() {
        chrome.browserAction.setIcon({
            path: "images/sun.png"
        });
        rainy.trigger('pause');
    }

    chrome.browserAction.setIcon({
        path: "images/sun.png"
    });

    chrome.browserAction.onClicked.addListener(function(tab) {
        if (on) {
            turnOff();
        } else {
            turnOn();
        }

        on = !on;
    });
});
