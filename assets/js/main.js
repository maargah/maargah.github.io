$(function() {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        var logo = document.querySelector('.navbar-brand img')
    
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            logo.src = 'assets/img/logo/logo-2.svg';
        } else {
            header_navbar.classList.remove("sticky");
            logo.src = 'assets/img/logo/logo.svg';
        }
    
    
    
        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };
    
    
    // section menu active
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };
    
    window.document.addEventListener('scroll', onScroll);
    
    
    
    
    

    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====  WOW active

    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();

    //===== 



});