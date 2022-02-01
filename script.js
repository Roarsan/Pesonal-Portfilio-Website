$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('..scroll').addClass("show")
        }else{
            $('.scroll').removeClass("show")
        }
    });

//slide up script
    $('.scroll').click(function(){
    $('html').animate({scrollTop: 0});
    });

//toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

//typing animation script
var typed = new Typed(".typing",{
    strings: ["B N U","Buckinghamshire New University"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


//owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

   
 