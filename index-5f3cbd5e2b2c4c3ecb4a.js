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
/******/ 		"index": 0
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
/******/ 	deferredModules.push(["./static/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/app.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadingScreen_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadingScreen.vue */ "./static/loadingScreen.vue");
/* harmony import */ var _toolbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.vue */ "./static/toolbar.vue");
/* harmony import */ var _spinningwheel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinningwheel.vue */ "./static/spinningwheel.vue");
/* harmony import */ var _textboxbuttons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textboxbuttons.vue */ "./static/textboxbuttons.vue");
/* harmony import */ var _textbox_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textbox.vue */ "./static/textbox.vue");
/* harmony import */ var _optionsdialog_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./optionsdialog.vue */ "./static/optionsdialog.vue");
/* harmony import */ var _sharedialog_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sharedialog.vue */ "./static/sharedialog.vue");
/* harmony import */ var _twitterdialog_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./twitterdialog.vue */ "./static/twitterdialog.vue");
/* harmony import */ var _sheetdialog_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sheetdialog.vue */ "./static/sheetdialog.vue");
/* harmony import */ var _winnerdialog_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./winnerdialog.vue */ "./static/winnerdialog.vue");
/* harmony import */ var _winneranimation_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./winneranimation.vue */ "./static/winneranimation.vue");
/* harmony import */ var _entry_counter_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entry-counter.vue */ "./static/entry-counter.vue");
/* harmony import */ var _ConfettiLauncher_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ConfettiLauncher.js */ "./static/ConfettiLauncher.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _FullScreen_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FullScreen.js */ "./static/FullScreen.js");
/* harmony import */ var _WheelConfig_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./WheelConfig.js */ "./static/WheelConfig.js");
/* harmony import */ var _Preferences_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Preferences.js */ "./static/Preferences.js");
/* harmony import */ var _PageReloader_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PageReloader.js */ "./static/PageReloader.js");
/* harmony import */ var _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ServerFunctions.js */ "./static/ServerFunctions.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./audio.js */ "./static/audio.js");
/* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
/* harmony import */ var _WheelConfigLoader_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./WheelConfigLoader.js */ "./static/WheelConfigLoader.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    toolbar: _toolbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    textboxbuttons: _textboxbuttons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    textbox: _textbox_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    spinningwheel: _spinningwheel_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    winnerdialog: _winnerdialog_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    optionsdialog: _optionsdialog_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    sheetdialog: _sheetdialog_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    winneranimation: _winneranimation_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    entryCounter: _entry_counter_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result, wheelConfig;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              result = '';
              _context.prev = 1;
              _context.next = 4;
              return _WheelConfigLoader_js__WEBPACK_IMPORTED_MODULE_21__["load"](window.location);

            case 4:
              result = _context.sent;
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackException"](_context.t0);
              alert(_context.t0);

            case 11:
              if (result.redirectUrl) {
                window.location.replace(result.redirectUrl);
              } else {
                wheelConfig = new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_15__["default"](_this.$t('common.We have a winner!'));
                wheelConfig.loadJson(localStorage.getItem('LastWheelConfig'));

                if (result.wheelConfig) {
                  wheelConfig.loadValues(result.wheelConfig);
                  _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_18__["logSharedWheelRead"](result.sharedWheelPath);
                }

                _this.$store.commit('setWheelConfig', wheelConfig);

                _this.setDocLangProperties();

                _this.loadPreferences();

                _this.startFullscreenDetection();

                _this.startOnlineDetection();

                _this.startVisibilityDetection();

                _this.displayLanguageTip();

                _this.refreshWheelOnFontLoad();

                _this.loading = false;
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }))();
  },
  data: function data() {
    return {
      waitAnimation: {},
      loading: true
    };
  },
  computed: {
    names: function names() {
      return this.$store.state.wheelConfig.names;
    },
    wheelConfig: function wheelConfig() {
      return this.$store.state.wheelConfig;
    },
    preferences: function preferences() {
      return this.$store.state.preferences;
    },
    fullScreen: function fullScreen() {
      return this.$store.state.appStatus.fullScreen;
    },
    wheelSpinning: function wheelSpinning() {
      return this.$store.state.appStatus.wheelSpinning;
    },
    darkMode: function darkMode() {
      return this.$store.getters.darkMode;
    },
    pageColor: function pageColor() {
      return this.$store.state.wheelConfig.pageBackgroundColor;
    }
  },
  watch: {
    wheelConfig: function wheelConfig(newValue, oldValue) {
      _Util_js__WEBPACK_IMPORTED_MODULE_13__["updateColorStyles"](this.darkMode, '#777', this.pageColor);
      localStorage.setItem('LastWheelConfig', this.$store.state.wheelConfig.getJson());
      _audio_js__WEBPACK_IMPORTED_MODULE_19__["preloadSounds"](newValue.duringSpinSound, newValue.afterSpinSound);
    },
    names: function names(newValue, oldValue) {
      localStorage.setItem('LastWheelConfig', this.$store.state.wheelConfig.getJson());
    },
    preferences: function preferences(newValue) {
      _Util_js__WEBPACK_IMPORTED_MODULE_13__["updateColorStyles"](this.darkMode, '#777', this.pageColor);
      localStorage.setItem('Preferences', newValue.getJson());
    },
    fullScreen: function fullScreen(newValue, oldValue) {
      if (newValue) {
        _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackEvent"]('Wheel', 'EnterFullscreen', '');
        _FullScreen_js__WEBPACK_IMPORTED_MODULE_14__["turnOnFullscreen"]();
      }

      if (!newValue) {
        _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackEvent"]('Wheel', 'ExitFullscreen', '');
        _FullScreen_js__WEBPACK_IMPORTED_MODULE_14__["turnOffFullscreen"]();
      }
    }
  },
  methods: {
    startFullscreenDetection: function startFullscreenDetection() {
      var self = this;
      document.addEventListener('fullscreenchange', function (event) {
        if (_FullScreen_js__WEBPACK_IMPORTED_MODULE_14__["fullscreenOn"]()) {
          self.$store.commit('enterFullScreen');
        } else {
          self.$store.commit('exitFullScreen');
        }
      });
    },
    startOnlineDetection: function startOnlineDetection() {
      this.$store.commit('setOnline', navigator.onLine);
      var self = this;
      window.addEventListener('online', function (event) {
        self.$store.commit('setOnline', navigator.onLine);
      });
      window.addEventListener('offline', function (event) {
        self.$store.commit('setOnline', navigator.onLine);
      });
    },
    startVisibilityDetection: function startVisibilityDetection() {
      var reloader = new _PageReloader_js__WEBPACK_IMPORTED_MODULE_17__["default"]();
      document.addEventListener("visibilitychange", function () {
        reloader.reloadOutdatedPage(document.hidden);
      });
    },
    displayLanguageTip: function displayLanguageTip() {
      var _this2 = this;

      var tipLocale = _Locales_js__WEBPACK_IMPORTED_MODULE_20__["getLangTipLocale"](this.$i18n.locale, navigator.languages);

      if (tipLocale) {
        setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var file, messages, msg;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  file = _Locales_js__WEBPACK_IMPORTED_MODULE_20__["getMessagesFileName"](tipLocale);
                  _context2.next = 3;
                  return __webpack_require__("./static/locales lazy recursive ^\\.\\/.*$")("./".concat(file));

                case 3:
                  messages = _context2.sent["default"];
                  msg = messages['app']['Click the Language menu'];

                  _this2.showSnackbarMessage(msg);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })), 3000);
      }
    },
    loadPreferences: function loadPreferences() {
      var prefs = new _Preferences_js__WEBPACK_IMPORTED_MODULE_16__["default"]();
      prefs.loadJson(localStorage.getItem('Preferences'));
      this.$store.commit('setPreferences', prefs);
    },
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
    resetWheel: function resetWheel() {
      var wheelConfig = new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_15__["default"](this.$t('common.We have a winner!'));
      this.$store.commit('setWheelConfig', wheelConfig);
      this.showSnackbarMessage(this.$t('app.Loaded default names and options'));
    },
    openOpenDialog: function openOpenDialog() {
      _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackEvent"]('Wheel', 'ShowOpenDialog', '');
      this.$refs.opendialog.show();
    },
    openSaveDialog: function openSaveDialog() {
      _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackEvent"]('Wheel', 'ShowSaveDialog', '');
      this.$refs.savedialog.show();
    },
    openShareDialog: function openShareDialog() {
      _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackEvent"]('Wheel', 'GetSharableLink', '');
      this.$refs.sharedialog.show();
    },
    openCustomizeDialog: function openCustomizeDialog() {
      _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackEvent"]('Wheel', 'ShowCustomizeDialog', '');
      this.$refs.optionsdialog.show();
    },
    openTwitterDialog: function openTwitterDialog() {
      _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackEvent"]('Wheel', 'ShowSocialMediaDialog', '');
      this.$refs.twitterdialog.show();
    },
    openSheetDialog: function openSheetDialog() {
      _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackEvent"]('Wheel', 'ShowSpreadsheetDialog', '');
      this.$refs.sheetdialog.show();
    },
    setLocale: function setLocale(locale) {
      window.location.replace(_Locales_js__WEBPACK_IMPORTED_MODULE_20__["getRelativeUrl"](window.location.hostname, locale));
    },
    nameChanged: function nameChanged() {
      var state = this.$store.state;

      if (state.appStatus.wheelSpinning && state.wheelConfig.shouldPlayTicks()) {
        _audio_js__WEBPACK_IMPORTED_MODULE_19__["playTick"]();
      }
    },
    wheelStarted: function wheelStarted() {
      _audio_js__WEBPACK_IMPORTED_MODULE_19__["startMusic"](this.wheelConfig.duringSpinSound);
    },
    wheelStopped: function wheelStopped(winningEntry) {
      var _this3 = this;

      _audio_js__WEBPACK_IMPORTED_MODULE_19__["stopMusic"]();

      if (this.wheelConfig.animateWinner) {
        this.$refs.winneranimation.show(winningEntry);
      }

      if (this.wheelConfig.launchConfetti) {
        _ConfettiLauncher_js__WEBPACK_IMPORTED_MODULE_12__["launch"](this.wheelConfig.getCoalescedColors());
      }

      if (this.wheelConfig.displayWinnerDialog) {
        this.$refs.winnerdialog.show(winningEntry);
      }

      if (this.wheelConfig.autoRemoveWinner) {
        setTimeout(function (_) {
          return _this3.removeName(winningEntry);
        }, 5000);
      }

      _audio_js__WEBPACK_IMPORTED_MODULE_19__["playAfterSpin"](this.wheelConfig.afterSpinSound, _Util_js__WEBPACK_IMPORTED_MODULE_13__["extractDisplayText"](winningEntry));
    },
    showSnackbarMessage: function showSnackbarMessage(msg) {
      this.$buefy.toast.open({
        message: msg,
        duration: 6000
      });
    },
    startWaitAnimation: function startWaitAnimation() {
      this.waitAnimation = this.$buefy.loading.open({
        container: null
      });
    },
    stopWaitAnimation: function stopWaitAnimation() {
      this.waitAnimation.close();
    },
    removeName: function removeName(name) {
      if (this.$store.state.wheelConfig.playClickWhenWinnerRemoved) {
        _audio_js__WEBPACK_IMPORTED_MODULE_19__["playClick"]();
      }

      this.$store.commit('removeName', name);
      var msg = this.$t('app.Removed', {
        name: _Util_js__WEBPACK_IMPORTED_MODULE_13__["extractDisplayText"](name, true)
      });
      this.showSnackbarMessage(msg);
    },
    removeNameAll: function removeNameAll(name) {
      if (this.$store.state.wheelConfig.playClickWhenWinnerRemoved) {
        _audio_js__WEBPACK_IMPORTED_MODULE_19__["playClick"]();
      }

      this.$store.commit('removeNameAll', name);
      var msg = this.$t('app.Removed', {
        name: _Util_js__WEBPACK_IMPORTED_MODULE_13__["extractDisplayText"](name, true)
      });
      this.showSnackbarMessage(msg);
    },
    authError: function authError(ex) {
      var msg = this.$t('app.authError', {
        error: ex.toString()
      });
      _Util_js__WEBPACK_IMPORTED_MODULE_13__["trackEvent"]('AuthError', ex.toString(), navigator.userAgent);
      this.$buefy.dialog.alert({
        title: this.$t('app.Error'),
        message: msg,
        type: 'is-danger',
        hasIcon: true,
        ariaRole: 'alertdialog',
        ariaModal: true,
        onConfirm: function onConfirm() {
          return location.reload(true);
        }
      });
    },
    resetWheelRotation: function resetWheelRotation() {
      this.$refs.spinningwheel.resetRotation();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/entry-counter.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    entriesMessage: function entriesMessage() {
      return this.$t('common.Entries', {
        entryCount: this.$store.getters.entryCount
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/optionsdialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _galleryImageList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galleryImageList.js */ "./static/galleryImageList.js");
/* harmony import */ var _galleryImageList_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_galleryImageList_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colorThemeList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorThemeList.js */ "./static/colorThemeList.js");
/* harmony import */ var _colorThemeList_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_colorThemeList_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hubSizes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hubSizes.js */ "./static/hubSizes.js");
/* harmony import */ var _hubSizes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hubSizes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio.js */ "./static/audio.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageUtil.js */ "./static/ImageUtil.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      optionsDialogVisible: false,
      wheelConfig: {},
      activeTab: 0,
      galleryPictures: _galleryImageList_js__WEBPACK_IMPORTED_MODULE_0___default.a.list,
      colorThemeCategories: _colorThemeList_js__WEBPACK_IMPORTED_MODULE_1___default.a.list,
      colorThemeCategory: null,
      colorThemes: [],
      colorTheme: null,
      uploadedImage: {},
      duringSpinSounds: _audio_js__WEBPACK_IMPORTED_MODULE_3__["getDuringSpinSounds"](),
      afterSpinSounds: _audio_js__WEBPACK_IMPORTED_MODULE_3__["getAfterSpinSounds"](),
      hubSizes: Object.keys(_hubSizes_js__WEBPACK_IMPORTED_MODULE_2__["hubSizes"])
    };
  },
  computed: {
    pictureType: function pictureType() {
      return this.wheelConfig.pictureType;
    },
    galleryPicture: function galleryPicture() {
      return this.wheelConfig.galleryPicture;
    },
    customPictureName: function customPictureName() {
      return this.wheelConfig.customPictureName;
    }
  },
  watch: {
    pictureType: function pictureType(newValue) {
      if (newValue != 'gallery') {
        this.wheelConfig.galleryPicture = 'images/center-img.png';
      }

      if (newValue != 'uploaded') {
        this.wheelConfig.customPictureName = '';
        this.wheelConfig.customPictureDataUri = '';
      }
    },
    uploadedImage: function uploadedImage(newValue) {
      var reader = new FileReader();
      var self = this;

      reader.onload = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var dataUri;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _Util_js__WEBPACK_IMPORTED_MODULE_4__["trackEvent"]('Wheel', 'UploadedCustomImage', '');
                  _context.next = 3;
                  return _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__["optimizeCenterImage"](e.target.result);

                case 3:
                  dataUri = _context.sent;
                  self.wheelConfig.setCustomPicture(newValue.name, dataUri);
                  self.$buefy.dialog.confirm({
                    message: self.$t('optionsdialog.Your image has been uploaded', {
                      fileName: newValue.name
                    }),
                    hasIcon: true,
                    icon: 'palette',
                    iconPack: 'fa',
                    confirmText: self.$t('optionsdialog.Yes'),
                    cancelText: self.$t('optionsdialog.No'),
                    onConfirm: function onConfirm() {
                      return self.setColorsFromCustomPicture();
                    }
                  });

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
      }();

      reader.readAsDataURL(newValue);
    },
    colorThemeCategory: function colorThemeCategory(newValue) {
      if (newValue) {
        this.colorThemes = this.colorThemeCategories[newValue];
        this.colorTheme = null;
      }
    },
    colorTheme: function colorTheme(newValue) {
      if (newValue) {
        _Util_js__WEBPACK_IMPORTED_MODULE_4__["trackEvent"]('Wheel', 'SetColorTheme', newValue);

        for (var i = 0; i < this.wheelConfig.colorSettings.length; i++) {
          this.wheelConfig.colorSettings[i] = {
            color: '#000000',
            enabled: false
          };
        }

        var colors = this.colorThemes[newValue];

        for (var _i = 0; _i < colors.length; _i++) {
          this.wheelConfig.colorSettings[_i] = {
            color: colors[_i],
            enabled: true
          };
        }
      }
    }
  },
  methods: {
    show: function show() {
      this.wheelConfig = this.$store.state.wheelConfig.clone();
      this.colorThemeCategory = null;
      this.colorTheme = null;
      this.optionsDialogVisible = true;
    },
    setColorsFromCustomPicture: function setColorsFromCustomPicture() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var colors, i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _Util_js__WEBPACK_IMPORTED_MODULE_4__["trackEvent"]('Wheel', 'SetColorsFromCustomPicture', '');
                _context2.next = 3;
                return _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__["extractColors"](_this.wheelConfig.customPictureDataUri);

              case 3:
                colors = _context2.sent;

                for (i = 0; i < colors.length; i++) {
                  _this.wheelConfig.colorSettings[i] = {
                    color: colors[i],
                    enabled: true
                  };
                }

                _this.$forceUpdate();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    saveOptions: function saveOptions() {
      this.$store.commit('setWheelConfig', this.wheelConfig);
      this.optionsDialogVisible = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/profiledropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/profiledropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    logOut: function logOut() {
      _Firebase_js__WEBPACK_IMPORTED_MODULE_0__["logOut"]();
      this.$emit('log-out');
    },
    confirmAndDelete: function confirmAndDelete() {
      var _this = this;

      this.$buefy.dialog.confirm({
        title: this.$t('profiledropdown.Delete account'),
        message: this.$t('profiledropdown.Are you sure you want to delete your account'),
        cancelText: this.$t('common.Cancel'),
        confirmText: this.$t('common.Delete'),
        type: 'is-danger',
        hasIcon: true,
        onConfirm: function onConfirm() {
          return _this.deleteAccount();
        }
      });
    },
    deleteAccount: function deleteAccount() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var msg;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.$emit('start-wait-animation');

                _context.next = 3;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_0__["deleteAccount"](_this2.$store.state.appStatus.userUid);

              case 3:
                _Firebase_js__WEBPACK_IMPORTED_MODULE_0__["logOut"]();
                msg = _this2.$t('profiledropdown.Your account and your saved wheels have been deleted');

                _this2.$emit('show-snackbar-message', msg);

                _this2.$emit('stop-wait-animation');

                _this2.$emit('log-out');

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/sharedialog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/sharedialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerFunctions.js */ "./static/ServerFunctions.js");
/* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      fsm: 'Inactive',
      editableWheel: false,
      sharableLink: ''
    };
  },
  computed: {
    showWarning: function showWarning() {
      return this.fsm == 'ShowingWarning';
    },
    showOptions: function showOptions() {
      return this.fsm == 'UserIsSettingOptions';
    },
    showLink: function showLink() {
      return this.fsm == 'ShowingLink';
    }
  },
  methods: {
    show: function show() {
      var wheelConfig = this.$store.state.wheelConfig;

      if (wheelConfig.isTooBigForDatabase()) {
        alert(this.$t('sharedialog.Sorry, too many images'));
        return;
      }

      this.enter_ShowingWarning();
    },
    enter_ShowingWarning: function enter_ShowingWarning() {
      this.setState('ShowingWarning');
    },
    enter_UserIsSettingOptions: function enter_UserIsSettingOptions() {
      this.setState('UserIsSettingOptions');
    },
    enter_CreatingLink: function enter_CreatingLink() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var wheelConfig, path;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState('CreatingLink');

                wheelConfig = _this.$store.state.wheelConfig;
                _context.prev = 2;

                _this.$emit('start-wait-animation');

                _context.next = 6;
                return _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_0__["createSharedWheel"](_this.editableWheel, wheelConfig);

              case 6:
                path = _context.sent;
                _this.sharableLink = 'https://' + _Locales_js__WEBPACK_IMPORTED_MODULE_1__["getAbsoluteUrl"](window.location.host, _this.$i18n.locale, path);

                _this.enter_ShowingLink();

                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                _Util_js__WEBPACK_IMPORTED_MODULE_2__["trackException"](_context.t0);
                alert(_context.t0);

              case 15:
                _context.prev = 15;

                _this.$emit('stop-wait-animation');

                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11, 15, 18]]);
      }))();
    },
    enter_ShowingLink: function enter_ShowingLink() {
      this.setState('ShowingLink');
    },
    enter_Inactive: function enter_Inactive() {
      this.setState('Inactive');
    },
    copyLink: function copyLink() {
      _Util_js__WEBPACK_IMPORTED_MODULE_2__["trackEvent"]('Wheel', 'CopySharableLink', '');
      var textBox = document.querySelector('#sharableLinkText');
      textBox.select();
      document.execCommand("copy");
      var message = this.$t('sharedialog.Link copied to the clipboard');
      this.$emit('show-snackbar-message', message);
    },
    setState: function setState(newState) {
      // console.log(`${this.fsm} => ${newState}`);
      this.fsm = newState;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/sheetdialog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/sheetdialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SheetGateway_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SheetGateway.js */ "./static/SheetGateway.js");
