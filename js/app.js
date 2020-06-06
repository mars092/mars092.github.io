"use strict";
var APP = window.APP || {};
(APP.Dev = APP.Dev || {}),
  (APP.Browser = APP.Browser || {}),
  (APP.Plugins = APP.Plugins || {}),
  (APP.Components = APP.Components || {}),
  (window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  });
var _window = $(window),
  _document = $(document),
  easingSwing = [0.02, 0.01, 0.47, 1];
function normalize(e, t, i, n, o) {
  var a = ((e - t) / (i - t)) * (o - n) + n;
  return o < a ? o : a < n ? n : a;
}
function getWindowWidth() {
  return window.innerWidth;
}
function triggerBody() {
  $(window).scroll(), $(window).resize();
}
function formatNumberWithSpaces(e) {
  return e
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function hasCrossedBreakpoint(e, t, i) {
  return (i <= t && e <= i) || (t <= i && i <= e);
}
function Plurize(e, t, i, n) {
  var o = Math.abs(e);
  return 5 <= (o %= 100) && o <= 20
    ? n
    : 1 === (o %= 10)
    ? t
    : 2 <= o && o <= 4
    ? i
    : n;
}
function rgba(e, t) {
  var i = parseInt(e.slice(1, 3), 16),
    n = parseInt(e.slice(3, 5), 16),
    o = parseInt(e.slice(5, 7), 16);
  return t
    ? "rgba(" + i + ", " + n + ", " + o + ", " + t + ")"
    : "rgb(" + i + ", " + n + ", " + o + ")";
}
function mediaCondition(e) {
  var t,
    i = e.substring(1),
    n = e.substring(0, 1);
  return (
    "<" === n
      ? (t = getWindowWidth() < i)
      : ">" === n && (t = getWindowWidth() > i),
    t
  );
}
!(function (e, t) {
  (t.Initilizer = function () {
    var e = {
      init: function () {
        e.initGlobalPlugins(), e.initPlugins(), e.initComponents();
      },
      onLoadTrigger: function () {},
      refresh: function () {
        t.Plugins.Sliders.reinit(), e.initPlugins(!0), e.initComponents(!0);
      },
      destroy: function () {},
      newPageReady: function () {
        e.refresh();
      },
      transitionCompleted: function () {
        t.Plugins.AOS.refresh(), e.onLoadTrigger();
      },
      initGlobalPlugins: function () {
        t.Dev.Credentials.logCredentials(),
          t.Dev.Breakpoint.listenResize(),
          t.Browser().methods.setBodyTags(),
          t.Plugins.LegacySupport.init(),
          t.Plugins.ScrollBlock.listenScroll(),
          t.Plugins.Clicks.init();
      },
      initPlugins: function (e) {
        t.Plugins.Teleport.init(),
          e || t.Plugins.Sliders.init(),
          t.Plugins.Modals.init(),
          t.Plugins.Masks.init(),
          t.Plugins.TextareaAutoExpand.init(),
          t.Plugins.Validations.init(),
          t.Plugins.LegacySupport.fixImages();
      },
      initComponents: function (e) {
        t.Components.Header.init(), t.Components.Product.init();
      }
    };
    return e;
  }),
    e(function () {
      t.Initilizer().init();
    }),
    e(window).on("load", function () {
      e.ready.then(function () {
        t.Initilizer().onLoadTrigger();
      });
    });
})(jQuery, window.APP),
  jQuery,
  (window.APP.Plugins.DemoObjectModule = {
    init: function () {},
    destroy: function () {}
  }),
  (function (i) {
    window.APP.Plugins.DemoContrcutorModule = function (e, t) {
      i(e);
      this.init = function () {};
    };
  })(jQuery),
  jQuery,
  (window.APP.Plugins.DemoContrcutorModule2 = function (e, t) {
    var i = {
      init: function () {},
      getData: function () {
        return { foo: e, bar: t };
      }
    };
    return i;
  }),
  (function (t) {
    window.APP.Browser = function () {
      var e = {
        isRetinaDisplay: function () {
          if (window.matchMedia) {
            var e = window.matchMedia(
              "only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)"
            );
            return (e && e.matches) || 1 < window.devicePixelRatio;
          }
        },
        isMobile: function () {
          return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        },
        msieversion: function () {
          return !!(
            0 < window.navigator.userAgent.indexOf("MSIE ") ||
            navigator.userAgent.match(/Trident.*rv:11\./)
          );
        },
        setBodyTags: function () {
          e.msieversion() && t("body").addClass("is-ie"),
            e.isMobile() && t("body").addClass("is-mobile");
        }
      };
      return {
        data: {
          isIe: e.msieversion(),
          isMobile: e.isMobile(),
          isRetinaDisplay: e.isRetinaDisplay()
        },
        methods: e
      };
    };
  })(jQuery),
  (function (n) {
    window.APP.Plugins.Clicks = {
      init: function () {
        n(document)
          .on("click", '[href="#"]', function (e) {
            e.preventDefault();
          })
          .on("click", "[js-link]", function (e) {
            var t = n(this).data("href");
            t &&
              "#" !== t &&
              (e.preventDefault(), e.stopPropagation(), Barba.Pjax.goTo(t));
          })
          .on("click", "a, [js-link]", function (e) {
            var t = n(this).data("href") || n(this).attr("href"),
              i = window.location.pathname;
            t === i.slice(1, i.length) &&
              (e.preventDefault(), e.stopPropagation());
          })
          .on("click", 'a[href^="#section"]', function () {
            var e = n(this).attr("href"),
              t = n(e).offset().top;
            return (
              TweenLite.to(window, 1, {
                scrollTo: { y: t, autoKill: !1 },
                ease: easingSwing
              }),
              !1
            );
          });
      },
      destroy: function () {}
    };
  })(jQuery),
  (function (t) {
    window.APP.Plugins.Countdown = {
      init: function () {
        if (0 < t("[js-countdown]").length)
          var e = t("[js-countdown]"),
            r = new Date(e.data("timestamp")).getTime(),
            s = e.find("[js-days]"),
            l = e.find("[js-hours]"),
            d = e.find("[js-minutes]"),
            c = e.find("[js-seconds]"),
            u = setInterval(function () {
              var e = new Date().getTime(),
                t = r - e,
                i = Math.floor(t / 864e5),
                n = Math.floor((t % 864e5) / 36e5),
                o = Math.floor((t % 36e5) / 6e4),
                a = Math.floor((t % 6e4) / 1e3);
              s.find(".counter__number").html(i.pad(2)),
                s.find(".counter__name").html(pluralize("day", i)),
                l.find(".counter__number").html(n.pad(2)),
                l.find(".counter__name").html(pluralize("hour", n)),
                d.find(".counter__number").html(n.pad(2)),
                d.find(".counter__name").html(pluralize("min", o)),
                c.find(".counter__number").html(a.pad(2)),
                c.find(".counter__name").html(pluralize("sec", o)),
                t < 0 && clearInterval(u);
            }, 1e3);
      }
    };
  })(jQuery),
  (function (i) {
    window.APP.Plugins.FooterReveal = {
      init: function () {
        this.revealFooter(), this.listenResize();
      },
      listenResize: function () {
        _window.on("resize", throttle(this.revealFooter.bind(this), 100));
      },
      revealFooter: function () {
        var e = i("[js-reveal-footer]");
        if (0 < e.length) {
          var t = e.outerHeight();
          100 < _window.height() - t && !msieversion()
            ? (i("body").css({ "margin-bottom": t }),
              e.css({ position: "fixed", "z-index": -10 }))
            : (i("body").css({ "margin-bottom": 0 }),
              e.css({ position: "static", "z-index": 10 }));
        }
      }
    };
  })(jQuery),
  (Number.prototype.pad = function (e) {
    for (var t = String(this); t.length < (e || 2); ) t = "0" + t;
    return t;
  }),
  (function (e, t) {
    t.Plugins.LegacySupport = {
      init: function () {
        svg4everybody(),
          t.Browser().data.isIe ||
            window.viewportUnitsBuggyfill.init({
              force: !1,
              refreshDebounceWait: 150,
              appendToBody: !0
            });
      },
      fixImages: function () {
        t.Browser().data.isIe && (picturefill(), objectFitImages());
      }
    };
  })(jQuery, window.APP),
  (function (e) {
    window.APP.Plugins.Preloader = {
      loaded: function () {
        e("#barba-wrapper").addClass("is-preloaded");
      }
    };
  })(jQuery),
  (function (t) {
    window.APP.Plugins.ScrollBlock = {
      data: {
        y: _window.scrollTop(),
        blocked: !1,
        direction: void 0,
        lastForScrollDir: 0,
        lastForBodyLock: 0
      },
      getData: function () {
        return this.data;
      },
      disableScroll: function () {
        (this.data.lastForBodyLock = _window.scrollTop()),
          (this.data.blocked = !0),
          t(".page__content").css({
            "margin-top": "-" + this.data.lastForBodyLock + "px"
          }),
          t("body").addClass("body-lock");
      },
      enableScroll: function (e) {
        (this.data.blocked = !1),
          (this.data.direction = "up"),
          t(".page__content").css({ "margin-top": "-0px" }),
          t("body").removeClass("body-lock"),
          e ||
            (_window.scrollTop(this.data.lastForBodyLock),
            (this.data.lastForBodyLock = 0));
      },
      blockScroll: function (e) {
        e
          ? this.enableScroll(e)
          : t("[js-hamburger]").is(".is-active")
          ? this.disableScroll()
          : this.enableScroll();
      },
      getWindowScroll: function () {
        if (!this.data.blocked) {
          var e = _window.scrollTop();
          (this.data.y = e),
            (this.data.direction =
              e > this.data.lastForScrollDir ? "down" : "up"),
            (this.data.lastForScrollDir = e <= 0 ? 0 : e);
        }
      },
      listenScroll: function () {
        _window.on("scroll", this.getWindowScroll.bind(this));
      }
    };
  })(jQuery),
  (function (s) {
    window.APP.Plugins.ScrollReveal = {
      init: function (a) {
        if (0 !== s("[js-reveal]").length) {
          var r = "is-animated";
          s("[js-reveal]").each(function (e, t) {
            var i = s(t).data("type") || "enterViewport";
            if ("onload" !== i)
              if ("halflyEnterViewport" !== i) {
                scrollMonitor.create(s(t)).enterViewport(
                  throttle(
                    function () {
                      s(t).addClass(r);
                    },
                    100,
                    { leading: !0 }
                  )
                );
              } else {
                var n = throttle(function () {
                  var e = _window.scrollTop() + _window.height();
                  s(t).offset().top + s(t).height() / 2 < e &&
                    (s(t).addClass(r),
                    window.removeEventListener("scroll", n, !1));
                }, 100);
                window.addEventListener("scroll", n, !1);
              }
            else
              var o = setInterval(function () {
                a
                  ? setTimeout(function () {
                      s(t).addClass(r), clearInterval(o);
                    }, 500)
                  : (s(t).addClass(r), clearInterval(o));
              }, 100);
          });
        }
      }
    };
  })(jQuery),
  jQuery,
  (window.APP.Plugins.Sharer = {
    refresh: function () {
      window.Sharer.init();
    }
  }),
  (function (s, e) {
    e.Plugins.Teleport = {
      data: { teleports: [] },
      init: function () {
        this.getElements(), this.teleport(), this.listenResize();
      },
      getElements: function () {
        var r = this,
          e = s(".page").last().find("[js-teleport]");
        (r.data.teleports = []),
          0 !== e.length &&
            e.each(function (e, t) {
              var i = s(t),
                n = s("[data-teleport-target=" + i.data("teleport-to") + "]"),
                o = i.data("teleport-condition").substring(1),
                a = i.data("teleport-condition").substring(0, 1);
              r.data.teleports.push({
                el: i,
                html: i.html(),
                target: n,
                conditionMedia: o,
                conditionPosition: a
              });
            });
      },
      listenResize: function () {
        _window.on("resize", debounce(this.teleport.bind(this), 100));
      },
      teleport: function () {
        0 !== this.data.teleports.length &&
          (s.each(this.data.teleports, function (e, t) {
            var i;
            t.target &&
              t.html &&
              t.conditionPosition &&
              ("<" === t.conditionPosition
                ? (i = window.innerWidth < t.conditionMedia)
                : ">" === t.conditionPosition &&
                  (i = window.innerWidth > t.conditionMedia),
              i
                ? (t.target.html(t.html), t.el.html(""))
                : (t.el.html(t.html), t.target.html("")));
          }),
          e.Plugins.Sliders.reinit());
      }
    };
  })(jQuery, window.APP),
  (function (a) {
    window.APP.Plugins.Ymaps = {
      data: { scriptsCreated: !1, ymapsLoaded: !1 },
      init: function () {
        0 < a(".js-ymap").length &&
          (this.data.ymapsLoaded
            ? ymaps.ready(this.initMaps.bind(this))
            : this.tryLoadScripts());
      },
      createScripts: function () {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.src =
            "https://api-maps.yandex.ru/2.1/?apikey=9ba9a278-xxxxxxxxx&lang=ru_RU"),
          a("head").append(e),
          (this.data.scriptsCreated = !0);
      },
      tryLoadScripts: function () {
        var e = this;
        e.data.scriptsCreated || e.createScripts();
        var t = setInterval(function () {
          if (!e.data.ymapsLoaded)
            try {
              ymaps.ready() &&
                ((e.data.ymapsLoaded = !0), e.init(), clearInterval(t));
            } catch (e) {}
        }, 250);
      },
      initMaps: function () {
        var i = this;
        a(".js-ymap").each(function (e, t) {
          i.drawMap(t);
        });
      },
      drawMap: function (e) {
        var t = a(e);
        if (0 !== t.length) {
          var i,
            n = {
              center: this.geoStringToArr(t.data("center")),
              zoom: t.data("zoom") || 10,
              placeholder: {
                geodata: this.geoStringToArr(t.data("placeholder")),
                caption: t.data("placeholder-caption"),
                balloon: t.data("placeholder-balloon")
              }
            };
          if (
            (console.log(n),
            n.center &&
              ((i = new ymaps.Map(e, {
                center: n.center,
                zoom: n.zoom
              })).controls.remove("trafficControl"),
              i.controls.remove("searchControl"),
              i.controls.remove("fullscreenControl"),
              i.controls.remove("rulerControl"),
              i.controls.remove("geolocationControl"),
              i.controls.remove("routeEditor"),
              i.controls.remove("typeSelector"),
              n.placeholder.geodata))
          ) {
            var o = new ymaps.Placemark(
              n.placeholder.geodata,
              {
                balloonContent: n.placeholder.balloon,
                iconCaption: n.placeholder.caption
              },
              { preset: "islands#redIcon" }
            );
            i.geoObjects.add(o);
          }
        }
      },
      geoStringToArr: function (e) {
        var t = e.split(",");
        return 2 === t.length && [parseFloat(t[0]), parseFloat(t[1])];
      }
    };
  })(jQuery),
  (function (i) {
    window.APP.Dev.Breakpoint = {
      setBreakpoint: function () {
        var e = window.location.host.toLowerCase();
        if (0 <= e.indexOf("localhost") || 0 <= e.indexOf("surge")) {
          var t =
            "<div class='dev-bp-debug'>" +
            window.innerWidth +
            " x " +
            _window.height() +
            "</div>";
          i(".page").append(t),
            setTimeout(function () {
              i(".dev-bp-debug").fadeOut();
            }, 1e3),
            setTimeout(function () {
              i(".dev-bp-debug").remove();
            }, 1500);
        }
      },
      listenResize: function () {
        i(window).on("resize", debounce(this.setBreakpoint, 200));
      }
    };
  })(jQuery),
  jQuery,
  (window.APP.Dev.Credentials = {
    logCredentials: function () {
      console.log(
        "👨‍💻 MADE WITH LOVE BY <> KHMELEVSKOY & ASSOCIATES </> https://khmelevskoy.co"
      );
    }
  }),
  jQuery,
  (window.APP.Plugins.AOS = {
    init: function () {
      AOS.init({
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "ease-in",
        once: !0,
        mirror: !1,
        anchorPlacement: "top-bottom"
      });
    },
    refresh: function () {
      AOS.refreshHard();
    }
  }),
  (function (i, n) {
    n.Plugins.LazyLoadImages = {
      init: function () {
        var t = this,
          e = _document.find("[js-lazy]");
        if (0 === e.length)
          return n.Plugins.LegacySupport.fixImages(), void AOS.refresh();
        e.Lazy({
          threshold: 300,
          enableThrottle: !0,
          throttle: 100,
          scrollDirection: "vertical",
          onError: function (e) {
            console.log("error loading " + e.data("src"));
            try {
              e.attr("src", e.data("src"));
            } catch (e) {
              console.log("eroor appending src", e);
            }
          },
          beforeLoad: function (e) {},
          afterLoad: function (e) {
            t.animateLazy(e);
          },
          onFinishedAll: function () {
            n.Plugins.LegacySupport.fixImages(), AOS.refresh();
          }
        });
      },
      animateLazy: function (e) {
        var t = e.closest(".scaler");
        t.addClass("is-loaded"),
          0 === t.length && i(e).addClass("is-loaded"),
          t.is(".no-bg-onload") &&
            setTimeout(function () {
              t.addClass("is-bg-hidden");
            }, 250);
      }
    };
  })(jQuery, window.APP),
  (function (t) {
    window.APP.Plugins.Modals = {
      init: function () {
        t("[data-fancybox]").fancybox({
          autoFocus: !1,
          btnTpl: {
            smallBtn:
              '<div data-fancybox-close class="fancybox-close-small modal-close"><svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.8 24.4958L24.5017 26.7935L17.004 19.3042L9.50631 26.8L7.2081 24.4958L14.6977 17L7.19995 9.50415L9.50631 7.20489L17.004 14.6958L24.5017 7.2L26.8 9.50415L19.3088 17L26.8 24.4958Z" fill="#202020"/></svg></div>'
          }
        });
        // setTimeout(
        //   function(e) {
        //     t.fancybox.open({
        //       src: e,
        //       opts: {
        //         autoFocus: !1,
        //         btnTpl: {
        //           smallBtn:
        //             '<div data-fancybox-close class="fancybox-close-small modal-close"><svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.8 24.4958L24.5017 26.7935L17.004 19.3042L9.50631 26.8L7.2081 24.4958L14.6977 17L7.19995 9.50415L9.50631 7.20489L17.004 14.6958L24.5017 7.2L26.8 9.50415L19.3088 17L26.8 24.4958Z" fill="#202020"/></svg></div>'
        //         }
        //       }
        //     });
        //   },
        //   1e4,
        //   "#discount"
        // );
      },
      destroy: function () {}
    };
  })(jQuery),
  (function (i) {
    window.APP.Plugins.Sliders = {
      data: {
        swipers: [],
        responsiveSwipers: {
          featuredProducts: { instance: void 0, disableOn: 1024 }
        }
      },
      init: function () {
        this.initSwipers(), this.initResponsiveSwipers(), this.listenResize();
      },
      reinit: function () {
        this.initSwipers(), this.initResponsiveSwipers(!0);
      },
      listenResize: function () {
        _window.on(
          "resize",
          debounce(this.initResponsiveSwipers.bind(this), 200)
        );
      },
      initSwipers: function () {
        function BackgroundCheckPagination() {
          BackgroundCheck.init({
            targets: ".swiper-pagination",
            images: ".main-slider .swiper-slide-active",
            changeParent: true,
            // debug: true,
            classes: {
              dark: "swiper-pagination_dark",
              light: "swiper-pagination_light",
              complex: "swiper-pagination_complex"
            }
          });
          BackgroundCheck.refresh();
        }
        new Swiper("[js-main-slider]", {
          speed: 800,
          loop: !0,
          // autoplay: { delay: 8e3 },
          updateOnImagesReady: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          pagination: { el: ".swiper-pagination", type: "bullets" },
          on: {
            slideChangeTransitionEnd: function () {
              setTimeout(BackgroundCheckPagination, 400);
              BackgroundCheckPagination();
            }
          },
          imagesReady: function () {
            setTimeout(BackgroundCheckPagination, 400);
            BackgroundCheckPagination();
          }
        });
      },
      initResponsiveSwipers: function (e) {
        var t = "[js-product-slider]";
        0 < i(t).length && this.initFeaturedProductsSwiper(t);
      },
      initFeaturedProductsSwiper: function (e) {
        var t = this.data.responsiveSwipers.featuredProducts;
        0 < i(e).length &&
          (window.innerWidth >= t.disableOn
            ? void 0 !== t.instance &&
              (t.instance.destroy(!0, !0), (t.instance = void 0))
            : void 0 === t.instance &&
              (t.instance = new Swiper(e, {
                slidesPerView: "auto",
                spaceBetween: 6.55
              })));
      },
      destroy: function () {}
    };
  })(jQuery),
  (function (a) {
    window.APP.Plugins.Validations = {
      init: function () {
        this.localize(),
          this.validateFormsConstructor(),
          this.validateFormsCustom();
      },
      data: {
        validateErrorPlacement: function (e, t) {
          e.addClass("ui-input__validation"),
            t.is("select")
              ? e.appendTo(t.closest(".selectric-wrapper"))
              : t.is('input[type="radio"]') || t.is('input[type="checkbox"]')
              ? e.appendTo(t.closest(".ui-group"))
              : e.appendTo(t.parent("div"));
        },
        validateHighlight: function (e) {
          var t = a(e);
          t.is("select")
            ? t.closest(".selectric-wrapper").addClass("has-error")
            : a(e).addClass("has-error");
        },
        validateUnhighlight: function (e) {
          var t = a(e);
          t.is("select")
            ? t.closest(".selectric-wrapper").removeClass("has-error")
            : a(e).removeClass("has-error");
        },
        validateSubmitHandler: function (i) {
          a(i).addClass("loading"),
            a.ajax({
              type: "POST",
              url: a(i).attr("action"),
              data: a(i).serialize(),
              success: function (e) {
                a(i).removeClass("loading");
                var t = a.parseJSON(e);
                "success" === t.status ||
                  a(i).find("[data-error]").html(t.message).show();
              }
            });
        },
        masks: {
          phone: {
            required: !0,
            normalizer: function (e) {
              return e && "+X (XXX) XXX-XXXX" !== e
                ? e.replace(/[^\d]/g, "")
                : e;
            },
            minlength: 11,
            digits: !0
          }
        }
      },
      localize: function () {
        a.extend(a.validator.messages, {
          required: "Это поле необходимо заполнить.",
          remote: "Пожалуйста, введите правильное значение.",
          email: "Пожалуйста, введите корректный адрес электронной почты.",
          url: "Пожалуйста, введите корректный URL.",
          date: "Пожалуйста, введите корректную дату.",
          dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
          number: "Пожалуйста, введите число.",
          digits: "Пожалуйста, вводите только цифры.",
          creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
          equalTo: "Пожалуйста, введите такое же значение ещё раз.",
          extension: "Пожалуйста, выберите файл с правильным расширением.",
          maxlength: a.validator.format(
            "Пожалуйста, введите не больше {0} символов."
          ),
          minlength: a.validator.format(
            "Пожалуйста, введите не меньше {0} символов."
          ),
          rangelength: a.validator.format(
            "Пожалуйста, введите значение длиной от {0} до {1} символов."
          ),
          range: a.validator.format("Пожалуйста, введите число от {0} до {1}."),
          max: a.validator.format(
            "Пожалуйста, введите число, меньшее или равное {0}."
          ),
          min: a.validator.format(
            "Пожалуйста, введите число, большее или равное {0}."
          )
        });
      },
      validateFormsConstructor: function () {
        var o = this,
          e = a("[js-validate-form]:not(.is-validation-attached)");
        0 !== e.length &&
          e.each(function (e, t) {
            var i = a(t),
              n = {
                errorPlacement: o.data.validateErrorPlacement,
                highlight: o.data.validateHighlight,
                unhighlight: o.data.validateUnhighlight,
                submitHandler: o.data.validateSubmitHandler,
                rules: {
                  email: { required: !0, email: !0 },
                  phone: o.data.masks.phone
                },
                messages: {
                  email: {
                    required: "Заполните это поле",
                    email: "Формат email неверен"
                  },
                  phone: {
                    required: "Заполните это поле",
                    minlength: "Введите корректный телефон"
                  }
                }
              };
            i.validate(n), i.addClass("is-validation-attached");
          });
      },
      validateFormsCustom: function () {
        var e = this,
          t = {
            errorPlacement: e.data.validateErrorPlacement,
            highlight: e.data.validateHighlight,
            unhighlight: e.data.validateUnhighlight,
            submitHandler: e.data.validateSubmitHandler,
            rules: { phone: e.data.masks.phone },
            messages: {
              phone: {
                required: "Заполните это поле",
                minlength: "Введите корректный телефон"
              }
            }
          };
        a("[js-validate-request]").validate(t);
      }
    };
  })(jQuery),
  (function (e) {
    window.APP.Plugins.Masks = {
      init: function () {
        e("[js-dateMask]").mask("99.99.99", { placeholder: "ДД.ММ.ГГ" }),
          e("input[type='tel']").mask("+7 (000) 000-0000");
      }
    };
  })(jQuery),
  (function (o) {
    window.APP.Plugins.Selectric = {
      init: function () {
        var e = o("[js-select]");
        0 !== e.length &&
          e.selectric({
            maxHeight: 300,
            disableOnMobile: !1,
            nativeOnMobile: !0,
            arrowButtonMarkup:
              '<b class="button"><svg class="ico ico-select-down"><use xlink:href="img/sprite.svg#ico-select-down"></use></svg></b>',
            onInit: function (e, t) {
              var i = o(e);
              i.closest("." + t.classes.wrapper)
                .find(".label")
                .html(i.attr("placeholder"));
            },
            onBeforeOpen: function (e, t) {
              var i = o(e),
                n = i.closest("." + t.classes.wrapper);
              n.find(".label")
                .data("value", n.find(".label").html())
                .html(i.attr("placeholder"));
            },
            onBeforeClose: function (e, t) {
              var i = o(e).closest("." + t.classes.wrapper);
              i.find(".label").html(i.find(".label").data("value"));
            }
          });
      }
    };
  })(jQuery),
  jQuery,
  (window.APP.Plugins.TextareaAutoExpand = {
    init: function () {
      _document
        .one("focus.autoExpand", ".ui-group textarea", function () {
          var e = this.value;
          (this.value = ""),
            (this.baseScrollHeight = this.scrollHeight),
            (this.value = e);
        })
        .on("input.autoExpand", ".ui-group textarea", function () {
          var e,
            t = 0 | this.getAttribute("data-min-rows");
          (this.rows = t),
            (e = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17)),
            (this.rows = t + e);
        });
    }
  }),
  (function (i) {
    window.APP.Components.Header = {
      init: function () {
        function e() {
          i(".menu-left").toggleClass("menu-left_close"),
            i(".header-bg-mask").toggleClass("header-bg-mask_close");
        }
        function t() {
          i("body").toggleClass("body-lock");
        }
        i(window).scroll(function () {
          0 < i(document).scrollTop()
            ? i(".header").addClass("header-fix")
            : 0 == i(document).scrollTop() &&
              i(".header").removeClass("header-fix");
        }),
          i(document).on("click", ".menu-left__close", function () {
            e(), t();
          }),
          i(document).on("click", ".header-catalog-btn", function () {
            e(), t();
          }),
          i(document).on("click", ".header-bg-mask", function () {
            e(), t();
          });
      },
      destroy: function () {}
    };
  })(jQuery),
  (function (e) {
    window.APP.Components.Product = {
      init: function () {
        e(document).on("click", ".characteristics__size-list li", function () {
          e(".characteristics__size-list li").removeClass("active"),
            e(this).addClass("active");
        }),
          e(document).on(
            "click",
            ".characteristics__color-list li",
            function () {
              e(".characteristics__color-list li").removeClass("active"),
                e(this).addClass("active");
            }
          );

        e(document).click(function (t) {
          if (!e(t.target).is(".filter *")) {
            e(".filter").removeClass("filter_open");
          }
        });

        e(document).on("click", ".filter__head", function () {
          if (e(this).parents(".filter").hasClass("filter_quantity")) {
          } else {
            if (e(this).parents(".filter").hasClass("filter_open")) {
              e(this).parents(".filter").removeClass("filter_open");
            } else {
              e(".filter").removeClass("filter_open");
              e(this).parents(".filter").addClass("filter_open");
            }
          }
        });

        e(document).on("click", ".filter_quantity .filter__arrow", function () {
          e(this)
            .parents(".filter")
            .removeClass("filter_quantity")
            .find(".filter__title-quantity")
            .html("");
        });

        e(document).on("click", ".catalog__filters-mobi", function () {
          e(".catalog__filters-left").addClass("catalog__filters-left_open");
          e(".wrap-filters").addClass("wrap-filters_zi-200");
          e("body").addClass("body-lock");
        });

        e(document).on("click", ".catalog__sorting-mobi", function () {
          e(".catalog__filters-right").addClass("catalog__filters-right_open");
          e(".wrap-filters").addClass("wrap-filters_zi-200");
          e("body").addClass("body-lock");
        });

        e(document).on("click", ".catalog__sorting-select", function () {
          e(".catalog__sorting-select").removeClass(
            "catalog__sorting-select_active"
          );
          e(this).addClass("catalog__sorting-select_active");
          e(".catalog__filters-left").removeClass("catalog__filters-left_open");
          e(".catalog__filters-right").removeClass(
            "catalog__filters-right_open"
          );
          e("body").removeClass("body-lock");
        });

        e(document).on(
          "click",
          ".catalog__filters-left-head-close",
          function () {
            e(".catalog__filters-left").removeClass(
              "catalog__filters-left_open"
            );
            e(".wrap-filters").removeClass("wrap-filters_zi-200");
            e(".catalog__filters-right").removeClass(
              "catalog__filters-right_open"
            );
            e("body").removeClass("body-lock");
          }
        );

        e(document).on("click", ".filter__list li a", function () {
          e(this).parents(".filter__list").find("li a").removeClass("active");
          e(this)
            .addClass("active")
            .parents(".filter")
            .removeClass("filter_open");
        });

        e(document).on("click", ".filter__btn a", function () {
          var quantitySelect = 0;
          e(this)
            .parents(".filter__body")
            .find(".filter__list li")
            .each(function (i) {
              if (e(this).find("input").is(":checked")) {
                quantitySelect = quantitySelect + 1;
              }
            });
          if (quantitySelect > 0) {
            e(this)
              .parents(".filter")
              .find(".filter__title-quantity")
              .html(": " + quantitySelect);
            e(this).parents(".filter").addClass("filter_quantity");
          } else {
            e(this).parents(".filter").find(".filter__title-quantity").html("");
            e(this).parents(".filter").removeClass("filter_quantity");
          }
          e(".filter").removeClass("filter_open");
        });

        $(".filter__btn a").each(function () {
          var quantitySelect = 0;
          e(this)
            .parents(".filter__body")
            .find(".filter__list li")
            .each(function (i) {
              if (e(this).find("input").is(":checked")) {
                quantitySelect = quantitySelect + 1;
              }
            });
          if (quantitySelect > 0) {
            e(this)
              .parents(".filter")
              .find(".filter__title-quantity")
              .html(": " + quantitySelect);
            e(this).parents(".filter").addClass("filter_quantity");
          } else {
            e(this).parents(".filter").find(".filter__title-quantity").html("");
            e(this).parents(".filter").removeClass("filter_quantity");
          }
          e(".filter").removeClass("filter_open");
        });

        e(document).on("click", ".product-list__plus", function () {
          var quantityThis = e(this)
            .parent()
            .find(".product-list__quantity")
            .html();
          quantityThis++;
          e(this).parent().find(".product-list__quantity").html(quantityThis);
          e(this)
            .parent()
            .find(".product-list__minus")
            .removeClass("product-list__minus_disable");
        });

        e(document).on("click", ".product-list__minus", function () {
          var quantityThis = e(this)
            .parent()
            .find(".product-list__quantity")
            .html();
          if (quantityThis > 1) {
            --quantityThis;
            e(this).parent().find(".product-list__quantity").html(quantityThis);
          }
          if (quantityThis == 1) {
            e(this).addClass("product-list__minus_disable");
          } else {
            e(this).removeClass("product-list__minus_disable");
          }
        });
        e(document).on("click", ".product-list__remove", function () {
          $(this).parents(".product-list__item").remove();
        });
        e(".product-list__quantity").each(function (indx, element) {
          var quantityThis = e(this).html();

          if (quantityThis == 1) {
            e(element)
              .parent()
              .find(".product-list__minus")
              .addClass("product-list__minus_disable");
          } else {
            e(element)
              .parent()
              .find(".product-list__minus")
              .removeClass("product-list__minus_disable");
          }
        });
      },
      destroy: function () {}
    };
  })(jQuery);

