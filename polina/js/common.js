$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

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
	
	$(".buttonMnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".buttonMnu").click(function() {
		if ($(".topMnu").is(":visible")) {
			$(".topMnu").fadeOut(600);
			$(".sw-topper").toggleClass("exchangeColorSandwich");
			$(".sw-bottom").toggleClass("exchangeColorSandwich");
			$(".buttonMnu").toggleClass("exchangeColorButtonMnu");
			enableScroll();
		} else {
			$(".topMnu").fadeIn(600);
			$(".sw-topper").toggleClass("exchangeColorSandwich");
			$(".sw-bottom").toggleClass("exchangeColorSandwich");
			$(".buttonMnu").toggleClass("exchangeColorButtonMnu");
			disableScroll();
			
			$(".topMnu, .link").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 500);
			$(".topMnu").fadeOut(600);
			$(".sw-topper").removeClass("exchangeColorSandwich");
			$(".sw-bottom").removeClass("exchangeColorSandwich");
			$(".buttonMnu").removeClass("exchangeColorButtonMnu");
			$(".sandwich").removeClass("active");
			enableScroll();
		});
		}
	});



	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;  
	}

	function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		};
	};

	function disableScroll() {
  if (window.addEventListener) // older FF
  	window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
};

function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.onmousewheel = document.onmousewheel = null; 
	window.onwheel = null; 
	window.ontouchmove = null;  
	document.onkeydown = null;  
};

$(".buttonGoDown, .link").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});