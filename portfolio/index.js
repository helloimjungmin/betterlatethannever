//인트로 

$(".entrance").click(function(){
    $(this).css("display","none")
    $(".intro").css("display","none")
    $(".figma").css("display","none")
    });


//click한버튼(indi)
//버튼 순번: index()
//버튼 left: offset().left or position().left
//버튼 너비: width()

var win_h=$(window).height();
var win_w=$(window).width();
var len=$(".item").length

var side_s=70; /// 사이드 아이템 너비값
var active_num=0; // 화면에 보여지는 아이템값

var item_w=500;   //슬라이드 아이템 너비
var item_h=400;   //슬라이드 아이템 높이
item_size()
indi()

$(" .item").click(function(){
	active_num=$(this).index();
	indi()
	body_name=$("body").attr("class")
	//center item을 클릭했을때
	console.log(body_name)
	if( $(this).hasClass("active") && body_name == "default" ){
		$(".indicator").stop().fadeOut();
		$(".item").not(this).stop().fadeOut(400,function(){
			$(".active").stop().animate({width:win_w,height:win_h,top:0,left:0},function(){
				$("body").attr({class:"page-open"})
				$(".active").css({overflowY:"visible"});
				$("body").css({overflowY:"visible"});
			})
		});
	}
    // 아이템 내부 클릭시 뒤로가기
//	else if( $(this).hasClass("active") && body_name == "page-open" ){
//		$("body").attr({class:"default"});
//		$("html,.item").stop().animate({scrollTop:0},function(){
//			// $(".item").removeClass("active")
//			$(".item").css({overflow:"hidden"})//css
//			$(".indicator").stop().fadeIn()
//			$(".item").stop().fadeIn()
//			item_size()
//			indi()
//		})
//	}
	//사이드 아이템을 클릭했을때.
	else if(body_name == "default"){
		active_num=$(this).index();
		item_size()
	}
	///end
})
// 햄버거버튼attr
//default, menu-open, page-open 
$(".ham-btn").click(function(){
	body_name=$("body").attr("class");
	console.log("body_name:"+body_name)
	//슬라이드 화면일때
	if(body_name == "default"){
		$("body").attr({class:"menu-open"});
		$(".menu-page").stop().fadeIn();
	}
	//메뉴화면이 보여지는 상태
	else if(body_name == "menu-open"){
		$("body").attr({class:"default"})
		$(".menu-page").stop().fadeOut();
	}
	//슬라이드속 디자인컨셉이 보여지고 있을때
	else if(body_name == "page-open"){
		$("body").attr({class:"default"});
		$("html,.item").stop().animate({scrollTop:0},function(){

			$(".item").removeClass("active")
			$(".item").css({overflow:"hidden"})//css
			$(".indicator").stop().delay(400).fadeIn()
			$(".item").stop().delay(400).fadeIn()

			item_size()

		})
	}
})

///main-슬라이드
function indi(){
	active_indi	=$(".indicator .indi").eq(active_num);
	indi_width	=active_indi.width();
	indi_left	=active_indi.position().left;
	//console.log("active_num: "+active_num);
	active_indi.css({color:"white"});
	$(".indicator .indi").not(active_indi).css({color:"#999999"});
	$(".indi-line").stop().animate({
		left:indi_left,width:indi_width,top:0
	},200)
}

function item_size(){
	var win_h=$(window).height();
	var win_w=$(window).width();
	// console.log("main")
	//
	console.log("윈도우크기"+win_w+"X"+win_h);

	///높이 조건문
	if(win_h > 600){
		item_h=400
	}else{
		item_h=win_h-100
	}

	///너비 조건문
	if(win_w < 950){
		item_w=500
	}else if(win_w < 1200 && win_w >= 950){
		item_w=800
	}else if(win_w < 1400 && win_w >= 1200){
		item_w=1000
	}else if(win_w >= 1400){
		item_w=1200
	}

	$(".item").removeClass("active")
	$(".item").eq(active_num).addClass("active")
	$(".item").each(function(i){
		this_left=i*win_w;
		left1=win_w*0.5-item_w*0.5+item_w-side_s;
		left2=win_w*0.5-item_w*0.5;
		num=i-active_num;
		$(this).stop().animate({
			left:(num*left1)+left2,
			width:item_w,
			height:item_h,
			top:win_h*0.5-item_h*0.5
		})//
	})
}


///화면 사이즈 조절시

var resizeTimer ; //클리어하기 위해서는 꼭 전역변수로 지정해야함.
$(window).resize(function(){
	clearTimeout(resizeTimer)
	var win_h=$(window).height();
	var win_w=$(window).width();

	body_name=$("body").attr("class")
	//center item을 클릭했을때
	console.log(body_name)
	if(  body_name == "default" ){
		resizeTimer=setTimeout(item_size,200)
	}else if( body_name == "page-open" ){
		$(".active").stop().animate({
			left:0,
			width:win_w,
			height:win_h,
			top:0
		})//
	}
})

$(".indicator .indi").click(function(){
	active_num=$(this).index();
	indi()
	item_size()
});

$(document).on("mousewheel",".default .main",function(event){
	delta=event.originalEvent.wheelDelta;
	console.log(delta)
	aniItem=$(".default  .item").is(":animated");
	if(delta<0 &&!aniItem&& active_num<len-1){
		active_num++;
		indi()
		item_size()
	}
	else if(delta>0 &&!aniItem&& active_num>0){
		active_num--;
		indi()
		item_size()
	}
})