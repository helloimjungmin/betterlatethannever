//라이트갤러리
$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

var i=0;

function wheel(){
    win_h = $(window).height();
    $("html").stop().animate({scrollTop:i*win_h},1000)  
    $(".in span").eq(i).addClass("on")
    $(".in span").not($(".in span").eq(i)).removeClass("on")
}

//휠 이벤트

$("*").on("mousewheel",function(event){
    event.preventDefault();
    delta=event.originalEvent.wheelDelta;
    ani = $("html").is(":animated");
    if(!ani && delta<1 && i<9){
        i++;
        wheel()
    }else if( !ani && delta>0 && i>0){
        i--;
        wheel()
    }
})

/*s2 color*/
btn1 = $(".s2 .color img");
img = $(".s2 .car img");

btn1.click(function(){
    inx = $(this).index();
    img_active = img.eq(inx);
    console.log("click index:" + inx);
    img_active.stop().fadeIn(500,function(){
    });
    img.not(img_active).stop().fadeOut(1000,function(){
    });
})

/*s4 co-pilot*/
var num1=0;
i=0;
function copilot(){
    $(".s4-img-group img").stop().animate({left:Math.abs(num1) * -830});
    $(".s4-bt").stop().animate({left:Math.abs(num1) * -830});
}

$(".s4 .right").click(function(){
    num1++;
    num1 = num1%6
    copilot();
})

$(".s4 .left").click(function(){
    num1--;
    num1 = num1%6
    copilot();
})

/* s8 갤러리 */
$(".s8 .1 img").click(function(){
    $(".s8 .s8-img-b img").attr({src:"img/s8/1.jpg"});
})

$(".s8 .2 img").click(function(){
    $(".s8 .s8-img-b img").attr({src:"img/s8/2.jpg"});
})

$(".s8 .3 img").click(function(){
    $(".s8 .s8-img-b img").attr({src:"img/s8/3.jpg"});
})

$(".s8 .4 img").click(function(){
    $(".s8 .s8-img-b img").attr({src:"img/s8/4.jpg"});
})

$(".s8 .5 img").click(function(){
    $(".s8 .s8-img-b img").attr({src:"img/s8/5.jpg"});
})

$(".s8 .6 img").click(function(){
    $(".s8 .s8-img-b img").attr({src:"img/s8/6.jpg"});
})

$(".s8 .7 img").click(function(){
    $(".s8 .s8-img-b img").attr({src:"img/s8/7.jpg"});
})








