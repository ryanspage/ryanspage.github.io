(function($) {
  "use strict"; // Start of use strict

  // Bootstrap 4 Breakpoints
  const breakpoint = {
    sm: 576,  // Small
    md: 768, // Medium
    lg: 992, // Large
    xl: 1200 // Extra Large
  };

  let startSlide = random(0, 5);

  // Slideshow Configuration
  $(document).ready(function(){
    $('#plant-slideshow').slick({
      accessibility: false,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      draggable: true,
      infinite: true,
      initialSlide: startSlide,
      mobileFirst: true,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      swipe: true,
      swipeToSlide: true,
      touchMove: true,

      responsive: [{
        breakpoint: breakpoint.lg,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });

})(jQuery); // End of use strict

/* Return random integer between min and max (inclusive) */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
