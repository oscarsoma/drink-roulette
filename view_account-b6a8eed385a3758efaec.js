/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"view_account": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~firebase":"vendors~firebase"}[chunkId]||chunkId) + "-" + {"vendors~firebase":"793c814ccdcc98d79c79"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./static/view-account.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/accountDump.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/accountDump.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Firebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Firebase.js */ "./static/Firebase.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: '?',
      dump: '?'
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var user, account;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Firebase_js__WEBPACK_IMPORTED_MODULE_0__["loadLibraries"]();

            case 2:
              _context.next = 4;
              return _Firebase_js__WEBPACK_IMPORTED_MODULE_0__["userIsLoggedIn"]();

            case 4:
              if (!_context.sent) {
                _context.next = 15;
                break;
              }

              _context.next = 7;
              return _Firebase_js__WEBPACK_IMPORTED_MODULE_0__["getLoggedInUser"]();

            case 7:
              user = _context.sent;
              _this.id = user.uid;
              _context.next = 11;
              return _Firebase_js__WEBPACK_IMPORTED_MODULE_0__["getWheels"](user.uid);

            case 11:
              account = _context.sent;
              _this.dump = JSON.stringify(account, null, 2);
              _context.next = 17;
              break;

            case 15:
              _this.id = '<Sign-in required>';
              _this.dump = '<Sign-in required>';

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/gaId.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/gaId.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: '?'
    };
  },
  mounted: function mounted() {
    var self = this;
    ga(function (tracker) {
      self.id = tracker.get('clientId');
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/simpletoolbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/simpletoolbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      toolbarBrand: window.location.host
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/accountDump.vue?vue&type=template&id=1937c1ae&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/accountDump.vue?vue&type=template&id=1937c1ae& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._v("\n  Firestore ID\n  "),
    _c("pre", [_vm._v(_vm._s(_vm.id))]),
    _vm._v(" "),
    _c("hr"),
    _vm._v("\n  Saved wheels\n  "),
    _c("pre", [_vm._v(_vm._s(_vm.dump))])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/gaId.vue?vue&type=template&id=67355f78&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/gaId.vue?vue&type=template&id=67355f78& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._v("\n  Google Analytics ID\n  "),
    _c("pre", [_vm._v(_vm._s(_vm.id))])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/simpletoolbar.vue?vue&type=template&id=159adf94&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/simpletoolbar.vue?vue&type=template&id=159adf94& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-navbar",
    { attrs: { type: "is-info" } },
    [
      _c(
        "template",
        { slot: "brand" },
        [
          _c(
            "b-navbar-item",
            { staticStyle: { "font-size": "24px" }, attrs: { href: "/" } },
            [
              _c("i", { staticClass: "fa fa-arrow-left" }),
              _vm._v(" " + _vm._s(_vm.toolbarBrand) + "\n    ")
            ]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./static/Firebase.js":
/*!****************************!*\
  !*** ./static/Firebase.js ***!
  \****************************/
/*! exports provided: loadLibraries, userIsLoggedIn, getLoggedInUser, logIn, logInToSheets, logOut, logUserActivity, getWheels, setAdminsWheelsToZero, logWheelRead, deleteWheel, saveWheel, deleteAccount, getDirtyWords, setDirtyWords, deleteAdmin, addAdmin, getDb, approveSharedWheel, deleteSharedWheel, resetSessionReviews, getSharedWheel, getNextSharedWheelForReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLibraries", function() { return loadLibraries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userIsLoggedIn", function() { return userIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUser", function() { return getLoggedInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logInToSheets", function() { return logInToSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logUserActivity", function() { return logUserActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWheels", function() { return getWheels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAdminsWheelsToZero", function() { return setAdminsWheelsToZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logWheelRead", function() { return logWheelRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteWheel", function() { return deleteWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWheel", function() { return saveWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAccount", function() { return deleteAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirtyWords", function() { return getDirtyWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDirtyWords", function() { return setDirtyWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAdmin", function() { return deleteAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAdmin", function() { return addAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDb", function() { return getDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveSharedWheel", function() { return approveSharedWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSharedWheel", function() { return deleteSharedWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSessionReviews", function() { return resetSessionReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedWheel", function() { return getSharedWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextSharedWheelForReview", function() { return getNextSharedWheelForReview; });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _FirebaseAuth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FirebaseAuth.js */ "./static/FirebaseAuth.js");
/* harmony import */ var _Firestore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firestore.js */ "./static/Firestore.js");
/* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var firebase;
function loadLibraries() {
  return _loadLibraries.apply(this, arguments);
}

function _loadLibraries() {
  _loadLibraries = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (firebase) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return importFirebaseLibs();

          case 3:
            firebase = _context.sent;
            initializeFirebase(firebase);
            enableOfflinePersistence(firebase);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadLibraries.apply(this, arguments);
}

function userIsLoggedIn() {
  return _userIsLoggedIn.apply(this, arguments);
}

function _userIsLoggedIn() {
  _userIsLoggedIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _FirebaseAuth_js__WEBPACK_IMPORTED_MODULE_1__["userIsLoggedIn"](firebase.auth());

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _userIsLoggedIn.apply(this, arguments);
}

function getLoggedInUser() {
  return _getLoggedInUser.apply(this, arguments);
}

function _getLoggedInUser() {
  _getLoggedInUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _FirebaseAuth_js__WEBPACK_IMPORTED_MODULE_1__["getLoggedInUser"](firebase.auth());

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getLoggedInUser.apply(this, arguments);
}

function logIn(_x, _x2) {
  return _logIn.apply(this, arguments);
}

function _logIn() {
  _logIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(providerName, locale) {
    var auth, provider;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            auth = firebase.auth();
            auth.languageCode = _Locales_js__WEBPACK_IMPORTED_MODULE_3__["getLoginLocale"](providerName, locale);
            provider = getProvider(providerName);
            _context4.next = 5;
            return _FirebaseAuth_js__WEBPACK_IMPORTED_MODULE_1__["logIn"](auth, provider);

          case 5:
            return _context4.abrupt("return", _context4.sent);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _logIn.apply(this, arguments);
}

function logInToSheets(_x3) {
  return _logInToSheets.apply(this, arguments);
}

function _logInToSheets() {
  _logInToSheets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(locale) {
    var auth, provider;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            auth = firebase.auth();
            auth.languageCode = _Locales_js__WEBPACK_IMPORTED_MODULE_3__["getLoginLocale"]('Google', locale);
            provider = getProvider('Google');
            _context5.next = 5;
            return _FirebaseAuth_js__WEBPACK_IMPORTED_MODULE_1__["logInToSheets"](auth, provider);

          case 5:
            return _context5.abrupt("return", _context5.sent);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _logInToSheets.apply(this, arguments);
}

function logOut() {
  try {
    firebase.auth().signOut();
  } catch (ex) {}
}
function logUserActivity(uid) {
  var serverNow = firebase.firestore.FieldValue.serverTimestamp();
  return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["logUserActivity"](firebase.firestore(), serverNow, uid);
}
function getWheels(_x4) {
  return _getWheels.apply(this, arguments);
}

function _getWheels() {
  _getWheels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(uid) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["getWheels"](firebase.firestore(), uid));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getWheels.apply(this, arguments);
}

function setAdminsWheelsToZero(_x5) {
  return _setAdminsWheelsToZero.apply(this, arguments);
}

function _setAdminsWheelsToZero() {
  _setAdminsWheelsToZero = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(adminsUid) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["setAdminsWheelsToZero"](firebase.firestore(), adminsUid));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _setAdminsWheelsToZero.apply(this, arguments);
}

function logWheelRead(_x6, _x7) {
  return _logWheelRead.apply(this, arguments);
}

function _logWheelRead() {
  _logWheelRead = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(uid, wheelTitle) {
    var serverNow;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            serverNow = firebase.firestore.FieldValue.serverTimestamp();
            _context8.next = 3;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["logWheelRead"](firebase.firestore(), serverNow, uid, wheelTitle);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _logWheelRead.apply(this, arguments);
}

function deleteWheel(_x8, _x9) {
  return _deleteWheel.apply(this, arguments);
}

function _deleteWheel() {
  _deleteWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(uid, wheelTitle) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["deleteWheel"](firebase.firestore(), uid, wheelTitle);

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _deleteWheel.apply(this, arguments);
}

function saveWheel(_x10, _x11) {
  return _saveWheel.apply(this, arguments);
}

function _saveWheel() {
  _saveWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(uid, config) {
    var serverNow;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            serverNow = firebase.firestore.FieldValue.serverTimestamp();
            _context10.next = 3;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["saveWheel"](firebase.firestore(), serverNow, uid, config);

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _saveWheel.apply(this, arguments);
}

function deleteAccount(_x12) {
  return _deleteAccount.apply(this, arguments);
}

function _deleteAccount() {
  _deleteAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(uid) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["deleteAccount"](firebase.firestore(), uid);

          case 2:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _deleteAccount.apply(this, arguments);
}

function getDirtyWords() {
  return _getDirtyWords.apply(this, arguments);
}

function _getDirtyWords() {
  _getDirtyWords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["getDirtyWords"](firebase.firestore());

          case 2:
            return _context12.abrupt("return", _context12.sent);

          case 3:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _getDirtyWords.apply(this, arguments);
}

function setDirtyWords(_x13) {
  return _setDirtyWords.apply(this, arguments);
}

function _setDirtyWords() {
  _setDirtyWords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(words) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["setDirtyWords"](firebase.firestore(), words);

          case 2:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _setDirtyWords.apply(this, arguments);
}

function deleteAdmin(_x14) {
  return _deleteAdmin.apply(this, arguments);
}

function _deleteAdmin() {
  _deleteAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(uid) {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["deleteAdmin"](firebase.firestore(), uid);

          case 2:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _deleteAdmin.apply(this, arguments);
}

function addAdmin(_x15, _x16) {
  return _addAdmin.apply(this, arguments);
}

function _addAdmin() {
  _addAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(uid, name) {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["addAdmin"](firebase.firestore(), uid, name);

          case 2:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _addAdmin.apply(this, arguments);
}

function getDb() {
  return firebase.firestore();
}
function approveSharedWheel(_x17, _x18) {
  return _approveSharedWheel.apply(this, arguments);
}

function _approveSharedWheel() {
  _approveSharedWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(path, uid) {
    var increment;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            increment = firebase.firestore.FieldValue.increment(1);
            _context16.next = 3;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["approveSharedWheel"](firebase.firestore(), increment, path, uid);

          case 3:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _approveSharedWheel.apply(this, arguments);
}

function deleteSharedWheel(_x19, _x20) {
  return _deleteSharedWheel.apply(this, arguments);
}

function _deleteSharedWheel() {
  _deleteSharedWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(path, incReviewCount) {
    var user, increment;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return getLoggedInUser();

          case 2:
            user = _context17.sent;
            increment = incReviewCount ? firebase.firestore.FieldValue.increment(1) : firebase.firestore.FieldValue.increment(0);
            _context17.next = 6;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["deleteSharedWheel"](firebase.firestore(), increment, path, user.uid);

          case 6:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _deleteSharedWheel.apply(this, arguments);
}

function resetSessionReviews(_x21) {
  return _resetSessionReviews.apply(this, arguments);
}

function _resetSessionReviews() {
  _resetSessionReviews = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(uid) {
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["resetSessionReviews"](firebase.firestore(), uid);

          case 2:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));
  return _resetSessionReviews.apply(this, arguments);
}

function getSharedWheel(_x22) {
  return _getSharedWheel.apply(this, arguments);
}

function _getSharedWheel() {
  _getSharedWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(path) {
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["getSharedWheel"](firebase.firestore(), path);

          case 2:
            return _context19.abrupt("return", _context19.sent);

          case 3:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));
  return _getSharedWheel.apply(this, arguments);
}

function getNextSharedWheelForReview() {
  return _getNextSharedWheelForReview.apply(this, arguments);
}

function _getNextSharedWheelForReview() {
  _getNextSharedWheelForReview = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return _Firestore_js__WEBPACK_IMPORTED_MODULE_2__["getNextSharedWheelForReview"](firebase.firestore());

          case 2:
            return _context20.abrupt("return", _context20.sent);

          case 3:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));
  return _getNextSharedWheelForReview.apply(this, arguments);
}

function importFirebaseLibs() {
  return _importFirebaseLibs.apply(this, arguments);
}

function _importFirebaseLibs() {
  _importFirebaseLibs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
    var fb;
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return __webpack_require__.e(/*! import() | firebase */ "vendors~firebase").then(__webpack_require__.t.bind(null, /*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js", 7));

          case 2:
            fb = _context21.sent;
            _context21.next = 5;
            return __webpack_require__.e(/*! import() | firebase */ "vendors~firebase").then(__webpack_require__.bind(null, /*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js"));

          case 5:
            _context21.next = 7;
            return __webpack_require__.e(/*! import() | firebase */ "vendors~firebase").then(__webpack_require__.bind(null, /*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js"));

          case 7:
            return _context21.abrupt("return", fb);

          case 8:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));
  return _importFirebaseLibs.apply(this, arguments);
}

function initializeFirebase(firebase) {
  var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    timestampsInSnapshots: true
  };
  firebase.initializeApp(firebaseConfig);
}

function enableOfflinePersistence(firebase) {
  var db = firebase.firestore();

  if (_Util_js__WEBPACK_IMPORTED_MODULE_0__["browserCanHandlePersistance"](navigator.userAgent)) {
    try {
      db.enablePersistence({
        synchronizeTabs: true
      });
    } catch (ex) {}
  }
}

function getProvider(providerName) {
  var providers = {
    'google': new firebase.auth.GoogleAuthProvider(),
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'twitter': new firebase.auth.TwitterAuthProvider()
  };
  return providers[providerName.toLowerCase()] || providers['google'];
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./static/FirebaseAuth.js":
/*!********************************!*\
  !*** ./static/FirebaseAuth.js ***!
  \********************************/
/*! exports provided: userIsLoggedIn, getLoggedInUser, logIn, logInToSheets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userIsLoggedIn", function() { return userIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUser", function() { return getLoggedInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logInToSheets", function() { return logInToSheets; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
function userIsLoggedIn(_x) {
  return _userIsLoggedIn.apply(this, arguments);
}

function _userIsLoggedIn() {
  _userIsLoggedIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(auth) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getLoggedInUser(auth);

          case 2:
            user = _context.sent;
            return _context.abrupt("return", !!user);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _userIsLoggedIn.apply(this, arguments);
}

function getLoggedInUser(_x2) {
  return _getLoggedInUser.apply(this, arguments);
}

function _getLoggedInUser() {
  _getLoggedInUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(auth) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!auth.currentUser) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", auth.currentUser);

          case 4:
            return _context2.abrupt("return", new Promise(function (resolve) {
              auth.onAuthStateChanged(function (user) {
                resolve(user);
              });
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLoggedInUser.apply(this, arguments);
}

function logIn(_x3, _x4) {
  return _logIn.apply(this, arguments);
}

function _logIn() {
  _logIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(auth, provider) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            provider.setCustomParameters({
              prompt: 'select_account'
            });
            _context3.next = 3;
            return auth.signInWithPopup(provider);

          case 3:
            return _context3.abrupt("return", auth.currentUser);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _logIn.apply(this, arguments);
}

function logInToSheets(_x5, _x6) {
  return _logInToSheets.apply(this, arguments);
}

function _logInToSheets() {
  _logInToSheets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(auth, provider) {
    var result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            provider.addScope('https://www.googleapis.com/auth/drive.readonly');
            provider.addScope('https://www.googleapis.com/auth/spreadsheets.readonly');
            provider.setCustomParameters({
              prompt: 'select_account'
            });
            _context4.next = 5;
            return auth.signInWithPopup(provider);

          case 5:
            result = _context4.sent;
            return _context4.abrupt("return", result.credential.accessToken);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _logInToSheets.apply(this, arguments);
}

/***/ }),

/***/ "./static/Firestore.js":
/*!*****************************!*\
  !*** ./static/Firestore.js ***!
  \*****************************/
/*! exports provided: logUserActivity, getWheels, setAdminsWheelsToZero, logWheelRead, deleteWheel, saveWheel, deleteAccount, getDirtyWords, setDirtyWords, deleteAdmin, addAdmin, approveSharedWheel, deleteSharedWheel, resetSessionReviews, getSharedWheel, getNextSharedWheelForReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logUserActivity", function() { return logUserActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWheels", function() { return getWheels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAdminsWheelsToZero", function() { return setAdminsWheelsToZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logWheelRead", function() { return logWheelRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteWheel", function() { return deleteWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWheel", function() { return saveWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAccount", function() { return deleteAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirtyWords", function() { return getDirtyWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDirtyWords", function() { return setDirtyWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAdmin", function() { return deleteAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAdmin", function() { return addAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveSharedWheel", function() { return approveSharedWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSharedWheel", function() { return deleteSharedWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSessionReviews", function() { return resetSessionReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedWheel", function() { return getSharedWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextSharedWheelForReview", function() { return getNextSharedWheelForReview; });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

function logUserActivity(db, serverNow, uid) {
  return db.doc("accounts/".concat(uid)).set({
    uid: uid,
    lastActive: serverNow
  });
}
function getWheels(_x, _x2) {
  return _getWheels.apply(this, arguments);
}

function _getWheels() {
  _getWheels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(db, uid) {
    var snap, wheels;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.collection("accounts/".concat(uid, "/wheels")).get();

          case 2:
            snap = _context.sent;
            wheels = [];
            snap.forEach(function (doc) {
              wheels.push(doc.data().config);
            });
            return _context.abrupt("return", wheels.sort(function (a, b) {
              return a.title.localeCompare(b.title, 'en', {
                numeric: true,
                sensitivity: 'base'
              });
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getWheels.apply(this, arguments);
}

function setAdminsWheelsToZero(_x3, _x4) {
  return _setAdminsWheelsToZero.apply(this, arguments);
}

function _setAdminsWheelsToZero() {
  _setAdminsWheelsToZero = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(db, adminsUid) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return db.doc("admins/".concat(adminsUid)).update({
              totalReviews: 0,
              sessionReviews: 0
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _setAdminsWheelsToZero.apply(this, arguments);
}

function logWheelRead(_x5, _x6, _x7, _x8) {
  return _logWheelRead.apply(this, arguments);
}

function _logWheelRead() {
  _logWheelRead = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(db, serverNow, uid, wheelTitle) {
    var title, docRef, doc, wheelData, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            title = _Util_js__WEBPACK_IMPORTED_MODULE_0__["sanitizeWheelTitle"](wheelTitle);
            docRef = db.doc("accounts/".concat(uid, "/wheels/").concat(title));
            _context3.next = 4;
            return docRef.get();

          case 4:
            doc = _context3.sent;

            if (!doc.exists) {
              _context3.next = 10;
              break;
            }

            wheelData = doc.data();
            data = {
              lastRead: serverNow,
              readCount: wheelData.readCount + 1
            };
            _context3.next = 10;
            return docRef.update(data);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _logWheelRead.apply(this, arguments);
}

function deleteWheel(_x9, _x10, _x11) {
  return _deleteWheel.apply(this, arguments);
}

function _deleteWheel() {
  _deleteWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(db, uid, wheelTitle) {
    var title;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            title = _Util_js__WEBPACK_IMPORTED_MODULE_0__["sanitizeWheelTitle"](wheelTitle);
            _context4.next = 3;
            return db.doc("accounts/".concat(uid, "/wheels/").concat(title))["delete"]();

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteWheel.apply(this, arguments);
}

function saveWheel(_x12, _x13, _x14, _x15) {
  return _saveWheel.apply(this, arguments);
}

function _saveWheel() {
  _saveWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(db, serverNow, uid, config) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return logUserActivity(db, serverNow, uid);

          case 2:
            config.title = _Util_js__WEBPACK_IMPORTED_MODULE_0__["sanitizeWheelTitle"](config.title);
            _context5.next = 5;
            return wheelExists(db, uid, config.title);

          case 5:
            if (!_context5.sent) {
              _context5.next = 9;
              break;
            }

            updateWheel(db, serverNow, uid, config);
            _context5.next = 10;
            break;

          case 9:
            createNewWheel(db, serverNow, uid, config);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _saveWheel.apply(this, arguments);
}

function deleteAccount(_x16, _x17) {
  return _deleteAccount.apply(this, arguments);
}

function _deleteAccount() {
  _deleteAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(db, uid) {
    var batch, snap, doc;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            batch = db.batch();
            _context6.next = 3;
            return db.collection("accounts/".concat(uid, "/wheels")).get();

          case 3:
            snap = _context6.sent;
            snap.forEach(function (doc) {
              batch["delete"](doc.ref);
            });
            _context6.next = 7;
            return db.doc("accounts/".concat(uid)).get();

          case 7:
            doc = _context6.sent;
            batch["delete"](doc.ref);
            _context6.next = 11;
            return batch.commit();

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _deleteAccount.apply(this, arguments);
}

function getDirtyWords(_x18) {
  return _getDirtyWords.apply(this, arguments);
}

function _getDirtyWords() {
  _getDirtyWords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(db) {
    var docSnapshot;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return db.doc("settings/DIRTY_WORDS").get();

          case 2:
            docSnapshot = _context7.sent;
            return _context7.abrupt("return", docSnapshot.data().value.sort());

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getDirtyWords.apply(this, arguments);
}

function setDirtyWords(_x19, _x20) {
  return _setDirtyWords.apply(this, arguments);
}

function _setDirtyWords() {
  _setDirtyWords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(db, words) {
    var formattedWords;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            formattedWords = words.map(function (w) {
              return w.toLowerCase();
            }).sort();
            _context8.next = 3;
            return db.doc("settings/DIRTY_WORDS").set({
              value: formattedWords
            });

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _setDirtyWords.apply(this, arguments);
}

function deleteAdmin(_x21, _x22) {
  return _deleteAdmin.apply(this, arguments);
}

function _deleteAdmin() {
  _deleteAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(db, uid) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return db.doc("admins/".concat(uid))["delete"]();

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _deleteAdmin.apply(this, arguments);
}

function addAdmin(_x23, _x24, _x25) {
  return _addAdmin.apply(this, arguments);
}

function _addAdmin() {
  _addAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(db, uid, name) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return db.doc("admins/".concat(uid)).set({
              uid: uid,
              name: name
            });

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _addAdmin.apply(this, arguments);
}

function approveSharedWheel(_x26, _x27, _x28, _x29) {
  return _approveSharedWheel.apply(this, arguments);
}

function _approveSharedWheel() {
  _approveSharedWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(db, increment, path, uid) {
    var batch;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            batch = db.batch();
            batch.update(db.doc("shared-wheels/".concat(path)), {
              reviewStatus: 'Approved'
            });
            batch["delete"](db.doc("shared-wheels-review-queue/".concat(path)));
            batch.update(db.doc("admins/".concat(uid)), {
              totalReviews: increment,
              sessionReviews: increment,
              lastReview: new Date()
            });
            _context11.next = 6;
            return batch.commit();

          case 6:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _approveSharedWheel.apply(this, arguments);
}

function deleteSharedWheel(_x30, _x31, _x32, _x33) {
  return _deleteSharedWheel.apply(this, arguments);
}

function _deleteSharedWheel() {
  _deleteSharedWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(db, increment, path, uid) {
    var wheelDoc, wheel;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return db.doc("shared-wheels/".concat(path)).get();

          case 2:
            wheelDoc = _context12.sent;
            if (wheelDoc.exists) wheel = wheelDoc.data();
            _context12.next = 6;
            return Promise.all([db.doc("shared-wheels/".concat(path))["delete"](), db.doc("shared-wheels-review-queue/".concat(path))["delete"](), db.doc("shared-wheels-rejected/".concat(path)).set(wheel), db.doc("admins/".concat(uid)).update({
              totalReviews: increment
            }), db.doc("admins/".concat(uid)).update({
              sessionReviews: increment
            }), db.doc("admins/".concat(uid)).update({
              lastReview: new Date()
            })]);

          case 6:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _deleteSharedWheel.apply(this, arguments);
}

function resetSessionReviews(_x34, _x35) {
  return _resetSessionReviews.apply(this, arguments);
}

function _resetSessionReviews() {
  _resetSessionReviews = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(db, uid) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return db.doc("admins/".concat(uid)).update({
              sessionReviews: 0
            });

          case 2:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _resetSessionReviews.apply(this, arguments);
}

function getSharedWheel(_x36, _x37) {
  return _getSharedWheel.apply(this, arguments);
}

function _getSharedWheel() {
  _getSharedWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(db, path) {
    var doc;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return db.doc("shared-wheels/".concat(path)).get();

          case 2:
            doc = _context14.sent;

            if (!doc.exists) {
              _context14.next = 5;
              break;
            }

            return _context14.abrupt("return", doc.data());

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _getSharedWheel.apply(this, arguments);
}

function getNextSharedWheelForReview(_x38) {
  return _getNextSharedWheelForReview.apply(this, arguments);
}

function _getNextSharedWheelForReview() {
  _getNextSharedWheelForReview = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(db) {
    var wheel, querySnapshot, _querySnapshot, _querySnapshot2;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            if (!(Math.random() < 0.1)) {
              _context15.next = 5;
              break;
            }

            _context15.next = 3;
            return db.collection('shared-wheels-review-queue').where('reviewStatus', '==', 'Suspicious').limit(1).get();

          case 3:
            querySnapshot = _context15.sent;

            if (querySnapshot.size > 0) {
              wheel = querySnapshot.docs[0].data();
            }

          case 5:
            if (!(!wheel && Math.random() < 0.5)) {
              _context15.next = 10;
              break;
            }

            _context15.next = 8;
            return db.collection('shared-wheels-review-queue').where('predictedApproval', '<', 0.7).orderBy('predictedApproval', 'asc').limit(1).get();

          case 8:
            _querySnapshot = _context15.sent;

            if (_querySnapshot.size > 0) {
              wheel = _querySnapshot.docs[0].data();
            }

          case 10:
            if (wheel) {
              _context15.next = 15;
              break;
            }

            _context15.next = 13;
            return db.collection('shared-wheels-review-queue').orderBy('lastRead', 'desc').limit(1).get();

          case 13:
            _querySnapshot2 = _context15.sent;

            if (_querySnapshot2.size > 0) {
              wheel = _querySnapshot2.docs[0].data();
            }

          case 15:
            return _context15.abrupt("return", wheel);

          case 16:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _getNextSharedWheelForReview.apply(this, arguments);
}

function wheelExists(_x39, _x40, _x41) {
  return _wheelExists.apply(this, arguments);
}

function _wheelExists() {
  _wheelExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(db, uid, title) {
    var doc;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return db.doc("accounts/".concat(uid, "/wheels/").concat(title)).get();

          case 2:
            doc = _context16.sent;
            return _context16.abrupt("return", doc.exists);

          case 4:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _wheelExists.apply(this, arguments);
}

function updateWheel(_x42, _x43, _x44, _x45) {
  return _updateWheel.apply(this, arguments);
}

function _updateWheel() {
  _updateWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(db, serverNow, uid, config) {
    var docRef, data;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return db.doc("accounts/".concat(uid, "/wheels/").concat(config.title));

          case 2:
            docRef = _context17.sent;
            data = {
              config: config,
              lastWrite: serverNow
            };
            _context17.next = 6;
            return docRef.update(data);

          case 6:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _updateWheel.apply(this, arguments);
}

function createNewWheel(_x46, _x47, _x48, _x49) {
  return _createNewWheel.apply(this, arguments);
}

function _createNewWheel() {
  _createNewWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(db, serverNow, uid, config) {
    var data, docRef;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            data = {
              config: config,
              created: serverNow,
              lastRead: null,
              lastWrite: serverNow,
              readCount: 0
            };
            _context18.next = 3;
            return db.doc("accounts/".concat(uid, "/wheels/").concat(config.title));

          case 3:
            docRef = _context18.sent;
            _context18.next = 6;
            return docRef.set(data);

          case 6:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));
  return _createNewWheel.apply(this, arguments);
}

/***/ }),

/***/ "./static/Locales.js":
/*!***************************!*\
  !*** ./static/Locales.js ***!
  \***************************/
/*! exports provided: getLocale, getRelativeUrl, getAbsoluteUrl, getLoginLocale, getOfficialList, getMessagesFileName, getLangTipLocale, getNamesForAll, getDomainLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeUrl", function() { return getRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteUrl", function() { return getAbsoluteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginLocale", function() { return getLoginLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOfficialList", function() { return getOfficialList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessagesFileName", function() { return getMessagesFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLangTipLocale", function() { return getLangTipLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamesForAll", function() { return getNamesForAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomainLocale", function() { return getDomainLocale; });
/*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var nonEnglishDomains = [{
  partialName: 'noms',
  locale: 'fr'
}];
var locales = [{
  name: 'en',
  humanName: 'English',
  googleName: 'en_US',
  twitterName: 'en',
  file: 'en-US.json'
}, {
  name: 'fr',
  humanName: 'Français',
  googleName: 'fr_FR',
  twitterName: 'fr',
  file: 'fr-FR.json'
}, {
  name: 'sv',
  humanName: 'Svenska',
  googleName: 'sv_SE',
  twitterName: 'sv',
  file: 'sv-SE.json'
}];
function getLocale(hostName, pathName) {
  return getPathLocale(pathName) || getDomainLocale(hostName);
}
function getRelativeUrl(hostName, locale) {
  return getDomainLocale(hostName) == locale ? '/' : "/".concat(locale, "/");
}
function getAbsoluteUrl(hostName, locale, path) {
  var link = hostName + getRelativeUrl(hostName, locale) + '/' + path;
  return link.replace('//', '/');
}
function getLoginLocale(providerName, locale) {
  var matchedLocales = locales.filter(function (l) {
    return l.name == locale;
  });

  if (providerName.toLowerCase() == 'twitter') {
    return matchedLocales.reduce(function (acc, current) {
      return current.twitterName;
    }, 'en_US');
  } else {
    return matchedLocales.reduce(function (acc, current) {
      return current.googleName;
    }, 'en_US');
  }
}
function getOfficialList(hostName) {
  return locales.map(function (l) {
    return {
      name: l.name,
      url: hostName + getRelativeUrl(hostName, l.name)
    };
  }).filter(function (l) {
    return l.name != 'en-PI';
  });
}
function getMessagesFileName(locale) {
  return locales.filter(function (l) {
    return l.name == locale;
  }).reduce(function (acc, current) {
    return current.file;
  }, 'en-US.json');
}
function getLangTipLocale(systemLocale, navigatorLanguages) {
  if (!navigatorLanguages || !navigatorLanguages.length) return '';
  var userLocale = navigatorLanguages[0];
  var shouldShowLanguageTip = !areSameLocale(userLocale, systemLocale) && localeIsSupported(userLocale);
  return shouldShowLanguageTip ? getClosestSupportedLocale(userLocale) : '';
}
function getNamesForAll() {
  return locales.map(function (locale) {
    return {
      name: locale.name,
      humanName: locale.humanName
    };
  }).sort(function (a, b) {
    return a.humanName.localeCompare(b.humanName);
  });
}
function getDomainLocale(hostName) {
  return nonEnglishDomains.filter(function (domain) {
    return hostName.includes(domain.partialName);
  }).reduce(function (acc, current) {
    return current.locale;
  }, 'en');
}

function areSameLocale(locale1, locale2) {
  if (locale1.length == locale2.length) {
    return locale1 == locale2;
  } else {
    return getLangFromLocale(locale1) == getLangFromLocale(locale2);
  }
}

function getLangFromLocale(locale) {
  return locale.split('-')[0];
}

function localeIsSupported(locale) {
  return !!locales.find(function (l) {
    return areSameLocale(locale, l.name);
  });
}

function getClosestSupportedLocale(locale) {
  return locales.find(function (l) {
    return areSameLocale(locale, l.name);
  }).name;
}

function getPathLocale(pathName) {
  return locales.map(function (locale) {
    return locale.name;
  }).find(function (locale) {
    var re1 = new RegExp("\\/".concat(locale, "\\/?$"));
    var re2 = new RegExp("\\/".concat(locale, "\\/"));
    return pathName.match(re1) || pathName.match(re2);
  });
}

/***/ }),

/***/ "./static/Util.js":
/*!************************!*\
  !*** ./static/Util.js ***!
  \************************/
/*! exports provided: getHtmlAsText, browserCanHandlePersistance, arraysEqual, boxFits, extractDisplayText, extractImage, shuffleArray, getOccurencesInArray, browserIsIE, browserIsIEOrOldEdge, sortWheelEntries, isTouchScreen, sanitizeWheelTitle, getAddedEntries, initTracking, trackEvent, trackException, escapeHtml, colorIsWhite, getElementsByClassName, updateColorStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHtmlAsText", function() { return getHtmlAsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserCanHandlePersistance", function() { return browserCanHandlePersistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return arraysEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxFits", function() { return boxFits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractDisplayText", function() { return extractDisplayText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractImage", function() { return extractImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOccurencesInArray", function() { return getOccurencesInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserIsIE", function() { return browserIsIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserIsIEOrOldEdge", function() { return browserIsIEOrOldEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWheelEntries", function() { return sortWheelEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchScreen", function() { return isTouchScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeWheelTitle", function() { return sanitizeWheelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddedEntries", function() { return getAddedEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTracking", function() { return initTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackEvent", function() { return trackEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackException", function() { return trackException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return escapeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorIsWhite", function() { return colorIsWhite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementsByClassName", function() { return getElementsByClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateColorStyles", function() { return updateColorStyles; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var getHtmlAsTextCache = {};
function getHtmlAsText(html) {
  if (!(html in getHtmlAsTextCache)) {
    var retVal;

    try {
      var doc = new DOMParser().parseFromString(html, "text/html");
      retVal = doc.documentElement.textContent;
    } catch (e) {
      var replacements = [['&amp;', '&'], ['&nbsp;', ' '], ['&lt;', '<'], ['&gt;', '>']];
      retVal = html;
      replacements.forEach(function (element) {
        var re = new RegExp(element[0], 'g');
        retVal = retVal.replace(re, element[1]);
      });
    }

    getHtmlAsTextCache[html] = retVal;
  }

  return getHtmlAsTextCache[html];
}
function browserCanHandlePersistance(userAgent) {
  // Exclude iOS 12.2 due to a bug in that OS:
  // https://github.com/firebase/firebase-js-sdk/issues/1670
  return userAgent.indexOf('OS 12_2 like Mac OS X') == -1;
}
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}
function boxFits(a, r, b, w, h) {
  var d = Math.sqrt(Math.pow(r, 2) - Math.pow(h / 2, 2)) - Math.max(h * Math.cos(a) / (2 * Math.sin(a)), b);
  return d >= w;
}
function extractDisplayText(entry, shorten) {
  if (entry) {
    var match = entry.match(/<img.*?src="(.*?)".*?>/);

    if (match) {
      entry = entry.replace(match[0], '');
    }
  }

  var displayText = '';

  if (entry) {
    displayText = getHtmlAsText(entry);

    if (shorten) {
      var MAX_LENGTH = 18;

      if (displayText.length > MAX_LENGTH) {
        displayText = displayText.substring(0, MAX_LENGTH - 1) + '…';
      }
    } // Add font-proportional space between name and edges of wheel.


    displayText = ' ' + displayText + ' ';
  }

  return displayText;
}
function extractImage(entry) {
  var imageData = '';

  if (entry) {
    var match = entry.match(/<img.*?src="(.*?)".*?>/);

    if (match) {
      imageData = match[1];
    }
  }

  return imageData;
}
function shuffleArray(inputArray) {
  var array = inputArray.slice(0);

  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
function getOccurencesInArray(array, entry) {
  return array.reduce(function (accumulator, currentValue) {
    return accumulator + (currentValue == entry ? 1 : 0);
  }, 0);
}
function browserIsIE() {
  return !!window.document.documentMode;
}
function browserIsIEOrOldEdge(userAgent) {
  if (!userAgent) return false;
  var re = new RegExp(' MSIE \\d|Trident\/|Edge\/');
  return !!userAgent.match(re);
}
function sortWheelEntries(entries) {
  return entries.slice(0).sort(function (a, b) {
    return a.localeCompare(b, 'en', {
      numeric: true,
      sensitivity: 'base'
    });
  });
}
function isTouchScreen() {
  var retVal = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  return retVal;
}
function sanitizeWheelTitle(title) {
  var retVal = title;
  retVal = retVal.replace(/\//g, '\\');
  if (retVal == '..') retVal = '.. ';
  if (retVal == '.') retVal = '. ';
  if (retVal == '') retVal = '?';

  if (retVal.length > 100) {
    retVal = retVal.substring(0, 97) + '...';
  }

  return retVal;
}
function getAddedEntries(oldEntries, newEntries) {
  if (!oldEntries) oldEntries = [];
  if (!newEntries) newEntries = [];
  return newEntries.filter(function (x) {
    return !oldEntries.includes(x);
  });
}
function initTracking() {
  window.onerror = function (message, source, lineno, colno, error) {
    try {
      if (error) message = error.toString();
      trackEvent('window.onerror', message, navigator.userAgent);
    } catch (ex) {
      console.error(ex);
    }
  };
}
function trackEvent(eventCategory, eventAction, eventLabel) {
  if (location.host.startsWith('localhost')) return;

  if (typeof ga !== 'undefined') {
    ga('send', 'event', eventCategory, eventAction, eventLabel);
  }
}
function trackException(exception, extraData) {
  console.error(exception);
}
function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function colorIsWhite(color) {
  if (!color) return true;
  return color.toLowerCase() == '#ffffff';
}
function getElementsByClassName(classNames) {
  var retVal = [];

  var _iterator = _createForOfIteratorHelper(classNames),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var className = _step.value;

      var _iterator2 = _createForOfIteratorHelper(document.getElementsByClassName(className)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var el = _step2.value;
          retVal.push(el);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return retVal;
}
function updateColorStyles(darkMode, darkModeColor, pageColor) {
  var sheet = _toConsumableArray(document.styleSheets).find(function (sheet) {
    return sheet.href && (sheet.href.includes('index.css') || sheet.href.includes('admin.css'));
  });

  var rule = _toConsumableArray(sheet.rules).find(function (rule) {
    return rule.selectorText == '.can-go-dark';
  });

  if (darkMode) {
    rule.style.color = '#fff';
    rule.style.backgroundColor = darkModeColor;
    document.documentElement.style.backgroundColor = '#000';
    document.body.style.backgroundColor = '#000';
  } else {
    rule.style.color = '';
    rule.style.backgroundColor = '';
    document.documentElement.style.backgroundColor = pageColor;
    document.body.style.backgroundColor = pageColor;
  } //document.body.style.backgroundImage = "url('./images/background.png')";

}

/***/ }),

