$(".event .close").click(function(){
    $(".event-bg").css("display","none")
    $(".event").css("display","none")
}); 

function slide(){
       i++;
       i=i%2;
       $(".s1 .main-banner img").eq(i).fadeIn()
       $(".s1 .main-banner img").not($(".s1 .main-banner img").eq(i)).stop().fadeOut()
   }

var timer; 


i=0;

function fade(){
    $(".s6 .banner img").eq(i).stop().fadeIn();
    $(".s6 .banner img").not( $(".s6 .banner img").eq(i) ).stop().hide();
}
    $(document).ready(function(){
        slide()
        clearInterval(timer)
        timer=setInterval(slide,2000)
        fade()
    });

    $(".right-btn").click(function(){
        i++;
        i=i%3
        fade()
    });
    
    $(".left-btn").click(function(){
        i--;
        i=i%3;
        fade()
    });

$(function(){
    var $s2 = $(".s2");
    var $offset = 1080;
    var $s2offsetT = $s2.offset().top - $offset; 
    
    var $s4 = $(".s4");
    var $s4offsetT = $s4.offset().top - $offset; 
    
    $(window).scroll(function(){
        if($(this).scrollTop() > $s2offsetT){
            $s2.addClass("slide-top");
           }
        
         if($(this).scrollTop() > $s4offsetT){
            $s4.addClass("slide-top");
           }
        
    })
})