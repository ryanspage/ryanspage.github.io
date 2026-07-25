(function($) {
  "use strict"; // Start of use strict

  // Bootstrap 4 Breakpoints
  const breakpoint = {
    sm: 576,  // Small
    md: 768, // Medium
    lg: 992, // Large
    xl: 1200 // Extra Large
  };

  $('#btn-past-trips').on('click', function () {
    var $btn = $(this);
    var $sections = $('.section-item');

    // Filter sections that do not currently have the 'show' class
    var $hiddenSections = $sections.not('.show');

    if ($hiddenSections.length > 0) {
      // Select the first hidden section and trigger Bootstrap 4 collapse
      $hiddenSections.first().collapse('show');

      // If that was the last hidden section, change text to "Hide"
      if ($hiddenSections.length === 1) {
        $btn.text("Hide Past Trips");
      }
    } else {
      // If all are shown, collapse everything using jQuery
      $sections.collapse('hide');

      // Reset button text back to original
      $btn.text("View Past Trips");
    }
  });

})(jQuery); // End of use strict
