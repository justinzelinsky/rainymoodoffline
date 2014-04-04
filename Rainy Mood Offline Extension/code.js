var on = false;

function turnon() {
	chrome.browserAction.setIcon({path: "images/cloud.png"});
  document.getElementById('audio_id').play();
}

function turnoff() {
  chrome.browserAction.setIcon({path: "images/sun.png"});
  document.getElementById('audio_id').pause();
}
chrome.browserAction.setIcon({path: "images/sun.png"});

chrome.browserAction.onClicked.addListener(function(tab) {
  if(on) {
    turnoff();
  } else {
    turnon();
  }

  on = !on;
});