if ($("div").hasClass("waypoint-wrap")) {
  var heightItem = $(".wrap-filters").outerHeight(true);

  var waypoint = new Waypoint({
    element: document.getElementById("waypoint-filters"),
    handler: function (direction) {
      if (direction == "down") {
        $("#waypoint-filters").addClass("stuck");
        $(".waypoint-wrap").css("height", heightItem);
      } else {
        $("#waypoint-filters").removeClass("stuck");
        $(".waypoint-wrap").removeAttr("style");
      }
    },
    offset: 61
  });
}

$(document).ready(function () {
  setInterval(BackgroundCheckNext, 100);
  setInterval(BackgroundCheckPrev, 100);

  $(".swiper-button-next").mousemove(function (e) {
    var target = this.getBoundingClientRect();
    var x = e.clientX - target.left;
    var y = e.clientY - target.top;
    $(this).find("svg").css({
      top: y,
      left: x
    });
  });

  $(".swiper-button-prev").mousemove(function (e) {
    var target = this.getBoundingClientRect();
    var x = e.clientX - target.left;
    var y = e.clientY - target.top;
    $(this).find("svg").css({
      top: y,
      left: x
    });
  });

  function BackgroundCheckNext() {
    BackgroundCheck.init({
      targets: ".swiper-button-next__svg",
      images: ".main-slider .swiper-slide-active",
      changeParent: true,
      // debug: true,
      classes: {
        dark: "swiper-button-next_dark",
        light: "swiper-button-next_light",
        complex: "swiper-button-next_complex"
      }
    });
    BackgroundCheck.refresh();
  }

  function BackgroundCheckPrev() {
    BackgroundCheck.init({
      targets: ".swiper-button-prev__svg",
      images: ".main-slider .swiper-slide-active",
      changeParent: true,
      // debug: true,
      classes: {
        dark: "swiper-button-prev_dark",
        light: "swiper-button-prev_light",
        complex: "swiper-button-prev_complex"
      }
    });
    BackgroundCheck.refresh();
  }
});
