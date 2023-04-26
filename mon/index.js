// Get the video element
const video = document.querySelector('#video-container iframe');

// Play the video
video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

// Add an event listener for when the video ends
video.addEventListener('ended', () => {
  console.log('Video ended');
});
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top-btn').fadeIn();
    } else {
      $('#back-to-top-btn').fadeOut();
    }
  });

  $('#back-to-top-btn').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});