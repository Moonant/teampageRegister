$(function(){
  //...................从后台获得数据
  var getTag={ 
	"1":"死宅",
	"2":"解放后思考劳动法",
  }
  var egTag={
	"3":"专注猝死三十年",
  }
  
  //..........................
  var count=0;
  init();
  //...................监控.........
  $("#edit").live("click",function(){
	$("#tagForm").show();
	$(this).attr("id","finish");
  });
  $("#finish").live("click",function(){
	$("#tagForm").hide();
	$(this).attr("id","edit");
  });
  $(".someTag").live("click",function(){
	tagId=$(this).attr("tagid");
	$("a[tagid="+tagId+"]").attr("class","");
	$("a[tagid="+tagId+"]").css("opacity","0.5");
	addTagId(tagId);
  });
  $(".delTag").live("click",function(){
	tagId=$(this).parent().attr("tagid");
	delTag(tagId);
	$("a[tagid="+tagId+"]").remove();
	return false;
  });
  $("#showTag").live("click",function(){
	$("input").get(0).focus();
  });
    $("input").live("keypress",function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode==13){
		  newTag=$(this).val();
		  newTag=$.trim(newTag);
		  if(newTag!=""){
			addTagNew(newTag);
			$("input").val("");
		  }
		}
	});
//.........................函数...............
  function init(){
	$(".dot").hide();
	for(var i in egTag){
	  tagHtml=egTagHtmlf(egTag[i],i);
	  $("#someTag").append(tagHtml);
	}
	for(var i in getTag){
	  showTags(getTag[i],i);

	  tagHtml=tagHtmlf(getTag[i],i);
	  $("#showTag").prepend(tagHtml);
	}
	$("input").val("");
	$("#tagForm").hide();
  }
  function tagHtmlf(tag,tagId){
	return "<a href=\"javascript:void(0);\" class=\"tag\" tagId=\""+tagId+"\">"+tag+"<span class=\"delTag\"></span></a>";
  }
  function egTagHtmlf(tag,tagId){
	return  "<a href=\"javascript:void(0);\" class=\"someTag\" tagId=\""+tagId+"\">"+tag+"</a>";
  }
  function addTagId(tagId){
	tag=egTag[tagId];
	addTagNew(tag);
  }
  function delTag(tagId){
	$("#showTag a[tagid="+tagId+"]").remove();
	$("div[tagid="+tagId+"]").hide();
	tagDelPost(tagId);
  }
  function addTagNew(newTag){
	if(count>9)
	  return;

	tagid=tagPost(newTag);
	tagHtml = tagHtmlf(newTag,tagId);
	$("#showTag").prepend(tagHtml);

	showTags(newTag);
  }
  function showTags(tag,tagId){
	$("#dot"+count).show();
	$("#dot"+count+" div").text(tag);
	$("#dot"+count+" div").attr("tagid",tagId);
	count++;
  }


  var temp=100;
  function tagPost(newTag){
	//  后台存入数据库 返回id;
	tagId=temp++;
	return tagId;
  }
  function tagDelPost(tagId){
  // 后台删除数据
  }










})
