$(function(){

  $.ajax({
	url:"",
	type:"post",
	data:{},
	success:function(data){
	  
	}
  })

  $("input").val("");

  $("input#phone").keyup(function(){
    blurPhone();
  });
  $("input#yourhp").keyup(function(){
	blurHp();
  });
  

  $("input#phone").blur(function(){
	blurPhone();
  })
  $("input#phone").focus(function(){
	$("span.tip1").css('display','inline-block');
  })

  $("input#yourhp").blur(function(){
	blurHp();
  })
  $("input#yourhp").focus(function(){
	$("span.tip2").css('display','inline-block');
  })
  
  $("a#nextP").click(function(){
	if(blurPhone()&&blurHp()){
	$.ajax({
	  url:"",
	  type:"post",
	  data:{phone:"phoneNum",homepage:"homepage"},
	  success:function(data){
		
	  }
	})
	}
  })
})
	function blurPhone(){
	phoneNum = $("input#phone").val();
	var reyx=/^\d{11}$/;
	if(phoneNum.match(reyx)){
	  $("span.phoneTip").css("background","url('./yes.png')");
	  $("input#phone").css("border-color","rgba(82,168,236,0.8)");
	  $("input#phone").css("box-shadow","0 1px 1px rgba(0,0,0,0.075) inset,0 0 8px rgba(82,168,236,0.6)");
	  return true;
	}
	else{ 
	  $("span.phoneTip").css("background","url('./no.png')");
	  $("input#phone").css("border-color","red");
	  $("input#phone").css("box-shadow","0 1px 1px red inset,0 0 8px red");
	  return false;
	}
  }
	function blurHp(){
	homepage = $("input#yourhp").val();
	if(homepage!=""){
	  $("span.hpTip").css("background","url('./yes.png')");
	  $("input#yourhp").css("border-color","rgba(82,168,236,0.8)");
	  $("input#yourhp").css("box-shadow","0 1px 1px rgba(0,0,0,0.075) inset,0 0 8px rgba(82,168,236,0.6)");
	  return true;
	}
	else{ 
	  $("span.hpTip").css("background","url('./no.png')");
	  $("input#yourhp").css("border-color","red");
	  $("input#yourhp").css("box-shadow","0 1px 1px red inset,0 0 8px red");
	  return false;
	}
  }

function ajaxupload(){
  $('#myform2').ajaxSubmit(function(data){
	data=data.split(":");
	if(data[0]=="success"){alert('');
	  $('div.photo img').attr('src','./upload/'+data[1]);
	}
  })	  
}


    (function($) {
        jQuery.fn.register1Check = function(inputS) {alert('1');
      //     this.each(function() {
           this.onkeypress = function() {alert('2');
            if(inputS="phone")
			  blurPhone();
			else if(inputS="yourhp")
			  blurHp();
                    };
    //        });
        };
    })(jQuery);

$("input").keyup(function(){
  blurPhone();
});
$("input#yourhp").onkeyup=function(){
  blurHp();
};

