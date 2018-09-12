(function () {

  $('.slider').slick({
    // mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="/img/slider-arrLeft.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="/img/slider-arrRight.png" alt=""></button>',
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 651,
      settings: {
        // dots: false,
        swipe: false
      }
    }]
  });

  var getBodyScrollTop, scrollTo;

  // Cache selectors
  var lastId,
    topMenu = $(".desktop_menu"),
    topMenuMob = $(".main-mnu"),
    topMenuHeight = topMenu.outerHeight() + 47,
    menuItems = topMenu.find("a"),
    menuItemsMob = topMenuMob.find("a"),
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });
  menuItemsMob.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
  });






  getBodyScrollTop = function () {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  };


}).call(this);



$(document).ready(function () {


  var isFF = true;
  var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
      if (isFF) {
        if (sheet.cssRules.length > 0) {
          sheet.deleteRule(0);
        }
        try {
          sheet.insertRule(selector + "{" + css + "}", 0);
        } catch (ex) {
          isFF = false;
        }
      }
    };
  })(document.createElement("style"));

  function installDefaultGradientInput(selector, defaultValue) {
    var maxValue = $(selector).attr('max');
    var minValue = $(selector).attr('min');

    var defaultValue = defaultValue;

    var division = (defaultValue - minValue) * 100 / (maxValue - minValue);

    $(selector).css('background-image', 'linear-gradient(to right, #ff0000 ' + division + '%, #e8e8e8 ' + division + '%)');
    $(selector + "+ .border-slider").css('width', 'calc(' + division + '% + 8px)');
  }

  var defaultTransaction = 500000;
  $('.value-transaction').val(makeCorrectNumberFormat(defaultTransaction));
  var defaultPercent = 15;
  $('.value-percent').val(defaultPercent + "%");
  var defaultPeak = 3;
  $('.value-peak').val(defaultPeak);

  installDefaultGradientInput('input#transaction', defaultTransaction);
  installDefaultGradientInput('input#percent', defaultPercent);
  installDefaultGradientInput('input#peak', defaultPeak);

  $('.result').text(countOnline(defaultTransaction, defaultPercent, defaultPeak));

  var onlineCass = countOnline(defaultTransaction, defaultPercent, defaultPeak);

  $('.for-year').text(makeCorrectNumberFormat((countCostMonth(onlineCass, defaultTransaction) / 12).toFixed(0)) + "р.");

  $('.for-3years').text(makeCorrectNumberFormat(countCostMonth(onlineCass, defaultTransaction)) + "р.");

  $('.ranges input[type="range"]').on("propertychange input change", function () {

    setGradient($(this));

    var transaction = +$('input#transaction').val();
    $('.value-transaction').val(makeCorrectNumberFormat(transaction));
    var percent = +$('input#percent').val();
    $('.value-percent').val(percent + "%");
    var peak = +$('input#peak').val();
    $('.value-peak').val(peak);

    printResult(transaction, percent, peak);
  });

  function setGradient(inputSelector) {

    var transaction = +$('input#transaction').val();

    var percent = +$('input#percent').val();

    var peak = +$('input#peak').val();

    var inputValue = $(inputSelector).val();
    var maxValue = $(inputSelector).attr('max');
    var minValue = $(inputSelector).attr('min');
    var division = (inputValue - minValue) * 100 / (maxValue - minValue);

    $(inputSelector).css('background-image', 'linear-gradient(to right, #ff0000 ' + division + '%, #e8e8e8 ' + division + '%)');

    $(inputSelector).next(".border-slider").css('width', 'calc(' + division + '% - 8px)');
  }

  function printResult(transaction, percent, peak) {
    $('.result').text(countOnline(transaction, percent, peak));

    var onlineCass = countOnline(transaction, percent, peak);

    $('.for-year').text(makeCorrectNumberFormat((countCostMonth(onlineCass, transaction) / 12).toFixed(0)) + "р.");

    $('.for-3years').text(makeCorrectNumberFormat(countCostMonth(onlineCass, transaction)) + "р.");
  }

  $('.ranges input[type="text"]').on('click focusin', function () {
    this.value = '';
  });

  $('.ranges input[type="text"]').on("change keyup", function () {

    $(this).next('input[type="range"]').val(+$(this).val());

    var transaction = +$('input#transaction').val();

    var percent = +$('input#percent').val();

    var peak = +$('input#peak').val();

    printResult(transaction, percent, peak);

    setGradient($(this).next('input[type="range"]'));
  });

  $('.ranges input[type="text"]').on('blur', function () {
    var maxValue = +$(this).next('input[type="range"]').attr('max');
    var minValue = +$(this).next('input[type="range"]').attr('data-min');
    var currentValue = +$(this).val();
    var currentId = $(this).attr('id');
    var currentRange = $(this).next('input[type="range"]');

    if (currentValue > maxValue) {
      $(this).val(maxValue);
    } else if (currentValue === 0) {

      $(this).val(minValue);

    }

    currentRange.val($(this).val());

    $(this).val(makeCorrectNumberFormat($(this).val()));

    setGradient(currentRange);

    if (currentId === 'value-percent') {
      $(this).val($(this).val() + "%");
    }
  });

  function countOnline(transaction, percent, peak) {
    var kktp = Math.ceil(peak / 2);
    var kktv = Math.ceil((transaction / 12) / 23000);
    var result = Math.ceil(Math.max(kktv, kktp) * (1 + percent / 100));

    return result;
  }

  function countCostYear(transaction, online) {
    var fn = 6100 * (transaction / 160000);
    var allkkt = 2000 * 12 * online;
    var result = fn + allkkt;

    return result;
  }

  function countCostMonth(kktq, transaction) {
    if (kktq === 1) {
      return 6100 + 3000 * 12;
    } else {
      return (2000 * 12) * kktq + (6100 * (transaction / 160000).toFixed(0));
    }
  }

  function makeCorrectNumberFormat(num) {
    num = "" + num;
    if (num.length < 5) {
      return num;
    }
    return num.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }


  function heightDetect() {
    $(".block-height").css("height", $(window).height());
  };
  heightDetect();
  $(window).resize(function () {
    heightDetect();//file:///C:/Users/Julia/Downloads/Telegram Desktop/modal.css
  });


  $(".ob1").click(function () {
    $("#fx2, #fx3").removeClass("open");
    $("#fx1").toggleClass("open");
  });
  file:///C:/Users/Julia/Downloads/Telegram Desktop/modal.css
  $(".ob2").click(function () {
    $("#fx1, #fx3").removeClass("open");
    $("#fx2").toggleClass("open");
  });

  $(".ob3").click(function () {
    $("#fx1, #fx2").removeClass("open");
    $("#fx3").toggleClass("open");
  });

  $(".close").click(function () {
    description
    $(".fix-content").removeClass("open");
  });

  $(".toggle-mnu").click(function () {
    $(this).toggleClass("on");
    $(".main-mnu").slideToggle();
    return false;
  });
});

