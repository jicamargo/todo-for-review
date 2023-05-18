/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  color: #514f4f;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  padding: 0;\\r\\n  overflow: hidden;\\r\\n  overflow-y: scroll;\\r\\n  width: 420px;\\r\\n  margin: 2rem auto;\\r\\n}\\r\\n\\r\\n.title div {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 1rem;\\r\\n  font-size: 1.3rem;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.icon-refresh {\\r\\n  cursor: pointer;\\r\\n  width: 1.3rem;\\r\\n}\\r\\n\\r\\n.ul-list {\\r\\n  list-style: none;\\r\\n  justify-content: space-between;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.new-item {\\r\\n  display: flex;\\r\\n  padding: 1rem;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  display: flex;\\r\\n  padding: 1rem;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.task-label {\\r\\n  flex-grow: 1;\\r\\n  padding-left: 1rem;\\r\\n}\\r\\n\\r\\n.clearCompleted {\\r\\n  padding: 1rem 0;\\r\\n  text-align: center;\\r\\n  color: #636262;\\r\\n  cursor: pointer;\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.icon-task {\\r\\n  cursor: pointer;\\r\\n  width: 1rem;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.icon-return {\\r\\n  cursor: pointer;\\r\\n  width: 1rem;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n/* styles for phase 2 of the project  */\\r\\n\\r\\n::placeholder {\\r\\n  text-align: left;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  color: #ccc;\\r\\n}\\r\\n\\r\\n#new-task {\\r\\n  border-style: none;\\r\\n  width: 350px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#new-task:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.task-edit {\\r\\n  margin-left: 1rem;\\r\\n  border-style: none;\\r\\n  width: 350px;\\r\\n  font-style: italic;\\r\\n  font-size: 1rem;\\r\\n  color: #918f8f;\\r\\n}\\r\\n\\r\\n.task-edit:focus {\\r\\n  outline: none;\\r\\n  background-color: lightgoldenrodyellow;\\r\\n}\\r\\n\\r\\n.task-completed {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.task-check:checked {\\r\\n  color: #ccc;\\r\\n}\\r\\n\\r\\n.editing-task {\\r\\n  background-color: lightgoldenrodyellow;\\r\\n}\\r\\n\\r\\n.list-item.dragging {\\r\\n  background-color: #bdc7ee;\\r\\n  opacity: 0.5;\\r\\n  cursor: grabbing;\\r\\n}\\r\\n\\r\\n.list-item.dragging-over {\\r\\n  background-color: #859cf5;\\r\\n  opacity: 0.5;\\r\\n  cursor: grabbing;\\r\\n}\\r\\n\\r\\n.icon-more {\\r\\n  cursor: grab;\\r\\n}\\r\\n\\r\\n.icon-trash {\\r\\n  margin: 0 0.5rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-for-review/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-for-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-for-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-for-review/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-for-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-for-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-for-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-for-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-for-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-for-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/icon-more-vert.svg":
/*!***************************************!*\
  !*** ./src/images/icon-more-vert.svg ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 0h48v48H0z' fill='none'%3e%3c/path%3e%3cpath d='M24 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' fill='%23615f5f' class='fill-000000'%3e%3c/path%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://todo-for-review/./src/images/icon-more-vert.svg?");

/***/ }),

/***/ "./src/images/icon-refresh.svg":
/*!*************************************!*\
  !*** ./src/images/icon-refresh.svg ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg viewBox='0 0 32 32' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M23.07 24.519A9.97 9.97 0 0 1 16 27.443a9.969 9.969 0 0 1-7.071-2.924 9.955 9.955 0 0 1-2.867-8.182 1 1 0 1 1 1.987.222 7.966 7.966 0 0 0 2.294 6.546c3.118 3.118 8.194 3.12 11.314 0 3.119-3.12 3.119-8.195 0-11.314-2.639-2.639-6.727-3.053-9.817-1.17l3.302.844a1 1 0 1 1-.495 1.937l-6.45-1.647 1.649-6.45a1 1 0 1 1 1.938.495l-.76 2.973c3.835-2.197 8.813-1.63 12.047 1.603 3.899 3.899 3.899 10.243 0 14.143z' fill='%237a7979' class='fill-000000'%3e%3c/path%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://todo-for-review/./src/images/icon-refresh.svg?");

/***/ }),

