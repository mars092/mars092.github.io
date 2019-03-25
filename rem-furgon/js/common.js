$(function () {

	// Custom JS

	$('.interesting_materials').slick({
		dots: true,
		draggable: false,
		touchMove: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1269,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.slider_work').slick({
		dots: true,
		draggable: false,
		touchMove: false
	});

	$('.slider_work_before1').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_after1'
	});
	$('.slider_work_after1').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_before1'
	});

	$('.slider_work_before2').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_after2'
	});
	$('.slider_work_after2').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_before2'
	});

	$('.slider_work_before3').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_after3'
	});
	$('.slider_work_after3').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_before3'
	});

	$('.slider_work_before4').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_after4'
	});
	$('.slider_work_after4').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_before4'
	});

	$('.slider_work_before5').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_after5'
	});
	$('.slider_work_after5').slick({
		draggable: false,
		touchMove: false,
		asNavFor: '.slider_work_before5'
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

$("#tel_1").mask("+7 (999) 999-9999");
$("#tel_2").mask("+7 (999) 999-9999");
$("#tel_3").mask("+7 (999) 999-9999");

$(document).ready(function () {
	var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
	var delay = 1000; // Задержка прокрутки
	$(document).ready(function () {
		$(window).scroll(function () { // При прокрутке попадаем в эту функцию
			/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
			if ($(this).scrollTop() > top_show) $('#top').fadeIn();
			else $('#top').fadeOut();
		});
		$('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
			/* Плавная прокрутка наверх */
			$('body, html').animate({
				scrollTop: 0
			}, delay);
		});
	});
});