/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/HerrVonMuellerhoff-Regular.ttf */ "./src/resources/HerrVonMuellerhoff-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/Montserrat-VariableFont_wght.ttf */ "./src/resources/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! resources/寺院.png */ "./src/resources/寺院.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Custom CSS below */\n\n@font-face {\n  font-family: herrVonMuellerhoff;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: Montserrat;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Montserrat;\n}\n\n\n#page {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.header {\n  display: flex;\n  gap: 2em;\n  font-size: 18px;\n  background-color: #ef4444;\n  padding: 0.2em;\n}\n\n.phone {\n  margin-left: 20em;\n}\n\n.email,\n.phone,\n.social-media,\n.message-us,\n.times {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 8em;\n  color: white;\n  background-image: linear-gradient(to right, rgba(250, 250, 250, 0.9), rgba(25, 25, 25, 0.4) 60%);\n  transition: 1s;\n}\n\n.nav-logo {\n  margin-left: 1em;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.nav-tabs {\n  margin-right: 5em;\n  display: flex;\n  gap: 5em;\n  font-size: 28px;\n}\n\n#home,\n#menu,\n#contact {\n  display: inline-block;\n  position: relative;\n  transition: 0.25s;\n}\n\n#home:hover,\n#menu:hover,\n#contact:hover {\n  color: #ef4444;\n}\n\n#home:after,\n#menu:after,\n#contact:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 3px;\n  bottom: 0;\n  left: 0;\n  background-color: #e6b977;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n\n#home:hover:after,\n#menu:hover:after,\n#contact:hover:after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.title {\n  margin-top: 2em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 60px;\n  color: white;\n}\n\n.title-cursive {\n  font-family: herrVonMuellerhoff;\n  font-size: 110px;\n  margin-bottom: -0.2em;\n  color: #e6b977;\n\n}\n\n.title-line {\n  border-top: 5px solid #e6b977;\n  width: 8em;\n\n}\n\n.description {\n  font-size: 30px;\n  text-align: center;\n  color: white;\n}\n\n#contact-link {\n  font-size: 20px;\n  margin-top: 2em;\n  padding: 15px;\n  border: none;\n  border-radius: 5px;\n  background-color: #e6b977;\n  transition: 0.35s;\n}\n\n#contact-link:hover {\n  font-size: 25px;\n  margin-top: 1.5em;\n  color: white;\n  background-color: #ef4444;\n}\n\n.footer {\n  margin-top: auto;\n  padding: 0.25em;\n  padding-left: 10em;\n  padding-right: 10em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(250, 250, 250);\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  margin-top: 4em;\n  font-size: 60px;\n  color: white;\n}\n\n.contact-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contact-title {\n  margin-top: 1.5em;\n  font-size: 40px;\n  text-align: center;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1.5em;\n  padding: 2em;\n  gap: 1em;\n  background-color: lightgray;\n}\n\n.time-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  margin-top: 1em;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75em;\n}\n\n.name-container {\n  display: flex;\n  gap: 1em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,qBAAqB;;AAErB;EACE,+BAA+B;EAC/B,4CAAoD;AACtD;;AAEA;EACE,uBAAuB;EACvB,4CAAsD;AACxD;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;;AAGA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,yDAAuC;EACvC,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,eAAe;EACf,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;;;EAKE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,gGAAgG;EAChG,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,QAAQ;EACR,eAAe;AACjB;;AAEA;;;EAGE,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;;;EAGE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,oBAAoB;EACpB,WAAW;EACX,SAAS;EACT,OAAO;EACP,yBAAyB;EACzB,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;;;EAGE,oBAAoB;EACpB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,gBAAgB;EAChB,qBAAqB;EACrB,cAAc;;AAEhB;;AAEA;EACE,6BAA6B;EAC7B,UAAU;;AAEZ;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,eAAe;EACf,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,QAAQ;EACR,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,QAAQ;AACV","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Custom CSS below */\n\n@font-face {\n  font-family: herrVonMuellerhoff;\n  src: url(./resources/HerrVonMuellerhoff-Regular.ttf);\n}\n\n@font-face {\n  font-family: Montserrat;\n  src: url(./resources/Montserrat-VariableFont_wght.ttf);\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Montserrat;\n}\n\n\n#page {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-image: url(resources/寺院.png);\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.header {\n  display: flex;\n  gap: 2em;\n  font-size: 18px;\n  background-color: #ef4444;\n  padding: 0.2em;\n}\n\n.phone {\n  margin-left: 20em;\n}\n\n.email,\n.phone,\n.social-media,\n.message-us,\n.times {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 8em;\n  color: white;\n  background-image: linear-gradient(to right, rgba(250, 250, 250, 0.9), rgba(25, 25, 25, 0.4) 60%);\n  transition: 1s;\n}\n\n.nav-logo {\n  margin-left: 1em;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.nav-tabs {\n  margin-right: 5em;\n  display: flex;\n  gap: 5em;\n  font-size: 28px;\n}\n\n#home,\n#menu,\n#contact {\n  display: inline-block;\n  position: relative;\n  transition: 0.25s;\n}\n\n#home:hover,\n#menu:hover,\n#contact:hover {\n  color: #ef4444;\n}\n\n#home:after,\n#menu:after,\n#contact:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 3px;\n  bottom: 0;\n  left: 0;\n  background-color: #e6b977;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n\n#home:hover:after,\n#menu:hover:after,\n#contact:hover:after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.title {\n  margin-top: 2em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 60px;\n  color: white;\n}\n\n.title-cursive {\n  font-family: herrVonMuellerhoff;\n  font-size: 110px;\n  margin-bottom: -0.2em;\n  color: #e6b977;\n\n}\n\n.title-line {\n  border-top: 5px solid #e6b977;\n  width: 8em;\n\n}\n\n.description {\n  font-size: 30px;\n  text-align: center;\n  color: white;\n}\n\n#contact-link {\n  font-size: 20px;\n  margin-top: 2em;\n  padding: 15px;\n  border: none;\n  border-radius: 5px;\n  background-color: #e6b977;\n  transition: 0.35s;\n}\n\n#contact-link:hover {\n  font-size: 25px;\n  margin-top: 1.5em;\n  color: white;\n  background-color: #ef4444;\n}\n\n.footer {\n  margin-top: auto;\n  padding: 0.25em;\n  padding-left: 10em;\n  padding-right: 10em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(250, 250, 250);\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  margin-top: 4em;\n  font-size: 60px;\n  color: white;\n}\n\n.contact-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contact-title {\n  margin-top: 1.5em;\n  font-size: 40px;\n  text-align: center;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1.5em;\n  padding: 2em;\n  gap: 1em;\n  background-color: lightgray;\n}\n\n.time-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  margin-top: 1em;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75em;\n}\n\n.name-container {\n  display: flex;\n  gap: 1em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buildHTML.js":
/*!**************************!*\
  !*** ./src/buildHTML.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _resources_Gokumiya_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/Gokumiya.png */ "./src/resources/Gokumiya.png");
