(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9enj":function(t,o,i){"use strict";i.r(o),i.d(o,"PortFolioModule",(function(){return D}));var e=i("ofXK"),s=i("tyNb"),l=i("tk/3"),n=i("HNbZ"),a=i("fXoL"),b=i("GjwS"),r=i("eLEA"),c=i("FQDc");function p(t,o){if(1&t&&(a.Rb(0,"button",15),a.rc(1,"Rooftop"),a.Rb(2,"span",8),a.rc(3),a.Qb(),a.Qb()),2&t){const t=a.bc(2);a.zb(3),a.sc(t.serviceType.rooftop)}}function f(t,o){if(1&t&&(a.Rb(0,"button",16),a.rc(1,"Commercial"),a.Rb(2,"span",8),a.rc(3),a.Qb(),a.Qb()),2&t){const t=a.bc(2);a.zb(3),a.sc(t.serviceType.commercial)}}function d(t,o){if(1&t&&(a.Rb(0,"button",17),a.rc(1,"Solar Plant"),a.Rb(2,"span",8),a.rc(3),a.Qb(),a.Qb()),2&t){const t=a.bc(2);a.zb(3),a.sc(t.serviceType.solarPlant)}}function u(t,o){if(1&t&&(a.Rb(0,"button",18),a.rc(1,"Others"),a.Rb(2,"span",8),a.rc(3),a.Qb(),a.Qb()),2&t){const t=a.bc(2);a.zb(3),a.sc(t.serviceType.others)}}function m(t,o){if(1&t&&(a.Rb(0,"div",3),a.Rb(1,"div",4),a.Rb(2,"div",5),a.Rb(3,"div",6),a.Rb(4,"button",7),a.rc(5,"All"),a.Rb(6,"span",8),a.rc(7),a.Qb(),a.Qb(),a.qc(8,p,4,1,"button",9),a.qc(9,f,4,1,"button",10),a.qc(10,d,4,1,"button",11),a.qc(11,u,4,1,"button",12),a.Qb(),a.Rb(12,"div",13),a.Nb(13,"app-portfolio-box",14),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&t){const t=a.bc();a.zb(7),a.sc(t.List.length),a.zb(1),a.ec("ngIf",t.serviceType.rooftop>0),a.zb(1),a.ec("ngIf",t.serviceType.commercial>0),a.zb(1),a.ec("ngIf",t.serviceType.solarPlant>0),a.zb(1),a.ec("ngIf",t.serviceType.others>0),a.zb(2),a.ec("portfolioList",t.List)}}let R=(()=>{class t{constructor(t){this.httpClient=t,this.List=[],this.serviceType={rooftop:0,commercial:0,solarPlant:0,others:0}}ngOnInit(){this.httpClient.get("assets/portfolio-data.json").subscribe(t=>{console.log(t),this.List=t,this.List.forEach(t=>{switch(t.type){case"Rooftop":this.serviceType.rooftop++;break;case"Commercial":this.serviceType.commercial++;break;case"SolarPlant":this.serviceType.solarPlant++;break;default:this.serviceType.others++}})})}}return t.\u0275fac=function(o){return new(o||t)(a.Mb(l.a))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-portfolios"]],decls:4,vars:1,consts:[[1,"main-content"],[1,"container"],["class","row wow fadeInUp",4,"ngIf"],[1,"row","wow","fadeInUp"],[1,"col-sm-12"],["id","ark-portfolio",1,"iq-masonry-block"],[1,"isotope-filters","isotope-tooltip"],["data-filter","",1,"active"],[1,"post_no"],["data-filter",".rooftop",4,"ngIf"],["data-filter",".commercial",4,"ngIf"],["data-filter",".solar-plant",4,"ngIf"],["data-filter",".others",4,"ngIf"],[1,"iq-masonry","iq-columns-3"],[3,"portfolioList"],["data-filter",".rooftop"],["data-filter",".commercial"],["data-filter",".solar-plant"],["data-filter",".others"]],template:function(t,o){1&t&&(a.Rb(0,"div",0),a.Rb(1,"section"),a.Rb(2,"div",1),a.qc(3,m,14,6,"div",2),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.zb(3),a.ec("ngIf",(null==o.List?null:o.List.length)>0))},directives:[e.k,c.a],encapsulation:2}),t})(),Q=(()=>{class t{constructor(t){this.plugins=t,this.navItems=n.a,this.data={title:"Portfolio",img:"../portfolio/portfolio.png"}}ngOnInit(){const t=this;setTimeout((function(){t.plugins.index()}),200)}}return t.\u0275fac=function(o){return new(o||t)(a.Mb(b.a))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-index"]],decls:3,vars:1,consts:[[3,"data"],[1,"main-content"]],template:function(t,o){1&t&&(a.Nb(0,"app-top-banner",0),a.Rb(1,"div",1),a.Nb(2,"app-portfolios"),a.Qb()),2&t&&a.ec("data",o.data)},directives:[r.a,R],encapsulation:2}),t})();var h=i("S1zk");function g(t,o){if(1&t&&(a.Rb(0,"li",10),a.Rb(1,"span",11),a.rc(2,"Website :"),a.Qb(),a.Rb(3,"span"),a.Rb(4,"a",22),a.rc(5),a.Qb(),a.Qb(),a.Qb()),2&t){const t=a.bc();a.zb(4),a.ec("href",null==t.portfolioDetails?null:t.portfolioDetails.clientInfo.website,a.oc),a.zb(1),a.sc(null==t.portfolioDetails?null:t.portfolioDetails.clientInfo.website)}}function v(t,o){if(1&t&&(a.Pb(0),a.Rb(1,"div",28),a.Nb(2,"img",29),a.Qb(),a.Ob()),2&t){const t=o.$implicit;a.zb(2),a.gc("src","../../../../assets/images/portfolio/",t,"",a.oc)}}function w(t,o){if(1&t&&(a.Pb(0),a.Rb(1,"div",23),a.Rb(2,"div",24),a.Rb(3,"div",25),a.qc(4,v,3,1,"ng-container",26),a.Qb(),a.Qb(),a.Rb(5,"div",27),a.Rb(6,"p"),a.rc(7),a.Qb(),a.Qb(),a.Qb(),a.Ob()),2&t){const t=a.bc();a.zb(4),a.ec("ngForOf",t.portfolioDetails.images),a.zb(3),a.sc(null==t.portfolioDetails?null:t.portfolioDetails.description)}}const y=[{path:"",component:Q},{path:"portfolio-details/:p_id",component:(()=>{class t{constructor(t,o,i,e){this.httpClient=t,this.route=o,this.router=i,this.plugins=e,this.data={title:"Portfolio Details"},this.List=[],this.index=this.route.snapshot.params.p_id}ngOnInit(){const t=this;setTimeout((function(){t.plugins.index()}),200),this.httpClient.get("assets/portfolio-data.json").subscribe(t=>{this.List=t,this.portfolioDetails=this.List[this.index],this.data.img="../portfolio/"+this.portfolioDetails.img})}}return t.\u0275fac=function(o){return new(o||t)(a.Mb(l.a),a.Mb(s.a),a.Mb(s.c),a.Mb(b.a))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-portfolio-details"]],decls:45,vars:9,consts:[[3,"data"],["id","ark-portfolio-details",1,"main-content"],[1,"pb-0"],[1,"container"],[1,"row","mb-5"],[1,"col-lg-6","col-sm-12","mt-4","mt-lg-0"],[1,"mb-4"],[1,"col-lg-6","col-sm-12"],[1,"portfolio-detail-box","iq-rmb-45"],[1,"list-inline","portfolio-detail","mb-1"],[1,"list-inline-item"],[1,"lead"],["class","list-inline-item",4,"ngIf"],[4,"ngIf"],[1,"row","row-fluid"],[1,"fadeInUp","col-sm-12","animated"],[1,"title-box","wow","fadeInUp","text-center"],[1,"title-design"],[1,"col-md-12"],[1,"iq-masonry-block"],[1,"iq-masonry","iq-columns-3"],[3,"portfolioList"],["target","_blank",3,"href"],[1,"row"],[1,"col-sm-12"],["data-dots","false","data-nav","true","data-items","1","data-items-laptop","1","data-items-tab","1","data-items-mobile","1","data-items-mobile-sm","1","data-autoplay","true","data-loop","true","data-margin","30",1,"owl-carousel","owl-loaded","owl-drag"],[4,"ngFor","ngForOf"],[1,"col-sm-12","mt-5"],[1,"Consulting-img","text-left"],["alt","slider","calss","port-carousel-height",3,"src"]],template:function(t,o){1&t&&(a.Nb(0,"app-top-banner",0),a.Rb(1,"div",1),a.Rb(2,"section",2),a.Rb(3,"div",3),a.Rb(4,"div",4),a.Rb(5,"div",5),a.Rb(6,"h3",6),a.rc(7),a.Qb(),a.Qb(),a.Nb(8,"div",5),a.Rb(9,"div",5),a.Rb(10,"p"),a.rc(11),a.Qb(),a.Qb(),a.Rb(12,"div",7),a.Rb(13,"div",8),a.Rb(14,"ul",9),a.Rb(15,"li",10),a.Rb(16,"span",11),a.rc(17,"Client :"),a.Qb(),a.Rb(18,"span"),a.rc(19),a.Qb(),a.Qb(),a.Rb(20,"li",10),a.Rb(21,"span",11),a.rc(22,"Category :"),a.Qb(),a.Rb(23,"span"),a.rc(24),a.Qb(),a.Qb(),a.qc(25,g,6,2,"li",12),a.Rb(26,"li",10),a.Rb(27,"span",11),a.rc(28,"Date :"),a.Qb(),a.Rb(29,"span"),a.rc(30),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.qc(31,w,8,2,"ng-container",13),a.Qb(),a.Qb(),a.Rb(32,"section"),a.Rb(33,"div",3),a.Rb(34,"div",14),a.Rb(35,"div",15),a.Rb(36,"div",16),a.Rb(37,"span",17),a.rc(38,"OUR PROJECTS"),a.Qb(),a.Rb(39,"h2"),a.rc(40,"Recent Portfolio"),a.Qb(),a.Qb(),a.Qb(),a.Rb(41,"div",18),a.Rb(42,"div",19),a.Rb(43,"div",20),a.Nb(44,"app-portfolio-box",21),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.ec("data",o.data),a.zb(7),a.sc(null==o.portfolioDetails?null:o.portfolioDetails.title),a.zb(4),a.sc(null==o.portfolioDetails?null:o.portfolioDetails.subtitle),a.zb(8),a.sc(null==o.portfolioDetails?null:o.portfolioDetails.clientInfo.name),a.zb(5),a.sc(null==o.portfolioDetails?null:o.portfolioDetails.type),a.zb(1),a.ec("ngIf",null==o.portfolioDetails?null:o.portfolioDetails.clientInfo.website),a.zb(5),a.sc(null==o.portfolioDetails?null:o.portfolioDetails.date),a.zb(1),a.ec("ngIf",(null==o.portfolioDetails||null==o.portfolioDetails.images?null:o.portfolioDetails.images.length)>0),a.zb(13),a.ec("portfolioList",o.List.slice(0,3)))},directives:[r.a,e.k,c.a,e.j],encapsulation:2}),t})()}];let D=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(o){return new(o||t)},imports:[[e.b,l.b,s.f.forChild(y),h.a]]}),t})()}}]);