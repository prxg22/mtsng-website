parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LTbr":[function(require,module,exports) {
!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?v.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;v.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===d(o);)o=o.parentNode||o.host;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(v.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(o){var t=p(o,"Y")&&a(o,"Y"),l=p(o,"X")&&a(o,"X");return t||l}function h(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(h.bind(o,t))}function v(l,e,r){var c,f,p,a,d=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),h({scrollable:c,method:a,startTime:d,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();
},{}],"cGsR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"header",o=document.querySelector(e),s=!1,t=function(){s=!0,o.classList.add("open"),o.classList.remove("close")},c=function(){s=!1,o.scrollTo(0,0),o.classList.remove("open"),o.classList.add("close")};return{open:t,close:c,toggle:function(){var e=s?"close":"open";s=!s,{open:t,close:c}[e]()}}},o=e;exports.default=o;
},{}],"chxP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,n){var t=n.onClick,o=(n.onMouseEnter,n.onMouseLeave,document.createElement("button"));return o.innerText="next"===e?">":"<",o.classList.add(e),o.onclick=function(n){t(e,n)},o},n=function(n){var t,o={prev:!1,next:!1},r=n.querySelector(".gallery__container"),i=(n.querySelectorAll("img"),document.createElement("div"));i.classList.add("preview-container");var d=document.createElement("p");i.appendChild(d),d.classList.add("label");var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next";o[e]||window.innerWidth<1024||(o[e]=!0,n.appendChild(t[e]))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next";o[e]&&(o[e]=!1,n.removeChild(t[e]))},a=function(){var e="next"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next")?1:-1;r.scrollBy({left:r.clientWidth*e,behavior:"smooth"})},u=function(e){27===e.keyCode&&v({target:i})},v=function(e){if(e.target===i){var n=i.querySelector("img");i.removeChild(n),document.body.removeEventListener("keydown",u),document.body.removeChild(i)}},s=function(e){var n=e.target;if("IMG"===n.nodeName){i.appendChild(n.cloneNode()),i.onclick=v;var t=n.getAttribute("alt");d.innerText=t,document.body.addEventListener("keydown",u),document.body.appendChild(i)}};return{load:function(){t={next:e("next",{onClick:a}),prev:e("prev",{onClick:a})},n.onmouseenter=function(){return c("prev")||c("next")},n.onmouseleave=function(){return l("prev")||l("next")},n.onclick=s}}},t=n;exports.default=t;
},{}],"N8YO":[function(require,module,exports) {
"use strict";function t(t){return n(t)||r(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function n(t){if(Array.isArray(t)){for(var o=0,r=new Array(t.length);o<t.length;o++)r[o]=t[o];return r}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(o){var r=[],n=[],e=function(t,o){return t.style.opacity=o};return o.onscroll=function(){var t=r.length;r.forEach(function(r,n){var c=o.scrollHeight-o.clientHeight;if(n===t-1&&o.scrollTop>=c)e(r,"1");else{var i=r.offsetTop,a=o.scrollTop-i;e(r,"".concat(1+a/500))}}),t=n.length,n.forEach(function(t,r){if(o.scrollTop<=0)e(t,"1");else{var n=t.getBoundingClientRect().top-o.scrollTop;e(t,"opacity: ".concat(n/500-1))}})},{show:function(o){r=[].concat(t(r),t(o))},fade:function(o){n=[].concat(t(n),t(o))}}},c=e;exports.default=c;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=l(require("smoothscroll-polyfill")),r=l(require("./header")),o=l(require("./gallery")),t=l(require("./scroll"));function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return a(e)||u(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(e){if(Array.isArray(e)){for(var r=0,o=new Array(e.length);r<e.length;r++)o[r]=e[r];return o}}window.onload=function(){var l=(0,r.default)("header"),c=document.querySelector("header nav"),u=document.querySelectorAll("header nav a"),a=document.querySelector("#menu_btn"),i=document.querySelector("a#logo"),f=document.querySelector("main"),d=document.querySelector("#cover").querySelector("#cover .mouse-icon path"),s=document.querySelectorAll("section"),y=document.querySelectorAll("#work article"),m=[];e.default.polyfill();a.onclick=function(){l.toggle()},c.onclick=function(e){var r=e.target;if(Array.prototype.slice.call(u).includes(r)){e.preventDefault();var o=r.attributes.href.value,t=document.querySelector(o);l.close(),t.scrollIntoView({behavior:"smooth"})}},i.onclick=function(e){e.preventDefault();var r=document.querySelector("#cover");l.close(),r.scrollIntoView({behavior:"smooth"})},document.querySelectorAll(".gallery").forEach(function(e){var r=(0,o.default)(e);m.push(r),r.load()}),window.onresize=function(){m.forEach(function(e){e.load()})};var v=(0,t.default)(f),h=v.show,q=v.fade;h([].concat(n(Array.from(s)),n(Array.from(y)))),q([d]),f.classList.remove("locked")};
},{"smoothscroll-polyfill":"LTbr","./header":"cGsR","./gallery":"chxP","./scroll":"N8YO"}]},{},["QvaY"], null)