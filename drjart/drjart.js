var btn1 = $(".section1 .indicator");
var img = $(".section1 .img");
var inx = 0;  //section1의 슬라이드 변수
var page = 0;//페이지 변수
////section 이동함수
function page_move(){
    win_height=$(window).height();
    active_page=$(".section").eq(page)
    $(".page-li").eq(page).addClass("indi_on")
    $(".page-li").not($(".page-li").eq(page)).removeClass("indi_on")
    console.log(page)
    if(page==4){
        $("html").stop().animate({scrollTop: win_height*3 + 350},1000)
    }else{
        //page start
        $("html").stop().animate({scrollTop: page * win_height}, 1000, function () {/*스크롤 이동후 나타나도록*/
            active_page.find(".animation").eq(0).stop().delay(0).animate({opacity: 1, transform: "translate(0,0)"}, 500);
            active_page.find(".animation").eq(1).stop().delay(50).animate({opacity: 1, transform: "translate(0,0)"}, 500);
            active_page.find(".animation").eq(2).stop().delay(100).animate({opacity: 1, transform: "translate(0,0)"}, 500);
            active_page.find(".animation").eq(3).stop().delay(150).animate({opacity: 1, transform: "translate(0,0)"}, 500);
            active_page.find(".animation").eq(4).stop().delay(200).animate({opacity: 1, transform: "translate(0,0)"}, 500);
            active_page.find(".animation").eq(5).stop().delay(250).animate({opacity: 1, transform: "translate(0,0)"}, 500);/*//안보이는 섹션*/
            active_page.find(".animation").eq(6).stop().delay(250).animate({opacity: 1, transform: "translate(0,0)"}, 500);/*//안보이는 섹션*/
            active_page.find(".animation").eq(7).stop().delay(300).animate({opacity: 1, transform: "translate(0,0)"}, 500);/*//안보이는 섹션*/
            active_page.find(".animation").eq(8).stop().delay(350).animate({opacity: 1, transform: "translate(0,0)"}, 500);/*//안보이는 섹션*/
            $(".section").not(active_page).find(".animation").css({opacity: 0, transform: "translate(0,20px)"})
        })
        //page end
    }
}////page_move end





////section1 슬라이드함수 start
function page1_slide() {
    $(".section1 .indicator").eq(inx).css({ background: "#ffffff" });
    btn1.not( $(".section1 .indicator").eq(inx) ).css({background: "#999999"}); 
    img_active = img.eq(inx);
    img_active.stop().fadeIn(300, function () {
        img_active.addClass("active-img")
    });
    img.not(img_active).stop().fadeOut(300, function () {
        img.not(img_active).removeClass("active-img")
    });
    $(".section1 .text").eq(inx).stop().delay(400).animate({opacity: 1, top: 0}, 500)
    $(".section1 .text").not($(".section1 .text").eq(inx)).stop().animate({opacity: 0, top: 50})
}
/////section1 슬라이드함수 end
$(document).ready(function(){
    page1_slide();
    page_move();
});


$("*").on("mousewheel",function(event){
    event.preventDefault(); //기본 이벤트속성 없애기
    delta=event.originalEvent.wheelDelta;
    ani = $("html").is(":animated"); //애니메이션중=true, 움직임X=false
    if( !ani && delta<1 && page<4){
        page++;
        page_move();
    }else if( !ani && delta>0 && page>0){
        page--;
        page_move()
    }
})

$(".page-li").click(function(){
    page=$(this).index()
    page_move()
});

$(window).resize(function(){
    page_move()
})


$("a").click(function(event){
    event.preventDefault();
})
btn1.click(function () {
    inx = $(this).index();
    console.log("click index:" + inx);//F12번 계발자모드:console창/* /*인디케이터* /*/
    page1_slide();  
});

/////////menu

$(".ham-btn").click(function(){
    $("body").toggleClass("active-menu");
})
$(".headergroup li, .black").click(function(){
    $("body").removeClass("active-menu");
})

/////하단site menu////////////////////////////////////

$(".site .title").click(function(){
    has_on=$(this).parents(".site").hasClass("on")//클라스있으면 true
    console.log(has_on)
    if( !has_on ) {
        $(".site").removeClass("on")
        $(this).parents(".site").addClass("on")
    } else {
        $(this).parents(".site").removeClass("on")
    }
    $(".site").not(".on").find(".site-menu").hide()
    $(".on").find(".site-menu").show()

})






