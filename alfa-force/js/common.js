$(function () {

	// Custom JS

	$('.slider_brand1').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.slider_brand2').slick({
		slidesToShow: 6,
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

	$('.letter').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
	});

	$('.licenses').slick({
		slidesToShow: 2,
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
	var l = $(this).parent().parent().find('div').length;
	$('.section5_tab').removeClass('active');
	$(this).addClass('active');
	$('.section5_block').find('div').removeClass('active');
	for (var i = 0; i < l; i++) {
		if (ind == i) {
			$('.section5_block').find('>div:eq(' + ind + ')').addClass('active');
		}
	}
});

$('.section7_tab').click(function (e) {
	e.preventDefault();
	var ind = $(this).parent().index();
	var l = $(this).parent().parent().find('li').length;
	$('.section7_tab').removeClass('active');
	$(this).addClass('active');
	$('.section7_blocks').find('div').removeClass('active');
	for (var i = 0; i < l; i++) {
		if (ind == i) {
			$('.section7_blocks').find('>div:eq(' + ind + ')').addClass('active');
		}
	}
});