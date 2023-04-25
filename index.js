// Get the video element
const video = document.querySelector('#video-container iframe');

// Play the video
video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

// Add an event listener for when the video ends
video.addEventListener('ended', () => {
  console.log('Video ended');
});
