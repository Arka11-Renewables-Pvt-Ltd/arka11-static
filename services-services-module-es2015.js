(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "./src/app/services/components/about-us/about-us.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/components/about-us/about-us.component.ts ***!
  \********************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../xamin/components/title-section/title-section.component */ "./src/app/xamin/components/title-section/title-section.component.ts");
/* harmony import */ var _xamin_components_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../xamin/components/card-one/card-one.component */ "./src/app/xamin/components/card-one/card-one.component.ts");




class AboutUsComponent {
    constructor() {
        this.titleSectionProp = {
            title: 'ABOUT XAMIN',
            subTitle: 'Why Choose People Xamin',
            description: ''
        };
        this.List = [
            {
                img: "01.png",
                title: "Perfect Event",
                desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter"
            },
            {
                img: "02.png",
                title: "Perfect Event",
                desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter"
            },
            {
                img: "02.png",
                title: "Perfect Event",
                desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter"
            }
        ];
    }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 12, vars: 2, consts: [[1, "pt-0"], [1, "container"], [1, "row"], [1, "col-sm-12", "text-center"], [3, "titleSectionProp"], [1, "col-sm-12", "col-md-6"], [1, "single_image", "align_left"], [1, "box_border_grey"], ["src", "../../../../assets/images/about-us/01.png", "alt", "", "width", "550", "height", "360", 1, "single_image-img"], [3, "List"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-title-section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-card-one", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("List", ctx.List);
    } }, directives: [_xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__["TitleSectionComponent"], _xamin_components_card_one_card_one_component__WEBPACK_IMPORTED_MODULE_2__["CardOneComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/components/our-services/our-services.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/components/our-services/our-services.component.ts ***!
  \****************************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function OurServicesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.desc);
} }
class OurServicesComponent {
    constructor() {
        this.titleSectionProp = {
            title: 'Our Services',
            description: ''
        };
        // tslint:disable-next-line:max-line-length
        this.services = [
            {
                title: 'EPC & Development',
                desc: 'Arka11 is a comprehensive EPC solutions provider. It offers the expertise as well as the tools to commission and execute solar projects of any proportion on a turnkey basis from conceptualization to completion while catering to the custom requirements of clients. We offer solutions for residential, commercial, industrial and utility-scale projects. State of the art machinery to install & commission the projects. Use of high quality & reliable modules and Balance of Systems.'
            },
            {
                title: 'Installation and Commissioning ( I & C )',
                desc: `Arka11 offers peculiar, nimble, and reliable solar panels installation services. Our highly qualified team is known for their flawless work and timely delivery. We pride in 100 % transparency in all kinds of work and cater with perfectly customized solutions as per client's need and requirement. Arka11 always has a strong focus on the training and development of our workforce. This has been a clear company priority aimed at supporting our staff and providing high levels of both skill and service to our customers and clients. We are rigorous in ensuring high levels of expertise and commitment throughout our team. Safety is of prime importance and our methods are carried out in accordance with the Health and Safety regulations. Our operators are in-house trained on our specialist equipment to maintain the highest standards of safety.`
            },
            {
                title: 'Module Mounting Structure ( MMS )',
                desc: `Arka11 has a dedicated team focussed on design & supply of quality Module Mounting structures (Hot Dipped, Pre-Galvanized and Aluminium Micro rail systems. Quality & Reliability is at the heart of component design. All structures have been stress tested under harsh environmental conditions. Arka11 has the ability to quickly evaluate the feasibility, layouts, wind load resistance  and its costs to design/selection for   each new types of Roofs, Terrain and customer specifications. It is important to have a MMS manufacturer with high engineering competence as a partner.`
            },
            {
                title: 'Operations & Maintenance',
                desc: 'O&M services includes professional financial and physical asset management solutions, revenue assurance, ongoing maintenance and repairs, and complete operational solutions for PV assets across India. O&M services are designed to maximize the lifetime value of your solar power plant assets. Arka11 proactively monitors and manages solar plants to minimize downtime and increase site availability, resulting in maximum energy production, revenues, and profitability. Arka11 team operates and maintains solar power plants, offers monthly reports on generation and activities. It also provides project commissioning expertise along with developing a mechanism to retrieve and manage generation data.'
            },
            {
                title: 'Project Management',
                desc: 'Project Management ensures the system delivery in the best desired timeline, quality, and budget. This involves attention to details and coordination between different teams in terms of what steps to take next in the process. Project management tackles the methodology required for planning, scheduling, and managing resources including manpower and materials. Arka11 is qualified to prepare a plan that meets the requirements as specified in the contract with the PV system owners. Arka11 fully understand\'s the technical aspects of PV projects, which include procurement, planning, scheduling, engineering, integration, and commissioning.'
            },
            {
                title: 'Open Access',
                desc: 'Open Access model is for the industrial and commercial clients who want electricity directly from the generator at an optimum price. The customer pays for the electricity supplied to it directly from the generator under a long-term Power Purchase Agreement (PPA). The entire project is developed, constructed, and financed by Arka11. Only in the CAPEX model as per required regulations, the power off-taker is also required to invest in equity. The power is generated and sold to the off-taker under open access route at a pre-determined tariff. Clients pay for only the units they have consumed, ensuring savings from Day 1 of the operations.'
            }
        ];
    }
    ngOnInit() {
    }
}
OurServicesComponent.ɵfac = function OurServicesComponent_Factory(t) { return new (t || OurServicesComponent)(); };
OurServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurServicesComponent, selectors: [["app-our-services"]], decls: 5, vars: 1, consts: [[1, "main-content"], [1, "container"], [1, "row", "mt-4"], ["class", "col-sm-12 wow fadeInUp", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "wow", "fadeInUp"], [1, "mb-2"]], template: function OurServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OurServicesComponent_div_4_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-services',
                templateUrl: './our-services.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/components/our-testimonial/our-testimonial.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/services/components/our-testimonial/our-testimonial.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OurTestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTestimonialComponent", function() { return OurTestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../xamin/components/title-section/title-section.component */ "./src/app/xamin/components/title-section/title-section.component.ts");
