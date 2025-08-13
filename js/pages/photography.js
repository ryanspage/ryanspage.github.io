(function($) {
  "use strict"; // Start of use strict

  // Bootstrap 4 Breakpoints
  const breakpoint = {
    sm: 576,  // Small
    md: 768, // Medium
    lg: 992, // Large
    xl: 1200 // Extra Large
  };

  // Get the URL gallery parameter
  const urlParams = new URLSearchParams(window.location.search);
  const galleryNum = urlParams.get('gallery');

  // Set the sidebar nav link active
  $("#gallery-nav-link-" + galleryNum).addClass("active");

  // Gallery file path and images
  let galleryPath = ''
  let galleryImages = []

  if (galleryNum == 1) {
    $("#galleryTitle").text("Yellowstone & Grand Teton 2024");
    galleryPath = '/img/photography/gallery1/';
    galleryImages = ['anemone_geyser.jpg', 'beehive_geyser_1.jpg', 'beehive_geyser_2.jpg', 'cascade_canyon_1.jpg', 'cascade_canyon_2.jpg',
                     'castle_geyser.jpg', 'chipmunk.jpg', 'chocolate_pots.jpg', 'fairy_falls_1.jpg', 'fairy_falls_2.jpg', 'grand_geyser.jpg',
                     'grand_prismatic_spring.jpg', 'grand_teton.jpg', 'imperial_geyser_1.jpg', 'imperial_geyser_2.jpg', 'jenny_lake.jpg',
                     'lake_solitude_1.jpg', 'lake_solitude_2.jpg', 'lion_geyser.jpg', 'lone_star_geyser.jpg', 'marmot_1.jpg', 'marmot_2.jpg',
                     'moose.jpg', 'norris_geyser_basin.jpg', 'old_faithful_1.jpg', 'old_faithful_2.jpg', 'old_faithful_3.jpg',
                     'old_faithful_4.jpg', 'old_faithful_5.jpg', 'old_faithful_inn.jpg', 'riverside_geyser.jpg', 'steamboat_geyser.jpg',
                     'white_dome_geyser.jpg', 'yellowstone_falls_1.jpg', 'yellowstone_falls_2.jpg', 'yellowstone_falls_3.jpg'];
  }
  else if (galleryNum == 2) {
    $("#galleryTitle").text("Mount Rainier & Olympic 2025");
    galleryPath = '/img/photography/gallery2/';
    galleryImages = ['lake_crescent.jpg', 'marymere_falls.jpg', 'mount_rainier_burroughs_1.jpg', 'mount_rainier_burroughs_2.jpg',
                     'mount_rainier_burroughs_3.jpg', 'mount_rainier_paradise.jpg', 'myrtle_falls.jpg', 'olympic_deer_1.jpg',
                     'olympic_deer_2.jpg', 'olympic_forest_1.jpg', 'olympic_forest_2.jpg', 'olympic_forest_3.jpg', 'olympic_marmot_1.jpg',
                     'olympic_marmot_2.jpg', 'olympic_wildflowers_1.jpg', 'olympic_wildflowers_2.jpg', 'olympic_wildflowers_3.jpg',
                     'paradise_inn.jpg', 'paradise_valley.jpg', 'rainier_marmot.jpg', 'seattle_queen_anne.jpg', 'space_needle.jpg',
                     'tatoosh_range.jpg', 'winthrop_glacier.jpg']
  }

  $(document).ready(function(){

    // Randomize gallery image order
    shuffle(galleryImages);

    // Create gallery of images
    for (var i = 0; i < galleryImages.length; i++) {
      $("#gallery").append(
        '<div class=\"gallery-image col-12 col-sm-6 col-lg-4 mb-4\" style=\"display:none\">' +
          '<div class=\"card shadow h-100\">' +
            '<div class=\"card-body p-2\">' +
              '<a href=\"' + galleryPath + galleryImages[i] + '\" data-toggle=\"lightbox\" data-gallery=\"gallery\" data-max-width=\"900\">' +
                '<img src=\"' + galleryPath + galleryImages[i] + '\" class=\"card-img\" loading=\"lazy\">' +
              '</a>' +
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

    // Open lightbox modal
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
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

/* Randomizes the order of items in an array */
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