/***/ "./src/images/icon-return.svg":
/*!************************************!*\
  !*** ./src/images/icon-return.svg ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg viewBox='0 0 32 16.707' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 32 16.707'%3e%3cpath d='m30 0-.002 9H3.414l4.293-4.293-1.414-1.414-6 6a.999.999 0 0 0 0 1.414l6 6 1.414-1.414L3.414 11h26.475c.108.021.253.04.418.04.313 0 .699-.069 1.044-.328.243-.181.649-.607.649-1.419V0h-2z' fill='%23474747' class='fill-000000'%3e%3c/path%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://todo-for-review/./src/images/icon-return.svg?");

/***/ }),

/***/ "./src/images/icon-trash.svg":
/*!***********************************!*\
  !*** ./src/images/icon-trash.svg ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg viewBox='0 0 512 512' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23525151' class='fill-37404d'%3e%3cpath d='M444.852 66.908h-99.339V47.04c0-21.943-17.792-39.736-39.736-39.736h-99.339c-21.944 0-39.736 17.793-39.736 39.736v19.868H67.363v19.868h20.47l19.887 377.489c0 21.944 17.792 39.736 39.736 39.736h218.546c21.944 0 39.736-17.792 39.736-39.736l19.538-377.489h19.577V66.908zM186.57 47.04c0-10.962 8.926-19.868 19.868-19.868h99.339c10.962 0 19.868 8.906 19.868 19.868v19.868H186.57V47.04zm199.338 416.196-.039.505v.524c0 10.943-8.906 19.868-19.868 19.868H147.455c-10.942 0-19.868-8.925-19.868-19.868v-.524l-.019-.523L107.72 86.776h297.669l-19.481 376.46z'%3e%3c/path%3e%3cpath d='M246.173 126.511h19.868v317.885h-19.868zM206.884 443.757l-20.333-317.264-19.829 1.26 20.334 317.264zM345.649 127.132l-19.829-1.241-20.043 317.885 19.829 1.241z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://todo-for-review/./src/images/icon-trash.svg?");

/***/ }),

/***/ "./src/addnewtask.js":
/*!***************************!*\
  !*** ./src/addnewtask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _readnewtaskvalue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./readnewtaskvalue.js */ \"./src/readnewtaskvalue.js\");\n/* harmony import */ var _addtasktoarray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addtasktoarray.js */ \"./src/addtasktoarray.js\");\n/* harmony import */ var _savetasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savetasks.js */ \"./src/savetasks.js\");\n/* harmony import */ var _showtasklist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showtasklist.js */ \"./src/showtasklist.js\");\n\r\n\r\n\r\n\r\n\r\nconst addNewTask = (arrTasks) => {\r\n  const newTaskDescription = (0,_readnewtaskvalue_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n  if (newTaskDescription !== '') {\r\n    (0,_addtasktoarray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrTasks, newTaskDescription);\r\n    (0,_savetasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrTasks);\r\n    (0,_showtasklist_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arrTasks);\r\n }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTask);\n\n//# sourceURL=webpack://todo-for-review/./src/addnewtask.js?");

/***/ }),

/***/ "./src/addtasktoarray.js":
/*!*******************************!*\
  !*** ./src/addtasktoarray.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\nconst addTaskToArray = (arrTasks, newTaskDescription) => {\r\n  const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newTaskDescription);\r\n  const lastTaskIndex = arrTasks.length - 1;\r\n  newTask.index = lastTaskIndex >= 0 ? arrTasks[lastTaskIndex].index + 1 : 0;\r\n  arrTasks.push(newTask);\r\n  return arrTasks;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskToArray);\r\n\n\n//# sourceURL=webpack://todo-for-review/./src/addtasktoarray.js?");

/***/ }),

