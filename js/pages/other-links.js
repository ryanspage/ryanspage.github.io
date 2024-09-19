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

    const player = new Plyr(video, {
      // Default controls
      controls: [
        'play-large', // The large play button in the center
        //'restart', // Restart playback
        //'rewind', // Rewind by the seek time (default 10 seconds)
        'play', // Play/pause playback
        //'fast-forward', // Fast forward by the seek time (default 10 seconds)
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        //'duration', // The full duration of the media
        //'mute', // Toggle mute
        //'volume', // Volume control
        //'captions', // Toggle captions
        'settings', // Settings menu
        'pip', // Picture-in-picture (currently Safari only)
        //'airplay', // Airplay (currently Safari only)
        'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
        'fullscreen', // Toggle fullscreen
      ],
    });

    player.config.urls.download = 'https://nps.gov/yell/learn/photosmultimedia/webcams.htm';

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
