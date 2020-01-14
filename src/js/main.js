(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    // Activate black logo on scroll
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.navbar .navbar-brand img').attr('src','./src/img/logo%20kolor%20right.svg');
            }
            if ($(this).scrollTop() < 100) {
                $('.navbar .navbar-brand img').attr('src','./src/img/logo%20kolor%20white-text%20right.svg');
            }
        })
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#mainNav").css('background-color', 'rgba(255,255,255,0.9)');
            $(".nav-link").css('color', 'black');
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("#mainNav").css('background-color', 'rgba(255,255,255,0)');
            $(".nav-link").css('color', 'white');
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
