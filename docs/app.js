/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/gochiucycle.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/gochiucycle.scss ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, section, div, input, p, h1 {\\n  margin: 0px;\\n  padding: 0px;\\n  font-size: 14px;\\n  border: none;\\n  line-height: 1;\\n}\\n\\nhtml, body {\\n  height: 100%;\\n}\\n\\nh1 {\\n  color: #C7A666;\\n  font-size: 36px;\\n  line-height: 36px;\\n  text-align: center;\\n  padding: 18px;\\n}\\n\\ninput[type=button] {\\n  color: #fff;\\n  background-color: #B5001F;\\n  border-color: #B5001F;\\n  display: inline-block;\\n  padding: 6px 12px;\\n  margin-bottom: 0;\\n  font-size: 14px;\\n  font-weight: 400;\\n  line-height: 1.42857143;\\n  text-align: center;\\n  white-space: nowrap;\\n  vertical-align: middle;\\n  -ms-touch-action: manipulation;\\n  touch-action: manipulation;\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  background-image: none;\\n  border: 1px solid transparent;\\n  border-radius: 4px;\\n}\\n\\ndiv.contents {\\n  height: 100%;\\n}\\n\\ndiv#result-wrapper {\\n  width: 50%;\\n  margin: 0px auto;\\n  text-align: center;\\n  font-size: 18px;\\n  padding: 9px 0px;\\n}\\n\\ndiv#control-button {\\n  width: 50%;\\n  margin: 0px auto;\\n  text-align: center;\\n  padding: 18px 0px;\\n}\\n\\ndiv#share {\\n  width: 50%;\\n  margin: 0px auto;\\n  text-align: center;\\n  padding: 18px 0px;\\n}\\n\\ndiv#share a {\\n  color: #0088cc;\\n}\\n\\nsection.render-area {\\n  width: 100%;\\n  position: relative;\\n}\\n\\ndiv.cycle-icon {\\n  display: block;\\n  width: 80px;\\n  padding-top: 80px;\\n  margin: 0px;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  transition: transform 0.1s ease-in-out;\\n  position: absolute;\\n}\\n\\n@media screen and (max-width: 320px) {\\n  div.cycle-icon {\\n    width: 20%;\\n    padding-top: 20%;\\n  }\\n}\\nsection.footer-area {\\n  position: fixed;\\n  bottom: 0px;\\n  padding: 14px;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/scss/gochiucycle.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://go-chi-u-cycle/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/gochiucycle.scss":
/*!***********************************!*\
  !*** ./src/scss/gochiucycle.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_gochiucycle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/sass-loader/dist/cjs.js!./gochiucycle.scss */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/gochiucycle.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_gochiucycle_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_gochiucycle_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/scss/gochiucycle.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://go-chi-u-cycle/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/bindEvent.js":
/*!*****************************!*\
  !*** ./src/js/bindEvent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rotateCycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotateCycle */ \"./src/js/rotateCycle.js\");\n/* harmony import */ var _inverseRotateCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inverseRotateCycle */ \"./src/js/inverseRotateCycle.js\");\n/* harmony import */ var _wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wheel */ \"./src/js/wheel.js\");\n/* harmony import */ var _calcPos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcPos */ \"./src/js/calcPos.js\");\n/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isMobile */ \"./src/js/isMobile.js\");\n\n\n\n\n\n\nconst bindEvent = () => {\n    const rotate = document.getElementById(\"control-rotate\");\n    const inverserotate = document.getElementById(\"control-inverserotate\");\n\n    if ((0,_isMobile__WEBPACK_IMPORTED_MODULE_4__.default)()) {\n        rotate.addEventListener(\"touchstart\", _rotateCycle__WEBPACK_IMPORTED_MODULE_0__.default, false);\n        inverserotate.addEventListener(\"touchstart\", _inverseRotateCycle__WEBPACK_IMPORTED_MODULE_1__.default, false);\n    }\n\n    rotate.addEventListener(\"click\", _rotateCycle__WEBPACK_IMPORTED_MODULE_0__.default, false);\n    inverserotate.addEventListener(\"click\", _inverseRotateCycle__WEBPACK_IMPORTED_MODULE_1__.default, false);\n\n    window.addEventListener(\"mousewheel\", _wheel__WEBPACK_IMPORTED_MODULE_2__.default, false);\n    window.addEventListener(\"resize\", _calcPos__WEBPACK_IMPORTED_MODULE_3__.default.bind(null,0), false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindEvent);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/bindEvent.js?");

