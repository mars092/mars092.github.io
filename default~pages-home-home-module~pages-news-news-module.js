(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-home-home-module~pages-news-news-module"],{

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");




class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 0, consts: [[1, "header"], [1, "container", "container_fluid"], [1, "header__wrap"], ["routerLink", "/", 1, "header__logo"], ["src", "assets/img/logo.svg", 1, "header__logo-big"], ["src", "assets/img/logo-small.svg", 1, "header__logo-small"], [1, "header__wrap-user"], ["href", "#", 1, "header__user"], ["src", "assets/img/user.svg", 1, "ico-user"], [1, "header__user-name"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "svg-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "svg-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "svg-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418. \u0418.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  width: 100%;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n  background-color: #f65050;\n}\n.header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.header__wrap[_ngcontent-%COMP%] {\n  display: flex;\n  height: 80px;\n}\n@media only screen and (max-width: 767px) {\n  .header__wrap[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n.header__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n}\n@media only screen and (max-width: 767px) {\n  .header__logo-big[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header__logo-big[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 213px;\n  height: 33px;\n}\n@media only screen and (min-width: 768px) {\n  .header__logo-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header__logo-small[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 31px;\n}\n.header__wrap-user[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: auto;\n}\n.header__user[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  display: flex;\n  align-items: center;\n  padding: 0 30px;\n}\n@media only screen and (max-width: 767px) {\n  .header__user[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n}\n.header__user[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 0;\n  background-color: #fff;\n  transition: height 0.25s ease-in-out;\n}\n.header__user[_ngcontent-%COMP%]   .ico-user[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n.header__user[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 12px;\n}\n.header__user[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  transition: fill 0.25s ease-in-out;\n}\n.header__user-name[_ngcontent-%COMP%] {\n  transition: color 0.25s ease-in-out;\n}\n.header__user[_ngcontent-%COMP%]:hover:before {\n  height: 100%;\n}\n.header__user[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #f65050;\n}\n.header__user[_ngcontent-%COMP%]:hover   .header__user-name[_ngcontent-%COMP%] {\n  color: #f65050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL3V0aWxpdGllcy92YXJpYWJsZXMuc2FzcyIsInNyYy91dGlsaXRpZXMvbWl4aW4uc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQ0RJO0FERE47QUFJRTtFQUNFLGdCQUFBO0FBRko7QUFJRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBRko7QUVoQkU7RUZnQkE7SUFJSSxZQUFBO0VBQUo7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUV6QkU7RUYwQkU7SUFFSSxhQUFBO0VBQ047QUFDRjtBQURNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFHUjtBRTlCRTtFRjZCRTtJQUVJLGFBQUE7RUFHTjtBQUNGO0FBSE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUtSO0FBSEU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFLSjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUtKO0FFdERFO0VGNENBO0lBT0ksZUFBQTtFQU9KO0FBQ0Y7QUFOSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBQVFOO0FBTkk7RUFDRSxtQkFBQTtBQVFOO0FBTkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVFOO0FBTk07RUFDRSxrQ0FBQTtBQVFSO0FBTkk7RUFDRSxtQ0FBQTtBQVFOO0FBTE07RUFDRSxZQUFBO0FBT1I7QUFKUTtFQUNFLGFDekVKO0FEK0VOO0FBSk07RUFDRSxjQzVFRjtBRGtGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdXRpbGl0aWVzL3ZhcmlhYmxlc1wiXHJcbkBpbXBvcnQgXCJzcmMvdXRpbGl0aWVzL21peGluXCJcclxuXHJcbi5oZWFkZXJcclxuICBwb3NpdGlvbjogZml4ZWRcclxuICB0b3A6IDBcclxuICBsZWZ0OiAwXHJcbiAgei1pbmRleDogMTBcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgd2lkdGg6IDEwMCVcclxuICBjb2xvcjogI2ZmZlxyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoIzAwMCwuMilcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1hXHJcblxyXG4gID4gLmNvbnRhaW5lclxyXG4gICAgcGFkZGluZy1yaWdodDogMFxyXG5cclxuICAmX193cmFwXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBoZWlnaHQ6IDgwcHhcclxuICAgICtyKCRtZCAtIDEpXHJcbiAgICAgIGhlaWdodDogNjBweFxyXG5cclxuICAmX19sb2dvXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXJcclxuXHJcbiAgICAmLWJpZ1xyXG4gICAgICArcigkbWQgLSAxKVxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgc3ZnXHJcbiAgICAgICAgd2lkdGg6IDIxM3B4XHJcbiAgICAgICAgaGVpZ2h0OiAzM3B4XHJcblxyXG4gICAgJi1zbWFsbFxyXG4gICAgICArcm1pbigkbWQpXHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICBzdmdcclxuICAgICAgICB3aWR0aDogNjJweFxyXG4gICAgICAgIGhlaWdodDogMzFweFxyXG5cclxuICAmX193cmFwLXVzZXJcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcblxyXG4gICZfX3VzZXJcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgei1pbmRleDogMFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgcGFkZGluZzogMCAzMHB4XHJcbiAgICArcigkbWQgLSAxKVxyXG4gICAgICBwYWRkaW5nOiAwIDE1cHhcclxuXHJcbiAgICAmOmJlZm9yZVxyXG4gICAgICBjb250ZW50OiAnJ1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgICAgdG9wOiAwXHJcbiAgICAgIGxlZnQ6IDBcclxuICAgICAgei1pbmRleDogLTFcclxuICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0ICRkZWxheVxyXG5cclxuICAgIC5pY28tdXNlclxyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC41ZW1cclxuXHJcbiAgICBzdmdcclxuICAgICAgd2lkdGg6IDEwcHhcclxuICAgICAgaGVpZ2h0OiAxMnB4XHJcblxyXG4gICAgICBwYXRoXHJcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAkZGVsYXlcclxuXHJcbiAgICAmLW5hbWVcclxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgJGRlbGF5XHJcblxyXG4gICAgJjpob3ZlclxyXG4gICAgICAmOmJlZm9yZVxyXG4gICAgICAgIGhlaWdodDogMTAwJVxyXG5cclxuICAgICAgc3ZnXHJcbiAgICAgICAgcGF0aFxyXG4gICAgICAgICAgZmlsbDogJGMtYVxyXG5cclxuICAgICAgLmhlYWRlcl9fdXNlci1uYW1lXHJcbiAgICAgICAgY29sb3I6ICRjLWFcclxuIiwiJG1vYmlsZS1zOiAzNzVcclxuJHNtOiA1NzZcclxuJG1kOiA3NjhcclxuJGxnOiAxMDI0XHJcbiR4bDogMTI4MFxyXG4kaGQ6IDE0NDBcclxuXHJcbiRiYXNlRm9udDogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlxyXG5cclxuJGMtZjogIzIwMjEyNFxyXG4kYy1wOiAjZjY1MDUwXHJcbiRjLWE6ICNmNjUwNTBcclxuJGMtYjogIzcwNzA3MFxyXG4kYy1ncmF5OiAjNTU1XHJcbiRjLWJnLWdyYXk6ICNlYmViZWJcclxuXHJcbi8vIGNhdGVnb3JpZXNcclxuLy/RgtGA0LDQvdGB0L/QvtGA0YJcclxuJGNhdGVnb3J5NDogIzVjNzE0OFxyXG4vL9Cw0LLQsNGA0LjRjyDQvdCwINC60L7QvCDRgdC10YLRj9GFXHJcbiRjYXRlZ29yeTE6ICMwYzRjOGFcclxuLy/QtNC+0YDQvtCz0LhcclxuJGNhdGVnb3J5MzogIzhiNzA1YVxyXG4vL9C30LTQvtGA0L7QstGM0LVcclxuJGNhdGVnb3J5NzogIzk3ZDVlMFxyXG4vL9C60YDQuNC80LjQvdCw0LtcclxuJGNhdGVnb3J5OTogIzRhNDc0N1xyXG4vL9C80LXRgNC+0L/RgNC40Y/RgtC40Y9cclxuJGNhdGVnb3J5NjogI2QxMzA3NlxyXG4vL9C/0LvQsNC90L7QstGL0LUg0L7RgtC60LvRjtGH0LXQvdC40Y9cclxuJGNhdGVnb3J5MjogI2U4YzQ0YlxyXG4vL9GC0LXRgNGA0L7RgNC40LfQvFxyXG4kY2F0ZWdvcnk4OiAjNzM1MjQ1XHJcbi8v0KfQoVxyXG4kY2F0ZWdvcnk1OiAjZWY1NjJkXHJcbi8v0Y3QutC+0LvQvtCz0LjRj1xyXG4kY2F0ZWdvcnkxMDogIzg4YjE0YlxyXG4vL9C40L3RhNC+0YDQvNCw0YbQuNGPXHJcbiRjYXRlZ29yeTE1OiAjNjM3M2Q5XHJcblxyXG4vLyB0cmFuc2l0aW9uXHJcbiR0cmFuc2l0aW9uU3BlZWQ6IC4yNXNcclxuJGVhc2U6IGVhc2UtaW4tb3V0XHJcbiRkZWxheTogJHRyYW5zaXRpb25TcGVlZCAkZWFzZVxyXG4iLCI9cigkd2lkdGgpXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkd2lkdGgrIFwicHhcIilcclxuICAgIEBjb250ZW50XHJcblxyXG49cm1pbigkd2lkdGgpXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkd2lkdGgrIFwicHhcIilcclxuICAgIEBjb250ZW50XHJcblxyXG49YXJyKCR3aWR0aCwgJGhlaWdodCwgJGJnLCAkZGlyZWN0aW9uKVxyXG4gIHdpZHRoOiAwXHJcbiAgaGVpZ2h0OiAwXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZFxyXG4gIEBpZiAkZGlyZWN0aW9uID09IHRcclxuICAgIGJvcmRlci13aWR0aDogMCAkd2lkdGggLyAyICsgcHggJGhlaWdodCArIHB4ICR3aWR0aCAvIDIgKyBweFxyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkYmcgdHJhbnNwYXJlbnRcclxuICBAaWYgJGRpcmVjdGlvbiA9PSByXHJcbiAgICBib3JkZXItd2lkdGg6ICRoZWlnaHQgLyAyICsgcHggMCAkaGVpZ2h0IC8gMiArIHB4ICR3aWR0aCArIHB4XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRiZ1xyXG4gIEBpZiAkZGlyZWN0aW9uID09IGJcclxuICAgIGJvcmRlci13aWR0aDogJGhlaWdodCArIHB4ICR3aWR0aCAvIDIgKyBweCAwICR3aWR0aCAvIDIgKyBweFxyXG4gICAgYm9yZGVyLWNvbG9yOiAkYmcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcclxuICBAaWYgJGRpcmVjdGlvbiA9PSBsXHJcbiAgICBib3JkZXItd2lkdGg6ICRoZWlnaHQgLyAyICsgcHggJHdpZHRoICsgcHggJGhlaWdodCAvIDIgKyBweCAwXHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRiZyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxyXG4gIEBpZiAkZGlyZWN0aW9uID09IHRsXHJcbiAgICBib3JkZXItd2lkdGg6ICRoZWlnaHQgKyBweCAkd2lkdGggKyBweCAwIDBcclxuICAgIGJvcmRlci1jb2xvcjogJGJnIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gdHJcclxuICAgIGJvcmRlci13aWR0aDogMCAkd2lkdGggKyBweCAkaGVpZ2h0ICsgcHggMFxyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAkYmcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcclxuICBAaWYgJGRpcmVjdGlvbiA9PSBiclxyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgJGhlaWdodCArIHB4ICR3aWR0aCArIHB4XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRiZyB0cmFuc3BhcmVudFxyXG4gIEBpZiAkZGlyZWN0aW9uID09IGJsXHJcbiAgICBib3JkZXItd2lkdGg6ICR3aWR0aCArIHB4IDAgMCAkaGVpZ2h0ICsgcHhcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGJnXHJcbiAgLy8gZXhhbXBsZVxyXG4gIC8vICthcnIoNTAwLDUwLCAjMDAwLCBsKVxyXG4gIC8vICthcnIoNTAwLDUwLCAjMDAwLCBibClcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3EpM":
/*!******************************************************************************!*\
  !*** ./src/app/shared/modules/shared-components/shared-components.module.ts ***!
  \******************************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/footer/footer.component */ "LmEr");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _components_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/news-item/news-item.component */ "mReP");
/* harmony import */ var _pipes_first_capital_letter_first_capital_letter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/first-capital-letter/first-capital-letter.pipe */ "JsUc");
/* harmony import */ var _pipes_truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/truncate/truncate.pipe */ "5qIx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










