
var canvas ;
var context ;


$(function(){

  $("div#slide div").slider({
	min:0,
	max:100,
	value:50,
	slide:function(event,ui){
	  $(this).next().text(ui.value+"%");
	  if(ui.value==0){
	  $(this).addClass("val0");
	  $(this).find('a').addClass('val0');
	  }else{
	  $(this).removeClass("val0");
	  $(this).find('a').removeClass('val0');
	  }
	  context.clearRect(0,0,canvas.width,canvas.height);
	  drawCircle(56,56,ui.value/2,'#d2e6f4');
	  drawCircle(56,56,ui.value/2,'#d5deec');

	}
  })
  $("div#teamNav ul li#design").attr('class','tempTip');

  $("div#teamNav ul li").click(function(){
	$("div#teamNav ul li").attr('class','');
	$(this).attr('class','tempTip');
	id=$(this).attr('id');
	$("span.slideTip").css('background',"url('"+id+"4'")
  })

  //$("div#slide1").slider();  
  //$("div#slide2").slider();  
  //$("div#slide3").slider();  
  //$("div#slide4").slider();  
})

window.onload = function(){
  canvas = document.getElementById("myCanvas");
  context = canvas.getContext("2d");
  drawCircle(50,50,13,'#d2e6f4');
  drawCircle(50,50,10,'#d5deec');
}
function drawCircle(centerX,centerY,redius,style){
  var startingAngle = 0;
  var endingAngle = 2*Math.PI;
  var counterclockwise = false;
  context.beginPath();
  context.arc(centerX,centerY,redius,startingAngle,endingAngle,counterclockwise);
  context.closePath();
  context.fillStyle=style;
  context.fill();
}