/***/ "./static/accountDump.vue":
/*!********************************!*\
  !*** ./static/accountDump.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accountDump_vue_vue_type_template_id_1937c1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accountDump.vue?vue&type=template&id=1937c1ae& */ "./static/accountDump.vue?vue&type=template&id=1937c1ae&");
/* harmony import */ var _accountDump_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountDump.vue?vue&type=script&lang=js& */ "./static/accountDump.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _accountDump_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _accountDump_vue_vue_type_template_id_1937c1ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _accountDump_vue_vue_type_template_id_1937c1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/accountDump.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/accountDump.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./static/accountDump.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountDump_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./accountDump.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/accountDump.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountDump_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/accountDump.vue?vue&type=template&id=1937c1ae&":
/*!***************************************************************!*\
  !*** ./static/accountDump.vue?vue&type=template&id=1937c1ae& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accountDump_vue_vue_type_template_id_1937c1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./accountDump.vue?vue&type=template&id=1937c1ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/accountDump.vue?vue&type=template&id=1937c1ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accountDump_vue_vue_type_template_id_1937c1ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accountDump_vue_vue_type_template_id_1937c1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/gaId.vue":
/*!*************************!*\
  !*** ./static/gaId.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gaId_vue_vue_type_template_id_67355f78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gaId.vue?vue&type=template&id=67355f78& */ "./static/gaId.vue?vue&type=template&id=67355f78&");
