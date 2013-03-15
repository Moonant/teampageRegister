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
})
$("div#team a").click(function(){
    $("div#team a").attr("class","");
    $(this).attr("class","select");
});
$("div#work a").click(function(){
    $("div#work a").attr("class","");
    $(this).attr("class","select");
});
$("div#sexInput span").click(function(){
    $("div#sexInput span").attr("class","");
    $(this).attr("class","checked");
});