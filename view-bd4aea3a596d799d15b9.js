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
/******/ 		"view": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"locale-en-US":"locale-en-US","locale-fr-FR":"locale-fr-FR","locale-sv-SE":"locale-sv-SE","vendors~vibrant":"vendors~vibrant"}[chunkId]||chunkId) + "-" + {"locale-en-US":"c4317b8f0cb01a15adf1","locale-fr-FR":"f8fa0aa2ba61b00ab51f","locale-sv-SE":"4465e066bb82154f6295","vendors~vibrant":"d01f260501d5ec725296"}[chunkId] + ".js"
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
/******/ 	deferredModules.push(["./static/view.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/viewapp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/viewapp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadingScreen_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadingScreen.vue */ "./static/loadingScreen.vue");
/* harmony import */ var _spinningwheel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinningwheel.vue */ "./static/spinningwheel.vue");
/* harmony import */ var _winnerdialog_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winnerdialog.vue */ "./static/winnerdialog.vue");
/* harmony import */ var _winneranimation_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winneranimation.vue */ "./static/winneranimation.vue");
/* harmony import */ var _ConfettiLauncher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfettiLauncher.js */ "./static/ConfettiLauncher.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _WheelConfig_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WheelConfig.js */ "./static/WheelConfig.js");
/* harmony import */ var _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServerFunctions.js */ "./static/ServerFunctions.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio.js */ "./static/audio.js");
/* harmony import */ var _WheelConfigLoader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WheelConfigLoader.js */ "./static/WheelConfigLoader.js");
/* harmony import */ var _Path_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Path.js */ "./static/Path.js");
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











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    loadingScreen: _loadingScreen_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    spinningwheel: _spinningwheel_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    winnerdialog: _winnerdialog_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    winneranimation: _winneranimation_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var wheelConfig, result, path;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              wheelConfig = new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_6__["default"](_this.$t('common.We have a winner!'));
              _context.prev = 1;
              _context.next = 4;
              return _WheelConfigLoader_js__WEBPACK_IMPORTED_MODULE_9__["load"](window.location);

            case 4:
              result = _context.sent;
              wheelConfig.loadValues(result.wheelConfig);
              _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_7__["logSharedWheelRead"](result.sharedWheelPath);
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              _Util_js__WEBPACK_IMPORTED_MODULE_5__["trackEvent"](_context.t0);
              alert(_context.t0);

            case 13:
              path = new _Path_js__WEBPACK_IMPORTED_MODULE_10__["default"](window.location);
              document.getElementById('createYourOwnLink').href = path.getAbsoluteLocalizedRootUrl();

              _this.$store.commit('setWheelConfig', wheelConfig);

              document.documentElement.style.backgroundColor = wheelConfig.pageBackgroundColor;
              document.body.style.backgroundColor = wheelConfig.pageBackgroundColor;
              _audio_js__WEBPACK_IMPORTED_MODULE_8__["preloadSounds"](wheelConfig.duringSpinSound, wheelConfig.afterSpinSound);

              _this.setDocLangProperties();

              _this.refreshWheelOnFontLoad();

              _this.loading = false;

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }))();
  },
  data: function data() {
    return {
      waitAnimation: {},
      loading: true
    };
  },
  computed: {
    wheelConfig: function wheelConfig() {
      return this.$store.state.wheelConfig;
    },
    wheelSpinning: function wheelSpinning() {
      return this.$store.state.appStatus.wheelSpinning;
    }
  },
  methods: {
    setDocLangProperties: function setDocLangProperties() {
      document.documentElement.setAttribute('lang', this.$i18n.locale);
      document.title = 'Drink Roulette';
      var desc = this.$t('app.Free and easy to use');
      document.querySelector('meta[name="description"]').setAttribute("content", desc);
    },
    refreshWheelOnFontLoad: function refreshWheelOnFontLoad() {
      if (document.fonts) {
        var self = this;
        document.fonts.ready.then(function () {
          self.$refs.spinningwheel.refresh();
        });
      }
    },
    nameChanged: function nameChanged() {
      var state = this.$store.state;

      if (state.appStatus.wheelSpinning && state.wheelConfig.shouldPlayTicks()) {
        _audio_js__WEBPACK_IMPORTED_MODULE_8__["playTick"]();
      }
    },
    wheelStarted: function wheelStarted() {
      _audio_js__WEBPACK_IMPORTED_MODULE_8__["startMusic"](this.wheelConfig.duringSpinSound);
    },
    wheelStopped: function wheelStopped(winningEntry) {
      var _this2 = this;

      _audio_js__WEBPACK_IMPORTED_MODULE_8__["stopMusic"]();

      if (this.wheelConfig.animateWinner) {
        this.$refs.winneranimation.show(winningEntry);
      }

      if (this.wheelConfig.launchConfetti) {
        _ConfettiLauncher_js__WEBPACK_IMPORTED_MODULE_4__["launch"](this.wheelConfig.getCoalescedColors());
      }

      if (this.wheelConfig.displayWinnerDialog) {
        this.$refs.winnerdialog.show(winningEntry);
      }

      if (this.wheelConfig.autoRemoveWinner) {
        setTimeout(function (_) {
          return _this2.removeName(winningEntry);
        }, 5000);
      }

      _audio_js__WEBPACK_IMPORTED_MODULE_8__["playAfterSpin"](this.wheelConfig.afterSpinSound, _Util_js__WEBPACK_IMPORTED_MODULE_5__["extractDisplayText"](winningEntry));
    },
    showSnackbarMessage: function showSnackbarMessage(msg) {
      this.$buefy.toast.open({
        message: msg,
        duration: 6000
      });
    },
    removeName: function removeName(name) {
      if (this.$store.state.wheelConfig.playClickWhenWinnerRemoved) {
        _audio_js__WEBPACK_IMPORTED_MODULE_8__["playClick"]();
      }

      this.$store.commit('removeName', name);
      var msg = this.$t('app.Removed', {
        name: _Util_js__WEBPACK_IMPORTED_MODULE_5__["extractDisplayText"](name, true)
      });
      this.showSnackbarMessage(msg);
    },
    removeNameAll: function removeNameAll(name) {
      if (this.$store.state.wheelConfig.playClickWhenWinnerRemoved) {
        _audio_js__WEBPACK_IMPORTED_MODULE_8__["playClick"]();
      }

      this.$store.commit('removeNameAll', name);
      var msg = this.$t('app.Removed', {
        name: _Util_js__WEBPACK_IMPORTED_MODULE_5__["extractDisplayText"](name, true)
      });
      this.showSnackbarMessage(msg);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/winneranimation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      winnerText: ''
    };
  },
  methods: {
    show: function show(winnerText) {
      var _this = this;

      var shortWinnerText = _Util_js__WEBPACK_IMPORTED_MODULE_0__["extractDisplayText"](winnerText, true);

      if (shortWinnerText) {
        this.winnerText = shortWinnerText;
        this.$refs.overlay.style.display = 'block';
        setTimeout(function () {
          _this.$refs.overlay.style.display = 'none';
        }, 6000);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/winnerdialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/winnerdialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      winnerDialogVisible: false,
      winnerText: '',
      winnerImage: '',
      winnerEntry: ''
    };
  },
  computed: {
    winnerMessage: function winnerMessage() {
      return this.$store.state.wheelConfig.winnerMessage;
    },
    showRemoveButton: function showRemoveButton() {
      return !this.$store.state.wheelConfig.autoRemoveWinner;
    },
    showRemoveAllButton: function showRemoveAllButton() {
      var wheelConfig = this.$store.state.wheelConfig;
      var winnerInstances = _Util_js__WEBPACK_IMPORTED_MODULE_0__["getOccurencesInArray"](wheelConfig.names, this.winnerEntry);
      var autoRemoveWinner = wheelConfig.autoRemoveWinner;
      return !autoRemoveWinner && winnerInstances > 1;
    }
  },
  methods: {
    show: function show(winnerEntry) {
      this.winnerEntry = winnerEntry;
      this.winnerText = _Util_js__WEBPACK_IMPORTED_MODULE_0__["extractDisplayText"](winnerEntry, false);
      this.winnerImage = _Util_js__WEBPACK_IMPORTED_MODULE_0__["extractImage"](winnerEntry);
      this.winnerDialogVisible = true;
      this.setFocusOnRemoveButton();
    },
    setFocusOnRemoveButton: function setFocusOnRemoveButton() {
      var _this = this;

      this.$nextTick(function () {
        setTimeout(function () {
          if (_this.$refs.removeButton) _this.$refs.removeButton.$el.focus();
        }, 100);
      });
    },
    close: function close() {
      this.winnerDialogVisible = false;
    },
    removeWinner: function removeWinner() {
      this.$emit('remove-name', this.winnerEntry);
      this.winnerDialogVisible = false;
    },
    removeWinnerAll: function removeWinnerAll() {
      this.$emit('remove-name-all', this.winnerEntry);
      this.winnerDialogVisible = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true& ***!
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
  return _c("div", { staticClass: "overlay" }, [_vm._v("\n  ⏳\n")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/viewapp.vue?vue&type=template&id=44385649&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/viewapp.vue?vue&type=template&id=44385649& ***!
  \*****************************************************************************************************************************************************************************************/
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
      _c("loading-screen", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loading,
            expression: "loading"
          }
        ]
      }),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "section",
          staticStyle: { "padding-top": "1rem", "padding-left": "1rem" }
        },
        [
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              {
                staticClass: "column is-3",
                staticStyle: { "font-family": "Quicksand" }
              },
              [
                _c(
                  "b-button",
                  { attrs: { id: "createYourOwnLink", tag: "a", href: "/" } },
                  [
                    _c("i", { staticClass: "fas fa-pencil-alt" }),
                    _vm._v(
                      " " + _vm._s(_vm.$t("app.Create your own")) + "\n        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "column is-7" },
              [
                _c("spinningwheel", {
                  ref: "spinningwheel",
                  on: {
                    "wheel-started": _vm.wheelStarted,
                    "name-changed": _vm.nameChanged,
                    "wheel-stopped": _vm.wheelStopped
                  }
                })
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("winnerdialog", {
        ref: "winnerdialog",
        on: {
          "remove-name": _vm.removeName,
          "remove-name-all": _vm.removeNameAll
        }
      }),
      _vm._v(" "),
      _c("winneranimation", { ref: "winneranimation" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { ref: "overlay", staticClass: "animated-background" }, [
    _c("div", { staticClass: "content" }, [
      _c(
        "p",
        { staticClass: "animated-text", staticStyle: { color: "#FFFFFF" } },
        [_vm._v("\n      " + _vm._s(_vm.winnerText) + "\n    ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/winnerdialog.vue?vue&type=template&id=0208062a&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/winnerdialog.vue?vue&type=template&id=0208062a& ***!
  \**********************************************************************************************************************************************************************************************/
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
    "b-modal",
    {
      attrs: { active: _vm.winnerDialogVisible, width: 640, scroll: "keep" },
      on: {
        "update:active": function($event) {
          _vm.winnerDialogVisible = $event
        }
      }
    },
    [
      _c("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [
        _c("header", { staticClass: "modal-card-head" }, [
          _c(
            "div",
            { staticClass: "modal-card-title", staticStyle: { width: "100%" } },
            [
              _c("h5", { staticClass: "modal-title" }, [
                _vm._v(
                  "\n          " + _vm._s(_vm.winnerMessage) + "\n        "
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "modal-card-body can-go-dark" }, [
          _c("h1", { staticClass: "title" }, [
            _vm.winnerImage
              ? _c("img", {
                  staticStyle: { height: "200px", "vertical-align": "middle" },
                  attrs: { src: _vm.winnerImage }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.winnerText))])
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
                attrs: { size: "is-medium" },
                on: {
                  click: function($event) {
                    _vm.winnerDialogVisible = false
                  }
                }
              },
              [
                _vm._v(
                  "\n        " + _vm._s(_vm.$t("common.Close")) + "\n      "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showRemoveButton,
                    expression: "showRemoveButton"
                  }
                ],
                ref: "removeButton",
                attrs: { size: "is-medium", type: "is-info" },
                on: { click: _vm.removeWinner }
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$t("winnerdialog.Remove")) +
                    "\n      "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showRemoveAllButton,
                    expression: "showRemoveAllButton"
                  }
                ],
                attrs: { size: "is-medium", type: "is-primary" },
                on: { click: _vm.removeWinnerAll }
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$t("winnerdialog.Remove all instances")) +
                    "\n      "
                )
              ]
            )
          ],
          1
        )
      ])
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

/***/ "./static/ConfettiLauncher.js":
/*!************************************!*\
  !*** ./static/ConfettiLauncher.js ***!
  \************************************/
/*! exports provided: launch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launch", function() { return launch; });
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canvas-confetti */ "./node_modules/canvas-confetti/dist/confetti.module.mjs");
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

var end;
var myColors;
function launch(colors) {
  myColors = colors;
  end = Date.now() + 5 * 1000;
  boom();
}

function boom() {
  var interval = setInterval(function () {
    if (Date.now() > end) {
      return clearInterval(interval);
    }

    Object(canvas_confetti__WEBPACK_IMPORTED_MODULE_0__["default"])({
      startVelocity: 30,
      particleCount: 100,
      spread: 360,
      ticks: 60,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      },
      colors: myColors
    });
  }, 200);
}

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

/***/ "./static/Path.js":
/*!************************!*\
  !*** ./static/Path.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
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


var Path = /*#__PURE__*/function () {
  function Path(location) {
    _classCallCheck(this, Path);

    this.protocol = location.protocol;
    this.host = location.host;
    this.locale = _Locales_js__WEBPACK_IMPORTED_MODULE_0__["getLocale"](location.host, location.pathname);
    var match = location.pathname.match(/\w\w\w-\w\w\w/);
    this.sharedWheel = match ? match[0].toLowerCase() : '';
  }

  _createClass(Path, [{
    key: "setPathPrefix",
    value: function setPathPrefix(prefix) {
      this.prefix = prefix;
    }
  }, {
    key: "getAbsoluteUrl",
    value: function getAbsoluteUrl() {
      return [this.protocol, '/', this.host, this.prefix, _Locales_js__WEBPACK_IMPORTED_MODULE_0__["getDomainLocale"](this.host) == this.locale ? '' : this.locale, this.sharedWheel].filter(function (x) {
        return x;
      }).join('/').replace('///', '//') + '/';
    }
  }, {
    key: "getAbsoluteLocalizedRootUrl",
    value: function getAbsoluteLocalizedRootUrl() {
      return [this.protocol, '/', this.host, _Locales_js__WEBPACK_IMPORTED_MODULE_0__["getDomainLocale"](this.host) == this.locale ? '' : this.locale].filter(function (x) {
        return x;
      }).join('/').replace('///', '//') + '/';
    }
  }]);

  return Path;
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

/***/ "./static/ServerFunctions.js":
/*!***********************************!*\
  !*** ./static/ServerFunctions.js ***!
  \***********************************/
/*! exports provided: createSharedWheel, logSharedWheelRead, getSharedWheel, fetchSocialMediaUsers, convertAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSharedWheel", function() { return createSharedWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logSharedWheelRead", function() { return logSharedWheelRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedWheel", function() { return getSharedWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSocialMediaUsers", function() { return fetchSocialMediaUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertAccount", function() { return convertAccount; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
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



function createSharedWheel(_x, _x2) {
  return _createSharedWheel.apply(this, arguments);
}

function _createSharedWheel() {
  _createSharedWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(editable, wheelConfig) {
    var payload, url, response, respObj;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            payload = {
              editable: editable,
              wheelConfig: wheelConfig.getValues()
            };
            url = process.env.FUNCTION_PREFIX + '/createSharedWheel2';
            _context.next = 4;
            return fetch(url, {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            respObj = _context.sent;

            if (!respObj.hasOwnProperty('error')) {
              _context.next = 10;
              break;
            }

            throw respObj.error;

          case 10:
            return _context.abrupt("return", respObj.path);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createSharedWheel.apply(this, arguments);
}

function logSharedWheelRead(_x3) {
  return _logSharedWheelRead.apply(this, arguments);
}

function _logSharedWheelRead() {
  _logSharedWheelRead = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path) {
    var payload, url, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            payload = {
              path: path
            };
            url = process.env.FUNCTION_PREFIX + '/logSharedWheelRead';
            _context2.next = 4;
            return fetch(url, {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });

          case 4:
            response = _context2.sent;

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _logSharedWheelRead.apply(this, arguments);
}

function getSharedWheel(_x4) {
  return _getSharedWheel.apply(this, arguments);
}

function _getSharedWheel() {
  _getSharedWheel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(path) {
    var url, response, respObj;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = process.env.FUNCTION_PREFIX + "/getSharedWheel2/".concat(path);
            _context3.next = 3;
            return fetch(url, {
              method: 'GET',
              mode: 'cors'
            });

          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.json();

          case 6:
            respObj = _context3.sent;
            return _context3.abrupt("return", respObj.wheelConfig);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getSharedWheel.apply(this, arguments);
}

function fetchSocialMediaUsers(_x5) {
  return _fetchSocialMediaUsers.apply(this, arguments);
}

function _fetchSocialMediaUsers() {
  _fetchSocialMediaUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(searchTerm) {
    var url, response, respObj;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = process.env.FUNCTION_PREFIX + "/getTwitterUserNames2/".concat(encodeURIComponent(searchTerm));
            _context4.next = 3;
            return fetch(url, {
              method: 'GET',
              mode: 'cors'
            });

          case 3:
            response = _context4.sent;
            _context4.next = 6;
            return response.json();

          case 6:
            respObj = _context4.sent;
            return _context4.abrupt("return", respObj);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _fetchSocialMediaUsers.apply(this, arguments);
}

function convertAccount(_x6) {
  return _convertAccount.apply(this, arguments);
}

function _convertAccount() {
  _convertAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(idToken) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            url = process.env.FUNCTION_PREFIX + '/convertAccount';
            _context5.prev = 1;
            _context5.next = 4;
            return fetch(url, {
              method: 'POST',
              mode: 'cors',
              headers: {
                'authorization': idToken
              }
            });

          case 4:
            response = _context5.sent;
            _context5.next = 7;
            return response.json();

          case 7:
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            _Util_js__WEBPACK_IMPORTED_MODULE_2__["trackException"](_context5.t0);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 9]]);
  }));
  return _convertAccount.apply(this, arguments);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

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

/***/ "./static/WheelConfigLoader.js":
/*!*************************************!*\
  !*** ./static/WheelConfigLoader.js ***!
  \*************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var _Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path.js */ "./static/Path.js");
/* harmony import */ var _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServerFunctions.js */ "./static/ServerFunctions.js");
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


function load(_x) {
  return _load.apply(this, arguments);
}

function _load() {
  _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(windowLocation) {
    var wheelConfig, redirectUrl, path, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            path = new _Path_js__WEBPACK_IMPORTED_MODULE_0__["default"](windowLocation);

            if (!path.sharedWheel) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_1__["getSharedWheel"](path.sharedWheel);

          case 4:
            result = _context.sent;

            if (result.editable == false) {
              path.setPathPrefix('view');
              redirectUrl = path.getAbsoluteUrl();
            }

            if (result.wheelConfig) {
              _context.next = 8;
              break;
            }

            throw "Wheel \"".concat(path.sharedWheel, "\" not found!");

          case 8:
            wheelConfig = result.wheelConfig;

          case 9:
            return _context.abrupt("return", {
              redirectUrl: redirectUrl,
              wheelConfig: wheelConfig,
              sharedWheelPath: path.sharedWheel
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _load.apply(this, arguments);
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

/***/ "./static/audio.js":
/*!*************************!*\
  !*** ./static/audio.js ***!
  \*************************/
/*! exports provided: getDuringSpinSounds, getAfterSpinSounds, playTick, playClick, playAfterSpin, startMusic, stopMusic, preloadSounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuringSpinSounds", function() { return getDuringSpinSounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAfterSpinSounds", function() { return getAfterSpinSounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playTick", function() { return playTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playClick", function() { return playClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAfterSpin", function() { return playAfterSpin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startMusic", function() { return startMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopMusic", function() { return stopMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preloadSounds", function() { return preloadSounds; });
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _third_party_soundbible_SMALL_CROWD_APPLAUSE_Yannick_Lemieux_1268806408_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./third_party/soundbible/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3 */ "./static/third_party/soundbible/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3");
/* harmony import */ var _ding_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ding.mp3 */ "./static/ding.mp3");
/* harmony import */ var _third_party_soundbible_Tick_DeepFrozenApps_397275646_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./third_party/soundbible/Tick-DeepFrozenApps-397275646.mp3 */ "./static/third_party/soundbible/Tick-DeepFrozenApps-397275646.mp3");
/* harmony import */ var _third_party_filmmusic_io_strength_of_the_titans_by_kevin_macleod_from_filmmusic_io_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./third_party/filmmusic-io/strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3 */ "./static/third_party/filmmusic-io/strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3");
/* harmony import */ var _third_party_filmmusic_io_amazing_plan_by_kevin_macleod_from_filmmusic_io_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./third_party/filmmusic-io/amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3 */ "./static/third_party/filmmusic-io/amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3");
/* harmony import */ var _third_party_filmmusic_io_life_of_riley_by_kevin_macleod_from_filmmusic_io_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./third_party/filmmusic-io/life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3 */ "./static/third_party/filmmusic-io/life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3");
/* harmony import */ var _third_party_freesound_350428_benjaminharveydesign_trumpet_fanfare_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./third_party/freesound/350428__benjaminharveydesign__trumpet-fanfare.mp3 */ "./static/third_party/freesound/350428__benjaminharveydesign__trumpet-fanfare.mp3");
/* harmony import */ var _third_party_freesound_370743_podsburgh_winner_metal_bell_ringing_remix_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./third_party/freesound/370743__podsburgh__winner-metal-bell-ringing-remix.mp3 */ "./static/third_party/freesound/370743__podsburgh__winner-metal-bell-ringing-remix.mp3");
/* harmony import */ var _third_party_freesound_425432_trivialaccapella_18_crash_hit_soft_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./third_party/freesound/425432__trivialaccapella__18-crash-hit-soft.mp3 */ "./static/third_party/freesound/425432__trivialaccapella__18-crash-hit-soft.mp3");
/* harmony import */ var _third_party_freesound_320652_celebration_success_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./third_party/freesound/320652_celebration__success.mp3 */ "./static/third_party/freesound/320652_celebration__success.mp3");
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












var sounds = {};
var musicPlayingNow;
var duringSpinSounds = [{
  name: 'sounds.No sound',
  value: 'no-sound'
}, {
  name: 'sounds.Ticking sound',
  value: 'ticking-sound'
}, {
  name: 'sounds.Dramatic music',
  value: 'dramatic-music',
  musicFile: '/strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3'
}, {
  name: 'sounds.Piano music',
  value: 'piano-music',
  musicFile: '/amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3'
}, {
  name: 'sounds.Cheerful music',
  value: 'cheerful-music',
  musicFile: '/life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3'
}];
var afterSpinSounds = [{
  name: 'sounds.No sound',
  value: 'no-sound'
}, {
  name: 'sounds.Applause',
  value: 'applause-sound',
  file: '/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3'
}, {
  name: 'sounds.Celebration',
  value: 'celebration-sound',
  file: '/320652_celebration__success.mp3'
}, {
  name: 'sounds.Fanfare',
  value: 'fanfare-sound',
  file: '/350428__benjaminharveydesign__trumpet-fanfare.mp3'
}, {
  name: 'sounds.Bell ringing',
  value: 'bell-sound',
  file: '/370743__podsburgh__winner-metal-bell-ringing-remix.mp3'
}, {
  name: 'sounds.Cymbals',
  value: 'cymbal-sound',
  file: '/425432__trivialaccapella__18-crash-hit-soft.mp3'
}, {
  name: 'sounds.Read out the winning name',
  value: 'read-winner-sound'
}];
function getDuringSpinSounds() {
  return duringSpinSounds;
}
function getAfterSpinSounds() {
  return afterSpinSounds;
}
function playTick() {
  playSound('/ding.mp3');
}
function playClick() {
  playSound('/Tick-DeepFrozenApps-397275646.mp3');
}
function playAfterSpin(trackName, winningEntry) {
  if (trackName == 'read-winner-sound') {
    if (window.speechSynthesis) {
      var utterThis = new SpeechSynthesisUtterance(winningEntry);
      window.speechSynthesis.speak(utterThis);
    }
  } else {
    var file = afterSpinSounds.find(function (sound) {
      return sound.value == trackName;
    }).file;
    if (file) playSound(file);
  }
}
function startMusic(trackName) {
  var file = duringSpinSounds.find(function (sound) {
    return sound.value == trackName;
  }).musicFile;
  if (file) musicPlayingNow = new Howl({
    src: [file],
    autoplay: true
  });
}
function stopMusic() {
  if (musicPlayingNow) musicPlayingNow.fade(1, 0, 1000);
  musicPlayingNow = null;
}

function playSound(soundName) {
  try {
    if (sounds[soundName]) {
      sounds[soundName].play();
    } else {
      sounds[soundName] = new Howl({
        src: [soundName],
        autoplay: true
      });
    }
  } catch (ex) {
    _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackException"](ex);
  }
}

function preloadSounds(duringSpinSound, afterSpinSound) {
  try {
    preloadFile(duringSpinSounds.find(function (sound) {
      return sound.value == duringSpinSound;
    }).musicFile);
    if (duringSpinSound == 'ticking-sound') preloadFile('/ding.mp3');
    preloadFile(afterSpinSounds.find(function (sound) {
      return sound.value == afterSpinSound;
    }).file);
  } catch (ex) {
    _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackException"](ex);
  }
}

function preloadFile(file) {
  if (file && !sounds[file]) {
    sounds[file] = new Howl({
      src: [file]
    });
  }
}

/***/ }),

/***/ "./static/ding.mp3":
/*!*************************!*\
  !*** ./static/ding.mp3 ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/ding.mp3");

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

/***/ "./static/images/404_cat.png":
/*!***********************************!*\
  !*** ./static/images/404_cat.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/404_cat.png");

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

/***/ "./static/images/favicon.ico":
/*!***********************************!*\
  !*** ./static/images/favicon.ico ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/favicon.ico");

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

/***/ "./static/images/icon_512.png":
/*!************************************!*\
  !*** ./static/images/icon_512.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/icon_512.png");

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

/***/ "./static/images/link.png":
/*!********************************!*\
  !*** ./static/images/link.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/link.png");

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

/***/ "./static/loadingScreen.vue":
/*!**********************************!*\
  !*** ./static/loadingScreen.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true& */ "./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true&");