/* harmony import */ var _resources_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/phone.svg */ "./src/resources/phone.svg");
/* harmony import */ var _resources_email_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/email.svg */ "./src/resources/email.svg");
/* harmony import */ var _resources_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/instagram.svg */ "./src/resources/instagram.svg");
/* harmony import */ var _resources_facebook_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/facebook.svg */ "./src/resources/facebook.svg");
/* harmony import */ var _resources_twitter_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/twitter.svg */ "./src/resources/twitter.svg");
/* harmony import */ var _resources_maps_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/maps.svg */ "./src/resources/maps.svg");










function buildPage(){
    // links all the main html elements to the page
    const page = document.createElement('div')
    page.appendChild(header())
    page.appendChild(navBar())
    page.appendChild(content())
    page.appendChild(buildFooter())

    page.id = "page"
    return page
}

function header(){
    // header at the top of page to display contact info
    const header = document.createElement('div')
    header.appendChild(phoneNumber())
    header.appendChild(email())
    header.appendChild(socialMedia())

    header.classList.add("header")

    return header
}

function phoneNumber(){
    const phoneNumberContainer = document.createElement('div')

    const phone = new Image()
    phone.src = _resources_phone_svg__WEBPACK_IMPORTED_MODULE_2__
    phoneNumberContainer.appendChild(phone)

    const phoneNumber = document.createElement('span')
    phoneNumber.textContent = "1 (111) 111-1111"
    phoneNumberContainer.appendChild(phoneNumber)

    phoneNumberContainer.classList.add("phone")
    return phoneNumberContainer
}

