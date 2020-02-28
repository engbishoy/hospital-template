// JavaScript Document
$ (function(){
	"use strict";
	$(window).on("scroll",function(){
		var sc=$(this).scrollTop();
		console.log(sc);
		if(sc>=333){
			$(".chat").show(2000);
			
		}
	});
	$(".chat").on("click",function(){
		$(".chat").fadeOut();
		$(".chat-forms").animate({
		  right:"0"
		},2000);
		
	});
	$(".convers i").click(function(){
		$(".chat-forms").animate({
			right:"-555px"
		},2000);
	});
});