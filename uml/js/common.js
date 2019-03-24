$(document).ready(function () {

	$(window).resize(function () {
		width_container();
		drop_menu_none();
	});

	width_container();
	drop_menu_none();
	setTimeout(popup_open, 15000);

	$('.block_slider_they_trust_us .block_slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			}
		]
	});

	$('.block_input').click(function () {
		$(this).addClass('active');
		$(this).find('input').focus();
	});

	$('.block_input input').focus(function () {
		$(this).parent().addClass('active');
	});

	$('.container_radio').click(function () {
		$(this).parents('.blocks_radio').find('.block_radio').removeClass('active');
		$(this).parents('.block_radio').addClass('active');
	});

	$('.drop').click(function () {
		if ($(window).width() < 1200) {
			if (!$(this).hasClass('active')) {
				$(this).parent('.block_menu').find('.drop_menu').slideUp(300);
				$(this).find('.drop_menu').slideDown(300);
				$(this).parent('.block_menu').find('.drop').removeClass('active');
				$(this).addClass('active');
			}
		}
		return false;
	});

	$('.burger').click(function () {
		$(this).toggleClass('action');
		$(this).next().toggleClass('action');
	});

	function drop_menu_none() {
		if ($(window).width() < 1200) {
			$('.drop_menu').css('display', 'none');
		} else {
			$('.drop_menu').css('display', 'block');
		}

	}

	function width_container() {
		if ($(window).width() < 1370) {
			$('#all_width_container').removeClass('container');
			$('#all_width_container').addClass('container_all');
		} else {
			$('#all_width_container').removeClass('container_all');
			$('#all_width_container').addClass('container');
		}
	}

	function popup_open() {
		$.fancybox.open({
			src: '#popup_big'
		});
	}

});