/* harmony import */ var _loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css& */ "./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "de8bc816",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/loadingScreen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./static/store.js":
/*!*************************!*\
  !*** ./static/store.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _WheelConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WheelConfig.js */ "./static/WheelConfig.js");
/* harmony import */ var _Preferences_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Preferences.js */ "./static/Preferences.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
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
    wheelConfig: new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
    preferences: new _Preferences_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
    appStatus: {
      fullScreen: false,
      online: true,
      wheelSpinning: false,
      sheetLinked: false,
      userIsLoggedIn: false,
      userPhotoUrl: '',
      userDisplayName: '',
      userUid: '',
      darkMode: true
    },
    version: '2'
  },
  getters: {
    entryCount: function entryCount(state) {
      return state.wheelConfig.names.length;
    },
    darkMode: function darkMode(state) {
      return state.preferences.darkMode;
    }
  },
  mutations: {
    setWheelConfig: function setWheelConfig(state, newWheelConfig) {
      state.wheelConfig = newWheelConfig;
    },
    setWheelTitle: function setWheelTitle(state, title) {
      var clone = state.wheelConfig.clone();
      clone.title = title;
      state.wheelConfig = clone;
    },
    setNames: function setNames(state, names) {
      state.wheelConfig.names = names;
    },
    shuffleNames: function shuffleNames(state) {
      state.wheelConfig.names = _Util_js__WEBPACK_IMPORTED_MODULE_4__["shuffleArray"](state.wheelConfig.names);
    },
    sortNames: function sortNames(state) {
      state.wheelConfig.names = _Util_js__WEBPACK_IMPORTED_MODULE_4__["sortWheelEntries"](state.wheelConfig.names);
    },
    appendNames: function appendNames(state, names) {
      var newNames = state.wheelConfig.names.concat(names);
      state.wheelConfig.names = newNames;
    },
    removeName: function removeName(state, name) {
      var newNames = state.wheelConfig.names.slice(0);
      newNames.splice(newNames.indexOf(name), 1);
      state.wheelConfig.names = newNames;
      state.appStatus.sheetLinked = false;
    },
    removeNameAll: function removeNameAll(state, name) {
      state.wheelConfig.names = state.wheelConfig.names.filter(function (entry) {
        return entry != name;
      });
      state.appStatus.sheetLinked = false;
    },
    enterFullScreen: function enterFullScreen(state) {
      state.appStatus.fullScreen = true;
    },
    exitFullScreen: function exitFullScreen(state) {
      state.appStatus.fullScreen = false;
    },
    setOnline: function setOnline(state, online) {
      state.appStatus.online = online;
    },
    startWheelSpin: function startWheelSpin(state) {
      state.appStatus.wheelSpinning = true;
    },
    stopWheelSpin: function stopWheelSpin(state) {
      state.appStatus.wheelSpinning = false;
    },
    linkSheet: function linkSheet(state) {
      state.appStatus.sheetLinked = true;
    },
    unlinkSheet: function unlinkSheet(state) {
      state.appStatus.sheetLinked = false;
    },
    logInUser: function logInUser(state, payload) {
      state.appStatus.userIsLoggedIn = true;
      state.appStatus.userPhotoUrl = payload.photoUrl;
      state.appStatus.userDisplayName = payload.displayName;
      state.appStatus.userUid = payload.uid;
    },
    logOutUser: function logOutUser(state) {
      state.appStatus.userIsLoggedIn = false;
      state.appStatus.userPhotoUrl = '';
      state.appStatus.userDisplayName = '';
      state.appStatus.userUid = '';
    },
    setPreferences: function setPreferences(state, newPrefs) {
      state.preferences = newPrefs;
    },
    toggleAppInfoVisibility: function toggleAppInfoVisibility(state) {
      var newPrefs = state.preferences.clone();
      newPrefs.appInfoVisible = !newPrefs.appInfoVisible;
      state.preferences = newPrefs;
    },
    toggleDarkMode: function toggleDarkMode(state) {
      var newPrefs = state.preferences.clone();
      newPrefs.darkMode = !newPrefs.darkMode;
      state.preferences = newPrefs;
    }
  }
}));

