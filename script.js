$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

// toggle menu/navbar script
$('.menu-btn').click(function(){
  $('.menu').fadeToggle(0);
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["UI/UX Developer", "Fronted Developer"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    // Animation efect 
    // ----------Home----------
    $('.home-content').waypoint(function(direction){
        $('.home-content').addClass('animate__animated animate__fadeInLeft');
    },{
        offset: '70%'
    })
    // --------About Section----------
    $('.about-text ').waypoint(function(direction){
        $('.about-text-1').addClass('animate__animated animate__fadeInLeft');
        $('.about-text-2').addClass('animate__animated animate__fadeInRight');
        $('.sign').addClass('animate__animated animate__fadeInLeft');
    },{
        offset: '70%'
    })
    // ------Project---------
    // proj-01
    $('.p1').waypoint(function(direction){
        $('.proj-img-1').addClass('animate__animated animate__fadeInLeft');
        $('.proj-desc-1').addClass('animate__animated animate__fadeInRight');
    },{
        offset: '70%'
    })
    // proj 02
    $('.p2').waypoint(function(direction){
    $('.proj-img-2').addClass('animate__animated animate__fadeInRight');
    $('.proj-desc-2').addClass('animate__animated animate__fadeInLeft');
    },{
    offset: '70%'
    })    
    // proj 3
    $('.p3').waypoint(function(direction){
        $('.proj-img-3').addClass('animate__animated animate__fadeInLeft');
        $('.proj-desc-3').addClass('animate__animated animate__fadeInRight');
    },{
    offset: '70%'
    })    

    // --------Skills-----------
    $('.skills-content').waypoint(function(direction){
        $('.skill-bold').addClass('animate__animated animate__fadeInLeft');
        $('.skill-par').addClass('animate__animated animate__fadeInRight');
        $('.skill-icon').addClass('animate__animated animate__rotateIn');
    },{
    offset: '70%'
    })     

    // --------Contact -----------
    $('.contact-content').waypoint(function(direction){
        $('.contact-left').addClass('animate__animated animate__fadeInLeft');
        $('.contact-right').addClass('animate__animated animate__fadeInRight');
    },{
        offset: '70%'
        })   
});


