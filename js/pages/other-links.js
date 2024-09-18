(function($) {
  "use strict"; // Start of use strict

  // Bootstrap 4 Breakpoints
  const breakpoint = {
    sm: 576,  // Small
    md: 768, // Medium
    lg: 992, // Large
    xl: 1200 // Extra Large
  };

  // Start Old Faithful live-stream webcam when modal opened
  $("#oldFaithfulModal").on('show.bs.modal', function (event) {
    const source = 'https://cs8.pixelcaster.com/nps/faithful.stream/chunks.m3u8';
    const video = document.querySelector('#oldFaithfulVideo');
    const player = new Plyr(video);
    loadVideo(source, video, player);
  });

 // Close Old Faithful live-stream webcam when modal closed
  $("#oldFaithfulModal").on('hidden.bs.modal', function (event) {
    destroyVideo();
  });

})(jQuery); // End of use strict

/* Load video source and begin autoplay */
function loadVideo(source, video, player) {
  if (!Hls.isSupported()) {
    video.src = source;
  } else {
    const hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(video);
    window.hls = hls;
  }

  window.player = player;
  window.player.play();
}
 /* Close and destroy video player and source */
function destroyVideo() {
  window.player.destroy();
  window.hls.destroy();
}
