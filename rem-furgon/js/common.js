$(function () {

	// Custom JS

	$('.slider_work').owlCarousel({
		loop: false,
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
		loop: false,
		margin: 30,
		nav: true,
		mouseDrag: false,
		touchDrag: false,
		autoHeight: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
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


$(document).ready(function () {
	$("#button").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1500);
	});
});

$(document).ready(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});