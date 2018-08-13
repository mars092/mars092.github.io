$(function () {

	// Custom JS

	$('.slider_work').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		center: true,
		mouseDrag: false,
		touchDrag: false,
    autoHeight:true,
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
    autoHeight:true,
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

});
