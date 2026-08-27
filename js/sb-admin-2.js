(function($) {
  "use strict"; // Start of use strict

  /* Highlight the active sidebar menu item */
  $(document).ready(function() {
      // Normalize pathname (remove leading/trailing slashes, to lowercase)
      const normalizePath = (urlStr) => {
          try {
              const url = new URL(urlStr, window.location.href);
              if (url.origin !== window.location.origin) return null;
              return url.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
          } catch (e) {
              return null;
          }
      };

      const currentUrl = new URL(window.location.href);
      const currentPath = normalizePath(window.location.href);

      if (!currentPath) return;

      let matched = false;

      $('.sidebar .nav-item .nav-link, .sidebar .nav-item .collapse-item').each(function() {
          if (matched) return false;

          const rawHref = $(this).attr('href');
          if (!rawHref || rawHref === '#' || rawHref.startsWith('javascript:')) {
              return;
          }

          const linkUrl = new URL(rawHref, window.location.href);
          const linkPath = normalizePath(linkUrl.href);
          if (!linkPath) return;

          // Check path match (exact or sub-path)
          const isPathMatch = (linkPath === currentPath) ||
                              (currentPath.endsWith(linkPath) && linkPath !== '');

          // Check URL parameter match:
          // - If link has '?parameter=value', window.location.search must match exactly
          // - If link has NO query params, match as long as path matches
          const isSearchMatch = linkUrl.search ? (linkUrl.search === currentUrl.search) : true;

          if (isPathMatch && isSearchMatch) {
              const $el = $(this);

              if ($el.hasClass('collapse-item')) {
                  // Highlight sub-menu link
                  $el.addClass('active');

                  // Highlight parent .nav-item
                  const $collapseContainer = $el.closest('.collapse');
                  const $parentNavItem = $collapseContainer.closest('.nav-item');
                  $parentNavItem.addClass('active');

              } else {
                  $el.closest('.nav-item').addClass('active');
              }

              matched = true;
          }
      });
  });

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict
