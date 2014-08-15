var on = false;

function turnon() {
    chrome.browserAction.setIcon({
        path: "images/cloud.png"
    });
    document.getElementById('rainy').play();
}

function turnoff() {
    chrome.browserAction.setIcon({
        path: "images/sun.png"
    });
    document.getElementById('rainy').pause();
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