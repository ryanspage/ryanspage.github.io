(function($) {
  "use strict"; // Start of use strict

  // Toggle dropdown submenu on click
  $('.dropdown-submenu > .dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const $parent = $(this).parent('.dropdown-submenu');

    $(this).closest('.dropdown-menu')
      .find('.dropdown-submenu')
      .not($parent)
      .removeClass('open');

    $parent.toggleClass('open');
  });

  // Close submenu when parent dropdown is toggled
  $(document).on('show.bs.dropdown hide.bs.dropdown', function () {
    $('.dropdown-submenu').removeClass('open');
  });

  // Toggle dropdown submenu on hover when window is larger than 992px
  $('.dropdown-submenu').hover(
    function () {
      if (window.innerWidth >= 992) {
        $(this).addClass('open');
      }
    },
    function () {
      if (window.innerWidth >= 992) {
        $(this).removeClass('open');
      }
    }
  );

})(jQuery); // End of use strict
