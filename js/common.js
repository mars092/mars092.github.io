$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

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

	jQuery('.spoiler-text').hide()
	jQuery('.spoiler').click(function(){
		jQuery(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
	})
});

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

/*$(document).ready(function(){
	var waypoint = new Waypoint({
		element: document.getElementById('header'),
		handler: function(direction) {
			$("#elem1").addClass("active")
			$("#elem2").removeClass("active")
			$("#elem3").removeClass("active")
			$("#elem4").removeClass("active")
		},
		offset: -50 
	})
	var waypoint = new Waypoint({
		element: document.getElementById('section2'),
		handler: function(direction) {
			$("#elem1").removeClass("active")
			$("#elem2").addClass("active")
			$("#elem3").removeClass("active")
			$("#elem4").removeClass("active")
		}
	})
	var waypoint = new Waypoint({
		element: document.getElementById('section3'),
		handler: function(direction) {
			$("#elem1").removeClass("active")
			$("#elem2").removeClass("active")
			$("#elem3").addClass("active")
			$("#elem4").removeClass("active")
		}
	})
	var waypoint = new Waypoint({
		element: document.getElementById('section4'),
		handler: function(direction) {
			$("#elem1").removeClass("active")
			$("#elem2").removeClass("active")
			$("#elem3").removeClass("active")
			$("#elem4").addClass("active")
		},
		offset: 100 
	})
});*/
/*$(document).ready(function(){
	$(".notifications").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});*/