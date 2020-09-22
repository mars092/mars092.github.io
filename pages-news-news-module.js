(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"],{

/***/ "Bp3h":
/*!*****************************************!*\
  !*** ./src/app/pages/news/news.page.ts ***!
  \*****************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _components_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/news-details/news-details.component */ "xHY1");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class NewsPage {
    constructor() {
    }
}
NewsPage.ɵfac = function NewsPage_Factory(t) { return new (t || NewsPage)(); };
NewsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsPage, selectors: [["app-news"]], decls: 6, vars: 0, consts: [[1, "page"], [1, "page__content"], [1, "page__footer"]], template: function NewsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-news-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_2__["NewsDetailsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5wYWdlLnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.page.html',
                styleUrls: ['./news.page.sass'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XkMT":
/*!***************************************************!*\
  !*** ./src/app/pages/news/news-routing.module.ts ***!
  \***************************************************/
/*! exports provided: NewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.page */ "Bp3h");





const routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_2__["NewsPage"]
    }
];
class NewsRoutingModule {
}
NewsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewsRoutingModule });
NewsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewsRoutingModule_Factory(t) { return new (t || NewsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "qUUn":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.module.ts ***!
  \*******************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.page */ "Bp3h");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-routing.module */ "XkMT");
/* harmony import */ var _shared_modules_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modules/shared-components/shared-components.module */ "3EpM");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _components_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/news-details/news-details.component */ "xHY1");








class NewsPageModule {
}
NewsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewsPageModule });
NewsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewsPageModule_Factory(t) { return new (t || NewsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsRoutingModule"],
            _shared_modules_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["AngularSvgIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsPageModule, { declarations: [_news_page__WEBPACK_IMPORTED_MODULE_2__["NewsPage"],
        _components_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_6__["NewsDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsRoutingModule"],
        _shared_modules_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
        angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["AngularSvgIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsRoutingModule"],
                    _shared_modules_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
                    angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["AngularSvgIconModule"]
                ],
                declarations: [
                    _news_page__WEBPACK_IMPORTED_MODULE_2__["NewsPage"],
                    _components_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_6__["NewsDetailsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xHY1":
/*!*******************************************************************!*\
  !*** ./src/app/components/news-details/news-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsComponent", function() { return NewsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_api_news_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/api/news/news-api.service */ "ge9p");
/* harmony import */ var _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news-item/news-item.component */ "mReP");





class NewsDetailsComponent {
    constructor(activatedRoute, newsApiService) {
        this.activatedRoute = activatedRoute;
        this.newsApiService = newsApiService;
    }
    ngOnInit() {
        this.initPage();
    }
    initPage() {
        this.activatedRoute.params.subscribe(newsId => {
            this.newsApiService.newsSingle(newsId.id).subscribe(news => {
                this.newsSingle = news;
            });
        });
    }
}
NewsDetailsComponent.ɵfac = function NewsDetailsComponent_Factory(t) { return new (t || NewsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_api_news_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"])); };
NewsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsDetailsComponent, selectors: [["app-news-details"]], decls: 7, vars: 1, consts: [[1, "section-news-details"], [1, "container"], [1, "news-details"], [1, "news-details__news"], ["size", "large", 3, "news"], [1, "news-details__left"]], template: function NewsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-news-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 123 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("news", ctx.newsSingle);
    } }, directives: [_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_3__["NewsItemComponent"]], styles: [".section-news-details[_ngcontent-%COMP%] {\n  padding: 48px 0;\n}\n\n.news-details[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.news-details__news[_ngcontent-%COMP%] {\n  flex: 2;\n}\n\n.news-details__left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWRldGFpbHMvbmV3cy1kZXRhaWxzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUFFO0VBQ0UsT0FBQTtBQUVKOztBQUFFO0VBQ0UsT0FBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWRldGFpbHMvbmV3cy1kZXRhaWxzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tbmV3cy1kZXRhaWxzXHJcbiAgcGFkZGluZzogNDhweCAwXHJcblxyXG4ubmV3cy1kZXRhaWxzXHJcbiAgZGlzcGxheTogZmxleFxyXG5cclxuICAmX19uZXdzXHJcbiAgICBmbGV4OiAyXHJcblxyXG4gICZfX2xlZnRcclxuICAgIGZsZXg6IDFcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-details',
                templateUrl: './news-details.component.html',
                styleUrls: ['./news-details.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_api_news_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-news-news-module.js.map