/* harmony import */ var _Firebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Firebase.js */ "./static/Firebase.js");
/* harmony import */ var _SheetPicker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SheetPicker.js */ "./static/SheetPicker.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _profiledropdown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profiledropdown.vue */ "./static/profiledropdown.vue");
/* harmony import */ var _images_btn_google_signin_dark_normal_web_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/btn_google_signin_dark_normal_web@2x.png */ "./static/images/btn_google_signin_dark_normal_web@2x.png");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    profiledropdown: _profiledropdown_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      fsm: 'inactive',
      sheetTitle: '',
      sheetId: '',
      tabs: [],
      selectedTab: null,
      columns: [],
      selectedColumn: null,
      loadingColumns: false,
      firstRowIsHeader: true,
      sheetLinkedAtMs: 0,
      timeoutId: 0
    };
  },
  computed: {
    sheetLinked: function sheetLinked() {
      return this.$store.state.appStatus.sheetLinked;
    },
    displayLoginDialog: {
      get: function get() {
        return this.fsm == 'userIsPickingLoginMethod';
      },
      set: function set(newValue) {
        if (newValue == false) this.fsm = 'inactive';
      }
    },
    displaySheetConfigDialog: {
      get: function get() {
        return this.fsm == 'userIsPickingTabCol';
      },
      set: function set(newValue) {
        if (newValue == false) this.fsm = 'inactive';
      }
    },
    linkSheetButtonEnabled: function linkSheetButtonEnabled() {
      return this.selectedTab && this.selectedColumn;
    }
  },
  watch: {
    selectedTab: function selectedTab(newValue) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!newValue) {
                  _context.next = 6;
                  break;
                }

                _this.loadingColumns = true;
                _context.next = 4;
                return _SheetGateway_js__WEBPACK_IMPORTED_MODULE_0__["getColumns"](_this.sheetId, _this.selectedTab);

              case 4:
                _this.columns = _context.sent;
                _this.loadingColumns = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    sheetLinked: function sheetLinked(linked) {
      if (!linked) {
        clearTimeout(this.timeoutId);
        this.enter_inactive();
      }
    }
  },
  methods: {
    show: function show() {
      this.enter_loadingLibraries();
    },
    enter_inactive: function enter_inactive() {
      this.setState('inactive');
      this.$store.commit('unlinkSheet');
    },
    enter_loadingLibraries: function enter_loadingLibraries() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.setState('loadingLibraries');

                _this2.$emit('start-wait-animation');

                _context2.next = 4;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_1__["loadLibraries"]();

              case 4:
                _this2.$emit('stop-wait-animation');

                _this2.enter_userIsPickingLoginMethod();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    enter_userIsPickingLoginMethod: function enter_userIsPickingLoginMethod() {
      this.setState('userIsPickingLoginMethod');
    },
    enter_userIsLoggingIn: function enter_userIsLoggingIn() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var accessToken, user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.setState('userIsLoggingIn');

                _context3.prev = 1;
                _Util_js__WEBPACK_IMPORTED_MODULE_3__["trackEvent"]('Wheel', 'LoginForSheetAttempt', '');
                _context3.next = 5;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_1__["logInToSheets"](_this3.$i18n.locale);

              case 5:
                accessToken = _context3.sent;
                _context3.next = 8;
                return _SheetPicker_js__WEBPACK_IMPORTED_MODULE_2__["load"](accessToken);

              case 8:
                _context3.next = 10;
                return _Firebase_js__WEBPACK_IMPORTED_MODULE_1__["getLoggedInUser"]();

              case 10:
                user = _context3.sent;

                _this3.$store.commit('logInUser', {
                  photoUrl: user.photoURL,
                  displayName: user.displayName,
                  uid: user.uid
                });

                _Util_js__WEBPACK_IMPORTED_MODULE_3__["trackEvent"]('Wheel', 'LoginForSheetSuccess', '');

                _this3.enter_userIsPickingSheet();

                _context3.next = 21;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](1);
                _Util_js__WEBPACK_IMPORTED_MODULE_3__["trackException"](_context3.t0);
                _Util_js__WEBPACK_IMPORTED_MODULE_3__["trackEvent"]('Wheel', 'LoginForSheetFailure', _context3.t0.toString());

                _this3.enter_authError(_context3.t0);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 16]]);
      }))();
    },
    enter_userIsPickingSheet: function enter_userIsPickingSheet() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.setState('userIsPickingSheet');

                _context4.prev = 1;
                _context4.next = 4;
                return _SheetPicker_js__WEBPACK_IMPORTED_MODULE_2__["pickSheet"]();

              case 4:
                _this4.sheetId = _context4.sent;
                _context4.next = 7;
                return _SheetGateway_js__WEBPACK_IMPORTED_MODULE_0__["getTitle"](_this4.sheetId);

              case 7:
                _this4.sheetTitle = _context4.sent;

                _this4.enter_userIsPickingTabCol();

                _context4.next = 15;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);
                _Util_js__WEBPACK_IMPORTED_MODULE_3__["trackException"](_context4.t0);

                _this4.enter_authError(_context4.t0);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 11]]);
      }))();
    },
    enter_userIsPickingTabCol: function enter_userIsPickingTabCol() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.setState('userIsPickingTabCol');

                _this5.selectedTab = null;
                _this5.selectedColumn = null;
                _context5.next = 5;
                return _SheetGateway_js__WEBPACK_IMPORTED_MODULE_0__["getTabNames"](_this5.sheetId);

              case 5:
                _this5.tabs = _context5.sent;

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    enter_linkingSheet: function enter_linkingSheet() {
      this.setState('linkingSheet');
      _Util_js__WEBPACK_IMPORTED_MODULE_3__["trackEvent"]('Wheel', 'LinkSpreadsheet', '');
      this.$store.commit('linkSheet');
      this.sheetLinkedAtMs = new Date().getTime();
      this.enter_readingSheet();
    },
    enter_readingSheet: function enter_readingSheet() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var sheetEntries, cleanedEntries, newEntries;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.setState('readingSheet');

                _context6.prev = 1;
                _context6.next = 4;
                return _SheetGateway_js__WEBPACK_IMPORTED_MODULE_0__["getEntries"](_this6.sheetId, _this6.selectedTab, _this6.selectedColumn, _this6.firstRowIsHeader);

              case 4:
                sheetEntries = _context6.sent;
                cleanedEntries = sheetEntries.map(function (x) {
                  return _Util_js__WEBPACK_IMPORTED_MODULE_3__["getHtmlAsText"](x);
                });
                newEntries = _Util_js__WEBPACK_IMPORTED_MODULE_3__["getAddedEntries"](_this6.$store.state.wheelConfig.names, cleanedEntries);

                _this6.notifyUserOfNewEntries(newEntries);

                _this6.$store.commit('setNames', cleanedEntries);

                _this6.enter_waitingToReadSheet();

                _context6.next = 17;
                break;

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](1);
                _Util_js__WEBPACK_IMPORTED_MODULE_3__["trackException"](_context6.t0);
                _Util_js__WEBPACK_IMPORTED_MODULE_3__["trackEvent"](_context6.t0, 'enter_readingSheet()', navigator.userAgent);

                _this6.enter_authError(_context6.t0);

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 12]]);
      }))();
    },
    enter_waitingToReadSheet: function enter_waitingToReadSheet() {
      var _this7 = this;

      this.setState('waitingToReadSheet');
      var self = this;
      this.timeoutId = setTimeout(function () {
        if (!_this7.linkHasTimedOut()) {
          self.enter_readingSheet();
        } else {
          self.enter_inactive();
        }
      }, 5000);
    },
    enter_authError: function enter_authError(exception) {
      this.setState('authError');
      _Firebase_js__WEBPACK_IMPORTED_MODULE_1__["logOut"]();
      this.$emit('auth-error', exception);
      this.enter_inactive();
    },
    setState: function setState(newState) {
      // console.log(`${this.fsm} => ${newState}`);
      this.fsm = newState;
    },
    linkHasTimedOut: function linkHasTimedOut() {
      var MAX_LINK_TIME_MS = 3600 * 1000;
      var now = new Date().getTime();
      return now - this.sheetLinkedAtMs > MAX_LINK_TIME_MS;
    },
    notifyUserOfNewEntries: function notifyUserOfNewEntries(newEntries) {
      var _this8 = this;

      if (newEntries.length > 2) {
        var msg = this.$t('sheetdialog.entries added', {
          count: newEntries.length
        });
        this.$emit('show-snackbar-message', msg);
      } else {
        newEntries.forEach(function (entry) {
          var msg = _this8.$t('sheetdialog.added', {
            entry: _Util_js__WEBPACK_IMPORTED_MODULE_3__["getHtmlAsText"](entry)
          });

          _this8.$emit('show-snackbar-message', msg);
        });
      }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/textbox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/textbox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      updateTriggeredByMe: false
    };
  },
  computed: {
    names: function names() {
      return this.$store.state.wheelConfig.names;
    },
    wheelConfig: function wheelConfig() {
      return this.$store.state.wheelConfig;
    },
    wheelSpinning: function wheelSpinning() {
      return this.$store.state.appStatus.wheelSpinning;
    },
    sheetLinked: function sheetLinked() {
      return this.$store.state.appStatus.sheetLinked;
    }
  },
  watch: {
    names: function names(newValue, oldValue) {
      if (this.updateTriggeredByMe) {
        this.updateTriggeredByMe = false;
      } else {
        var div = document.getElementById('names');
        div.innerHTML = newValue.map(function (name) {
          return "<div>".concat(name, "</div>");
        }).join('');
      }
    },
    wheelConfig: function wheelConfig(newValue, oldValue) {
      var div = document.getElementById('names');
      div.innerHTML = newValue.names.map(function (name) {
        return "<div>".concat(name, "</div>");
      }).join('');
    },
    wheelSpinning: function wheelSpinning(isSpinning) {
      var editable = !isSpinning;
      var textBoxDiv = document.getElementById('names');
      textBoxDiv.setAttribute('contenteditable', editable);
    },
    sheetLinked: function sheetLinked(isLinked) {
      var editable = !isLinked;
      var textBoxDiv = document.getElementById('names');
      textBoxDiv.setAttribute("contenteditable", editable);

      if (isLinked) {
        textBoxDiv.style.backgroundImage = "url('/images/link.png')";
        textBoxDiv.style.backgroundSize = "100%";
        textBoxDiv.style.backgroundAttachment = "local";
      } else {
        textBoxDiv.style.backgroundImage = "";
      }
    }
  },
  methods: {
    setNames: function setNames() {
      this.updateTriggeredByMe = true;
      var entries = this.getEntries();
      this.$store.commit('setNames', entries);
    },
    IE_setNames: function IE_setNames() {
      if (_Util_js__WEBPACK_IMPORTED_MODULE_0__["browserIsIE"]()) {
        this.setNames();
      }
    },
    getEntries: function getEntries() {
      var div = document.getElementById('names');
      var html = div.innerHTML;
      return this.getEntriesFromHtml(html);
    },
    getEntriesFromHtml: function getEntriesFromHtml(html) {
      if (!html) return [];
      var rows = html.split(/<div>|<br>|<p>/);
      var junks = ['</div>', '<br>', '</p>', /<span.*?>/, '</span>'];
      return rows.map(function (row) {
        var retVal = row;
        junks.forEach(function (junk) {
          retVal = retVal.replace(junk, '');
        });
        return retVal;
      }).filter(function (entry) {
        return entry != '';
      });
    },
    onPaste: function onPaste(e) {
      // Intercept paste into the text-box. Transform rich text into plain text,
      // unless a data image is being pasted.
      e.preventDefault();
      _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"]('Wheel', 'PasteIntoTextbox', '');

      if (e.clipboardData) {
        var html = (e.originalEvent || e).clipboardData.getData('text/html');
        var match = html.match(/(<.*?src="data:image.*?>)/);

        if (match) {
          document.execCommand('insertHtml', false, match[1]);
        } else {
          var text = (e.originalEvent || e).clipboardData.getData('text/plain');
          document.execCommand('insertText', false, text);
        }
      } else {
        var clipboardData = window.clipboardData.getData('text');

        if (clipboardData) {
          this.$store.commit('appendNames', clipboardData.split(/\n/));
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/textboxbuttons.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageUtil.js */ "./static/ImageUtil.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      uploadedImage: []
    };
  },
  watch: {
    uploadedImage: function uploadedImage(files) {
      var _this = this;

      if (files.length == 0) return;
      _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"]('Wheel', 'UploadPieSliceImage', files.length);

      var _iterator = _createForOfIteratorHelper(files),
          _step;

      try {
        var _loop = function _loop() {
          var file = _step.value;
          var reader = new FileReader();
          var self = _this;

          reader.onload = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              var dataUri, imageTag;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__["optimizeSliceImage"](e.target.result);

                    case 2:
                      dataUri = _context.sent;
                      imageTag = "<img src=\"".concat(dataUri, "\" style=\"height:25px\" style=\"font-size: 1rem;\">");
                      self.$store.commit('appendNames', [imageTag]);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }();

          reader.readAsDataURL(file);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.uploadedImage = [];
    }
  },
  computed: {
    buttonsDisabled: function buttonsDisabled() {
      var appStatus = this.$store.state.appStatus;
      return appStatus.sheetLinked || appStatus.wheelSpinning;
    }
  },
  methods: {
    shuffle: function shuffle() {
      _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"]('Wheel', 'ShuffleNames', '');
      this.$store.commit('shuffleNames');
    },
    sort: function sort() {
      _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"]('Wheel', 'SortNames', '');
      this.$store.commit('sortNames');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/toolbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      toolbarBrand: window.location.host,
      browserIsIEOrOldEdge: _Util_js__WEBPACK_IMPORTED_MODULE_0__["browserIsIEOrOldEdge"](navigator.userAgent),
      locale: this.$i18n.locale,
      locales: _Locales_js__WEBPACK_IMPORTED_MODULE_1__["getNamesForAll"]()
    };
  },
  computed: {
    newButtonVisible: function newButtonVisible() {
      var appStatus = this.$store.state.appStatus;
      return !appStatus.fullScreen && !appStatus.sheetLinked && !appStatus.wheelSpinning;
    },
    openButtonVisible: function openButtonVisible() {
      var appStatus = this.$store.state.appStatus;
      return !appStatus.fullScreen && !appStatus.sheetLinked && !appStatus.wheelSpinning;
    },
    saveButtonVisible: function saveButtonVisible() {
      var appStatus = this.$store.state.appStatus;
      return appStatus.online && !appStatus.fullScreen && !appStatus.wheelSpinning;
    },
    shareButtonVisible: function shareButtonVisible() {
      var appStatus = this.$store.state.appStatus;
      return appStatus.online && !appStatus.fullScreen && !appStatus.wheelSpinning;
    },
    optionsButtonVisible: function optionsButtonVisible() {
      var appStatus = this.$store.state.appStatus;
      return !this.$store.state.appStatus.fullScreen && !appStatus.wheelSpinning;
    },
    fullscreenButtonVisible: function fullscreenButtonVisible() {
      var appStatus = this.$store.state.appStatus;
      return !appStatus.fullScreen && !appStatus.wheelSpinning;
    },
    exitFullscreenButtonVisible: function exitFullscreenButtonVisible() {
      return this.$store.state.appStatus.fullScreen;
    },
    moreVisible: function moreVisible() {
      var appStatus = this.$store.state.appStatus;
      return appStatus.online && !appStatus.fullScreen && !appStatus.wheelSpinning;
    },
    importVisible: function importVisible() {
      var appStatus = this.$store.state.appStatus;
      return appStatus.online && !appStatus.fullScreen && !appStatus.sheetLinked && !appStatus.wheelSpinning;
    },
    unlinkSheetButtonVisible: function unlinkSheetButtonVisible() {
      var appStatus = this.$store.state.appStatus;
      return appStatus.sheetLinked && !appStatus.fullScreen && !appStatus.wheelSpinning;
    },
    languageVisible: function languageVisible() {
      var appStatus = this.$store.state.appStatus;
      return appStatus.online && !appStatus.fullScreen && !appStatus.wheelSpinning;
    },
    faqbuttonVisible: function faqbuttonVisible() {
      var appStatus = this.$store.state.appStatus;
      return !appStatus.fullScreen && !appStatus.wheelSpinning;
    }
  },
  watch: {
    locale: function locale(newValue) {
      this.$emit('set-locale', newValue);
    }
  },
  methods: {
    toggleDarkMode: function toggleDarkMode() {
      _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"]('Wheel', 'ToggleDarkMode', '');
      this.$store.commit('toggleDarkMode');
    },
    setLiquors: function setLiquors() {
      _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"]('Wheel', 'setNames', '');
      var entries = ['Vodka', 'Whisky', 'Tequila', 'Rum', 'Mezcal', 'Gin', 'Schnapps', 'Jägermeister', 'Brandy', 'Cognac', 'Aguardiente', 'Sambuca', 'Absinthe', 'Amaretto'];
      this.$store.commit('setNames', entries);
    },
    setBeers: function setBeers() {
      _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"]('Wheel', 'setNames', '');
      var entries = ['Corona', 'Heineken', 'Bud Light', 'Budweiser', 'Modelo', 'Stella Artois', 'Blue Moon', 'Coors', 'Miller', 'Dos Equis', 'Samuel Adams', 'Duvel', 'Chimay', 'Amstel', 'Tecate', 'Guinness', 'Michelob', 'Pabst Blue Ribbon'];
      this.$store.commit('setNames', entries);
    },
    setCocktails: function setCocktails() {
      _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"]('Wheel', 'setNames', '');
      var entries = ['Margarita', 'Rum Breeze', 'Mai Tai', 'Long Island IceTea', 'Sex On The Beach', 'Rum Runner', 'Amaretto Sour', 'Lemon Drop', 'Hemingway Daiquiri', 'Apple Pie', 'Mango Margarita', 'Whiskey Sour', 'Cosmopolitan', 'Old Fashioned', 'Uptown Rocks', 'Kamikaze', 'Aviation', 'Gimlet', 'Northside', 'Mint Julep', 'Jalapeño LimeShrub', 'Manhattan', 'Whiskey Smash', 'Gin Martini', 'Sazerac', 'Screwdriver', 'Negroni', 'Spiced Coffee', 'Boulevardier', 'Matcha Martini', 'Hurricane', 'Piña Colada', 'Sangria'];
      this.$store.commit('setNames', entries);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/twitterdialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/twitterdialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerFunctions.js */ "./static/ServerFunctions.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      twitterDialogVisible: false,
      searchTerm: ''
    };
  },
  methods: {
    show: function show() {
      var _this = this;

      this.twitterDialogVisible = true;
      setTimeout(function () {
        _this.$refs.searchTermField.focus();
      }, 100);
    },
    getTwitterUsers: function getTwitterUsers() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var users, message;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.twitterDialogVisible = false;
                _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackEvent"]('Wheel', 'GetSocialMediaUsers', _this2.searchTerm);
                _context.prev = 2;

                _this2.$emit('start-wait-animation');

                _context.next = 6;
                return _ServerFunctions_js__WEBPACK_IMPORTED_MODULE_0__["fetchSocialMediaUsers"](_this2.searchTerm);

              case 6:
                users = _context.sent;

                if (users) {
                  _this2.$store.commit('setNames', users);

                  _this2.$store.commit('setWheelTitle', '');

                  message = _this2.$t('twitterdialog.Found Twitter users', {
                    userCount: users.length,
                    term: _this2.searchTerm
                  });

                  _this2.$emit('show-snackbar-message', message);
                }

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackException"](_context.t0);
                alert(_context.t0);

              case 14:
                _context.prev = 14;

                _this2.$emit('stop-wait-animation');

                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10, 14, 17]]);
      }))();
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/app.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=template&id=342a570e&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/app.vue?vue&type=template&id=342a570e& ***!
  \*************************************************************************************************************************************************************************************/
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
      _c("toolbar", {
        on: {
          "show-snackbar-message": _vm.showSnackbarMessage,
          "reset-wheel": function($event) {
            return _vm.resetWheel()
          },
          "open-customize-dialog": function($event) {
            return _vm.openCustomizeDialog()
          },
          "open-sheet-dialog": function($event) {
            return _vm.openSheetDialog()
          },
          "set-locale": _vm.setLocale
        }
      }),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "section",
          staticStyle: { "padding-top": "1rem", "padding-bottom": "0" }
        },
        [
          _c(
            "div",
            {
              staticClass: "columns",
              class: { "is-centered": _vm.$store.state.appStatus.fullScreen }
            },
            [
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.$store.state.appStatus.fullScreen,
                    expression: "!$store.state.appStatus.fullScreen"
                  }
                ],
                staticClass: "column is-3"
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "column is-6",
                  class: { "is-7": _vm.$store.state.appStatus.fullScreen }
                },
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
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.$store.state.appStatus.fullScreen,
                      expression: "!$store.state.appStatus.fullScreen"
                    }
                  ],
                  staticClass: "column is-3"
                },
                [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "sans-serif",
                        "font-size": "18px",
                        "font-weight": "bold",
                        color: "#98803C"
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("app.Enter names here")) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("textboxbuttons"),
                  _vm._v(" "),
                  _c("textbox"),
                  _vm._v(" "),
                  _c("entry-counter"),
                  _vm._v(" "),
                  _c("app-info", {
                    on: {
                      "open-options-dialog": function($event) {
                        return _vm.openOptionsDialog()
                      }
                    }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("opendialog", {
        ref: "opendialog",
        on: {
          "show-snackbar-message": _vm.showSnackbarMessage,
          "start-wait-animation": _vm.startWaitAnimation,
          "stop-wait-animation": _vm.stopWaitAnimation,
          "auth-error": _vm.authError,
          "reset-wheel-rotation": _vm.resetWheelRotation
        }
      }),
      _vm._v(" "),
      _c("savedialog", {
        ref: "savedialog",
        on: {
          "show-snackbar-message": _vm.showSnackbarMessage,
          "start-wait-animation": _vm.startWaitAnimation,
          "stop-wait-animation": _vm.stopWaitAnimation,
          "auth-error": _vm.authError
        }
      }),
      _vm._v(" "),
      _c("optionsdialog", {
        ref: "optionsdialog",
        on: { "show-snackbar-message": _vm.showSnackbarMessage }
      }),
      _vm._v(" "),
      _c("sharedialog", {
        ref: "sharedialog",
        on: {
          "show-snackbar-message": _vm.showSnackbarMessage,
          "start-wait-animation": _vm.startWaitAnimation,
          "stop-wait-animation": _vm.stopWaitAnimation
        }
      }),
      _vm._v(" "),
      _c("twitterdialog", {
        ref: "twitterdialog",
        on: {
          "show-snackbar-message": _vm.showSnackbarMessage,
          "start-wait-animation": _vm.startWaitAnimation,
          "stop-wait-animation": _vm.stopWaitAnimation
        }
      }),
      _vm._v(" "),
      _c("sheetdialog", {
        ref: "sheetdialog",
        on: {
          "show-snackbar-message": _vm.showSnackbarMessage,
          "auth-error": _vm.authError
        }
      }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true& ***!
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
  return _c("div", { staticClass: "counter-text" }, [
    _vm._v("\n  " + _vm._s(_vm.entriesMessage) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true& ***!
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
    "b-modal",
    {
      attrs: {
        active: _vm.optionsDialogVisible,
        width: 640,
        scroll: "keep",
        "full-screen": _vm.$mq == "mobile"
      },
      on: {
        "update:active": function($event) {
          _vm.optionsDialogVisible = $event
        }
      }
    },
    [
      _c("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [
        _c(
          "section",
          { staticClass: "modal-card-body can-go-dark" },
          [
            _c(
              "b-tabs",
              {
                attrs: { type: "is-boxed", size: "is-small" },
                model: {
                  value: _vm.activeTab,
                  callback: function($$v) {
                    _vm.activeTab = $$v
                  },
                  expression: "activeTab"
                }
              },
              [
                _c(
                  "b-tab-item",
                  { attrs: { label: _vm.$t("optionsdialog.During spin") } },
                  [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "columns" }, [
                      _c("div", { staticClass: "column is-2" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.$t("optionsdialog.Sound")) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "column" },
                        [
                          _c(
                            "b-select",
                            {
                              model: {
                                value: _vm.wheelConfig.duringSpinSound,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.wheelConfig,
                                    "duringSpinSound",
                                    $$v
                                  )
                                },
                                expression: "wheelConfig.duringSpinSound"
                              }
                            },
                            _vm._l(_vm.duringSpinSounds, function(sound) {
                              return _c(
                                "option",
                                {
                                  key: sound.value,
                                  domProps: { value: sound.value }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.$t(sound.name)) +
                                      "\n                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "b-checkbox",
                      {
                        model: {
                          value: _vm.wheelConfig.allowDuplicates,
                          callback: function($$v) {
                            _vm.$set(_vm.wheelConfig, "allowDuplicates", $$v)
                          },
                          expression: "wheelConfig.allowDuplicates"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$t("optionsdialog.Allow duplicates on wheel")
                            ) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-checkbox",
                      {
                        model: {
                          value: _vm.wheelConfig.slowSpin,
                          callback: function($$v) {
                            _vm.$set(_vm.wheelConfig, "slowSpin", $$v)
                          },
                          expression: "wheelConfig.slowSpin"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("optionsdialog.Spin slowly")) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.$t("optionsdialog.Spin time (seconds)")) +
                        "\n          "
                    ),
                    _c(
                      "b-slider",
                      {
                        attrs: { min: 1, max: 60 },
                        model: {
                          value: _vm.wheelConfig.spinTime,
                          callback: function($$v) {
                            _vm.$set(_vm.wheelConfig, "spinTime", $$v)
                          },
                          expression: "wheelConfig.spinTime"
                        }
                      },
                      [
                        _vm._l([10, 20, 30, 40, 50, 60], function(val) {
                          return [
                            _c(
                              "b-slider-tick",
                              { key: val, attrs: { value: val } },
                              [_vm._v(_vm._s(val))]
                            )
                          ]
                        })
                      ],
                      2
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tab-item",
                  { attrs: { label: _vm.$t("optionsdialog.After spin") } },
                  [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "columns" }, [
                      _c("div", { staticClass: "column is-2" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.$t("optionsdialog.Sound")) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "column" },
                        [
                          _c(
                            "b-select",
                            {
                              model: {
                                value: _vm.wheelConfig.afterSpinSound,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.wheelConfig,
                                    "afterSpinSound",
                                    $$v
                                  )
                                },
                                expression: "wheelConfig.afterSpinSound"
                              }
                            },
                            _vm._l(_vm.afterSpinSounds, function(sound) {
                              return _c(
                                "option",
                                {
                                  key: sound.value,
                                  domProps: { value: sound.value }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.$t(sound.name)) +
                                      "\n                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "b-checkbox",
                      {
                        model: {
                          value: _vm.wheelConfig.animateWinner,
                          callback: function($$v) {
                            _vm.$set(_vm.wheelConfig, "animateWinner", $$v)
                          },
                          expression: "wheelConfig.animateWinner"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$t("optionsdialog.Animate winning entry")
                            ) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "b-checkbox",
                      {
                        model: {
                          value: _vm.wheelConfig.launchConfetti,
                          callback: function($$v) {
                            _vm.$set(_vm.wheelConfig, "launchConfetti", $$v)
                          },
                          expression: "wheelConfig.launchConfetti"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("optionsdialog.Launch confetti")) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "b-checkbox",
                      {
                        model: {
                          value: _vm.wheelConfig.autoRemoveWinner,
                          callback: function($$v) {
                            _vm.$set(_vm.wheelConfig, "autoRemoveWinner", $$v)
                          },
                          expression: "wheelConfig.autoRemoveWinner"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$t(
                                "optionsdialog.Auto-remove winner after 5 seconds"
                              )
                            ) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "b-checkbox",
                      {
                        model: {
                          value: _vm.wheelConfig.displayWinnerDialog,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.wheelConfig,
                              "displayWinnerDialog",
                              $$v
                            )
                          },
                          expression: "wheelConfig.displayWinnerDialog"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$t(
                                "optionsdialog.Display popup with message:"
                              )
                            ) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("b-input", {
                      staticStyle: { "margin-left": "25px" },
                      attrs: {
                        disabled: !_vm.wheelConfig.displayWinnerDialog,
                        maxlength: "100"
                      },
                      model: {
                        value: _vm.wheelConfig.winnerMessage,
                        callback: function($$v) {
                          _vm.$set(_vm.wheelConfig, "winnerMessage", $$v)
                        },
                        expression: "wheelConfig.winnerMessage"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-checkbox",
                      {
                        model: {
                          value: _vm.wheelConfig.playClickWhenWinnerRemoved,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.wheelConfig,
                              "playClickWhenWinnerRemoved",
                              $$v
                            )
                          },
                          expression: "wheelConfig.playClickWhenWinnerRemoved"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$t(
                                "optionsdialog.Play click sound when the winner is removed"
                              )
                            ) +
                            "\n          "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tab-item",
                  { attrs: { label: _vm.$t("optionsdialog.Colors") } },
                  [
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "columns",
                        staticStyle: { "margin-bottom": "10px" }
                      },
                      [
                        _c("div", { staticClass: "column is-one-third" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("optionsdialog.Apply a theme")) +
                              "\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "column" },
                          [
                            _c(
                              "b-field",
                              { attrs: { grouped: "" } },
                              [
                                _c(
                                  "b-select",
                                  {
                                    attrs: {
                                      placeholder: _vm.$t(
                                        "optionsdialog.Pick category"
                                      ),
                                      expanded: ""
                                    },
                                    model: {
                                      value: _vm.colorThemeCategory,
                                      callback: function($$v) {
                                        _vm.colorThemeCategory = $$v
                                      },
                                      expression: "colorThemeCategory"
                                    }
                                  },
                                  _vm._l(
                                    Object.keys(_vm.colorThemeCategories),
                                    function(categoryName) {
                                      return _c(
                                        "option",
                                        {
                                          key: categoryName,
                                          domProps: { value: categoryName }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(categoryName) +
                                              "\n                  "
                                          )
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-select",
                                  {
                                    attrs: {
                                      placeholder: _vm.$t(
                                        "optionsdialog.Pick theme"
                                      ),
                                      expanded: ""
                                    },
                                    model: {
                                      value: _vm.colorTheme,
                                      callback: function($$v) {
                                        _vm.colorTheme = $$v
                                      },
                                      expression: "colorTheme"
                                    }
                                  },
                                  _vm._l(Object.keys(_vm.colorThemes), function(
                                    themeName
                                  ) {
                                    return _c(
                                      "option",
                                      {
                                        key: themeName,
                                        domProps: { value: themeName }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(themeName) +
                                            "\n                  "
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "columns",
                        staticStyle: { "margin-bottom": "10px" }
                      },
                      [
                        _c("div", { staticClass: "column is-one-third" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("optionsdialog.Customize colors")) +
                              "\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "column" }, [
                          _c(
                            "div",
                            { staticClass: "color-grid" },
                            _vm._l(_vm.wheelConfig.colorSettings, function(
                              setting,
                              index
                            ) {
                              return _c(
                                "div",
                                { key: index },
                                [
                                  _c("b-checkbox", {
                                    model: {
                                      value: setting.enabled,
                                      callback: function($$v) {
                                        _vm.$set(setting, "enabled", $$v)
                                      },
                                      expression: "setting.enabled"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: setting.color,
                                        expression: "setting.color"
                                      }
                                    ],
                                    attrs: { type: "color" },
                                    domProps: { value: setting.color },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          setting,
                                          "color",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            }),
                            0
                          )
                        ])
                      ]
                    )
                  ]
                )
              ],
              1
            )
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
                attrs: { size: "is-medium" },
                on: {
                  click: function($event) {
                    _vm.optionsDialogVisible = false
                  }
                }
              },
              [
                _vm._v(
                  "\n        " + _vm._s(_vm.$t("common.Cancel")) + "\n      "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                attrs: { size: "is-medium", type: "is-primary" },
                on: { click: _vm.saveOptions }
              },
              [_vm._v("\n        " + _vm._s(_vm.$t("common.OK")) + "\n      ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/profiledropdown.vue?vue&type=template&id=61fb65a7&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/profiledropdown.vue?vue&type=template&id=61fb65a7& ***!
  \*************************************************************************************************************************************************************************************************/
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
    "b-dropdown",
    { attrs: { position: "is-bottom-left", "aria-role": "list" } },
    [
      _c(
        "span",
        {
          staticClass: "button",
          staticStyle: { cursor: "pointer" },
          attrs: { slot: "trigger", role: "button" },
          slot: "trigger"
        },
        [
          _c("img", {
            staticStyle: { height: "30px", "border-radius": "50%" },
            attrs: { src: _vm.$store.state.appStatus.userPhotoUrl }
          }),
          _vm._v("\n     \n    "),
          _c("i", { staticClass: "fas fa-caret-down" })
        ]
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        { attrs: { disabled: "", "aria-role": "listitem" } },
        [
          _vm._v(
            "\n    " +
              _vm._s(
                _vm.$t("profiledropdown.Signed in as", {
                  name: _vm.$store.state.appStatus.userDisplayName
                })
              ) +
              "\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: { "aria-role": "listitem" },
          on: {
            click: function($event) {
              return _vm.logOut()
            }
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.$t("profiledropdown.Sign out")) + "\n  ")]
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        { attrs: { "has-link": "", "aria-role": "listitem" } },
        [
          _c("a", { attrs: { href: "/view-account.html" } }, [
            _vm._v(
              "\n      " +
                _vm._s(_vm.$t("profiledropdown.Export my data")) +
                "\n    "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: { "aria-role": "listitem" },
          on: {
            click: function($event) {
              return _vm.confirmAndDelete()
            }
          }
        },
        [
          _vm._v(
            "\n    " +
              _vm._s(_vm.$t("profiledropdown.Delete my account")) +
              "\n  "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/sharedialog.vue?vue&type=template&id=7d78e258&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/sharedialog.vue?vue&type=template&id=7d78e258& ***!
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
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          attrs: { active: _vm.showWarning, width: 640, scroll: "keep" },
          on: {
            "update:active": function($event) {
              _vm.showWarning = $event
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
                  _c("i", { staticClass: "fa fa-share-alt" }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.$t("sharedialog.Shareable link")) +
                      "\n        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("section", { staticClass: "modal-card-body can-go-dark" }, [
                _c("p", [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.$t("sharedialog.If you continue")) +
                      "\n          " +
                      _vm._s(
                        _vm.$t("sharedialog.This link will work for anyone")
                      ) +
                      "\n        "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticStyle: { "margin-top": "10px" } }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.$t(
                          "sharedialog.We want this website to be safe place for everyone"
                        )
                      ) +
                      "\n        "
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
                      attrs: { size: "is-medium" },
                      on: {
                        click: function($event) {
                          return _vm.enter_Inactive()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("common.Cancel")) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "is-medium", type: "is-primary" },
                      on: {
                        click: function($event) {
                          return _vm.enter_UserIsSettingOptions()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("sharedialog.Continue")) +
                          "\n        "
                      )
                    ]
                  )
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { active: _vm.showOptions, width: 640, scroll: "keep" },
          on: {
            "update:active": function($event) {
              _vm.showOptions = $event
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
                  _c("i", { staticClass: "fa fa-share-alt" }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.$t("sharedialog.Shareable link")) +
                      "\n        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("section", { staticClass: "modal-card-body can-go-dark" }, [
                _c("div", { staticClass: "field" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.$t("sharedialog.What should a person be able to do")
                      ) +
                      "\n        "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "field" },
                  [
                    _c(
                      "b-radio",
                      {
                        attrs: { "native-value": false },
                        model: {
                          value: _vm.editableWheel,
                          callback: function($$v) {
                            _vm.editableWheel = $$v
                          },
                          expression: "editableWheel"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$t(
                                "sharedialog.They should only be able to spin the wheel"
                              )
                            ) +
                            "\n          "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "field" },
                  [
                    _c(
                      "b-radio",
                      {
                        attrs: { "native-value": true },
                        model: {
                          value: _vm.editableWheel,
                          callback: function($$v) {
                            _vm.editableWheel = $$v
                          },
                          expression: "editableWheel"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$t(
                                "sharedialog.They should be able to spin the wheel and"
                              )
                            ) +
                            "\n          "
                        )
                      ]
                    )
                  ],
                  1
                )
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
                          return _vm.enter_Inactive()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("common.Cancel")) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "is-medium", type: "is-primary" },
                      on: {
                        click: function($event) {
                          return _vm.enter_CreatingLink()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("sharedialog.Continue")) +
                          "\n        "
                      )
                    ]
                  )
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { active: _vm.showLink, width: 640, scroll: "keep" },
          on: {
            "update:active": function($event) {
              _vm.showLink = $event
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
                  _c("i", { staticClass: "fa fa-share-alt" }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.$t("sharedialog.Shareable link")) +
                      "\n        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("section", { staticClass: "modal-card-body can-go-dark" }, [
                _c("p", [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.$t("sharedialog.Link to this wheel")) +
                      "\n        "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c(
                    "div",
                    { staticClass: "column is-8" },
                    [
                      _c("b-input", {
                        attrs: { id: "sharableLinkText" },
                        model: {
                          value: _vm.sharableLink,
                          callback: function($$v) {
                            _vm.sharableLink = $$v
                          },
                          expression: "sharableLink"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column" },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { type: "is-light" },
                          on: { click: _vm.copyLink }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("sharedialog.Copy link")) +
                              "\n            "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticStyle: { color: "#BBB" } }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.$t("sharedialog.This link will work for anyone")
                      ) +
                      "\n        "
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
                      attrs: { size: "is-medium" },
                      on: {
                        click: function($event) {
                          return _vm.enter_Inactive()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("common.Close")) +
                          "\n        "
                      )
                    ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/sheetdialog.vue?vue&type=template&id=5e9e8758&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/sheetdialog.vue?vue&type=template&id=5e9e8758& ***!
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
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          attrs: { active: _vm.displayLoginDialog, width: 640, scroll: "keep" },
          on: {
            "update:active": function($event) {
              _vm.displayLoginDialog = $event
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
                  _c("i", { staticClass: "fa fa-link" }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.$t("common.Link Google Spreadsheet")) +
                      "\n        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("section", { staticClass: "modal-card-body can-go-dark" }, [
                _c("p", [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.$t("sheetdialog.When you link a spreadsheet")
                      ) +
                      "\n        "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticStyle: { "margin-top": "10px" } }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.$t("sheetdialog.To import sheets")) +
                      "\n        "
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
                          return _vm.enter_inactive()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("common.Cancel")) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticStyle: { height: "40px" },
                    attrs: {
                      type: "image",
                      alt: "Sign in with Google",
                      src: "/images/btn_google_signin_dark_normal_web@2x.png"
                    },
                    on: {
                      click: function($event) {
                        return _vm.enter_userIsLoggingIn()
                      }
                    }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            active: _vm.displaySheetConfigDialog,
            width: 640,
            scroll: "keep"
          },
          on: {
            "update:active": function($event) {
              _vm.displaySheetConfigDialog = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-card", staticStyle: { width: "auto" } },
            [
              _c(
                "header",
                { staticClass: "modal-card-head" },
                [
                  _c("p", { staticClass: "modal-card-title" }, [
                    _c("i", { staticClass: "fa fa-link" }),
                    _vm._v(
                      " " +
                        _vm._s(_vm.$t("common.Link Google Spreadsheet")) +
                        "\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("profiledropdown", {
                    on: {
                      "log-out": function($event) {
                        return _vm.enter_inactive()
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("section", { staticClass: "modal-card-body can-go-dark" }, [
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column is-one-third" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("sheetdialog.Selected spreadsheet")) +
                        "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column" },
                    [
                      _c("b-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.sheetTitle,
                          callback: function($$v) {
                            _vm.sheetTitle = $$v
                          },
                          expression: "sheetTitle"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column is-one-fifth" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("sheetdialog.Tab")) +
                        "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column" },
                    [
                      _c(
                        "b-select",
                        {
                          attrs: {
                            placeholder: _vm.$t("sheetdialog.Select a tab"),
                            expanded: ""
                          },
                          model: {
                            value: _vm.selectedTab,
                            callback: function($$v) {
                              _vm.selectedTab = $$v
                            },
                            expression: "selectedTab"
                          }
                        },
                        _vm._l(_vm.tabs, function(tab) {
                          return _c(
                            "option",
                            { key: tab, domProps: { value: tab } },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(tab) +
                                  "\n              "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column is-one-fifth" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("sheetdialog.Column")) +
                        "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column" },
                    [
                      _c(
                        "b-select",
                        {
                          attrs: {
                            loading: _vm.loadingColumns,
                            placeholder: _vm.$t("sheetdialog.Select a column"),
                            expanded: ""
                          },
                          model: {
                            value: _vm.selectedColumn,
                            callback: function($$v) {
                              _vm.selectedColumn = $$v
                            },
                            expression: "selectedColumn"
                          }
                        },
                        _vm._l(_vm.columns, function(col) {
                          return _c(
                            "option",
                            { key: col.id, domProps: { value: col.id } },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(col.name) +
                                  "\n              "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column is-one-fifth" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("sheetdialog.First row")) +
                        "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column" },
                    [
                      _c(
                        "b-checkbox",
                        {
                          model: {
                            value: _vm.firstRowIsHeader,
                            callback: function($$v) {
                              _vm.firstRowIsHeader = $$v
                            },
                            expression: "firstRowIsHeader"
                          }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(
                                _vm.$t(
                                  "sheetdialog.Is a header and should not be imported"
                                )
                              ) +
                              "\n            "
                          )
                        ]
                      )
                    ],
                    1
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
                      attrs: { size: "is-medium" },
                      on: {
                        click: function($event) {
                          return _vm.enter_inactive()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("common.Cancel")) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: {
                        size: "is-medium",
                        disabled: !_vm.linkSheetButtonEnabled,
                        type: "is-primary"
                      },
                      on: {
                        click: function($event) {
                          return _vm.enter_linkingSheet()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("sheetdialog.Link sheet")) +
                          "\n        "
                      )
                    ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/textbox.vue?vue&type=template&id=465c016b&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/textbox.vue?vue&type=template&id=465c016b& ***!
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
  return _c("div", {
    staticClass: "textarea can-go-dark",
    staticStyle: {
      overflow: "auto",
      "font-family":
        "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      "background-color": "#7D7582",
      color: "white"
    },
    style:
      "height:" +
      (_vm.$store.state.preferences.appInfoVisible ? "380px" : "520px"),
    attrs: { id: "names", spellcheck: "false", contentEditable: "true" },
    on: {
      paste: _vm.onPaste,
      input: function($event) {
        return _vm.setNames()
      },
      keyup: _vm.IE_setNames
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=template&id=370a9134&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/textboxbuttons.vue?vue&type=template&id=370a9134& ***!
  \************************************************************************************************************************************************************************************************/
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
      _c(
        "b-button",
        {
          attrs: {
            size: "is-small",
            type: "is-light",
            disabled: _vm.buttonsDisabled
          },
          on: { click: _vm.shuffle }
        },
        [
          _c("i", { staticClass: "fas fa-random" }),
          _vm._v(" " + _vm._s(_vm.$t("textboxbuttons.Shuffle")) + "\n  ")
        ]
      ),
      _vm._v(" "),
      _c(
        "b-button",
        {
          attrs: {
            size: "is-small",
            type: "is-light",
            disabled: _vm.buttonsDisabled
          },
          on: { click: _vm.sort }
        },
        [
          _c("i", { staticClass: "fas fa-sort-alpha-up" }),
          _vm._v(" " + _vm._s(_vm.$t("textboxbuttons.Sort")) + "\n  ")
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=template&id=4390b8e8&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/toolbar.vue?vue&type=template&id=4390b8e8& ***!
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
            {
              staticStyle: { "font-size": "28px", color: "#FEF5A5" },
              attrs: { href: "/" }
            },
            [_vm._v("\n      Drink Roulette\n    ")]
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
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.newButtonVisible,
                  expression: "newButtonVisible"
                }
              ],
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.$emit("reset-wheel")
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-file fa-fw" }),
              _vm._v(" " + _vm._s(_vm.$t("toolbar.New")) + "\n    ")
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
                  value: _vm.optionsButtonVisible,
                  expression: "optionsButtonVisible"
                }
              ],
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.$emit("open-customize-dialog")
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-palette fa-fw" }),
              _vm._v(" " + _vm._s(_vm.$t("common.Customize")) + "\n    ")
            ]
          ),
          _vm._v(" "),
          !_vm.browserIsIEOrOldEdge
            ? _c(
                "b-navbar-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.optionsButtonVisible,
                      expression: "optionsButtonVisible"
                    }
                  ],
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      return _vm.setLiquors()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-wine-glass fa-fw" }),
                  _vm._v("  Liquors\n    ")
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.browserIsIEOrOldEdge
            ? _c(
                "b-navbar-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.optionsButtonVisible,
                      expression: "optionsButtonVisible"
                    }
                  ],
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      return _vm.setBeers()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-beer fa-fw" }),
                  _vm._v("  Beers\n    ")
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.browserIsIEOrOldEdge
            ? _c(
                "b-navbar-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.optionsButtonVisible,
                      expression: "optionsButtonVisible"
                    }
                  ],
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      return _vm.setCocktails()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-glass-martini fa-fw" }),
                  _vm._v("  Cocktails\n    ")
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-navbar-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.fullscreenButtonVisible,
                  expression: "fullscreenButtonVisible"
                }
              ],
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.$store.commit("enterFullScreen")
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-expand fa-fw" }),
              _vm._v(" " + _vm._s(_vm.$t("toolbar.Fullscreen")) + "\n    ")
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
                  value: _vm.exitFullscreenButtonVisible,
                  expression: "exitFullscreenButtonVisible"
                }
              ],
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.$store.commit("exitFullScreen")
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-compress fa-fw" }),
              _vm._v(" " + _vm._s(_vm.$t("toolbar.Exit fullscreen")) + "\n    ")
            ]
          ),
          _vm._v(" "),
          !_vm.browserIsIEOrOldEdge
            ? _c(
                "b-navbar-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.optionsButtonVisible,
                      expression: "optionsButtonVisible"
                    }
                  ],
                  attrs: {
                    href: "https://www.seriouseats.com/cocktail-recipes-5117858"
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-cocktail fa-fw" }),
                  _vm._v("  Cocktail Recipes\n    ")
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.browserIsIEOrOldEdge
            ? _c(
                "b-navbar-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.optionsButtonVisible,
                      expression: "optionsButtonVisible"
                    }
                  ],
                  attrs: { href: "https://bartendai.vercel.app/" }
                },
                [
                  _c("i", { staticClass: "fa fa-comments-o fa-fw" }),
                  _vm._v("  Bartend-AI\n    ")
                ]
              )
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/twitterdialog.vue?vue&type=template&id=81f2c1b0&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./static/twitterdialog.vue?vue&type=template&id=81f2c1b0& ***!
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
    "b-modal",
    {
      attrs: { active: _vm.twitterDialogVisible, width: 640, scroll: "keep" },
      on: {
        "update:active": function($event) {
          _vm.twitterDialogVisible = $event
        }
      }
    },
    [
      _c("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [
        _c("header", { staticClass: "modal-card-head" }, [
          _c("p", { staticClass: "modal-card-title" }, [
            _c("i", { staticClass: "fab fa-twitter" }),
            _vm._v(
              " " + _vm._s(_vm.$t("common.Import Twitter users")) + "\n      "
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "modal-card-body can-go-dark" },
          [
            _c(
              "b-field",
              [
                _c("b-input", {
                  ref: "searchTermField",
                  attrs: {
                    placeholder: _vm.$t("twitterdialog.Hashtag, like #gdg")
                  },
                  nativeOn: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.getTwitterUsers($event)
                    }
                  },
                  model: {
                    value: _vm.searchTerm,
                    callback: function($$v) {
                      _vm.searchTerm = $$v
                    },
                    expression: "searchTerm"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("p", {
              staticStyle: { color: "#999" },
              domProps: {
                innerHTML: _vm._s(
                  _vm.$t("twitterdialog.This search will fetch")
                )
              }
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
                attrs: { size: "is-medium" },
                on: {
                  click: function($event) {
                    _vm.twitterDialogVisible = false
                  }
                }
              },
              [
                _vm._v(
                  "\n        " + _vm._s(_vm.$t("common.Cancel")) + "\n      "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                attrs: {
                  size: "is-medium",
                  type: "is-primary",
                  disabled: _vm.searchTerm == ""
                },
                on: { click: _vm.getTwitterUsers }
              },
              [_vm._v("\n        " + _vm._s(_vm.$t("common.OK")) + "\n      ")]
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

/***/ "./static/FullScreen.js":
/*!******************************!*\
  !*** ./static/FullScreen.js ***!
  \******************************/
/*! exports provided: fullscreenOn, turnOnFullscreen, turnOffFullscreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullscreenOn", function() { return fullscreenOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnOnFullscreen", function() { return turnOnFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnOffFullscreen", function() { return turnOffFullscreen; });
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
function fullscreenOn() {
  var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  return fullscreenElement != null;
}
function turnOnFullscreen() {
  var i = document.body;

  if (i.requestFullscreen) {
    i.requestFullscreen();
  } else if (i.webkitRequestFullscreen) {
    i.webkitRequestFullscreen();
  } else if (i.mozRequestFullScreen) {
    i.mozRequestFullScreen();
  } else if (i.msRequestFullscreen) {
    i.msRequestFullscreen();
  }
}
function turnOffFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
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

/***/ "./static/PageReloader.js":
/*!********************************!*\
  !*** ./static/PageReloader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageReloader; });
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
var PageReloader = /*#__PURE__*/function () {
  function PageReloader() {
    _classCallCheck(this, PageReloader);

    this.pageLoadedTs = this.getNowTimestamp();
  }

  _createClass(PageReloader, [{
    key: "reloadOutdatedPage",
    value: function reloadOutdatedPage(pageHidden) {
      if (pageHidden) {
        var nowTs = this.getNowTimestamp();
        var TWO_DAYS = 1000 * 3600 * 24 * 2;

        if (nowTs - this.pageLoadedTs > TWO_DAYS) {
          location.reload(true);
        }
      }
    }
  }, {
    key: "getNowTimestamp",
    value: function getNowTimestamp() {
      return new Date().getTime();
    }
  }]);

  return PageReloader;
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

/***/ "./static/SheetGateway.js":
/*!********************************!*\
  !*** ./static/SheetGateway.js ***!
  \********************************/
/*! exports provided: getTitle, getTabNames, getColumns, getEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return getTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabNames", function() { return getTabNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumns", function() { return getColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntries", function() { return getEntries; });
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
function getTitle(_x) {
  return _getTitle.apply(this, arguments);
}

function _getTitle() {
  _getTitle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sheetId) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", gapi.client.sheets.spreadsheets.get({
              spreadsheetId: sheetId
            }).then(function (response) {
              return response.result.properties.title;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTitle.apply(this, arguments);
}

function getTabNames(_x2) {
  return _getTabNames.apply(this, arguments);
}

function _getTabNames() {
  _getTabNames = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sheetId) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", gapi.client.sheets.spreadsheets.get({
              spreadsheetId: sheetId
            }).then(function (response) {
              return response.result.sheets.map(function (sheet) {
                return sheet.properties.title;
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTabNames.apply(this, arguments);
}

function getColumns(_x3, _x4) {
  return _getColumns.apply(this, arguments);
}

function _getColumns() {
  _getColumns = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sheetId, tabName) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", gapi.client.sheets.spreadsheets.values.get({
              spreadsheetId: sheetId,
              range: tabName
            }).then(function (response) {
              var columns = [];
              var range = response.result;

              if (range.values && range.values.length > 0) {
                var row = range.values[0];
                var charCode = 65;

                for (var i = 0; i < row.length && charCode < 91; i++) {
                  columns.push({
                    id: String.fromCharCode(charCode),
                    name: row[i]
                  });
                  charCode += 1;
                }
              }

              return columns;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getColumns.apply(this, arguments);
}

function getEntries(_x5, _x6, _x7, _x8) {
  return _getEntries.apply(this, arguments);
}

function _getEntries() {
  _getEntries = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(sheetId, tabName, columnId, skipFirstRow) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", gapi.client.sheets.spreadsheets.values.get({
              spreadsheetId: sheetId,
              range: tabName + '!' + columnId + ':' + columnId
            }).then(function (response) {
              var range = response.result;
              var entries = [];

              if (range.values && range.values.length > 0) {
                for (var i = 0; i < range.values.length; i++) {
                  if (i == 0 && skipFirstRow) {// Skip the first row if requested.
                  } else {
                    var row = range.values[i];

                    if (typeof row[0] != 'undefined') {
                      entries.push(row[0]);
                    }
                  }
                }
              }

              return entries;
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getEntries.apply(this, arguments);
}

/***/ }),

/***/ "./static/SheetPicker.js":
/*!*******************************!*\
  !*** ./static/SheetPicker.js ***!
  \*******************************/
/*! exports provided: load, pickSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickSheet", function() { return pickSheet; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
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

var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = 'https://www.googleapis.com/auth/drive.readonly ' + 'https://www.googleapis.com/auth/spreadsheets.readonly';
var myAccessToken;
function load(accessToken) {
  myAccessToken = accessToken;
  return new Promise(function (resolve, reject) {
    gapi.load('auth2:client:picker', function () {
      gapi.client.init({
        apiKey: process.env.FIREBASE_API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
        clientId: process.env.OAUTH_CLIENT_ID,
        scope: SCOPES
      }).then(function () {
        gapi.client.setToken({
          access_token: myAccessToken
        });
        resolve();
      });
    });
  });
}
function pickSheet() {
  return new Promise(function (resolve, reject) {
    var view = new google.picker.DocsView(google.picker.ViewId.SPREADSHEETS);
    var picker = new google.picker.PickerBuilder().enableFeature(google.picker.Feature.NAV_HIDDEN).setAppId(process.env.GCP_APP_ID).setOAuthToken(myAccessToken).addView(view).setDeveloperKey(process.env.FIREBASE_API_KEY).setCallback(function (result) {
      if (result.action == 'cancel') {
        reject('No spreadsheet picked');
      }

      if (result.action == 'picked') {
        if (result.docs.length > 0) {
          var id = result.docs[0].id;
          resolve(id);
        }
      }
    }).setTitle('Select a spreadsheet').build();
    picker.setVisible(true);
  });
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

/***/ "./static/app.vue":
/*!************************!*\
  !*** ./static/app.vue ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_342a570e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=342a570e& */ "./static/app.vue?vue&type=template&id=342a570e&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./static/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&lang=css& */ "./static/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_342a570e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_342a570e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/app.vue?vue&type=script&lang=js&":
/*!*************************************************!*\
  !*** ./static/app.vue?vue&type=script&lang=js& ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/app.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************!*\
  !*** ./static/app.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./static/app.vue?vue&type=template&id=342a570e&":
/*!*******************************************************!*\
  !*** ./static/app.vue?vue&type=template&id=342a570e& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_342a570e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=342a570e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=template&id=342a570e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_342a570e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_342a570e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./static/colorThemeList.js":
/*!**********************************!*\
  !*** ./static/colorThemeList.js ***!
  \**********************************/
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
exports.list = {
  'Abstract': {
    'Anonymous citation': ['#9DC3CA', '#B7D4C6', '#B7D4C6', '#EFECE1', '#EDD5C8', '#F2C0C5'],
    'Black to blue': ['#010101', '#011926', '#003E5C', '#016293', '#007BB8'],
    'Centered truth': ['#775E56', '#E4E1AF', '#FF9263', '#FF6455', '#7C687D'],
    'Cool blues & oranges': ['#3C8BEC', '#7EBEF6', '#FED8B1', '#F88102', '#F95701'],
    'Dead ennui': ['#85A18C', '#F6FDDF', '#FFECCD', '#F2B783'],
    'Information blues': ['#90B0AB', '#CBCAC0', '#DEDAD6', '#5F729A'],
    'Lavender to dark blue': ['#FFBAFF', '#DE87FF', '#A455FF', '#681DFF', '#1000CA', '#000098'],
    'Offbeat recognition': ['#F1647A', '#F3F1DB', '#74CBCC', '#27ABB2', '#C1D765', '#80C544'],
    'Office hours': ['#DE7373', '#F0DC9F', '#DEBB89', '#7787AE', '#43487B'],
    'Party fun': ['#891180', '#EA27A2', '#FB9390', '#F6C892', '#FFF5BD', '#FDFFDE'],
    'Pastel tones': ['#E0BBE4', '#957DAD', '#D291BC', '#FEC8D8', '#FFDFD3'],
    'Perfect feminine': ['#C09BE3', '#F6E0C7', '#F0C589', '#EA9A5D', '#EA6D63', '#E33F64'],
    'Slumber party': ['#278DF0', '#FFEF93', '#FF96E1', '#9B78FC'],
    'Teasing questions': ['#C75589', '#E369A4', '#F5CC22', '#F6EF2D', '#B2E792', '#82D07B'],
    'Turquoise to blue': ['#00FEEF', '#09EBEE', '#19CEEB', '#28ACEA', '#388EE9', '#3D76E0']
  },
  'Brands': {
    'Asana': ['#3be8b0', '#1aafd0', '#6a67ce', '#ffb900', '#fc636b'],
    'Baidu': ['#de0f17', '#2529d8'],
    'Barclays': ['#00aeef', '#00395d'],
    'Booking.com': ['#003580', '#009fe3', '#feba02', '#666666', '#f2f6fa'],
    'British Airways': ['#075aaa', '#eb2226', '#01295c', '#efe9e5', '#aca095', '#b9cfed'],
    'Burger King': ['#ec1c24', '#fdbd10', '#0066b2', '#ed7902'],
    'CNN': ['#cc0000', '#000000', '#282828', '#464646'],
    'Delta Airlines': ['#c8102e', '#862633', '#003a70'],
    'Discord': ['#7289da', '#99aab5', '#2c2f33', '#23272a'],
    'Dropbox': ['#007ee5', '#7b8994', '#47525d', '#3d464d'],
    'Drupal': ['#0077c0', '#81ceff', '#00598e'],
    'E*TRADE': ['#6633cc', '#99cc00'],
    'Fedex': ['#4d148c', '#ff6600'],
    'Firefox': ['#e66000', '#ff9500', '#ffcb00', '#00539f', '#0095dd', '#331e54'],
    'Google': ['#3369E8', '#D50F25', '#EEB211', '#009925'],
    'Google Earth logo': ['#F5F5F5', '#C4E1FF', '#91BFFF', '#4285F4', '#255FDB'],
    'Google Maps': ['#D5D8DB', '#E8E8E8', '#C3ECB2', '#AADAFF', '#FFF2AF', '#F6CF65'],
    'Google Sheets UI': ['#00A568', '#85D1B2', '#F8F9FA', '#C2C3C5', '#5F6368'],
    'Heineken': ['#008200', '#205527', '#ff2b00', '#c3c3c3'],
    'Heroku': ['#c9c3e6', '#6762a6'],
    'IKEA': ['#ffcc00', '#003399'],
    'LEGO': ['#f6ec35', '#d11013', '#000000'],
    'LinkedIn': ['#0077b5', '#000000', '#313335', '#86888a', '#caccce', '#00a0dc'],
    'London Underground': ['#000099', '#cc3333'],
    'Lowe\'s': ['#004990', '#15b6e5'],
    'Lyft': ['#ff00bf', '#352384', '#333447', '#f3f3f5'],
    'McDonald\'s': ['#bf0c0c', '#e76a05', '#ffc600', '#47bc00', '#05007b', '#9748a8'],
    'Microsoft': ['#f65314', '#7cbb00', '#00a1f1', '#ffbb00'],
    'MIT': ['#a31f34', '#8a8b8c', '#c2c0bf'],
    'Mozilla': ['#c13832', '#d7d3c8', '#4d4e53', '#', '#', '#'],
    'NASA': ['#fc3d21', '#0b3d91'],
    'NASCAR': ['#ffd659', '#e4002b', '#007ac2'],
    'National Geographic': ['#ffcc00', '#000000'],
    'NBC': ['#e1ac26', '#dc380f', '#9f0812', '#6347b2', '#368dd5', '#70af1e'],
    'Nest': ['#00afd8', '#7b858e'],
    'Netflix': ['#e50914', '#221f1f'],
    'Oracle': ['#ff0000', '#000000', '#7f7f7f'],
    'Pizza Hut': ['#ee3124', '#00a160', '#ffc425'],
    'Polaroid': ['#00a3e2', '#1ba548', '#fdc800', '#f1860e', '#e41b13'],
    'Python': ['#ffde57', '#4584b6', '#646464'],
    'Reddit': ['#ff4500', '#5f99cf', '#cee3f8'],
    'Residence Inn': ['#b32317', '#f58025', '#3a6e8f', '#87b2d8', '#8d8b00', '#c1d72f'],
    'Ritz-Carlton': ['#006b95', '#4f5b65', '#b3812a', '#a01a1f'],
    'Rolls-Royce': ['#680021', '#fffaec', '#939598', '#000000'],
    'Ryanair': ['#073590', '#f1c933', '#2091eb'],
    'Salesforce': ['#1798c1', '#ff1100'],
    'Slack': ['#6ecadc', '#e9a820', '#e01563', '#3eb991'],
    'Spotify': ['#1db954', '#ffffff', '#000000'],
    'Stack Exchange': ['#1e5397', '#376db6', '#4ca2da', '#91d8f4'],
    'Staples': ['#cc0000', '#2c8aec', '#ffcc00'],
    'Subway': ['#489e3b', '#fabd42', '#cd0a20'],
    'Twitch': ['#6441a5', '#b9a3e3', '#262626', '#f1f1f1'],
    'Twitter': ['#1da1f2', '#14171a', '#657786', '#aab8c2', '#e1e8ed', '#f5f8fa'],
    'Uber': ['#09091a', '#c0c0c8', '#1fbad6'],
    'Ubuntu': ['#dd4814', '#77216f', '#5e2750', '#2c001e', '#aea79f', '#333333'],
    'Volvo': ['#003057', '#115740', '#65665c', '#425563', '#517891', '#212721'],
    'Walgreens': ['#e31837', '#f37520', '#489cd4', '#2774a6', '#35393d'],
    'Wikimedia': ['#339966', '#0063bf', '#990000'],
    'Zapier': ['#ff4a00', '#fd7622', '#ffc43e', '#5f6c72', '#499df3', '#13d0ab']
  },
  'Default': {
    'Default': ['#545981', '#FEF5A5', '#98803C', '#7D7582', '#E1E1E6', '#3E3D5E']
  },
  'Popular': {
    'Popular': ['#3369E8', '#D50F25', '#EEB211', '#009925']
  },
  'Flags': {
    'Australia': ['#00008B', '#FFFFFF', '#FF0000'],
    'Belgium': ['#000000', '#FDDA24', '#EF3340'],
    'Canada': ['#FF0000', '#FFFFFF'],
    'Denmark': ['#C60C30', '#FFFFFF'],
    'Finland': ['#002F6C', '#FFFFFF'],
    'France': ['#0055A4', '#FFFFFF', '#EF4135'],
    'Germany': ['#000000', '#DD0000', '#FFCE00'],
    'Hong Kong': ['#DE2408', '#FFFFFF'],
    'India': ['#FF9933', '#FFFFFF', '#138808', '#000080'],
    'Indonesia': ['#FF0000', '#FFFFFF'],
    'Ireland': ['#169B62', '#FFFFFF', '#FF883E'],
    'Malaysia': ['#010066', '#CC0001', '#FFFFFF', '#FFCC00'],
    'Mexico': ['#006341', '#FFFFFF', '#CE1126'],
    'Netherlands': ['#AE1C28', '#FFFFFF', '#21468B'],
    'New Zealand': ['#00247D', '#FFFFFF', '#CC142B'],
    'Norway': ['#C8102E', '#FFFFFF', '#003087'],
    'Philippines': ['#FCD116', '#0038A8', '#CE1126', '#FFFFFF'],
    'Singapore': ['#EF3340', '#FFFFFF'],
    'Spain': ['#AA151B', '#F1BF00'],
    'Sweden': ['#004B87', '#FFCD00'],
    'Thailand': ['#A51931', '#F4F5F8', '#2D2A4A'],
    'United Arab Emirates': ['#FF0000', '#00732F', '#FFFFFF', '#000000'],
    'United Kingdom': ['#00247D', '#FFFFFF', '#CF142B'],
    'United States': ['#3C3B6E', '#FFFFFF', '#B22234'],
    'Vietnam': ['#DA251D', '#FFCD00']
  },
  'Games': {
    'Candy Crush': ['#D98121', '#EDB23F', '#F5D346', '#F7E1B4', '#FAF4DC', '#D3151C'],
    'Candyland': ['#fbd7e7', '#eeddec', '#e1e3f1', '#d4e9f6', '#c7effb'],
    'Fortnite': ['#E98F5C', '#B448F0', '#2AC9FA', '#F9E36E', '#C7C9D6'],
    'Mario & Luigi': ['#5a98e1', '#139334', '#cea900', '#fe130f', '#095cd4', '#16b65c'],
    'Minecraft': ['#477A1E', '#70B237', '#8FCA5C', '#61371F', '#854F2B', '#C28340'],
    'Monopoly': ['#C70000', '#BFDBAE', '#8FBC72', '#FFFFFF', '#D7BAAA'],
    'Overwatch': ['#f99e1a', '#43484c', '#405275', '#218ffe', '#000000'],
    'Pikachu': ['#FAD61D', '#E19720', '#F62D14', '#811E09', '#000000'],
    'Rocket League': ['#008BFF', '#FF8B00'],
    'The Crew 2': ['#FFDB15', '#FB8018', '#FB1257', '#01CDF9']
  },
  'Holidays': {
    'Christmas': ['#348228', '#469A47', '#DAF7FF', '#FFFAFA', '#EB2029', '#D70816'],
    'Earth Day': ['#11205B', '#E9E9E9', '#8F705E', '#BF9269', '#F0C951', '#3C6F36'],
    'Easter': ['#367D83', '#BADBD2', '#F47A97', '#F3EB9A', '#E9C05F'],
    'Halloween': ['#F36A1F', '#F3861F', '#000000'],
    'New Year': ['#FFDF00', '#FFCC00', '#ECBD00', '#CC9900', '#B8860B'],
    'Saint Patrick\'s Day': ['#008001', '#228B22', '#00AD43'],
    'Thanksgiving': ['#FDC149', '#E7A755', '#873826', '#61782A', '#D64F06', '#BBB300']
  },
  'Nature': {
    'Antarctica evening': ['#F4D3C4', '#F2AEBB', '#D895DA', '#A091D6', '#696FC7', '#A7AAE1'],
    'Beach sunset': ['#3C47C6', '#656CDE', '#DE6CC8', '#F8A091', '#F7E392', '#F7A55D'],
    'Desert scene': ['#FAD381', '#D79F62', '#2E4647', '#518D6A', '#9BC692'],
    'Evening sky': ['#001F38', '#526079', '#9A7E8E', '#E3757F', '#FD997F', '#FFD0AA'],
    'Fresh meadow': ['#84A013', '#A8BB2E', '#D4DA5E', '#EBEF90', '#FBFDBC', '#FAC703'],
    'Fruit tones': ['#E9692C', '#ED9121', '#FFC324', '#FFF000', '#66B447', '#8EE53F'],
    'Giraffe': ['#F0ECE1', '#EDCF8F', '#C97F4E', '#6F4A38', '#977359'],
    'Jellyfish': ['#3EA1B6', '#0E6B8C', '#133855', '#6B669E', '#BB90C8', '#EFD8EC'],
    'Jungle': ['#135E46', '#478966', '#73A788', '#E3C6AD', '#D09D7B', '#B67B65'],
    'Koi fish': ['#F16323', '#F2F3F4', '#FFD021', '#E34427'],
    'Monsoon': ['#01A8CA', '#32D1EC', '#F1F1F1', '#AFDFF3'],
    'Moon': ['#31302E', '#94908D', '#DAD9D7', '#F0F0F0', '#C3C2BE'],
    'Purple horizon': ['#b7b8f9', '#3a1f8a', '#2c1357', '#462867', '#593b6a'],
    'Rainbow': ['#5E02E9', '#3C70EF', '#30D800', '#E7E200', '#FD8B00', '#F20800'],
    'Red desert': ['#99857A', '#C67B5C', '#E27B58', '#FF9D6F', '#663926', '#8E6A5A'],
    'Red sunset': ['#761000', '#C10900', '#E92100', '#FFDB53', '#FFA93D', '#FF7A29'],
    'Sandy beach': ['#9FE2BF', '#FFE5C6', '#EFCDB4', '#4BC7CF', '#5CF5FF'],
    'Sun': ['#FFFFFF', '#FFE484', '#FFCC33', '#FC9601', '#D14009'],
    'Underwater': ['#4F42B5', '#82E1E3', '#D4F1F9', '#E3FFFA', '#4CC395'],
    'Water lilies': ['#448036', '#5C9550', '#FBBA37', '#EE6BA4', '#F192B5', '#F4B0C7']
  },
  'Seasons': {
    'Fall green': ['#529106', '#61A307', '#86B71B', '#B9BD00', '#8EA202', '#799203'],
    'Fall leaves': ['#BA4634', '#D85C4E', '#EAA250', '#F5DD8B', '#CEC218', '#5F7818'],
    'Fall road': ['#A05A48', '#563633', '#6D463C', '#D6BD9D', '#D19E6D', '#C57D56'],
    'Fall yellow': ['#DC7C00', '#FF9705', '#FEB20A', '#FFCB00', '#FEDF05'],
    'Spring gentle': ['#C3D4C1', '#FFFFE5', '#B4D2A4', '#95BC83', '#F6EAD3'],
    'Spring green beauty': ['#F99825', '#F5C527', '#CFFA6B', '#9EEC1C', '#89DF42', '#75CB00'],
    'Spring pastels': ['#94DE8B', '#B19CD9', '#F4A8CF', '#F4C3D7', '#FDFD96', '#B6E7B9'],
    'Spring pink': ['#E25157', '#F5808F', '#FFACCC', '#FFCBDF', '#EBF0EA', '#93C64E'],
    'Summer buzz': ['#3BAED5', '#5CC8E2', '#FDE683', '#E66C1E', '#D52210'],
    'Summer carnival': ['#01A7EC', '#FFFF46', '#FFC94B', '#FE8F5D', '#FE47B3', '#80DA65'],
    'Summer is hot': ['#BF221C', '#E8681F', '#FBC44F', '#FFE67F', '#FDFFD2', '#F9F500'],
    'Summer pool party': ['#0198F1', '#49C2FF', '#A9EEFF', '#0067D4', '#E999DE', '#7C62C4'],
    'Winter blues': ['#2377A4', '#50A3C6', '#79C0D7', '#F8F8F8', '#DDDFDF', '#C2C2C2'],
    'Winter camouflage': ['#7C7C7C', '#0E1317', '#ACDEF8', '#344A78', '#FDFAFC', '#D6D6D6'],
    'Winter growth': ['#383159', '#656DA6', '#C5E1F2', '#52734F'],
    'Winter wonderland': ['#23644D', '#D3F1F3', '#FFFFFF', '#E22A45', '#C7102E']
  }
};

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

/***/ "./static/entry-counter.vue":
/*!**********************************!*\
  !*** ./static/entry-counter.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry-counter.vue?vue&type=template&id=810df364&scoped=true& */ "./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true&");
/* harmony import */ var _entry_counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entry-counter.vue?vue&type=script&lang=js& */ "./static/entry-counter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css& */ "./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _entry_counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "810df364",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/entry-counter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/entry-counter.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./static/entry-counter.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./entry-counter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./entry-counter.vue?vue&type=template&id=810df364&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/galleryImageList.js":
/*!************************************!*\
  !*** ./static/galleryImageList.js ***!
  \************************************/
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
exports.list = [{
  fileName: './images/camera.png',
  title: 'Camera'
}, {
  fileName: './images/cat.png',
  title: 'Cat'
}, {
  fileName: './images/dog.png',
  title: 'Dog'
}, {
  fileName: './images/dollar-sign.png',
  title: 'Dollar sign'
}, {
  fileName: './images/dragon.png',
  title: 'Dragon'
}, {
  fileName: './images/cheers.png',
  title: 'Cheers'
}];

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

/***/ "./static/images/apple-touch-icon.png":
/*!********************************************!*\
  !*** ./static/images/apple-touch-icon.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/apple-touch-icon.png");

/***/ }),

/***/ "./static/images/btn_google_signin_dark_normal_web@2x.png":
/*!****************************************************************!*\
  !*** ./static/images/btn_google_signin_dark_normal_web@2x.png ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/btn_google_signin_dark_normal_web@2x.png");

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

/***/ "./static/images/favicon-16x16.png":
/*!*****************************************!*\
  !*** ./static/images/favicon-16x16.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/favicon-16x16.png");

/***/ }),

/***/ "./static/images/favicon-32x32.png":
/*!*****************************************!*\
  !*** ./static/images/favicon-32x32.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/images/favicon-32x32.png");

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

/***/ "./static/index.js":
/*!*************************!*\
  !*** ./static/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var buefy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buefy */ "./node_modules/buefy/dist/esm/index.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var vue_mq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-mq */ "./node_modules/vue-mq/dist/vue-mq.es.js");
/* harmony import */ var vue_a2b__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-a2b */ "./node_modules/vue-a2b/dist/index.js");
/* harmony import */ var vue_a2b__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_a2b__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store.js */ "./static/store.js");
/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.vue */ "./static/app.vue");
/* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
/* harmony import */ var _Path_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Path.js */ "./static/Path.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Util.js */ "./static/Util.js");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! buefy/dist/buefy.css */ "./node_modules/buefy/dist/buefy.css");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_favicon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/favicon.png */ "./static/images/favicon.png");
/* harmony import */ var _images_icon_57_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/icon_57.png */ "./static/images/icon_57.png");
/* harmony import */ var _images_icon_192_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/icon_192.png */ "./static/images/icon_192.png");
/* harmony import */ var _images_icon_512_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/icon_512.png */ "./static/images/icon_512.png");
/* harmony import */ var _images_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/apple-touch-icon.png */ "./static/images/apple-touch-icon.png");
/* harmony import */ var _images_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/favicon-16x16.png */ "./static/images/favicon-16x16.png");
/* harmony import */ var _images_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/favicon-32x32.png */ "./static/images/favicon-32x32.png");
/* harmony import */ var _images_favicon_ico__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/favicon.ico */ "./static/images/favicon.ico");
/* harmony import */ var _images_404_cat_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/404_cat.png */ "./static/images/404_cat.png");
/* harmony import */ var _images_link_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/link.png */ "./static/images/link.png");
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





















_Util_js__WEBPACK_IMPORTED_MODULE_9__["initTracking"]();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

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
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_a2b__WEBPACK_IMPORTED_MODULE_4___default.a);
var i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]({
  locale: new _Path_js__WEBPACK_IMPORTED_MODULE_8__["default"](location).locale
});
loadLocale(i18n.locale).then(function () {
  new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    i18n: i18n,
    el: '#app',
    template: '<app/>',
    store: _store_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    components: {
      app: _app_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
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
              file = _Locales_js__WEBPACK_IMPORTED_MODULE_7__["getMessagesFileName"](locale);
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

/***/ "./static/optionsdialog.vue":
/*!**********************************!*\
  !*** ./static/optionsdialog.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optionsdialog.vue?vue&type=template&id=5a328193&scoped=true& */ "./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true&");
/* harmony import */ var _optionsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionsdialog.vue?vue&type=script&lang=js& */ "./static/optionsdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css& */ "./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _optionsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a328193",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/optionsdialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/optionsdialog.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./static/optionsdialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./optionsdialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./optionsdialog.vue?vue&type=template&id=5a328193&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/profiledropdown.vue":
/*!************************************!*\
  !*** ./static/profiledropdown.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profiledropdown_vue_vue_type_template_id_61fb65a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profiledropdown.vue?vue&type=template&id=61fb65a7& */ "./static/profiledropdown.vue?vue&type=template&id=61fb65a7&");
/* harmony import */ var _profiledropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profiledropdown.vue?vue&type=script&lang=js& */ "./static/profiledropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profiledropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profiledropdown_vue_vue_type_template_id_61fb65a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profiledropdown_vue_vue_type_template_id_61fb65a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/profiledropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/profiledropdown.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./static/profiledropdown.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profiledropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./profiledropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/profiledropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profiledropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/profiledropdown.vue?vue&type=template&id=61fb65a7&":
/*!*******************************************************************!*\
  !*** ./static/profiledropdown.vue?vue&type=template&id=61fb65a7& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profiledropdown_vue_vue_type_template_id_61fb65a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./profiledropdown.vue?vue&type=template&id=61fb65a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/profiledropdown.vue?vue&type=template&id=61fb65a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profiledropdown_vue_vue_type_template_id_61fb65a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profiledropdown_vue_vue_type_template_id_61fb65a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/sharedialog.vue":
/*!********************************!*\
  !*** ./static/sharedialog.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sharedialog_vue_vue_type_template_id_7d78e258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedialog.vue?vue&type=template&id=7d78e258& */ "./static/sharedialog.vue?vue&type=template&id=7d78e258&");
/* harmony import */ var _sharedialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharedialog.vue?vue&type=script&lang=js& */ "./static/sharedialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sharedialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sharedialog_vue_vue_type_template_id_7d78e258___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sharedialog_vue_vue_type_template_id_7d78e258___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/sharedialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/sharedialog.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./static/sharedialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./sharedialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/sharedialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/sharedialog.vue?vue&type=template&id=7d78e258&":
/*!***************************************************************!*\
  !*** ./static/sharedialog.vue?vue&type=template&id=7d78e258& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedialog_vue_vue_type_template_id_7d78e258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./sharedialog.vue?vue&type=template&id=7d78e258& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/sharedialog.vue?vue&type=template&id=7d78e258&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedialog_vue_vue_type_template_id_7d78e258___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sharedialog_vue_vue_type_template_id_7d78e258___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/sheetdialog.vue":
/*!********************************!*\
  !*** ./static/sheetdialog.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sheetdialog_vue_vue_type_template_id_5e9e8758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheetdialog.vue?vue&type=template&id=5e9e8758& */ "./static/sheetdialog.vue?vue&type=template&id=5e9e8758&");
/* harmony import */ var _sheetdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheetdialog.vue?vue&type=script&lang=js& */ "./static/sheetdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sheetdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sheetdialog_vue_vue_type_template_id_5e9e8758___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sheetdialog_vue_vue_type_template_id_5e9e8758___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/sheetdialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/sheetdialog.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./static/sheetdialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sheetdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./sheetdialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/sheetdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sheetdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/sheetdialog.vue?vue&type=template&id=5e9e8758&":
/*!***************************************************************!*\
  !*** ./static/sheetdialog.vue?vue&type=template&id=5e9e8758& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sheetdialog_vue_vue_type_template_id_5e9e8758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./sheetdialog.vue?vue&type=template&id=5e9e8758& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/sheetdialog.vue?vue&type=template&id=5e9e8758&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sheetdialog_vue_vue_type_template_id_5e9e8758___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sheetdialog_vue_vue_type_template_id_5e9e8758___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./static/textbox.vue":
/*!****************************!*\
  !*** ./static/textbox.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textbox.vue?vue&type=template&id=465c016b& */ "./static/textbox.vue?vue&type=template&id=465c016b&");
/* harmony import */ var _textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textbox.vue?vue&type=script&lang=js& */ "./static/textbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/textbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/textbox.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./static/textbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./textbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/textbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/textbox.vue?vue&type=template&id=465c016b&":
/*!***********************************************************!*\
  !*** ./static/textbox.vue?vue&type=template&id=465c016b& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./textbox.vue?vue&type=template&id=465c016b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/textbox.vue?vue&type=template&id=465c016b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/textboxbuttons.vue":
/*!***********************************!*\
  !*** ./static/textboxbuttons.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textboxbuttons_vue_vue_type_template_id_370a9134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textboxbuttons.vue?vue&type=template&id=370a9134& */ "./static/textboxbuttons.vue?vue&type=template&id=370a9134&");
/* harmony import */ var _textboxbuttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textboxbuttons.vue?vue&type=script&lang=js& */ "./static/textboxbuttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _textboxbuttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _textboxbuttons_vue_vue_type_template_id_370a9134___WEBPACK_IMPORTED_MODULE_0__["render"],
  _textboxbuttons_vue_vue_type_template_id_370a9134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/textboxbuttons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/textboxbuttons.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./static/textboxbuttons.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./textboxbuttons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/textboxbuttons.vue?vue&type=template&id=370a9134&":
/*!******************************************************************!*\
  !*** ./static/textboxbuttons.vue?vue&type=template&id=370a9134& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_template_id_370a9134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./textboxbuttons.vue?vue&type=template&id=370a9134& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=template&id=370a9134&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_template_id_370a9134___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_template_id_370a9134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./static/toolbar.vue":
/*!****************************!*\
  !*** ./static/toolbar.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar.vue?vue&type=template&id=4390b8e8& */ "./static/toolbar.vue?vue&type=template&id=4390b8e8&");
/* harmony import */ var _toolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.vue?vue&type=script&lang=js& */ "./static/toolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _toolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/toolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/toolbar.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./static/toolbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./toolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/toolbar.vue?vue&type=template&id=4390b8e8&":
/*!***********************************************************!*\
  !*** ./static/toolbar.vue?vue&type=template&id=4390b8e8& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./toolbar.vue?vue&type=template&id=4390b8e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=template&id=4390b8e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./static/twitterdialog.vue":
/*!**********************************!*\
  !*** ./static/twitterdialog.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _twitterdialog_vue_vue_type_template_id_81f2c1b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twitterdialog.vue?vue&type=template&id=81f2c1b0& */ "./static/twitterdialog.vue?vue&type=template&id=81f2c1b0&");
/* harmony import */ var _twitterdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twitterdialog.vue?vue&type=script&lang=js& */ "./static/twitterdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _twitterdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _twitterdialog_vue_vue_type_template_id_81f2c1b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _twitterdialog_vue_vue_type_template_id_81f2c1b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "static/twitterdialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./static/twitterdialog.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./static/twitterdialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_twitterdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./twitterdialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/twitterdialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_twitterdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./static/twitterdialog.vue?vue&type=template&id=81f2c1b0&":
/*!*****************************************************************!*\
  !*** ./static/twitterdialog.vue?vue&type=template&id=81f2c1b0& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_twitterdialog_vue_vue_type_template_id_81f2c1b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./twitterdialog.vue?vue&type=template&id=81f2c1b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/twitterdialog.vue?vue&type=template&id=81f2c1b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_twitterdialog_vue_vue_type_template_id_81f2c1b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_twitterdialog_vue_vue_type_template_id_81f2c1b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=index-5f3cbd5e2b2c4c3ecb4a.js.map