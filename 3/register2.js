var canvas ;
var context ;



$(function(){
  //.........................对象.........
  function AllSkills(){
	this.test=0;
  }
  var allSkills = new AllSkills;
  function DefSkill(){
	this.ps="photoshop";
	this.html="html";
	this.java="java";
	this.c="c 语言";
  }
  var defSkill=new DefSkill();
  //.............................初始................
  for(var p in defSkill){
	allSkills[p]=0;
  }
  function DiyArr(){}
  var diyArr = new DiyArr;
  var sameArr = new DiyArr;
  var diyNum = 0; 


/*for(var p in data){
	diyNum++;
	diyArr[diyNum]=p;
	allSkills[diyNum]=data[p];
}*/
  
  changeTip("design");
  $("div#teamNav ul li#design").attr('class','tempTip');
  //.................................函数..................
  var nowsame;
  function newDiySkill(name){
	for(var p in sameArr){
	  if(sameArr[p]==name)
		return 0;
	}
	for(var p in defSkill){
	  if(defSkill[p]==name){
		sameArr[p]=name;
		nowsame=p;
		return 1;
	  }
	}
	for(var p in diyArr){
	  if(diyArr[p]==name){
		return 0;
	  }
	}
	diyNum++;
	diyArr[diyNum]=name;
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
	  for(var p in diyArr){
		creatSlider(p,diyArr[p]);
	  }	
	  for(var p in sameArr){
		creatSlider(p,sameArr[p]);
	  }
	  var mydata="<div id='addDiv'><a id='addskill' href='javascript:void(0);'><span class=\"slideTip\">"+"双击添加"+"</span></a><div id=\"slide1\"></div><span class=\"slideVal\">0%</span></div>";
	  $("div#slide").append(mydata);
	
	
  $("a#addskill").click(function(){
    var mydata2="<div><span class=\"slideTip\"><input type='text' maxlength='8'></input></span><div id=\"slide1\"></div><span class=\"slideVal\">0%</span></div>"
    $(this).parent().html(mydata2);
    $("span.slideTip input").keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode==13){
		  newskill=$(this).val();
		  var res=newDiySkill(newskill)
//		  if(res==3)
//			creatSlider(diyNum,diyArr[diyNum]);
//		  else if(res==1){
//			creatSlider(nowsame,sameArr[nowsame]);
//		  }
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
	  creatSlider("c","c 语言");		
	}else if(id=="web"){
	  $("div#slide").attr("class","")
	  $("div#slide").html('');
	  creatSlider("html","html");	
	}else if(id=="diy"){
	  $("div#slide").attr("class","diyForm")
	  diy();  
	}else if(id="andriod"){
	  $("div#slide").html('');
	  creatSlider("java","java");	
	}else if(id="alg"){
	  $("div#slide").html('');
	  creatSlider("java","java");	
	}else if(id="it"){
	  $("div#slide").html('');
	  creatSlider("java","java");	
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
	for(var p in diyArr){
	 if(id==p){
	  delete diyArr[p]; 
	  diy();
	  return;
	 } 
	}
	delete sameArr[id];
	diy();
	return;
  })

  $("div#teamNav ul li").click(function(){
	$("div#teamNav ul li").attr('class','');
	$(this).attr('class','tempTip');
	id=$(this).attr('id');
	$("span.slideTip").css('background',"url('"+id+"4'")
	changeTip(id);
  
 })

  
  $("#nextP").click(function(){
	var result1="";
	for(var p in defSkill){
	  result1+=(p+"="+allSkills[p]+"&");
	}
	result1+="diy=0";
	alert(result1)


	var result2 = "";
	var count=0;
	for(var i in diyArr){
	  count++;
	  result2+=(diyArr[i]+"="+allSkills[i]+"&");
	}
	result2+="diy=1";
	alert(result1+result2);
  })
})

function mask(){
  $("div#mask").show();
  
}









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


