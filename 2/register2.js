$(function(){
    $.getJSON("?/aj/register/secondHeadInfo/", "", function(data){
        if(data.status){
            $("div#sexInput span").attr("class","");
            if(data.sex == 1)
                $("div#sexInput span#w").attr("class", "checked");
            $("select").get(0).selectedIndex = data.specialty;
            $("div#team a").attr("class", "");
            var teamId = "div#team a#"+data.group;
            $(teamId).attr("class", "select");
            $("div#work a").attr("class", "");
            var workId = "div#work a#"+data.position;
            $(workId).attr("class", "select");
        }
        console.log(data);
    });
$("div#team a").click(function(){
    $("div#team a").attr("class","");
    $(this).attr("class","select");
	$("span.tip1").hide();
});
$("div#work a").click(function(){
    $("div#work a").attr("class","");
    $(this).attr("class","select");
	$("span.tip2").hide();
});
$("div#sexInput span").click(function(){
    $("div#sexInput span").attr("class","");
    $(this).attr("class","checked");
});
$("a#nextP").click(function(){
  var work=0;
  var team=0;
  if($("div#work a.select").get(0)==undefined){
	$("span.tip2").show();
	work=1;
  }
  if($("div#team a.select").get(0)==undefined){
	$("span.tip1").show();
	team=1;
  }
  if(work==0&&team==0){
	var sex=$("#sexInput span.checked").attr("id");
	var i=$("select").get(0).selectedIndex;
	var teamId=$("div#team a.select").attr("id");
	var workId=$("div#work a.select").attr("id");
	alert(sex+i+teamId+workId);
  }
})
})
