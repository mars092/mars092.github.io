$(function () {

	// Custom JS

	$('.slider_brand1').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
				breakpoint: 1618,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('.slider_brand2').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider_objects').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('.letter').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 425,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('.licenses').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		swipeToSlide: true,
		// responsive: [{
		// 	breakpoint: 992,
		// 	settings: {
		// 		slidesToShow: 1
		// 	}
		// }, ]
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