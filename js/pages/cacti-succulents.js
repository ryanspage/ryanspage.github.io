(function($) {
  "use strict"; // Start of use strict

  // Bootstrap 4 Breakpoints
  const breakpoint = {
    sm: 576,  // Small
    md: 768, // Medium
    lg: 992, // Large
    xl: 1200 // Extra Large
  };

  // Slideshow file path and images
  let slideshowPath = '/img/cacti-succulents/';
  let slideshowImages = [['agave_potatorum.jpg', 'Agave potatorum'],
                         ['astrophytum_capricorne_1.jpg', 'Astrophytum capricorne'],
                         ['astrophytum_capricorne_2.jpg', 'Astrophytum capricorne'],
                         ['echinocereus_davisii_1.jpg', 'Echinocereus davisii'],
                         ['echinocereus_davisii_2.jpg', 'Echinocereus davisii'],
                         ['echinocereus_reichenbachii_1.jpg', 'Echinocereus reichenbachii'],
                         ['echinocereus_reichenbachii_2.jpg', 'Echinocereus reichenbachii'],
                         ['echinopsis_subdenudata_1.jpg', 'Echinopsis subdenudata'],
                         ['echinopsis_subdenudata_2.jpg', 'Echinopsis subdenudata'],
                         ['euphorbia_milii.jpg', 'Euphorbia milii'],
                         ['gymnocalycium_baldianum.jpg', 'Gymnocalycium baldianum'],
                         ['gymnocalycium_bruchii_1.jpg', 'Gymnocalycium bruchii'],
                         ['gymnocalycium_bruchii_2.jpg', 'Gymnocalycium bruchii'],
                         ['gymnocalycium_friedrichii.jpg', 'Gymnocalycium friedrichii'],
                         ['gymnocalycium_piricarpum.jpg', 'Gymnocalycium piricarpum'],
                         ['gymnocalycium_ragonesei.jpg', 'Gymnocalycium ragonesei'],
                         ['gymnocalycium_saglionis.jpg', 'Gymnocalycium saglionis'],
                         ['lithops_aucampiae.jpg', 'Lithops aucampiae'],
                         ['lithops_dorotheae.jpg', 'Lithops dorotheae'],
                         ['lithops_karasmontana.jpg', 'Lithops karasmontana'],
                         ['lithops_lesliei.jpg', 'Lithops lesliei'],
                         ['lithops_pseudotruncatella.jpg', 'Lithops pseudotruncatella'],
                         ['mammillaria_bocasana.jpg', 'Mammillaria bocasana'],
                         ['mammillaria_guelzowiana_1.jpg', 'Mammillaria guelzowiana'],
                         ['mammillaria_guelzowiana_2.jpg', 'Mammillaria guelzowiana'],
                         ['mammillaria_hahniana_1.jpg', 'Mammillaria hahniana'],
                         ['mammillaria_hahniana_2.jpg', 'Mammillaria hahniana'],
                         ['oreocereus_celsianus.jpg', 'Oreocereus celsianus'],
                         ['parodia_werneri_1.jpg', 'Parodia werneri'],
                         ['parodia_werneri_2.jpg', 'Parodia werneri'],
                         ['rebutia_albipilosa_1.jpg', 'Rebutia albipilosa'],
                         ['rebutia_albipilosa_2.jpg', 'Rebutia albipilosa'],
                         ['rebutia_krainziana.jpg', 'Rebutia krainziana'],
                         ['rebutia_narvaecensis.jpg', 'Rebutia narvaecensis'],
                         ['setiechinopsis_mirabilis_1.jpg', 'Setiechinopsis mirabilis'],
                         ['setiechinopsis_mirabilis_2.jpg', 'Setiechinopsis mirabilis']]

  $(document).ready(function(){

    // Randomize slideshow order
    shuffle(slideshowImages);

    // Create image slides with captions
    for (var i = 0; i < slideshowImages.length; i++) {
      $("#plant-slideshow").append(
        '<div class=\"plant-slide col px-1\">' +
          '<div class=\"card\">' +
          	'<img data-lazy=\"' + slideshowPath + slideshowImages[i][0] + '\" class=\"card-img\">' +
          	'<div class=\"card-header mt-0 p-1\">' +
          	  '<p class=\"card-text image-caption font-italic text-body\">' + slideshowImages[i][1] + '</p>' +
          	'</div>' +
          '</div>' +
        '</div>'
      );
    }

    // Slideshow Configuration
    $('#plant-slideshow').slick({
      accessibility: false,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      draggable: true,
      infinite: true,
      initialSlide: 0,
      lazyLoad: 'progressive',
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

    // Resize slideshow at initial load to ensure correct display
    // (Right margin issue on very large screen sizes)
    setTimeout(() => {window.dispatchEvent(new Event('resize')); }, 150);

  });

  // Resize slideshow when sidebar toggled to prevent display cutoff
  $('#sidebarToggle, #sidebarToggleTop').on("click", function() {
    $('#plant-slideshow').slick('setPosition');
  });

})(jQuery); // End of use strict

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
