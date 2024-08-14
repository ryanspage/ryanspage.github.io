(function($) {
  "use strict"; // Start of use strict

  // Bootstrap 4 Breakpoints
  const breakpoint = {
    sm: 576,  // Small
    md: 768, // Medium
    lg: 992, // Large
    xl: 1200 // Extra Large
  };

  $(document).ready(function(){

    // Display initial gallery images
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
