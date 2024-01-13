(function($) {
  "use strict"; // Start of use strict

  /* Toggle Weather Display - Show Huntsville & Hide Bloomington */
  $("#btn-location-huntsville").on('click', function (event) {
    $("#weather-bloomington").addClass("d-none");
    setTimeout(() => { $("#weather-huntsville").removeClass("d-none"); }, 100);
  });

  /* Toggle Weather Display - Show Bloomington & Hide Huntsville */
  $("#btn-location-bloomington").on('click', function (event) {
    $("#weather-huntsville").addClass("d-none");
    setTimeout(() => { $("#weather-bloomington").removeClass("d-none"); }, 100);
  });

})(jQuery); // End of use strict
