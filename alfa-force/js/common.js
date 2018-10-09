$(function () {

	// Custom JS

	$('.slider_brand').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.slider_objects').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
	});

});

$("#tel").mask("7 (999) 999 99 99");

$('.section4_button').click(function (e) {
	e.preventDefault();
	$('.section3_block').toggleClass('active');
});

$('.section5_tab').click(function (e) {
	e.preventDefault();
	var ind = $(this).parent().index();
	$('.section5_tab').removeClass('active');
	$(this).addClass('active');
	$('.section5_block').find('div').removeClass('active');
	if (ind == 0) {
		$('.section5_block').find('>div:eq(' + ind + ')').addClass('active');
	}
	if (ind == 1) {
		$('.section5_block').find('>div:eq(' + ind + ')').addClass('active');
	}
	if (ind == 2) {
		$('.section5_block').find('>div:eq(' + ind + ')').addClass('active');
	}
});