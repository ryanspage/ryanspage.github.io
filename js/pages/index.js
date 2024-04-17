(function($) {
  "use strict"; // Start of use strict

  /* Toggle Weather Display - Show Huntsville & Hide Other Locations */
  $("#btn-location-huntsville").on('click', function (event) {
    $("#weather-big-bend").addClass("d-none");
    $("#weather-bloomington").addClass("d-none");
    setTimeout(() => { $("#weather-huntsville").removeClass("d-none"); }, 100);
  });

  /* Toggle Weather Display - Show Big Bend & Hide Other Locations */
  $("#btn-location-big-bend").on('click', function (event) {
    $("#weather-huntsville").addClass("d-none");
    $("#weather-bloomington").addClass("d-none");
    setTimeout(() => { $("#weather-big-bend").removeClass("d-none"); }, 100);
  });

  /* Toggle Weather Display - Show Bloomington & Hide Other Locations */
  $("#btn-location-bloomington").on('click', function (event) {
    $("#weather-huntsville").addClass("d-none");
    $("#weather-big-bend").addClass("d-none");
    setTimeout(() => { $("#weather-bloomington").removeClass("d-none"); }, 100);
  });

})(jQuery); // End of use strict
