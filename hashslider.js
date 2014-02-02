/* Copyright (c) 2013 Manuel Hügel (http://mgoys.com)
* Licensed under the DBAD License (http://www.dbad-license.org)
*
* Version: 2.0
*/
$(document).ready(function(){
		function f(){
			$("#slider .hslide:first-child").animate({marginLeft:0},r,i,
				function(){
					$(this).remove();
				})
		}
		function l(){
			$.get(n,function(e){
				var t=$("#slider .hslide:first-child").data("id");
				var n=$(e).find('.hslide[data-id|="'+t+'"]').index();
				var r=$(e).find(".hslide").size()-1;if(n<r){
				var i=n+2;var s=$(e).find(".hslide:nth-child("+i+")");
				$("#slider ul").append(s);
				$("#counter").html(n);f()
				}
				else
				{
				var o=$(e).find(".hslide:first-child");
				$("#slider ul").append(o);
				$("#counter").html(n);f()
				}
			}
		)}
		function c(){
			$("#slider .hslide:first-child").animate({marginLeft:0},r,i,function(){
				$("#slider .hslide:nth-child(2)").remove()
			}
		)}
			function h(){
			$.get(n,function(e){
				var t=$("#slider .hslide:first-child").data("id");
				var n=$(e).find('.hslide[data-id|="'+t+'"]').index();
				var r=n;
				if(r>0){
					var i=$(e).find(".hslide:nth-child("+r+")").css("marginLeft","-940px");
					$("#slider ul .hslide:first-child").before(i);c();
					$("#counter").html(n);u()
				}
				else
				{
					var i=$(e).find(".hslide:last-child").css("marginLeft","-940px");
					$("#slider ul .hslide:first-child").before(i);c();
					$("#counter").html(n);
					u()
				}
			}
		)}
		var e=$("#slider").width();
		var t=e*10;
		var n=$("#slider").data("source");
		var r=$("#slider").data("speed");
		var i=$("#slider").data("easing");
		$("#slider ul").css("width",t);

		$("#next").click(function(){
			l()
		});
		$("#back").click(function(){
			h()
		})
	});