$(document).ready(function () {



  $(".call-form-3").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
      success: function () {
        document.location.href = 'typ.html';
      }
    });
    return false;
  });

  // var indexSubmit = 0;
  // var indexSubmit2 = 0;

  // $(".call-form-6").submit(function() {
  //   if (indexSubmit === 0) {
  //     indexSubmit = 1;
  //   $.ajax({
  //     type: "POST",
  //     url: "/mail",
  //     data: $(this).serialize(),
  //     success: function() {
  //       document.location.href = '/typ2.html';
  //     }
  //   });
  //   return false;
  //   }
  //   return false;
  // });

  // $(".call-form-3").submit(function() {
  //   if (indexSubmit2 === 0) {
  //     indexSubmit2 = 1;
  //   $.ajax({
  //     type: "POST",
  //     url: "/mail",
  //     data: $(this).serialize(),
  //     success: function() {
  //       document.location.href = '/typ2.html';
  //     }
  //   });
  //   return false;
  //   }
  //   return false;
  // });


  var ModalOpenIndex = 0;

  // function leavePage() {
  //   // console.log('я запустился')
  //   $("body").on('mouseleave', function () {
  //     if (!($('#callBackForm-8').hasClass('in')) && !($('#callBackForm-7').hasClass('in')) && !($('#callBackForm-6').hasClass('in'))) {
  //       if (ModalOpenIndex === 0) {
  //         $("#callBackForm-3").modal('show');
  //         ModalOpenIndex = 1;
  //       }
  //     }
  //   });
  // }

  // setTimeout(leavePage, 15000);


  // });

  $('.modal__signup').on('click', function () {
    $('.close').trigger('click');
  });

  $('.modal__signin').on('click', function () {
    $('.close').trigger('click');
  });

  $('.modal__forgetPassword').on('click', function () {
    $('.close').trigger('click');
  });

  $('.modal__rememberPassword').on('click', function () {
    $('.close').trigger('click');
  });

});


