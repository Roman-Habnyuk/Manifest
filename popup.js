document.addEventListener('DOMContentLoaded', () => {
  const increaseVolumeButton = document.getElementById('increaseVolume');
  const muteAllButton = document.getElementById('muteAll');
  const volumeLevelInput = document.getElementById('volumeLevel');

  const sendMessageToActiveTab = (message) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  };

  increaseVolumeButton.addEventListener('click', () => {
    const level = parseFloat(volumeLevelInput.value);
    sendMessageToActiveTab({ action: 'increaseVolume', level });
  });

  muteAllButton.addEventListener('click', () => {
    sendMessageToActiveTab({ action: 'muteAll' });
  });
});
