parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cGsR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"header",o=document.querySelector(e),t=!1,n=function(){t=!0,o.classList.add("open")},r=function(){t=!1,o.classList.remove("open")};return{open:n,close:r,toggle:function(){var e=t?"close":"open";t=!t,{open:n,close:r}[e]()}}},o=e;exports.default=o;
},{}],"chxP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t){var e,n,o=!1,r=function(){e=t.clientWidth},i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next";r();var o="next"===n?1:-1;t.scrollLeft+=o*e};return{load:function(){r(),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next",e=document.createElement("button");return e.innerText="next"===t?">":"<",e.classList.add(t),e.onclick=function(){i(t)},e}(),t.onmouseenter=function(){t.scrollLeft<=0&&!o&&(o=!0,t.appendChild(n))}}}},e=t;exports.default=e;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=r(require("./header")),o=r(require("./gallery"));function r(e){return e&&e.__esModule?e:{default:e}}window.onload=function(){var r=(0,e.default)("header"),c=document.querySelector("header nav"),n=document.querySelectorAll("header nav a"),t=document.querySelector("#menu_btn"),u=document.querySelector("a#logo"),l=(document.querySelector("main"),document.querySelector("#cover"),[]);t.onclick=function(){r.toggle()},c.onclick=function(e){var o=e.target;Array.prototype.slice.call(n).includes(o)&&r.close()},u.onclick=function(e){e.currentTarget===u&&r.close()},document.querySelectorAll(".gallery").forEach(function(e){var r=(0,o.default)(e);l.push(r),r.load()}),window.onresize=function(){l.forEach(function(e){e.load()})}};
},{"./header":"cGsR","./gallery":"chxP"}]},{},["QvaY"], null)