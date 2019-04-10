$(document).ready(function () {

	$('.list_we_are_suitable li .ico').click(function () {
		$(this).find('img').toggleClass('active');
	});

	var total_number = ($('.slider_albums .item').length);
	$('.block_albums .total_number').html(total_number);

	total_number = 0;

	total_number = ($('.slider_video .item').length);
	$('.block_video_nums .total_number').html(total_number);

	$('.slider_albums').slick({
		infinite: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false,
		swipe: false,
		dots: true
	});

	$('.slider_video').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false,
		swipe: false,
		dots: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					draggable: false,
					swipe: false,
					dots: true,
				}
			},
			{
				breakpoint: 575,
				settings: {
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					draggable: false,
					swipe: false,
					dots: true,
				}
			}
		]
	});

	$('.slider_albums_arrow_dot .slick-next').click(function () {
		number_now();
		number_now_video();
	});

	$('.slider_albums_arrow_dot .slick-prev').click(function () {
		number_now();
		number_now_video();
	});

	$('.slider_albums_arrow_dot .slick-dots li button').click(function () {
		setTimeout(number_now, 500);
		setTimeout(number_now_video, 500);
	});

	$("input[name=date-of-birth]").mask("99/99/9999");
	$("input[name=tel]").mask("+7 (999) 999-99-99");

	$('.go_to').click(function (e) {
		e.preventDefault();

		var id = $(this).attr('href'),

			top = $(id).offset().top;

		$('body,html').animate({
			scrollTop: top
		}, 500);
	});

	$('.burger').click(function () {
		$('.block_menu .item .menu').toggleClass('active');
	});

	$('.block_menu .item .menu li a').click(function () {
		$('.block_menu .item .menu').toggleClass('active');
	});


	function number_now() {
		var number_now = $('.slider_albums').find('.slick-current').attr('data-slick-index');
		number_now++;
		$('.block_albums .number_now').html(number_now);
	}

	function number_now_video() {
		var number_now = $('.slider_video').find('.slick-current').attr('data-slick-index');
		number_now++;
		$('.block_video_nums .number_now').html(number_now);
	}

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$('.main_form .block_submit .submit').html('Отправлено');
			setTimeout(function () {
				// Done Functions
				// th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});