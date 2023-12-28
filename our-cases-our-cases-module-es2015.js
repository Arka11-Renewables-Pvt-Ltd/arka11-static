(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["our-cases-our-cases-module"],{

/***/ "./src/app/our-cases/our-cases.module.ts":
/*!***********************************************!*\
  !*** ./src/app/our-cases/our-cases.module.ts ***!
  \***********************************************/
/*! exports provided: OurCasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurCasesModule", function() { return OurCasesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _portfolio_two_portfolio_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio-two/portfolio-two.component */ "./src/app/our-cases/portfolio-two/portfolio-two.component.ts");
/* harmony import */ var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xamin/xamin.module */ "./src/app/xamin/xamin.module.ts");







const routes = [
    {
        path: '',
        component: _portfolio_two_portfolio_two_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioTwoComponent"],
    }
];
class OurCasesModule {
}
OurCasesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OurCasesModule });
OurCasesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OurCasesModule_Factory(t) { return new (t || OurCasesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OurCasesModule, { declarations: [_portfolio_two_portfolio_two_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioTwoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurCasesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_portfolio_two_portfolio_two_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioTwoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/our-cases/portfolio-two/portfolio-two.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/our-cases/portfolio-two/portfolio-two.component.ts ***!
  \********************************************************************/
/*! exports provided: PortfolioTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioTwoComponent", function() { return PortfolioTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");
/* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
/* harmony import */ var _xamin_components_top_banner_top_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../xamin/components/top-banner/top-banner.component */ "./src/app/xamin/components/top-banner/top-banner.component.ts");
/* harmony import */ var _xamin_components_portfolio_box_portfolio_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../xamin/components/portfolio-box/portfolio-box.component */ "./src/app/xamin/components/portfolio-box/portfolio-box.component.ts");






class PortfolioTwoComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.logoImage = '/assets/images/logo.png';
        this.contactInfo = {
            contactNumber: '+0123456789',
            email: 'support@iqnonicthemes.com'
        };
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_1__["topMenuBarItems"];
        this.data = {
            title: "Portfolio 2 Columns",
            img: "04.png"
        };
    }
    ngOnInit() {
        const current = this;
        setTimeout(function () {
            current.plugins.index();
        }, 200);
    }
}
PortfolioTwoComponent.ɵfac = function PortfolioTwoComponent_Factory(t) { return new (t || PortfolioTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"])); };
PortfolioTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioTwoComponent, selectors: [["app-portfolio-two"]], decls: 30, vars: 1, consts: [[3, "data"], [1, "main-content"], [1, "container"], [1, "row", "wow", "fadeInUp"], [1, "col-sm-12"], [1, "iq-masonry-block"], [1, "isotope-filters", "isotope-tooltip"], ["data-filter", "", 1, "active"], [1, "post_no"], ["data-filter", ".design"], ["data-filter", ".html"], ["data-filter", ".photography"], ["data-filter", ".video"], [1, "iq-masonry", "iq-columns-2"]], template: function PortfolioTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-portfolio-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
    } }, directives: [_xamin_components_top_banner_top_banner_component__WEBPACK_IMPORTED_MODULE_3__["TopBannerComponent"], _xamin_components_portfolio_box_portfolio_box_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioBoxComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-two',
                templateUrl: './portfolio-two.component.html',
            }]
    }], function () { return [{ type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=our-cases-our-cases-module-es2015.js.map