function email(){
    const emailContainer = document.createElement('div')

    const email = new Image()
    email.src = _resources_email_svg__WEBPACK_IMPORTED_MODULE_3__
    emailContainer.appendChild(email)

    const emailAddress = document.createElement('span')
    emailAddress.textContent = "gokumiyaresturant@email.com"
    emailContainer.appendChild(emailAddress)

    emailContainer.classList.add("email")
    return emailContainer
}

function socialMedia(){
    const socialMediaContainer = document.createElement('div')
    
    const instagram = new Image()
    instagram.src = _resources_instagram_svg__WEBPACK_IMPORTED_MODULE_4__
    socialMediaContainer.appendChild(instagram)

    const facebook = new Image()
    facebook.src = _resources_facebook_svg__WEBPACK_IMPORTED_MODULE_5__
    socialMediaContainer.appendChild(facebook)

    const twitter = new Image()
    twitter.src = _resources_twitter_svg__WEBPACK_IMPORTED_MODULE_6__
    socialMediaContainer.appendChild(twitter)

    const googleMaps = new Image()
    googleMaps.src = _resources_maps_svg__WEBPACK_IMPORTED_MODULE_7__
    socialMediaContainer.appendChild(googleMaps)

    socialMediaContainer.classList.add("social-media")
    return socialMediaContainer
}



function navBar(){
    // navigation bar that contains the logo and all the tabs
    const navBar = document.createElement('div')

    const logo = new Image()
    logo.src = _resources_Gokumiya_png__WEBPACK_IMPORTED_MODULE_1__
    logo.classList.add("nav-logo")
    navBar.appendChild(logo)
    navBar.appendChild(tabs())

    navBar.classList.add("nav-bar")
    return navBar
}

function tabs(){
    const tabContainer = document.createElement('div')

    const home = document.createElement('span')
    home.textContent = "Home"
    tabContainer.appendChild(home)
    home.id = "home"

    const menu = document.createElement('span')
    menu.textContent = "Menu"
    tabContainer.appendChild(menu)
    menu.id = "menu"

    const contact = document.createElement('span')
    contact.textContent = "Contact"
    tabContainer.appendChild(contact)
    contact.id = "contact"

    tabContainer.classList.add("nav-tabs")
    return tabContainer
}



function content(){
    // main page content that includes name and link to menu
    const content = document.createElement('div')
    content.appendChild(title())
    content.appendChild(description())

    content.id = "content"
    return content
}

function title(){
    const titleContainer = document.createElement('div')

    const titleIntro = document.createElement('span')
    titleIntro.textContent = "Welcome to,"
    titleContainer.appendChild(titleIntro)
    titleIntro.classList.add("title-cursive")

    const kanjiTitle = document.createElement('span')
    kanjiTitle.textContent = "極味屋" //gokumiya
    titleContainer.appendChild(kanjiTitle)

    const romajiTitle = document.createElement('span')
    romajiTitle.textContent = "Gokumiya"
    titleContainer.appendChild(romajiTitle)

    const separator = document.createElement('hr')
    titleContainer.appendChild(separator)
    separator.classList.add("title-line")

    titleContainer.classList.add("title")
    return titleContainer
}

function description(){
    const descriptionContainer = document.createElement('div')

    const description = document.createElement('p')
    description.textContent = "Authentic Japanese Cuisine"
    descriptionContainer.appendChild(description)

    const contactLink = document.createElement('button')
    contactLink.textContent = "Book a reservation now!"
    descriptionContainer.appendChild(contactLink)
    contactLink.id = "contact-link"

    descriptionContainer.classList.add("description")
    return descriptionContainer
}



function buildFooter(){
    // footer that contains copyright and social media links
    const footer = document.createElement('div')

    const copyright = document.createElement('span')
    copyright.textContent = "Copyright © 2022 - Gokumiya Corporation"
    footer.appendChild(copyright)
    footer.appendChild(socialMedia())

    footer.classList.add('footer')
    return footer
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildPage);

/***/ }),

