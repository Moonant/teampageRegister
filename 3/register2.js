


var canvas ;
var context ;






$(function(){
	
function AllSkills(){
 		this.psVal=0;
  	this.htmlVal=0;

}
var allSkills = new AllSkills;
var diyArr= new Array();

function creatSlider(slideId,slideName,slideVal){
	var mydata="<div id='"+slideId+"'><span class=\"slideTip\">"+slideName+"</span><div id=\"slide1\"></div><span class=\"slideVal\">"+allSkills[slideVal]+"%</span></div>";
$("div#slide").append(mydata);

$("div#slide div#"+slideId+" div#slide1").slider({
	min:0,
	max:100,
	value:allSkills[slideVal],
	slide:function(event,ui){
		allSkills[slideVal]=ui.value;
	  $(this).next().text(ui.value+"%");
	  if(ui.value==0){
		$(this).prev('span').addClass("val0");
		$(this).addClass("val0");
		$(this).find('a').addClass('val0');
	  }else{
		$(this).prev('span').addClass("val0");
		$(this).removeClass("val0");
		$(this).find('a').removeClass('val0');
	  }
	  context.clearRect(0,0,canvas.width,canvas.height);
	  drawCircle(56,56,ui.value/2,'#d2e6f4');
	  drawCircle(56,56,ui.value/2,'#d5deec');

	}
});

}


 creatSlider("ps","photoshop","psVal");

 
 
  $("div#teamNav ul li#design").attr('class','tempTip');

  $("div#teamNav ul li").click(function(){
	$("div#teamNav ul li").attr('class','');
	$(this).attr('class','tempTip');
	id=$(this).attr('id');
	$("span.slideTip").css('background',"url('"+id+"4'")

	if(id=="design"){
		$("div#slide").html('');
	creatSlider("ps","photoshop","psVal");		
	}else if(id=="web"){
	$("div#slide").html('');
	creatSlider("html","html","htmlVal");	
}else if(id=="diy"){
	$("div#slide").html('');

for(var i=0,len=diyArr.length;i<len;i++){
skillval="diyArr"+i.toString();
creatSlider(skillval,diyArr[i],skillval);
}	


	var mydata="<div><a id='addskill' href='javascript:void(0);'><span class=\"slideTip\">"+"点击添加"+"</span></a><div id=\"slide1\"></div><span class=\"slideVal\">0%</span></div>";
$("div#slide").append(mydata);
}
	
	$("a#addskill").click(function(){
			$(this).parent().html("<div><span class=\"slideTip\"><input type='text' maxlength='8'></input></span><div id=\"slide1\"></div><span class=\"slideVal\">0%</span></div>");

$("span.slideTip input").keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
if(keycode==13){
	newskill=$(this).val();
	if(0){

}else{

		var num=diyArr.push(newskill)-1;
		skillval="diyArr"+num.toString();
		allSkills.newPropertyName=skillval;
		allSkills[skillval]=0;
		
		creatSlider(skillval,diyArr[num],skillval);
		
}
}
}); 	

})


  })

  
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

function Skill(name){
  this.name=name;
  this.value=0;
}

function User(name){
  this.ps=new Skill("ps");
  this.dsMax=new Skill("3dsMax");
  this.java=new Skill("java");
  this.c=new Skill("c");
  
}

var user = new User("name");
$("#diyAdd").click(function(){
});

function diyAdd(name){
  for(var p in user){
	if (name==user[p]['name']){
	  
	}else{
	  user.diy.push(new Skill(name));
	
	}
}
}