/***/ "./src/blinkeffect.js":
/*!****************************!*\
  !*** ./src/blinkeffect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst blinkEffect = (element) => {\r\n  let count = 0;\r\n  const interval = setInterval(() => {\r\n    if (count % 2 === 0) {\r\n      element.style.boxShadow = 'inset 0 0 15px #88ccff';\r\n    } else {\r\n      element.style.backgroundColor = '';\r\n      element.style.boxShadow = '';\r\n    }\r\n    count += 1;\r\n    if (count >= 2) {\r\n      clearInterval(interval);\r\n      element.style.backgroundColor = '';\r\n      element.style.boxShadow = '';\r\n    }\r\n  }, 125);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blinkEffect);\n\n//# sourceURL=webpack://todo-for-review/./src/blinkeffect.js?");

/***/ }),

/***/ "./src/checktaskchange.js":
/*!********************************!*\
  !*** ./src/checktaskchange.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _savetasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savetasks.js */ \"./src/savetasks.js\");\n/* harmony import */ var _blinkeffect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blinkeffect.js */ \"./src/blinkeffect.js\");\n\r\n\r\n\r\nconst checkTask = (taskCheckbox, arrTasks, task) => {\r\n  task.completed = taskCheckbox.checked;\r\n  const taskDescription = taskCheckbox.nextElementSibling;\r\n  taskDescription.classList.toggle('task-completed');\r\n  taskDescription.parentElement.classList.toggle('shine-task-completed');\r\n  (0,_blinkeffect_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskDescription.parentElement);\r\n\r\n  (0,_savetasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrTasks);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTask);\r\n\n\n//# sourceURL=webpack://todo-for-review/./src/checktaskchange.js?");

/***/ }),

/***/ "./src/clearcompletedtasks.js":
/*!************************************!*\
  !*** ./src/clearcompletedtasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _savetasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savetasks.js */ \"./src/savetasks.js\");\n/* harmony import */ var _showtasklist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showtasklist.js */ \"./src/showtasklist.js\");\n/* harmony import */ var _blinkeffect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blinkeffect.js */ \"./src/blinkeffect.js\");\n\r\n\r\n\r\n\r\nconst clearCompletedTasks = (event, arrTasks) => {\r\n  const arrTasksFiltered = arrTasks.filter((task) => task.completed === false);\r\n\r\n  (0,_blinkeffect_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.target);\r\n\r\n  // if there are no completed tasks, do nothing\r\n  if (arrTasksFiltered.length === arrTasks.length) { return; }\r\n\r\n  // remove completed tasks from array, because if copy from filteredarray, it is a shallow copy,\r\n  // and the original array is not modified\r\n\r\n  for (let i = arrTasks.length - 1; i >= 0; i -= 1) {\r\n    if (arrTasks[i].completed) {\r\n      arrTasks.splice(i, 1);\r\n    }\r\n  }\r\n\r\n  (0,_savetasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrTasks);\r\n  (0,_showtasklist_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrTasks, 'list');\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompletedTasks);\r\n\n\n//# sourceURL=webpack://todo-for-review/./src/clearcompletedtasks.js?");

/***/ }),

/***/ "./src/deletetask.js":
/*!***************************!*\
  !*** ./src/deletetask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deletetaskfromarray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deletetaskfromarray.js */ \"./src/deletetaskfromarray.js\");\n/* harmony import */ var _savetasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savetasks.js */ \"./src/savetasks.js\");\n\r\n\r\n\r\nconst deleteTask = (event, arrTasks, task) => {\r\n  const taskLengthBefore = arrTasks.length;\r\n  (0,_deletetaskfromarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrTasks, task);\r\n  const taskLengthAfter = arrTasks.length;\r\n  if (taskLengthBefore !== taskLengthAfter) {\r\n    (0,_savetasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrTasks);\r\n    const listItem = event.target.closest('.list-item');\r\n    listItem.remove();\r\n   }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n//# sourceURL=webpack://todo-for-review/./src/deletetask.js?");

/***/ }),

/***/ "./src/deletetaskfromarray.js":
/*!************************************!*\
  !*** ./src/deletetaskfromarray.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteTaskFromArray = (arrTasks, task) => {\r\n  const taskIndex = arrTasks.indexOf(task);\r\n  if (taskIndex !== -1) {\r\n    arrTasks.splice(taskIndex, 1);\r\n  }\r\n  return arrTasks;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTaskFromArray);\n\n//# sourceURL=webpack://todo-for-review/./src/deletetaskfromarray.js?");

/***/ }),

