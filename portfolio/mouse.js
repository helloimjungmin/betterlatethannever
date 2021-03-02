$(document).mouseenter(function(e){
	win_h=$(window).height();
	win_w=$(window).width();
	$x=e.clientX
	$y=e.clientY
	$(".cursor").css({left:win_w*0.5,top:win_h*0.5})
})
var win_h
var win_w
$(document).mouseleave(function(e){
	 win_h=$(window).height();
	 win_w=$(window).width();
	$x=e.clientX
	$y=e.clientY
	$(".cursor").css({left:win_w*0.5,top:win_h*0.5})
})
$(document).mousemove(function(e){
	$x=e.clientX
	$y=e.clientY
	$(".cursor").css({left:$x,top:$y})
})

$(".default .indi,.default  .ham-btn ,.default  .item .bg").mouseenter(function(){
	$(".cursor").addClass("cursor1")
})
$(".indicator .indi, .ham-btn , .item .bg").mouseleave(function(){
	$(".cursor").removeClass("cursor1")
})