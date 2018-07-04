function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}


$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Documentation & Example: https://github.com/agragregra/uniMail
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".mfp-close").click();
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

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
$(document).ready(function() {
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
$(function(){
	$("#tell").mask("+38(099) 999-9999");
});

$(function(){
	var months=new Array(13);
	var time=new Date();
	var thismonth=months[time.getMonth() + 1];
	var date=time.getDate();
	var thisyear=time.getFullYear();
	var day=time.getDay() + 1;
	if (thisyear < 2000)
		thisyear = thisyear + 1900;
	var el = document.getElementById('year');
	if (typeof el.innerText !== 'undefined') {
		el.innerText = thisyear;
	} else {
		el.textContent = thisyear;
	}
});

$(document).ready(function(){
	
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(".dot").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	var waypoint1 = new Waypoint({
		element: document.getElementById('header'),
		handler: function(direction) {
			$('.dot li').find('a img').attr('src', 'img/led.png');
			$('.dot li').first().find('a img').attr('src', 'img/ledon.png');
		}
	})
	var waypoint1 = new Waypoint({
		element: document.getElementById('header'),
		handler: function(direction) {
			$('.dot li').find('a img').attr('src', 'img/led.png');
			$('.dot li').first().find('a img').attr('src', 'img/ledon.png');
		},
		offset: '-1'
	})
	var waypoint2 = new Waypoint({
		element: document.getElementById('range'),
		handler: function(direction) {
			$('.dot li').find('a img').attr('src', 'img/led.png');
			$('.dot li').eq(1).find('a img').attr('src', 'img/ledon.png');
		},
		offset: '1'
	})
	var waypoint2 = new Waypoint({
		element: document.getElementById('range'),
		handler: function(direction) {
			$('.dot li').find('a img').attr('src', 'img/led.png');
			$('.dot li').eq(1).find('a img').attr('src', 'img/ledon.png');
		},
		offset: '-1'
	})
	var waypoint3 = new Waypoint({
		element: document.getElementById('kont'),
		handler: function(direction) {
			$('.dot li').find('a img').attr('src', 'img/led.png');
			$('.dot li').eq(2).find('a img').attr('src', 'img/ledon.png');
		},
		offset: 'bottom-in-view'
	})

});

$(document).ready(function(){

	var form_factor1 = "form-factor1";
	var form_factor2 = "form-factor2";
	var form_factor3 = "form-factor3";
	var form_factor4 = "form-factor4";
	var form_factor5 = "form-factor5";
	var form_factor6 = "form-factor6";
	var form_factor7 = "form-factor7";
	var form_factor8 = "form-factor8";
	var form_factor9 = "form-factor9";

	var EMT_1713 = "EMT-1713";
	var EMT_1714 = "EMT-1714";
	var EMT_1715 = "EMT-1715";
	var EMT_1716 = "EMT-1716";
	var EMT_1701 = "EMT-1701";
	var EMT_1702 = "EMT-1702";
	var EMT_1703 = "EMT-1703";
	var EMT_1704 = "EMT-1704";
	var EMT_1705 = "EMT-1705";
	var EMT_1706 = "EMT-1706";
	var EMT_1707 = "EMT-1707";
	var EMT_1708 = "EMT-1708";
	var EMT_1709 = "EMT-1709";
	var EMT_1710 = "EMT-1710";
	var EMT_1711 = "EMT-1711";
	var EMT_1712 = "EMT-1712";
	var EMT_1722 = "EMT-1722";
	var EMT_1724 = "EMT-1724";
	var EMT_1726 = "EMT-1726";
	var EMT_1717 = "EMT-1717";
	var EMT_1718 = "EMT-1718";
	var EMT_1720 = "EMT-1720";

	$("#calc-block #attribute1 div label").click(function() {
		$("#calc-block #attribute1 div input").removeAttr('checked');
		var id = $(this).attr('for');
		$("#" + id).attr('checked', 'checked');
		
		$("#calc-block #attribute2 div input").removeAttr('checked').removeAttr('disabled');
		$("#calc-block #attribute3 div input").removeAttr('checked').removeAttr('disabled');
		$("#calc-block #attribute4 div input").removeAttr('checked').removeAttr('disabled');

		if (id == form_factor1) {

			for (var i = 0; i < 4; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 2 || i > 2) {
					if (i != 0) {
						$("#cap-type" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#cap-type" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 8; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 7 || i > 8) {
					if (i != 0) {
						$("#power" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#power" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}
			$("#name_produkt").text(EMT_1707);
			$("#power_tabl").text("15 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("1350 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("65х122 мм");
			$("#form_factor_tabl").text("А65");
			$("#img_product").attr('src','img/dayon/ЦБ000018844.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347004-svetodiodnaya-lampa-dayon.html');


		}

		if (id == form_factor2) {

			for (var i = 0; i < 4; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 2 || i > 2) {
					if (i != 0) {
						$("#cap-type" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#cap-type" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 8; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 5 || i > 6) {
					if (i != 0) {
						$("#power" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#power" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}
			$("#name_produkt").text(EMT_1703);
			$("#power_tabl").text("10 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("900 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("60х110 мм");
			$("#form_factor_tabl").text("А60");
			$("#img_product").attr('src','img/dayon/ЦБ000018848.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347000-svetodiodnaya-lampa-dayon.html');
		}

		if (id == form_factor3) {

			for (var i = 0; i < 4; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 2 || i > 2) {
					if (i != 0) {
						$("#cap-type" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#cap-type" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 8; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 4 || i > 4) {
					if (i != 0) {
						$("#power" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#power" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}
			$("#name_produkt").text(EMT_1701);
			$("#power_tabl").text("8 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("720 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("55х105 мм");
			$("#form_factor_tabl").text("А55");
			$("#img_product").attr('src','img/dayon/ЦБ000018850.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346998-svetodiodnaya-lampa-dayon.html');
		}

		if (id == form_factor4) {	

			for (var i = 0; i < 4; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 2 || i > 2) {
					if (i != 0) {
						$("#cap-type" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#cap-type" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 8; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 4 || i > 4) {
					if (i != 0) {
						$("#power" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#power" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 2 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}
			$("#name_produkt").text(EMT_1726);
			$("#power_tabl").text("8 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("720 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("63х100 мм");
			$("#form_factor_tabl").text("R63");
			$("#img_product").attr('src','img/dayon/ЦБ000018859.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347012-svetodiodnaya-lampa-dayon.html');
		}

		if (id == form_factor5) {

			for (var i = 0; i < 4; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 1) {
					if (i != 0) {
						$("#cap-type" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#cap-type" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 8; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 3 || i > 3) {
					if (i != 0) {
						$("#power" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#power" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 2 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}
			$("#name_produkt").text(EMT_1724);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("50х86 мм");
			$("#form_factor_tabl").text("R50");
			$("#img_product").attr('src','img/dayon/ЦБ000018860.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347011-svetodiodnaya-lampa-dayon.html');
		}

		if (id == form_factor6) {

			for (var i = 0; i < 4; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 1) {
					if (i != 0) {
						$("#cap-type" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#cap-type" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 8; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 1) {
					if (i != 0) {
						$("#power" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#power" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 2 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}
			$("#name_produkt").text(EMT_1722);
			$("#power_tabl").text("3 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("270 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("39х69 мм");
			$("#form_factor_tabl").text("R39");
			$("#img_product").attr('src','img/dayon/ЦБ000018861.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347010-svetodiodnaya-lampa-dayon.html');
		}

		if (id == form_factor7) {

			for (var i = 0; i < 4; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#cap-type" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#cap-type" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 8; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 3 || i > 3) {
					if (i != 0) {
						$("#power" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#power" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}
			$("#name_produkt").text(EMT_1709);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("37х100 мм");
			$("#form_factor_tabl").text("C37");
			$("#img_product").attr('src','img/dayon/ЦБ000018856.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347006-svetodiodnaya-lampa-dayon.html');
		}

		if (id == form_factor8) {

			for (var i = 0; i < 4; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#cap-type" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#cap-type" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 8; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 3 || i > 3) {
					if (i != 0) {
						$("#power" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#power" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}
			$("#name_produkt").text(EMT_1713);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("45х82 мм");
			$("#form_factor_tabl").text("G45");
			$("#img_product").attr('src','img/dayon/ЦБ000018852.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346994-svetodiodnaya-lampa-dayon.html');
		}

		if (id == form_factor9) {

			for (var i = 0; i < 4; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 3 || i > 3) {
					if (i != 0) {
						$("#cap-type" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#cap-type" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 8; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#power" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#power" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}
			$("#name_produkt").text(EMT_1717);
			$("#power_tabl").text("3 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("270 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("50х50 мм");
			$("#form_factor_tabl").text("GU5.3");
			$("#img_product").attr('src','img/dayon/ЦБ000018863.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347013-svetodiodnaya-lampa-dayon.html');
		}
	});

$("#calc-block #attribute2 div label").click(function() {
	var id = $(this).attr('for');
	var test_disabled = $("#" + id).attr('disabled');
	if (test_disabled != 'disabled') {
		$("#calc-block #attribute2 div input").removeAttr('checked');
		$("#" + id).attr('checked','checked');
	}

	if ($("#form-factor7").attr('checked') == 'checked') {
		if ($("#cap-type1").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1709);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("37х100 мм");
			$("#form_factor_tabl").text("C37");
			$("#img_product").attr('src','img/dayon/ЦБ000018856.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347006-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type1").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1710);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("37х100 мм");
			$("#form_factor_tabl").text("C37");
			$("#img_product").attr('src','img/dayon/ЦБ000018855.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347007-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type2").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1711);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("37х102 мм");
			$("#form_factor_tabl").text("C37");
			$("#img_product").attr('src','img/dayon/ЦБ000018858.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347008-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type2").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1712);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("37х102 мм");
			$("#form_factor_tabl").text("C37");
			$("#img_product").attr('src','img/dayon/ЦБ000018857.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347009-svetodiodnaya-lampa-dayon.html');
		}
	}

	if ($("#form-factor8").attr('checked') == 'checked') {
		if ($("#cap-type1").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1713);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("45х82 мм");
			$("#form_factor_tabl").text("G45");
			$("#img_product").attr('src','img/dayon/ЦБ000018852.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346994-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type1").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1714);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("45х82 мм");
			$("#form_factor_tabl").text("G45");
			$("#img_product").attr('src','img/dayon/ЦБ000018851.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346995-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type2").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1715);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("45х83 мм");
			$("#form_factor_tabl").text("G45");
			$("#img_product").attr('src','img/dayon/ЦБ000018853.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346996-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type2").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1716);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("45х83 мм");
			$("#form_factor_tabl").text("G45");
			$("#img_product").attr('src','img/dayon/ЦБ000018854.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346997-svetodiodnaya-lampa-dayon.html');
		}
	}

});

$("#calc-block #attribute3 div label").click(function() {
	var id = $(this).attr('for');
	var test_disabled = $("#" + id).attr('disabled');
	if (test_disabled != 'disabled') {
		$("#calc-block #attribute3 div input").removeAttr('checked');
		$("#" + id).attr('checked','checked');
	}

	if ($("#form-factor9").attr('checked') == 'checked') {

		$("#calc-block #attribute4 div input").removeAttr('checked').removeAttr('disabled');

		if ($("#power1").attr('checked') == 'checked') {

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 1 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}

			}
		}

		if ($("#power2").attr('checked') == 'checked') {

			for (var i = 0; i < 3; i++) {
				if (i == 0) {
					var k = i;
				}
				if (i < 2 || i > 2) {
					if (i != 0) {
						$("#colorful-temperature" + i).attr('disabled','disabled');
					}
					k = i;
				} else {
					var j = i;
					if (k == j - 1) {
						$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
					}
				}
			}

		}

	}

	if ($("#form-factor2").attr('checked') == 'checked') {
		if ($("#colorful-temperature1").attr('checked') == 'checked' && $("#power5").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1703);
			$("#power_tabl").text("10 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("900 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("60х110 мм");
			$("#form_factor_tabl").text("А60");
			$("#img_product").attr('src','img/dayon/ЦБ000018848.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347000-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#colorful-temperature2").attr('checked') == 'checked' && $("#power5").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1704);
			$("#power_tabl").text("10 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("900 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("60х110 мм");
			$("#form_factor_tabl").text("А60");
			$("#img_product").attr('src','img/dayon/ЦБ000018847.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347001-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#colorful-temperature1").attr('checked') == 'checked' && $("#power6").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1705);
			$("#power_tabl").text("12 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("1080 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("60х110 мм");
			$("#form_factor_tabl").text("А60");
			$("#img_product").attr('src','img/dayon/ЦБ000018846.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347002-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#colorful-temperature2").attr('checked') == 'checked' && $("#power6").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1706);
			$("#power_tabl").text("12 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("1080 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("60х110 мм");
			$("#form_factor_tabl").text("А60");
			$("#img_product").attr('src','img/dayon/ЦБ000018845.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347003-svetodiodnaya-lampa-dayon.html');
		}
	}

	if ($("#form-factor9").attr('checked') == 'checked') {
		if ($("#power1").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1717);
			$("#power_tabl").text("3 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("270 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("50х50 мм");
			$("#form_factor_tabl").text("MR16");
			$("#img_product").attr('src','img/dayon/ЦБ000018863.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347013-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#power1").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1718);
			$("#power_tabl").text("3 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("270 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("50х50 мм");
			$("#form_factor_tabl").text("MR16");
			$("#img_product").attr('src','img/dayon/ЦБ000018862.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347014-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#power2").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1720);
			$("#power_tabl").text("5 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("450 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("50х50 мм");
			$("#form_factor_tabl").text("MR16");
			$("#img_product").attr('src','img/dayon/ЦБ000018864.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347015-svetodiodnaya-lampa-dayon.html');
		}
	}
});

$("#calc-block #attribute4 div label").click(function() {
	var id = $(this).attr('for');
	var test_disabled = $("#" + id).attr('disabled');
	if (test_disabled != 'disabled') {
		$("#calc-block #attribute4 div input").removeAttr('checked');
		$("#" + id).attr('checked','checked');
	}

	if ($("#form-factor1").attr('checked') == 'checked' && id == "colorful-temperature1") {
		$("#name_produkt").text(EMT_1707);
		$("#power_tabl").text("15Вт");
		$("#lighting_angle_tabl").text("220°");
		$("#light_flow_tabl").text("1350 Лм");
		$("#colorful_temperature_tabl").text("3000 К");
		$("#dimensions_tabl").text("65х122 мм");
		$("#form_factor_tabl").text("А65");
		$("#img_product").attr('src','img/dayon/ЦБ000018844.jpg');
		$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347004-svetodiodnaya-lampa-dayon.html');
	}	

	if ($("#form-factor1").attr('checked') == 'checked' && id == "colorful-temperature2") {
		$("#name_produkt").text(EMT_1708);
		$("#colorful_temperature_tabl").text("4100 К");
		$("#img_product").attr('src','img/dayon/ЦБ000018843.jpg');
		$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347005-svetodiodnaya-lampa-dayon.html');
	}

	if ($("#form-factor2").attr('checked') == 'checked') {
		if ($("#colorful-temperature1").attr('checked') == 'checked' && $("#power5").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1703);
			$("#power_tabl").text("10 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("900 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("60х110 мм");
			$("#form_factor_tabl").text("А60");
			$("#img_product").attr('src','img/dayon/ЦБ000018848.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347000-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#colorful-temperature2").attr('checked') == 'checked' && $("#power5").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1704);
			$("#power_tabl").text("10 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("900 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("60х110 мм");
			$("#form_factor_tabl").text("А60");
			$("#img_product").attr('src','img/dayon/ЦБ000018847.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347001-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#colorful-temperature1").attr('checked') == 'checked' && $("#power6").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1705);
			$("#power_tabl").text("12 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("1080 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("60х110 мм");
			$("#form_factor_tabl").text("А60");
			$("#img_product").attr('src','img/dayon/ЦБ000018846.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347002-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#colorful-temperature2").attr('checked') == 'checked' && $("#power6").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1706);
			$("#power_tabl").text("12 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("1080 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("60х110 мм");
			$("#form_factor_tabl").text("А60");
			$("#img_product").attr('src','img/dayon/ЦБ000018845.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347003-svetodiodnaya-lampa-dayon.html');
		}
	}

	if ($("#form-factor3").attr('checked') == 'checked') {
		if ($("#colorful-temperature1").attr('checked') == 'checked' && $("#power4").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1701);
			$("#power_tabl").text("8 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("720 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("55х105 мм");
			$("#form_factor_tabl").text("А55");
			$("#img_product").attr('src','img/dayon/ЦБ000018850.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346998-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#colorful-temperature2").attr('checked') == 'checked' && $("#power4").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1702);
			$("#power_tabl").text("8 Вт");
			$("#lighting_angle_tabl").text("220°");
			$("#light_flow_tabl").text("720 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("55х105 мм");
			$("#form_factor_tabl").text("А55");
			$("#img_product").attr('src','img/dayon/ЦБ000018849.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346999-svetodiodnaya-lampa-dayon.html');
		}
	}

	if ($("#form-factor7").attr('checked') == 'checked') {
		if ($("#cap-type1").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1709);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("37х100 мм");
			$("#form_factor_tabl").text("C37");
			$("#img_product").attr('src','img/dayon/ЦБ000018856.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347006-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type1").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1710);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("37х100 мм");
			$("#form_factor_tabl").text("C37");
			$("#img_product").attr('src','img/dayon/ЦБ000018855.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347007-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type2").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1711);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("37х102 мм");
			$("#form_factor_tabl").text("C37");
			$("#img_product").attr('src','img/dayon/ЦБ000018858.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347008-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type2").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1712);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("37х102 мм");
			$("#form_factor_tabl").text("C37");
			$("#img_product").attr('src','img/dayon/ЦБ000018857.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347009-svetodiodnaya-lampa-dayon.html');
		}
	}

	if ($("#form-factor8").attr('checked') == 'checked') {
		if ($("#cap-type1").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1713);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("45х82 мм");
			$("#form_factor_tabl").text("G45");
			$("#img_product").attr('src','img/dayon/ЦБ000018852.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346994-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type1").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1714);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("45х82 мм");
			$("#form_factor_tabl").text("G45");
			$("#img_product").attr('src','img/dayon/ЦБ000018851.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346995-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type2").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1715);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("45х83 мм");
			$("#form_factor_tabl").text("G45");
			$("#img_product").attr('src','img/dayon/ЦБ000018853.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346996-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#cap-type2").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1716);
			$("#power_tabl").text("6 Вт");
			$("#lighting_angle_tabl").text("180°");
			$("#light_flow_tabl").text("540 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("45х83 мм");
			$("#form_factor_tabl").text("G45");
			$("#img_product").attr('src','img/dayon/ЦБ000018854.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645346997-svetodiodnaya-lampa-dayon.html');
		}
	}

	if ($("#form-factor9").attr('checked') == 'checked') {
		if ($("#power1").attr('checked') == 'checked' && $("#colorful-temperature1").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1717);
			$("#power_tabl").text("3 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("270 Лм");
			$("#colorful_temperature_tabl").text("3000 К");
			$("#dimensions_tabl").text("50х50 мм");
			$("#form_factor_tabl").text("MR16");
			$("#img_product").attr('src','img/dayon/ЦБ000018863.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347013-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#power1").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1718);
			$("#power_tabl").text("3 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("270 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("50х50 мм");
			$("#form_factor_tabl").text("MR16");
			$("#img_product").attr('src','img/dayon/ЦБ000018862.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347014-svetodiodnaya-lampa-dayon.html');
		}
		if ($("#power2").attr('checked') == 'checked' && $("#colorful-temperature2").attr('checked') == 'checked') {
			$("#name_produkt").text(EMT_1720);
			$("#power_tabl").text("5 Вт");
			$("#lighting_angle_tabl").text("110°");
			$("#light_flow_tabl").text("450 Лм");
			$("#colorful_temperature_tabl").text("4100 К");
			$("#dimensions_tabl").text("50х50 мм");
			$("#form_factor_tabl").text("MR16");
			$("#img_product").attr('src','img/dayon/ЦБ000018864.jpg');
			$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347015-svetodiodnaya-lampa-dayon.html');
		}
	}

});

$("#calc-block2 #attribute3 div label").click(function() {
	var id = $(this).attr('for');
	var test_disabled = $("#" + id).attr('disabled');
	if (test_disabled != 'disabled') {
		$("#calc-block2 #attribute3 div input").removeAttr('checked');
		$("#" + id).attr('checked','checked');
	}

	if ($("#pj_power1").attr('checked') == 'checked') {
		$("#name_produkt_2").text("LSR-1501");
		$("#power_tabl_2").text("10 Вт");
		$("#light_flow_tabl_2").text("750 Лм");
		$("#dimensions_tabl_2").text("27x125x104 мм");
		$("#img_product").attr('src','img/dayon/ЦБ000018865.jpg');
		$("#link_produkt_2").attr('href','https://elektromarket-tavrii.com.ua/p645347016-prozhektor-svetodiodnyj-ulichnyj.html');
	}
	if ($("#pj_power2").attr('checked') == 'checked') {
		$("#name_produkt_2").text("LSR-1502");
		$("#power_tabl_2").text("20 Вт");
		$("#light_flow_tabl_2").text("1500 Лм");
		$("#dimensions_tabl_2").text("27x125x104 мм");
		$("#img_product").attr('src','img/dayon/ЦБ000018866.jpg');
		$("#link_produkt_2").attr('href','https://elektromarket-tavrii.com.ua/p645347017-prozhektor-svetodiodnyj-ulichnyj.html');
	}
	if ($("#pj_power3").attr('checked') == 'checked') {
		$("#name_produkt_2").text("LSR-1503");
		$("#power_tabl_2").text("30 Вт");
		$("#light_flow_tabl_2").text("2250 Лм");
		$("#dimensions_tabl_2").text("28x152x125 мм");
		$("#img_product").attr('src','img/dayon/ЦБ000018867.jpg');
		$("#link_produkt_2").attr('href','https://elektromarket-tavrii.com.ua/p645347018-prozhektor-svetodiodnyj-ulichnyj.html');
	}
	if ($("#pj_power4").attr('checked') == 'checked') {
		$("#name_produkt_2").text("LSR-1505");
		$("#power_tabl_2").text("50 Вт");
		$("#light_flow_tabl_2").text("3750 Лм");
		$("#dimensions_tabl_2").text("27x209x168 мм");
		$("#img_product").attr('src','img/dayon/ЦБ000018868.jpg');
		$("#link_produkt_2").attr('href','https://elektromarket-tavrii.com.ua/p645347019-prozhektor-svetodiodnyj-ulichnyj.html');
	}

});

$("#tablinks1").click(function() {
	$("#calc-block #attribute1 div input").removeAttr('checked');
	$("#form-factor1").attr('checked','checked').prop('checked', true);
	$("#calc-block #attribute2 div input").removeAttr('checked').removeAttr('disabled');
	$("#calc-block #attribute3 div input").removeAttr('checked').removeAttr('disabled');
	$("#calc-block #attribute4 div input").removeAttr('checked').removeAttr('disabled');
	if ($("#form-factor1").attr('checked') == 'checked') {

		for (var i = 0; i < 4; i++) {
			if (i == 0) {
				var k = i;
			}
			if (i < 2 || i > 2) {
				if (i != 0) {
					$("#cap-type" + i).attr('disabled','disabled');
				}
				k = i;
			} else {
				var j = i;
				if (k == j - 1) {
					$("#cap-type" + i).prop('checked', true).attr('checked','checked');
				}
			}
		}

		for (var i = 0; i < 8; i++) {
			if (i == 0) {
				var k = i;
			}
			if (i < 7 || i > 8) {
				if (i != 0) {
					$("#power" + i).attr('disabled','disabled');
				}
				k = i;
			} else {
				var j = i;
				if (k == j - 1) {
					$("#power" + i).prop('checked', true).attr('checked','checked');
				}
			}
		}

		for (var i = 0; i < 3; i++) {
			if (i == 0) {
				var k = i;
			}
			if (i < 1 || i > 2) {
				if (i != 0) {
					$("#colorful-temperature" + i).attr('disabled','disabled');
				}
				k = i;
			} else {
				var j = i;
				if (k == j - 1) {
					$("#colorful-temperature" + i).prop('checked', true).attr('checked','checked');
				}
			}
		}
		$("#name_produkt").text(EMT_1707);
		$("#power_tabl").text("15 Вт");
		$("#lighting_angle_tabl").text("220°");
		$("#light_flow_tabl").text("1350 Лм");
		$("#colorful_temperature_tabl").text("3000 К");
		$("#dimensions_tabl").text("65х122 мм");
		$("#form_factor_tabl").text("А65");
		$("#img_product").attr('src','img/dayon/ЦБ000018844.jpg');
		$("#link_produkt").attr('href','https://elektromarket-tavrii.com.ua/p645347004-svetodiodnaya-lampa-dayon.html');


	}

});
$("#tablinks2").click(function() {
	$("#calc-block2 #attribute3 div input").removeAttr('checked');
	$("#pj_power1").attr('checked','checked').prop('checked', true);
	if ($("#pj_power1").attr('checked') == 'checked') {
		$("#name_produkt_2").text("LSR-1501");
		$("#power_tabl_2").text("10 Вт");
		$("#light_flow_tabl_2").text("750 Лм");
		$("#dimensions_tabl_2").text("27x125.5x104 мм");
		$("#img_product").attr('src','img/dayon/ЦБ000018865.jpg');
		$("#link_produkt_2").attr('href','https://elektromarket-tavrii.com.ua/p645347016-prozhektor-svetodiodnyj-ulichnyj.html');
	}
});

});