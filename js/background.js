document.addEventListener('DOMContentLoaded', function(event) {
    let on = false;
    const rainy = document.getElementById('rainy');

    chrome.browserAction.setIcon({path: 'images/sun.png'});

    chrome.browserAction.onClicked.addListener(function(tab) {
        if (on) {
            chrome.browserAction.setIcon({path: 'images/sun.png'});
            rainy.pause();
        } else {
            chrome.browserAction.setIcon({path: 'images/cloud.png'});
            rainy.play();
        }
        on = !on;
    });

});
