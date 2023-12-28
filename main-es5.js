function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'about-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | about-about-module */
        "about-about-module").then(__webpack_require__.bind(null,
        /*! ./about/about.module */
        "./src/app/about/about.module.ts")).then(function (m) {
          return m.AboutModule;
        });
      }
    }, {
      path: 'portfolio',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | portfolio-portfolio-module */
        [__webpack_require__.e("default~pages-pages-module~portfolio-portfolio-module"), __webpack_require__.e("portfolio-portfolio-module")]).then(__webpack_require__.bind(null,
        /*! ./portfolio/portfolio.module */
        "./src/app/portfolio/portfolio.module.ts")).then(function (m) {
          return m.PortFolioModule;
        });
      }
    }, {
      path: 'services',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | services-services-module */
        "services-services-module").then(__webpack_require__.bind(null,
        /*! ./services/services.module */
        "./src/app/services/services.module.ts")).then(function (m) {
          return m.ServicesModule;
        });
      }
    }, {
      path: 'our-cases',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | our-cases-our-cases-module */
        "our-cases-our-cases-module").then(__webpack_require__.bind(null,
        /*! ./our-cases/our-cases.module */
        "./src/app/our-cases/our-cases.module.ts")).then(function (m) {
          return m.OurCasesModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-pages-module */
        [__webpack_require__.e("default~pages-pages-module~portfolio-portfolio-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/pages.module */
        "./src/app/pages/pages.module.ts")).then(function (m) {
          return m.PagesModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _constants_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants/menu */
    "./src/constants/menu.js");
    /* harmony import */


    var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./xamin/plugins.service */
    "./src/app/xamin/plugins.service.ts");
    /* harmony import */


    var _xamin_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./xamin/components/header/header.component */
    "./src/app/xamin/components/header/header.component.ts");
    /* harmony import */


    var _xamin_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./xamin/components/loader/loader.component */
    "./src/app/xamin/components/loader/loader.component.ts");
    /* harmony import */


    var _xamin_components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./xamin/components/scroll-top/scroll-top.component */
    "./src/app/xamin/components/scroll-top/scroll-top.component.ts");
    /* harmony import */


    var _xamin_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./xamin/components/footer/footer.component */
    "./src/app/xamin/components/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(plugins, router) {
        _classCallCheck(this, AppComponent);

        this.plugins = plugins;
        this.router = router;
        this.logoImage = '/assets/images/logo.png';
        this.logoImageFooter = '/assets/images/logo-footer.png';
        this.contactInfo = {
          contactNumber: '+91 7702302411',
          email: 'sales@arka11.com',
          company: 'Arka11 Renewable Solutions Pvt Ltd',
          address: "LIG, B 212, Dr A S Rao Nagar ECIL Post, Near Dr A S Rao Nagar PO, Kapra, Hyderabad - 500062"
        };
        this.title = 'Arka11';
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_2__["topMenuBarItems"];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xamin_plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 4,
      consts: [[3, "logoImg", "navItemList"], [3, "logoImg", "contactInfo"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-scroll-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoImg", ctx.logoImage)("navItemList", ctx.navItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoImg", ctx.logoImageFooter)("contactInfo", ctx.contactInfo);
        }
      },
      directives: [_xamin_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _xamin_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _xamin_components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_6__["ScrollTopComponent"], _xamin_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: []
        }]
      }], function () {
        return [{
          type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./xamin/xamin.module */
    "./src/app/xamin/xamin.module.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _views_clients_clients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./views/clients/clients.component */
    "./src/app/views/clients/clients.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _views_clients_clients_component__WEBPACK_IMPORTED_MODULE_6__["ClientsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]],
        exports: [_views_clients_clients_component__WEBPACK_IMPORTED_MODULE_6__["ClientsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _views_clients_clients_component__WEBPACK_IMPORTED_MODULE_6__["ClientsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          exports: [_views_clients_clients_component__WEBPACK_IMPORTED_MODULE_6__["ClientsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/about-us/about-us.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/components/about-us/about-us.component.ts ***!
    \****************************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppHomeComponentsAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xamin_components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../xamin/components/about/about.component */
    "./src/app/xamin/components/about/about.component.ts");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);

        this.titleSectionProp = {
          title: 'About Us',
          subTitle: 'Focused on Sustainable Power',
          description: "Incorporated amid corona crisis 2020, we are team of young energetic individuals who dream of fight global climatic changes by adapting to Renewable power sources to cater the ever hungry and demanding world to become self-sustained and yet contribute to the future & nature.\n                  Urgent actions will make the consequence of global warning manageable, what is at stake is the half of ecosystem, wildlife, and importantly the world we leave for our children."
        };
        this.Lists = {
          isOuter: false,
          img: '01.png',
          desc: "Our mission is to be the lowest-cost power producer in the world. We sell solar power in India on long-term fixed price contracts to our customers, at prices which in many cases are at or below prevailing alternatives for these customers. Since inception, we have achieved a substantial reduction in total solar project cost, which includes a significant decrease in balance of systems costs due in part to our value engineering, design and procurement efforts."
        };
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 1,
      vars: 2,
      consts: [[3, "titleSectionProp", "List"]],
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp)("List", ctx.Lists);
        }
      },
      directives: [_xamin_components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/calculator-section/calculator-section.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/home/components/calculator-section/calculator-section.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CalculatorSectionComponent */

  /***/
  function srcAppHomeComponentsCalculatorSectionCalculatorSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorSectionComponent", function () {
      return CalculatorSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../xamin/components/title-section/title-section.component */
    "./src/app/xamin/components/title-section/title-section.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _xamin_components_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../xamin/components/check-list/check-list.component */
    "./src/app/xamin/components/check-list/check-list.component.ts");

    function CalculatorSectionComponent_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/about-us/", ctx_r4.List.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CalculatorSectionComponent_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalculatorSectionComponent_1_ng_template_0_Template, 1, 1, "ng-template");
      }
    }

    function CalculatorSectionComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/calculator/", ctx_r1.List.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CalculatorSectionComponent_8_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-check-list", 13);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", ctx_r5.List.chkList);
      }
    }

    function CalculatorSectionComponent_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalculatorSectionComponent_8_ng_template_0_Template, 1, 1, "ng-template");
      }
    }

    function CalculatorSectionComponent_9_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.List.desc, "");
      }
    }

    function CalculatorSectionComponent_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalculatorSectionComponent_9_ng_template_0_Template, 2, 1, "ng-template");
      }
    }

    var CalculatorSectionComponent = /*#__PURE__*/function () {
      function CalculatorSectionComponent() {
        _classCallCheck(this, CalculatorSectionComponent);

        this.titleSectionProp = {
          title: 'Savings Calculator',
          subTitle: 'How much energy do you use?',
          description: 'Use our solar panel calculator to quickly estimate your solar potential and savings. Estimates are based on your roof, electricity bill, and actual offers in your area. It would also provide you with lifetime savings and the amount of trees saved and your reduced arbon footprint.'
        };
        this.List = {
          isOuter: false,
          img: 'section.png'
        };
      }

      _createClass(CalculatorSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CalculatorSectionComponent;
    }();

    CalculatorSectionComponent.ɵfac = function CalculatorSectionComponent_Factory(t) {
      return new (t || CalculatorSectionComponent)();
    };

    CalculatorSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalculatorSectionComponent,
      selectors: [["app-calculator-section"]],
      decls: 14,
      vars: 5,
      consts: [[1, "position-relative", "pt-0"], [4, "ngIf"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-sm-12"], [3, "ngIf"], [1, "col-lg-6", "col-sm-12", "wow", "fadeInUp", "align-items-center"], [3, "titleSectionProp"], [1, "text-left", "mt-5"], ["routerLink", "/solar-calculator", 1, "button", "button-icon"], [1, "btn-effect"], ["alt", "", 1, "about-box-img", 3, "src"], ["alt", "", 3, "src"], [3, "lists"]],
      template: function CalculatorSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalculatorSectionComponent_1_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CalculatorSectionComponent_ng_template_5_Template, 1, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-title-section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CalculatorSectionComponent_8_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CalculatorSectionComponent_9_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Calculate Your Savings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.List.isOuter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.List.isOuter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.List.ischkList !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.List.ischkList === undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_2__["TitleSectionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _xamin_components_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_4__["CheckListComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calculator-section',
          templateUrl: './calculator-section.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/card-section/card-section.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/components/card-section/card-section.component.ts ***!
    \************************************************************************/

  /*! exports provided: CardSectionComponent */

  /***/
  function srcAppHomeComponentsCardSectionCardSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardSectionComponent", function () {
      return CardSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CardSectionComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lists_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/services/", lists_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.sub_title);
      }
    }

    var CardSectionComponent = /*#__PURE__*/function () {
      function CardSectionComponent() {
        _classCallCheck(this, CardSectionComponent);

        this.List = [{
          img: "01.png",
          title: "Reliable & Scalable",
          sub_title: "We pursue relationships based on transparency, persistence, mutual trust and integrity with our employees, customers and other business partners."
        }, {
          img: "02.png",
          title: "Customized",
          sub_title: "customized unique rooftop solar power solutions as per available space and depending on the power consumption of the building."
        }, {
          img: "03.png",
          title: "Value Engineering",
          sub_title: "our in-house EPC allows us to enhance our system design expertise that optimizes both the system cost and power yield of the total solar block."
        }, {
          img: "04.png",
          title: "Sustainability",
          sub_title: "we are committed to maintaining the highest ecological standards and making a positive impact on the communities we operate in."
        }];
      }

      _createClass(CardSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardSectionComponent;
    }();

    CardSectionComponent.ɵfac = function CardSectionComponent_Factory(t) {
      return new (t || CardSectionComponent)();
    };

    CardSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardSectionComponent,
      selectors: [["app-card-section"]],
      decls: 4,
      vars: 1,
      consts: [[1, "pt-0"], [1, "container"], [1, "row"], ["class", "col-lg-3 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-sm-12"], [1, "xamin-services", "h-100", "mb-0", "wow", "fadeInUp", "text-center"], [1, "services-detail"], ["alt", "img", 3, "src"], [1, "mb-1"], [1, "mb-0"]],
      template: function CardSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardSectionComponent_div_3_Template, 8, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card-section',
          templateUrl: './card-section.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/client-counter/client-counter.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/home/components/client-counter/client-counter.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ClientCounterComponent */

  /***/
  function srcAppHomeComponentsClientCounterClientCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientCounterComponent", function () {
      return ClientCounterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xamin_components_counter_counter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../xamin/components/counter/counter.component */
    "./src/app/xamin/components/counter/counter.component.ts");

    var ClientCounterComponent = /*#__PURE__*/function () {
      function ClientCounterComponent() {
        _classCallCheck(this, ClientCounterComponent);

        this.list = [{
          value: 1520,
          icon: 'ion ion-android-sad',
          text: 'Happy Clients'
        }, {
          value: 2000,
          icon: 'fa fa-handshake-o',
          text: 'Completed Projects'
        }, {
          value: 150,
          icon: 'ion ion-ios-contact-outline',
          text: 'Team Members'
        }, {
          value: 750,
          icon: 'ion ion-android-checkmark-circle',
          text: 'Questions Answered'
        }];
        this.style = 'style2';
      }

      _createClass(ClientCounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientCounterComponent;
    }();

    ClientCounterComponent.ɵfac = function ClientCounterComponent_Factory(t) {
      return new (t || ClientCounterComponent)();
    };

    ClientCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientCounterComponent,
      selectors: [["app-client-counter"]],
      decls: 3,
      vars: 3,
      consts: [[1, "pb-0"], [1, "container"], [3, "List"]],
      template: function ClientCounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-counter", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("List", ctx.list);
        }
      },
      directives: [_xamin_components_counter_counter_component__WEBPACK_IMPORTED_MODULE_1__["CounterComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-counter',
          templateUrl: './client-counter.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/nav-tabs/nav-tabs.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/components/nav-tabs/nav-tabs.component.ts ***!
    \****************************************************************/

  /*! exports provided: NavTabsComponent */

  /***/
  function srcAppHomeComponentsNavTabsNavTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavTabsComponent", function () {
      return NavTabsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _xamin_components_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../xamin/components/check-list/check-list.component */
    "./src/app/xamin/components/check-list/check-list.component.ts");

    function NavTabsComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "#" + nav_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", nav_r2.active !== undefined ? true : false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r2.title);
      }
    }

    function NavTabsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-check-list", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tab-pane fade  ", nav_r3.active !== undefined && nav_r3.active ? "show active" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", nav_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r3.sub_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r3.desc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", nav_r3.chkList);
      }
    }

    var NavTabsComponent = /*#__PURE__*/function () {
      function NavTabsComponent() {
        _classCallCheck(this, NavTabsComponent);

        this.titleSectionProp = {
          "class": 'text-center',
          title: 'our Services',
          subTitle: 'Explore Our Data Services'
        };
        this.navList = [{
          id: 'tab-software-development',
          title: 'OPEX',
          sub_title: "Arka11 will own the Installation along with O&M for next 25 years.",
          desc: "Customer only has to pay for solar electricity at the rate lower by 20-40% than grid tariff. All that customer needs to do is to sign a power purchase agreement and sit back and enjoy.",
          active: true,
          chkList: ['Zero Investment', 'Zero Performance Risk', 'Savings on the monthly electricity bills', 'Fixed Electricity price for next 25 years']
        }, {
          id: 'tab-application-services',
          title: 'RESCO',
          sub_title: "Third party investor (RESCO) will own the installation",
          desc: "Arka11 will carry the O&M for next 25 year for the RESCO. Customer will pay a pre-decided monthly tariff which is lower than prevailing electricity bill.",
          chkList: ['No upfront Investment', 'Zero Performance Risk', 'Savings on the monthly electricity bills', 'Cheaper Electricity for next 25 years']
        }, {
          id: 'tab-data-analytics',
          title: 'CAPEX',
          sub_title: "Customer will own the solar power plant installation",
          desc: "Arka11 will do the design and plant construction and will take up O&M on regular basis.",
          chkList: ['Savings on the monthly electricity bills', 'Cheaper Electricity for next 25 years', 'Best in Market Investment with Guaranteed ROI', 'Quicker Payback Period', 'Free Electricity after Payback period']
        }];
      }

      _createClass(NavTabsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavTabsComponent;
    }();

    NavTabsComponent.ɵfac = function NavTabsComponent_Factory(t) {
      return new (t || NavTabsComponent)();
    };

    NavTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavTabsComponent,
      selectors: [["app-nav-tabs"]],
      decls: 10,
      vars: 2,
      consts: [[1, "iq-bg-over"], [1, "container"], [1, "row"], [1, "col-md-4"], [1, "custom-tab"], ["id", "pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "nav-pills", "text-center", "flex-column", "mb-5", "mb-md-0"], ["class", "nav-item w-inherit ", 4, "ngFor", "ngForOf"], [1, "col-md-8"], [1, "tab-content"], [3, "id", "class", 4, "ngFor", "ngForOf"], [1, "nav-item", "w-inherit"], ["data-toggle", "pill", "role", "tab", 1, "nav-link", "w-100", 3, "href"], [1, "tab-title"], [3, "id"], [1, "pb-3"], [3, "lists"]],
      template: function NavTabsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavTabsComponent_li_6_Template, 4, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavTabsComponent_div_9_Template, 6, 7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _xamin_components_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_2__["CheckListComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavTabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-tabs',
          templateUrl: './nav-tabs.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/our-blog/our-blog.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/components/our-blog/our-blog.component.ts ***!
    \****************************************************************/

  /*! exports provided: OurBlogComponent */

  /***/
  function srcAppHomeComponentsOurBlogOurBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurBlogComponent", function () {
      return OurBlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../xamin/components/title-section/title-section.component */
    "./src/app/xamin/components/title-section/title-section.component.ts");
    /* harmony import */


    var _xamin_components_blog_owl_blog_owl_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../xamin/components/blog-owl/blog-owl.component */
    "./src/app/xamin/components/blog-owl/blog-owl.component.ts");

    var OurBlogComponent = /*#__PURE__*/function () {
      function OurBlogComponent() {
        _classCallCheck(this, OurBlogComponent);

        this.titleSectionProp = {
          "class": 'text-center',
          title: 'BLOG',
          subTitle: 'Recent Blog',
          desc: 'It is a long established fact that a reader will be distracted'
        };
      }

      _createClass(OurBlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurBlogComponent;
    }();

    OurBlogComponent.ɵfac = function OurBlogComponent_Factory(t) {
      return new (t || OurBlogComponent)();
    };

    OurBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OurBlogComponent,
      selectors: [["app-our-blog"]],
      decls: 7,
      vars: 1,
      consts: [[1, "container"], [1, "row", "layer-fly-one"], [1, "col-md-12"], [3, "titleSectionProp"], [1, "xamin-recentblog", "v1"]],
      template: function OurBlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-title-section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-blog-owl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);
        }
      },
      directives: [_xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__["TitleSectionComponent"], _xamin_components_blog_owl_blog_owl_component__WEBPACK_IMPORTED_MODULE_2__["BlogOwlComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-our-blog',
          templateUrl: './our-blog.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/our-client/our-client.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home/components/our-client/our-client.component.ts ***!
    \********************************************************************/

  /*! exports provided: OurClientComponent */

  /***/
  function srcAppHomeComponentsOurClientOurClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurClientComponent", function () {
      return OurClientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OurClientComponent = /*#__PURE__*/function () {
      function OurClientComponent() {
        _classCallCheck(this, OurClientComponent);
      }

      _createClass(OurClientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurClientComponent;
    }();

    OurClientComponent.ɵfac = function OurClientComponent_Factory(t) {
      return new (t || OurClientComponent)();
    };

    OurClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OurClientComponent,
      selectors: [["app-our-client"]],
      decls: 2,
      vars: 0,
      template: function OurClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "our-client works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-our-client',
          templateUrl: './our-client.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/our-partner/our-partner.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/components/our-partner/our-partner.component.ts ***!
    \**********************************************************************/

  /*! exports provided: OurPartnerComponent */

  /***/
  function srcAppHomeComponentsOurPartnerOurPartnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurPartnerComponent", function () {
      return OurPartnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xamin_components_customers_customers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../xamin/components/customers/customers.component */
    "./src/app/xamin/components/customers/customers.component.ts");

    var OurPartnerComponent = /*#__PURE__*/function () {
      function OurPartnerComponent() {
        _classCallCheck(this, OurPartnerComponent);

        this.hover = false;
      }

      _createClass(OurPartnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurPartnerComponent;
    }();

    OurPartnerComponent.ɵfac = function OurPartnerComponent_Factory(t) {
      return new (t || OurPartnerComponent)();
    };

    OurPartnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OurPartnerComponent,
      selectors: [["app-our-partner"]],
      decls: 3,
      vars: 1,
      consts: [[1, "pt-0"], [1, "container"], [3, "hover"]],
      template: function OurPartnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-customers", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hover", ctx.hover);
        }
      },
      directives: [_xamin_components_customers_customers_component__WEBPACK_IMPORTED_MODULE_1__["CustomersComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurPartnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-our-partner',
          templateUrl: './our-partner.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/our-testimonials/our-testimonials.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/home/components/our-testimonials/our-testimonials.component.ts ***!
    \********************************************************************************/

  /*! exports provided: OurTestimonialsComponent */

  /***/
  function srcAppHomeComponentsOurTestimonialsOurTestimonialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurTestimonialsComponent", function () {
      return OurTestimonialsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../xamin/components/title-section/title-section.component */
    "./src/app/xamin/components/title-section/title-section.component.ts");
    /* harmony import */


    var _xamin_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../xamin/components/testimonials/testimonials.component */
    "./src/app/xamin/components/testimonials/testimonials.component.ts");

    var OurTestimonialsComponent = /*#__PURE__*/function () {
      function OurTestimonialsComponent() {
        _classCallCheck(this, OurTestimonialsComponent);

        this.titleSectionProp = {
          "class": 'text-center',
          title: 'Testimonials',
          subTitle: '100+ Companies are Using Xamin'
        };
      }

      _createClass(OurTestimonialsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurTestimonialsComponent;
    }();

    OurTestimonialsComponent.ɵfac = function OurTestimonialsComponent_Factory(t) {
      return new (t || OurTestimonialsComponent)();
    };

    OurTestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OurTestimonialsComponent,
      selectors: [["app-our-testimonials"]],
      decls: 6,
      vars: 1,
      consts: [[1, "iq-bg-over"], [1, "container"], [1, "row"], [1, "col-sm-12", "wow", "fadeInUp"], [3, "titleSectionProp"]],
      template: function OurTestimonialsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-title-section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-testimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);
        }
      },
      directives: [_xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__["TitleSectionComponent"], _xamin_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__["TestimonialsComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurTestimonialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-our-testimonials',
          templateUrl: './our-testimonials.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/process/process.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/home/components/process/process.component.ts ***!
    \**************************************************************/

  /*! exports provided: ProcessComponent */

  /***/
  function srcAppHomeComponentsProcessProcessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessComponent", function () {
      return ProcessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../xamin/components/title-section/title-section.component */
    "./src/app/xamin/components/title-section/title-section.component.ts");
    /* harmony import */


    var _xamin_components_xamin_circle_xamin_circle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../xamin/components/xamin-circle/xamin-circle.component */
    "./src/app/xamin/components/xamin-circle/xamin-circle.component.ts");

    var ProcessComponent = /*#__PURE__*/function () {
      function ProcessComponent() {
        _classCallCheck(this, ProcessComponent);

        this.titleSectionProp = {
          "class": 'text-center',
          title: 'Process',
          subTitle: 'Our Execution Process'
        };
        this.circle1Data = {
          img: '05.png',
          title: 'Survey',
          description: 'Get a site survey and let us know about any specific requirements.',
          delay: '0.6s',
          positionClass: 'right',
          type: 'xamin-process'
        };
        this.circle2Data = {
          "class": 'mt-4 mt-md-0',
          img: '06.png',
          title: 'Design',
          description: 'We have expert in-house engineering capabilities to build innovative solar solutions.',
          delay: '1s',
          positionClass: 'right',
          type: 'xamin-process'
        };
        this.circle3Data = {
          "class": 'mt-4 mt-md-0',
          img: '07.png',
          title: 'Installation',
          description: 'Our integrated profile affords us greater control over project development, construction and operation.',
          delay: '1.4s',
          type: 'xamin-process'
        };
      }

      _createClass(ProcessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProcessComponent;
    }();

    ProcessComponent.ɵfac = function ProcessComponent_Factory(t) {
      return new (t || ProcessComponent)();
    };

    ProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProcessComponent,
      selectors: [["app-process"]],
      decls: 12,
      vars: 4,
      consts: [[1, "xamin-custom-bg"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "titleSectionProp"], [1, "col-lg-4", "col-md-4", "col-sm-12"], [3, "circleData"], [1, "col-lg-4", "col-md-4", "col-sm-12", "mt-4", "mt-md-0"]],
      template: function ProcessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-title-section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-xamin-circle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-xamin-circle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-xamin-circle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("circleData", ctx.circle1Data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("circleData", ctx.circle2Data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("circleData", ctx.circle3Data);
        }
      },
      directives: [_xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__["TitleSectionComponent"], _xamin_components_xamin_circle_xamin_circle_component__WEBPACK_IMPORTED_MODULE_2__["XaminCircleComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-process',
          templateUrl: './process.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/service/service.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/home/components/service/service.component.ts ***!
    \**************************************************************/

  /*! exports provided: ServiceComponent */

  /***/
  function srcAppHomeComponentsServiceServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceComponent", function () {
      return ServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xamin_components_about_two_about_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../xamin/components/about-two/about-two.component */
    "./src/app/xamin/components/about-two/about-two.component.ts");

    var ServiceComponent = /*#__PURE__*/function () {
      function ServiceComponent() {
        _classCallCheck(this, ServiceComponent);

        this.titleSectionProp = {
          title: 'Lets Get Started',
          subTitle: 'Do you want to use cheaper, sustainable and green power?',
          description: ''
        };
        this.Lists = {
          isOuter: false,
          img: '11.png',
          desc: "Whether your aim is to cut energy costs, reduce your carbon footprint, fulfil regulatory obligations or accomplish your sustainability goals, Arka11 has a solution for you."
        };
      }

      _createClass(ServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServiceComponent;
    }();

    ServiceComponent.ɵfac = function ServiceComponent_Factory(t) {
      return new (t || ServiceComponent)();
    };

    ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceComponent,
      selectors: [["app-service"]],
      decls: 1,
      vars: 2,
      consts: [[3, "List", "titleSectionProp"]],
      template: function ServiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about-two", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("List", ctx.Lists)("titleSectionProp", ctx.titleSectionProp);
        }
      },
      directives: [_xamin_components_about_two_about_two_component__WEBPACK_IMPORTED_MODULE_1__["AboutTwoComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service',
          templateUrl: './service.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/why-choose-us/why-choose-us.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/home/components/why-choose-us/why-choose-us.component.ts ***!
    \**************************************************************************/

  /*! exports provided: WhyChooseUsComponent */

  /***/
  function srcAppHomeComponentsWhyChooseUsWhyChooseUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhyChooseUsComponent", function () {
      return WhyChooseUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xamin_components_choose_us_choose_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../xamin/components/choose-us/choose-us.component */
    "./src/app/xamin/components/choose-us/choose-us.component.ts");

    var WhyChooseUsComponent = /*#__PURE__*/function () {
      function WhyChooseUsComponent() {
        _classCallCheck(this, WhyChooseUsComponent);

        this.List = {
          title: "Why choose Us",
          subtitle: "Low Cost, Quality & Most Efficient",
          desc: "Our mission is to be the lowest-cost power producer in the world. We sell solar power in India on long-term fixed price contracts to our customers, at prices which in many cases are at or below prevailing alternatives for these customers. Since inception, we have achieved a substantial reduction in total solar project cost, which includes a significant decrease in balance of systems costs due in part to our value engineering, design and procurement efforts. \n      Our simplified turnkey solutions, from efficient installation to streamlined commissioning processes to superior asset management, bring the power of solar within your reach. As a solar developer, our priority is to reduce the lifetime cost of energy, which means ensuring longer system life and high long-term performance. "
        };
      }

      _createClass(WhyChooseUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WhyChooseUsComponent;
    }();

    WhyChooseUsComponent.ɵfac = function WhyChooseUsComponent_Factory(t) {
      return new (t || WhyChooseUsComponent)();
    };

    WhyChooseUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WhyChooseUsComponent,
      selectors: [["app-why-choose-us"]],
      decls: 1,
      vars: 1,
      consts: [[3, "lists"]],
      template: function WhyChooseUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-choose-us", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", ctx.List);
        }
      },
      directives: [_xamin_components_choose_us_choose_us_component__WEBPACK_IMPORTED_MODULE_1__["ChooseUsComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhyChooseUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-why-choose-us',
          templateUrl: './why-choose-us.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../xamin/xamin.module */
    "./src/app/xamin/xamin.module.ts");
    /* harmony import */


    var _components_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/why-choose-us/why-choose-us.component */
    "./src/app/home/components/why-choose-us/why-choose-us.component.ts");
    /* harmony import */


    var _components_card_section_card_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/card-section/card-section.component */
    "./src/app/home/components/card-section/card-section.component.ts");
    /* harmony import */


    var _components_service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/service/service.component */
    "./src/app/home/components/service/service.component.ts");
    /* harmony import */


    var _components_process_process_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/process/process.component */
    "./src/app/home/components/process/process.component.ts");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/home/index/index.component.ts");
    /* harmony import */


    var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/about-us/about-us.component */
    "./src/app/home/components/about-us/about-us.component.ts");
    /* harmony import */


    var _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/nav-tabs/nav-tabs.component */
    "./src/app/home/components/nav-tabs/nav-tabs.component.ts");
    /* harmony import */


    var _components_client_counter_client_counter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/client-counter/client-counter.component */
    "./src/app/home/components/client-counter/client-counter.component.ts");
    /* harmony import */


    var _components_our_testimonials_our_testimonials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/our-testimonials/our-testimonials.component */
    "./src/app/home/components/our-testimonials/our-testimonials.component.ts");
    /* harmony import */


    var _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/our-blog/our-blog.component */
    "./src/app/home/components/our-blog/our-blog.component.ts");
    /* harmony import */


    var _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/our-client/our-client.component */
    "./src/app/home/components/our-client/our-client.component.ts");
    /* harmony import */


    var _components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/our-partner/our-partner.component */
    "./src/app/home/components/our-partner/our-partner.component.ts");
    /* harmony import */


    var _revolution_slider3_revolution_slider3_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../revolution-slider3/revolution-slider3.module */
    "./src/app/revolution-slider3/revolution-slider3.module.ts");
    /* harmony import */


    var _components_calculator_section_calculator_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/calculator-section/calculator-section.component */
    "./src/app/home/components/calculator-section/calculator-section.component.ts");

    var routes = [{
      path: '',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
      children: []
    }];

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_3__["XaminModule"], _revolution_slider3_revolution_slider3_module__WEBPACK_IMPORTED_MODULE_16__["RevolutionSlider3Module"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_components_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_4__["WhyChooseUsComponent"], _components_card_section_card_section_component__WEBPACK_IMPORTED_MODULE_5__["CardSectionComponent"], _components_service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"], _components_process_process_component__WEBPACK_IMPORTED_MODULE_7__["ProcessComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"], _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_10__["NavTabsComponent"], _components_client_counter_client_counter_component__WEBPACK_IMPORTED_MODULE_11__["ClientCounterComponent"], _components_our_testimonials_our_testimonials_component__WEBPACK_IMPORTED_MODULE_12__["OurTestimonialsComponent"], _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_13__["OurBlogComponent"], _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_14__["OurClientComponent"], _components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_15__["OurPartnerComponent"], _components_calculator_section_calculator_section_component__WEBPACK_IMPORTED_MODULE_17__["CalculatorSectionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_3__["XaminModule"], _revolution_slider3_revolution_slider3_module__WEBPACK_IMPORTED_MODULE_16__["RevolutionSlider3Module"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_4__["WhyChooseUsComponent"], _components_card_section_card_section_component__WEBPACK_IMPORTED_MODULE_5__["CardSectionComponent"], _components_service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"], _components_process_process_component__WEBPACK_IMPORTED_MODULE_7__["ProcessComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"], _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_10__["NavTabsComponent"], _components_client_counter_client_counter_component__WEBPACK_IMPORTED_MODULE_11__["ClientCounterComponent"], _components_our_testimonials_our_testimonials_component__WEBPACK_IMPORTED_MODULE_12__["OurTestimonialsComponent"], _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_13__["OurBlogComponent"], _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_14__["OurClientComponent"], _components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_15__["OurPartnerComponent"], _components_calculator_section_calculator_section_component__WEBPACK_IMPORTED_MODULE_17__["CalculatorSectionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_3__["XaminModule"], _revolution_slider3_revolution_slider3_module__WEBPACK_IMPORTED_MODULE_16__["RevolutionSlider3Module"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/index/index.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/index/index.component.ts ***!
    \***********************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppHomeIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../xamin/plugins.service */
    "./src/app/xamin/plugins.service.ts");
    /* harmony import */


    var _revolution_slider3_revolution_slider3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../revolution-slider3/revolution-slider3.component */
    "./src/app/revolution-slider3/revolution-slider3.component.ts");
    /* harmony import */


    var _components_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/why-choose-us/why-choose-us.component */
    "./src/app/home/components/why-choose-us/why-choose-us.component.ts");
    /* harmony import */


    var _components_card_section_card_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/card-section/card-section.component */
    "./src/app/home/components/card-section/card-section.component.ts");
    /* harmony import */


    var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/about-us/about-us.component */
    "./src/app/home/components/about-us/about-us.component.ts");
    /* harmony import */


    var _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/nav-tabs/nav-tabs.component */
    "./src/app/home/components/nav-tabs/nav-tabs.component.ts");
    /* harmony import */


    var _components_service_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/service/service.component */
    "./src/app/home/components/service/service.component.ts");
    /* harmony import */


    var _components_process_process_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/process/process.component */
    "./src/app/home/components/process/process.component.ts");
    /* harmony import */


    var _components_calculator_section_calculator_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/calculator-section/calculator-section.component */
    "./src/app/home/components/calculator-section/calculator-section.component.ts");

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent(plugins) {
        _classCallCheck(this, IndexComponent);

        this.plugins = plugins;
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Init all plugins...
          var current = this;
          current.plugins.revolutionSlider(); // tslint:disable-next-line:only-arrow-functions

          setTimeout(function () {
            current.plugins.index();
          }, 200);
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ɵfac = function IndexComponent_Factory(t) {
      return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xamin_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"]));
    };

    IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndexComponent,
      selectors: [["app-index"]],
      decls: 9,
      vars: 0,
      consts: [[1, "main-content"]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-revolution-slider3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-why-choose-us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-card-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-about-us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-nav-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-process");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-calculator-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_revolution_slider3_revolution_slider3_component__WEBPACK_IMPORTED_MODULE_2__["RevolutionSlider3Component"], _components_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_3__["WhyChooseUsComponent"], _components_card_section_card_section_component__WEBPACK_IMPORTED_MODULE_4__["CardSectionComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"], _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__["NavTabsComponent"], _components_service_service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"], _components_process_process_component__WEBPACK_IMPORTED_MODULE_8__["ProcessComponent"], _components_calculator_section_calculator_section_component__WEBPACK_IMPORTED_MODULE_9__["CalculatorSectionComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-index',
          templateUrl: './index.component.html'
        }]
      }], function () {
        return [{
          type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/revolution-slider3/revolution-slider3.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/revolution-slider3/revolution-slider3.component.ts ***!
    \********************************************************************/

  /*! exports provided: RevolutionSlider3Component */

  /***/
  function srcAppRevolutionSlider3RevolutionSlider3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevolutionSlider3Component", function () {
      return RevolutionSlider3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RevolutionSlider3Component = /*#__PURE__*/function () {
      function RevolutionSlider3Component() {
        _classCallCheck(this, RevolutionSlider3Component);
      }

      _createClass(RevolutionSlider3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RevolutionSlider3Component;
    }();

    RevolutionSlider3Component.ɵfac = function RevolutionSlider3Component_Factory(t) {
      return new (t || RevolutionSlider3Component)();
    };

    RevolutionSlider3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RevolutionSlider3Component,
      selectors: [["app-revolution-slider3"]],
      decls: 30,
      vars: 0,
      consts: [[1, "iq-banner"], [1, "rs-p-wp-fix"], ["id", "rev_slider_3_1_wrapper", "data-alias", "xamin-3", "data-source", "gallery", 2, "background", "transparent", "padding", "0", "margin", "0px auto", "margin-top", "0", "margin-bottom", "0"], ["id", "rev_slider_3_1", "data-version", "6.1.0", 1, "rs-ov-hidden", 2, "display", "none"], ["data-key", "rs-3", "data-title", "Slide", "data-anim", "ei:d,d,d,d,d,d,d,d,d;eo:d,d,d,d,d,d,d,d,d;s:1000ms,d,d,d,d,d,d,d,d;r:0,0,0,0,0,0,0,0,0;t:fade,grayscale,blurlight,blurstrong,fade,crossfade,fadethroughlight,fadethroughdark,fadethroughtransparent;sl:d,d,d,d,d,d,d,d,d;", "data-firstanim", "t:fade;sl:12;"], ["src", "/assets/revslider/assets_slider3/dummy.png", "title", "bg", "width", "856", "height", "500", "data-lazyload", "./assets/revslider/assets_slider3/bg.png", "data-bg", "f:100% 100%;", "data-parallax", "2", "data-no-retina", "", 1, "rev-slidebg"], ["id", "slider-3-slide-3-layer-1", "data-type", "text", "data-color", "#313e5b", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:69px,15px,37px,-1px;yo:221px,141px,40px,30px;", "data-text", "s:48,36,42,30;l:65,65,70,55;a:inherit,inherit,inherit,center;", "data-dim", "w:auto,auto,auto,auto;", "data-layeronlimit", "on", "data-frame_0", "y:-50;", "data-frame_1", "st:600;sp:1000;sR:600;", "data-frame_999", "o:0;tp:600;st:w;sR:7400;", 1, "rs-layer", 2, "z-index", "8", "font-family", "Lato", "text-transform", "capitalize"], ["id", "slider-3-slide-3-layer-3", "data-type", "text", "data-color", "#525f81", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:67px,15px,40px,5px;y:m;yo:56px,15px,-180px,-106px;", "data-text", "s:16,16,18,17;l:30;a:inherit,inherit,inherit,center;", "data-frame_0", "y:-50;", "data-frame_1", "st:900;sp:1000;sR:900;", "data-frame_999", "o:0;tp:600;st:w;sR:7100;", 1, "rs-layer", 2, "z-index", "9", "font-family", "Karla"], ["id", "slider-3-slide-3-layer-11", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:927px,721px,226px,98px;yo:118px,82px,332px,228px;", "data-text", "w:normal;s:20,14,10,6;l:0,18,13,8;", "data-dim", "w:500px,298px,338px,350px;h:400px,245px,338px,288px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2400;sp:1000;sR:2400;", "data-frame_999", "o:0;st:w;sR:5600;", 2, "z-index", "13", "font-family", "Roboto"], ["src", "./assets/revslider/assets_slider3/dummy.png", "width", "790", "height", "632", "data-lazyload", "./assets/revslider/assets_slider3/panel.png", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-25", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:961px,626px,200px,165px;yo:140px,165px,411px,220px;", "data-text", "w:normal;s:20,14,10,6;l:0,18,13,8;", "data-dim", "w:137px,93px,97px,90px;h:137px,93px,97px,90px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2100;sp:1000;sR:2100;", "data-frame_999", "o:0;st:w;sR:5900;", "data-tloop", "u:true;", "data-loop_999", "sX:0.8;sY:0.8;o:0.6;sp:2000;st:500;e:Power0.easeInOut;yys:t;yyf:t;", 1, "rs-pxl-1", 2, "z-index", "12", "font-family", "Roboto"], ["src", "./assets/revslider/assets_slider3/dummy.png", "width", "364", "height", "246", "data-lazyload", "./assets/revslider/assets_slider3/industry.png", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-30", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:701px,701px,58px,30;yo:280px,347px,489px,311px;", "data-text", "w:normal;s:20,14,10,6;l:0,18,13,8;", "data-dim", "w:281px,145px,121px,154px;h:199px,112px,103px,122px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2700;sp:1000;sR:2700;", "data-frame_999", "o:0;st:w;sR:5300;", "data-tloop", "u:true;", "data-loop_999", "sX:0.8;sY:0.8;o:0.6;sp:2000;e:Power2.easeInOut;yys:t;yyf:t;", 1, "rs-pxl-1", 2, "z-index", "14", "font-family", "Roboto"], ["src", "./assets/revslider/assets_slider3/dummy.png", "width", "261", "height", "151", "data-lazyload", "./assets/revslider/assets_slider3/building.png", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-31", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:710px,598px,89px,20px;yo:497px,291px,649px,481px;", "data-text", "w:normal;s:20,14,10,6;l:0,18,13,8;", "data-dim", "w:161px,95px,71px,94px;h:129px,72px,53px,68px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:3000;sp:1000;", "data-frame_999", "o:0;st:w;sR:5000;", "data-loop_999", "sX:1.2;sY:1.2;o:0.6;sp:2000;st:1000;e:Power0.easeInOut;yys:t;yyf:t;", 1, "rs-pxl-2", 2, "z-index", "15", "font-family", "Roboto"], ["src", "./assets/revslider/assets_slider3/dummy.png", "width", "387", "height", "292", "data-lazyload", "./assets/revslider/assets_slider3/house.png", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-32", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:1011px,876px,280px,195px;yo:564px,349px,703px,505px;", "data-text", "w:normal;s:20,14,10,6;l:0,18,13,8;", "data-dim", "w:137px,93px,97px,100px;h:137px,93px,97px,100px;", "data-frame_0", "y:-50,-36,-26,-16;", "data-frame_1", "st:3300;sp:1000;", "data-frame_999", "o:0;st:w;sR:4700;", "data-tloop", "u:true;", "data-loop_999", "sX:0.8;sY:0.8;o:0.6;sp:2000;st:1000;e:Power0.easeInOut;yys:t;yyf:t;", 1, "rs-pxl-1", 2, "z-index", "16", "font-family", "Roboto"], ["src", "./assets/revslider/assets_slider3/dummy.png", "width", "206", "height", "122", "data-lazyload", "./assets/revslider/assets_slider3/farm.png", "data-no-retina", ""], [1, "rs-bottom", 2, "visibility", "hidden !important"]],
      template: function RevolutionSlider3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "rs-module-wrap", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "rs-module", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "rs-slides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "rs-slide", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Going Green with Renewable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Energy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Our goal is to make the availability of cleaner sources of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " energy as easy as possible at an affordable rate for not ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " only businesses & industries but also for regular homes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "rs-layer", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "rs-layer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "rs-layer", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "rs-layer", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "rs-layer", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "rs-static-layers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "rs-progress", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevolutionSlider3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-revolution-slider3',
          templateUrl: './revolution-slider3.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/revolution-slider3/revolution-slider3.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/revolution-slider3/revolution-slider3.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RevolutionSlider3Module */

  /***/
  function srcAppRevolutionSlider3RevolutionSlider3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RevolutionSlider3Module", function () {
      return RevolutionSlider3Module;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _revolution_slider3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./revolution-slider3.component */
    "./src/app/revolution-slider3/revolution-slider3.component.ts");

    var RevolutionSlider3Module = function RevolutionSlider3Module() {
      _classCallCheck(this, RevolutionSlider3Module);
    };

    RevolutionSlider3Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RevolutionSlider3Module
    });
    RevolutionSlider3Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RevolutionSlider3Module_Factory(t) {
        return new (t || RevolutionSlider3Module)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RevolutionSlider3Module, {
        declarations: [_revolution_slider3_component__WEBPACK_IMPORTED_MODULE_2__["RevolutionSlider3Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_revolution_slider3_component__WEBPACK_IMPORTED_MODULE_2__["RevolutionSlider3Component"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevolutionSlider3Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_revolution_slider3_component__WEBPACK_IMPORTED_MODULE_2__["RevolutionSlider3Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_revolution_slider3_component__WEBPACK_IMPORTED_MODULE_2__["RevolutionSlider3Component"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/clients/clients.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/views/clients/clients.component.ts ***!
    \****************************************************/

  /*! exports provided: ClientsComponent */

  /***/
  function srcAppViewsClientsClientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
      return ClientsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClientsComponent = /*#__PURE__*/function () {
      function ClientsComponent() {
        _classCallCheck(this, ClientsComponent);
      }

      _createClass(ClientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientsComponent;
    }();

    ClientsComponent.ɵfac = function ClientsComponent_Factory(t) {
      return new (t || ClientsComponent)();
    };

    ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientsComponent,
      selectors: [["app-clients"]],
      decls: 2,
      vars: 0,
      template: function ClientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clients works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients',
          templateUrl: './clients.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/about-card/about-card.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/xamin/components/about-card/about-card.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AboutCardComponent */

  /***/
  function srcAppXaminComponentsAboutCardAboutCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutCardComponent", function () {
      return AboutCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutCardComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.desc);
      }
    }

    var AboutCardComponent = /*#__PURE__*/function () {
      function AboutCardComponent() {
        _classCallCheck(this, AboutCardComponent);
      }

      _createClass(AboutCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutCardComponent;
    }();

    AboutCardComponent.ɵfac = function AboutCardComponent_Factory(t) {
      return new (t || AboutCardComponent)();
    };

    AboutCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutCardComponent,
      selectors: [["app-about-card"]],
      inputs: {
        cardData: "cardData"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "pt-0"], [1, "container"], [1, "row"], ["class", "col-lg-4 col-sm-12 h-100", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-sm-12", "h-100"], [1, "xamin-services", "mb-0", "wow", "fadeInUp", "text-left"], [1, "services-detail"], [1, "mb-1"], [1, "mb-0"]],
      template: function AboutCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutCardComponent_div_3_Template, 7, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-card',
          templateUrl: './about-card.component.html'
        }]
      }], function () {
        return [];
      }, {
        cardData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/about-two/about-two.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/xamin/components/about-two/about-two.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AboutTwoComponent */

  /***/
  function srcAppXaminComponentsAboutTwoAboutTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutTwoComponent", function () {
      return AboutTwoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _title_section_title_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../title-section/title-section.component */
    "./src/app/xamin/components/title-section/title-section.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _check_list_check_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../check-list/check-list.component */
    "./src/app/xamin/components/check-list/check-list.component.ts");

    function AboutTwoComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/about-us/", ctx_r0.List.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AboutTwoComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-check-list", 11);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", ctx_r1.List.chkList);
      }
    }

    function AboutTwoComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.List.desc, "");
      }
    }

    function AboutTwoComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/about-us/", ctx_r3.List.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var AboutTwoComponent = /*#__PURE__*/function () {
      function AboutTwoComponent() {
        _classCallCheck(this, AboutTwoComponent);
      }

      _createClass(AboutTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutTwoComponent;
    }();

    AboutTwoComponent.ɵfac = function AboutTwoComponent_Factory(t) {
      return new (t || AboutTwoComponent)();
    };

    AboutTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutTwoComponent,
      selectors: [["app-about-two"]],
      inputs: {
        List: "List",
        titleSectionProp: "titleSectionProp"
      },
      decls: 14,
      vars: 5,
      consts: [[1, "position-relative"], [3, "ngIf"], [1, "container"], [1, "row"], [1, "col-lg-6", "wow", "fadeInUp", "align-items-center"], [3, "titleSectionProp"], [1, "text-left", "mt-5"], ["routerLink", "/get-quote", 1, "button", "button-icon"], [1, "btn-effect"], [1, "col-lg-6"], ["alt", "", 1, "about-right-box-img", 3, "src"], [3, "lists"], ["alt", "", 3, "src"]],
      template: function AboutTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutTwoComponent_ng_template_1_Template, 1, 1, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-title-section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AboutTwoComponent_ng_template_6_Template, 1, 1, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutTwoComponent_ng_template_7_Template, 2, 1, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ready to go Green?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AboutTwoComponent_ng_template_13_Template, 1, 1, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.List.isOuter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.List.ischkList !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.List.ischkList === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.List.isOuter);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _title_section_title_section_component__WEBPACK_IMPORTED_MODULE_2__["TitleSectionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _check_list_check_list_component__WEBPACK_IMPORTED_MODULE_4__["CheckListComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-two',
          templateUrl: './about-two.component.html'
        }]
      }], function () {
        return [];
      }, {
        List: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSectionProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/about/about.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/xamin/components/about/about.component.ts ***!
    \***********************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppXaminComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _title_section_title_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../title-section/title-section.component */
    "./src/app/xamin/components/title-section/title-section.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _check_list_check_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../check-list/check-list.component */
    "./src/app/xamin/components/check-list/check-list.component.ts");

    function AboutComponent_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/about-us/", ctx_r4.List.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AboutComponent_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AboutComponent_1_ng_template_0_Template, 1, 1, "ng-template");
      }
    }

    function AboutComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/about-us/", ctx_r1.List.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AboutComponent_8_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-check-list", 13);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", ctx_r5.List.chkList);
      }
    }

    function AboutComponent_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AboutComponent_8_ng_template_0_Template, 1, 1, "ng-template");
      }
    }

    function AboutComponent_9_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.List.desc, "");
      }
    }

    function AboutComponent_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AboutComponent_9_ng_template_0_Template, 2, 1, "ng-template");
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      inputs: {
        List: "List",
        titleSectionProp: "titleSectionProp"
      },
      decls: 14,
      vars: 5,
      consts: [[1, "position-relative", "pt-0"], [4, "ngIf"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-sm-12"], [3, "ngIf"], [1, "col-lg-6", "col-sm-12", "wow", "fadeInUp", "align-items-center"], [3, "titleSectionProp"], [1, "text-left", "mt-5"], ["routerLink", "/about-us", 1, "button", "button-icon"], [1, "btn-effect"], ["alt", "", 1, "about-box-img", 3, "src"], ["alt", "", 3, "src"], [3, "lists"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_1_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AboutComponent_ng_template_5_Template, 1, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-title-section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_8_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AboutComponent_9_Template, 1, 0, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.List.isOuter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.List.isOuter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.List.ischkList !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.List.ischkList === undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _title_section_title_section_component__WEBPACK_IMPORTED_MODULE_2__["TitleSectionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _check_list_check_list_component__WEBPACK_IMPORTED_MODULE_4__["CheckListComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html'
        }]
      }], function () {
        return [];
      }, {
        List: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSectionProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/blog-card/blog-card.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/xamin/components/blog-card/blog-card.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BlogCardComponent */

  /***/
  function srcAppXaminComponentsBlogCardBlogCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogCardComponent", function () {
      return BlogCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BlogCardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "time", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Read More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lists_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-md-", ctx_r0.grid, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../.././../../assets/images/about-us/", lists_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", lists_r1.time, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.desc);
      }
    }

    var BlogCardComponent = /*#__PURE__*/function () {
      function BlogCardComponent() {
        _classCallCheck(this, BlogCardComponent);

        this.List = [{
          img: "02.png",
          name: "HTML",
          time: "September 26, 2019 ",
          title: "Build Construction",
          desc: "“They bring to you a host of beautifully created infographics that contain the latest digital marketing "
        }, {
          img: "03.png",
          name: "Design",
          time: "September 26, 2019 ",
          title: "Life Lack Meaning",
          desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing."
        }, {
          img: "04.png",
          name: "HTML",
          time: "September 26, 2019 ",
          title: "Construction industry",
          desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing"
        }, {
          img: "05.png",
          name: "CSS",
          time: "September 26, 2019 ",
          title: "Content Marketing",
          desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing."
        }];
      }

      _createClass(BlogCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogCardComponent;
    }();

    BlogCardComponent.ɵfac = function BlogCardComponent_Factory(t) {
      return new (t || BlogCardComponent)();
    };

    BlogCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogCardComponent,
      selectors: [["app-blog-card"]],
      inputs: {
        grid: "grid"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "row"], [3, "class", 4, "ngFor", "ngForOf"], [1, "item"], [1, "iq-blog-box", "wow", "fadeInUp"], [1, "iq-blog-image", "clearfix"], ["alt", "blogimage1", 1, "img-fluid", "center-block", 3, "src"], [1, "iq-blogtag"], ["href", "blog.html"], [1, "iq-blog-detail"], [1, "iq-blog-meta"], [1, "list-inline-item"], ["href", "blog-details.html", "rel", "bookmark"], ["datetime", "2019-09-26T06:49:49+00:00", 1, "entry-date", "published", "updated"], [1, "blog-title"], ["href", "blog-details.html"], [1, "blog-button"], ["href", "blog-details.html", 1, "button-link"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"]],
      template: function BlogCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogCardComponent_div_1_Template, 26, 8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-card',
          templateUrl: './blog-card.component.html'
        }]
      }], function () {
        return [];
      }, {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/blog-category/blog-category.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/xamin/components/blog-category/blog-category.component.ts ***!
    \***************************************************************************/

  /*! exports provided: BlogCategoryComponent */

  /***/
  function srcAppXaminComponentsBlogCategoryBlogCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogCategoryComponent", function () {
      return BlogCategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BlogCategoryComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.count, " ");
      }
    }

    var BlogCategoryComponent = /*#__PURE__*/function () {
      function BlogCategoryComponent() {
        _classCallCheck(this, BlogCategoryComponent);

        this.List = [{
          title: "CSS",
          count: 2
        }, {
          title: "Design",
          count: 3
        }, {
          title: "HTML",
          count: 2
        }, {
          title: "Uncategorized",
          count: 1
        }];
      }

      _createClass(BlogCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogCategoryComponent;
    }();

    BlogCategoryComponent.ɵfac = function BlogCategoryComponent_Factory(t) {
      return new (t || BlogCategoryComponent)();
    };

    BlogCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogCategoryComponent,
      selectors: [["app-blog-category"]],
      decls: 5,
      vars: 1,
      consts: [["id", "categories-4", 1, "widget", "widget_categories", "wow", "fadeInRight"], [1, "widget-title"], ["class", "cat-item cat-item-3", 4, "ngFor", "ngForOf"], [1, "cat-item", "cat-item-3"], ["href", "#"], [1, "post_count"]],
      template: function BlogCategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogCategoryComponent_li_4_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-category',
          templateUrl: './blog-category.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/blog-owl/blog-owl.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/xamin/components/blog-owl/blog-owl.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BlogOwlComponent */

  /***/
  function srcAppXaminComponentsBlogOwlBlogOwlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogOwlComponent", function () {
      return BlogOwlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BlogOwlComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "time", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Read More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lists_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../.././../../assets/images/about-us/", lists_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", lists_r1.time, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.desc);
      }
    }

    var BlogOwlComponent = /*#__PURE__*/function () {
      function BlogOwlComponent() {
        _classCallCheck(this, BlogOwlComponent);

        this.List = [{
          img: "02.png",
          name: "HTML",
          time: "September 26, 2019 ",
          title: "Build Construction",
          desc: "“They bring to you a host of beautifully created infographics that contain the latest digital marketing "
        }, {
          img: "03.png",
          name: "Design",
          time: "September 26, 2019 ",
          title: "Life Lack Meaning",
          desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing."
        }, {
          img: "04.png",
          name: "HTML",
          time: "September 26, 2019 ",
          title: "Construction industry",
          desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing"
        }, {
          img: "05.png",
          name: "CSS",
          time: "September 26, 2019 ",
          title: "Content Marketing",
          desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing."
        }];
      }

      _createClass(BlogOwlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogOwlComponent;
    }();

    BlogOwlComponent.ɵfac = function BlogOwlComponent_Factory(t) {
      return new (t || BlogOwlComponent)();
    };

    BlogOwlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogOwlComponent,
      selectors: [["app-blog-owl"]],
      decls: 2,
      vars: 1,
      consts: [["data-dots", "false", "data-nav", "false", "data-items", "3", "data-items-laptop", "3", "data-items-tab", "2", "data-items-mobile", "1", "data-items-mobile-sm", "1", "data-autoplay", "true", "data-loop", "true", 1, "owl-carousel", "owl-loaded", "owl-drag"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "iq-blog-box", "wow", "fadeInUp"], [1, "iq-blog-image", "clearfix"], ["alt", "blog-image1", 1, "img-fluid", "center-block", 3, "src"], [1, "iq-blogtag"], ["href", "blog.html"], [1, "iq-blog-detail"], [1, "iq-blog-meta"], [1, "list-inline-item"], ["href", "blog-details.html", "rel", "bookmark"], ["datetime", "2019-09-26T06:49:49+00:00", 1, "entry-date", "published", "updated"], [1, "blog-title"], ["href", "blog-details.html"], [1, "blog-button"], ["href", "blog-details.html", 1, "button-link"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"]],
      template: function BlogOwlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogOwlComponent_div_1_Template, 25, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogOwlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-owl',
          templateUrl: './blog-owl.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/blog-pagination/blog-pagination.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/xamin/components/blog-pagination/blog-pagination.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: BlogPaginationComponent */

  /***/
  function srcAppXaminComponentsBlogPaginationBlogPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPaginationComponent", function () {
      return BlogPaginationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogPaginationComponent = /*#__PURE__*/function () {
      function BlogPaginationComponent() {
        _classCallCheck(this, BlogPaginationComponent);
      }

      _createClass(BlogPaginationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogPaginationComponent;
    }();

    BlogPaginationComponent.ɵfac = function BlogPaginationComponent_Factory(t) {
      return new (t || BlogPaginationComponent)();
    };

    BlogPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogPaginationComponent,
      selectors: [["app-blog-pagination"]],
      decls: 15,
      vars: 0,
      consts: [[1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "wow", "fadeInUp"], [1, "pagination", "justify-content-center"], ["aria-label", "Page navigation"], [1, "page-numbers"], ["aria-current", "page", 1, "page-numbers", "current"], ["href", "#?paged=2", 1, "page-numbers"], ["href", "#?paged=2'", 1, "next", "page-numbers"], ["aria-hidden", "true"]],
      template: function BlogPaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Next page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-pagination',
          templateUrl: './blog-pagination.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/blog-recent-post/blog-recent-post.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/xamin/components/blog-recent-post/blog-recent-post.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: BlogRecentPostComponent */

  /***/
  function srcAppXaminComponentsBlogRecentPostBlogRecentPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogRecentPostComponent", function () {
      return BlogRecentPostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BlogRecentPostComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/about-us/", list_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);
      }
    }

    var BlogRecentPostComponent = /*#__PURE__*/function () {
      function BlogRecentPostComponent() {
        _classCallCheck(this, BlogRecentPostComponent);

        this.List = [{
          img: "02.png",
          name: "HTML",
          time: "September 26, 2019 ",
          title: "Build Construction"
        }, {
          img: "03.png",
          name: "Design",
          time: "September 26, 2019 ",
          title: "Life Lack Meaning"
        }, {
          img: "04.png",
          name: "HTML",
          time: "September 26, 2019 ",
          title: "Construction industry"
        }];
      }

      _createClass(BlogRecentPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogRecentPostComponent;
    }();

    BlogRecentPostComponent.ɵfac = function BlogRecentPostComponent_Factory(t) {
      return new (t || BlogRecentPostComponent)();
    };

    BlogRecentPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogRecentPostComponent,
      selectors: [["app-blog-recent-post"]],
      decls: 6,
      vars: 1,
      consts: [[1, "iq-widget-menu", "widget", "wow", "fadeInRight"], [1, "widget-title"], [1, "list-inline", "iq-widget-menu"], [1, "iq-post"], [4, "ngFor", "ngForOf"], [1, "post-img"], ["width", "150", "height", "150", "alt", "", 3, "src"], [1, "post-blog"], [1, "blog-box"], [1, "list-inline"], [1, "list-inline-item", "mr-3"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-calendar", "mr-2"], ["href", "3", 1, "new-link"]],
      template: function BlogRecentPostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recent Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogRecentPostComponent_li_5_Template, 13, 3, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRecentPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-recent-post',
          templateUrl: './blog-recent-post.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/blog-search/blog-search.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/xamin/components/blog-search/blog-search.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BlogSearchComponent */

  /***/
  function srcAppXaminComponentsBlogSearchBlogSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogSearchComponent", function () {
      return BlogSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogSearchComponent = /*#__PURE__*/function () {
      function BlogSearchComponent() {
        _classCallCheck(this, BlogSearchComponent);
      }

      _createClass(BlogSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogSearchComponent;
    }();

    BlogSearchComponent.ɵfac = function BlogSearchComponent_Factory(t) {
      return new (t || BlogSearchComponent)();
    };

    BlogSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogSearchComponent,
      selectors: [["app-blog-search"]],
      decls: 5,
      vars: 0,
      consts: [["id", "search-2", 1, "widget", "widget_search", "wow", "fadeInRight"], ["method", "get", 1, "search-form"], ["type", "search", "placeholder", "Search", "value", "", "name", "s", 1, "search-field"], ["type", "submit", 1, "search-submit"], [1, "fa", "fa-search"]],
      template: function BlogSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-search',
          templateUrl: './blog-search.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/blog-slider/blog-slider.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/xamin/components/blog-slider/blog-slider.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BlogSliderComponent */

  /***/
  function srcAppXaminComponentsBlogSliderBlogSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogSliderComponent", function () {
      return BlogSliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BlogSliderComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.desc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/testimonials/", list_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.designation);
      }
    }

    var BlogSliderComponent = /*#__PURE__*/function () {
      function BlogSliderComponent() {
        _classCallCheck(this, BlogSliderComponent);

        this.List = [{
          img: "1.jpg",
          name: "Jack White",
          designation: "CEO",
          desc: "Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden. Latin professor at Hampden-Sydney consectetur."
        }, {
          img: "2.jpg",
          name: "Walhan Bobe",
          designation: "Business Advisor",
          desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed ut perspiciatis error. Perspiciatis unde omnis iste."
        }, {
          img: "3.jpg",
          name: "Mark McManus",
          designation: "COO",
          desc: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”"
        }];
      }

      _createClass(BlogSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogSliderComponent;
    }();

    BlogSliderComponent.ɵfac = function BlogSliderComponent_Factory(t) {
      return new (t || BlogSliderComponent)();
    };

    BlogSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogSliderComponent,
      selectors: [["app-blog-slider"]],
      decls: 3,
      vars: 1,
      consts: [[1, "testimonial-widget-menu", "widget", "wow", "fadeInRight"], ["data-dots", "true", "data-nav", "false", "data-autoplay", "true", "data-loop", "true", "data-items", "1", "data-items-laptop", "1", "data-items-tab", "1", "data-items-mobile", "1", "data-items-mobile-sm", "1", "data-margin", "30", 1, "owl-carousel"], ["class", "testimonial-info", 4, "ngFor", "ngForOf"], [1, "testimonial-info"], [1, "post-img"], ["width", "150", "height", "150", "alt", "", 1, "attachment-thumbnail", "size-thumbnail", "wp-post-image", 3, "src"], [1, "testimonial-name"], [1, "sub-title"]],
      template: function BlogSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogSliderComponent_div_2_Template, 10, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-slider',
          templateUrl: './blog-slider.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/card-one/card-one.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/xamin/components/card-one/card-one.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CardOneComponent */

  /***/
  function srcAppXaminComponentsCardOneCardOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardOneComponent", function () {
      return CardOneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CardOneComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/services/", list_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.desc);
      }
    }

    var CardOneComponent = /*#__PURE__*/function () {
      function CardOneComponent() {
        _classCallCheck(this, CardOneComponent);
      }

      _createClass(CardOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardOneComponent;
    }();

    CardOneComponent.ɵfac = function CardOneComponent_Factory(t) {
      return new (t || CardOneComponent)();
    };

    CardOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardOneComponent,
      selectors: [["app-card-one"]],
      inputs: {
        List: "List"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "service-box p-4 my-4 wow fadeInUp  text-center text-md-left ", 4, "ngFor", "ngForOf"], [1, "service-box", "p-4", "my-4", "wow", "fadeInUp", "text-center", "text-md-left"], ["alt", "fancybox", 3, "src"], [1, "service-detail", "align-self-center"], [1, "mb-2"]],
      template: function CardOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardOneComponent_div_0_Template, 7, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card-one',
          templateUrl: './card-one.component.html'
        }]
      }], function () {
        return [];
      }, {
        List: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/check-list/check-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/xamin/components/check-list/check-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CheckListComponent */

  /***/
  function srcAppXaminComponentsCheckListCheckListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckListComponent", function () {
      return CheckListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CheckListComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1);
      }
    }

    var CheckListComponent = /*#__PURE__*/function () {
      function CheckListComponent() {
        _classCallCheck(this, CheckListComponent);
      }

      _createClass(CheckListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckListComponent;
    }();

    CheckListComponent.ɵfac = function CheckListComponent_Factory(t) {
      return new (t || CheckListComponent)();
    };

    CheckListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckListComponent,
      selectors: [["app-check-list"]],
      inputs: {
        lists: "lists"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "text-left"], [1, "iq-list"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-check-square-o"]],
      template: function CheckListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckListComponent_li_2_Template, 4, 1, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-check-list',
          templateUrl: './check-list.component.html'
        }]
      }], function () {
        return [];
      }, {
        lists: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/choose-us/choose-us.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/xamin/components/choose-us/choose-us.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ChooseUsComponent */

  /***/
  function srcAppXaminComponentsChooseUsChooseUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseUsComponent", function () {
      return ChooseUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChooseUsComponent = /*#__PURE__*/function () {
      function ChooseUsComponent() {
        _classCallCheck(this, ChooseUsComponent);
      }

      _createClass(ChooseUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChooseUsComponent;
    }();

    ChooseUsComponent.ɵfac = function ChooseUsComponent_Factory(t) {
      return new (t || ChooseUsComponent)();
    };

    ChooseUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChooseUsComponent,
      selectors: [["app-choose-us"]],
      inputs: {
        lists: "lists"
      },
      decls: 12,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-4", "pr-3"], [1, "title-box", "wow", "fadeInUp", "mb-0", "text-center", "text-lg-left", "border-right"], [1, "title-design"], [1, "col-lg-8", "align-self-center"]],
      template: function ChooseUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lists.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lists.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lists.desc);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChooseUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-choose-us',
          templateUrl: './choose-us.component.html'
        }]
      }], function () {
        return [];
      }, {
        lists: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/counter/counter.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/xamin/components/counter/counter.component.ts ***!
    \***************************************************************/

  /*! exports provided: CounterComponent */

  /***/
  function srcAppXaminComponentsCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
      return CounterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CounterComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function CounterComponent_ng_template_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-to", list_r6.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r6.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](list_r6.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r6.text);
      }
    }

    function CounterComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CounterComponent_ng_template_1_div_1_Template, 8, 6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.List);
      }
    }

    function CounterComponent_ng_template_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "M");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](list_r8.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r8.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r8.text, "");
      }
    }

    function CounterComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CounterComponent_ng_template_3_div_1_Template, 12, 5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.List);
      }
    }

    var CounterComponent = /*#__PURE__*/function () {
      function CounterComponent() {
        _classCallCheck(this, CounterComponent);
      }

      _createClass(CounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CounterComponent;
    }();

    CounterComponent.ɵfac = function CounterComponent_Factory(t) {
      return new (t || CounterComponent)();
    };

    CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CounterComponent,
      selectors: [["app-counter"]],
      inputs: {
        List: "List",
        style: "style",
        videoDetail: "videoDetail"
      },
      decls: 5,
      vars: 3,
      consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["style_1", ""], ["style_2", ""], [1, "row"], ["class", "col-md-3 col-sm-6 mb-3 mb-md-0", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-sm-6", "mb-3", "mb-md-0"], [1, "iq-timer", "style1", "text-center"], [1, "timer-details"], ["data-speed", "15000", 1, "timer"], ["aria-hidden", "true"], ["class", "col-md-3 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-sm-6"], [1, "iq-timer", "style2", "mb-5", "mb-md-0", "mb-lg-0", "text-center"], [1, "iq-icon"], ["data-to", "1520", "data-speed", "5000", 1, "timer", "dark-timer"], [1, "timer_postfix", "dark-timer"], ["aria-hidden", "true", 1, "fa", "fa-percent"], [1, "dark-timer"]],
      template: function CounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CounterComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CounterComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CounterComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.style)("ngIfThen", _r3)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-counter',
          templateUrl: './counter.component.html'
        }]
      }], function () {
        return [];
      }, {
        List: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        videoDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/customers/customers.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/xamin/components/customers/customers.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppXaminComponentsCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CustomersComponent_div_3_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lists_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/partners/", lists_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CustomersComponent_div_3_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lists_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/partners/", lists_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CustomersComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomersComponent_div_3_ng_template_1_Template, 2, 1, "ng-template", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomersComponent_div_3_ng_template_2_Template, 2, 1, "ng-template", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hover);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hover);
      }
    }

    var CustomersComponent = /*#__PURE__*/function () {
      function CustomersComponent() {
        _classCallCheck(this, CustomersComponent);

        this.List = [{
          img: '1.png'
        }, {
          img: '2.png'
        }, {
          img: '3.png'
        }, {
          img: '4.png'
        }, {
          img: '1.png'
        }, {
          img: '2.png'
        }];
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ɵfac = function CustomersComponent_Factory(t) {
      return new (t || CustomersComponent)();
    };

    CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomersComponent,
      selectors: [["app-customers"]],
      inputs: {
        hover: "hover"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "row", "mb-5"], [1, "col-md-12", "wow", "fadeInUp"], ["data-dots", "false", "data-nav", "false", "data-items", "6", "data-items-laptop", "4", "data-items-tab", "3", "data-items-mobile", "2", "data-items-mobile-sm", "1", "data-autoplay", "true", "data-loop", "true", "data-margin", "30", 1, "owl-carousel", "client-logo", "owl-loaded", "owl-drag"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [3, "ngIf"], [1, "clients-box", "hover-effct"], ["alt", "client-image", 1, "img-fluid", "client-img", 3, "src"], [1, "clients-box"]],
      template: function CustomersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomersComponent_div_3_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customers',
          templateUrl: './customers.component.html'
        }]
      }], function () {
        return [];
      }, {
        hover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/footer/footer.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/xamin/components/footer/footer.component.ts ***!
    \*************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppXaminComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      inputs: {
        logoImg: "logoImg",
        contactInfo: "contactInfo"
      },
      decls: 95,
      vars: 7,
      consts: [["id", "contact", 1, "footer-one", "iq-bg-dark", "iq-over-dark-90"], [1, "container"], [1, "footer-top"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "footer-logo"], ["alt", "img", "width", "260", 3, "src"], [1, "info-share", "d-inline", "list-inline"], [1, "list-inline-item"], ["href", "https://www.youtube.com/channel/UCckOWUC8Odh90Gi0d9W5gPw", "target", "_blank"], [1, "fa", "fa-youtube-play", "fa-lg"], ["href", "https://www.facebook.com/arka11renewablesolutions", "target", "_blank"], [1, "fa", "fa-facebook-f", "fa-lg"], ["href", "https://twitter.com/arka11_rs", "target", "_blank"], [1, "fa", "fa-twitter", "fa-lg"], ["href", "https://instagram.com/arka11rs", "target", "_blank"], [1, "fa", "fa-instagram", "fa-lg"], ["href", "https://www.linkedin.com/company/arka11-renewable-solutions", "target", "_blank"], [1, "fa", "fa-linkedin", "fa-lg"], [1, "col-lg-2", "col-md-6", "col-sm-6", "mt-4", "mt-lg-0", "mt-md-0"], [1, "footer-title"], [1, "menu-footer-menu-container"], [1, "menu"], [1, "menu-item"], ["href", "", "routerLink", "/", "aria-current", "page"], ["href", "", "routerLink", "/about-us"], ["href", "", "routerLink", "/services"], ["href", "", "routerLink", "/channel-partner"], ["href", "", "routerLink", "/solar-calculator"], [1, "col-lg-4", "col-md-6", "col-sm-6", "mt-lg-0", "mt-4"], [1, "footer-title", "iq-rmt-30"], [1, "iq-contact"], [3, "href"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"], [1, "fa", "fa-home"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-0"], ["href", "https://www.arka11.com/about-us", "target", "_blank"], ["height", "80", "width", "150", "src", "../../../assets/images/about-us/startup_logo.jpg", 1, ""], ["href", "https://www.india.gov.in/spotlight/government-e-marketplace-procurement-made-smart", "target", "_blank"], ["height", "80", "width", "150", "src", "../../../assets/images/about-us/Gem-logo.jpg", 1, ""], ["href", "https://www.iafindia.com/mr-ashok-chowdary/", "target", "_blank"], ["height", "60", "width", "100", "src", "../../../assets/images/about-us/Logo-IAF.jpg", 1, ""], ["href", "https://startup.siliconindia.com/ranking/10-best-green-energy-startups-2021-rid-1197.html", "target", "_blank"], ["height", "80", "width", "150", "src", "../../../assets/images/about-us/startupcity-logo.jpg", 1, ""], ["height", "80", "width", "150", "src", "../../../assets/images/about-us/nmims-horizontal.jpg", 1, ""], [1, "copyright-footer"], [1, "pt-3", "pb-3"], [1, "row", "flex-row-reverse", "justify-content-between"], [1, "col-lg-12", "col-md-12", "text-lg-center", "text-md-center", "text-center"], [1, "copyright"], ["href", ""]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "To bring positive impact in society by making every building Zero Grid Energy for Empowering Growth & Self sustenance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Become Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Solar Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Contact us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\xA9 Copyright 2021, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Arka11 Renewable Solutions Pvt Ltd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " All Rights Reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logoImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx.contactInfo.contactNumber, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.contactNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.contactInfo.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.address);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html'
        }]
      }], function () {
        return [];
      }, {
        logoImg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contactInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/header/header.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/xamin/components/header/header.component.ts ***!
    \*************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppXaminComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeaderComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r0.contactInfo.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contactInfo.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r0.contactInfo.contactNumber, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contactInfo.contactNumber);
      }
    }

    function HeaderComponent_li_14_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
      }
    }

    function HeaderComponent_li_14_ul_4_li_1_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
      }
    }

    var _c0 = function _c0() {
      return ["active"];
    };

    var _c1 = function _c1() {
      return {
        exact: true
      };
    };

    function HeaderComponent_li_14_ul_4_li_1_ul_4_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subchild_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subchild_r10.href)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subchild_r10.title);
      }
    }

    function HeaderComponent_li_14_ul_4_li_1_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_14_ul_4_li_1_ul_4_li_1_Template, 3, 6, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var child_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child_r6.submenu);
      }
    }

    function HeaderComponent_li_14_ul_4_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_li_14_ul_4_li_1_i_3_Template, 1, 0, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_14_ul_4_li_1_ul_4_Template, 2, 1, "ul", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var child_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menu-item ", child_r6.isCurrent !== undefined && child_r6.isCurrent ? "current-menu-item" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r6.href)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r6.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r6.submenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r6.submenu);
      }
    }

    function HeaderComponent_li_14_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_14_ul_4_li_1_Template, 5, 11, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", option_r2.submenu);
      }
    }

    function HeaderComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_li_14_i_3_Template, 1, 0, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_14_ul_4_Template, 2, 1, "ul", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menu-item ", option_r2.isCurrent !== undefined && option_r2.isCurrent ? "current-menu-item" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", option_r2.href)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r2.submenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r2.submenu);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        logoId: "logoId",
        logoImg: "logoImg",
        navItemList: "navItemList",
        contactInfo: "contactInfo"
      },
      decls: 20,
      vars: 4,
      consts: [["id", "main-header", 1, "style-one"], ["class", "container-fluid sub-header", 4, "ngIf"], [1, "container-fluid", "main-header"], [1, "row"], [1, "col-sm-12"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "", "routerLink", "/", 1, "navbar-brand"], ["alt", "Xamin", 1, "img-fluid", "logo", 3, "id", "src"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "ion-navicon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "menu-main-menu-container"], ["id", "top-menu", 1, "navbar-nav", "ml-auto"], [3, "class", 4, "ngFor", "ngForOf"], [1, "sub-main"], ["aria-label", "breadcrumb"], [1, "blue-btn", "button"], ["routerLink", "/get-quote"], [1, "container-fluid", "sub-header"], [1, "col-auto"], [1, "number-info"], [1, "list-inline"], [1, "list-inline-item"], [3, "href"], [1, "fa", "fa-envelope"], [1, "fa", "fa-phone"], [1, "col-auto", "ml-auto", "sub-main"], [1, "social-icone"], [1, "d-inline"], ["href", "#"], [1, "fa", "fa-facebook-f"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], ["class", "fa fa-angle-down toggledrop", "aria-hidden", "true", 4, "ngIf"], ["class", "sub-menu", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-angle-down", "toggledrop"], [1, "sub-menu"], [1, "isubmenu", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "menu-item"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 25, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 5, 11, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Get Quote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactInfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.logoId ? "logo_img" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logoImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItemList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html'
        }]
      }], function () {
        return [];
      }, {
        logoId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        logoImg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navItemList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contactInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/loader/loader.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/xamin/components/loader/loader.component.ts ***!
    \*************************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppXaminComponentsLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)();
    };

    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      decls: 3,
      vars: 0,
      consts: [["id", "loading"], [1, "loading-center"], ["src", "../../../../assets/images/loader.gif", "alt", "loader", "width", "137px"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loader',
          templateUrl: './loader.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/masonry-porfolio-box/masonry-porfolio-box.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/xamin/components/masonry-porfolio-box/masonry-porfolio-box.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MasonryPorfolioBoxComponent */

  /***/
  function srcAppXaminComponentsMasonryPorfolioBoxMasonryPorfolioBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasonryPorfolioBoxComponent", function () {
      return MasonryPorfolioBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MasonryPorfolioBoxComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var port_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("iq-masonry-item item ", port_r1["class"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", port_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/about-us/", port_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", port_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](port_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](port_r1.type);
      }
    }

    var MasonryPorfolioBoxComponent = /*#__PURE__*/function () {
      function MasonryPorfolioBoxComponent() {
        _classCallCheck(this, MasonryPorfolioBoxComponent);

        this.portfolioList = [{
          "class": 'video',
          href: '#',
          img: '08.png',
          title: 'Business Growth',
          type: 'Video'
        }, {
          "class": 'html',
          href: '#',
          img: '02.png',
          title: 'Business Growth',
          type: 'HTML'
        }, {
          "class": 'design video',
          href: '#',
          img: '03.png',
          title: 'Business Growth',
          type: 'Design, Video'
        }, {
          "class": 'photography',
          href: '#',
          img: '04.png',
          title: 'Business Growth',
          type: 'Photography'
        }, {
          "class": 'design photography',
          href: '#',
          img: '08.png',
          title: 'Business Growth',
          type: 'Design, Photography'
        }, {
          "class": 'design photography',
          href: '#',
          img: '02.png',
          title: 'Business Growth',
          type: 'Design, Photography'
        }, {
          "class": 'design',
          href: '#',
          img: '03.png',
          title: 'Business Growth',
          type: 'Design'
        }];
      }

      _createClass(MasonryPorfolioBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MasonryPorfolioBoxComponent;
    }();

    MasonryPorfolioBoxComponent.ɵfac = function MasonryPorfolioBoxComponent_Factory(t) {
      return new (t || MasonryPorfolioBoxComponent)();
    };

    MasonryPorfolioBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MasonryPorfolioBoxComponent,
      selectors: [["app-masonry-porfolio-box"]],
      decls: 1,
      vars: 1,
      consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "iq-portfolio"], [1, "iq-portfolio-img", 3, "href"], ["width", "1260", "height", "954", "alt", "", 1, "attachment-post-thumbnail", "size-post-thumbnail", "wp-post-image", 3, "src"], [1, "iq-portfolio-content", "text-center"], [1, "details-box", "clearfix"], [1, "consult-details"], [3, "href"], [1, "text-hover"], [1, "mb-0"]],
      template: function MasonryPorfolioBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MasonryPorfolioBoxComponent_div_0_Template, 12, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasonryPorfolioBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-masonry-porfolio-box',
          templateUrl: './masonry-porfolio-box.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/nav-tabs/nav-tabs.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/xamin/components/nav-tabs/nav-tabs.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NavTabsComponent */

  /***/
  function srcAppXaminComponentsNavTabsNavTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavTabsComponent", function () {
      return NavTabsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _check_list_check_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../check-list/check-list.component */
    "./src/app/xamin/components/check-list/check-list.component.ts");

    function NavTabsComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", nav_r2.active !== undefined && nav_r2.active ? "show active" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "#" + nav_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/services/", nav_r2.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r2.title);
      }
    }

    function NavTabsComponent_div_4_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose Your Software Development Service by Category ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tame your big data through robust solutions that empower data collection, storage, processing and analysis.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-check-list", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-check-list", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-check-list", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " View all Services");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", nav_r3.chkList1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", nav_r3.chkList2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", nav_r3.chkList3);
      }
    }

    function NavTabsComponent_div_4_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\u2019t look even slightly believable. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Read More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dignissimos ducimus qui blanditiis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-check-list", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", nav_r3.chkList);
      }
    }

    function NavTabsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavTabsComponent_div_4_ng_template_1_Template, 20, 3, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavTabsComponent_div_4_ng_template_2_Template, 15, 1, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tab-pane fade ", nav_r3.active !== undefined && nav_r3.active ? "show active" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", nav_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", nav_r3.id === "tab-big-data" || nav_r3.id === "tab-analytical-ai");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", nav_r3.id === "tab-machine-learning" || nav_r3.id === "tab-computer-vision");
      }
    }

    var NavTabsComponent = /*#__PURE__*/function () {
      function NavTabsComponent() {
        _classCallCheck(this, NavTabsComponent);
      }

      _createClass(NavTabsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavTabsComponent;
    }();

    NavTabsComponent.ɵfac = function NavTabsComponent_Factory(t) {
      return new (t || NavTabsComponent)();
    };

    NavTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavTabsComponent,
      selectors: [["app-nav-tabs"]],
      inputs: {
        navList: "navList"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "custom-tab"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-5", "text-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "show_content"], [3, "id", "class", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["data-toggle", "pill", "role", "tab", "aria-selected", "true", 3, "href"], ["alt", "tab-image", 1, "img-fluid", 3, "src"], [1, "tab-title"], [3, "id"], [3, "ngIf"], [1, "row", "pl-lg-5", "pr-lg-5"], [1, "col-sm-12"], [1, "custom_heading", "mb-2"], [1, "text-left", "mb-3"], [1, "col-sm-4"], [3, "lists"], [1, "text-left", "mt-4"], ["href", "services.html", 1, "button", "button-icon"], [1, "btn-effect"], [1, "col-sm-6"], [1, "text-left", "no-margin"], [1, "text-left", "mt-4", "mb-lg-0", "mb-md-0", "mb-4"], [1, "custom_heading", "mb-3"]],
      template: function NavTabsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavTabsComponent_li_2_Template, 5, 6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavTabsComponent_div_4_Template, 3, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _check_list_check_list_component__WEBPACK_IMPORTED_MODULE_2__["CheckListComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavTabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-tabs',
          templateUrl: './nav-tabs.component.html'
        }]
      }], function () {
        return [];
      }, {
        navList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/portfolio-box/portfolio-box.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/xamin/components/portfolio-box/portfolio-box.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PortfolioBoxComponent */

  /***/
  function srcAppXaminComponentsPortfolioBoxPortfolioBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioBoxComponent", function () {
      return PortfolioBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PortfolioBoxComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var port_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("iq-masonry-item item ", port_r1["class"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "", port_r1.href, "/", port_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/portfolio/", port_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "", port_r1.href, "/", port_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](port_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](port_r1.type);
      }
    }

    var PortfolioBoxComponent = /*#__PURE__*/function () {
      function PortfolioBoxComponent() {
        _classCallCheck(this, PortfolioBoxComponent);
      }

      _createClass(PortfolioBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioBoxComponent;
    }();

    PortfolioBoxComponent.ɵfac = function PortfolioBoxComponent_Factory(t) {
      return new (t || PortfolioBoxComponent)();
    };

    PortfolioBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioBoxComponent,
      selectors: [["app-portfolio-box"]],
      inputs: {
        portfolioList: "portfolioList"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "iq-portfolio"], [1, "iq-portfolio-img", 3, "href"], ["alt", "", 1, "attachment-post-thumbnail", "size-post-thumbnail", "wp-post-image", "port-box-dimentions", 3, "src"], [1, "iq-portfolio-content", "text-center"], [1, "details-box", "clearfix"], [1, "consult-details"], [3, "href"], [1, "text-hover"], [1, "mb-0"]],
      template: function PortfolioBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PortfolioBoxComponent_div_0_Template, 12, 10, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio-box',
          templateUrl: './portfolio-box.component.html'
        }]
      }], function () {
        return [];
      }, {
        portfolioList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/progress-bar-right-percentage/progress-bar-right-percentage.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/xamin/components/progress-bar-right-percentage/progress-bar-right-percentage.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: ProgressBarRightPercentageComponent */

  /***/
  function srcAppXaminComponentsProgressBarRightPercentageProgressBarRightPercentageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarRightPercentageComponent", function () {
      return ProgressBarRightPercentageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProgressBarRightPercentageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function ProgressBarRightPercentageComponent_ng_template_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var progress_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](progress_r6.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](progress_r6.percentage + "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-percent", progress_r6.percentage);
      }
    }

    function ProgressBarRightPercentageComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressBarRightPercentageComponent_ng_template_1_div_1_Template, 7, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.progressBarDetail);
      }
    }

    function ProgressBarRightPercentageComponent_ng_template_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var progress_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](progress_r8.percentage + "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](progress_r8.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-percent", progress_r8.percentage);
      }
    }

    function ProgressBarRightPercentageComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressBarRightPercentageComponent_ng_template_3_div_1_Template, 9, 3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.progressBarDetail);
      }
    }

    var ProgressBarRightPercentageComponent = /*#__PURE__*/function () {
      function ProgressBarRightPercentageComponent() {
        _classCallCheck(this, ProgressBarRightPercentageComponent);
      }

      _createClass(ProgressBarRightPercentageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressBarRightPercentageComponent;
    }();

    ProgressBarRightPercentageComponent.ɵfac = function ProgressBarRightPercentageComponent_Factory(t) {
      return new (t || ProgressBarRightPercentageComponent)();
    };

    ProgressBarRightPercentageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressBarRightPercentageComponent,
      selectors: [["app-progress-bar-right-percentage"]],
      inputs: {
        progressBar1: "progressBar1",
        progressBarDetail: "progressBarDetail"
      },
      decls: 5,
      vars: 3,
      consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["progressBar_1", ""], ["progressBar_2", ""], [1, "iq-services-box", "wow", "fadeInUp", "text-left"], ["class", "services-content", 4, "ngFor", "ngForOf"], [1, "services-content"], [1, "progress-value"], [1, "iq-progress-bar"], [1, "position-relative"], [1, "services-content", "wow", "fadeInUp", "progress-style", "text-left"], ["class", "progress-content", 4, "ngFor", "ngForOf"], [1, "progress-content"], [1, "progress-title"], [1, "progress-main"]],
      template: function ProgressBarRightPercentageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressBarRightPercentageComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressBarRightPercentageComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgressBarRightPercentageComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progressBar1)("ngIfThen", _r1)("ngIfElse", _r3);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarRightPercentageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-progress-bar-right-percentage',
          templateUrl: './progress-bar-right-percentage.component.html'
        }]
      }], function () {
        return [];
      }, {
        progressBar1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        progressBarDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/project-portfolio-box/project-portfolio-box.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/xamin/components/project-portfolio-box/project-portfolio-box.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ProjectPortfolioBoxComponent */

  /***/
  function srcAppXaminComponentsProjectPortfolioBoxProjectPortfolioBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectPortfolioBoxComponent", function () {
      return ProjectPortfolioBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProjectPortfolioBoxComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var port_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("iq-masonry-item item ", port_r1["class"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", port_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/about-us/", port_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", port_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](port_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](port_r1.type);
      }
    }

    var ProjectPortfolioBoxComponent = /*#__PURE__*/function () {
      function ProjectPortfolioBoxComponent() {
        _classCallCheck(this, ProjectPortfolioBoxComponent);

        this.portfolioList = [{
          "class": 'video',
          href: '#',
          img: '01.png',
          title: 'Business Growth',
          type: 'Video'
        }, {
          "class": 'html',
          href: '#',
          img: '02.png',
          title: 'Business Growth',
          type: 'HTML'
        }, {
          "class": 'design video',
          href: '#',
          img: '03.png',
          title: 'Business Growth',
          type: 'Design, Video'
        }, {
          "class": 'photography',
          href: '#',
          img: '04.png',
          title: 'Business Growth',
          type: 'Photography'
        }, {
          "class": 'design photography',
          href: '#',
          img: '01.png',
          title: 'Business Growth',
          type: 'Design, Photography'
        }, {
          "class": 'design photography',
          href: '#',
          img: '02.png',
          title: 'Business Growth',
          type: 'Design, Photography'
        }, {
          "class": 'design',
          href: '#',
          img: '03.png',
          title: 'Business Growth',
          type: 'Design'
        }];
      }

      _createClass(ProjectPortfolioBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectPortfolioBoxComponent;
    }();

    ProjectPortfolioBoxComponent.ɵfac = function ProjectPortfolioBoxComponent_Factory(t) {
      return new (t || ProjectPortfolioBoxComponent)();
    };

    ProjectPortfolioBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectPortfolioBoxComponent,
      selectors: [["app-project-portfolio-box"]],
      decls: 2,
      vars: 1,
      consts: [["data-dots", "false", "data-nav", "false", "data-items", "3", "data-items-laptop", "3", "data-items-tab", "2", "data-items-mobile", "1", "data-items-mobile-sm", "1", "data-autoplay", "false", "data-loop", "true", "data-margin", "30", 1, "owl-carousel", "owl-loaded", "owl-drag"], [3, "class", 4, "ngFor", "ngForOf"], [1, "iq-portfolio"], [1, "iq-portfolio-img", 3, "href"], ["width", "1260", "height", "954", "alt", "", 1, "attachment-post-thumbnail", "size-post-thumbnail", "wp-post-image", 3, "src"], [1, "iq-portfolio-content", "text-center"], [1, "details-box", "clearfix"], [1, "consult-details"], [3, "href"], [1, "text-hover"], [1, "mb-0"]],
      template: function ProjectPortfolioBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectPortfolioBoxComponent_div_1_Template, 12, 8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectPortfolioBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project-portfolio-box',
          templateUrl: './project-portfolio-box.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/scroll-top/scroll-top.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/xamin/components/scroll-top/scroll-top.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ScrollTopComponent */

  /***/
  function srcAppXaminComponentsScrollTopScrollTopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function () {
      return ScrollTopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var ScrollTopComponent = /*#__PURE__*/function () {
      function ScrollTopComponent() {
        _classCallCheck(this, ScrollTopComponent);
      }

      _createClass(ScrollTopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollTop",
        value: function scrollTop() {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('body,html').animate({
            scrollTop: 0
          }, 800);
        }
      }]);

      return ScrollTopComponent;
    }();

    ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) {
      return new (t || ScrollTopComponent)();
    };

    ScrollTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScrollTopComponent,
      selectors: [["app-scroll-top"]],
      decls: 3,
      vars: 0,
      consts: [["id", "back-to-top", 2, "display", "none"], ["id", "top", "href", "javascript:void(0)", 1, "top", 3, "click"], [1, "ion-ios-arrow-up"]],
      template: function ScrollTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollTopComponent_Template_a_click_1_listener() {
            return ctx.scrollTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scroll-top',
          templateUrl: './scroll-top.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/service-box/service-box.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/xamin/components/service-box/service-box.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ServiceBoxComponent */

  /***/
  function srcAppXaminComponentsServiceBoxServiceBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceBoxComponent", function () {
      return ServiceBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../title-section/title-section.component */
    "./src/app/xamin/components/title-section/title-section.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _check_list_check_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../check-list/check-list.component */
    "./src/app/xamin/components/check-list/check-list.component.ts");

    function ServiceBoxComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-check-list", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/services/", list_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.desc, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lists", list_r1.chkList);
      }
    }

    var ServiceBoxComponent = /*#__PURE__*/function () {
      function ServiceBoxComponent() {
        _classCallCheck(this, ServiceBoxComponent);
      }

      _createClass(ServiceBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServiceBoxComponent;
    }();

    ServiceBoxComponent.ɵfac = function ServiceBoxComponent_Factory(t) {
      return new (t || ServiceBoxComponent)();
    };

    ServiceBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceBoxComponent,
      selectors: [["app-service-box"]],
      inputs: {
        Lists: "Lists",
        titleSectionProp: "titleSectionProp"
      },
      decls: 8,
      vars: 2,
      consts: [[1, "aboutus-two-service"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "title-box", "wow", "fadeInUp", "text-center"], [3, "titleSectionProp"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "service-box", "d-inherit", "p-4", "my-3", "wow", "fadeInUp", "text-left"], ["alt", "fancy-list", 1, "fancy-list-img", 3, "src"], [1, "service-detail", "align-self-center"], [1, "mb-2"], [3, "lists"]],
      template: function ServiceBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-title-section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServiceBoxComponent_div_7_Template, 9, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Lists);
        }
      },
      directives: [_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__["TitleSectionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _check_list_check_list_component__WEBPACK_IMPORTED_MODULE_3__["CheckListComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service-box',
          templateUrl: './service-box.component.html'
        }]
      }], function () {
        return [];
      }, {
        Lists: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSectionProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/services/services.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/xamin/components/services/services.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppXaminComponentsServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../title-section/title-section.component */
    "./src/app/xamin/components/title-section/title-section.component.ts");
    /* harmony import */


    var _nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../nav-tabs/nav-tabs.component */
    "./src/app/xamin/components/nav-tabs/nav-tabs.component.ts");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      inputs: {
        navList: "navList",
        titleSectionProp: "titleSectionProp"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "pt-0"], [1, "container"], [1, "row"], [1, "col-sm-12", "wow", "fadeInUp"], [3, "titleSectionProp"], [3, "navList"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-title-section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-nav-tabs", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navList", ctx.navList);
        }
      },
      directives: [_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__["TitleSectionComponent"], _nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_2__["NavTabsComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html'
        }]
      }], function () {
        return [];
      }, {
        navList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSectionProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/team/team.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/xamin/components/team/team.component.ts ***!
    \*********************************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppXaminComponentsTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TeamComponent_div_1_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.position);
      }
    }

    function TeamComponent_div_1_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.description);
      }
    }

    function TeamComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TeamComponent_div_1_span_23_Template, 2, 1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TeamComponent_div_1_span_24_Template, 2, 1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/team/", list_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.position !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.description !== "");
      }
    }

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      inputs: {
        List: "List"
      },
      decls: 2,
      vars: 1,
      consts: [["data-dots", "false", "data-nav", "false", "data-items", "4", "data-items-laptop", "4", "data-items-tab", "3", "data-items-mobile", "2", "data-items-mobile-sm", "1", "data-autoplay", "true", "data-loop", "true", "data-margin", "30", 1, "owl-carousel", "owl-loaded", "owl-drag"], ["class", "item text-left", 4, "ngFor", "ngForOf"], [1, "item", "text-left"], [1, "iq-team"], [1, "iq-team-img"], ["height", "373px", "alt", "#1", 1, "img-fluid", 3, "src"], [1, "iq-share"], [1, "slideouticons"], [1, "mainlabel"], [1, "fa", "fa-share-alt"], [1, "iconswrapper"], ["href", "#"], [1, "fa", "fa-facebook-f"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "iq-team-info", "text-center"], [4, "ngIf"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamComponent_div_1_Template, 25, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html'
        }]
      }], function () {
        return [];
      }, {
        List: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/testimonials/testimonials.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/xamin/components/testimonials/testimonials.component.ts ***!
    \*************************************************************************/

  /*! exports provided: TestimonialsComponent */

  /***/
  function srcAppXaminComponentsTestimonialsTestimonialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function () {
      return TestimonialsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TestimonialsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lists_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/testimonials/", lists_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lists_r1.designation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lists_r1.desc, " ");
      }
    }

    var TestimonialsComponent = /*#__PURE__*/function () {
      function TestimonialsComponent() {
        _classCallCheck(this, TestimonialsComponent);

        this.List = [{
          img: "1.jpg",
          name: "Jack White",
          designation: "CEO",
          desc: "Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden. Latin professor at Hampden-Sydney consectetur."
        }, {
          img: "2.jpg",
          name: "Walhan Bobe",
          designation: "Business Advisor",
          desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed ut perspiciatis error. Perspiciatis unde omnis iste."
        }, {
          img: "3.jpg",
          name: "Mark McManus",
          designation: "COO",
          desc: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”"
        }];
      }

      _createClass(TestimonialsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestimonialsComponent;
    }();

    TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) {
      return new (t || TestimonialsComponent)();
    };

    TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestimonialsComponent,
      selectors: [["app-testimonials"]],
      decls: 4,
      vars: 1,
      consts: [[1, "row"], [1, "col-md-12", "wow", "fadeInUp"], ["data-dots", "true", "data-nav", "false", "data-autoplay", "true", "data-loop", "true", "data-items", "1", "data-items-laptop", "1", "data-items-tab", "1", "data-items-mobile", "1", "data-items-mobile-sm", "1", "data-margin", "30", 1, "owl-carousel", "testimonial-style", "owl-loaded", "owl-drag"], ["class", "item text-center", 4, "ngFor", "ngForOf"], [1, "item", "text-center"], [1, "iq-testimonial"], [1, "testimonial-info"], ["alt", "#", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "testimonial-name"], [1, "sub-title"]],
      template: function TestimonialsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TestimonialsComponent_div_3_Template, 11, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-testimonials',
          templateUrl: './testimonials.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/title-section/title-section.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/xamin/components/title-section/title-section.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TitleSectionComponent */

  /***/
  function srcAppXaminComponentsTitleSectionTitleSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitleSectionComponent", function () {
      return TitleSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TitleSectionComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titleSectionProp.description);
      }
    }

    function TitleSectionComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.titleSectionProp.descriptionHTML, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var TitleSectionComponent = /*#__PURE__*/function () {
      function TitleSectionComponent() {
        _classCallCheck(this, TitleSectionComponent);
      }

      _createClass(TitleSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TitleSectionComponent;
    }();

    TitleSectionComponent.ɵfac = function TitleSectionComponent_Factory(t) {
      return new (t || TitleSectionComponent)();
    };

    TitleSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TitleSectionComponent,
      selectors: [["app-title-section"]],
      inputs: {
        titleSectionProp: "titleSectionProp"
      },
      decls: 7,
      vars: 7,
      consts: [[1, "title-design"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]],
      template: function TitleSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TitleSectionComponent_p_5_Template, 2, 1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TitleSectionComponent_div_6_Template, 1, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("title-box wow fadeInUp ", ctx.titleSectionProp["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleSectionProp.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleSectionProp.subTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titleSectionProp.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titleSectionProp.descriptionHTML);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-title-section',
          templateUrl: './title-section.component.html'
        }]
      }], function () {
        return [];
      }, {
        titleSectionProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/top-banner/top-banner.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/xamin/components/top-banner/top-banner.component.ts ***!
    \*********************************************************************/

  /*! exports provided: TopBannerComponent */

  /***/
  function srcAppXaminComponentsTopBannerTopBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBannerComponent", function () {
      return TopBannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TopBannerComponent = /*#__PURE__*/function () {
      function TopBannerComponent() {
        _classCallCheck(this, TopBannerComponent);
      }

      _createClass(TopBannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBannerComponent;
    }();

    TopBannerComponent.ɵfac = function TopBannerComponent_Factory(t) {
      return new (t || TopBannerComponent)();
    };

    TopBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBannerComponent,
      selectors: [["app-top-banner"]],
      inputs: {
        data: "data"
      },
      decls: 13,
      vars: 2,
      consts: [[1, "text-left", "iq-breadcrumb-one", "iq-bg-over", "black"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-md-8", "text-left", "align-self-center"], ["aria-label", "breadcrumb", 1, "text-left"], [1, "title"], [1, "breadcrumb", "main-bg"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"]],
      template: function TopBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-banner',
          templateUrl: './top-banner.component.html'
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/components/xamin-circle/xamin-circle.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/xamin/components/xamin-circle/xamin-circle.component.ts ***!
    \*************************************************************************/

  /*! exports provided: XaminCircleComponent */

  /***/
  function srcAppXaminComponentsXaminCircleXaminCircleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XaminCircleComponent", function () {
      return XaminCircleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var XaminCircleComponent = /*#__PURE__*/function () {
      function XaminCircleComponent() {
        _classCallCheck(this, XaminCircleComponent);
      }

      _createClass(XaminCircleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return XaminCircleComponent;
    }();

    XaminCircleComponent.ɵfac = function XaminCircleComponent_Factory(t) {
      return new (t || XaminCircleComponent)();
    };

    XaminCircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XaminCircleComponent,
      selectors: [["app-xamin-circle"]],
      inputs: {
        circleData: "circleData"
      },
      decls: 7,
      vars: 8,
      consts: [[1, "circle-effect"], ["alt", "fancybox", 3, "src"], [1, "mb-2"], [1, "mb-0"]],
      template: function XaminCircleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"](" ", ctx.circleData.type, " xamin-circle right wow fadeInUp text-center ", ctx.circleData.positionClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-wow-delay", ctx.circleData.delay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/services/", ctx.circleData.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.circleData.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.circleData.description);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XaminCircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-xamin-circle',
          templateUrl: './xamin-circle.component.html'
        }]
      }], function () {
        return [];
      }, {
        circleData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/xamin/plugins.service.ts":
  /*!******************************************!*\
    !*** ./src/app/xamin/plugins.service.ts ***!
    \******************************************/

  /*! exports provided: PluginsService */

  /***/
  function srcAppXaminPluginsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PluginsService", function () {
      return PluginsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PluginsService = /*#__PURE__*/function () {
      function PluginsService() {
        _classCallCheck(this, PluginsService);

        // @ts-ignore
        this.$ = window.$;
      }

      _createClass(PluginsService, [{
        key: "index",
        value: function index() {
          this.loaderInit();
          this.toggleDropdown();
          this.wowInit();
          this.owlCarousalInit(this.$);
          this.accordion(this.$);
          this.magnific(this.$);
          this.progressBar(this.$);
          this.isotope(this.$);
          this.global_scroll(this.$);
        } // Function for toggle page Loader...

      }, {
        key: "loaderInit",
        value: function loaderInit() {
          this.$('#load').fadeOut();
          this.$('#loading').delay(1000).fadeOut('slow');
        }
      }, {
        key: "global_scroll",
        value: function global_scroll($) {
          $(window).on('scroll', function (e) {
            if ($(this).scrollTop() > 10) {
              $('header').addClass('menu-sticky');
            } else {
              $('header').removeClass('menu-sticky');
            } // Pill Tab


            var nav = $('#pills-tab');

            if (nav.length) {
              var contentNav = nav.offset().top - window.outerHeight;

              if ($(window).scrollTop() >= contentNav) {
                $('#pills-tab li a').removeClass('active');
                $('#pills-tab li a[aria-selected=true]').addClass('active');
              }
            } // Feature Tab


            var nav1 = $('#features');

            if (nav1.length) {
              var contentNav1 = nav1.offset().top - window.outerHeight;

              if ($(window).scrollTop() >= contentNav1) {
                $('#features .row li a').removeClass('active');
                $('#features .row li a[aria-selected=true]').addClass('active');
              }
            }
          });
        } // Function to toggle Navigation dropdown...

      }, {
        key: "toggleDropdown",
        value: function toggleDropdown() {
          this.$('#main-header .menu-item .toggledrop').off('click');

          if (this.$(window).width() < 992) {
            this.$('#main-header .menu-item .toggledrop').on('click', function (e) {
              e.preventDefault(); // @ts-ignore

              window.$(this).closest('li').find('.sub-menu').toggle('d-block');
            });
          } // tslint:disable-next-line:only-arrow-functions


          this.$(window).on('resize', function () {
            'use strict'; // @ts-ignore

            window.$('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
              // @ts-ignore
              window.$(this).closest('li').find('.sub-menu').toggle('d-block');
            }); // @ts-ignore

            window.$('#main-header .menu-item .toggledrop').off('click'); // @ts-ignore

            if (window.$(window).width() < 992) {
              // @ts-ignore
              window.$('#main-header .menu-item .toggledrop').on('click', function (e) {
                e.preventDefault(); // @ts-ignore

                window.$(this).closest('li').find('.sub-menu').toggle('d-block');
              });
            }
          });
        }
      }, {
        key: "checkElement",
        value: function checkElement(type, element) {
          var found = false;
          var elements;

          switch (type) {
            case 'class':
              elements = document.getElementsByClassName(element);

              if (elements !== undefined && elements !== null && elements.length > 0) {
                found = true;
              }

              break;

            case 'id':
              elements = document.getElementById(element);

              if (elements !== undefined && elements !== null) {
                found = true;
              }

              break;
          }

          return found;
        }
      }, {
        key: "wowInit",
        value: function wowInit() {
          var elementExist = this.checkElement('class', 'wow'); // @ts-ignore

          if (elementExist) {
            // @ts-ignore
            var WOW = window.WOW;
            new WOW({
              boxClass: 'wow',
              animateClass: 'animated',
              offset: 0,
              live: false
            }).init();
          }
        }
      }, {
        key: "owlCarousalInit",
        value: function owlCarousalInit($) {
          var elementExist = this.checkElement('class', 'owl-carousel');

          if (elementExist) {
            this.$('.owl-carousel').each(function () {
              var $carousel = $(this);
              $carousel.owlCarousel({
                items: $carousel.data('items'),
                loop: $carousel.data('loop'),
                margin: $carousel.data('margin'),
                nav: $carousel.data('nav'),
                dots: $carousel.data('dots'),
                autoplay: $carousel.data('autoplay'),
                autoplayTimeout: $carousel.data('autoplay-timeout'),
                navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
                responsiveClass: true,
                responsive: {
                  // breakpoint from 0 up
                  0: {
                    items: $carousel.data('items-mobile-sm')
                  },
                  // breakpoint from 480 up
                  480: {
                    items: $carousel.data('items-mobile')
                  },
                  // breakpoint from 786 up
                  786: {
                    items: $carousel.data('items-tab')
                  },
                  // breakpoint from 1023 up
                  1023: {
                    items: $carousel.data('items-laptop')
                  },
                  1199: {
                    items: $carousel.data('items')
                  }
                }
              });
            });
          }
        }
      }, {
        key: "accordion",
        value: function accordion($) {
          $('.iq-accordion .iq-accordion .accordion-details').hide();
          $('.iq-accordion .iq-accordion:first').addClass('accordion-active').children().slideDown('slow');
          $('.iq-accordion .iq-accordion').on('click', function () {
            if ($(this).children('div').is(':hidden')) {
              $('.iq-accordion .iq-accordion').removeClass('accordion-active').children('div').slideUp('slow');
              $(this).toggleClass('accordion-active').children('div').slideDown('slow');
            }
          });
        }
      }, {
        key: "progressBar",
        value: function progressBar($) {
          var elementExist = this.checkElement('class', 'iq-progress-bar');

          if (elementExist) {
            $('.iq-progress-bar > span').each(function () {
              var $this = $(this);
              var width = $this.data('percent');
              $this.css({
                transition: 'width 2s'
              }); // tslint:disable-next-line:only-arrow-functions

              setTimeout(function () {
                // tslint:disable-next-line:only-arrow-functions
                $this.appear(function () {
                  $this.css('width', width + '%');
                });
              }, 500);
            });
          }
        }
      }, {
        key: "magnific",
        value: function magnific($) {
          $('.popup-gallery').magnificPopup({
            delegate: 'a.popup-img',
            tLoading: 'Loading image #%curr%...',
            type: 'image',
            mainClass: 'mfp-img-mobile',
            gallery: {
              navigateByImgClick: true,
              enabled: true,
              preload: [0, 1]
            },
            image: {
              tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
          });
          $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            type: 'iframe',
            disableOn: 700,
            mainClass: 'mfp-fade',
            preloader: false,
            removalDelay: 160,
            fixedContentPos: false
          });
        }
      }, {
        key: "revolutionSlider",
        value: function revolutionSlider() {
          // @ts-ignore
          window.jQuery('#rev_slider_0_1').show().revolution({
            jsFileLocation: 'js/',
            sliderLayout: 'fullwidth',
            visibilityLevels: '1240,1024,778,480',
            gridwidth: '1400,1024,767,479',
            gridheight: '600,600,800,600',
            minHeight: '',
            autoHeight: true,
            lazyType: 'smart',
            spinner: 'spinner0',
            editorheight: '600,600,800,600',
            responsiveLevels: '1240,1024,778,480',
            disableProgressBar: 'on',
            navigation: {
              mouseScrollNavigation: false,
              touch: {
                touchenabled: true
              }
            },
            parallax: {
              levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
              type: 'mouse'
            },
            fallbacks: {
              allowHTML5AutoPlayOnAndroid: true
            }
          }); // @ts-ignore

          window.jQuery('#rev_slider_1_1').show().revolution({
            jsFileLocation: "js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1240,1240,480",
            gridwidth: "1400,1400,1400,479",
            gridheight: "700,700,700,600",
            minHeight: "",
            autoHeight: true,
            lazyType: "smart",
            spinner: "spinner0",
            editorheight: "700,768,400,600",
            responsiveLevels: "1240,1240,1240,480",
            disableProgressBar: "on",
            navigation: {
              mouseScrollNavigation: false,
              touch: {
                touchenabled: true
              }
            },
            parallax: {
              levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
              type: "mouse"
            },
            fallbacks: {
              allowHTML5AutoPlayOnAndroid: true
            }
          }); // @ts-ignore

          window.jQuery('#rev_slider_3_1').show().revolution({
            jsFileLocation: "js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1400,1024,767,479",
            gridheight: "700,600,800,600",
            minHeight: "",
            autoHeight: true,
            lazyType: "smart",
            spinner: "spinner0",
            editorheight: "700,600,800,600",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
              mouseScrollNavigation: false,
              touch: {
                touchenabled: true
              }
            },
            parallax: {
              levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
              type: "mouse"
            },
            fallbacks: {
              allowHTML5AutoPlayOnAndroid: true
            }
          });
        }
      }, {
        key: "isotope",
        value: function isotope($) {
          /* ------------------------   2 Isotope   -------------------------- */
          var elementExist = this.checkElement('class', 'isotope');

          if (elementExist) {
            // eslint-disable-next-line no-undef
            $('.isotope').isotope({
              itemSelector: '.iq-grid-item'
            }); // filter items on button click

            $('.isotope-filters').on('click', 'button', function () {
              var filterValue = $(this).attr('data-filter');
              $('.isotope').isotope({
                resizable: true,
                filter: filterValue,
                layoutMode: 'cellsByRow'
              });
              $('.isotope-filters button').removeClass('active');
              $(this).addClass('active');
            });
          }
          /* ------------------------   3 Masonry   -------------------------- */


          var elementExist1 = this.checkElement('class', 'iq-masonry-block');

          if (elementExist1) {
            var $msnry = $('.iq-masonry-block .iq-masonry');

            if ($msnry) {
              var $filter = $('.iq-masonry-block .isotope-filters');
              $msnry.isotope({
                percentPosition: true,
                resizable: true,
                itemSelector: '.iq-masonry-block .iq-masonry-item',
                masonry: {
                  gutterWidth: 0
                }
              }); // bind filter button click

              $filter.on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $msnry.isotope({
                  filter: filterValue
                });
              });
              $filter.each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                  $buttonGroup.find('.active').removeClass('active');
                  $(this).addClass('active');
                });
              });
            }
          }
        }
      }]);

      return PluginsService;
    }();

    PluginsService.ɵfac = function PluginsService_Factory(t) {
      return new (t || PluginsService)();
    };

    PluginsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PluginsService,
      factory: PluginsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluginsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/xamin/xamin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/xamin/xamin.module.ts ***!
    \***************************************/

  /*! exports provided: XaminModule */

  /***/
  function srcAppXaminXaminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XaminModule", function () {
      return XaminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/loader/loader.component */
    "./src/app/xamin/components/loader/loader.component.ts");
    /* harmony import */


    var _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/scroll-top/scroll-top.component */
    "./src/app/xamin/components/scroll-top/scroll-top.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/xamin/components/footer/footer.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/xamin/components/header/header.component.ts");
    /* harmony import */


    var _components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/title-section/title-section.component */
    "./src/app/xamin/components/title-section/title-section.component.ts");
    /* harmony import */


    var _components_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/check-list/check-list.component */
    "./src/app/xamin/components/check-list/check-list.component.ts");
    /* harmony import */


    var _components_progress_bar_right_percentage_progress_bar_right_percentage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/progress-bar-right-percentage/progress-bar-right-percentage.component */
    "./src/app/xamin/components/progress-bar-right-percentage/progress-bar-right-percentage.component.ts");
    /* harmony import */


    var _components_xamin_circle_xamin_circle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/xamin-circle/xamin-circle.component */
    "./src/app/xamin/components/xamin-circle/xamin-circle.component.ts");
    /* harmony import */


    var _components_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/services/services.component */
    "./src/app/xamin/components/services/services.component.ts");
    /* harmony import */


    var _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/nav-tabs/nav-tabs.component */
    "./src/app/xamin/components/nav-tabs/nav-tabs.component.ts");
    /* harmony import */


    var _components_portfolio_box_portfolio_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/portfolio-box/portfolio-box.component */
    "./src/app/xamin/components/portfolio-box/portfolio-box.component.ts");
    /* harmony import */


    var _components_service_box_service_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/service-box/service-box.component */
    "./src/app/xamin/components/service-box/service-box.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/xamin/components/about/about.component.ts");
    /* harmony import */


    var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/counter/counter.component */
    "./src/app/xamin/components/counter/counter.component.ts");
    /* harmony import */


    var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/customers/customers.component */
    "./src/app/xamin/components/customers/customers.component.ts");
    /* harmony import */


    var _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/testimonials/testimonials.component */
    "./src/app/xamin/components/testimonials/testimonials.component.ts");
    /* harmony import */


    var _components_blog_card_blog_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/blog-card/blog-card.component */
    "./src/app/xamin/components/blog-card/blog-card.component.ts");
    /* harmony import */


    var _components_top_banner_top_banner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/top-banner/top-banner.component */
    "./src/app/xamin/components/top-banner/top-banner.component.ts");
    /* harmony import */


    var _components_masonry_porfolio_box_masonry_porfolio_box_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/masonry-porfolio-box/masonry-porfolio-box.component */
    "./src/app/xamin/components/masonry-porfolio-box/masonry-porfolio-box.component.ts");
    /* harmony import */


    var _components_blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/blog-search/blog-search.component */
    "./src/app/xamin/components/blog-search/blog-search.component.ts");
    /* harmony import */


    var _components_blog_slider_blog_slider_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/blog-slider/blog-slider.component */
    "./src/app/xamin/components/blog-slider/blog-slider.component.ts");
    /* harmony import */


    var _components_blog_recent_post_blog_recent_post_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/blog-recent-post/blog-recent-post.component */
    "./src/app/xamin/components/blog-recent-post/blog-recent-post.component.ts");
    /* harmony import */


    var _components_blog_category_blog_category_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/blog-category/blog-category.component */
    "./src/app/xamin/components/blog-category/blog-category.component.ts");
    /* harmony import */


    var _components_blog_pagination_blog_pagination_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/blog-pagination/blog-pagination.component */
    "./src/app/xamin/components/blog-pagination/blog-pagination.component.ts");
    /* harmony import */


    var _components_team_team_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/team/team.component */
    "./src/app/xamin/components/team/team.component.ts");
    /* harmony import */


    var _components_about_two_about_two_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/about-two/about-two.component */
    "./src/app/xamin/components/about-two/about-two.component.ts");
    /* harmony import */


    var _components_about_card_about_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/about-card/about-card.component */
    "./src/app/xamin/components/about-card/about-card.component.ts");
    /* harmony import */


    var _components_blog_owl_blog_owl_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/blog-owl/blog-owl.component */
    "./src/app/xamin/components/blog-owl/blog-owl.component.ts");
    /* harmony import */


    var _components_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/card-one/card-one.component */
    "./src/app/xamin/components/card-one/card-one.component.ts");
    /* harmony import */


    var _components_choose_us_choose_us_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/choose-us/choose-us.component */
    "./src/app/xamin/components/choose-us/choose-us.component.ts");
    /* harmony import */


    var _components_project_portfolio_box_project_portfolio_box_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/project-portfolio-box/project-portfolio-box.component */
    "./src/app/xamin/components/project-portfolio-box/project-portfolio-box.component.ts");

    var XaminModule = function XaminModule() {
      _classCallCheck(this, XaminModule);
    };

    XaminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: XaminModule
    });
    XaminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function XaminModule_Factory(t) {
        return new (t || XaminModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](XaminModule, {
        declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_7__["TitleSectionComponent"], _components_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_8__["CheckListComponent"], _components_progress_bar_right_percentage_progress_bar_right_percentage_component__WEBPACK_IMPORTED_MODULE_9__["ProgressBarRightPercentageComponent"], _components_xamin_circle_xamin_circle_component__WEBPACK_IMPORTED_MODULE_10__["XaminCircleComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_12__["NavTabsComponent"], _components_portfolio_box_portfolio_box_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioBoxComponent"], _components_service_box_service_box_component__WEBPACK_IMPORTED_MODULE_14__["ServiceBoxComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_16__["CounterComponent"], _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_17__["CustomersComponent"], _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__["TestimonialsComponent"], _components_blog_card_blog_card_component__WEBPACK_IMPORTED_MODULE_19__["BlogCardComponent"], _components_top_banner_top_banner_component__WEBPACK_IMPORTED_MODULE_20__["TopBannerComponent"], _components_masonry_porfolio_box_masonry_porfolio_box_component__WEBPACK_IMPORTED_MODULE_21__["MasonryPorfolioBoxComponent"], _components_blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_22__["BlogSearchComponent"], _components_blog_slider_blog_slider_component__WEBPACK_IMPORTED_MODULE_23__["BlogSliderComponent"], _components_blog_recent_post_blog_recent_post_component__WEBPACK_IMPORTED_MODULE_24__["BlogRecentPostComponent"], _components_blog_category_blog_category_component__WEBPACK_IMPORTED_MODULE_25__["BlogCategoryComponent"], _components_blog_pagination_blog_pagination_component__WEBPACK_IMPORTED_MODULE_26__["BlogPaginationComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_27__["TeamComponent"], _components_about_two_about_two_component__WEBPACK_IMPORTED_MODULE_28__["AboutTwoComponent"], _components_about_card_about_card_component__WEBPACK_IMPORTED_MODULE_29__["AboutCardComponent"], _components_blog_owl_blog_owl_component__WEBPACK_IMPORTED_MODULE_30__["BlogOwlComponent"], _components_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_31__["CardOneComponent"], _components_choose_us_choose_us_component__WEBPACK_IMPORTED_MODULE_32__["ChooseUsComponent"], _components_project_portfolio_box_project_portfolio_box_component__WEBPACK_IMPORTED_MODULE_33__["ProjectPortfolioBoxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_7__["TitleSectionComponent"], _components_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_8__["CheckListComponent"], _components_progress_bar_right_percentage_progress_bar_right_percentage_component__WEBPACK_IMPORTED_MODULE_9__["ProgressBarRightPercentageComponent"], _components_xamin_circle_xamin_circle_component__WEBPACK_IMPORTED_MODULE_10__["XaminCircleComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], _components_service_box_service_box_component__WEBPACK_IMPORTED_MODULE_14__["ServiceBoxComponent"], _components_portfolio_box_portfolio_box_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioBoxComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_16__["CounterComponent"], _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_17__["CustomersComponent"], _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__["TestimonialsComponent"], _components_blog_card_blog_card_component__WEBPACK_IMPORTED_MODULE_19__["BlogCardComponent"], _components_top_banner_top_banner_component__WEBPACK_IMPORTED_MODULE_20__["TopBannerComponent"], _components_masonry_porfolio_box_masonry_porfolio_box_component__WEBPACK_IMPORTED_MODULE_21__["MasonryPorfolioBoxComponent"], _components_blog_pagination_blog_pagination_component__WEBPACK_IMPORTED_MODULE_26__["BlogPaginationComponent"], _components_blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_22__["BlogSearchComponent"], _components_blog_slider_blog_slider_component__WEBPACK_IMPORTED_MODULE_23__["BlogSliderComponent"], _components_blog_recent_post_blog_recent_post_component__WEBPACK_IMPORTED_MODULE_24__["BlogRecentPostComponent"], _components_blog_category_blog_category_component__WEBPACK_IMPORTED_MODULE_25__["BlogCategoryComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_27__["TeamComponent"], _components_about_card_about_card_component__WEBPACK_IMPORTED_MODULE_29__["AboutCardComponent"], _components_about_two_about_two_component__WEBPACK_IMPORTED_MODULE_28__["AboutTwoComponent"], _components_blog_owl_blog_owl_component__WEBPACK_IMPORTED_MODULE_30__["BlogOwlComponent"], _components_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_31__["CardOneComponent"], _components_choose_us_choose_us_component__WEBPACK_IMPORTED_MODULE_32__["ChooseUsComponent"], _components_project_portfolio_box_project_portfolio_box_component__WEBPACK_IMPORTED_MODULE_33__["ProjectPortfolioBoxComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XaminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_7__["TitleSectionComponent"], _components_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_8__["CheckListComponent"], _components_progress_bar_right_percentage_progress_bar_right_percentage_component__WEBPACK_IMPORTED_MODULE_9__["ProgressBarRightPercentageComponent"], _components_xamin_circle_xamin_circle_component__WEBPACK_IMPORTED_MODULE_10__["XaminCircleComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_12__["NavTabsComponent"], _components_portfolio_box_portfolio_box_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioBoxComponent"], _components_service_box_service_box_component__WEBPACK_IMPORTED_MODULE_14__["ServiceBoxComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_16__["CounterComponent"], _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_17__["CustomersComponent"], _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__["TestimonialsComponent"], _components_blog_card_blog_card_component__WEBPACK_IMPORTED_MODULE_19__["BlogCardComponent"], _components_top_banner_top_banner_component__WEBPACK_IMPORTED_MODULE_20__["TopBannerComponent"], _components_masonry_porfolio_box_masonry_porfolio_box_component__WEBPACK_IMPORTED_MODULE_21__["MasonryPorfolioBoxComponent"], _components_blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_22__["BlogSearchComponent"], _components_blog_slider_blog_slider_component__WEBPACK_IMPORTED_MODULE_23__["BlogSliderComponent"], _components_blog_recent_post_blog_recent_post_component__WEBPACK_IMPORTED_MODULE_24__["BlogRecentPostComponent"], _components_blog_category_blog_category_component__WEBPACK_IMPORTED_MODULE_25__["BlogCategoryComponent"], _components_blog_pagination_blog_pagination_component__WEBPACK_IMPORTED_MODULE_26__["BlogPaginationComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_27__["TeamComponent"], _components_about_two_about_two_component__WEBPACK_IMPORTED_MODULE_28__["AboutTwoComponent"], _components_about_card_about_card_component__WEBPACK_IMPORTED_MODULE_29__["AboutCardComponent"], _components_blog_owl_blog_owl_component__WEBPACK_IMPORTED_MODULE_30__["BlogOwlComponent"], _components_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_31__["CardOneComponent"], _components_choose_us_choose_us_component__WEBPACK_IMPORTED_MODULE_32__["ChooseUsComponent"], _components_project_portfolio_box_project_portfolio_box_component__WEBPACK_IMPORTED_MODULE_33__["ProjectPortfolioBoxComponent"]],
          exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_7__["TitleSectionComponent"], _components_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_8__["CheckListComponent"], _components_progress_bar_right_percentage_progress_bar_right_percentage_component__WEBPACK_IMPORTED_MODULE_9__["ProgressBarRightPercentageComponent"], _components_xamin_circle_xamin_circle_component__WEBPACK_IMPORTED_MODULE_10__["XaminCircleComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], _components_service_box_service_box_component__WEBPACK_IMPORTED_MODULE_14__["ServiceBoxComponent"], _components_portfolio_box_portfolio_box_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioBoxComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_16__["CounterComponent"], _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_17__["CustomersComponent"], _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__["TestimonialsComponent"], _components_blog_card_blog_card_component__WEBPACK_IMPORTED_MODULE_19__["BlogCardComponent"], _components_top_banner_top_banner_component__WEBPACK_IMPORTED_MODULE_20__["TopBannerComponent"], _components_masonry_porfolio_box_masonry_porfolio_box_component__WEBPACK_IMPORTED_MODULE_21__["MasonryPorfolioBoxComponent"], _components_blog_pagination_blog_pagination_component__WEBPACK_IMPORTED_MODULE_26__["BlogPaginationComponent"], _components_blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_22__["BlogSearchComponent"], _components_blog_slider_blog_slider_component__WEBPACK_IMPORTED_MODULE_23__["BlogSliderComponent"], _components_blog_recent_post_blog_recent_post_component__WEBPACK_IMPORTED_MODULE_24__["BlogRecentPostComponent"], _components_blog_category_blog_category_component__WEBPACK_IMPORTED_MODULE_25__["BlogCategoryComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_27__["TeamComponent"], _components_about_card_about_card_component__WEBPACK_IMPORTED_MODULE_29__["AboutCardComponent"], _components_about_two_about_two_component__WEBPACK_IMPORTED_MODULE_28__["AboutTwoComponent"], _components_blog_owl_blog_owl_component__WEBPACK_IMPORTED_MODULE_30__["BlogOwlComponent"], _components_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_31__["CardOneComponent"], _components_choose_us_choose_us_component__WEBPACK_IMPORTED_MODULE_32__["ChooseUsComponent"], _components_project_portfolio_box_project_portfolio_box_component__WEBPACK_IMPORTED_MODULE_33__["ProjectPortfolioBoxComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/constants/menu.js":
  /*!*******************************!*\
    !*** ./src/constants/menu.js ***!
    \*******************************/

  /*! exports provided: servicesMenu, topMenuBarItems */

  /***/
  function srcConstantsMenuJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "servicesMenu", function () {
      return servicesMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "topMenuBarItems", function () {
      return topMenuBarItems;
    });

    var topMenuBarItems = [{
      href: '/',
      title: 'Home  '
    }, {
      href: '/about-us',
      title: 'About Us '
    }, {
      href: '/clients',
      title: 'Clients'
    }, {
      href: '/portfolio',
      title: 'Portfolio '
    }, {
      href: '/services',
      title: 'Services '
    }, // {
    //   href: '/channel-partner',
    //   title: 'Become Partner '
    // },
    {
      href: '/contact-us',
      title: 'Contact Us '
    }];
    var servicesMenu = [{
      href: '/data-analytics',
      title: 'Data Analytics'
    }, {
      href: '/managed-analytics',
      title: 'Managed Analytics'
    }, {
      href: '/big-data-services',
      title: 'Big Data Services'
    }, {
      href: '/data-science-consulting',
      title: 'Data Science Consulting'
    }, {
      href: '/business-intelligence',
      title: 'Business Intelligence'
    }, {
      href: '/data-visualization-services',
      title: 'Data Visualization'
    }, {
      href: '/data-management',
      title: 'Data Management'
    }, {
      href: '/artificial-intelligence',
      title: 'Artificial Intelligence'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/chanakya/Work/arka11/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map