/***/ "./src/draganddrophandler.js":
/*!***********************************!*\
  !*** ./src/draganddrophandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragDrop\": () => (/* binding */ dragDrop),\n/* harmony export */   \"dragEnd\": () => (/* binding */ dragEnd),\n/* harmony export */   \"dragLeave\": () => (/* binding */ dragLeave),\n/* harmony export */   \"dragOver\": () => (/* binding */ dragOver),\n/* harmony export */   \"dragStart\": () => (/* binding */ dragStart)\n/* harmony export */ });\n/* harmony import */ var _savetasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savetasks.js */ \"./src/savetasks.js\");\n\r\n\r\nconst dragStart = (event) => {\r\n  const taskItemContainer = event.target.closest('.list-item');\r\n  event.dataTransfer.setData('text/plain', taskItemContainer.dataset.index);\r\n  taskItemContainer.classList.add('dragging');\r\n};\r\n\r\nconst dragOver = (event) => {\r\n  event.preventDefault();\r\n  event.dataTransfer.dropEffect = 'move';\r\n  const taskItemContainer = event.target.closest('.list-item');\r\n  if (!taskItemContainer.classList.contains('dragging')) {\r\n    taskItemContainer.classList.add('dragging-over');\r\n  }\r\n};\r\n\r\nconst dragLeave = (event) => {\r\n  const taskItemContainer = event.target.closest('.list-item');\r\n  taskItemContainer.classList.remove('dragging-over');\r\n};\r\n\r\nconst dragEnd = (event) => {\r\n  const taskItemContainer = event.target.closest('.list-item');\r\n  taskItemContainer.classList.remove('dragging');\r\n};\r\n\r\nconst dragDrop = (event, arrTasks) => {\r\n  event.preventDefault();\r\n  const taskItemContainer = event.target.closest('.list-item');\r\n\r\n  // Get index of task being dragged, and being dropped on\r\n  const fromIndex = event.dataTransfer.getData('text/plain');\r\n  const toIndex = taskItemContainer.dataset.index;\r\n\r\n  taskItemContainer.classList.remove('dragging-over');\r\n\r\n  // Move task to new position\r\n  const taskList = event.target.closest('.list');\r\n  const taskItems = taskList.querySelectorAll('.list-item');\r\n  const fromItem = taskItems[fromIndex];\r\n  const toItem = taskItems[toIndex];\r\n\r\n  if (fromItem.dataset.index > toItem.dataset.index) {\r\n    taskList.insertBefore(fromItem, toItem);\r\n  } else {\r\n    taskList.insertBefore(fromItem, toItem.nextSibling);\r\n  }\r\n\r\n  // Update the data-index attribute on each task item\r\n  const NewtaskItems = taskList.querySelectorAll('.list-item');\r\n  for (let i = 0; i < NewtaskItems.length; i += 1) {\r\n    NewtaskItems[i].dataset.index = i;\r\n  }\r\n\r\n  // Update the array that holds the tasks\r\n  arrTasks.splice(toIndex, 0, arrTasks.splice(fromIndex, 1)[0]);\r\n\r\n  (0,_savetasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrTasks);\r\n};\r\n\n\n//# sourceURL=webpack://todo-for-review/./src/draganddrophandler.js?");

/***/ }),

/***/ "./src/edittask.js":
/*!*************************!*\
  !*** ./src/edittask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _savetasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savetasks.js */ \"./src/savetasks.js\");\n\r\n\r\nconst editTask = (event, arrTasks, task) => {\r\n  const taskDescription = event.target;\r\n  const taskEditDescription = taskDescription.nextElementSibling;\r\n  const listItem = taskDescription.closest('.list-item');\r\n\r\n  // add a class editing to highlight the item and Hide task text and show edit task text\r\n  listItem.classList.add('editing-task');\r\n  taskDescription.classList.add('hidden');\r\n  taskEditDescription.classList.remove('hidden');\r\n\r\n  // Set focus on edit task text\r\n  taskEditDescription.focus();\r\n\r\n  // Add blur event listener to each edit task text input\r\n  taskEditDescription.addEventListener('blur', () => {\r\n    task.description = taskEditDescription.value;\r\n    taskDescription.textContent = taskEditDescription.value;\r\n    // Hide input text field and show task label\r\n    listItem.classList.remove('editing-task');\r\n    taskEditDescription.classList.add('hidden');\r\n    taskDescription.classList.remove('hidden');\r\n    (0,_savetasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrTasks);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://todo-for-review/./src/edittask.js?");

