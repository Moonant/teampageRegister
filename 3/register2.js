$(function(){

  $("div#slide div").slider({
	min:0,
	max:100,
	value:50,
	slide:function(event,ui){
	  $(this).next().text(ui.value+"%");
	}
  })

  //$("div#slide1").slider();  
  //$("div#slide2").slider();  
  //$("div#slide3").slider();  
  //$("div#slide4").slider();  
})
