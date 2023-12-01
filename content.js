chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'increaseVolume') {
    var videos = document.querySelectorAll('video');

    videos.forEach(function (video) {
      if (!video.muted) {
        var newVolume = Math.min(video.volume + request.level, 1);
        video.volume = newVolume;
      }
    });
  } else if (request.action === 'muteAll') {
    var videos = document.querySelectorAll('video');

    videos.forEach(function (video) {
      video.muted = true;
    });
  }
});