/***/ "./src/resources/Gokumiya.png":
/*!************************************!*\
  !*** ./src/resources/Gokumiya.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61f093bb2a360686df59.png";

/***/ }),

/***/ "./src/resources/HerrVonMuellerhoff-Regular.ttf":
/*!******************************************************!*\
  !*** ./src/resources/HerrVonMuellerhoff-Regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b957abdfcf35c8209c4.ttf";

/***/ }),

/***/ "./src/resources/Montserrat-VariableFont_wght.ttf":
/*!********************************************************!*\
  !*** ./src/resources/Montserrat-VariableFont_wght.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3068cdb43142f5625baf.ttf";

/***/ }),

/***/ "./src/resources/email.svg":
/*!*********************************!*\
  !*** ./src/resources/email.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26b7d51f1a845d3183b2.svg";

/***/ }),

/***/ "./src/resources/facebook.svg":
/*!************************************!*\
  !*** ./src/resources/facebook.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d22f82ee0d2779c3f267.svg";

/***/ }),

/***/ "./src/resources/instagram.svg":
/*!*************************************!*\
  !*** ./src/resources/instagram.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2b78dfef81e7fd6b569.svg";

/***/ }),

/***/ "./src/resources/maps.svg":
/*!********************************!*\
  !*** ./src/resources/maps.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df450ed22a0ce38b57ba.svg";

/***/ }),

/***/ "./src/resources/phone.svg":
/*!*********************************!*\
  !*** ./src/resources/phone.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56a26afafbbcae818453.svg";

/***/ }),

/***/ "./src/resources/twitter.svg":
/*!***********************************!*\
  !*** ./src/resources/twitter.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d02a4827d039b066833.svg";

/***/ }),

/***/ "./src/resources/寺院.png":
/*!******************************!*\
  !*** ./src/resources/寺院.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fb01a77e88c037198ce.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHomeTab)
/* harmony export */ });
/* harmony import */ var _buildHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildHTML */ "./src/buildHTML.js");


