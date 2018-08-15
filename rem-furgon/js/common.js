$(function () {

	// Custom JS

	$('.slider_work').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		center: true,
		mouseDrag: false,
		touchDrag: false,
		autoHeight: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.slider_work_before').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		mouseDrag: false,
		touchDrag: false,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.interesting_materials').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		mouseDrag: false,
		touchDrag: false,
		autoHeight: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 3
			}
		}
	});

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

});

var sticky = new Waypoint.Sticky({
	element: $('.menu')[0]
})

$('.header_menu_button').click(function (e) {
	e.preventDefault();
	$('.form_right').toggleClass('form_right_active');
});