/***/ }),

/***/ "./static/third_party/filmmusic-io/amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3":
/*!*********************************************************************************************!*\
  !*** ./static/third_party/filmmusic-io/amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3 ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3");

/***/ }),

/***/ "./static/third_party/filmmusic-io/life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3":
/*!**********************************************************************************************!*\
  !*** ./static/third_party/filmmusic-io/life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3 ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3");

/***/ }),

/***/ "./static/third_party/filmmusic-io/strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3":
/*!*******************************************************************************************************!*\
  !*** ./static/third_party/filmmusic-io/strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3 ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3");

/***/ }),

/***/ "./static/third_party/freesound/320652_celebration__success.mp3":
/*!**********************************************************************!*\
  !*** ./static/third_party/freesound/320652_celebration__success.mp3 ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/320652_celebration__success.mp3");

/***/ }),

/***/ "./static/third_party/freesound/350428__benjaminharveydesign__trumpet-fanfare.mp3":
/*!****************************************************************************************!*\
  !*** ./static/third_party/freesound/350428__benjaminharveydesign__trumpet-fanfare.mp3 ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/350428__benjaminharveydesign__trumpet-fanfare.mp3");

/***/ }),

/***/ "./static/third_party/freesound/370743__podsburgh__winner-metal-bell-ringing-remix.mp3":
/*!*********************************************************************************************!*\
  !*** ./static/third_party/freesound/370743__podsburgh__winner-metal-bell-ringing-remix.mp3 ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/370743__podsburgh__winner-metal-bell-ringing-remix.mp3");

/***/ }),

