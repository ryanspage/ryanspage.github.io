(function($) {
  "use strict"; // Start of use strict

  // Bootstrap 4 Breakpoints
  const breakpoint = {
    sm: 576,  // Small
    md: 768, // Medium
    lg: 992, // Large
    xl: 1200 // Extra Large
  };

  // Randomize Slideshow Order
  shuffle(document.getElementsByClassName('plant-slide'));

  // Slideshow Configuration
  $(document).ready(function(){
    $('#plant-slideshow').slick({
      accessibility: false,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      draggable: true,
      infinite: true,
      initialSlide: 0,
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

/* Randomizes the order of a set of HTML elements */
function shuffle(elems) {
  allElems = (function(){
	var ret = [], l = elems.length;
	while (l--) { ret[ret.length] = elems[l]; }
	return ret;
    })();

    var shuffled = (function(){
        var l = allElems.length, ret = [];
        while (l--) {
            var random = Math.floor(Math.random() * allElems.length),
                randEl = allElems[random].cloneNode(true);
            allElems.splice(random, 1);
            ret[ret.length] = randEl;
        }
        return ret;
    })(), l = elems.length;

    while (l--) {
        elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
        elems[l].parentNode.removeChild(elems[l]);
    }
}
