function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(e);if(t){var s=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,s=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){s=!0,a=u}finally{try{n||null==i.return||i.return()}finally{if(s)throw a}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{eLEA:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("fXoL"),s=r("tyNb"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["app-top-banner"]],inputs:{data:"data"},decls:13,vars:2,consts:[[1,"text-left","iq-breadcrumb-one","iq-bg-over","black"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-8","col-md-8","text-left","align-self-center"],["aria-label","breadcrumb",1,"text-left"],[1,"title"],[1,"breadcrumb","main-bg"],[1,"breadcrumb-item"],["routerLink","/"],[1,"breadcrumb-item","active"]],template:function(e,t){1&e&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"div",2),n.Rb(3,"div",3),n.Rb(4,"nav",4),n.Rb(5,"h2",5),n.rc(6),n.Qb(),n.Rb(7,"ol",6),n.Rb(8,"li",7),n.Rb(9,"a",8),n.rc(10,"Home"),n.Qb(),n.Qb(),n.Rb(11,"li",9),n.rc(12),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&e&&(n.zb(6),n.sc(t.data.title),n.zb(6),n.sc(t.data.title))},directives:[s.e],encapsulation:2}),e}()},"tk/3":function(e,t,r){"use strict";r.d(t,"a",(function(){return R})),r.d(t,"b",(function(){return V})),r.d(t,"c",(function(){return d}));var n=r("fXoL"),s=r("LRne"),a=r("HDdC"),o=r("bOdf"),i=r("pLZG"),u=r("lJxs"),l=r("ofXK"),c=function e(){_classCallCheck(this,e)},h=function e(){_classCallCheck(this,e)},d=function(){function e(t){var r=this;_classCallCheck(this,e),this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){r.headers=new Map,t.split("\n").forEach((function(e){var t=e.indexOf(":");if(t>0){var n=e.slice(0,t),s=n.toLowerCase(),a=e.slice(t+1).trim();r.maybeSetNormalizedName(n,s),r.headers.has(s)?r.headers.get(s).push(a):r.headers.set(s,[a])}}))}:function(){r.headers=new Map,Object.keys(t).forEach((function(e){var n=t[e],s=e.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(r.headers.set(s,n),r.maybeSetNormalizedName(e,s))}))}:this.headers=new Map}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((function(e){return t.applyUpdate(e)})),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach((function(r){t.headers.set(r,e.headers.get(r)),t.normalizedNames.set(r,e.normalizedNames.get(r))}))}},{key:"clone",value:function(t){var r=new e;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([t]),r}},{key:"applyUpdate",value:function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);var n=("a"===e.op?this.headers.get(t):void 0)||[];n.push.apply(n,_toConsumableArray(r)),this.headers.set(t,n);break;case"d":var s=e.value;if(s){var a=this.headers.get(t);if(!a)return;0===(a=a.filter((function(e){return-1===s.indexOf(e)}))).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}else this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach((function(r){return e(t.normalizedNames.get(r),t.headers.get(r))}))}}]),e}(),f=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"encodeKey",value:function(e){return p(e)}},{key:"encodeValue",value:function(e){return p(e)}},{key:"decodeKey",value:function(e){return decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return decodeURIComponent(e)}}]),e}();function p(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var y=function(){function e(){var t,r,n,s=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(_classCallCheck(this,e),this.updates=null,this.cloneFrom=null,this.encoder=a.encoder||new f,a.fromString){if(a.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(t=a.fromString,r=this.encoder,n=new Map,t.length>0&&t.split("&").forEach((function(e){var t=e.indexOf("="),s=_slicedToArray(-1==t?[r.decodeKey(e),""]:[r.decodeKey(e.slice(0,t)),r.decodeValue(e.slice(t+1))],2),a=s[0],o=s[1],i=n.get(a)||[];i.push(o),n.set(a,i)})),n)}else a.fromObject?(this.map=new Map,Object.keys(a.fromObject).forEach((function(e){var t=a.fromObject[e];s.map.set(e,Array.isArray(t)?t:[t])}))):this.map=null}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var e=this;return this.init(),this.keys().map((function(t){var r=e.encoder.encodeKey(t);return e.map.get(t).map((function(t){return r+"="+e.encoder.encodeValue(t)})).join("&")})).filter((function(e){return""!==e})).join("&")}},{key:"clone",value:function(t){var r=new e({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat([t]),r}},{key:"init",value:function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((function(t){return e.map.set(t,e.cloneFrom.map.get(t))})),this.updates.forEach((function(t){switch(t.op){case"a":case"s":var r=("a"===t.op?e.map.get(t.param):void 0)||[];r.push(t.value),e.map.set(t.param,r);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var n=e.map.get(t.param)||[],s=n.indexOf(t.value);-1!==s&&n.splice(s,1),n.length>0?e.map.set(t.param,n):e.map.delete(t.param)}})),this.cloneFrom=this.updates=null)}}]),e}();function v(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function b(e){return"undefined"!=typeof Blob&&e instanceof Blob}function m(e){return"undefined"!=typeof FormData&&e instanceof FormData}var g=function(){function e(t,r,n,s){var a;if(_classCallCheck(this,e),this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==n?n:null,a=s):a=n,a&&(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.params&&(this.params=a.params)),this.headers||(this.headers=new d),this.params){var o=this.params.toString();if(0===o.length)this.urlWithParams=r;else{var i=r.indexOf("?");this.urlWithParams=r+(-1===i?"?":i<r.length-1?"&":"")+o}}else this.params=new y,this.urlWithParams=r}return _createClass(e,[{key:"serializeBody",value:function(){return null===this.body?null:v(this.body)||b(this.body)||m(this.body)||"string"==typeof this.body?this.body:this.body instanceof y?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return null===this.body||m(this.body)?null:b(this.body)?this.body.type||null:v(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof y?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,a=void 0!==t.body?t.body:this.body,o=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,i=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,l=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((function(e,r){return e.set(r,t.setHeaders[r])}),u)),t.setParams&&(l=Object.keys(t.setParams).reduce((function(e,r){return e.set(r,t.setParams[r])}),l)),new e(r,n,a,{params:l,headers:u,reportProgress:i,responseType:s,withCredentials:o})}}]),e}(),k=function(){var e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}(),C=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK";_classCallCheck(this,e),this.headers=t.headers||new d,this.status=void 0!==t.status?t.status:r,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300},w=function(e){_inherits(r,e);var t=_createSuper(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,r),(e=t.call(this,n)).type=k.ResponseHeader,e}return _createClass(r,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new r({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),r}(C),_=function(e){_inherits(r,e);var t=_createSuper(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,r),(e=t.call(this,n)).type=k.Response,e.body=void 0!==n.body?n.body:null,e}return _createClass(r,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new r({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),r}(C),T=function(e){_inherits(r,e);var t=_createSuper(r);function r(e){var n;return _classCallCheck(this,r),(n=t.call(this,e,0,"Unknown Error")).name="HttpErrorResponse",n.ok=!1,n.message=n.status>=200&&n.status<300?"Http failure during parsing for ".concat(e.url||"(unknown url)"):"Http failure response for ".concat(e.url||"(unknown url)",": ").concat(e.status," ").concat(e.statusText),n.error=e.error||null,n}return r}(C);function O(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var R=function(){var e=function(){function e(t){_classCallCheck(this,e),this.handler=t}return _createClass(e,[{key:"request",value:function(e,t){var r,n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof g)r=e;else{var l=void 0;l=a.headers instanceof d?a.headers:new d(a.headers);var c=void 0;a.params&&(c=a.params instanceof y?a.params:new y({fromObject:a.params})),r=new g(e,t,void 0!==a.body?a.body:null,{headers:l,params:c,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials})}var h=Object(s.a)(r).pipe(Object(o.a)((function(e){return n.handler.handle(e)})));if(e instanceof g||"events"===a.observe)return h;var f=h.pipe(Object(i.a)((function(e){return e instanceof _})));switch(a.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return f.pipe(Object(u.a)((function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body})));case"blob":return f.pipe(Object(u.a)((function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body})));case"text":return f.pipe(Object(u.a)((function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body})));case"json":default:return f.pipe(Object(u.a)((function(e){return e.body})))}case"response":return f;default:throw new Error("Unreachable: unhandled observe type ".concat(a.observe,"}"))}}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,t)}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return this.request("JSONP",e,{params:(new y).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",e,O(r,t))}},{key:"post",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,O(r,t))}},{key:"put",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",e,O(r,t))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Vb(c))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e}(),E=function(){function e(t,r){_classCallCheck(this,e),this.next=t,this.interceptor=r}return _createClass(e,[{key:"handle",value:function(e){return this.interceptor.intercept(e,this.next)}}]),e}(),A=new n.q("HTTP_INTERCEPTORS"),P=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"intercept",value:function(e,t){return t.handle(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e}(),S=/^\)\]\}',?\n/,x=function e(){_classCallCheck(this,e)},j=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"build",value:function(){return new XMLHttpRequest}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e}(),N=function(){var e=function(){function e(t){_classCallCheck(this,e),this.xhrFactory=t}return _createClass(e,[{key:"handle",value:function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new a.a((function(r){var n=t.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((function(e,t){return n.setRequestHeader(e,t.join(","))})),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var s=e.detectContentTypeHeader();null!==s&&n.setRequestHeader("Content-Type",s)}if(e.responseType){var a=e.responseType.toLowerCase();n.responseType="json"!==a?a:"text"}var o=e.serializeBody(),i=null,u=function(){if(null!==i)return i;var t=1223===n.status?204:n.status,r=n.statusText||"OK",s=new d(n.getAllResponseHeaders()),a=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(n)||e.url;return i=new w({headers:s,status:t,statusText:r,url:a})},l=function(){var t=u(),s=t.headers,a=t.status,o=t.statusText,i=t.url,l=null;204!==a&&(l=void 0===n.response?n.responseText:n.response),0===a&&(a=l?200:0);var c=a>=200&&a<300;if("json"===e.responseType&&"string"==typeof l){var h=l;l=l.replace(S,"");try{l=""!==l?JSON.parse(l):null}catch(d){l=h,c&&(c=!1,l={error:d,text:l})}}c?(r.next(new _({body:l,headers:s,status:a,statusText:o,url:i||void 0})),r.complete()):r.error(new T({error:l,headers:s,status:a,statusText:o,url:i||void 0}))},c=function(e){var t=u().url,s=new T({error:e,status:n.status||0,statusText:n.statusText||"Unknown Error",url:t||void 0});r.error(s)},h=!1,f=function(t){h||(r.next(u()),h=!0);var s={type:k.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(s.total=t.total),"text"===e.responseType&&n.responseText&&(s.partialText=n.responseText),r.next(s)},p=function(e){var t={type:k.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),r.next(t)};return n.addEventListener("load",l),n.addEventListener("error",c),e.reportProgress&&(n.addEventListener("progress",f),null!==o&&n.upload&&n.upload.addEventListener("progress",p)),n.send(o),r.next({type:k.Sent}),function(){n.removeEventListener("error",c),n.removeEventListener("load",l),e.reportProgress&&(n.removeEventListener("progress",f),null!==o&&n.upload&&n.upload.removeEventListener("progress",p)),n.abort()}}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Vb(x))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e}(),I=new n.q("XSRF_COOKIE_NAME"),L=new n.q("XSRF_HEADER_NAME"),z=function e(){_classCallCheck(this,e)},H=function(){var e=function(){function e(t,r,n){_classCallCheck(this,e),this.doc=t,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return _createClass(e,[{key:"getToken",value:function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(l.r)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Vb(l.d),n.Vb(n.B),n.Vb(I))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e}(),U=function(){var e=function(){function e(t,r){_classCallCheck(this,e),this.tokenService=t,this.headerName=r}return _createClass(e,[{key:"intercept",value:function(e,t){var r=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return t.handle(e);var n=this.tokenService.getToken();return null===n||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,n)})),t.handle(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Vb(z),n.Vb(L))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e}(),F=function(){var e=function(){function e(t,r){_classCallCheck(this,e),this.backend=t,this.injector=r,this.chain=null}return _createClass(e,[{key:"handle",value:function(e){if(null===this.chain){var t=this.injector.get(A,[]);this.chain=t.reduceRight((function(e,t){return new E(e,t)}),this.backend)}return this.chain.handle(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Vb(h),n.Vb(n.r))},e.\u0275prov=n.Ib({token:e,factory:e.\u0275fac}),e}(),q=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"disable",value:function(){return{ngModule:e,providers:[{provide:U,useClass:P}]}}},{key:"withOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[t.cookieName?{provide:I,useValue:t.cookieName}:[],t.headerName?{provide:L,useValue:t.headerName}:[]]}}}]),e}();return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},providers:[U,{provide:A,useExisting:U,multi:!0},{provide:z,useClass:H},{provide:I,useValue:"XSRF-TOKEN"},{provide:L,useValue:"X-XSRF-TOKEN"}]}),e}(),V=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},providers:[R,{provide:c,useClass:F},N,{provide:h,useExisting:N},j,{provide:x,useExisting:j}],imports:[[q.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e}()}}]);