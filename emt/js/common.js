$(function () {

	// Custom JS

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			dataLayer.push({
				'event': 'order'
			});
			setTimeout(function () {
				$('.form_body input').hide();
				$('.form_body button').hide();
				$('.form_body h2').show();
			}, 1000);
			setTimeout(function () {
				$('.form_body input').show();
				$('.form_body button').show();
				$('.form_body h2').hide();
				$('.mfp-close').click();
				// Done Functions
				th.trigger("reset");
			}, 4000);
		});
		return false;
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		center: true,
		dots: false,
		nav: false,
		autoplayTimeout: 3000,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			905: {
				items: 2
			},
			1490: {
				items: 3
			}
		}
	});

});

document.getElementById("defaultOpen").click();

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

$(document).ready(function () {
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

$(function ($) {
	$("#tell").mask("+38(099) 999-9999");
	$("#tell_2").mask("+38(099) 999-9999");
	$("#tell_3").mask("+38(099) 999-9999");
});

$('.select_price').parent().parent().hide();