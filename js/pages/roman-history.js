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
  let slideshowPath = '/img/roman-history/roman-coins/';
  let slideshowImages = [['litra_1.jpg', 'Roman Republic (269 BC)'],
                         ['semuncia_1.jpg', 'Roman Republic (215-212 BC)'],
                         ['furia_1.jpg', 'Roman Republic (84 BC)'],
                         ['lollia_1.jpg', 'Roman Republic (45 BC)'],
                         ['tiberius_1.jpg', 'Tiberius (14-37 AD)'],
                         ['claudius_2.jpg', 'Claudius (41-54 AD)'],
                         ['claudius_3.jpg', 'Claudius (41-54 AD)'],
                         ['vespasian_1.jpg', 'Vespasian (69-79 AD)'],
                         ['domitian_1.jpg', 'Domitian (81-96 AD)'],
                         ['trajan_2.jpg', 'Trajan (98-117 AD)'],
                         ['trajan_3.jpg', 'Trajan (98-117 AD)'],
                         ['trajan_5.jpg', 'Trajan (98-117 AD)'],
                         ['hadrian_1.jpg', 'Hadrian (117-138 AD)'],
                         ['septimius_severus_2.jpg', 'Septimius Severus (193-211 AD)'],
                         ['caracalla_1.jpg', 'Caracalla (198-217 AD)'],
                         ['maximinus_thrax_1.jpg', 'Maximinus Thrax (235-238 AD)'],
                         ['gordian_3_2.jpg', 'Gordian III (238-244 AD)'],
                         ['aurelian_2.jpg', 'Aurelian (270-275 AD)'],
                         ['aurelian_3.jpg', 'Aurelian (270-275 AD)'],
                         ['aurelian_6.jpg', 'Aurelian (270-275 AD)'],
                         ['aurelian_8.jpg', 'Aurelian (270-275 AD)'],
                         ['probus_1.jpg', 'Probus (276-282 AD)'],
                         ['probus_3.jpg', 'Probus (276-282 AD)'],
                         ['probus_4.jpg', 'Probus (276-282 AD)'],
                         ['carus_1.jpg', 'Carus (282-283 AD)'],
                         ['constantine_1_2.jpg', 'Constantine I (306-337 AD)'],
                         ['constantine_1_3.jpg', 'Constantine I (306-337 AD)'],
                         ['constan_1.jpg', 'Constantinopolis (330-346 AD)'],
                         ['urbs_roma_2.jpg', 'Urbs Roma (330-346 AD)'],
                         ['constantius_2_1.jpg', 'Constantius II (337-361 AD)'],
                         ['constantius_2_2.jpg', 'Constantius II (337-361 AD)'],
                         ['valens_2.jpg', 'Valens (364-378 AD)'],
                         ['valens_3.jpg', 'Valens (364-378 AD)'],
                         ['arcadius_1.jpg', 'Arcadius (383-408 AD)'],
                         ['arcadius_2.jpg', 'Arcadius (383-408 AD)'],
                         ['honorius_1.jpg', 'Honorius (393-423 AD)']]

  $(document).ready(function(){

    // Randomize slideshow order
    shuffle(slideshowImages);

    // Create image slides with captions
    for (var i = 0; i < slideshowImages.length; i++) {
      $("#coin-slideshow").append(
        '<div class=\"coin-slide col px-0\">' +
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
    $('#coin-slideshow').slick({
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
      touchMove: true
    });

    // Resize slideshow at initial load to ensure correct display
    // (Right margin issue on very large screen sizes)
    setTimeout(() => {window.dispatchEvent(new Event('resize')); }, 150);

  });

  // Resize slideshow when sidebar toggled to prevent display cutoff
  $('#sidebarToggle, #sidebarToggleTop').on("click", function() {
    $('#coin-slideshow').slick('setPosition');
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
