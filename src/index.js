document.addEventListener('DOMContentLoaded', () => {
  const rainy = document.getElementById('rainy');

  const sun = {
    path: 'assets/images/sun.png'
  };

  const cloud = {
    path: 'assets/images/cloud.png'
  };

  let on = false;

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