/* harmony import */ var _gaId_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gaId.vue?vue&type=script&lang=js& */ "./static/gaId.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gaId_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gaId_vue_vue_type_template_id_67355f78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gaId_vue_vue_type_template_id_67355f78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/gaId.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/gaId.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./static/gaId.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gaId_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./gaId.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/gaId.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gaId_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/gaId.vue?vue&type=template&id=67355f78&":
/*!********************************************************!*\
  !*** ./static/gaId.vue?vue&type=template&id=67355f78& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gaId_vue_vue_type_template_id_67355f78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./gaId.vue?vue&type=template&id=67355f78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/gaId.vue?vue&type=template&id=67355f78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gaId_vue_vue_type_template_id_67355f78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gaId_vue_vue_type_template_id_67355f78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/images/favicon.png":
/*!***********************************!*\
  !*** ./static/images/favicon.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/favicon.png");

/***/ }),

/***/ "./static/images/icon_192.png":
/*!************************************!*\
  !*** ./static/images/icon_192.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/icon_192.png");

/***/ }),

/***/ "./static/images/icon_57.png":
/*!***********************************!*\
  !*** ./static/images/icon_57.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/icon_57.png");

/***/ }),

/***/ "./static/simpletoolbar.vue":
/*!**********************************!*\
  !*** ./static/simpletoolbar.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simpletoolbar.vue?vue&type=template&id=159adf94& */ "./static/simpletoolbar.vue?vue&type=template&id=159adf94&");
