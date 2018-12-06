$(document).ready(function(){
	$(".slide").click(function(){
       var hidden = $('.filter');
	    if (hidden.hasClass('visible')){
	        hidden.animate({"right":"-1000px","display":"none"}, "1000").removeClass('visible');
	    } else {
	        hidden.animate({"right":"0px", "display":"block"}, "1000").addClass('visible');
	    }

	})
})
