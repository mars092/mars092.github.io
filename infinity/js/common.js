$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

/*попап*/
$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	/*спойлеры*/
	jQuery('.spoiler-text').hide()
	jQuery('.spoiler').click(function(){
		jQuery(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
	})
});

/*паралакс эфект*/
$(document).ready(function(){
	// Кешируем объект окна
	$window = $(window);

	$('header[data-type="background"]').each(function(){
     var $bgobj = $(this); // Назначаем объект

     $(window).scroll(function() {

		// Прокручиваем фон со скоростью var.
		// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Размещаем все вместе в конечной точке
		var coords = '50% '+ yPos + 'px';

		// Смещаем фон
		$bgobj.css({ backgroundPosition: coords });
		
	}); 

   });


});