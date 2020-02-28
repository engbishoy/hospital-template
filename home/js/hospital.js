// JavaScript Document
$(function(){
	"use strict";
	$(".navbar-nav li").on("click",function(){
		$(this).addClass("active").siblings().removeClass();
	});						  
									  
$(window).on("scroll",function(){
	var sc=$(window).scrollTop();
	console.log(sc);
	//static
if(sc>=1612){
	$(".clients-number h2").countTo({
		from:0,
		to:2053,
		speed:3000,
		refreshInterval: 50

		
	});
	$(".heart-number h2").countTo({
		from:0,
		to:2750,
		speed:3000,
				refreshInterval: 50
		
	});
	$(".faces-number h2").countTo({
		from:0,
		to:750,
		speed:3000,
		refreshInterval: 50
		
	});
	$(".years-number h2").countTo({
		from:0,
		to:50,
		speed:3000,
		refreshInterval: 50

		
	});
}
	
	// chat
	if(sc>=834.4444580078125){
		$(".chat").fadeIn(1000);
	}
	else{
		$(".chat").fadeOut(1000);
	}
	});
	$(".chat").on("click",function(){
		$(this).hide();
		$(".chat-forms").animate({
			right:"0"
		},2000);
	});
	$(".convers i").click(function(){
		$(".chat-forms").animate({
			right:"-555px"
		},2000);
	});
	
	$(".name").on("blur",function(){
		if($(this).val().length<4){
		$(".error").fadeIn();
	}else{
		$(".error").hide();
	}
	});
	$(".mobile").on("blur",function(){
		if($(this).val().length===11){
		$(".error-pone").hide();
	}else{
		$(".error-pone").fadeIn();
	}
	});
	
});