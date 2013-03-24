$(function(){

	$(".from" ).live("mouseover",function(){
	  $(this).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		onClose: function( selectedDate ) {
			$(this).parent().find(".to" ).datepicker( "option", "minDate", selectedDate );
		}
	  })
	   $(this).parent().find( ".to" ).datepicker({
		 defaultDate: "+1w",
	   changeMonth: true,
	   numberOfMonths: 1,
	   onClose: function( selectedDate ) {
		 $(this).datepicker( "option", "maxDate", selectedDate );
	   }
	   });
	});
  $("div#ui-datepicker-div").live("mouseover",function(){
	$(this).attr("z-index","999");
  });
  $("div.property a").live("click",function(){
    $("div.property a").removeClass("select");
    $(this).addClass("select");
  });
  $("div.showImg > div").live("mouseover",function(){
	$(this).find("img").css("opacity","0.5");
	$(this).find("span").show();
  });
  $("div.showImg > div").live("mouseout",function(){
	$(this).find("img").css("opacity","1");
	$(this).find("span").hide();
  });
  $("div.showImg  span").live("click",function(){
	var src=$(this).parent().find("img").attr("src");
	$(this).parent().hide();
	return false;
  })
  $(".imgs img").live("click",function(){
	if($(this).css("width")!="100px"){
	  $(this).css({"width":"100px","cursor":"-moz-zoom-in"});
	}
	else
	  $(this).css({"width":"380px","cursor":"-moz-zoom-out"});
  })
  var formNum=1;
  var itemHtml1=$("div#form1").html();
  $("a#addItem").click(function(){
	var add=juage(formNum);
	if(add==1){
	  formNum++;
	  itemHtml="<div class='slide' id='form"+formNum+"'>"+itemHtml1+"</div>";
	  itemHtml=itemHtml.replace(/ajaxupload\(1\)/,"ajaxupload\("+formNum+"\)")
	  $("div#myform").prepend(itemHtml);
	  $("a#addItem").attr("class","");
	}
  })
  
  $("#nextP").click(function(){
	for(var i=1;i<=formNum;i++){
	  if(juage(i)){
		var rel={};
		
		var myform = $("#form"+i);
		 rel["name"] = myform.find(".name").val();
		 rel["timeFrom"]=myform.find(".from").val();
		 rel["timeto"]=myform.find(".to").val();
		 rel["property"]= myform.find(".property .select").attr("name");
		 rel["intro"]=myform.find("textarea").val();
		 rel["url"]=myform.find(".url").val();
		 var result="";
		for(var p in rel)
		  result+=(p+"="+rel[p]+"&");
		alert(result);
	  }
	}
  })


});

//...................................
function juage(Num){
  var name=$("#form"+Num+" input.name" ).val();
  name=$.trim(name);
  if(name!="")
	return 1;
  else 
	return 0;

}
function ajaxupload(Num){
  $("#form"+Num+" .myform2").ajaxSubmit(function(data){
	data=data.split(":");
	if(data[0]=="success"){
	 newdom="<div class='imgs'><img src='./upload/"+data[1]+"'/><span></span></div>"
	$('#form'+Num+' div.divAddImg div.showImg').append(newdom);
	}
  })	  
}
