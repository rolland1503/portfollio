$(document).ready(function(){

	$("#Malpes").hide();
	$("#Malpes2").hide();
	$("#Malpes3").hide();
	$("#sujet2").hide();

	$(".la2").click(function(){

		$("#sujet1").hide();
	});

	$(".la2").click(function(){

		$("#sujet2").show(2500);
	});


	$(".la").click(function(){

		$("#sujet2").hide();
	});

	$(".la").click(function(){

		$("#sujet1").show(2500);
	});




});
