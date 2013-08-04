$(function(){
	$("#image img").click(function(){
		$("#screen img")
		.attr("src",$(this).attr("src"))//screenのsrc属性をクリックした画像のsrc属性に差し替え
		.attr("height",$(this).attr("height"))//heightで同じこと
		.attr("width",$(this).attr("width"));//widthで同じこと
		return false;
	});
});
//課題：1.jpgのwidthとheightを引き継いでしまっている。
//対策のつもりで5行と6行を書いたけど、意味為してない雰囲気。