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

    adjustSubmenuAlignment($parent);

    $parent.toggleClass('open');
  });

  // Close submenu when parent dropdown is toggled
  $(document).on('show.bs.dropdown hide.bs.dropdown', function () {
    $('.dropdown-submenu').removeClass('open');
  });

  // Toggle dropdown submenu on hover when window is larger than 1200px
  $('.dropdown-submenu').hover(
    function () {
      if (window.innerWidth >= 1200) {
        adjustSubmenuAlignment($(this));
        $(this).addClass('open');
      }
    },
    function () {
      if (window.innerWidth >= 1200) {
        $(this).removeClass('open');
      }
    }
  );

  // Set any dropup-xs position on page load
  $(document).ready(function() {
    setDropupXSPosition()
  });

  // Reset any dropup-xs position & realign open dropdown submenu when window is resized
  $(window).resize(function () {
    setDropupXSPosition();
    const openSubmenus = $('.dropdown-submenu.open');
    adjustSubmenuAlignment(openSubmenus);
  });

  // Dynamically set dropdown submenu alignment (left or right)
  function adjustSubmenuAlignment($submenu) {
    const $dropdownMenu = $submenu.children('.dropdown-menu');

    $submenu.removeClass('dropdown-submenu-left dropdown-submenu-right');
    $submenu.addClass('dropdown-submenu-right');

    $dropdownMenu.css({ visibility: 'hidden', display: 'block' });

    const menuOffset = $dropdownMenu.offset();
    const menuWidth = $dropdownMenu.outerWidth();
    const windowWidth = $(window).width();

    const $sidebar = $('#accordionSidebar');
    const sidebarWidth = $sidebar.is(':visible') ? $sidebar.outerWidth() : 0;

    const availableLeft = sidebarWidth;
    const availableRight = windowWidth;

    if (menuOffset.left + menuWidth > availableRight) {
      $submenu.removeClass('dropdown-submenu-right').addClass('dropdown-submenu-left');

      $dropdownMenu.css({ visibility: 'hidden', display: 'block' });
      const newOffset = $dropdownMenu.offset();
      if (newOffset.left < availableLeft) {
        $submenu.removeClass('dropdown-submenu-left').addClass('dropdown-submenu-right');
      }
    }

    $dropdownMenu.css({ visibility: '', display: '' });
  }

  // Set dropup-xs position using window size
  function setDropupXSPosition() {
    const $dropupXs = $('.dropup-xs');

    // Dropup when window is smaller than 576px
    if (window.innerWidth < 576) {
      $dropupXs.addClass('dropup')
    }
    else {
      $dropupXs.removeClass('dropup')
    }
  }

})(jQuery); // End of use strict