function buildHomeTab(){
    const page = document.getElementById("page")
    const oldContent = document.getElementById("content")

    const newContent = (0,_buildHTML__WEBPACK_IMPORTED_MODULE_0__.content)()
    page.replaceChild(newContent, oldContent)
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDak1mO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQm9DOztBQUVyQjtBQUNmO0FBQ0E7O0FBRUEsdUJBQXVCLG1EQUFPO0FBQzlCO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9idWlsZEhUTUwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcmVzb3VyY2VzL0hlcnJWb25NdWVsbGVyaG9mZi1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcmVzb3VyY2VzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwicmVzb3VyY2VzL+WvuumZoi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIEN1c3RvbSBDU1MgYmVsb3cgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBoZXJyVm9uTXVlbGxlcmhvZmY7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbn1cXG5cXG5cXG4jcGFnZSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLnBob25lIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMGVtO1xcbn1cXG5cXG4uZW1haWwsXFxuLnBob25lLFxcbi5zb2NpYWwtbWVkaWEsXFxuLm1lc3NhZ2UtdXMsXFxuLnRpbWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDhlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjkpLCByZ2JhKDI1LCAyNSwgMjUsIDAuNCkgNjAlKTtcXG4gIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG4ubmF2LWxvZ28ge1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uYXYtdGFicyB7XFxuICBtYXJnaW4tcmlnaHQ6IDVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVlbTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuI2hvbWUsXFxuI21lbnUsXFxuI2NvbnRhY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbiNob21lOmhvdmVyLFxcbiNtZW51OmhvdmVyLFxcbiNjb250YWN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4jaG9tZTphZnRlcixcXG4jbWVudTphZnRlcixcXG4jY29udGFjdDphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZiOTc3O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4jaG9tZTpob3ZlcjphZnRlcixcXG4jbWVudTpob3ZlcjphZnRlcixcXG4jY29udGFjdDpob3ZlcjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGl0bGUtY3Vyc2l2ZSB7XFxuICBmb250LWZhbWlseTogaGVyclZvbk11ZWxsZXJob2ZmO1xcbiAgZm9udC1zaXplOiAxMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IC0wLjJlbTtcXG4gIGNvbG9yOiAjZTZiOTc3O1xcblxcbn1cXG5cXG4udGl0bGUtbGluZSB7XFxuICBib3JkZXItdG9wOiA1cHggc29saWQgI2U2Yjk3NztcXG4gIHdpZHRoOiA4ZW07XFxuXFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb250YWN0LWxpbmsge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmI5Nzc7XFxuICB0cmFuc2l0aW9uOiAwLjM1cztcXG59XFxuXFxuI2NvbnRhY3QtbGluazpob3ZlciB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAxLjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbi5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG4gIHBhZGRpbmctbGVmdDogMTBlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNGVtO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMS41ZW07XFxuICBmb250LXNpemU6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgZ2FwOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi50aW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbi5jb250YWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNzVlbTtcXG59XFxuXFxuLm5hbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2Ysd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLCtCQUErQjtFQUMvQiw0Q0FBb0Q7QUFDdEQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNENBQXNEO0FBQ3hEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5REFBdUM7RUFDdkMsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7OztFQUtFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0dBQWdHO0VBQ2hHLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFNBQVM7RUFDVCxPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7OztFQUdFLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBDdXN0b20gQ1NTIGJlbG93ICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogaGVyclZvbk11ZWxsZXJob2ZmO1xcbiAgc3JjOiB1cmwoLi9yZXNvdXJjZXMvSGVyclZvbk11ZWxsZXJob2ZmLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcXG4gIHNyYzogdXJsKC4vcmVzb3VyY2VzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxufVxcblxcblxcbiNwYWdlIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocmVzb3VyY2VzL+WvuumZoi5wbmcpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMmVtO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG4ucGhvbmUge1xcbiAgbWFyZ2luLWxlZnQ6IDIwZW07XFxufVxcblxcbi5lbWFpbCxcXG4ucGhvbmUsXFxuLnNvY2lhbC1tZWRpYSxcXG4ubWVzc2FnZS11cyxcXG4udGltZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogOGVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOSksIHJnYmEoMjUsIDI1LCAyNSwgMC40KSA2MCUpO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbi5uYXYtbG9nbyB7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5hdi10YWJzIHtcXG4gIG1hcmdpbi1yaWdodDogNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNWVtO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4jaG9tZSxcXG4jbWVudSxcXG4jY29udGFjdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuI2hvbWU6aG92ZXIsXFxuI21lbnU6aG92ZXIsXFxuI2NvbnRhY3Q6aG92ZXIge1xcbiAgY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbiNob21lOmFmdGVyLFxcbiNtZW51OmFmdGVyLFxcbiNjb250YWN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmI5Nzc7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XFxufVxcblxcbiNob21lOmhvdmVyOmFmdGVyLFxcbiNtZW51OmhvdmVyOmFmdGVyLFxcbiNjb250YWN0OmhvdmVyOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50aXRsZS1jdXJzaXZlIHtcXG4gIGZvbnQtZmFtaWx5OiBoZXJyVm9uTXVlbGxlcmhvZmY7XFxuICBmb250LXNpemU6IDExMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuMmVtO1xcbiAgY29sb3I6ICNlNmI5Nzc7XFxuXFxufVxcblxcbi50aXRsZS1saW5lIHtcXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZTZiOTc3O1xcbiAgd2lkdGg6IDhlbTtcXG5cXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbnRhY3QtbGluayB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2Yjk3NztcXG4gIHRyYW5zaXRpb246IDAuMzVzO1xcbn1cXG5cXG4jY29udGFjdC1saW5rOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxMGVtO1xcbiAgcGFkZGluZy1yaWdodDogMTBlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0ZW07XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAxLjVlbTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMS41ZW07XFxuICBwYWRkaW5nOiAyZW07XFxuICBnYXA6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnRpbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC43NWVtO1xcbn1cXG5cXG4ubmFtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMWVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nb0ZpbGUgZnJvbSAnLi9yZXNvdXJjZXMvR29rdW1peWEucG5nJztcbmltcG9ydCBwaG9uZUljb24gZnJvbSAnLi9yZXNvdXJjZXMvcGhvbmUuc3ZnJztcbmltcG9ydCBlbWFpbEljb24gZnJvbSAnLi9yZXNvdXJjZXMvZW1haWwuc3ZnJztcbmltcG9ydCBpbnN0YWdyYW1JY29uIGZyb20gJy4vcmVzb3VyY2VzL2luc3RhZ3JhbS5zdmcnO1xuaW1wb3J0IGZhY2Vib29rSWNvbiBmcm9tICcuL3Jlc291cmNlcy9mYWNlYm9vay5zdmcnO1xuaW1wb3J0IHR3aXR0ZXJJY29uIGZyb20gJy4vcmVzb3VyY2VzL3R3aXR0ZXIuc3ZnJztcbmltcG9ydCBnb29nbGVNYXBzSWNvbiBmcm9tICcuL3Jlc291cmNlcy9tYXBzLnN2Zyc7XG5cblxuZnVuY3Rpb24gYnVpbGRQYWdlKCl7XG4gICAgLy8gbGlua3MgYWxsIHRoZSBtYWluIGh0bWwgZWxlbWVudHMgdG8gdGhlIHBhZ2VcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwYWdlLmFwcGVuZENoaWxkKGhlYWRlcigpKVxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQobmF2QmFyKCkpXG4gICAgcGFnZS5hcHBlbmRDaGlsZChjb250ZW50KCkpXG4gICAgcGFnZS5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKVxuXG4gICAgcGFnZS5pZCA9IFwicGFnZVwiXG4gICAgcmV0dXJuIHBhZ2Vcbn1cblxuZnVuY3Rpb24gaGVhZGVyKCl7XG4gICAgLy8gaGVhZGVyIGF0IHRoZSB0b3Agb2YgcGFnZSB0byBkaXNwbGF5IGNvbnRhY3QgaW5mb1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKCkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGVtYWlsKCkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhKCkpXG5cbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuXG4gICAgcmV0dXJuIGhlYWRlclxufVxuXG5mdW5jdGlvbiBwaG9uZU51bWJlcigpe1xuICAgIGNvbnN0IHBob25lTnVtYmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IHBob25lID0gbmV3IEltYWdlKClcbiAgICBwaG9uZS5zcmMgPSBwaG9uZUljb25cbiAgICBwaG9uZU51bWJlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZSlcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIjEgKDExMSkgMTExLTExMTFcIlxuICAgIHBob25lTnVtYmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKVxuXG4gICAgcGhvbmVOdW1iZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBob25lXCIpXG4gICAgcmV0dXJuIHBob25lTnVtYmVyQ29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGVtYWlsKCl7XG4gICAgY29uc3QgZW1haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZW1haWwgPSBuZXcgSW1hZ2UoKVxuICAgIGVtYWlsLnNyYyA9IGVtYWlsSWNvblxuICAgIGVtYWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsKVxuXG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZW1haWxBZGRyZXNzLnRleHRDb250ZW50ID0gXCJnb2t1bWl5YXJlc3R1cmFudEBlbWFpbC5jb21cIlxuICAgIGVtYWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsQWRkcmVzcylcblxuICAgIGVtYWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFwiKVxuICAgIHJldHVybiBlbWFpbENvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBzb2NpYWxNZWRpYSgpe1xuICAgIGNvbnN0IHNvY2lhbE1lZGlhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBcbiAgICBjb25zdCBpbnN0YWdyYW0gPSBuZXcgSW1hZ2UoKVxuICAgIGluc3RhZ3JhbS5zcmMgPSBpbnN0YWdyYW1JY29uXG4gICAgc29jaWFsTWVkaWFDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKVxuXG4gICAgY29uc3QgZmFjZWJvb2sgPSBuZXcgSW1hZ2UoKVxuICAgIGZhY2Vib29rLnNyYyA9IGZhY2Vib29rSWNvblxuICAgIHNvY2lhbE1lZGlhQ29udGFpbmVyLmFwcGVuZENoaWxkKGZhY2Vib29rKVxuXG4gICAgY29uc3QgdHdpdHRlciA9IG5ldyBJbWFnZSgpXG4gICAgdHdpdHRlci5zcmMgPSB0d2l0dGVySWNvblxuICAgIHNvY2lhbE1lZGlhQ29udGFpbmVyLmFwcGVuZENoaWxkKHR3aXR0ZXIpXG5cbiAgICBjb25zdCBnb29nbGVNYXBzID0gbmV3IEltYWdlKClcbiAgICBnb29nbGVNYXBzLnNyYyA9IGdvb2dsZU1hcHNJY29uXG4gICAgc29jaWFsTWVkaWFDb250YWluZXIuYXBwZW5kQ2hpbGQoZ29vZ2xlTWFwcylcblxuICAgIHNvY2lhbE1lZGlhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtbWVkaWFcIilcbiAgICByZXR1cm4gc29jaWFsTWVkaWFDb250YWluZXJcbn1cblxuXG5cbmZ1bmN0aW9uIG5hdkJhcigpe1xuICAgIC8vIG5hdmlnYXRpb24gYmFyIHRoYXQgY29udGFpbnMgdGhlIGxvZ28gYW5kIGFsbCB0aGUgdGFic1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKClcbiAgICBsb2dvLnNyYyA9IGxvZ29GaWxlXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibmF2LWxvZ29cIilcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobG9nbylcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodGFicygpKVxuXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpXG4gICAgcmV0dXJuIG5hdkJhclxufVxuXG5mdW5jdGlvbiB0YWJzKCl7XG4gICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSlcbiAgICBob21lLmlkID0gXCJob21lXCJcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCJcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSlcbiAgICBtZW51LmlkID0gXCJtZW51XCJcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdClcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCJcblxuICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LXRhYnNcIilcbiAgICByZXR1cm4gdGFiQ29udGFpbmVyXG59XG5cblxuXG5mdW5jdGlvbiBjb250ZW50KCl7XG4gICAgLy8gbWFpbiBwYWdlIGNvbnRlbnQgdGhhdCBpbmNsdWRlcyBuYW1lIGFuZCBsaW5rIHRvIG1lbnVcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbigpKVxuXG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cblxuZnVuY3Rpb24gdGl0bGUoKXtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCB0aXRsZUludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdGl0bGVJbnRyby50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byxcIlxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW50cm8pXG4gICAgdGl0bGVJbnRyby5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY3Vyc2l2ZVwiKVxuXG4gICAgY29uc3Qga2FuamlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGthbmppVGl0bGUudGV4dENvbnRlbnQgPSBcIualteWRs+Wxi1wiIC8vZ29rdW1peWFcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChrYW5qaVRpdGxlKVxuXG4gICAgY29uc3Qgcm9tYWppVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICByb21hamlUaXRsZS50ZXh0Q29udGVudCA9IFwiR29rdW1peWFcIlxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvbWFqaVRpdGxlKVxuXG4gICAgY29uc3Qgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlcGFyYXRvcilcbiAgICBzZXBhcmF0b3IuY2xhc3NMaXN0LmFkZChcInRpdGxlLWxpbmVcIilcblxuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxuICAgIHJldHVybiB0aXRsZUNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBkZXNjcmlwdGlvbigpe1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkF1dGhlbnRpYyBKYXBhbmVzZSBDdWlzaW5lXCJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQm9vayBhIHJlc2VydmF0aW9uIG5vdyFcIlxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKVxuICAgIGNvbnRhY3RMaW5rLmlkID0gXCJjb250YWN0LWxpbmtcIlxuXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uQ29udGFpbmVyXG59XG5cblxuXG5mdW5jdGlvbiBidWlsZEZvb3Rlcigpe1xuICAgIC8vIGZvb3RlciB0aGF0IGNvbnRhaW5zIGNvcHlyaWdodCBhbmQgc29jaWFsIG1lZGlhIGxpbmtzXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgLSBHb2t1bWl5YSBDb3Jwb3JhdGlvblwiXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWEoKSlcblxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbn1cblxuZXhwb3J0IHtjb250ZW50fVxuZXhwb3J0IGRlZmF1bHQgYnVpbGRQYWdlIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJob21lXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQge2NvbnRlbnR9IGZyb20gJy4vYnVpbGRIVE1MJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIb21lVGFiKCl7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZVwiKVxuICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcblxuICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBjb250ZW50KClcbiAgICBwYWdlLnJlcGxhY2VDaGlsZChuZXdDb250ZW50LCBvbGRDb250ZW50KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==