var i=0;

//메인화면 스크롤
function scr_top(){
    win_scr = $(window).scrollTop()
//    console.log(win_scr)

    if(win_scr>89){
        $(".header").addClass("scr")
        $(".left-indicator").addClass("leftscr")
    }else{
        $(".header").removeClass("scr")
        $(".left-indicator").removeClass("leftscr")
    }}

function wheel(){
    win_h = $(window).height();
    $("html").stop().animate({scrollTop:i*win_h},1500)
        if(i==0){
        $(".left-indicator").stop().animate({left:-355})
    }else{
        $(".left-indicator").stop().show().animate({left:0})
    }
    $(".left-indicator .ll").eq(i-1).css({height:300})
    $(".left-indicator .ll").not($(".left-indicator .ll").eq(i-1)).css({height:40})
    $(".left-indicator .ll").addClass("active")
         
}

//마우스 휠 이벤트
$(".section").on("mousewheel",function(event){
    delta=event.originalEvent.wheelDelta;
    event.preventDefault();
    console.log(delta)
    if(delta<0 && i<6){
        i++;
        wheel()
    }else if(delta>0 && i>0){
        i--;
        wheel()
    }
})

//s5 슬라이드 

    var num01=0;

    function slide(){
        console.log("index:" + num01 +", left:" + (num01 * 500));
        $(".img-group").stop().animate({left: Math.abs(num01) * -500},1000,"easeInOutCirc")
    }

//자동 넘어가기
    function slide_auto(){
        num01++;
        num01=num01%11;
        console.log("index:" + num01 +", left:" + (num01 * -500));
        $(".img-group").stop().animate({left: Math.abs(num01) * -500},1000,"easeInOutCirc")
        $(".section5 .indi").eq(num01).css({background:"black"});
        $(".section5 .indi").not( $(".section5 .indi").eq(num01) ).css({background:"white"});
    }

$(".section5 .indi").click(function(){
    num01 = $(this).index();
    slide();
    clearInterval(stop)
    $(this).css({background:"black"})
    $(".section5 .indi").not(this).css({background:"white"})
})

var stop = setInterval(slide_auto,2000);

$(".section5 .play").click(function(){
    setInterval(slide_auto,2000)
})

$(".section5 .stop").click(function(){
    clearInterval(stop)
})

/////
$(document).ready(function(){
        scr_top()
        wheel()
    })

$(window).scroll(function(){
        scr_top()
    })

$(".left-in .ll").click(function(){
        i=$(this).index()+1;
        console.log(i)
        wheel()
        })