/* harmony import */ var _simpletoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simpletoolbar.vue?vue&type=script&lang=js& */ "./static/simpletoolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _simpletoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/simpletoolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/simpletoolbar.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./static/simpletoolbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./simpletoolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/simpletoolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/simpletoolbar.vue?vue&type=template&id=159adf94&":
/*!*****************************************************************!*\
  !*** ./static/simpletoolbar.vue?vue&type=template&id=159adf94& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./simpletoolbar.vue?vue&type=template&id=159adf94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/simpletoolbar.vue?vue&type=template&id=159adf94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/view-account.js":
/*!********************************!*\
  !*** ./static/view-account.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var buefy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buefy */ "./node_modules/buefy/dist/esm/index.js");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buefy/dist/buefy.css */ "./node_modules/buefy/dist/buefy.css");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_favicon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/favicon.png */ "./static/images/favicon.png");
/* harmony import */ var _images_icon_57_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/icon_57.png */ "./static/images/icon_57.png");
/* harmony import */ var _images_icon_192_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/icon_192.png */ "./static/images/icon_192.png");
/* harmony import */ var _simpletoolbar_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simpletoolbar.vue */ "./static/simpletoolbar.vue");
/* harmony import */ var _gaId_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gaId.vue */ "./static/gaId.vue");
/* harmony import */ var _accountDump_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accountDump.vue */ "./static/accountDump.vue");
/*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(buefy__WEBPACK_IMPORTED_MODULE_1__["default"]);







var app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  components: {
    simpletoolbar: _simpletoolbar_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    gaId: _gaId_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    accountDump: _accountDump_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

/***/ })

/******/ });
//# sourceMappingURL=view_account-b6a8eed385a3758efaec.js.map