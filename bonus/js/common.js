$(function () {

	// Custom JS
	$("#tel1").mask("+7 (999) 999-99-99");
	$("#tel2").mask("+7 (999) 999-99-99");

});

$(document).on('click', '.spoiler-trigger', function (e) {
	e.preventDefault();
	$('.active').toggleClass('active').parent().find('.spoiler-block').first().slideToggle(300);
	$(this).toggleClass('active');
	$(this).parent().find('.spoiler-block').first().slideToggle(300);
})

$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
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