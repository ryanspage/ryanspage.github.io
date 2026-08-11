(function($) {
  "use strict"; // Start of use strict

  /* Collapse Weather Location Selection Dropdown on Close */
  $('#dropdown-wx-locations').on('hidden.bs.dropdown', function (event) {
    $('#btn-location-big-bend').addClass('d-none');
    $('#btn-location-yellowstone').addClass('d-none');
    $('#btn-location-reykjavik').addClass('d-none');
    if (!$('#btn-location-huntsville').hasClass('active') && !$('#btn-location-bloomington').hasClass('active')) {
      $('#btn-show-all-locations').addClass('active').removeClass('d-none');
    }
    else {
      $('#btn-show-all-locations').removeClass('d-none active');
    }
  });

  /* Display All Weather Location Selection Buttons */
  $('#btn-show-all-locations').on('click', function (event) {
	  $(this).addClass('d-none');
    $('#btn-location-big-bend').removeClass('d-none');
	  $('#btn-location-yellowstone').removeClass('d-none');
	  $('#btn-location-reykjavik').removeClass('d-none');
  });

  /* Toggle Weather Display - Show Huntsville & Hide Other Locations */
  $("#btn-location-huntsville").on('click', function (event) {
    $("#weather-bloomington").addClass("d-none");
    $("#weather-big-bend").addClass("d-none");
    $("#weather-yellowstone").addClass("d-none");
    $("#weather-reykjavik").addClass("d-none");
    setTimeout(() => { $("#weather-huntsville").removeClass("d-none"); }, 100);
  });

  /* Toggle Weather Display - Show Bloomington & Hide Other Locations */
  $("#btn-location-bloomington").on('click', function (event) {
    $("#weather-huntsville").addClass("d-none");
    $("#weather-big-bend").addClass("d-none");
    $("#weather-yellowstone").addClass("d-none");
    $("#weather-reykjavik").addClass("d-none");
    setTimeout(() => { $("#weather-bloomington").removeClass("d-none"); }, 100);
  });

  /* Toggle Weather Display - Show Big Bend & Hide Other Locations */
  $("#btn-location-big-bend").on('click', function (event) {
    $("#weather-huntsville").addClass("d-none");
    $("#weather-bloomington").addClass("d-none");
    $("#weather-yellowstone").addClass("d-none");
    $("#weather-reykjavik").addClass("d-none");
    setTimeout(() => { $("#weather-big-bend").removeClass("d-none"); }, 100);
  });

  /* Toggle Weather Display - Show Yellowstone & Hide Other Locations */
  $("#btn-location-yellowstone").on('click', function (event) {
    $("#weather-huntsville").addClass("d-none");
    $("#weather-bloomington").addClass("d-none");
    $("#weather-big-bend").addClass("d-none");
    $("#weather-reykjavik").addClass("d-none");
    setTimeout(() => { $("#weather-yellowstone").removeClass("d-none"); }, 100);
  });

  /* Toggle Weather Display - Show Reykjavík & Hide Other Locations */
  $("#btn-location-reykjavik").on('click', function (event) {
    $("#weather-huntsville").addClass("d-none");
    $("#weather-bloomington").addClass("d-none");
    $("#weather-big-bend").addClass("d-none");
    $("#weather-yellowstone").addClass("d-none");
    setTimeout(() => { $("#weather-reykjavik").removeClass("d-none"); }, 100);
  });

})(jQuery); // End of use strict
