$(document).ready(function(){
    
    $(window).scroll(function(){
        const st = $(window).scrollTop();
        const ww = $(window).width();
        console.log(st)
        
        const sec1 = $('.section1').offset().top;
        const sec2 = $('.section2').offset().top;
        const sec3 = $('.section3').offset().top;
        const sec4 = $('.section4').offset().top;
        const sec5 = $('.section5').offset().top;
        const footer = $('.section2').offset().top;
        
        const sy = 7/75 * st -355;
        const syy = 73/1100 * st -197257/1100;
        const syyy = 3/110 * st -1109/22;

        if(ww<=1920 && ww>1350){
            $('.section4 .sec4_logo').css('left',sy+'%');
        }else if(ww<=1350 && ww>1000){
            $('.section4 .sec4_logo').css('left',syy+'%');
        }else if(ww<=1000 && ww>750){
            $('.section4 .sec4_logo').css('left',syyy+'%');
        }else{
            $('.section4 .sec4_logo').css('left',50+'%');
        }

        if(ww < 1000){
            $('.section1 .box_left .left_content').removeClass('on');
            $('.section1 .box_left .left_content').removeClass('active');

        }

        if(ww < 1350 && st >= sec1 && st < sec2){
            $('.section1 .box_left .left_content').addClass('on');

        }else{
            $('.section1 .box_left .left_content').removeClass('on');
        }

        if(st > 100){
            $('canvas').addClass('active')
            $('.main_menu').addClass('active')
            $('.logo_box').addClass('active')


        }else{
            $('.main_menu').removeClass('active')
            $('.logo_box').removeClass('active')

        }

        if(st >= sec1 && st < sec2){
            $('.section1 .box_left .left_content').addClass('active');

        }else{
            $('.section1 .box_left .left_content').removeClass('active');

        }
    }); 

    $('.main_menu_box .menu').mouseenter(function(){
        $('.b_sub_box').addClass('active');
        // $('.b_sub_box').fadeIn();
    });

    $('.b_sub_box').mouseleave(function(){
        $(this).removeClass('active');
        // $('.b_sub_box').fadeOut();
    });


    var swiper = new Swiper(".mySwiper", {
        loop:true,
        effect:"fade",  
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        autoplay:{
            delay:2000
        },
      });


      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,

        autoplay:{
            delay:2000
        },

        breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 10,
              slidesPerGroup: 3,
            },
    
            900: {
              slidesPerView: 2,
              spaceBetween: 10,
              slidesPerGroup: 2,
            },
            760: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          },
      });

    $('.m_menu_box').click(function(){
        $('.m_s_top').toggleClass('active');
        $('.m_s_bot').toggleClass('active');

        if($('.m_s_top').hasClass('active') && $('.m_s_bot').hasClass('active')){
            $('.m_left_box').addClass('active');
            $('.m_right_box').addClass('active');
        }else{
            $('.m_left_box').removeClass('active');
            $('.m_right_box').removeClass('active');
        }
    });
});