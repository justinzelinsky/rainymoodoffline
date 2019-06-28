document.addEventListener('DOMContentLoaded', () => {
  const sun = {
    path: 'images/sun.png'
  };
  const cloud = {
    path: 'images/cloud.png'
  };
  let on = false;
  const rainy = document.getElementById('rainy');

  chrome.browserAction.setIcon(sun);

  chrome.browserAction.onClicked.addListener(() => {
    if (on) {
      chrome.browserAction.setIcon(sun);
      rainy.pause();
    } else {
      chrome.browserAction.setIcon(cloud);
      rainy.play();
    }
    on = !on;
  });
});