/***/ }),

/***/ "./src/js/calcPos.js":
/*!***************************!*\
  !*** ./src/js/calcPos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calcPos = (num) => {\n\n\n    const position = window.__gochi_u_cycle + num;\n    window.__gochi_u_cycle = position;\n\n    const cycleIcons = document.querySelectorAll(\".cycle-icon\");\n\n    const offset = document.querySelector(\".control-area\").clientHeight;\n    const geta = cycleIcons[0].clientHeight;\n    const r = Math.floor(\n        (document.documentElement.clientHeight - offset - geta * 2) / 2\n    );\n    const x = document.body.clientWidth / 2 - geta / 2;\n    const y = r;\n    const limit = cycleIcons.length;\n    const sep = Math.floor(360 / limit);\n\n    for (let i = 0; i < limit; i++) {\n        const deg = (position + i) * sep;\n        const theta = (Math.PI / 180) * deg;\n        cycleIcons[i].style.transform = `translate3d(${Math.floor( x + r * Math.cos(theta))}px, ${Math.floor(y + r * Math.sin(theta))}px, 0px)`;\n    }\n\n    // render count\n    document.getElementById(\"result\").textContent = position;\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcPos);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/calcPos.js?");

/***/ }),

/***/ "./src/js/config.json":
/*!****************************!*\
  !*** ./src/js/config.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"title\":\"ごちうサイクル - ご注文はサイクルですか？ -\",\"share\":\"サイクル数をツイートする\",\"rotate\":\"回転\",\"inverserotate\":\"逆回転\",\"icons\":[\"./image/cocoa.jpg\",\"./image/chino.jpg\",\"./image/rize.jpg\",\"./image/syaro.jpg\",\"./image/chiya.jpg\",\"./image/cocoa_anime.jpg\",\"./image/chino_anime.jpg\",\"./image/rize_anime.jpg\",\"./image/sharo_anime.jpg\",\"./image/chiya_anime.jpg\",\"./image/cocoa.png\",\"./image/chino.png\",\"./image/rize.png\",\"./image/syaro.png\",\"./image/chiya.png\"]}');\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/config.json?");

/***/ }),

/***/ "./src/js/gochiucycle.js":
/*!*******************************!*\
  !*** ./src/js/gochiucycle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var _config_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_gochiucycle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/gochiucycle.scss */ \"./src/scss/gochiucycle.scss\");\n/* harmony import */ var _renderCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCycle */ \"./src/js/renderCycle.js\");\n/* harmony import */ var _bindEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindEvent */ \"./src/js/bindEvent.js\");\n/* harmony import */ var _calcPos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcPos */ \"./src/js/calcPos.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.json */ \"./src/js/config.json\");\n// import scss\r\n\r\n\r\n// import other\r\n\r\n\r\n\r\n\r\n\r\nconst init = async ()=>{\r\n\r\n    // init global\r\n    window.__gochi_u_cycle = 0;\r\n\r\n    (0,_renderCycle__WEBPACK_IMPORTED_MODULE_1__.default)(/*#__PURE__*/ (_config_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_config_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_config_json__WEBPACK_IMPORTED_MODULE_4__, 2))));\r\n    (0,_bindEvent__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n    (0,_calcPos__WEBPACK_IMPORTED_MODULE_3__.default)(0);\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', init, false );\r\n\r\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/gochiucycle.js?");

/***/ }),

/***/ "./src/js/inverseRotateCycle.js":
/*!**************************************!*\
  !*** ./src/js/inverseRotateCycle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _calcPos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcPos */ \"./src/js/calcPos.js\");\n\n\nconst inverseRotateCycle =(eve)=>{\n      eve.preventDefault();\n      (0,_calcPos__WEBPACK_IMPORTED_MODULE_0__.default)(-1);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inverseRotateCycle);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/inverseRotateCycle.js?");

