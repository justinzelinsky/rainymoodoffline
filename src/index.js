const rainAudio = document.createElement('audio');
rainAudio.src = chrome.runtime.getURL('src/assets/audio/RainyMood.m4a');
rainAudio.loop = 'true';

document.body.appendChild(rainAudio);

const sun = {
  icon: {
    path: chrome.runtime.getURL('src/assets/images/sun.png')
  },
  title: {
    title: "It's a beautiful day!"
  }
};
const rain = {
  icon: {
    path: chrome.runtime.getURL('src/assets/images/cloud.png')
  },
  title: {
    title: 'A little rain never hurt anyone :)'
  }
};

chrome.browserAction.setIcon(sun.icon);

let isRaining = false;

chrome.browserAction.onClicked.addListener(function() {
  if (isRaining) {
    rainAudio.pause();
    chrome.browserAction.setIcon(sun.icon);
    chrome.browserAction.setTitle(sun.title);
  } else {
    rainAudio.play();
    chrome.browserAction.setIcon(rain.icon);
    chrome.browserAction.setTitle(rain.title);
  }
  isRaining = !isRaining;
});
