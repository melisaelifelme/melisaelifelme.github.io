// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded

    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });


    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("footer_date").innerHTML = "© "+n+" Melisa Elif ELME ";
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    $('#footer_date').click(function() {
        $('img').attr("src","img/bjk/bjk_icon.png");
        $('#home').css('background', 'url(./img/bjk/bjk.jpg)');
        $('#pp').attr("src","img/about-img.jpg");
        $.stopSound();
        $.playSound('img/bjk/mars.mp3');

        $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top
        }, 2000);
    });

    $("#tayyip").click(function() {
        alert(`
            Sayın Melisa hanım şahsım olarak sizden hoşlanmaktayım.

            Eğer sizde aynı hisleri paylaşıyor iseniz, lütfen şahsıma belirtiniz.

            Aksi takdirde bu mesajı görmemiş olarak konuşmaya devam etmenizi rica ederim.

            - Tayyip Gören
            `);
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top
        }, 2000);
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });


    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: false,
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        baguetteBox.run('.tz-gallery', {
            'overlayBackgroundColor':'rgba(0,0,0,0.9)'
        });
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

});

