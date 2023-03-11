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
/******/ 		"admin": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"locale-en-US":"locale-en-US","locale-fr-FR":"locale-fr-FR","locale-sv-SE":"locale-sv-SE","vendors~firebase":"vendors~firebase","vendors~vibrant":"vendors~vibrant"}[chunkId]||chunkId) + "-" + {"locale-en-US":"c4317b8f0cb01a15adf1","locale-fr-FR":"f8fa0aa2ba61b00ab51f","locale-sv-SE":"4465e066bb82154f6295","vendors~firebase":"793c814ccdcc98d79c79","vendors~vibrant":"d01f260501d5ec725296"}[chunkId] + ".js"
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
/******/ 	deferredModules.push(["./static/admin/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/admintoolbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/admintoolbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util.js */ "./static/Util.js");
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
  },
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.state.appStatus.userIsLoggedIn;
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/app.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/app.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admintoolbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admintoolbar.vue */ "./static/admin/admintoolbar.vue");
/* harmony import */ var _spinningwheel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spinningwheel.vue */ "./static/spinningwheel.vue");
/* harmony import */ var _textbox_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textbox.vue */ "./static/admin/textbox.vue");
/* harmony import */ var _usersdialog_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usersdialog.vue */ "./static/admin/usersdialog.vue");
/* harmony import */ var _paymentsdialog_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paymentsdialog.vue */ "./static/admin/paymentsdialog.vue");
/* harmony import */ var _dirtywordsdialog_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dirtywordsdialog.vue */ "./static/admin/dirtywordsdialog.vue");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Util.js */ "./static/Util.js");
/* harmony import */ var _Firebase_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Firebase.js */ "./static/Firebase.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters.js */ "./static/admin/filters.js");
var _computed;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    admintoolbar: _admintoolbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    spinningwheel: _spinningwheel_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    textbox: _textbox_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    usersdialog: _usersdialog_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    paymentsdialog: _paymentsdialog_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    dirtywordsdialog: _dirtywordsdialog_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  filters: {
    timeago: _filters_js__WEBPACK_IMPORTED_MODULE_8__["timeago"],
    dollaramount: _filters_js__WEBPACK_IMPORTED_MODULE_8__["dollaramount"],
    firestoremilliseconds: _filters_js__WEBPACK_IMPORTED_MODULE_8__["firestoremilliseconds"],
    localestring: _filters_js__WEBPACK_IMPORTED_MODULE_8__["localestring"],
    percent: _filters_js__WEBPACK_IMPORTED_MODULE_8__["percent"]
  },
  data: function data() {
    return {
      linkInTextBox: '',
      waitAnimation: ''
    };
  },
  computed: (_computed = {
    wheel: function wheel() {
      return this.$store.state.wheel;
    },
    earningsPerReview: function earningsPerReview() {
      return this.$store.state.earningsPerReviewDoc.value;
    },
    user: function user() {
      return this.$store.state.user;
    },
    darkMode: function darkMode() {
      return this.$store.getters.darkMode;
    },
    userIsLoggedIn: function userIsLoggedIn() {
      return this.$store.state.appStatus.userIsLoggedIn;
    },
    preferences: function preferences() {
      return this.$store.state.preferences;
    }
  }, _defineProperty(_computed, "darkMode", function darkMode() {
    return this.$store.getters.darkMode;
  }), _defineProperty(_computed, "pageColor", function pageColor() {
    return this.$store.state.wheelConfig.pageBackgroundColor;
  }), _computed),
  watch: {
    wheelConfig: function wheelConfig() {
      _Util_js__WEBPACK_IMPORTED_MODULE_6__["updateColorStyles"](this.darkMode, '#000', this.pageColor);
    },
    preferences: function preferences() {
      _Util_js__WEBPACK_IMPORTED_MODULE_6__["updateColorStyles"](this.darkMode, '#000', this.pageColor);
    }
  },
  mounted: function mounted() {
    this.refreshWheelOnFontLoad();
    _Firebase_js__WEBPACK_IMPORTED_MODULE_7__["loadLibraries"]();
    var self = this;
    document.addEventListener('keyup', function (event) {
      if (event.ctrlKey) {
        if (event.key == 'n') self.loadNextSharedWheel();
        if (event.key == 'a') self.approveWheel();
        if (event.key == 't') self.translateSharedWheel();
      }
    });
  },
  methods: {
    logIn: function logIn() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var user, idToken, self;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_7__["logIn"]('Google', 'en');

              case 2:
                user = _context3.sent;

                _this.$store.dispatch('bindFirestore');

                _context3.next = 6;
                return user.getIdToken();

              case 6:
                idToken = _context3.sent;

                _this.$store.commit('logInUser', {
                  photoUrl: user.photoURL,
                  displayName: user.displayName,
                  uid: user.uid,
                  idToken: idToken
                });

                _this.$store.dispatch('bindUser', user.uid);

                _this.$store.dispatch('resetSessionReviews', user.uid);

                self = _this;
                setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var idToken;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return user.getIdToken(true);

                        case 2:
                          idToken = _context.sent;
                          self.$store.commit('logInUser', {
                            photoUrl: user.photoURL,
                            displayName: user.displayName,
                            uid: user.uid,
                            idToken: idToken
                          });

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), 1000 * 60 * 55);
                setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          self.$store.dispatch('updateReviewQueueLength');

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })), 1000 * 60);

                _this.$store.dispatch('updateReviewQueueLength');

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    logOut: function logOut() {
      _Firebase_js__WEBPACK_IMPORTED_MODULE_7__["logOut"]();
      this.$store.commit('logOutUser');
    },
    refreshWheelOnFontLoad: function refreshWheelOnFontLoad() {
      if (document.fonts) {
        var self = this;
        document.fonts.ready.then(function () {
          self.$refs.spinningwheel.refresh();
        });
      }
    },
    loadSharedWheel: function loadSharedWheel() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var match, path;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                match = _this2.linkInTextBox.match(/(\w\w\w\-\w\w\w)/);

                if (!match) {
                  _context4.next = 13;
                  break;
                }

                path = match[1];
                _context4.prev = 3;

                _this2.startWaitAnimation();

                _context4.next = 7;
                return _this2.$store.dispatch('loadWheel', path);

              case 7:
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](3);
                alert(_context4.t0);

              case 12:
                _this2.stopWaitAnimation();

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[3, 9]]);
      }))();
    },
    loadNextSharedWheel: function loadNextSharedWheel() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                _this3.startWaitAnimation();

                _context5.next = 4;
                return _this3.$store.dispatch('getNextSharedWheelForReview');

              case 4:
                _this3.linkInTextBox = _this3.wheel.path || '';
                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                alert(_context5.t0);

              case 10:
                _this3.stopWaitAnimation();

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }))();
    },
    translateSharedWheel: function translateSharedWheel() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this4.wheel.path) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                _context6.prev = 2;

                _this4.startWaitAnimation();

                _context6.next = 6;
                return _this4.$store.dispatch('translateWheel');

              case 6:
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](2);
                alert(_context6.t0);

              case 11:
                _this4.stopWaitAnimation();

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[2, 8]]);
      }))();
    },
    searchFacebook: function searchFacebook() {
      var searchTerm = 'wheelofnames ' + this.wheel.path;
      window.open('https://www.facebook.com/search/top/?q=' + searchTerm);
    },
    approveWheel: function approveWheel() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (_this5.wheel.path) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                _context7.prev = 2;

                _this5.startWaitAnimation();

                _context7.next = 6;
                return _this5.$store.dispatch('approveWheel');

              case 6:
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](2);
                alert(_context7.t0);

              case 11:
                _this5.stopWaitAnimation();

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[2, 8]]);
      }))();
    },
    deleteWheel: function deleteWheel() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (_this6.wheel.path) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return");

              case 2:
                if (!confirm('Are you sure you want to delete this wheel?')) {
                  _context8.next = 14;
                  break;
                }

                _context8.prev = 3;

                _this6.startWaitAnimation();

                _context8.next = 7;
                return _this6.$store.dispatch('deleteWheel');

              case 7:
                _this6.linkInTextBox = '';
                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](3);
                alert(_context8.t0);

              case 13:
                _this6.stopWaitAnimation();

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[3, 10]]);
      }))();
    },
    startWaitAnimation: function startWaitAnimation() {
      this.waitAnimation = this.$buefy.loading.open({
        container: null
      });
    },
    stopWaitAnimation: function stopWaitAnimation() {
      this.waitAnimation.close();
    },
    openUsersDialog: function openUsersDialog() {
      this.$refs.usersdialog.show();
    },
    openPaymentsDialog: function openPaymentsDialog() {
      this.$refs.paymentsdialog.show();
    },
    openDirtyWordsDialog: function openDirtyWordsDialog() {
      this.$refs.dirtywordsdialog.show();
    },
    getElementsByClassName: function getElementsByClassName(classNames) {
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/dirtyWordsTextBox.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/dirtyWordsTextBox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formattedDirtyWords: ''
    };
  },
  methods: {
    setWords: function setWords(words) {
      this.formattedDirtyWords = words.join('\n');
    },
    getWords: function getWords() {
      // Filter out empty rows.
      return this.formattedDirtyWords.split('\n').filter(function (w) {
        return w;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/dirtywordsdialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/dirtywordsdialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dirtyWordsTextBox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dirtyWordsTextBox.vue */ "./static/admin/dirtyWordsTextBox.vue");
/* harmony import */ var _Firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Firebase.js */ "./static/Firebase.js");
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
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dirtyWordsTextBox: _dirtyWordsTextBox_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      displayMe: false
    };
  },
  methods: {
    show: function show() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.displayMe = true;

                _this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.t0 = _this.$refs.dirtyWordsTextBox;
                          _context.next = 3;
                          return _Firebase_js__WEBPACK_IMPORTED_MODULE_1__["getDirtyWords"]();

                        case 3:
                          _context.t1 = _context.sent;

                          _context.t0.setWords.call(_context.t0, _context.t1);

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    close: function close() {
      this.displayMe = false;
    },
    save: function save() {
      _Firebase_js__WEBPACK_IMPORTED_MODULE_1__["setDirtyWords"](this.$refs.dirtyWordsTextBox.getWords());
      this.displayMe = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/paymentsdialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/paymentsdialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.js */ "./static/admin/filters.js");
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  filters: {
    timeago: _filters_js__WEBPACK_IMPORTED_MODULE_0__["timeago"],
    firestoremilliseconds: _filters_js__WEBPACK_IMPORTED_MODULE_0__["firestoremilliseconds"],
    dollaramount: _filters_js__WEBPACK_IMPORTED_MODULE_0__["dollaramount"]
  },
  data: function data() {
    return {
      displayPaymentsDialog: false
    };
  },
  computed: {
    earningsPerReview: function earningsPerReview() {
      return this.$store.state.earningsPerReviewDoc.value;
    },
    admins: function admins() {
      return this.$store.state.admins;
    }
  },
  methods: {
    show: function show() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.displayPaymentsDialog = true;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    resetAdminsWheels: function resetAdminsWheels(uid, name) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (confirm("Are you sure you want to reset ".concat(name, "'s earnings to zero?"))) {
                  _this2.$store.dispatch('setAdminsReviewsToZero', uid);
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    close: function close() {
      this.displayPaymentsDialog = false;
    },
    getEarnings: function getEarnings(reviews) {
      return (reviews * this.earningsPerReview).toFixed(2);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/textbox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/textbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util.js */ "./static/Util.js");
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
      xxx: ''
    };
  },
  computed: {
    names: function names() {
      return this.$store.state.wheelConfig.names;
    },
    wheelConfig: function wheelConfig() {
      return this.$store.state.wheelConfig;
    }
  },
  watch: {
    names: function names(newValue, oldValue) {
      var div = document.getElementById('names');
      div.innerHTML = newValue.map(function (name) {
        return "<div>".concat(name, "</div>");
      }).join('');
    },
    wheelConfig: function wheelConfig(newValue, oldValue) {
      var div = document.getElementById('names');
      div.innerHTML = newValue.names.map(function (name) {
        return "<div>".concat(name, "</div>");
      }).join('');
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/usersdialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/usersdialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      displayMe: false,
      newUserName: '',
      newUserFirestoreId: ''
    };
  },
  computed: {
    newUserValidInput: function newUserValidInput() {
      return this.newUserName && this.newUserFirestoreId;
    },
    admins: function admins() {
      return this.$store.state.admins;
    }
  },
  methods: {
    show: function show() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.displayMe = true;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    removeUser: function removeUser(uid, name) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (confirm("Are you sure you want to delete ".concat(name, "?"))) {
                  _this2.$store.dispatch('deleteAdmin', uid);
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addUser: function addUser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.$store.dispatch('addAdmin', {
                  uid: _this3.newUserFirestoreId,
                  name: _this3.newUserName
                });

                _this3.newUserName = '';
                _this3.newUserFirestoreId = '';

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    close: function close() {
      this.displayMe = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/spinningwheel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Wheel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wheel.js */ "./static/Wheel.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _Ticker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ticker.js */ "./static/Ticker.js");
/* harmony import */ var circletype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! circletype */ "./node_modules/circletype/dist/circletype.min.js");
/* harmony import */ var circletype__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(circletype__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
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
      myWheel: new _Wheel_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
      myTicker: new _Ticker_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
      isTouchScreen: _Util_js__WEBPACK_IMPORTED_MODULE_1__["isTouchScreen"]()
    };
  },
  mounted: function mounted() {
    this.myWheel = new _Wheel_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.tick(0);
    this.setupOverlay();
    this.startKeyListener();
  },
  computed: {
    wheelConfig: function wheelConfig() {
      return this.$store.state.wheelConfig;
    },
    names: function names() {
      return this.$store.state.wheelConfig.names;
    },
    preferences: function preferences() {
      return this.$store.state.preferences;
    },
    hasEntries: function hasEntries() {
      return this.$store.state.wheelConfig.names.length > 0;
    }
  },
  watch: {
    wheelConfig: function wheelConfig(newValue, oldValue) {
      this.configureWheel();
    },
    preferences: function preferences(newValue) {
      this.configureWheel();
    },
    names: function names(newValue, oldValue) {
      this.myWheel.setNames(newValue, this.wheelConfig.maxNames, this.wheelConfig.allowDuplicates);
    }
  },
  methods: {
    setupOverlay: function setupOverlay() {
      var side = document.getElementById('wheelCanvas').offsetWidth;
      var fontSize = "".concat(Math.round(side / 20), "px");
      document.getElementById('instructionsLayer').style.fontSize = fontSize;
      if (this.cantBeDisplayedInCircleType(this.$i18n.locale)) return;
      var radius = side / 3;
      new circletype__WEBPACK_IMPORTED_MODULE_3___default.a(document.getElementById('topInstruction')).radius(radius);

      if (document.getElementById('bottomInstruction')) {
        new circletype__WEBPACK_IMPORTED_MODULE_3___default.a(document.getElementById('bottomInstruction')).radius(radius).dir(-1);
      }
    },
    cantBeDisplayedInCircleType: function cantBeDisplayedInCircleType(locale) {
      return ['ar', 'bn', 'fa', 'gu', 'he', 'hi'].includes(locale);
    },
    startKeyListener: function startKeyListener() {
      if (!_Util_js__WEBPACK_IMPORTED_MODULE_1__["isTouchScreen"]()) {
        var self = this;
        document.addEventListener('keyup', function (event) {
          if (event.key == 'Enter' && event.ctrlKey) {
            self.spin();
          }
        });
      }
    },
    spin: function spin() {
      if (this.myWheel.isSpinning()) return;
      if (!this.hasEntries) return;
      this.trackInGoogleAnalytics();
      this.$refs.instructionsLayer.style.display = 'none';
      this.$store.commit('startWheelSpin');
      this.$emit('wheel-started');
      this.myWheel.click(this.onNameChanged, this.onStopWheelSpin);
    },
    onNameChanged: function onNameChanged() {
      this.$emit('name-changed');
    },
    onStopWheelSpin: function onStopWheelSpin(winningEntry) {
      this.$store.commit('stopWheelSpin');
      this.$emit('wheel-stopped', winningEntry);
    },
    trackInGoogleAnalytics: function trackInGoogleAnalytics() {
      var defaultNames = this.wheelConfig.getDefaultNames();

      if (!_Util_js__WEBPACK_IMPORTED_MODULE_1__["arraysEqual"](this.names, defaultNames)) {
        var label = this.$store.state.version;
        _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackEvent"]('Wheel', 'SpinWithCustomNames', label);
      } else {
        _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackEvent"]('Wheel', 'SpinWithDefaultNames', '');
      }
    },
    tick: function tick(ms) {
      this.myTicker.setTimestamp(ms);

      while (this.myTicker.shouldTick()) {
        this.myWheel.tick();
      }

      var context = document.getElementById('wheelCanvas').getContext('2d');
      this.myWheel.draw(context);
      requestAnimationFrame(this.tick);
    },
    resetRotation: function resetRotation() {
      this.myWheel.resetRotation();
    },
    refresh: function refresh() {
      this.myWheel.refresh();
    },
    configureWheel: function configureWheel() {
      this.myWheel.configure(this.$store.state.wheelConfig.getCoalescedColors(), this.$store.state.wheelConfig.getWheelImage(), this.$store.state.wheelConfig.spinTime, this.$store.state.wheelConfig.slowSpin, this.$store.state.wheelConfig.hubSize, this.$store.getters.darkMode ? '#000' : this.$store.state.wheelConfig.pageBackgroundColor);
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/admin/app.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/app.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/admintoolbar.vue?vue&type=template&id=657b65a2&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/admintoolbar.vue?vue&type=template&id=657b65a2& ***!
  \****************************************************************************************************************************************************************************************************/
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
    {
      staticStyle: { "box-shadow": "0 3px 3px 0 lightgrey" },
      attrs: { type: "is-info" }
    },
    [
      _c(
        "template",
        { slot: "brand" },
        [
          _c(
            "b-navbar-item",
            { staticStyle: { "font-size": "24px" }, attrs: { href: "/" } },
            [_vm._v("\n      " + _vm._s(_vm.toolbarBrand) + "\n    ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "template",
        { slot: "start" },
        [
          _c(
            "b-tag",
            {
              staticStyle: { "margin-top": "1.2em" },
              attrs: { type: "is-warning" }
            },
            [_vm._v("\n      Admin\n    ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "template",
        { slot: "end" },
        [
          _c(
            "b-navbar-item",
            {
              on: {
                click: function($event) {
                  return _vm.$store.commit("toggleDarkMode")
                }
              }
            },
            [
              _c("i", { staticClass: "far fa-moon" }),
              _vm._v(" Dark mode\n    ")
            ]
          ),
          _vm._v(" "),
          _c(
            "b-navbar-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loggedIn,
                  expression: "loggedIn"
                }
              ],
              on: {
                click: function($event) {
                  return _vm.$emit("open-users-dialog")
                }
              }
            },
            [_c("i", { staticClass: "fas fa-user" }), _vm._v(" Admins\n    ")]
          ),
          _vm._v(" "),
          _c(
            "b-navbar-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loggedIn,
                  expression: "loggedIn"
                }
              ],
              on: {
                click: function($event) {
                  return _vm.$emit("open-payments-dialog")
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-money-check-alt" }),
              _vm._v(" Earnings\n    ")
            ]
          ),
          _vm._v(" "),
          _c(
            "b-navbar-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loggedIn,
                  expression: "loggedIn"
                }
              ],
              on: {
                click: function($event) {
                  return _vm.$emit("open-dirtywords-dialog")
                }
              }
            },
            [
              _c("i", { staticClass: "far fa-hand-paper" }),
              _vm._v(" Banned words\n    ")
            ]
          ),
          _vm._v(" "),
          _c(
            "b-navbar-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loggedIn,
                  expression: "loggedIn"
                }
              ]
            },
            [
              _c("img", {
                staticStyle: { height: "30px", "border-radius": "50%" },
                attrs: { src: _vm.$store.state.appStatus.userPhotoUrl }
              }),
              _vm._v(
                "\n       \n      " +
                  _vm._s(_vm.$store.state.appStatus.userDisplayName) +
                  "\n    "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "b-navbar-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !this.loggedIn,
                  expression: "!this.loggedIn"
                }
              ],
              on: {
                click: function($event) {
                  return _vm.$emit("log-in")
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-sign-in-alt" }),
              _vm._v(" Log in\n    ")
            ]
          ),
          _vm._v(" "),
          _c(
            "b-navbar-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: this.loggedIn,
                  expression: "this.loggedIn"
                }
              ],
              on: {
                click: function($event) {
                  return _vm.$emit("log-out")
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-sign-out-alt" }),
              _vm._v(" Log out\n    ")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/app.vue?vue&type=template&id=2960a48e&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/app.vue?vue&type=template&id=2960a48e& ***!
  \*******************************************************************************************************************************************************************************************/
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
    "span",
    [
      _c("admintoolbar", {
        on: {
          "log-in": _vm.logIn,
          "log-out": _vm.logOut,
          "open-users-dialog": function($event) {
            return _vm.openUsersDialog()
          },
          "open-payments-dialog": function($event) {
            return _vm.openPaymentsDialog()
          },
          "open-dirtywords-dialog": function($event) {
            return _vm.openDirtyWordsDialog()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "section",
          staticStyle: {
            "padding-top": "1rem",
            "padding-bottom": "0",
            "font-family": "Quicksand"
          }
        },
        [
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              { staticClass: "column is-6" },
              [_c("spinningwheel", { ref: "spinningwheel" })],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "column is-3" }, [_c("textbox")], 1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "column is-3" },
              [
                _c(
                  "b-field",
                  { attrs: { label: "Shared wheel link" } },
                  [
                    _c("b-input", {
                      model: {
                        value: _vm.linkInTextBox,
                        callback: function($$v) {
                          _vm.linkInTextBox = $$v
                        },
                        expression: "linkInTextBox"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { type: "is-info", disabled: !_vm.userIsLoggedIn },
                    on: { click: _vm.loadSharedWheel }
                  },
                  [
                    _c("i", { staticClass: "far fa-folder-open" }),
                    _vm._v(" Open\n        ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { type: "is-info", disabled: !_vm.userIsLoggedIn },
                    on: { click: _vm.loadNextSharedWheel }
                  },
                  [
                    _c("i", { staticClass: "fas fa-chevron-circle-right" }),
                    _vm._v(" Open next\n          "),
                    _c("span", { staticStyle: { "font-size": "0.7em" } }, [
                      _vm._v("(Ctrl N)")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { disabled: !_vm.userIsLoggedIn },
                    on: { click: _vm.translateSharedWheel }
                  },
                  [
                    _c("i", { staticClass: "fas fa-globe-americas" }),
                    _vm._v(" Translate\n          "),
                    _c("span", { staticStyle: { "font-size": "0.7em" } }, [
                      _vm._v("(Ctrl T)")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { disabled: !_vm.userIsLoggedIn },
                    on: { click: _vm.searchFacebook }
                  },
                  [
                    _c("i", { staticClass: "fab fa-facebook-square" }),
                    _vm._v(" Search\n        ")
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: {
                      type: "is-success",
                      disabled: !_vm.userIsLoggedIn
                    },
                    on: { click: _vm.approveWheel }
                  },
                  [
                    _c("i", { staticClass: "far fa-thumbs-up" }),
                    _vm._v(" Approve\n          "),
                    _c("span", { staticStyle: { "font-size": "0.7em" } }, [
                      _vm._v("(Ctrl A)")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { type: "is-danger", disabled: !_vm.userIsLoggedIn },
                    on: { click: _vm.deleteWheel }
                  },
                  [
                    _c("i", { staticClass: "fas fa-trash-alt" }),
                    _vm._v(" Delete\n        ")
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("table", { staticClass: "table is-bordered can-go-dark" }, [
                  _c("tr", [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _c("span", { staticClass: "is-pulled-right" }, [
                        _c("b", [
                          _vm._v(
                            "\n              " +
                              _vm._s(
                                _vm._f("localestring")(
                                  _vm.$store.state.reviewQueueLength
                                )
                              ) +
                              "\n            "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Reviewed by me")]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "span",
                        { staticClass: "is-pulled-right" },
                        [
                          _c(
                            "b-tooltip",
                            {
                              attrs: {
                                label:
                                  "How many wheels you have reviewed in this session",
                                position: "is-left"
                              }
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.user.sessionReviews) +
                                  "\n                "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "span",
                        { staticClass: "is-pulled-right" },
                        [
                          _c(
                            "b-tooltip",
                            {
                              attrs: {
                                label:
                                  "How many wheels you have reviewed since the last payment",
                                position: "is-left"
                              }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.user.totalReviews) +
                                  "\n              "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Earnings")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "b-tooltip",
                          {
                            attrs: {
                              label: "How much you have earned in this session",
                              position: "is-left"
                            }
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(
                                  _vm._f("dollaramount")(
                                    _vm.user.sessionReviews *
                                      _vm.earningsPerReview
                                  )
                                ) +
                                "\n              "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "b-tooltip",
                          {
                            attrs: {
                              label:
                                "How much you have earned since the last payment",
                              position: "is-left"
                            }
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(
                                  _vm._f("dollaramount")(
                                    _vm.user.totalReviews *
                                      _vm.earningsPerReview
                                  )
                                ) +
                                "\n              "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table is-bordered can-go-dark" }, [
                  _c("tr", [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("td", [
                      _c("b", [_vm._v(_vm._s(_vm.wheel.reviewStatus))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Created")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm._f("timeago")(
                            _vm._f("firestoremilliseconds")(_vm.wheel.created)
                          )
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Last viewed")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm._f("timeago")(
                            _vm._f("firestoremilliseconds")(_vm.wheel.lastRead)
                          )
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Views")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm._f("localestring")(_vm.wheel.readCount))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm._f("percent")(_vm.wheel.predictedApproval))
                      )
                    ])
                  ])
                ])
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("usersdialog", { ref: "usersdialog" }),
      _vm._v(" "),
      _c("paymentsdialog", { ref: "paymentsdialog" }),
      _vm._v(" "),
      _c("dirtywordsdialog", { ref: "dirtywordsdialog" })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Wheels in queue")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Status")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("i", { staticClass: "far fa-thumbs-up" }),
      _vm._v(" prediction")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/dirtyWordsTextBox.vue?vue&type=template&id=448c1e14&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/dirtyWordsTextBox.vue?vue&type=template&id=448c1e14& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("b-input", {
    staticClass: "can-go-dark",
    attrs: { type: "textarea", rows: "20" },
    model: {
      value: _vm.formattedDirtyWords,
      callback: function($$v) {
        _vm.formattedDirtyWords = $$v
      },
      expression: "formattedDirtyWords"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/dirtywordsdialog.vue?vue&type=template&id=1293e702&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/dirtywordsdialog.vue?vue&type=template&id=1293e702& ***!
  \********************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-modal",
        {
          attrs: { active: _vm.displayMe, width: 640, scroll: "keep" },
          on: {
            "update:active": function($event) {
              _vm.displayMe = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-card", staticStyle: { width: "auto" } },
            [
              _c("header", { staticClass: "modal-card-head" }, [
                _c("p", { staticClass: "modal-card-title" }, [
                  _c("i", { staticClass: "far fa-hand-paper" }),
                  _vm._v(" Banned words\n        ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "section",
                { staticClass: "modal-card-body can-go-dark" },
                [
                  _c("dirtyWordsTextBox", {
                    ref: "dirtyWordsTextBox",
                    staticStyle: { width: "50%" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "footer",
                {
                  staticClass: "modal-card-foot",
                  staticStyle: { "justify-content": "flex-end" }
                },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { type: "is-info" },
                      on: {
                        click: function($event) {
                          return _vm.save()
                        }
                      }
                    },
                    [_vm._v(" Save ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.close()
                        }
                      }
                    },
                    [_vm._v(" Close ")]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/paymentsdialog.vue?vue&type=template&id=bdee0150&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/paymentsdialog.vue?vue&type=template&id=bdee0150& ***!
  \******************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.displayPaymentsDialog,
            width: 640,
            scroll: "keep"
          },
          on: {
            "update:active": function($event) {
              _vm.displayPaymentsDialog = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-card", staticStyle: { width: "auto" } },
            [
              _c("header", { staticClass: "modal-card-head" }, [
                _c("p", { staticClass: "modal-card-title" }, [
                  _c("i", { staticClass: "fas fa-money-check-alt" }),
                  _vm._v(" Earnings\n        ")
                ])
              ]),
              _vm._v(" "),
              _c("section", { staticClass: "modal-card-body can-go-dark" }, [
                _c("table", { staticClass: "table can-go-dark" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("th", { staticStyle: { "text-align": "right" } }, [
                        _vm._v("Reviews")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticStyle: { "text-align": "right" } }, [
                        _vm._v("Earnings")
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last review")]),
                      _vm._v(" "),
                      _c("th")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.admins, function(admin) {
                      return _c("tr", { key: admin.uid }, [
                        _c("td", [_vm._v(_vm._s(admin.name))]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "right" } }, [
                          _vm._v(
                            "\n                " +
                              _vm._s(admin.totalReviews) +
                              "\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "right" } }, [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm._f("dollaramount")(
                                  admin.totalReviews * _vm.earningsPerReview
                                )
                              ) +
                              "\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm._f("timeago")(
                                _vm._f("firestoremilliseconds")(
                                  admin.lastReview
                                )
                              )
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "b-button",
                              {
                                attrs: { type: "is-light" },
                                on: {
                                  click: function($event) {
                                    return _vm.resetAdminsWheels(
                                      admin.uid,
                                      admin.name
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-times" }),
                                _vm._v(" Reset\n                ")
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "footer",
                {
                  staticClass: "modal-card-foot",
                  staticStyle: { "justify-content": "flex-end" }
                },
                [
                  _c(
                    "b-button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.close()
                        }
                      }
                    },
                    [_vm._v("\n          Close\n        ")]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/textbox.vue?vue&type=template&id=16a0e22a&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/textbox.vue?vue&type=template&id=16a0e22a& ***!
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
  return _c("div", {
    staticClass: "textarea can-go-dark",
    staticStyle: {
      height: "680px",
      "max-height": "680px",
      overflow: "auto",
      "font-family":
        "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
    },
    attrs: { id: "names" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/usersdialog.vue?vue&type=template&id=1ee0bb3d&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/admin/usersdialog.vue?vue&type=template&id=1ee0bb3d& ***!
  \***************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-modal",
        {
          attrs: { active: _vm.displayMe, width: 640, scroll: "keep" },
          on: {
            "update:active": function($event) {
              _vm.displayMe = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-card", staticStyle: { width: "auto" } },
            [
              _c("header", { staticClass: "modal-card-head" }, [
                _c("p", { staticClass: "modal-card-title" }, [
                  _c("i", { staticClass: "fas fa-user" }),
                  _vm._v(" Admins\n        ")
                ])
              ]),
              _vm._v(" "),
              _c("section", { staticClass: "modal-card-body can-go-dark" }, [
                _c("table", { staticClass: "table can-go-dark" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Firestore ID")]),
                      _vm._v(" "),
                      _c("th")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.admins, function(admin) {
                        return _c("tr", { key: admin.uid }, [
                          _c("td", [_vm._v(_vm._s(admin.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(admin.uid))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { type: "is-light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeUser(
                                        admin.uid,
                                        admin.name
                                      )
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-trash-alt" })]
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "td",
                          [
                            _c("b-input", {
                              attrs: { placeholder: "New admin's name" },
                              model: {
                                value: _vm.newUserName,
                                callback: function($$v) {
                                  _vm.newUserName = $$v
                                },
                                expression: "newUserName"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("b-input", {
                              attrs: {
                                placeholder: "New admin's Firestore ID"
                              },
                              model: {
                                value: _vm.newUserFirestoreId,
                                callback: function($$v) {
                                  _vm.newUserFirestoreId = $$v
                                },
                                expression: "newUserFirestoreId"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  type: "is-light",
                                  disabled: !_vm.newUserValidInput
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addUser()
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-plus" })]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "footer",
                {
                  staticClass: "modal-card-foot",
                  staticStyle: { "justify-content": "flex-end" }
                },
                [
                  _c(
                    "b-button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.close()
                        }
                      }
                    },
                    [_vm._v("\n          Close\n        ")]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "container", staticStyle: { "text-align": "center" } },
    [
      _c("canvas", {
        staticStyle: { width: "100%" },
        attrs: { id: "wheelCanvas", width: "700", height: "700" },
        on: {
          click: function($event) {
            return _vm.spin()
          }
        }
      }),
      _vm._v(" "),
      !_vm.isTouchScreen
        ? _c(
            "div",
            {
              ref: "instructionsLayer",
              attrs: { id: "instructionsLayer" },
              on: {
                click: function($event) {
                  return _vm.spin()
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "instructionsText",
                  staticStyle: { "padding-top": "20%" },
                  attrs: { id: "topInstruction" }
                },
                [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.$t("spinningwheel.Click to spin")) +
                      "\n    "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "instructionsText",
                  staticStyle: { "padding-top": "60%" },
                  attrs: { id: "bottomInstruction" }
                },
                [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.$t("spinningwheel.or press ctrl+enter")) +
                      "\n    "
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isTouchScreen
        ? _c(
            "div",
            {
              ref: "instructionsLayer",
              attrs: { id: "instructionsLayer" },
              on: {
                click: function($event) {
                  return _vm.spin()
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "instructionsText",
                  staticStyle: { "padding-top": "20%" },
                  attrs: { id: "topInstruction" }
                },
                [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.$t("spinningwheel.Tap to spin")) +
                      "\n    "
                  )
                ]
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./static/CircularArray.js":
/*!*********************************!*\
  !*** ./static/CircularArray.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CircularArray; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var CircularArray = /*#__PURE__*/function () {
  function CircularArray(array) {
    _classCallCheck(this, CircularArray);

    this.array = array.slice(0);
  }

  _createClass(CircularArray, [{
    key: "getElement",
    value: function getElement(index) {
      while (index < 0) {
        index += this.array.length;
      }

      while (index >= this.array.length) {
        index -= this.array.length;
      }

      return this.array[index];
    }
  }, {
    key: "setElement",
    value: function setElement(index, value) {
      while (index < 0) {
        index += this.array.length;
      }

      while (index >= this.array.length) {
        index -= this.array.length;
      }

      this.array[index] = value;
    }
  }, {
    key: "getArray",
    value: function getArray() {
      return this.array;
    }
  }]);

  return CircularArray;
}();



/***/ }),

/***/ "./static/DisplayNamePicker.js":
/*!*************************************!*\
  !*** ./static/DisplayNamePicker.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DisplayNamePicker; });
/* harmony import */ var _CircularArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircularArray.js */ "./static/CircularArray.js");
/* harmony import */ var _NameHat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NameHat.js */ "./static/NameHat.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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




var DisplayNamePicker = /*#__PURE__*/function () {
  function DisplayNamePicker() {
    _classCallCheck(this, DisplayNamePicker);

    this.hat = new _NameHat_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.namesOnWheel = [];
    this.allNamesFitOnWheel = true;
    this.filledSlices = 0;
  }

  _createClass(DisplayNamePicker, [{
    key: "setNames",
    value: function setNames(textboxNames, maxSlices, allowDuplicates) {
      var _this = this;

      if (!allowDuplicates) {
        // Remove duplicates.
        textboxNames = _toConsumableArray(new Set(textboxNames));
      }

      if (textboxNames.length <= maxSlices) {
        this.allNamesFitOnWheel = true;
        this.namesOnWheel = textboxNames;
      } else {
        this.allNamesFitOnWheel = false;
        this.filledSlices = Math.round(maxSlices * 0.66);
        this.hat.empty();
        textboxNames.forEach(function (name) {
          if (!_this.namesOnWheel.includes(name)) {
            _this.hat.addName(name);
          }
        }); // Remove names from the wheel that are not in the textbox.

        this.namesOnWheel = this.namesOnWheel.filter(function (name) {
          return name == '' || textboxNames.includes(name);
        });
        this.namesOnWheel = this.adjustLength(this.namesOnWheel, maxSlices);
      }
    }
  }, {
    key: "getDisplayNames",
    value: function getDisplayNames() {
      return this.namesOnWheel;
    }
  }, {
    key: "getNumberOfDisplayNames",
    value: function getNumberOfDisplayNames() {
      return this.namesOnWheel.length;
    }
  }, {
    key: "tick",
    value: function tick(indexAtPointer) {
      var updated = false;

      if (!this.allNamesFitOnWheel) {
        var startEmptyIndex = indexAtPointer + Math.ceil(this.filledSlices / 2);
        var startFilledIndex = indexAtPointer + this.namesOnWheel.length - Math.floor(this.filledSlices / 2);
        var circDisplayNames = new _CircularArray_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.namesOnWheel);

        for (var i = indexAtPointer; i < indexAtPointer + this.namesOnWheel.length; i++) {
          if (i < startEmptyIndex && !circDisplayNames.getElement(i)) {
            circDisplayNames.setElement(i, this.hat.pullRandomName());
          }

          if (i >= startEmptyIndex && i < startFilledIndex && circDisplayNames.getElement(i)) {
            this.hat.addName(circDisplayNames.getElement(i));
            circDisplayNames.setElement(i, '');
          }

          if (i > startFilledIndex && !circDisplayNames.getElement(i)) {
            circDisplayNames.setElement(i, this.hat.pullRandomName());
          }
        }

        var newNames = circDisplayNames.getArray();
        updated = !_Util_js__WEBPACK_IMPORTED_MODULE_2__["arraysEqual"](this.namesOnWheel, newNames);
        this.namesOnWheel = newNames;
      }

      return updated;
    }
  }, {
    key: "adjustLength",
    value: function adjustLength(displayNames, maxSlices) {
      while (displayNames.length < maxSlices) {
        displayNames.push('');
      }

      while (displayNames.length > maxSlices) {
        var lastName = displayNames[displayNames.length - 1];

        if (lastName) {
          this.hat.addName(lastName);
        }

        displayNames = displayNames.slice(0, displayNames.length - 1);
      }

      return displayNames;
    }
  }]);

  return DisplayNamePicker;
}();



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

/***/ "./static/FontMeasurer.js":
/*!********************************!*\
  !*** ./static/FontMeasurer.js ***!
  \********************************/
/*! exports provided: getFontSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontSize", function() { return getFontSize; });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
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

function getFontSize(context, displayText, sliceCount, fontName, wheelRadius, hubRadius) {
  return bisectSearch(context, wheelRadius, hubRadius, fontName, sliceCount, displayText, 10, 200);
}

function bisectSearch(context, wheelRadius, hubRadius, fontName, slices, text, min, max) {
  var fontSize;

  while (true) {
    fontSize = Math.round((min + max) / 2);
    var font = fontSize + 'px ' + fontName;

    if (textFits(context, wheelRadius, hubRadius, Math.PI / slices, text, font, fontSize)) {
      min = fontSize;
    } else {
      max = fontSize;
    }

    if (Math.abs(max - min) < 2) {
      break;
    }
  }

  return fontSize;
}

function textFits(context, r, b, a, text, font, h) {
  if (!text) return true;
  context.font = font;
  var w = context.measureText(text).width;
  return _Util_js__WEBPACK_IMPORTED_MODULE_0__["boxFits"](a, r, b, w, h);
}

/***/ }),

/***/ "./static/ImageCache.js":
/*!******************************!*\
  !*** ./static/ImageCache.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageCache; });
/* harmony import */ var _images_none_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/none.png */ "./static/images/none.png");
/* harmony import */ var _third_party_publicdomainvectors_camera_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third_party/publicdomainvectors/camera.png */ "./static/third_party/publicdomainvectors/camera.png");
/* harmony import */ var _third_party_publicdomainvectors_cat_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./third_party/publicdomainvectors/cat.png */ "./static/third_party/publicdomainvectors/cat.png");
/* harmony import */ var _third_party_publicdomainvectors_dog_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./third_party/publicdomainvectors/dog.png */ "./static/third_party/publicdomainvectors/dog.png");
/* harmony import */ var _third_party_publicdomainvectors_dollar_sign_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./third_party/publicdomainvectors/dollar-sign.png */ "./static/third_party/publicdomainvectors/dollar-sign.png");
/* harmony import */ var _third_party_publicdomainvectors_dragon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./third_party/publicdomainvectors/dragon.png */ "./static/third_party/publicdomainvectors/dragon.png");
/* harmony import */ var _images_cheers_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cheers.png */ "./static/images/cheers.png");
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







function ImageCache() {
  this.images = new Object();
  this.emptyImage = new Image(); // This dataUrl is a 1x1 transparent image.

  this.emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

  this.addImage = function (imageName) {
    this.images[imageName] = new Image();
    this.images[imageName].src = imageName;
  };

  this.getImage = function (imageName) {
    if (imageName in this.images) {// Do nothing.
    } else {
      if (imageName) this.addImage(imageName);
    }

    if (this.images[imageName] && this.images[imageName].naturalHeight > 0) {
      return this.images[imageName];
    } else {
      // If the image is broken, return an empty image instead,
      // to prevent Javascript errors when attempting to draw it.
      return this.emptyImage;
    }
  };
}

/***/ }),

/***/ "./static/ImageUtil.js":
/*!*****************************!*\
  !*** ./static/ImageUtil.js ***!
  \*****************************/
/*! exports provided: optimizeSliceImage, optimizeCenterImage, createInMemoryImage, getTopLeftColor, isTransparent, extractColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizeSliceImage", function() { return optimizeSliceImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizeCenterImage", function() { return optimizeCenterImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInMemoryImage", function() { return createInMemoryImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopLeftColor", function() { return getTopLeftColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransparent", function() { return isTransparent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractColors", function() { return extractColors; });
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
function optimizeSliceImage(_x) {
  return _optimizeSliceImage.apply(this, arguments);
}

function _optimizeSliceImage() {
  _optimizeSliceImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dataUrl) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var image = new Image();

              image.onload = function () {
                var canvas = createProportionalCanvas(image.width, image.height, 200);
                drawStretched(canvas, image);
                resolve(getOptimizedDataUrl(canvas, dataUrl));
              };

              image.src = dataUrl;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _optimizeSliceImage.apply(this, arguments);
}

function optimizeCenterImage(_x2) {
  return _optimizeCenterImage.apply(this, arguments);
}

function _optimizeCenterImage() {
  _optimizeCenterImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dataUrl) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var image = new Image();

              image.onload = function () {
                var canvas = createSquareCanvas(370);

                if (!topLeftIsWhiteOrTransparent(image)) {
                  drawStretched(canvas, image, 'blur(4px)');
                }

                drawProportionalOnSquareCanvas(canvas, image);
                resolve(getOptimizedDataUrl(canvas));
              };

              image.src = dataUrl;
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _optimizeCenterImage.apply(this, arguments);
}

function createInMemoryImage(width, height) {
  var tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  return tempCanvas;
}
function getTopLeftColor(image) {
  var context = document.createElement('canvas').getContext('2d');
  context.drawImage(image, 0, 0);
  var data = context.getImageData(0, 0, 1, 1).data;

  if (meantToBeWhite(data[0], data[1], data[2])) {
    return '#FFFFFFFF';
  } else {
    return getHexColor(data[0], data[1], data[2], data[3]);
  }
}
function isTransparent(rgbaColor) {
  var retVal = false;
  var match = rgbaColor.match(/#\w\w\w\w\w\w(\w\w)/);

  if (match) {
    retVal = match[1] == '00';
  }

  return retVal;
}
function extractColors(_x3) {
  return _extractColors.apply(this, arguments);
}

function _extractColors() {
  _extractColors = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dataUri) {
    var Vibrant, img;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __webpack_require__.e(/*! import() | vibrant */ "vendors~vibrant").then(__webpack_require__.t.bind(null, /*! node-vibrant */ "./node_modules/node-vibrant/lib/browser.js", 7));

          case 2:
            Vibrant = _context4.sent["default"];
            img = new Image();
            img.src = dataUri;
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              img.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var v, palette;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        v = new Vibrant(img);
                        _context3.next = 3;
                        return v.getPalette();

                      case 3:
                        palette = _context3.sent;
                        resolve([palette.Vibrant.hex, palette.LightVibrant.hex, palette.DarkVibrant.hex, palette.Muted.hex, palette.LightMuted.hex, palette.DarkMuted.hex]);

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
            }));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _extractColors.apply(this, arguments);
}

function createProportionalCanvas(imageWidth, imageHeight, maxSide) {
  var xScale = maxSide / imageWidth;
  var yScale = maxSide / imageHeight;
  var scale = Math.max(xScale, yScale);
  var canvas = document.createElement('canvas');
  canvas.width = imageWidth * scale;
  canvas.height = imageHeight * scale;
  return canvas;
}

function createSquareCanvas(side) {
  var canvas = document.createElement('canvas');
  canvas.width = side;
  canvas.height = side;
  return canvas;
}

function topLeftIsWhiteOrTransparent(image) {
  var hexColor = getTopLeftColor(image);
  return hexColor == '#FFFFFFFF' || hexColor.slice(7) == 'FF';
}

function topLeftIsTransparent(context) {
  var data = context.getImageData(0, 0, 1, 1).data;
  return data[3] < 5;
}

function meantToBeWhite(r, g, b) {
  // An edge effect and slight transparence probably made the
  // color slightly off-white.
  return r == g && r == b && r > 230;
}

function getHexColor(r, g, b, a) {
  return "#".concat(hex(r)).concat(hex(g)).concat(hex(b)).concat(hex(a));
}

var hex = function hex(d) {
  return Number(d).toString(16).padStart(2, '0');
};

function drawStretched(canvas, image, filter) {
  var context = canvas.getContext('2d');
  context.save();
  if (filter) context.filter = filter; // Draw image with full bleed to reduce edge artifacts.

  context.drawImage(image, -2, -2, canvas.width + 4, canvas.height + 4);
  context.restore();
}

function drawProportionalOnSquareCanvas(canvas, image) {
  var canvasWidth = canvas.width;
  var scale = canvasWidth / Math.max(image.width, image.height);
  var width = image.width * scale;
  var x = (canvasWidth - width) / 2;
  var height = image.height * scale;
  var y = (canvasWidth - height) / 2;
  var context = canvas.getContext('2d');
  context.drawImage(image, x, y, width, height);
}

function getOptimizedDataUrl(canvas, originalDataUrl) {
  var newDataUrl;

  if (topLeftIsTransparent(canvas.getContext("2d"))) {
    newDataUrl = canvas.toDataURL('image/png');
  } else {
    newDataUrl = canvas.toDataURL('image/jpeg', 0.5);
  }

  if (originalDataUrl && originalDataUrl.length < newDataUrl.length) {
    return originalDataUrl;
  } else {
    return newDataUrl;
  }
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

/***/ "./static/NameHat.js":
/*!***************************!*\
  !*** ./static/NameHat.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NameHat; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var NameHat = /*#__PURE__*/function () {
  function NameHat() {
    _classCallCheck(this, NameHat);

    this.names = [];
  }

  _createClass(NameHat, [{
    key: "setNames",
    value: function setNames(names) {
      this.names = names;
    }
  }, {
    key: "getNames",
    value: function getNames() {
      return this.names;
    }
  }, {
    key: "empty",
    value: function empty() {
      this.names = [];
    }
  }, {
    key: "numberOfNames",
    value: function numberOfNames() {
      return this.names.length;
    }
  }, {
    key: "pullRandomName",
    value: function pullRandomName() {
      var name = this.getRandomName();
      var indexOfName = this.names.indexOf(name);

      if (indexOfName > -1) {
        this.names.splice(indexOfName, 1);
      }

      return name;
    }
  }, {
    key: "addName",
    value: function addName(name) {
      this.names.push(name);
    }
  }, {
    key: "getRandomName",
    value: function getRandomName() {
      return this.names[Math.floor(Math.random() * this.names.length)];
    }
  }]);

  return NameHat;
}();



/***/ }),

/***/ "./static/PieSlice.js":
/*!****************************!*\
  !*** ./static/PieSlice.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PieSlice; });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageUtil.js */ "./static/ImageUtil.js");
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


function PieSlice(radians, wheelRadius, hubRadius, color, displayText, image) {
  this.radians = radians;
  this.wheelRadius = wheelRadius;
  this.hubRadius = hubRadius;
  this.color = color;
  this.displayText = displayText;
  this.image = image;

  this.draw = function (context) {
    if (!this.displayText && !this.image) return;
    context.save();
    var bgColor = this.color;
    drawBackColor(context, this.wheelRadius, this.radians, bgColor);

    if (this.image) {
      var imgBgColor = _ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__["getTopLeftColor"](this.image);
      drawBackColor(context, this.wheelRadius, this.radians, imgBgColor);

      if (!_ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__["isTransparent"](imgBgColor)) {
        bgColor = imgBgColor;
      }

      drawImage(context, this.radians / 2, this.wheelRadius, this.hubRadius, this.image);
    }

    if (this.displayText) {
      drawText(context, this.wheelRadius, this.displayText, bgColor, this.image);
    }

    drawBorder(context, this.wheelRadius, this.radians);
    context.restore();
  };

  function drawBackColor(context, radius, radians, color) {
    context.beginPath();
    context.moveTo(0, 0);
    context.arc(0, 0, radius, -radians / 2, radians / 2);
    context.lineTo(0, 0);
    context.fillStyle = color;
    context.fill();
  }

  function drawText(context, radius, displayText, bgColor, image) {
    context.lineJoin = 'round';
    context.textBaseline = 'middle';
    context.textAlign = 'end';
    var color = getTextColor(bgColor);

    if (image) {
      context.lineWidth = 4;
      context.strokeStyle = color.outline;
      context.strokeText(displayText, radius, 0);
    }

    context.fillStyle = color.fill;
    context.fillText(displayText, radius, 0);
  }

  function drawBorder(context, radius, radians) {
    context.beginPath();
    context.moveTo(0, 0);
    context.arc(0, 0, radius, -radians / 2, radians / 2);
    context.lineTo(0, 0);
    context.lineWidth = 1;
    context.strokeStyle = '#333333';
    context.stroke();
  }

  function drawImage(context, a, r, b, image) {
    var p = getImagePos(a, r, b, image.height / image.width);
    context.drawImage(image, p.x, p.y, p.w, p.h);
  }

  function getImagePos(a, r, b, imageRatio) {
    var w, h;

    for (w = r; w > 0; w--) {
      h = w * imageRatio;

      if (_Util_js__WEBPACK_IMPORTED_MODULE_0__["boxFits"](a, r, b, w, h)) {
        break;
      }
    }

    return {
      x: Math.max(h * Math.cos(a) / (2 * Math.sin(a)), b),
      y: -h / 2,
      w: w,
      h: h
    };
  }

  function getTextColor(bgColor) {
    if (!bgColor) return {
      fill: '#000000',
      outline: '#FFFFFF'
    };
    var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    var uicolors = [r / 255, g / 255, b / 255];
    var c = uicolors.map(function (col) {
      if (col <= 0.03928) {
        return col / 12.92;
      }

      return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];

    if (L > 0.179) {
      return {
        fill: '#000000',
        outline: '#FFFFFF'
      };
    } else {
      return {
        fill: '#FFFFFF',
        outline: '#000000'
      };
    }
  }
}

/***/ }),

/***/ "./static/Preferences.js":
/*!*******************************!*\
  !*** ./static/Preferences.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preferences; });
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
function Preferences() {
  this.appInfoVisible = false;
  this.darkMode = true;

  this.loadJson = function (jsonString) {
    var obj = JSON.parse(jsonString);
    this.copyPropertiesFrom(obj);
  };

  this.getJson = function () {
    var _this = this;

    var keys = Object.keys(this);
    var retVal = {};
    keys.forEach(function (key) {
      retVal[key] = _this[key];
    });
    return JSON.stringify(retVal);
  };

  this.getValues = function () {
    return JSON.parse(this.getJson());
  };

  this.loadValues = function (values) {
    this.copyPropertiesFrom(values);
  };

  this.clone = function () {
    var clone = new Preferences();
    clone.loadValues(this.getValues());
    return clone;
  };

  this.copyPropertiesFrom = function (obj) {
    Object.assign(this, JSON.parse(JSON.stringify(obj)));
  };
}

/***/ }),

/***/ "./static/Ticker.js":
/*!**************************!*\
  !*** ./static/Ticker.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ticker; });
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
// ----------------------------------------------------------------------
// Call setTimestamp() on this object every animation frame. You can then
// call shouldTick() to learn if you should advance the model by 1/60th
// of a seccond. Call shouldTick() repeatedly (and advance the model each
// time) until it returns false.
// ----------------------------------------------------------------------
function Ticker() {
  this.lastFrameTimeMs = 0;
  this.delta = 0;
  this.timestep = 1000 / 60;

  this.setTimestamp = function (timestamp) {
    if (this.lastFrameTimeMs == 0) {
      // This is the first frame. We need to run tick once to init.
      this.delta = this.timestep;
    } else {
      this.delta += timestamp - this.lastFrameTimeMs;
    }

    this.lastFrameTimeMs = timestamp;
  };

  this.shouldTick = function () {
    var retVal = this.delta >= this.timestep;
    if (retVal) this.delta -= this.timestep;
    return retVal;
  };
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

/***/ "./static/Wheel.js":
/*!*************************!*\
  !*** ./static/Wheel.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wheel; });
/* harmony import */ var _WheelPainter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WheelPainter.js */ "./static/WheelPainter.js");
/* harmony import */ var _DisplayNamePicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayNamePicker.js */ "./static/DisplayNamePicker.js");
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


function Wheel() {
  this.colors = [];
  this.angle = 0;
  this.speed = 0.005;
  this.stopSpeed = 0.0001;
  this.acceleration = 0.01;
  this.deceleration = 0;
  this.nameLastTick = '';
  this.state = new NotSpunState();
  this.wheelPainter = new _WheelPainter_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.namePicker = new _DisplayNamePicker_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

  this.doneSpinningCallback = function () {};

  this.nameChangedCallback = function () {};

  this.setNames = function (names, maxSlices, allowDuplicates) {
    if (this.state.editAllowed()) {
      this.namePicker.setNames(names, maxSlices, allowDuplicates);
      this.wheelPainter.refresh();
    }
  };

  this.refresh = function () {
    this.wheelPainter.refresh();
  };

  this.configure = function (colors, centerImage, spinTime, slowSpin, hubSize, pageBackgroundColor) {
    if (this.state.editAllowed()) {
      this.colors = colors;
      this.centerImage = centerImage;
      this.spinTime = spinTime;
      this.acceleration = slowSpin ? 0.001 : 0.01;
      this.hubSize = hubSize;
      this.pageBackgroundColor = pageBackgroundColor;
      this.wheelPainter.refresh();
    }
  };

  this.tick = function () {
    this.state.tick(this);
    var updated = this.namePicker.tick(this.getIndexAtPointer());
    if (updated) this.wheelPainter.refresh();
  };

  this.click = function (nameChangedCallback, doneSpinningCallback) {
    this.nameChangedCallback = nameChangedCallback;
    this.doneSpinningCallback = doneSpinningCallback;
    this.state.click(this);
  };

  this.spinIsDone = function () {
    this.doneSpinningCallback(this.getNameAtPointer());
  };

  this.isSpinning = function () {
    return this.state.isSpinning();
  };

  this.setRandomAngle = function () {
    this.angle = Math.random() * 2 * Math.PI;
  };

  this.advance = function () {
    this.indexFromLastTick = this.indexFromThisTick;
    this.indexFromThisTick = this.getIndexAtPointer();

    if (this.indexFromThisTick != this.indexFromLastTick) {
      this.nameChangedCallback();
    }

    this.angle += this.speed;

    if (this.angle > Math.PI * 2) {
      this.angle -= Math.PI * 2;
    }
  };

  this.getIndexAtPointer = function () {
    var numberOfNames = this.namePicker.getNumberOfDisplayNames();
    var radiansPerSegment = 2 * Math.PI / numberOfNames;
    var index = this.angle / radiansPerSegment;
    index = Math.round(index);

    if (index >= numberOfNames) {
      index = 0;
    }

    return index;
  };

  this.getNameAtPointer = function () {
    return this.namePicker.getDisplayNames()[this.getIndexAtPointer()];
  };

  this.resetRotation = function () {
    this.angle = 0;
  };

  this.calculateDeceleration = function () {
    var decelTicks = (this.spinTime - 1) * 60;
    var startSpeed = 60 * this.acceleration;
    this.deceleration = Math.exp(Math.log(this.stopSpeed / startSpeed) / decelTicks);
  };

  this.accelerate = function () {
    this.speed += this.acceleration;
  };

  this.decelerate = function () {
    this.speed = this.speed * this.deceleration;
  };

  this.isBelowStopSpeed = function () {
    return this.speed < this.stopSpeed;
  };

  this.draw = function (context) {
    this.wheelPainter.draw(context, this.angle, this.namePicker.getDisplayNames(), this.colors, this.centerImage, this.hubSize, this.pageBackgroundColor);
  };
}

function NotSpunState() {
  this.tick = function (wheel) {
    wheel.advance();
  };

  this.click = function (wheel) {
    wheel.calculateDeceleration();
    wheel.state = new AcceleratingState();
  };

  this.editAllowed = function () {
    return true;
  };

  this.isSpinning = function () {
    return false;
  };
}

function AcceleratingState() {
  this.ticks = 0;
  this.MAX_AGE = 60;

  this.tick = function (wheel) {
    wheel.accelerate();
    wheel.advance();
    this.ticks += 1;

    if (this.ticks > this.MAX_AGE) {
      wheel.setRandomAngle();
      wheel.state = new SpinningState();
    }
  };

  this.click = function (wheel) {};

  this.editAllowed = function () {
    return false;
  };

  this.isSpinning = function () {
    return true;
  };
}

function SpinningState() {
  this.tick = function (wheel) {
    wheel.decelerate();
    wheel.advance();

    if (wheel.isBelowStopSpeed()) {
      wheel.speed = 0;
      wheel.state = new OpenForEditState();
      wheel.spinIsDone();
    }
  };

  this.click = function (wheel) {};

  this.editAllowed = function () {
    return false;
  };

  this.isSpinning = function () {
    return true;
  };
}

function OpenForEditState() {
  this.tick = function (wheel) {};

  this.click = function (wheel) {
    wheel.calculateDeceleration();
    wheel.state = new AcceleratingState();
  };

  this.editAllowed = function () {
    return true;
  };

  this.isSpinning = function () {
    return false;
  };
}

/***/ }),

/***/ "./static/WheelConfig.js":
/*!*******************************!*\
  !*** ./static/WheelConfig.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WheelConfig; });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
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

function WheelConfig(winnerMessage) {
  this.title = 'Drink Roulette';
  this.names = ['Margarita', 'Rum Breeze', 'Mai Tai', 'Long Island IceTea', 'Sex On The Beach', 'Rum Runner', 'Amaretto Sour', 'Lemon Drop', 'Hemingway Daiquiri', 'Apple Pie', 'Mango Margarita', 'Whiskey Sour', 'Cosmopolitan', 'Old Fashioned', 'Uptown Rocks', 'Kamikaze', 'Aviation', 'Gimlet', 'Northside', 'Mint Julep', 'Jalapeño LimeShrub', 'Manhattan', 'Whiskey Smash', 'Gin Martini', 'Sazerac', 'Screwdriver', 'Negroni', 'Spiced Coffee', 'Boulevardier', 'Matcha Martini', 'Hurricane', 'Piña Colada', 'Sangria'];
  this.colorSettings = [{
    color: '#545981',
    enabled: true
  }, {
    color: '#FEF5A5',
    enabled: true
  }, {
    color: '#98803C',
    enabled: true
  }, {
    color: '#7D7582',
    enabled: true
  }, {
    color: '#E1E1E6',
    enabled: true
  }, {
    color: '#3E3D5E',
    enabled: true
  }
  /*{color: '#3369E8', enabled: true},
  {color: '#D50F25', enabled: true},
  {color: '#EEB211', enabled: true},
  {color: '#009925', enabled: true},
  {color: '#000000', enabled: false},
  {color: '#000000', enabled: false},
  */
  ];
  this.pageBackgroundColor = '#000000';
  this.pictureType = 'gallery';
  this.galleryPicture = 'images/cheers.png';
  this.customPictureName = '';
  this.customPictureDataUri = '';
  this.allowDuplicates = true;
  this.duringSpinSound = 'ticking-sound';
  this.afterSpinSound = 'celebration-sound';
  this.maxNames = 150;
  this.spinTime = 7;
  this.playCheers = true;
  this.launchConfetti = false;
  this.animateWinner = true;
  this.autoRemoveWinner = false;
  this.displayWinnerDialog = false;
  this.winnerMessage = winnerMessage || 'Bottoms Up!';
  this.playClickWhenWinnerRemoved = false;
  this.hubSize = 'S';
  this.slowSpin = false;

  this.loadJson = function (jsonString) {
    var obj = JSON.parse(jsonString);
    this.copyPropertiesFrom(obj);
  };

  this.getJson = function () {
    var _this = this;

    var keys = Object.keys(this);
    var retVal = {};
    keys.forEach(function (key) {
      retVal[key] = _this[key];
    });
    return JSON.stringify(retVal);
  };

  this.getValues = function () {
    return JSON.parse(this.getJson());
  };

  this.loadValues = function (values) {
    this.copyPropertiesFrom(values);
  };

  this.clone = function () {
    var clone = new WheelConfig();
    clone.loadValues(this.getValues());
    return clone;
  };

  this.getDefaultColorSettings = function () {
    return new WheelConfig().colorSettings;
  };

  this.getDefaultNames = function () {
    return new WheelConfig().names;
  };

  this.setCustomPicture = function (name, dataUri) {
    this.customPictureName = name;
    this.customPictureDataUri = dataUri;
    this.pictureType = 'uploaded';
  };

  this.getWheelImage = function () {
    if (this.pictureType == 'none') {
      return null;
    }

    if (this.pictureType == 'gallery') {
      if (this.galleryPicture) {
        return this.galleryPicture;
      }
    }

    if (this.pictureType == 'uploaded') {
      if (this.customPictureDataUri) {
        return this.customPictureDataUri;
      }
    }

    return null;
  };

  this.shouldPlayTicks = function () {
    return this.duringSpinSound == 'ticking-sound';
  };

  this.setColors = function (colorValues, enabledValues) {
    for (var i = 0; i < 6; i++) {
      this.colorSettings[i] = {
        color: colorValues[i],
        enabled: enabledValues[i]
      };
    }
  };

  this.getCoalescedColors = function () {
    var retVal = [];

    for (var i = 0; i < 6; i++) {
      if (this.colorSettings[i].enabled) {
        retVal.push(this.colorSettings[i].color);
      }
    }

    if (retVal.length == 0) {
      retVal.push('#CCCCCC');
    }

    return retVal;
  };

  this.isTooBigForDatabase = function () {
    return this.getJson().length > 990000;
  };

  this.copyPropertiesFrom = function (obj) {
    Object.assign(this, JSON.parse(JSON.stringify(obj)));
    this.convertOldData();
  };

  this.convertOldData = function () {
    if (Array.isArray(this.names)) {
      this.names = this.names.map( // Convert old height metric to new height metric.
      function (name) {
        return name.replace(/height="25"/, 'style="height:25px"');
      }); // Remove any entries that are unprintable characters.

      this.names = this.names.filter(function (name) {
        return name.trim();
      });
    }

    if (Array.isArray(this.entries)) {
      // Convert from new "entries" format to old "names" format.
      this.names = this.entries.map(function (entry) {
        var retVal = '';

        if (entry.image) {
          retVal += "<img src=\"".concat(entry.image, "\" style=\"height:25px;font-size:1rem;\">");
        }

        if (entry.text) {
          retVal += _Util_js__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"](entry.text);
        }

        return retVal;
      });
      delete this.entries;
    }

    this.maxNames = parseInt(this.maxNames);
    this.spinTime = parseInt(this.spinTime);

    if (this.playTicks === false) {
      this.duringSpinSound = 'no-sound';
    }

    delete this.playTicks;

    if (this.playCheers === false) {
      this.afterSpinSound = 'no-sound';
    }

    delete this.playCheers;
  };
}

/***/ }),

/***/ "./static/WheelPainter.js":
/*!********************************!*\
  !*** ./static/WheelPainter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WheelPainter; });
/* harmony import */ var _ImageCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCache.js */ "./static/ImageCache.js");
/* harmony import */ var _PieSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PieSlice.js */ "./static/PieSlice.js");
/* harmony import */ var _FontMeasurer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FontMeasurer.js */ "./static/FontMeasurer.js");
/* harmony import */ var _hubSizes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hubSizes.js */ "./static/hubSizes.js");
/* harmony import */ var _hubSizes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hubSizes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageUtil.js */ "./static/ImageUtil.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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







var WheelPainter = /*#__PURE__*/function () {
  function WheelPainter() {
    _classCallCheck(this, WheelPainter);

    this.imageCache = new _ImageCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.names = [];
    this.wheelImages = {};
  }

  _createClass(WheelPainter, [{
    key: "draw",
    value: function draw(context, angle, names, colors, centerImage, hubSize, backgroundColor) {
      var wheelRadius = context.canvas.width * .44;
      var hubRadius = this.getHubRadius(wheelRadius, hubSize);
      var drawShadows = _Util_js__WEBPACK_IMPORTED_MODULE_4__["colorIsWhite"](backgroundColor);
      this.drawBackgroundColor(context, backgroundColor);
      this.drawWheelShadow(context, wheelRadius, drawShadows);
      if (names.includes('')) this.drawHat(context, wheelRadius, hubRadius);
      this.drawWheel(context, wheelRadius, angle, names, colors, hubRadius);
      this.drawPointer(context, wheelRadius, drawShadows);
      this.drawHub(context, angle, centerImage, hubRadius); //this.UpdateMyColors();
    }
  }, {
    key: "getHubRadius",
    value: function getHubRadius(wheelRadius, hubSize) {
      var hubFraction = _hubSizes_js__WEBPACK_IMPORTED_MODULE_3__["hubSizes"][hubSize] || 0.2;
      return Math.round(hubFraction * wheelRadius);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.wheelImage = null;
      this.pointerImage = null;
    }
  }, {
    key: "drawBackgroundColor",
    value: function drawBackgroundColor(context, backgroundColor) {
      if (backgroundColor == '#FFFFFF') return;
      context.save();
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.restore();
    }
  }, {
    key: "UpdateMyColors",
    value: function UpdateMyColors() {
      var colors = _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__["extractColors"](this.imageCache.getImage('images/cheers.png').src);

      for (var i = 0; i < colors.length; i++) {
        this.wheelConfig.colorSettings[i] = {
          color: colors[i],
          enabled: true
        };
      }

      this.$forceUpdate();
    }
  }, {
    key: "drawWheelShadow",
    value: function drawWheelShadow(context, wheelRadius, drawShadows) {
      if (!drawShadows) return;

      if (!this.wheelShadowImage) {
        this.wheelShadowImage = _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__["createInMemoryImage"](context.canvas.width, context.canvas.height);
        this.drawWheelShadowNoCache(this.wheelShadowImage.getContext("2d"), wheelRadius);
      }

      context.drawImage(this.wheelShadowImage, 0, 0);
    }
  }, {
    key: "drawWheel",
    value: function drawWheel(context, wheelRadius, angle, names, colors, hubRadius) {
      if (!this.wheelImage) {
        this.wheelImage = _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__["createInMemoryImage"](context.canvas.width, context.canvas.height);
        this.drawWheelNoCache(this.wheelImage.getContext("2d"), wheelRadius, names, colors, hubRadius);
        this.names = names.slice(0);
      }

      var width = context.canvas.width;
      var height = context.canvas.height;
      context.save();
      context.translate(width / 2, height / 2);
      context.rotate(angle);
      context.translate(-width / 2, -height / 2);
      context.drawImage(this.wheelImage, 0, 0);
      context.restore();
    }
  }, {
    key: "drawHat",
    value: function drawHat(context, wheelRadius, hubRadius) {
      var image = this.imageCache.getImage('images/hat-with-names.png');
      var scale = (wheelRadius - hubRadius) / image.width;
      var x = context.canvas.width / 2 - wheelRadius;
      var height = image.height * scale;
      var y = (context.canvas.height - height) / 2;
      var width = wheelRadius - hubRadius;
      context.drawImage(image, x, y, width, height);
    }
  }, {
    key: "drawPointer",
    value: function drawPointer(context, wheelRadius, drawShadows) {
      if (!this.pointerImage) {
        this.pointerImage = _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__["createInMemoryImage"](context.canvas.width, context.canvas.height);
        this.drawPointerNoCache(this.pointerImage.getContext("2d"), wheelRadius, drawShadows);
      }

      context.drawImage(this.pointerImage, 0, 0);
    }
  }, {
    key: "drawWheelShadowNoCache",
    value: function drawWheelShadowNoCache(context, wheelRadius) {
      var x = context.canvas.width / 2;
      var y = context.canvas.height / 2;
      var gradient = context.createRadialGradient(x, y, wheelRadius, x, y + 4, wheelRadius + 8);
      gradient.addColorStop(0, '#bbb');
      gradient.addColorStop(1, '#fff');
      context.fillStyle = gradient;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, {
    key: "drawWheelNoCache",
    value: function drawWheelNoCache(context, wheelRadius, names, colors, hubRadius) {
      context.save();
      context.translate(context.canvas.width / 2, context.canvas.height / 2);
      var radiansPerSegment = 2 * Math.PI / names.length;
      var self = this;
      var slices = names.map(function (entry, index) {
        var color = colors[index % colors.length];
        var displayText = _Util_js__WEBPACK_IMPORTED_MODULE_4__["extractDisplayText"](entry, true);
        var imageData = _Util_js__WEBPACK_IMPORTED_MODULE_4__["extractImage"](entry);
        var image = self.getWheelImage(imageData);
        return new _PieSlice_js__WEBPACK_IMPORTED_MODULE_1__["default"](radiansPerSegment, wheelRadius, hubRadius, color, displayText, image);
      });

      if (slices.length > 0) {
        context.font = this.getSmallestFont(context, slices, wheelRadius, hubRadius);
        slices.forEach(function (slice) {
          slice.draw(context);
          context.rotate(-radiansPerSegment);
        });
      }

      context.restore();
      context.save();
      context.translate(context.canvas.width / 2, context.canvas.height / 2);
      this.drawCenterCircle(context, hubRadius);
      context.restore();
    }
  }, {
    key: "getSmallestFont",
    value: function getSmallestFont(context, slices, wheelRadius, hubRadius) {
      var minFontSize = 200;
      var fontName = 'Quicksand, sans-serif';
      slices.forEach(function (slice) {
        var fontSize = _FontMeasurer_js__WEBPACK_IMPORTED_MODULE_2__["getFontSize"](context, slice.displayText, slices.length, fontName, wheelRadius, hubRadius);

        if (fontSize < minFontSize) {
          minFontSize = fontSize;
        }
      });
      return minFontSize + 'px ' + fontName;
    }
  }, {
    key: "drawCenterCircle",
    value: function drawCenterCircle(context, hubRadius) {
      context.fillStyle = 'white';
      context.beginPath();
      context.arc(0, 0, hubRadius, 0, Math.PI * 2);
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = '#333333';
      context.stroke();
    }
  }, {
    key: "drawPointerNoCache",
    value: function drawPointerNoCache(context, wheelRadius, drawShadows) {
      context.save();
      context.translate(context.canvas.width / 2, context.canvas.height / 2);

      if (drawShadows) {
        context.shadowColor = '#444';
        context.shadowOffsetY = 4;
        context.shadowBlur = 10;
      }

      context.beginPath();
      context.moveTo(wheelRadius - 15, 0);
      context.lineTo(wheelRadius + 25, -20);
      context.lineTo(wheelRadius + 25, 20);
      context.lineTo(wheelRadius - 15, 0);
      context.lineWidth = 2;
      context.strokeStyle = '#333333';
      context.stroke();
      context.fillStyle = 'lightgray';
      context.fill();
      context.restore();
    }
  }, {
    key: "drawHub",
    value: function drawHub(context, angle, centerImage, hubRadius) {
      var image = this.imageCache.getImage(centerImage);

      if (image) {
        context.save();
        context.translate(context.canvas.width / 2, context.canvas.height / 2);
        context.rotate(angle);
        context.beginPath();
        context.arc(0, 0, hubRadius - 1, 0, Math.PI * 2, true);
        context.clip();
        context.drawImage(image, -hubRadius, -hubRadius, hubRadius * 2, hubRadius * 2);
        context.restore();
      }
    }
  }, {
    key: "getWheelImage",
    value: function getWheelImage(imageData) {
      if (imageData) {
        if (!this.wheelImages[imageData]) {
          var image = new Image();
          var self = this;

          image.onload = function () {
            self.wheelImage = null;
          };

          image.setAttribute('crossOrigin', 'anonymous');
          image.src = imageData;
          this.wheelImages[imageData] = image;
        }

        return this.wheelImages[imageData];
      }
    }
  }]);

  return WheelPainter;
}();



/***/ }),

/***/ "./static/admin/ServerFunctions.js":
/*!*****************************************!*\
  !*** ./static/admin/ServerFunctions.js ***!
  \*****************************************/
/*! exports provided: getNumberOfWheelsInReviewQueue, translate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOfWheelsInReviewQueue", function() { return getNumberOfWheelsInReviewQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
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


function getNumberOfWheelsInReviewQueue(_x) {
  return _getNumberOfWheelsInReviewQueue.apply(this, arguments);
}

function _getNumberOfWheelsInReviewQueue() {
  _getNumberOfWheelsInReviewQueue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(idToken) {
    var url, response, respObj;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = process.env.FUNCTION_PREFIX + '/getNumberOfWheelsInReviewQueue';
            _context.next = 3;
            return fetch(url, {
              method: 'GET',
              mode: 'cors',
              headers: {
                'authorization': idToken
              }
            });

          case 3:
            response = _context.sent;

            if (!(response.status == 403)) {
              _context.next = 6;
              break;
            }

            throw 'Please log in as an admin user';

          case 6:
            _context.next = 8;
            return response.json();

          case 8:
            respObj = _context.sent;

            if (!respObj.error) {
              _context.next = 11;
              break;
            }

            throw respObj.error;

          case 11:
            return _context.abrupt("return", respObj.wheelsInReviewQueue);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getNumberOfWheelsInReviewQueue.apply(this, arguments);
}

function translate(_x2, _x3) {
  return _translate.apply(this, arguments);
}

function _translate() {
  _translate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(idToken, entries) {
    var url, response, resp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = process.env.FUNCTION_PREFIX + '/translate';
            _context2.next = 3;
            return fetch(url, {
              method: 'POST',
              mode: 'cors',
              headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': idToken
              }),
              body: JSON.stringify({
                text: entries
              })
            });

          case 3:
            response = _context2.sent;

            if (!(response.status == 403)) {
              _context2.next = 6;
              break;
            }

            throw 'Please log in as an admin user';

          case 6:
            _context2.next = 8;
            return response.json();

          case 8:
            resp = _context2.sent;
            return _context2.abrupt("return", resp.translations);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _translate.apply(this, arguments);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./static/admin/admintoolbar.vue":
/*!***************************************!*\
  !*** ./static/admin/admintoolbar.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admintoolbar_vue_vue_type_template_id_657b65a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admintoolbar.vue?vue&type=template&id=657b65a2& */ "./static/admin/admintoolbar.vue?vue&type=template&id=657b65a2&");
/* harmony import */ var _admintoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admintoolbar.vue?vue&type=script&lang=js& */ "./static/admin/admintoolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admintoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admintoolbar_vue_vue_type_template_id_657b65a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admintoolbar_vue_vue_type_template_id_657b65a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/admin/admintoolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/admin/admintoolbar.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./static/admin/admintoolbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admintoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./admintoolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/admintoolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admintoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/admin/admintoolbar.vue?vue&type=template&id=657b65a2&":
/*!**********************************************************************!*\
  !*** ./static/admin/admintoolbar.vue?vue&type=template&id=657b65a2& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admintoolbar_vue_vue_type_template_id_657b65a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./admintoolbar.vue?vue&type=template&id=657b65a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/admintoolbar.vue?vue&type=template&id=657b65a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admintoolbar_vue_vue_type_template_id_657b65a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admintoolbar_vue_vue_type_template_id_657b65a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/admin/app.vue":
/*!******************************!*\
  !*** ./static/admin/app.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_2960a48e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=2960a48e& */ "./static/admin/app.vue?vue&type=template&id=2960a48e&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./static/admin/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&lang=css& */ "./static/admin/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_2960a48e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_2960a48e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/admin/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/admin/app.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./static/admin/app.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/admin/app.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************!*\
  !*** ./static/admin/app.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/admin/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./static/admin/app.vue?vue&type=template&id=2960a48e&":
/*!*************************************************************!*\
  !*** ./static/admin/app.vue?vue&type=template&id=2960a48e& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_2960a48e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=2960a48e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/app.vue?vue&type=template&id=2960a48e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_2960a48e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_2960a48e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/admin/dirtyWordsTextBox.vue":
/*!********************************************!*\
  !*** ./static/admin/dirtyWordsTextBox.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dirtyWordsTextBox_vue_vue_type_template_id_448c1e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dirtyWordsTextBox.vue?vue&type=template&id=448c1e14& */ "./static/admin/dirtyWordsTextBox.vue?vue&type=template&id=448c1e14&");
/* harmony import */ var _dirtyWordsTextBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dirtyWordsTextBox.vue?vue&type=script&lang=js& */ "./static/admin/dirtyWordsTextBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dirtyWordsTextBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dirtyWordsTextBox_vue_vue_type_template_id_448c1e14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dirtyWordsTextBox_vue_vue_type_template_id_448c1e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/admin/dirtyWordsTextBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/admin/dirtyWordsTextBox.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./static/admin/dirtyWordsTextBox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtyWordsTextBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./dirtyWordsTextBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/dirtyWordsTextBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtyWordsTextBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/admin/dirtyWordsTextBox.vue?vue&type=template&id=448c1e14&":
/*!***************************************************************************!*\
  !*** ./static/admin/dirtyWordsTextBox.vue?vue&type=template&id=448c1e14& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtyWordsTextBox_vue_vue_type_template_id_448c1e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./dirtyWordsTextBox.vue?vue&type=template&id=448c1e14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/dirtyWordsTextBox.vue?vue&type=template&id=448c1e14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtyWordsTextBox_vue_vue_type_template_id_448c1e14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtyWordsTextBox_vue_vue_type_template_id_448c1e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/admin/dirtywordsdialog.vue":
/*!*******************************************!*\
  !*** ./static/admin/dirtywordsdialog.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dirtywordsdialog_vue_vue_type_template_id_1293e702___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dirtywordsdialog.vue?vue&type=template&id=1293e702& */ "./static/admin/dirtywordsdialog.vue?vue&type=template&id=1293e702&");
/* harmony import */ var _dirtywordsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dirtywordsdialog.vue?vue&type=script&lang=js& */ "./static/admin/dirtywordsdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dirtywordsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dirtywordsdialog_vue_vue_type_template_id_1293e702___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dirtywordsdialog_vue_vue_type_template_id_1293e702___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/admin/dirtywordsdialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/admin/dirtywordsdialog.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./static/admin/dirtywordsdialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtywordsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./dirtywordsdialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/dirtywordsdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtywordsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/admin/dirtywordsdialog.vue?vue&type=template&id=1293e702&":
/*!**************************************************************************!*\
  !*** ./static/admin/dirtywordsdialog.vue?vue&type=template&id=1293e702& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtywordsdialog_vue_vue_type_template_id_1293e702___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./dirtywordsdialog.vue?vue&type=template&id=1293e702& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/dirtywordsdialog.vue?vue&type=template&id=1293e702&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtywordsdialog_vue_vue_type_template_id_1293e702___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dirtywordsdialog_vue_vue_type_template_id_1293e702___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/admin/filters.js":
/*!*********************************!*\
  !*** ./static/admin/filters.js ***!
  \*********************************/
/*! exports provided: timeago, firestoremilliseconds, dollaramount, localestring, percent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeago", function() { return timeago; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestoremilliseconds", function() { return firestoremilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dollaramount", function() { return dollaramount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localestring", function() { return localestring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
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
var timeago = function timeago(ptime, ctime) {
  if (!ptime) return '';
  if (!ctime) ctime = Date.now();
  var seconds = Math.floor((ctime - ptime) / 1000);
  var intervals = [Math.floor(seconds / 31536000), Math.floor(seconds / 2592000), Math.floor(seconds / 604800), Math.floor(seconds / 86400), Math.floor(seconds / 3600), Math.floor(seconds / 60)];
  var times = ['year', 'month', 'week', 'day', 'hour', 'minute'];

  for (var key in intervals) {
    if (intervals[key] > 1) {
      return intervals[key] + ' ' + times[key] + 's ago';
    } else if (intervals[key] === 1) {
      return intervals[key] + ' ' + times[key] + ' ago';
    }
  }

  return 'moments ago';
};
var firestoremilliseconds = function firestoremilliseconds(timestamp) {
  if (timestamp && timestamp._seconds) return timestamp._seconds * 1000;
  if (timestamp && timestamp.seconds) return timestamp.seconds * 1000;
};
var dollaramount = function dollaramount(amount) {
  if (isNumber(amount)) return '$ ' + amount.toFixed(2);
};
var localestring = function localestring(value) {
  if (value && value.toLocaleString) return value.toLocaleString();
};
var percent = function percent(value) {
  if (isNumber(value)) return Math.round(value * 100) + ' %';
};

function isNumber(value) {
  return Number.isFinite(value);
}

/***/ }),

/***/ "./static/admin/index.js":
/*!*******************************!*\
  !*** ./static/admin/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var buefy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buefy */ "./node_modules/buefy/dist/esm/index.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ "./static/admin/store.js");
/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.vue */ "./static/admin/app.vue");
/* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Locales.js */ "./static/Locales.js");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! buefy/dist/buefy.css */ "./node_modules/buefy/dist/buefy.css");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_6__);
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







vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(buefy__WEBPACK_IMPORTED_MODULE_1__["default"], {
  defaultIconPack: 'fas'
});
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]);
var i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]({
  locale: 'en'
});
loadLocale(i18n.locale).then(function () {
  new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    i18n: i18n,
    el: '#app',
    template: '<app/>',
    store: _store_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    components: {
      app: _app_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    }
  });
});

function loadLocale(locale) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
      var file, messages;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = _Locales_js__WEBPACK_IMPORTED_MODULE_5__["getMessagesFileName"](locale);
              _context.next = 3;
              return __webpack_require__("./static/locales lazy recursive ^\\.\\/.*$")("./".concat(file));

            case 3:
              messages = _context.sent["default"];
              i18n.setLocaleMessage(locale, messages);
              resolve();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/***/ }),

/***/ "./static/admin/paymentsdialog.vue":
/*!*****************************************!*\
  !*** ./static/admin/paymentsdialog.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paymentsdialog_vue_vue_type_template_id_bdee0150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentsdialog.vue?vue&type=template&id=bdee0150& */ "./static/admin/paymentsdialog.vue?vue&type=template&id=bdee0150&");
/* harmony import */ var _paymentsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentsdialog.vue?vue&type=script&lang=js& */ "./static/admin/paymentsdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paymentsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paymentsdialog_vue_vue_type_template_id_bdee0150___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paymentsdialog_vue_vue_type_template_id_bdee0150___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/admin/paymentsdialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/admin/paymentsdialog.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./static/admin/paymentsdialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paymentsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./paymentsdialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/paymentsdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paymentsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/admin/paymentsdialog.vue?vue&type=template&id=bdee0150&":
/*!************************************************************************!*\
  !*** ./static/admin/paymentsdialog.vue?vue&type=template&id=bdee0150& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paymentsdialog_vue_vue_type_template_id_bdee0150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./paymentsdialog.vue?vue&type=template&id=bdee0150& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/paymentsdialog.vue?vue&type=template&id=bdee0150&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paymentsdialog_vue_vue_type_template_id_bdee0150___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paymentsdialog_vue_vue_type_template_id_bdee0150___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/admin/store.js":
/*!*******************************!*\
  !*** ./static/admin/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuexfire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuexfire */ "./node_modules/vuexfire/dist/vuexfire.esm.js");
/* harmony import */ var _WheelConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WheelConfig.js */ "./static/WheelConfig.js");
/* harmony import */ var _Preferences_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Preferences.js */ "./static/Preferences.js");
/* harmony import */ var _Firebase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Firebase.js */ "./static/Firebase.js");
/* harmony import */ var _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServerFunctions.js */ "./static/admin/ServerFunctions.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Util.js */ "./static/Util.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);







/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    wheel: {},
    wheelConfig: new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
    preferences: new _Preferences_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
    reviewQueueLength: '',
    appStatus: {
      userIsLoggedIn: false,
      userPhotoUrl: '',
      userDisplayName: '',
      userUid: '',
      idToken: ''
    },
    earningsPerReviewDoc: '',
    admins: [],
    user: {}
  },
  getters: {
    darkMode: function darkMode(state) {
      return state.preferences.darkMode;
    }
  },
  mutations: _objectSpread({
    setWheel: function setWheel(state, newWheel) {
      if (!newWheel) return;
      state.wheel = newWheel;
      state.wheel.reviewStatus = state.wheel.reviewStatus || 'Not reviewed';
      var wheelConfig = new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
      wheelConfig.loadValues(newWheel.config);
      state.wheelConfig = wheelConfig;
    },
    clearWheel: function clearWheel(state) {
      state.wheel = {};
      state.wheelConfig = new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    },
    logInUser: function logInUser(state, payload) {
      state.appStatus.userIsLoggedIn = true;
      state.appStatus.userPhotoUrl = payload.photoUrl;
      state.appStatus.userDisplayName = payload.displayName;
      state.appStatus.userUid = payload.uid;
      state.appStatus.idToken = payload.idToken;
    },
    logOutUser: function logOutUser(state) {
      state.appStatus.userIsLoggedIn = false;
      state.appStatus.userPhotoUrl = '';
      state.appStatus.userDisplayName = '';
      state.appStatus.userUid = '';
      state.appStatus.idToken = '';
    },
    setNames: function setNames(state, names) {
      state.wheelConfig.names = names;
    },
    setReviewQueueLength: function setReviewQueueLength(state, queueLength) {
      state.reviewQueueLength = queueLength;
    },
    decrementQueueLength: function decrementQueueLength(state) {
      if (state.reviewQueueLength) state.reviewQueueLength -= 1;
    },
    toggleDarkMode: function toggleDarkMode(state) {
      var newPrefs = state.preferences.clone();
      newPrefs.darkMode = !newPrefs.darkMode;
      state.preferences = newPrefs;
    },
    startWheelSpin: function startWheelSpin() {},
    stopWheelSpin: function stopWheelSpin() {}
  }, vuexfire__WEBPACK_IMPORTED_MODULE_2__["vuexfireMutations"]),
  actions: {
    bindFirestore: Object(vuexfire__WEBPACK_IMPORTED_MODULE_2__["firestoreAction"])(function (_ref) {
      var bindFirestoreRef = _ref.bindFirestoreRef,
          unbindFirestoreRef = _ref.unbindFirestoreRef;
      var db = _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["getDb"]();
      bindFirestoreRef('earningsPerReviewDoc', db.doc('settings/EARNINGS_PER_REVIEW'));
      bindFirestoreRef('admins', db.collection('admins').orderBy('name'));
    }),
    bindUser: Object(vuexfire__WEBPACK_IMPORTED_MODULE_2__["firestoreAction"])(function (_ref2, uid) {
      var bindFirestoreRef = _ref2.bindFirestoreRef,
          unbindFirestoreRef = _ref2.unbindFirestoreRef;
      var db = _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["getDb"]();
      bindFirestoreRef('user', db.doc("admins/".concat(uid)));
    }),
    resetSessionReviews: function resetSessionReviews(context, uid) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["resetSessionReviews"](uid);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateReviewQueueLength: function updateReviewQueueLength(context) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var idToken, queueLength;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                idToken = context.state.appStatus.idToken;
                _context2.prev = 1;
                _context2.next = 4;
                return _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_6__["getNumberOfWheelsInReviewQueue"](idToken);

              case 4:
                queueLength = _context2.sent;
                context.commit('setReviewQueueLength', queueLength);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                context.commit('setReviewQueueLength', '');

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8]]);
      }))();
    },
    loadWheel: function loadWheel(context, path) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var wheel;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (context.state.appStatus.userIsLoggedIn) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["getSharedWheel"](path);

              case 4:
                wheel = _context3.sent;
                context.commit('setWheel', wheel);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getNextSharedWheelForReview: function getNextSharedWheelForReview(context) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var wheel;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (context.state.appStatus.userIsLoggedIn) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.next = 4;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["getNextSharedWheelForReview"]();

              case 4:
                wheel = _context4.sent;
                context.commit('setWheel', wheel);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    approveWheel: function approveWheel(context) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var uid;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (context.state.appStatus.userIsLoggedIn) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                if (context.state.wheel) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return");

              case 4:
                if (!(context.state.wheel.reviewStatus == 'Approved')) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                uid = context.state.appStatus.userUid;
                _context5.next = 9;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["approveSharedWheel"](context.state.wheel.path, uid);

              case 9:
                context.state.wheel.reviewStatus = 'Approved';
                context.commit('decrementQueueLength');

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    deleteWheel: function deleteWheel(context) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var newReview;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (context.state.appStatus.userIsLoggedIn) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                if (context.state.wheel) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt("return");

              case 4:
                newReview = context.state.wheel.reviewStatus != 'Approved';
                _context6.next = 7;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["deleteSharedWheel"](context.state.wheel.path, newReview);

              case 7:
                context.commit('clearWheel');
                if (newReview) context.commit('decrementQueueLength');

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    translateWheel: function translateWheel(context) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var entries, imageEntries, idToken, trEntries, newEntries, i, newEntry;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                entries = context.state.wheelConfig.names.map(function (entry) {
                  return _Util_js__WEBPACK_IMPORTED_MODULE_7__["extractDisplayText"](entry);
                });
                imageEntries = context.state.wheelConfig.names.map(function (entry) {
                  return _Util_js__WEBPACK_IMPORTED_MODULE_7__["extractImage"](entry);
                });
                idToken = context.state.appStatus.idToken;
                _context7.next = 5;
                return _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_6__["translate"](idToken, entries);

              case 5:
                trEntries = _context7.sent;
                newEntries = [];

                for (i = 0; i < trEntries.length; i++) {
                  newEntry = trEntries[i].trim();

                  if (imageEntries[i]) {
                    newEntry += "<img src=\"".concat(imageEntries[i], "\" style=\"height:25px\" style=\"font-size: 1rem;\">");
                  }

                  newEntries.push(newEntry);
                }

                context.commit('setNames', newEntries);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    setAdminsReviewsToZero: function setAdminsReviewsToZero(context, uid) {
      _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["setAdminsWheelsToZero"](uid);
    },
    addAdmin: function addAdmin(context, _ref3) {
      var uid = _ref3.uid,
          name = _ref3.name;
      _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["addAdmin"](uid, name);
    },
    deleteAdmin: function deleteAdmin(context, uid) {
      _Firebase_js__WEBPACK_IMPORTED_MODULE_5__["deleteAdmin"](uid);
    }
  }
}));

/***/ }),

/***/ "./static/admin/textbox.vue":
/*!**********************************!*\
  !*** ./static/admin/textbox.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textbox_vue_vue_type_template_id_16a0e22a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textbox.vue?vue&type=template&id=16a0e22a& */ "./static/admin/textbox.vue?vue&type=template&id=16a0e22a&");
/* harmony import */ var _textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textbox.vue?vue&type=script&lang=js& */ "./static/admin/textbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _textbox_vue_vue_type_template_id_16a0e22a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _textbox_vue_vue_type_template_id_16a0e22a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/admin/textbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/admin/textbox.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./static/admin/textbox.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./textbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/textbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/admin/textbox.vue?vue&type=template&id=16a0e22a&":
/*!*****************************************************************!*\
  !*** ./static/admin/textbox.vue?vue&type=template&id=16a0e22a& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_template_id_16a0e22a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./textbox.vue?vue&type=template&id=16a0e22a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/textbox.vue?vue&type=template&id=16a0e22a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_template_id_16a0e22a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_template_id_16a0e22a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/admin/usersdialog.vue":
/*!**************************************!*\
  !*** ./static/admin/usersdialog.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usersdialog_vue_vue_type_template_id_1ee0bb3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersdialog.vue?vue&type=template&id=1ee0bb3d& */ "./static/admin/usersdialog.vue?vue&type=template&id=1ee0bb3d&");
/* harmony import */ var _usersdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersdialog.vue?vue&type=script&lang=js& */ "./static/admin/usersdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _usersdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _usersdialog_vue_vue_type_template_id_1ee0bb3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _usersdialog_vue_vue_type_template_id_1ee0bb3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/admin/usersdialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/admin/usersdialog.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./static/admin/usersdialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_usersdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./usersdialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/usersdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_usersdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/admin/usersdialog.vue?vue&type=template&id=1ee0bb3d&":
/*!*********************************************************************!*\
  !*** ./static/admin/usersdialog.vue?vue&type=template&id=1ee0bb3d& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_usersdialog_vue_vue_type_template_id_1ee0bb3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./usersdialog.vue?vue&type=template&id=1ee0bb3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/admin/usersdialog.vue?vue&type=template&id=1ee0bb3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_usersdialog_vue_vue_type_template_id_1ee0bb3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_usersdialog_vue_vue_type_template_id_1ee0bb3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/hubSizes.js":
/*!****************************!*\
  !*** ./static/hubSizes.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
exports.hubSizes = {
  'XS': 0.01,
  'S': 0.2,
  'M': 0.3,
  'L': 0.4,
  'XL': 0.5,
  'XXL': 0.6
};

/***/ }),

/***/ "./static/images/cheers.png":
/*!**********************************!*\
  !*** ./static/images/cheers.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/cheers.png");

/***/ }),

/***/ "./static/images/none.png":
/*!********************************!*\
  !*** ./static/images/none.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/none.png");

/***/ }),

/***/ "./static/locales lazy recursive ^\\.\\/.*$":
/*!*******************************************************!*\
  !*** ./static/locales lazy ^\.\/.*$ namespace object ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-US": [
		"./static/locales/en-US.json",
		"locale-en-US"
	],
	"./en-US.json": [
		"./static/locales/en-US.json",
		"locale-en-US"
	],
	"./fr-FR": [
		"./static/locales/fr-FR.json",
		"locale-fr-FR"
	],
	"./fr-FR.json": [
		"./static/locales/fr-FR.json",
		"locale-fr-FR"
	],
	"./sv-SE": [
		"./static/locales/sv-SE.json",
		"locale-sv-SE"
	],
	"./sv-SE.json": [
		"./static/locales/sv-SE.json",
		"locale-sv-SE"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./static/locales lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./static/spinningwheel.vue":
/*!**********************************!*\
  !*** ./static/spinningwheel.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true& */ "./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true&");
/* harmony import */ var _spinningwheel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinningwheel.vue?vue&type=script&lang=js& */ "./static/spinningwheel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css& */ "./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _spinningwheel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78fb99d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/spinningwheel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/spinningwheel.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./static/spinningwheel.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./spinningwheel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/third_party/publicdomainvectors/camera.png":
/*!***********************************************************!*\
  !*** ./static/third_party/publicdomainvectors/camera.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/camera.png");

/***/ }),

/***/ "./static/third_party/publicdomainvectors/cat.png":
/*!********************************************************!*\
  !*** ./static/third_party/publicdomainvectors/cat.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/cat.png");

/***/ }),

/***/ "./static/third_party/publicdomainvectors/dog.png":
/*!********************************************************!*\
  !*** ./static/third_party/publicdomainvectors/dog.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/dog.png");

/***/ }),

/***/ "./static/third_party/publicdomainvectors/dollar-sign.png":
/*!****************************************************************!*\
  !*** ./static/third_party/publicdomainvectors/dollar-sign.png ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/dollar-sign.png");

/***/ }),

/***/ "./static/third_party/publicdomainvectors/dragon.png":
/*!***********************************************************!*\
  !*** ./static/third_party/publicdomainvectors/dragon.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/dragon.png");

/***/ })

/******/ });
//# sourceMappingURL=admin-4dcdb4385e3f3749f7c0.js.map