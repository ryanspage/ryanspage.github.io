(function($) {
  "use strict"; // Start of use strict

  /* Image Carousel */
  $('#plantCarousel').carousel({
    interval: 5000
  })

  initializeCarouselDisplay();

})(jQuery); // End of use strict

function initializeCarouselDisplay() {
  $('.carousel .carousel-item.plant-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<minPerSlide;i++) {
      next=next.next();
      if (!next.length) {
      	next = $(this).siblings(':first');
    	}

      next.children(':first-child').clone().appendTo($(this));
    }
  });
}
