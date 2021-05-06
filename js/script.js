$('.page-scroll').on('click', function(e){

	var	tujuan = $(this).attr('href');

	var elementujuan = $(tujuan);

	$('body').animate({
		scrollTop: elementujuan.offset().top - 50
	},500);

	e.preventDefault();

});