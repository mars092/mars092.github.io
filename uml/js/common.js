$(document).ready(function () {

	$(window).resize(function () {
		width_container();
		drop_menu_none();
	});

	width_container();
	drop_menu_none();
	setTimeout(popup_open, 15000);

	$('.block_slider_they_trust_us .block_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		responsive: [{
				breakpoint: 1200,
				settings: {
					arrows: false,
					draggable: false,
					slidesToShow: 4,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
					pauseOnFocus: false,
					pauseOnHover: false,
					swipe: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			}
		]
	});

	$('.block_input').click(function () {
		$(this).addClass('active');
		$(this).find('input').focus();
	});

	$('.block_input input').focus(function () {
		$(this).parent().addClass('active');
	});

	$('.container_radio').click(function () {
		$(this).parents('.blocks_radio').find('.block_radio').removeClass('active');
		$(this).parents('.block_radio').addClass('active');
	});

	$('.drop').click(function () {
		if ($(window).width() < 1200) {
			if (!$(this).hasClass('active')) {
				$(this).parent('.block_menu').find('.drop_menu').slideUp(300);
				$(this).find('.drop_menu').slideDown(300);
				$(this).parent('.block_menu').find('.drop').removeClass('active');
				$(this).addClass('active');
			}
		}
		return false;
	});

	$('.burger').click(function () {
		$(this).toggleClass('action');
		$(this).next().toggleClass('action');
	});

	function drop_menu_none() {
		if ($(window).width() < 1200) {
			$('.drop_menu').css('display', 'none');
		} else {
			$('.drop_menu').css('display', 'block');
		}

	}

	function width_container() {
		if ($(window).width() < 1370) {
			$('#all_width_container').removeClass('container');
			$('#all_width_container').addClass('container_all');
		} else {
			$('#all_width_container').removeClass('container_all');
			$('#all_width_container').addClass('container');
		}
	}

	function popup_open() {
		if ($('div').is('#popup_big')) {
			$.fancybox.open({
				src: '#popup_big'
			});
		}
	}

	var x, i, j, selElmnt, a, b, c;
	/* Look for any elements with the class "custom-select": */
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		/* For each element, create a new DIV that will act as the selected item: */
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		/* For each element, create a new DIV that will contain the option list: */
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < selElmnt.length; j++) {
			/* For each option in the original select element,
			create a new DIV that will act as an option item: */
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function (e) {
				/* When an item is clicked, update the original select box,
				and the selected item: */
				var y, i, k, s, h;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				h = this.parentNode.previousSibling;
				for (i = 0; i < s.length; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						for (k = 0; k < y.length; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function (e) {
			/* When the select box is clicked, close any other select boxes,
			and open/close the current select box: */
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
	}

	function closeAllSelect(elmnt) {
		/* A function that will close all select boxes in the document,
		except the current select box: */
		var x, y, i, arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		for (i = 0; i < y.length; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
			} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < x.length; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}

	/* If the user clicks anywhere outside the select box,
	then close all select boxes: */
	document.addEventListener("click", closeAllSelect);

});