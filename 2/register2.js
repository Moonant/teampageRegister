$(function(){
  
  $("div#team a").click(function(){
	$("div#team a").attr("class","");
	$(this).attr("class","select");
  })
  $("div#work a").click(function(){
	$("div#work a").attr("class","");
	$(this).attr("class","select");
  })
  $("div#sexInput span").click(function(){
	$("div#sexInput span").attr("class","");
	$(this).attr("class","checked");
  })


})