/***/ }),

/***/ "./src/js/isMobile.js":
/*!****************************!*\
  !*** ./src/js/isMobile.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst isMobile = ()=>{\n    const a =navigator.userAgent||navigator.vendor||window.opera;\n    if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4))){\n        return true;\n    }else{\n        return false;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMobile);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/isMobile.js?");

/***/ }),

/***/ "./src/js/renderCycle.js":
/*!*******************************!*\
  !*** ./src/js/renderCycle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shareEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shareEvent */ \"./src/js/shareEvent.js\");\n/* harmony import */ var _renderImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderImage */ \"./src/js/renderImage.js\");\n/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shuffle */ \"./src/js/shuffle.js\");\n\n\n\n\nconst renderCycle = (config) => {\n\n    const title = document.getElementById(\"title\");\n    title.textContent = config.title;\n\n    const share = document.getElementById(\"share\");\n\n    const shareLink = share.appendChild(document.createElement(\"a\"));\n    shareLink.href = \"#\";\n    shareLink.textContent = config.share;\n    shareLink.addEventListener(\"click\", _shareEvent__WEBPACK_IMPORTED_MODULE_0__.default, false);\n\n    const rotate = document.getElementById(\"control-rotate\");\n    rotate.value = config.rotate;\n    const inverserotate = document.getElementById(\"control-inverserotate\");\n    inverserotate.value = config.inverserotate;\n\n    const cycleArea = document.getElementById(\"cycle-area\");\n    const randomIcons = (0,_shuffle__WEBPACK_IMPORTED_MODULE_2__.default)(config.icons);\n    randomIcons.forEach((icon) =>{\n        const div = cycleArea.appendChild(document.createElement(\"div\"));\n        div.classList.add(\"cycle-icon\");\n\n        const img = new Image();\n        img.src = icon;\n\n        img.addEventListener(\"load\", _renderImage__WEBPACK_IMPORTED_MODULE_1__.default.bind(null, icon, div), false);\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCycle);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/renderCycle.js?");

/***/ }),

/***/ "./src/js/renderImage.js":
/*!*******************************!*\
  !*** ./src/js/renderImage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderImage = (icon,div,eve)=>{\n    div.style.backgroundImage  = `url('${icon}')`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderImage);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/renderImage.js?");

/***/ }),

/***/ "./src/js/rotateCycle.js":
/*!*******************************!*\
  !*** ./src/js/rotateCycle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _calcPos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcPos */ \"./src/js/calcPos.js\");\n\n\nconst rotateCycle = (eve) => {\n    eve.preventDefault();\n    (0,_calcPos__WEBPACK_IMPORTED_MODULE_0__.default)(1);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rotateCycle);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/rotateCycle.js?");

/***/ }),

/***/ "./src/js/shareEvent.js":
/*!******************************!*\
  !*** ./src/js/shareEvent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst shareEvent = (eve)=>{\n      eve.preventDefault();\n      const link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(document.getElementById(\"result-wrapper\").textContent)} - ${document.title} ${window.location.href}`;\n      window.open(link);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shareEvent);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/shareEvent.js?");

/***/ }),

/***/ "./src/js/shuffle.js":
/*!***************************!*\
  !*** ./src/js/shuffle.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst shuffle = ([...array]) => {\n  for (let i = array.length - 1; i >= 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [array[i], array[j]] = [array[j], array[i]];\n  }\n  return array;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shuffle);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/shuffle.js?");

/***/ }),

/***/ "./src/js/wheel.js":
/*!*************************!*\
  !*** ./src/js/wheel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _calcPos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcPos */ \"./src/js/calcPos.js\");\n\n\nconst wheel = (eve) => {\n    const delta = -1 * Math.max(-1, Math.min(1, eve.wheelDelta));\n    (0,_calcPos__WEBPACK_IMPORTED_MODULE_0__.default)(delta);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wheel);\n\n\n//# sourceURL=webpack://go-chi-u-cycle/./src/js/wheel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(key => def[key] = () => value[key]);
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/gochiucycle.js");
/******/ 	
/******/ })()
;