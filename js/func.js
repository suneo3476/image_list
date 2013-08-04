$(function(){
	$("#image img").click(function(){
		$("#screen #view").html("").html('<img src=""/>');
		var url = $(this).attr("src");
		var img = new Image();
		img.onload = function() {
			$("#screen #view img")
			.attr("src", url)
			.attr("width", img.width)
			.attr("height", img.height);
			console.log(img.width+":"+img.height);
		}
		img.src = url;
		return false;
	});
});
//課題：DOMの削除と作成をせずにやりたいんだよなぁ…。