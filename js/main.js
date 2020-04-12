(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        // MixItUp JS Code Here
        var mixer = mixitup('.portfolio-contents');
        // Owl Carousel JS Code Here
        // Testimonial Carousel JS Here
        $("#testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000
            
        });
        // Team Carousel JS Here
        $("#team-carousel").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:1
                },
                768:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });
        // Counter UP JS Here
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // Sticky Nav JS Here
        $(window).on("scroll", function(){
            if($(window).scrollTop()){
                $('.header-top').addClass('sticky-nav');
            }
            else{
                $('.header-top').removeClass('sticky-nav');
            }
        });
        // Navbar Scroll Spy JS Here
        $('.navbar-nav a').click(function(e){
            e.preventDefault();
            var hash = this.hash;
            var headerH = '68';
            var position = $(hash).offset().top - headerH;
            $('html').animate({
                scrollTop: position
            }, 100);            
        });
        // Scroll Top JS Here
        $(window).scroll(function(){
            if($(this).scrollTop()>100){
                $(".scrolltopsec").fadeIn();
                $('.scrolltopsec').css('opacity','1');
            }
            else{
                $(".scrolltopsec").fadeOut();
            }
        });
        $(".scrolltopsec").click(function(){
            $("html, body").animate(
                {
                    scrollTop:0
                },
                100
            );
            
        });
        // Navbar Mobile Menu JS Here
        $("a.nav-link").click(function(){
            $(".navbar-collapse").removeClass("show");
        });
        // WOW JS Here
        new WOW().init();
        

    
        
    });
    
    jQuery(window).load(function(){
        
    });
}(jQuery));	