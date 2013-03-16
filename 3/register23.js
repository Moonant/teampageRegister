var canvas ;
var context ;
$(function(){
  //.........................对象.........
  function AllSkills(){

  }
  var allSkills = new AllSkills;

  function DefSkill(){
	this.ps="photoshop";
	this.html="html";
	this.java="java";
  }
  var defSkill=new DefSkill();
  function Skill(id,name){
	this.id=id;
	this.name=name;
	
  }
  //.............................初始................
  for(var p in defSkill){
	addSkill(p,p.value);
  }
  var diyArr = new Array();
  var sameArr = new Array();
  var diyNum = -1; 
  var sameNum = -1;
  
  changeTip("design");
  $("div#teamNav ul li#design").attr('class','tempTip');
  //.................................函数..................
  function addSkill(id,name){
	allSkills.newPropertyName=id;
	allSkills[id]=0;
  }

  function newDiySkill(name){
	for(var i=0;i<=sameNum;i++){
	  if(sameArr[i][1]==name)
		return 0;
	}
	for(var p in defSkill){
	  if(defSkill[p]==name){
		sameNum++;
		sameArr[sameNum]=new Array(p,name);
		return 1;
	  }
	}
	for(var i=0;i<=diyNum;i++){
	  if(diyArr[i]==name){
		return 0;
	  }
	}
	diyNum++;
	diyArr.push(name);
	allSkills.newPropertyName=diyNum;
	allSkills[diyNum]=0;
	return 3;
  }

  function creatSlider(slideId,slideName){
	var mydata="<div id='"+slideId+"'><span class=\"slideTip\">"+slideName+"</span><div  id=\"slide1\"></div><span class=\"slideVal\">"+allSkills[slideId]+"%</span><span class='remove'></span></div>";
	$("div#slide").prepend(mydata);

  $("div#slide div#"+slideId+" div#slide1").slider({
	min:0,
	max:100,
	value:allSkills[slideId],
	slide:function(event,ui){
		allSkills[slideId]=ui.value;
	  $(this).next().text(ui.value+"%");
	  if(ui.value!=0){
		$(this).prev('span').addClass("val0");
		$(this).addClass("val0");
		$(this).find('a').addClass('val0');
	  }else{
		$(this).prev('span').removeClass("val0");
		$(this).removeClass("val0");
		$(this).find('a').removeClass('val0');
	  }
	  context.clearRect(0,0,canvas.width,canvas.height);
	  drawCircle(56,56,ui.value/2,'#d2e6f4');
	  drawCircle(56,56,ui.value/2,'#d5deec');

	}
  });
	var thisS =  $("div#slide div#"+slideId+" div#slide1");
	  if(allSkills[slideId]!=0){
		thisS.prev('span').addClass("val0");
		thisS.addClass("val0");
		thisS.find('a').addClass('val0');
	  }else{
		thisS.prev('span').removeClass("val0");
		thisS.removeClass("val0");
		thisS.find('a').removeClass('val0');
	  }

  }

	  function diy(){
	  $("div#slide").html('');
	  for(var i=0,len=diyArr.length; i<len; i++){
		creatSlider(i,diyArr[i]);
	  }	
	  for(var i=0,len=sameArr.length; i<len; i++){
		creatSlider(sameArr[i][0],sameArr[i][1]);
	  }
	  var mydata="<div id='addDiv'><a id='addskill' href='javascript:void(0);'><span class=\"slideTip\">"+"点击添加"+"</span></a><div id=\"slide1\"></div><span class=\"slideVal\">0%</span></div>";
	  $("div#slide").append(mydata);
	
	
  $("a#addskill").click(function(){
    var mydata2="<div><span class=\"slideTip\"><input type='text' maxlength='8'></input></span><div id=\"slide1\"></div><span class=\"slideVal\">0%</span></div>"
    $(this).parent().html(mydata2);
    $("span.slideTip input").keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode==13){
		  newskill=$(this).val();
		  var res=newDiySkill(newskill)
		  if(res==3)
			creatSlider(diyNum,diyArr[diyNum]);
		  else if(res==1){
			creatSlider(sameArr[sameNum][0],sameArr[sameNum][1]);
			
		  }
	//$("div#addDiv").replaceWith(mydata);
		  diy();
		}
	});
  })
  }
  function changeTip(id){
    if(id=="design"){
	  $("div#slide").attr("class","")
	  $("div#slide").html('');
	  creatSlider("ps","photoshop");		
	}else if(id=="web"){
	  $("div#slide").attr("class","")
	  $("div#slide").html('');
	  creatSlider("html","html");	
	}else if(id=="diy"){
	  $("div#slide").attr("class","diyForm")
	  diy();  
	}
  }
//........................监视...............................



 
 
  $("div#slide.diyForm > div").live("mouseout",function(){
	$(this).find("span.remove").css("display","none");
  });
  $("div#slide.diyForm > div").live("mouseover",function(){
	$(this).find("span.remove").css("display","inline-block");
  });
  $("span.remove").live("click",function(){
	var id=$(this).parent().attr("id");
	for(var i=0,len=diyArr.length; i<len; i++){
	 if(id==i){
	  
	 } 
	}

  })

  $("div#teamNav ul li").click(function(){
	$("div#teamNav ul li").attr('class','');
	$(this).attr('class','tempTip');
	id=$(this).attr('id');
	$("span.slideTip").css('background',"url('"+id+"4'")
	changeTip(id);
  
 })

  
  $("#nextP").click(function(){
	var result1;
	for(var p in allSkills){
	if(p!=0)
	  result1+=(p+"="+allSkills[p]+"&");
	else 
	  break;
	}
	var result2 = "len="+diyArr.length;
	for(var i=0,len=diyArr.length; i<len; i++){
	  result2+=("&"+i+"="+diyArr[i]+"&"+i+"_val="+allSkills[i]);
	}
	alert(result1+result2);
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