/***/ "./static/third_party/freesound/425432__trivialaccapella__18-crash-hit-soft.mp3":
/*!**************************************************************************************!*\
  !*** ./static/third_party/freesound/425432__trivialaccapella__18-crash-hit-soft.mp3 ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/425432__trivialaccapella__18-crash-hit-soft.mp3");

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

/***/ }),

/***/ "./static/third_party/soundbible/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3":
/*!*******************************************************************************************!*\
  !*** ./static/third_party/soundbible/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3 ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3");

/***/ }),

/***/ "./static/third_party/soundbible/Tick-DeepFrozenApps-397275646.mp3":
/*!*************************************************************************!*\
  !*** ./static/third_party/soundbible/Tick-DeepFrozenApps-397275646.mp3 ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/Tick-DeepFrozenApps-397275646.mp3");

/***/ }),

/***/ "./static/view.js":
/*!************************!*\
  !*** ./static/view.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var buefy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buefy */ "./node_modules/buefy/dist/esm/index.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var vue_mq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-mq */ "./node_modules/vue-mq/dist/vue-mq.es.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.js */ "./static/store.js");
/* harmony import */ var _viewapp_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewapp.vue */ "./static/viewapp.vue");
/* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buefy/dist/buefy.css */ "./node_modules/buefy/dist/buefy.css");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_favicon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/favicon.png */ "./static/images/favicon.png");
/* harmony import */ var _images_icon_57_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/icon_57.png */ "./static/images/icon_57.png");
/* harmony import */ var _images_icon_192_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/icon_192.png */ "./static/images/icon_192.png");
/* harmony import */ var _images_icon_512_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/icon_512.png */ "./static/images/icon_512.png");
/* harmony import */ var _images_favicon_ico__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/favicon.ico */ "./static/images/favicon.ico");
/* harmony import */ var _images_404_cat_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/404_cat.png */ "./static/images/404_cat.png");
/* harmony import */ var _images_link_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/link.png */ "./static/images/link.png");
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
















