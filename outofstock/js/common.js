$(function () {

	// Custom JS

});

$('.burger').click(function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$('.mask_header').toggleClass('active');
});