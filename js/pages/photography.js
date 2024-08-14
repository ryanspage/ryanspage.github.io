(function($) {
  "use strict"; // Start of use strict

  // Bootstrap 4 Breakpoints
  const breakpoint = {
    sm: 576,  // Small
    md: 768, // Medium
    lg: 992, // Large
    xl: 1200 // Extra Large
  };

  // Gallery file path and images
  const galleryPath = '/img/photography/';
  const galleryImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

  $(document).ready(function(){

    // Create gallery of images
    for (var i = 0; i < galleryImages.length; i++) {
      $("#gallery").append(
        '<div class=\"gallery-image col-12 col-md-6 col-lg-4 mb-4\" style=\"display:none\">' +
          '<div class=\"card shadow h-100\">' +
            '<div class=\"card-body p-2\">' +
              '<img src=\"' + galleryPath + galleryImages[i] + '\" class=\"card-img\" loading=\"lazy\">' +
            '</div>' +
          '</div>' +
        '</div>');
    }

    // Display first gallery images
    $(".gallery-image").slice(0, 6).show();
    showHideViewMore();

    // Display next gallery images
    $("#btn-view-more").on("click", function(e){
      e.preventDefault();
      $(".gallery-image:hidden").slice(0, 6).slideDown();
      showHideViewMore();
    });

  });

})(jQuery); // End of use strict

/* Set 'View More' button visibility */
function showHideViewMore() {
  if($(".gallery-image:hidden").length == 0) {
    $("#row-view-more").hide()
  }
  else {
    $("#row-view-more").show()
  }
}