// маска телефона
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function (a) { var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c); a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function (a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) }, unmask: function () { return this.trigger("unmask") }, mask: function (c, g) { var h, i, j, k, l, m, n, o; if (!c && this.length > 0) { h = a(this[0]); var p = h.data(a.mask.dataName); return p ? p() : void 0 } return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) { "?" == b ? (n-- , k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null) }), this.trigger("unmask").each(function () { function h() { if (g.completed) { for (var a = l; m >= a; a++)if (j[a] && C[a] === p(a)) return; g.completed.call(B) } } function p(a) { return g.placeholder.charAt(a < g.placeholder.length ? a : 0) } function q(a) { for (; ++a < n && !j[a];); return a } function r(a) { for (; --a >= 0 && !j[a];); return a } function s(a, b) { var c, d; if (!(0 > a)) { for (c = a, d = q(b); n > c; c++)if (j[c]) { if (!(n > d && j[c].test(C[d]))) break; C[c] = C[d], C[d] = p(d), d = q(d) } z(), B.caret(Math.max(l, a)) } } function t(a) { var b, c, d, e; for (b = a, c = p(a); n > b; b++)if (j[b]) { if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break; c = e } } function u() { var a = B.val(), b = B.caret(); if (a.length < o.length) { for (A(!0); b.begin > 0 && !j[b.begin - 1];)b.begin--; if (0 === b.begin) for (; b.begin < l && !j[b.begin];)b.begin++; B.caret(b.begin, b.begin) } else { for (A(!0); b.begin < n && !j[b.begin];)b.begin++; B.caret(b.begin, b.begin) } h() } function v() { A(), B.val() != E && B.change() } function w(a) { if (!B.prop("readonly")) { var b, c, e, f = a.which || a.keyCode; o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault()) } } function x(b) { if (!B.prop("readonly")) { var c, d, e, g = b.which || b.keyCode, i = B.caret(); if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) { if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) { if (t(c), C[c] = d, z(), e = q(c), f) { var k = function () { a.proxy(a.fn.caret, B, e)() }; setTimeout(k, 0) } else B.caret(e); i.begin <= m && h() } b.preventDefault() } } } function y(a, b) { var c; for (c = a; b > c && n > c; c++)j[c] && (C[c] = p(c)) } function z() { B.val(C.join("")) } function A(a) { var b, c, d, e = B.val(), f = -1; for (b = 0, d = 0; n > b; b++)if (j[b]) { for (C[b] = p(b); d++ < e.length;)if (c = e.charAt(d - 1), j[b].test(c)) { C[b] = c, f = b; break } if (d > e.length) { y(b + 1, n); break } } else C[b] === e.charAt(d) && d++ , k > b && (f = b); return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l } var B = a(this), C = a.map(c.split(""), function (a, b) { return "?" != a ? i[a] ? p(b) : a : void 0 }), D = C.join(""), E = B.val(); B.data(a.mask.dataName, function () { return a.map(C, function (a, b) { return j[b] && a != p(b) ? a : null }).join("") }), B.one("unmask", function () { B.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function () { if (!B.prop("readonly")) { clearTimeout(b); var a; E = B.val(), a = A(), b = setTimeout(function () { z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a) }, 10) } }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () { B.prop("readonly") || setTimeout(function () { vara = A(!0); B.caret(a), h() }, 0) }), e && f && B.off("input.mask").on("input.mask", u), A() }) } }) });

$('.phoneMask').mask("+9 (999) 999-99-99");

function openItem(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();