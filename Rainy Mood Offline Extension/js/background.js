$(document).ready(function() {
    var on = false;
    var rainy = document.getElementById("rainy");

    function turnon() {
        chrome.browserAction.setIcon({
            path: "images/cloud.png"
        });
        rainy.play();
    }

    function turnoff() {
        chrome.browserAction.setIcon({
            path: "images/sun.png"
        });
        rainy.pause();
    }

    chrome.browserAction.setIcon({
        path: "images/sun.png"
    });

    chrome.browserAction.onClicked.addListener(function(tab) {
        if (on) {
            turnoff();
        } else {
            turnon();
        }

        on = !on;
    });
})