const MULTI_EXPORT = [
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
    _components_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_5__["NewsItemComponent"],
    _pipes_first_capital_letter_first_capital_letter_pipe__WEBPACK_IMPORTED_MODULE_6__["FirstCapitalLetterPipe"],
    _pipes_truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"]
];
class SharedComponentsModule {
}
SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__["AngularSvgIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_5__["NewsItemComponent"],
        _pipes_first_capital_letter_first_capital_letter_pipe__WEBPACK_IMPORTED_MODULE_6__["FirstCapitalLetterPipe"],
        _pipes_truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__["AngularSvgIconModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_5__["NewsItemComponent"],
        _pipes_first_capital_letter_first_capital_letter_pipe__WEBPACK_IMPORTED_MODULE_6__["FirstCapitalLetterPipe"],
        _pipes_truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: MULTI_EXPORT,
                exports: MULTI_EXPORT,
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__["AngularSvgIconModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5qIx":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/truncate/truncate.pipe.ts ***!
  \********************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TruncatePipe {
    transform(str, numb = 200, end = '...') {
        if (str.length > numb) {
            return str.slice(0, numb) + end;
        }
        return str;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();


/***/ }),

/***/ "JsUc":
/*!********************************************************************************!*\
  !*** ./src/app/shared/pipes/first-capital-letter/first-capital-letter.pipe.ts ***!
  \********************************************************************************/
/*! exports provided: FirstCapitalLetterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCapitalLetterPipe", function() { return FirstCapitalLetterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FirstCapitalLetterPipe {
    transform(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}
FirstCapitalLetterPipe.ɵfac = function FirstCapitalLetterPipe_Factory(t) { return new (t || FirstCapitalLetterPipe)(); };
FirstCapitalLetterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "firstCapitalLetter", type: FirstCapitalLetterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstCapitalLetterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'firstCapitalLetter'
            }]
    }], null, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class FooterComponent {
    constructor() {
    }
    ngOnInit() {
        this.thisYear = new Date();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 4, consts: [[1, "footer"], [1, "footer__houses"], [1, "container"], [1, "footer__wrap"], [1, "footer__info"], [1, "footer__copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A\u043E\u0433\u043E \u043A\u0440\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A\u043E\u0433\u043E \u043A\u0440\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041A\u0413\u041A\u0423 \"\u0426\u0435\u043D\u0442\u0440 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A\u043E\u0433\u043E \u043A\u0440\u0430\u044F\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 1, ctx.thisYear, "yyyy"), ", 112 \u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A\u043E\u0433\u043E \u043A\u0440\u0430\u044F. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".footer[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fff;\n  margin-top: 100px;\n  background-color: #555;\n}\n@media only screen and (max-width: 1023px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-top: 70px;\n  }\n}\n.footer__houses[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 90px;\n  background-image: url(\"/assets/img/houses.svg\");\n  background-repeat: repeat-x;\n  background-position: center 100%;\n  background-size: auto 100%;\n  transform: translateY(-100%);\n}\n@media only screen and (max-width: 1023px) {\n  .footer__houses[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n.footer__wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 25px 0;\n}\n@media only screen and (max-width: 1023px) {\n  .footer__wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.footer__info[_ngcontent-%COMP%], .footer__copyright[_ngcontent-%COMP%] {\n  width: 50%;\n  font-size: 14px;\n  line-height: calc(28 / 14);\n}\n@media only screen and (max-width: 1023px) {\n  .footer__info[_ngcontent-%COMP%], .footer__copyright[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .footer__info[_ngcontent-%COMP%], .footer__copyright[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .footer__info[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL3V0aWxpdGllcy92YXJpYWJsZXMuc2FzcyIsInNyYy91dGlsaXRpZXMvbWl4aW4uc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JDTU87QURSVDtBRUpFO0VGRUY7SUFNSSxnQkFBQTtFQUFGO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFDSjtBRXJCRTtFRlVBO0lBWUksWUFBQTtFQUdKO0FBQ0Y7QUFGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFJSjtBRS9CRTtFRndCQTtJQUtJLHNCQUFBO0VBTUo7QUFDRjtBQUxFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQU9KO0FFekNFO0VGK0JBO0lBS0ksV0FBQTtFQVNKO0FBQ0Y7QUU5Q0U7RUYrQkE7SUFPSSxlQUFBO0VBWUo7QUFDRjtBRW5ERTtFRndDQTtJQUVJLG1CQUFBO0VBYUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdXRpbGl0aWVzL3ZhcmlhYmxlc1wiXHJcbkBpbXBvcnQgXCJzcmMvdXRpbGl0aWVzL21peGluXCJcclxuXHJcbi5mb290ZXJcclxuICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICBjb2xvcjogI2ZmZlxyXG4gIG1hcmdpbi10b3A6IDEwMHB4XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGMtZ3JheVxyXG4gICtyKCRsZyAtIDEpXHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4XHJcblxyXG4gICZfX2hvdXNlc1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB0b3A6IDBcclxuICAgIGxlZnQ6IDBcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDkwcHhcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaG91c2VzLnN2ZycpXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXhcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAxMDAlXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJVxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKVxyXG4gICAgK3IoJGxnIC0gMSlcclxuICAgICAgaGVpZ2h0OiA2MHB4XHJcblxyXG4gICZfX3dyYXBcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIHBhZGRpbmc6IDI1cHggMFxyXG4gICAgK3IoJGxnIC0gMSlcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG5cclxuICAmX19pbmZvLCAmX19jb3B5cmlnaHRcclxuICAgIHdpZHRoOiA1MCVcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoMjggLyAxNClcclxuICAgICtyKCRsZyAtIDEpXHJcbiAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICArcigkc20gLSAxKVxyXG4gICAgICBmb250LXNpemU6IDEycHhcclxuXHJcbiAgJl9faW5mb1xyXG4gICAgK3IoJGxnIC0gMSlcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweFxyXG4iLCIkbW9iaWxlLXM6IDM3NVxyXG4kc206IDU3NlxyXG4kbWQ6IDc2OFxyXG4kbGc6IDEwMjRcclxuJHhsOiAxMjgwXHJcbiRoZDogMTQ0MFxyXG5cclxuJGJhc2VGb250OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmXHJcblxyXG4kYy1mOiAjMjAyMTI0XHJcbiRjLXA6ICNmNjUwNTBcclxuJGMtYTogI2Y2NTA1MFxyXG4kYy1iOiAjNzA3MDcwXHJcbiRjLWdyYXk6ICM1NTVcclxuJGMtYmctZ3JheTogI2ViZWJlYlxyXG5cclxuLy8gY2F0ZWdvcmllc1xyXG4vL9GC0YDQsNC90YHQv9C+0YDRglxyXG4kY2F0ZWdvcnk0OiAjNWM3MTQ4XHJcbi8v0LDQstCw0YDQuNGPINC90LAg0LrQvtC8INGB0LXRgtGP0YVcclxuJGNhdGVnb3J5MTogIzBjNGM4YVxyXG4vL9C00L7RgNC+0LPQuFxyXG4kY2F0ZWdvcnkzOiAjOGI3MDVhXHJcbi8v0LfQtNC+0YDQvtCy0YzQtVxyXG4kY2F0ZWdvcnk3OiAjOTdkNWUwXHJcbi8v0LrRgNC40LzQuNC90LDQu1xyXG4kY2F0ZWdvcnk5OiAjNGE0NzQ3XHJcbi8v0LzQtdGA0L7Qv9GA0LjRj9GC0LjRj1xyXG4kY2F0ZWdvcnk2OiAjZDEzMDc2XHJcbi8v0L/Qu9Cw0L3QvtCy0YvQtSDQvtGC0LrQu9GO0YfQtdC90LjRj1xyXG4kY2F0ZWdvcnkyOiAjZThjNDRiXHJcbi8v0YLQtdGA0YDQvtGA0LjQt9C8XHJcbiRjYXRlZ29yeTg6ICM3MzUyNDVcclxuLy/Qp9ChXHJcbiRjYXRlZ29yeTU6ICNlZjU2MmRcclxuLy/RjdC60L7Qu9C+0LPQuNGPXHJcbiRjYXRlZ29yeTEwOiAjODhiMTRiXHJcbi8v0LjQvdGE0L7RgNC80LDRhtC40Y9cclxuJGNhdGVnb3J5MTU6ICM2MzczZDlcclxuXHJcbi8vIHRyYW5zaXRpb25cclxuJHRyYW5zaXRpb25TcGVlZDogLjI1c1xyXG4kZWFzZTogZWFzZS1pbi1vdXRcclxuJGRlbGF5OiAkdHJhbnNpdGlvblNwZWVkICRlYXNlXHJcbiIsIj1yKCR3aWR0aClcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR3aWR0aCsgXCJweFwiKVxyXG4gICAgQGNvbnRlbnRcclxuXHJcbj1ybWluKCR3aWR0aClcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR3aWR0aCsgXCJweFwiKVxyXG4gICAgQGNvbnRlbnRcclxuXHJcbj1hcnIoJHdpZHRoLCAkaGVpZ2h0LCAkYmcsICRkaXJlY3Rpb24pXHJcbiAgd2lkdGg6IDBcclxuICBoZWlnaHQ6IDBcclxuICBib3JkZXItc3R5bGU6IHNvbGlkXHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gdFxyXG4gICAgYm9yZGVyLXdpZHRoOiAwICR3aWR0aCAvIDIgKyBweCAkaGVpZ2h0ICsgcHggJHdpZHRoIC8gMiArIHB4XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRiZyB0cmFuc3BhcmVudFxyXG4gIEBpZiAkZGlyZWN0aW9uID09IHJcclxuICAgIGJvcmRlci13aWR0aDogJGhlaWdodCAvIDIgKyBweCAwICRoZWlnaHQgLyAyICsgcHggJHdpZHRoICsgcHhcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGJnXHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gYlxyXG4gICAgYm9yZGVyLXdpZHRoOiAkaGVpZ2h0ICsgcHggJHdpZHRoIC8gMiArIHB4IDAgJHdpZHRoIC8gMiArIHB4XHJcbiAgICBib3JkZXItY29sb3I6ICRiZyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxyXG4gIEBpZiAkZGlyZWN0aW9uID09IGxcclxuICAgIGJvcmRlci13aWR0aDogJGhlaWdodCAvIDIgKyBweCAkd2lkdGggKyBweCAkaGVpZ2h0IC8gMiArIHB4IDBcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgJGJnIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gdGxcclxuICAgIGJvcmRlci13aWR0aDogJGhlaWdodCArIHB4ICR3aWR0aCArIHB4IDAgMFxyXG4gICAgYm9yZGVyLWNvbG9yOiAkYmcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcclxuICBAaWYgJGRpcmVjdGlvbiA9PSB0clxyXG4gICAgYm9yZGVyLXdpZHRoOiAwICR3aWR0aCArIHB4ICRoZWlnaHQgKyBweCAwXHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRiZyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxyXG4gIEBpZiAkZGlyZWN0aW9uID09IGJyXHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAkaGVpZ2h0ICsgcHggJHdpZHRoICsgcHhcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGJnIHRyYW5zcGFyZW50XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gYmxcclxuICAgIGJvcmRlci13aWR0aDogJHdpZHRoICsgcHggMCAwICRoZWlnaHQgKyBweFxyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkYmdcclxuICAvLyBleGFtcGxlXHJcbiAgLy8gK2Fycig1MDAsNTAsICMwMDAsIGwpXHJcbiAgLy8gK2Fycig1MDAsNTAsICMwMDAsIGJsKVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bb1m":
/*!*********************************!*\
  !*** ./src/environments/url.ts ***!
  \*********************************/
/*! exports provided: API_NEWS, API_REGIONS, API_CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_NEWS", function() { return API_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_REGIONS", function() { return API_REGIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CATEGORIES", function() { return API_CATEGORIES; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "AytR");

const API_NEWS = _environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/api/broadcasts/';
const API_REGIONS = _environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/api/regions/';
const API_CATEGORIES = _environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/api/broadcast_groups/';


/***/ }),

/***/ "ge9p":
/*!*****************************************************!*\
  !*** ./src/app/shared/api/news/news-api.service.ts ***!
  \*****************************************************/
/*! exports provided: NewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiService", function() { return NewsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/url */ "bb1m");





class NewsApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    news(offset, limit) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: {
                offset: offset.toString(),
                limit: limit.toString()
            }
        });
        return this.httpClient.get(_environments_url__WEBPACK_IMPORTED_MODULE_2__["API_NEWS"], { params });
    }
    newsSingle(id) {
        return this.httpClient.get(_environments_url__WEBPACK_IMPORTED_MODULE_2__["API_NEWS"] + id);
    }
}
NewsApiService.ɵfac = function NewsApiService_Factory(t) { return new (t || NewsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NewsApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsApiService, factory: NewsApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mReP":
/*!*************************************************************!*\
  !*** ./src/app/components/news-item/news-item.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function() { return NewsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_api_categories_categories_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/api/categories/categories-api.service */ "t3y+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_first_capital_letter_first_capital_letter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/first-capital-letter/first-capital-letter.pipe */ "JsUc");
/* harmony import */ var _shared_pipes_truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/truncate/truncate.pipe */ "5qIx");







function NewsItemComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.news.scheduled_time, "HH:mm dd.MM.yy"), " ");
} }
function NewsItemComponent_div_0_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.news.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NewsItemComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "truncate");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.news.message), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function NewsItemComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.news.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function NewsItemComponent_div_0_div_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r6.news.scheduled_time, "HH:mm dd.MM.yy"), " ");
} }
const _c0 = function (a1) { return ["news", a1]; };
function NewsItemComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsItemComponent_div_0_div_13_span_1_Template, 3, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isSmall());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn", ctx_r5.isDefault())("btn_link", ctx_r5.isDefault())("link-text", ctx_r5.isSmall());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r5.news.id));
} }
const _c1 = function (a1) { return ["news-item__category-name", a1]; };
function NewsItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewsItemComponent_div_0_div_4_Template, 3, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewsItemComponent_div_0_img_5_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "firstCapitalLetter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewsItemComponent_div_0_div_11_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewsItemComponent_div_0_div_12_Template, 1, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NewsItemComponent_div_0_div_13_Template, 5, 10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("news-item_small", ctx_r0.isSmall())("news-item_large", ctx_r0.isLarge());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx_r0.categoryIdClassName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.news.group, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDefault() || ctx_r0.isLarge());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDefault() || ctx_r0.isLarge());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, ctx_r0.news.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSmall() || ctx_r0.isDefault());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLarge());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSmall() || ctx_r0.isDefault());
} }
class NewsItemComponent {
    constructor(categoriesApiService) {
        this.categoriesApiService = categoriesApiService;
        this.size = 'default';
        this.categoryIdClassName = 'categoryColorBgDefault';
    }
    ngOnChanges(changes) {
        if (changes.news.currentValue) {
            this.checkCategory();
        }
    }
    checkCategory() {
        this.categories$ = this.categoriesApiService.categories();
        this.categories$.subscribe(resp => {
            for (const respKey in resp) {
                if (resp[respKey].name === this.news.group) {
                    if (this.news.image === null) {
                        this.news.image = resp[respKey].image;
                    }
                    this.categoryIdClassName = `categoryColorBg${resp[respKey].id}`;
                }
            }
        });
    }
    isSmall() {
        return this.size === 'small';
    }
    isDefault() {
        return this.size === 'default';
    }
    isLarge() {
        return this.size === 'large';
    }
}
NewsItemComponent.ɵfac = function NewsItemComponent_Factory(t) { return new (t || NewsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_api_categories_categories_api_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesApiService"])); };
NewsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsItemComponent, selectors: [["app-news-item"]], inputs: { size: "size", news: "news" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "news-item", 3, "news-item_small", "news-item_large", 4, "ngIf"], [1, "news-item"], [1, "news-item__wrap-head"], ["class", "news-item__date", 4, "ngIf"], ["alt", "", "class", "news-item__img img-cover", 3, "src", 4, "ngIf"], [1, "news-item__content"], [1, "news-item__title"], ["class", "news-item__text", 3, "innerHTML", 4, "ngIf"], ["class", "news-item__btn", 4, "ngIf"], [1, "news-item__date"], ["alt", "", 1, "news-item__img", "img-cover", 3, "src"], [1, "news-item__text", 3, "innerHTML"], [1, "news-item__btn"], ["class", "fw-600", 4, "ngIf"], [3, "routerLink"], [1, "fw-600"]], template: function NewsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewsItemComponent_div_0_Template, 14, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.news);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_shared_pipes_first_capital_letter_first_capital_letter_pipe__WEBPACK_IMPORTED_MODULE_4__["FirstCapitalLetterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _shared_pipes_truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"]], styles: [".news-item__wrap-head[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: calc(345 / 528 * 100%);\n}\n.news-item__img[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n.news-item__category-name[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: -8px;\n  display: inline-flex;\n  align-items: center;\n  width: auto;\n  min-height: 36px;\n  font-size: 18px;\n  color: #fff;\n  text-transform: uppercase;\n  padding: 0 20px 0 28px;\n}\n@media only screen and (max-width: 767px) {\n  .news-item__category-name[_ngcontent-%COMP%] {\n    min-height: 30px;\n    font-size: 16px;\n    padding: 0 15px 0 23px;\n  }\n}\n.news-item__category-name[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 0;\n}\n.news-item__date[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 16px;\n  color: #fff;\n  padding: 4px 8px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.news-item__content[_ngcontent-%COMP%] {\n  padding: 14px 0 0;\n}\n.news-item__title[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n@media only screen and (max-width: 767px) {\n  .news-item__title[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n  }\n}\n.news-item__text[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n@media only screen and (max-width: 767px) {\n  .news-item__text[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n  }\n}\n.news-item__btn[_ngcontent-%COMP%] {\n  display: flex;\n}\n.news-item_small[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n  border-radius: 4px;\n  background-color: #ebebeb;\n}\n.news-item_small[_ngcontent-%COMP%]   .news-item__wrap-head[_ngcontent-%COMP%] {\n  height: auto;\n  padding-bottom: 0;\n}\n.news-item_small[_ngcontent-%COMP%]   .news-item__category-name[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n}\n.news-item_small[_ngcontent-%COMP%]   .news-item__img[_ngcontent-%COMP%] {\n  display: none;\n}\n.news-item_small[_ngcontent-%COMP%]   .news-item__content[_ngcontent-%COMP%] {\n  padding: 11px 24px 26px;\n}\n.news-item_small[_ngcontent-%COMP%]   .news-item__btn[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.news-item_large[_ngcontent-%COMP%]   .news-item__title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.news-item_large[_ngcontent-%COMP%]   .news-item__text[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWl0ZW0vbmV3cy1pdGVtLmNvbXBvbmVudC5zYXNzIiwic3JjL3V0aWxpdGllcy9taXhpbi5zYXNzIiwic3JjL3V0aWxpdGllcy92YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtBQUhKO0FBS0U7RUFDRSxrQkFBQTtBQUhKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUhKO0FDcEJFO0VEWUE7SUFhSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtFQURKO0FBQ0Y7QUFFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBQU47QUFFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FDL0NFO0VEOENBO0lBR0ksbUJBQUE7RUFFSjtBQUNGO0FBREU7RUFDRSxtQkFBQTtBQUdKO0FDdkRFO0VEbURBO0lBR0ksbUJBQUE7RUFLSjtBQUNGO0FBSkU7RUFDRSxhQUFBO0FBTUo7QUFKRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVqRFE7QUZ1RFo7QUFITTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUtSO0FBSE07RUFDRSxrQkFBQTtFQUNBLE1BQUE7QUFLUjtBQUhNO0VBQ0UsYUFBQTtBQUtSO0FBSE07RUFDRSx1QkFBQTtBQUtSO0FBSE07RUFDRSw4QkFBQTtBQUtSO0FBQVE7RUFDRSxlQUFBO0FBRVY7QUFBTTtFQUNFLGdCQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MtaXRlbS9uZXdzLWl0ZW0uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3V0aWxpdGllcy92YXJpYWJsZXNcIlxyXG5AaW1wb3J0IFwic3JjL3V0aWxpdGllcy9taXhpblwiXHJcblxyXG4ubmV3cy1pdGVtXHJcbiAgJl9fd3JhcC1oZWFkXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDBcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDM0NSAvIDUyOCAqIDEwMCUpXHJcblxyXG4gICZfX2ltZ1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4XHJcblxyXG4gICZfX2NhdGVnb3J5LW5hbWVcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgdG9wOiAxNnB4XHJcbiAgICBsZWZ0OiAtOHB4XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgd2lkdGg6IGF1dG9cclxuICAgIG1pbi1oZWlnaHQ6IDM2cHhcclxuICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgY29sb3I6ICNmZmZcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDI4cHhcclxuICAgICtyKCRtZCAtIDEpXHJcbiAgICAgIG1pbi1oZWlnaHQ6IDMwcHhcclxuICAgICAgZm9udC1zaXplOiAxNnB4XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDIzcHhcclxuXHJcbiAgICAmOmJlZm9yZVxyXG4gICAgICBjb250ZW50OiAnJ1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgICAgdG9wOiAxMDAlXHJcbiAgICAgIGxlZnQ6IDBcclxuXHJcbiAgJl9fZGF0ZVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICByaWdodDogMFxyXG4gICAgYm90dG9tOiAxNnB4XHJcbiAgICBjb2xvcjogI2ZmZlxyXG4gICAgcGFkZGluZzogNHB4IDhweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLC40KVxyXG5cclxuICAmX19jb250ZW50XHJcbiAgICBwYWRkaW5nOiAxNHB4IDAgMFxyXG5cclxuICAmX190aXRsZVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweFxyXG4gICAgK3IoJG1kIC0gMSlcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweFxyXG5cclxuICAmX190ZXh0XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4XHJcbiAgICArcigkbWQgLSAxKVxyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4XHJcblxyXG4gICZfX2J0blxyXG4gICAgZGlzcGxheTogZmxleFxyXG5cclxuICAmX3NtYWxsXHJcbiAgICBwYWRkaW5nOiAxNnB4IDAgMFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1iZy1ncmF5XHJcblxyXG4gICAgLm5ld3MtaXRlbVxyXG4gICAgICAmX193cmFwLWhlYWRcclxuICAgICAgICBoZWlnaHQ6IGF1dG9cclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMFxyXG5cclxuICAgICAgJl9fY2F0ZWdvcnktbmFtZVxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIHRvcDogMFxyXG5cclxuICAgICAgJl9faW1nXHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG5cclxuICAgICAgJl9fY29udGVudFxyXG4gICAgICAgIHBhZGRpbmc6IDExcHggMjRweCAyNnB4XHJcblxyXG4gICAgICAmX19idG5cclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuXHJcbiAgJl9sYXJnZVxyXG4gICAgLm5ld3MtaXRlbVxyXG4gICAgICAmX190aXRsZVxyXG4gICAgICAgIGgzXHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHhcclxuXHJcbiAgICAgICZfX3RleHRcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXHJcbiIsIj1yKCR3aWR0aClcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR3aWR0aCsgXCJweFwiKVxyXG4gICAgQGNvbnRlbnRcclxuXHJcbj1ybWluKCR3aWR0aClcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR3aWR0aCsgXCJweFwiKVxyXG4gICAgQGNvbnRlbnRcclxuXHJcbj1hcnIoJHdpZHRoLCAkaGVpZ2h0LCAkYmcsICRkaXJlY3Rpb24pXHJcbiAgd2lkdGg6IDBcclxuICBoZWlnaHQ6IDBcclxuICBib3JkZXItc3R5bGU6IHNvbGlkXHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gdFxyXG4gICAgYm9yZGVyLXdpZHRoOiAwICR3aWR0aCAvIDIgKyBweCAkaGVpZ2h0ICsgcHggJHdpZHRoIC8gMiArIHB4XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRiZyB0cmFuc3BhcmVudFxyXG4gIEBpZiAkZGlyZWN0aW9uID09IHJcclxuICAgIGJvcmRlci13aWR0aDogJGhlaWdodCAvIDIgKyBweCAwICRoZWlnaHQgLyAyICsgcHggJHdpZHRoICsgcHhcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGJnXHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gYlxyXG4gICAgYm9yZGVyLXdpZHRoOiAkaGVpZ2h0ICsgcHggJHdpZHRoIC8gMiArIHB4IDAgJHdpZHRoIC8gMiArIHB4XHJcbiAgICBib3JkZXItY29sb3I6ICRiZyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxyXG4gIEBpZiAkZGlyZWN0aW9uID09IGxcclxuICAgIGJvcmRlci13aWR0aDogJGhlaWdodCAvIDIgKyBweCAkd2lkdGggKyBweCAkaGVpZ2h0IC8gMiArIHB4IDBcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgJGJnIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gdGxcclxuICAgIGJvcmRlci13aWR0aDogJGhlaWdodCArIHB4ICR3aWR0aCArIHB4IDAgMFxyXG4gICAgYm9yZGVyLWNvbG9yOiAkYmcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcclxuICBAaWYgJGRpcmVjdGlvbiA9PSB0clxyXG4gICAgYm9yZGVyLXdpZHRoOiAwICR3aWR0aCArIHB4ICRoZWlnaHQgKyBweCAwXHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRiZyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxyXG4gIEBpZiAkZGlyZWN0aW9uID09IGJyXHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAkaGVpZ2h0ICsgcHggJHdpZHRoICsgcHhcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGJnIHRyYW5zcGFyZW50XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gYmxcclxuICAgIGJvcmRlci13aWR0aDogJHdpZHRoICsgcHggMCAwICRoZWlnaHQgKyBweFxyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkYmdcclxuICAvLyBleGFtcGxlXHJcbiAgLy8gK2Fycig1MDAsNTAsICMwMDAsIGwpXHJcbiAgLy8gK2Fycig1MDAsNTAsICMwMDAsIGJsKVxyXG4iLCIkbW9iaWxlLXM6IDM3NVxyXG4kc206IDU3NlxyXG4kbWQ6IDc2OFxyXG4kbGc6IDEwMjRcclxuJHhsOiAxMjgwXHJcbiRoZDogMTQ0MFxyXG5cclxuJGJhc2VGb250OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmXHJcblxyXG4kYy1mOiAjMjAyMTI0XHJcbiRjLXA6ICNmNjUwNTBcclxuJGMtYTogI2Y2NTA1MFxyXG4kYy1iOiAjNzA3MDcwXHJcbiRjLWdyYXk6ICM1NTVcclxuJGMtYmctZ3JheTogI2ViZWJlYlxyXG5cclxuLy8gY2F0ZWdvcmllc1xyXG4vL9GC0YDQsNC90YHQv9C+0YDRglxyXG4kY2F0ZWdvcnk0OiAjNWM3MTQ4XHJcbi8v0LDQstCw0YDQuNGPINC90LAg0LrQvtC8INGB0LXRgtGP0YVcclxuJGNhdGVnb3J5MTogIzBjNGM4YVxyXG4vL9C00L7RgNC+0LPQuFxyXG4kY2F0ZWdvcnkzOiAjOGI3MDVhXHJcbi8v0LfQtNC+0YDQvtCy0YzQtVxyXG4kY2F0ZWdvcnk3OiAjOTdkNWUwXHJcbi8v0LrRgNC40LzQuNC90LDQu1xyXG4kY2F0ZWdvcnk5OiAjNGE0NzQ3XHJcbi8v0LzQtdGA0L7Qv9GA0LjRj9GC0LjRj1xyXG4kY2F0ZWdvcnk2OiAjZDEzMDc2XHJcbi8v0L/Qu9Cw0L3QvtCy0YvQtSDQvtGC0LrQu9GO0YfQtdC90LjRj1xyXG4kY2F0ZWdvcnkyOiAjZThjNDRiXHJcbi8v0YLQtdGA0YDQvtGA0LjQt9C8XHJcbiRjYXRlZ29yeTg6ICM3MzUyNDVcclxuLy/Qp9ChXHJcbiRjYXRlZ29yeTU6ICNlZjU2MmRcclxuLy/RjdC60L7Qu9C+0LPQuNGPXHJcbiRjYXRlZ29yeTEwOiAjODhiMTRiXHJcbi8v0LjQvdGE0L7RgNC80LDRhtC40Y9cclxuJGNhdGVnb3J5MTU6ICM2MzczZDlcclxuXHJcbi8vIHRyYW5zaXRpb25cclxuJHRyYW5zaXRpb25TcGVlZDogLjI1c1xyXG4kZWFzZTogZWFzZS1pbi1vdXRcclxuJGRlbGF5OiAkdHJhbnNpdGlvblNwZWVkICRlYXNlXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-item',
                templateUrl: './news-item.component.html',
                styleUrls: ['./news-item.component.sass']
            }]
    }], function () { return [{ type: _shared_api_categories_categories_api_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesApiService"] }]; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], news: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "t3y+":
/*!*****************************************************************!*\
  !*** ./src/app/shared/api/categories/categories-api.service.ts ***!
  \*****************************************************************/
/*! exports provided: CategoriesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesApiService", function() { return CategoriesApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/url */ "bb1m");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CategoriesApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    categories() {
        return this.httpClient.get(_environments_url__WEBPACK_IMPORTED_MODULE_1__["API_CATEGORIES"]);
    }
}
CategoriesApiService.ɵfac = function CategoriesApiService_Factory(t) { return new (t || CategoriesApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoriesApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesApiService, factory: CategoriesApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-home-home-module~pages-news-news-module.js.map