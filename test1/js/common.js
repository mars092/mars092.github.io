$(document).ready(function() {
	$(document).on('click', '.question #yes, .question #no', function (e) {
		e.preventDefault();
		$(this).parent().parent().find('td a').removeClass('active');
		$(this).addClass('active');
	});

	$(document).on('click', '.button', function (e) {
		e.preventDefault();
		var g = 0;
		for (var i = 1; i < 11; i++) {
			var r = $('.test tr:eq('+ i +') td:eq(2) a').attr('class');
			if (r == 'choice active') {
				g++;
			}
		}
		if (g < 5) {
			$('.points.5').css('display', 'block');
		}
		if (g >= 5 && g < 8) {
			$('.points.8').css('display', 'block');
		}
		if (g >= 8) {
			$('.points.10').css('display', 'block');
		}
	});

	$('.close').on('click', function () {
		$(this).parent().css('display', 'none');
	});

});