$(function () {

	// Custom JS

	$("#toggle").click(function() {
		$(this).toggleClass("on");
		$('.section7_block_info').toggleClass('mini');
	});

	$("#phone1").mask("+7 (999) 999-99-99");
	$("#phone2").mask("+7 (999) 999-99-99");
	$("#phone3").mask("+7 (999) 999-99-99");
	$("#phone4").mask("+7 (999) 999-99-99");
	$("#phone5").mask("+7 (999) 999-99-99");
	$("#phone6").mask("+7 (999) 999-99-99");

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		mouseDrag: false,
		mouseDrag: false,
		dots: false,
		animateOut: 'fadeOut',
		items: 1,
		autoHeight: true
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
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

	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			setTimeout(function () {
				$('.form_callback input').hide();
				$('.form_callback button').hide();
				$('.form_callback').css('border', 'none');
				$('.form_callback').css('max-width', '510px');
				$('.answer').show();
			}, 1000);
			setTimeout(function () {
				$('.form_callback input').show();
				$('.form_callback button').show();
				$('.form_callback').css('border', '5px solid #fff');
				$('.form_callback').css('max-width', '431px');
				$('.answer').hide();
				$('.mfp-close').click();
				// Done Functions
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});

});

$(function () {
	$('.top_block video').videoCrop(function () {
		$(this)[0].play();
	});

	$(window).on('resize', function () {
		$('.top_block').css('height', $(window).height());
	});
});

$(window).on('load', function () {
	$('.top_block').css('height', $(window).height());
});


jQuery.fn.videoCrop = function (callback) {
	var $this = this;

	function imageCrop(callback) {
		$this.removeClass('by_width by_height').each(function () {
			if (this.complete) {
				if (jQuery(this).width() / jQuery(this).height() >= jQuery(this).parent().width() / jQuery(this).parent().height()) {
					jQuery(this).addClass('by_height');
				} else {
					jQuery(this).addClass('by_width');
				}

				if (typeof callback == 'function') {
					callback.call(this);
				}
			} else {
				jQuery(this).on('loadeddata', function () {
					if (jQuery(this).width() / jQuery(this).height() >= jQuery(this).parent().width() / jQuery(this).parent().height()) {
						jQuery(this).addClass('by_height');
					} else {
						jQuery(this).addClass('by_width');
					}

					if (typeof callback == 'function') {
						callback.call(this);
					}
				});
			}
		});
	}

	imageCrop(callback);
	jQuery(window).resize(function () {
		imageCrop(callback);
	});
};