/* harmony import */ var _xamin_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../xamin/components/testimonials/testimonials.component */ "./src/app/xamin/components/testimonials/testimonials.component.ts");




class OurTestimonialComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'Testimonials',
            subTitle: '100+ Companies are Using Xamin',
        };
    }
    ngOnInit() {
    }
}
OurTestimonialComponent.ɵfac = function OurTestimonialComponent_Factory(t) { return new (t || OurTestimonialComponent)(); };
OurTestimonialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurTestimonialComponent, selectors: [["app-our-testimonial"]], decls: 6, vars: 1, consts: [[1, "bg-with-image-home2"], [1, "container"], [1, "row"], [1, "col-sm-12", "wow", "fadeInUp"], [3, "titleSectionProp"]], template: function OurTestimonialComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);
    } }, directives: [_xamin_components_title_section_title_section_component__WEBPACK_IMPORTED_MODULE_1__["TitleSectionComponent"], _xamin_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__["TestimonialsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurTestimonialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-testimonial',
                templateUrl: './our-testimonial.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/index/index.component.ts":
/*!***************************************************!*\
  !*** ./src/app/services/index/index.component.ts ***!
  \***************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");
/* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
/* harmony import */ var _xamin_components_top_banner_top_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../xamin/components/top-banner/top-banner.component */ "./src/app/xamin/components/top-banner/top-banner.component.ts");
/* harmony import */ var _components_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/our-services/our-services.component */ "./src/app/services/components/our-services/our-services.component.ts");






class IndexComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_1__["topMenuBarItems"];
        this.data = {
            title: "Services",
            img: "../services/services.jpg"
        };
    }
    ngOnInit() {
        const current = this;
        setTimeout(function () {
            current.plugins.index();
        }, 200);
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 3, vars: 1, consts: [[3, "data"], [1, "main-content"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-our-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
    } }, directives: [_xamin_components_top_banner_top_banner_component__WEBPACK_IMPORTED_MODULE_3__["TopBannerComponent"], _components_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_4__["OurServicesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
            }]
    }], function () { return [{ type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xamin/xamin.module */ "./src/app/xamin/xamin.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/services/index/index.component.ts");
/* harmony import */ var _components_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/our-services/our-services.component */ "./src/app/services/components/our-services/our-services.component.ts");
/* harmony import */ var _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/our-testimonial/our-testimonial.component */ "./src/app/services/components/our-testimonial/our-testimonial.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/services/components/about-us/about-us.component.ts");










const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
    }
];
class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_3__["XaminModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _components_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_5__["OurServicesComponent"], _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_6__["OurTestimonialComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_3__["XaminModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _components_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_5__["OurServicesComponent"], _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_6__["OurTestimonialComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_3__["XaminModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=services-services-module-es2015.js.map