_Util_js__WEBPACK_IMPORTED_MODULE_7__["initTracking"]();
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(buefy__WEBPACK_IMPORTED_MODULE_1__["default"], {
  defaultIconPack: 'fas'
});
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_mq__WEBPACK_IMPORTED_MODULE_3__["default"], {
  breakpoints: {
    mobile: 900,
    desktop: Infinity
  }
});
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]);
var i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]({
  locale: _Locales_js__WEBPACK_IMPORTED_MODULE_6__["getLocale"](window.location.hostname, window.location.pathname)
});
loadLocale(i18n.locale).then(function () {
  new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    i18n: i18n,
    el: '#viewapp',
    template: '<viewapp/>',
    store: _store_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    components: {
      viewapp: _viewapp_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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
              file = _Locales_js__WEBPACK_IMPORTED_MODULE_6__["getMessagesFileName"](locale);
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

/***/ "./static/viewapp.vue":
/*!****************************!*\
  !*** ./static/viewapp.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewapp_vue_vue_type_template_id_44385649___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewapp.vue?vue&type=template&id=44385649& */ "./static/viewapp.vue?vue&type=template&id=44385649&");
/* harmony import */ var _viewapp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewapp.vue?vue&type=script&lang=js& */ "./static/viewapp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _viewapp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewapp_vue_vue_type_template_id_44385649___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewapp_vue_vue_type_template_id_44385649___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/viewapp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/viewapp.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./static/viewapp.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewapp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./viewapp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/viewapp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewapp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/viewapp.vue?vue&type=template&id=44385649&":
/*!***********************************************************!*\
  !*** ./static/viewapp.vue?vue&type=template&id=44385649& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewapp_vue_vue_type_template_id_44385649___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./viewapp.vue?vue&type=template&id=44385649& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/viewapp.vue?vue&type=template&id=44385649&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewapp_vue_vue_type_template_id_44385649___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewapp_vue_vue_type_template_id_44385649___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/winneranimation.vue":
/*!************************************!*\
  !*** ./static/winneranimation.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true& */ "./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true&");
/* harmony import */ var _winneranimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winneranimation.vue?vue&type=script&lang=js& */ "./static/winneranimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css& */ "./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _winneranimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ad0ed4dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/winneranimation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/winneranimation.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./static/winneranimation.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./winneranimation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/winnerdialog.vue":
/*!*********************************!*\
  !*** ./static/winnerdialog.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winnerdialog.vue?vue&type=template&id=0208062a& */ "./static/winnerdialog.vue?vue&type=template&id=0208062a&");
/* harmony import */ var _winnerdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winnerdialog.vue?vue&type=script&lang=js& */ "./static/winnerdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _winnerdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/winnerdialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/winnerdialog.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./static/winnerdialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./winnerdialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/winnerdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/winnerdialog.vue?vue&type=template&id=0208062a&":
/*!****************************************************************!*\
  !*** ./static/winnerdialog.vue?vue&type=template&id=0208062a& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./winnerdialog.vue?vue&type=template&id=0208062a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/winnerdialog.vue?vue&type=template&id=0208062a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
//# sourceMappingURL=view-bd4aea3a596d799d15b9.js.map