/***/ }),

/***/ "./src/gettasks.js":
/*!*************************!*\
  !*** ./src/gettasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTasks = () => JSON.parse(localStorage.getItem('todoData')) || [];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTasks);\r\n\n\n//# sourceURL=webpack://todo-for-review/./src/gettasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_icon_refresh_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon-refresh.svg */ \"./src/images/icon-refresh.svg\");\n/* harmony import */ var _images_icon_refresh_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_icon_refresh_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_icon_return_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icon-return.svg */ \"./src/images/icon-return.svg\");\n/* harmony import */ var _images_icon_return_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_icon_return_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gettasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gettasks.js */ \"./src/gettasks.js\");\n/* harmony import */ var _showtasklist_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showtasklist.js */ \"./src/showtasklist.js\");\n/* harmony import */ var _addnewtask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addnewtask.js */ \"./src/addnewtask.js\");\n/* harmony import */ var _clearcompletedtasks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clearcompletedtasks.js */ \"./src/clearcompletedtasks.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst iconRefreshElem = document.getElementById('iconRefresh');\r\nconst iconReturnElem = document.getElementById('iconReturn');\r\niconRefreshElem.src = (_images_icon_refresh_svg__WEBPACK_IMPORTED_MODULE_1___default());\r\niconReturnElem.src = (_images_icon_return_svg__WEBPACK_IMPORTED_MODULE_2___default());\r\n\r\nconst arrTasks = (0,_gettasks_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_showtasklist_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(arrTasks, 'list');\r\n\r\nconst newTaskEnterBtn = document.getElementById('newTaskEnterBtn');\r\nnewTaskEnterBtn.addEventListener('click', () => { (0,_addnewtask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(arrTasks); });\r\n\r\nconst newTaskInput = document.getElementById('new-task');\r\nnewTaskInput.addEventListener('change', () => { (0,_addnewtask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(arrTasks); });\r\n\r\nconst clearCompletedBtn = document.getElementById('btnClearCompleted');\r\nclearCompletedBtn.addEventListener('click', (event) => (0,_clearcompletedtasks_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(event, arrTasks));\r\n\n\n//# sourceURL=webpack://todo-for-review/./src/index.js?");

/***/ }),

/***/ "./src/readnewtaskvalue.js":
/*!*********************************!*\
  !*** ./src/readnewtaskvalue.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst readNewTaskValue = () => {\r\n  const newTaskInput = document.getElementById('new-task');\r\n  const newTaskValue = newTaskInput.value.trim();\r\n  newTaskInput.value = '';\r\n  return newTaskValue;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readNewTaskValue);\n\n//# sourceURL=webpack://todo-for-review/./src/readnewtaskvalue.js?");

/***/ }),

/***/ "./src/savetasks.js":
/*!**************************!*\
  !*** ./src/savetasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst saveTasks = (arrTasks) => {\n  // re-assing the index (+1) to each task to always be ordered\n  arrTasks = arrTasks.map((task, index) => ({ ...task, index: index + 1 }));\n  localStorage.setItem('todoData', JSON.stringify(arrTasks));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTasks);\n\n//# sourceURL=webpack://todo-for-review/./src/savetasks.js?");

/***/ }),

