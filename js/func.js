$(function(){
	$("#image img").click(function(){
		$("#screen img")
		.attr("src",$(this).attr("src"))//screen��src�������N���b�N�����摜��src�����ɍ����ւ�
		.attr("height",$(this).attr("height"))//height�œ�������
		.attr("width",$(this).attr("width"));//width�œ�������
		return false;
	});
});
//�ۑ�F1.jpg��width��height�������p���ł��܂��Ă���B
//�΍�̂����5�s��6�s�����������ǁA�Ӗ��ׂ��ĂȂ����͋C�B