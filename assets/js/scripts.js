/*
Author       : Themesvila
Template Name: Hax - Portfolio HTML Template
Version      : 1.0
*/


(function($) {
    'use strict';

    /*PRELOADER JS*/
    $(window).on('load', function() {
        $('.preloader').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
    });


    /*END PRELOADER JS*/

    /*Start Menu JS*/

    $('#main-menu').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });


    /*START Fixed Menu JS*/
    if ($(window).scrollTop() > 200) {
        $('.fixed-top').addClass('menu-bg');
    } else {
        $('.fixed-top').removeClass('menu-bg');
    }
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 70) {
            $('.site-navigation, .header-white, .header').addClass('navbar-fixed');
        } else {
            $('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
        }
    });


    $('#main-menu').slicknav({
        label: '',
        duration: 1000,
        easingOpen: "easeOutBounce", //available with jQuery UI
        prependTo: '#mobile_menu',
        closeOnClick: true,
        easingClose: "swing",
        easingOpen: "swing",
        openedSymbol: "&#9660;",
        closedSymbol: "&#9658;"
    });

    /*END Menu JS*/


    /* Skill Bar */
    jQuery(document).ready(function() {
        jQuery('.skillbar').each(function() {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000);
        });
    });

    /*START Review*/
    $('#review-slider').owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        margin: 0,
        responsive: {
            0: {
                items: 1,

            },
            768: {
                items: 1,

            },
            1000: {
                items: 3,

            }
        }
    });

    /*END Review*/

    /*Start Popup*/
    $('.popup_btn').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
    /*END Popup*/

    /*START Testimonials*/
    $('#client-slider').owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        margin: 0,
        responsive: {
            0: {
                items: 1,

            },
            768: {
                items: 1,

            },
            1000: {
                items: 4,

            }
        }
    });

    /*END Testimonials*/

})(jQuery);