/***/ "./src/showtasklist.js":
/*!*****************************!*\
  !*** ./src/showtasklist.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_icon_more_vert_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon-more-vert.svg */ \"./src/images/icon-more-vert.svg\");\n/* harmony import */ var _images_icon_more_vert_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_icon_more_vert_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_icon_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon-trash.svg */ \"./src/images/icon-trash.svg\");\n/* harmony import */ var _images_icon_trash_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_icon_trash_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deletetask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deletetask.js */ \"./src/deletetask.js\");\n/* harmony import */ var _edittask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edittask.js */ \"./src/edittask.js\");\n/* harmony import */ var _checktaskchange_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checktaskchange.js */ \"./src/checktaskchange.js\");\n/* harmony import */ var _draganddrophandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draganddrophandler.js */ \"./src/draganddrophandler.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// builds the elements and show the todo list inside the placeholder\r\nfunction showTaskList(arrTasks, parentElemId = 'list') {\r\n  const placeholder = document.getElementById(parentElemId);\r\n  placeholder.innerHTML = '';\r\n\r\n  // create and append task list items\r\n  arrTasks.forEach((task) => {\r\n    const listItem = document.createElement('li');\r\n    listItem.classList.add('list-item');\r\n    placeholder.appendChild(listItem);\r\n\r\n    const taskCheckbox = document.createElement('input');\r\n    taskCheckbox.classList = 'task-check';\r\n    taskCheckbox.type = 'checkbox';\r\n    taskCheckbox.checked = task.completed;\r\n    taskCheckbox.addEventListener('change', () => (0,_checktaskchange_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(taskCheckbox, arrTasks, task));\r\n\r\n    listItem.appendChild(taskCheckbox);\r\n\r\n    const taskDescription = document.createElement('span');\r\n    taskDescription.classList = 'task-label task-description';\r\n    taskDescription.textContent = task.description;\r\n    if (task.completed) {\r\n      taskDescription.classList.add('completed');\r\n    }\r\n    listItem.appendChild(taskDescription);\r\n\r\n    // create an input field for editing the task description, initially hidden\r\n    const taskEditDescription = document.createElement('input');\r\n    taskEditDescription.type = 'text';\r\n    taskEditDescription.classList = 'task-edit hidden';\r\n    taskEditDescription.value = task.description;\r\n    listItem.appendChild(taskEditDescription);\r\n\r\n    taskDescription.addEventListener('click', (event) => (0,_edittask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(event, arrTasks, task));\r\n\r\n    const taskDelButton = document.createElement('div');\r\n    taskDelButton.classList = 'task-delete-btn ';\r\n    taskDelButton.innerHTML = `<img class=\"icon-task icon-trash\" src=\"${(_images_icon_trash_svg__WEBPACK_IMPORTED_MODULE_1___default())}\" alt=\"delete trash\">`;\r\n    taskDelButton.addEventListener('click', (event) => (0,_deletetask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event, arrTasks, task));\r\n    listItem.appendChild(taskDelButton);\r\n\r\n    const taskMoreButton = document.createElement('div');\r\n    taskMoreButton.classList = 'task-more-btn';\r\n    taskMoreButton.innerHTML = `<img class=\"icon-task icon-more\" src=\"${(_images_icon_more_vert_svg__WEBPACK_IMPORTED_MODULE_0___default())}\" alt=\"more options\">`;\r\n    listItem.appendChild(taskMoreButton);\r\n\r\n    // setup for drag and drop feauture - for manually order the tasks\r\n    // Add draggable attribute to each list item\r\n    listItem.draggable = true;\r\n    // Add event listeners for dragstart, dragover and drop\r\n    listItem.addEventListener('dragstart', _draganddrophandler_js__WEBPACK_IMPORTED_MODULE_5__.dragStart);\r\n    listItem.addEventListener('dragover', _draganddrophandler_js__WEBPACK_IMPORTED_MODULE_5__.dragOver);\r\n    listItem.addEventListener('drop', (event) => (0,_draganddrophandler_js__WEBPACK_IMPORTED_MODULE_5__.dragDrop)(event, arrTasks));\r\n    listItem.addEventListener('dragend', _draganddrophandler_js__WEBPACK_IMPORTED_MODULE_5__.dragEnd);\r\n    listItem.addEventListener('dragleave', _draganddrophandler_js__WEBPACK_IMPORTED_MODULE_5__.dragLeave);\r\n\r\n    listItem.dataset.index = arrTasks.indexOf(task);\r\n\r\n    // end of setup for drag and drop feauture\r\n\r\n    placeholder.appendChild(listItem);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTaskList);\n\n//# sourceURL=webpack://todo-for-review/./src/showtasklist.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n  constructor(description = 'new task', completed = false, index = 0) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://todo-for-review/./src/task.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;