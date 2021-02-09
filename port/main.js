
$(".boudha").hide();


$(document).ready(function(){
	
	
	
	$( ".boudha" ).show(5000);
	
	$("#projet h2").hide();
	$(".col img").mouseover(function(){

		$(this).css({

			"opacity": "0.5",

		});
		$("#projet h2").show()
		
	});



	$(".col img").mouseout(function(){

		$(this).css({

			"opacity": "1",

		});

		$("#projet h2").hide()
		
	})

		

	
});

