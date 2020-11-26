webpackHotUpdate_N_E("pages/index",{

/***/ "./app-components/map_view.js":
/*!************************************!*\
  !*** ./app-components/map_view.js ***!
  \************************************/
/*! exports provided: Mapview, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapview", function() { return Mapview; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _map_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map_card */ "./app-components/map_card.js");







var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\app-components\\map_view.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var mapStyles = {
  width: "100%",
  height: "100%"
};
var Mapview = /*#__PURE__*/function (_Component) {
  Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Mapview, _Component);

  var _super = _createSuper(Mapview);

  function Mapview(_props) {
    var _this;

    Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Mapview);

    _this = _super.call(this, _props);

    Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onMarkerClick", function (props, marker) {
      _this.setState({
        selectedStore: props.data,
        activeStore: marker,
        showingInfoWindow: true,
        selectedImg: props.data.storeBanner.url
      });

      console.log(_this.state.selectedImg);
    });

    Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "removeActiveMarker", function () {
      setTimeout(function () {
        _this.setState({
          showingInfoWindow: false
        });
      }, 3000);
    });

    _this.state = {
      stores: _this.props.tailors,
      activeStore: {},
      showingInfoWindow: false,
      selectedStore: [],
      selectedImg: ""
    };
    return _this;
  }

  Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Mapview, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_8__["Map"], {
        google: this.props.google,
        mapTypeId: "roadmap",
        zoom: 15,
        style: mapStyles,
        initialCenter: this.props.position,
        styles: mapStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, this.state.stores.map(function (store) {
        return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_8__["Marker"], {
          key: store._id,
          position: {
            lat: store.geolocation.lat,
            lng: store.geolocation["long"]
          },
          title: store.name,
          data: store,
          onClick: _this2.onMarkerClick,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }
        });
      }), __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_8__["InfoWindow"], {
        marker: this.state.activeStore,
        visible: this.state.showingInfoWindow,
        className: "list-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, __jsx(_map_card__WEBPACK_IMPORTED_MODULE_12__["default"], {
        store: this.state.selectedStore,
        image: this.state.selectedImg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Mapview;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_8__["GoogleApiWrapper"])({
  apiKey: "AIzaSyD0wFMqqsKP6VuX5lezQQG0QuUFLm9KQxw"
})(Mapview)); // Create custom map style here: https://mapstyle.withgoogle.com/

var mapStyle = [{
  featureType: "administrative",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#444444"
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    color: "#f2f2f2"
  }]
}, {
  featureType: "poi",
  elementType: "all",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road",
  elementType: "all",
  stylers: [{
    saturation: -100
  }, {
    lightness: 45
  }]
}, {
  featureType: "road.highway",
  elementType: "all",
  stylers: [{
    visibility: "simplified"
  }]
}, {
  featureType: "road.arterial",
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "transit",
  elementType: "all",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    color: "#46bcec"
  }, {
    visibility: "on"
  }]
}, {
  featureType: "water",
  elementType: "geometry.fill",
  stylers: [{
    color: "#2196f3"
  }]
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app-components/layout */ "./app-components/layout.js");
/* harmony import */ var _app_components_mobile_map_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app-components/mobile_map_modal */ "./app-components/mobile_map_modal.js");
/* harmony import */ var _app_components_map_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app-components/map_view */ "./app-components/map_view.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/store */ "./services/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _app_components_empty_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app-components/empty_list */ "./app-components/empty_list.js");









var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var __N_SSG = true;

var Home = /*#__PURE__*/function (_Component) {
  Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getTailors", /*#__PURE__*/Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var token;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = _services_store__WEBPACK_IMPORTED_MODULE_15__["default"].getState().auth.token;

              _this.setState({
                loading: true
              });

              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_16___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "GET",
                url: "https://steechit-api.herokuapp.com/stores/",
                params: _this.category !== "" ? {
                  productCategories: {
                    $oid: _this.category
                  }
                } : null
              }).then(function (res) {
                _this.setState({
                  tailors: res.data
                });

                console.log(res);
              })["catch"](function (error) {
                console.log(error);
              })["finally"](function () {
                _this.setState({
                  loading: false
                });
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getUserLocation", /*#__PURE__*/Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (current) {
                  var currentPosition = {
                    lat: current.coords.latitude,
                    lng: current.coords.longitude
                  };

                  _this.setState({
                    position: currentPosition
                  });
                });
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.category = "";
    _this.gender = "Both";
    _this.category_name = "All category";
    _this.state = {
      openMap: false,
      position: [],
      filter: false,
      loading: false,
      tailors: _this.props.initial_tailors,
      categories: _this.props.initial_categories
    };
    return _this;
  } //


  Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "UNSAFE_componentWillMount",
    // Updating states with will mount
    value: function UNSAFE_componentWillMount() {
      this.getUserLocation();
    } // On load

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserLocation();
      console.log(this.props.initial_tailors);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          categories = _this$state.categories,
          tailors = _this$state.tailors,
          loading = _this$state.loading,
          position = _this$state.position,
          filter = _this$state.filter,
          openMap = _this$state.openMap;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_app_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        fixed: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
        m: {
          r: {
            xs: "0",
            sm: "0",
            md: "0",
            lg: "45%",
            xl: "45%"
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
        d: "flex",
        justify: "space-between",
        m: {
          b: "1rem"
        },
        p: {
          b: "0.5rem"
        },
        border: {
          b: "1px solid"
        },
        borderColor: "gray500",
        align: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        p: {
          x: "0"
        },
        bg: "transparent",
        textColor: "black800",
        onClick: function onClick() {
          return _this2.setState({
            filter: true
          });
        },
        prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          name: "Settings",
          size: "20px",
          m: {
            r: "0.5rem"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 19
          }
        }),
        align: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }
      }, "Filter", " ", __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Label"], {
        d: {
          xs: "none",
          sm: "none",
          md: "inline-block",
          lg: "inline-block",
          xl: "inline-block"
        },
        m: {
          l: "5px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }, "(Category: ", this.category_name, ")")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        p: {
          x: "0"
        },
        bg: "transparent",
        textColor: "black800",
        onClick: function onClick() {
          return _this2.setState({
            openMap: true
          });
        },
        prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          name: "Location",
          size: "20px",
          m: {
            r: "0.5rem"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 19
          }
        }),
        align: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }
      }, "Map View")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, tailors.length === 0 ? loading ? null : __jsx(_app_components_empty_list__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 19
        }
      }) : tailors.map(function (t) {
        return __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          size: {
            xs: "12",
            sm: "6",
            md: "6",
            lg: "6",
            xl: "6"
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 19
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/".concat(t._id),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 21
          }
        }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
          rounded: "md",
          overflow: "hidden",
          m: {
            b: "2rem"
          },
          bg: "#fff",
          border: "1px solid",
          borderColor: "gray300",
          cursor: "pointer",
          hoverShadow: "5",
          transition: "all 0.4s ease-in-out",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 23
          }
        }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
          w: "100%",
          h: {
            xs: "150px",
            sm: "150px",
            md: "150px",
            lg: "180px",
            xl: "180px"
          },
          bg: "#fff",
          pos: "relative",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }
        }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_17___default.a, {
          alt: t.storeName,
          src: t.storeBanner.url,
          className: "store_image",
          layout: "fill",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 27
          }
        }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
          bg: "rgba(0,0,0,0.5)",
          pos: "absolute",
          top: "0",
          left: "0",
          w: "100%",
          h: "100%",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 27
          }
        }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
          pos: "absolute",
          bottom: "0",
          left: "0",
          p: "15px",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 27
          }
        }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          textSize: "subheader",
          textColor: "#fff",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 29
          }
        }, t.city), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          textSize: "title",
          textColor: "#fff",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 29
          }
        }, t.storeName))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
          p: {
            t: "1rem",
            b: "1rem",
            l: "15px",
            r: "15px"
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 25
          }
        }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Label"], {
          d: "flex",
          textSize: "paragraph",
          align: "center",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 27
          }
        }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          name: "StarSolid",
          color: "warning800",
          size: "20px",
          m: {
            t: "-3px",
            r: "6px",
            l: "-3px"
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 29
          }
        }), "4.21", " ", __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          m: {
            l: "5px"
          },
          textColor: "black300",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 29
          }
        }, "(129)"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          m: {
            l: "6px",
            t: "-5px"
          },
          textColor: "black300",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 29
          }
        }, "."), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          m: {
            l: "6px"
          },
          textColor: "black300",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 29
          }
        }, "Lagos, Nigeria")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          tag: "label",
          fontFamily: "primary",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 27
          }
        }, t.address)))));
      })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
        d: "flex",
        justify: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 13
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          name: loading ? "Loading3" : "Refresh",
          size: "24px",
          color: "white",
          m: {
            r: "0.5rem"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 19
          }
        }),
        bg: "warning700",
        hoverBg: "warning800",
        rounded: "circle",
        p: {
          r: "1.5rem",
          l: "1rem"
        },
        border: "1px solid",
        borderColor: "gray300",
        hoverShadow: "4",
        m: {
          t: "2rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 15
        }
      }, loading ? "Loading" : "Load more")))), __jsx(_app_components_mobile_map_modal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isOpen: openMap,
        onClose: function onClose() {
          return _this2.setState({
            openMap: false
          });
        },
        position: position,
        tailors: tailors,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 9
        }
      }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
        pos: "fixed",
        right: "0",
        top: "90px",
        w: "45%",
        className: "map",
        bg: "#fff",
        d: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 9
        }
      }, __jsx(_app_components_map_view__WEBPACK_IMPORTED_MODULE_14__["default"], {
        position: position,
        tailors: tailors,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }
      })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: filter,
        onClose: function onClose() {
          return _this2.setState({
            filter: false
          });
        },
        rounded: "md",
        maxW: "20rem",
        bg: "#fff",
        p: "20px",
        overflow: "hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 9
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "Cross",
        pos: "absolute",
        top: "1rem",
        right: "1rem",
        size: "32px",
        onClick: function onClick() {
          return _this2.setState({
            filter: false
          });
        },
        cursor: "pointer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 11
        }
      }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 11
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        textAlign: "center",
        tag: "header",
        textSize: "title",
        fontFamily: "primary",
        m: {
          b: "2rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 13
        }
      }, "FILTER RESULT"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
        m: {
          t: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 13
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        tag: "label",
        textColor: "black200",
        fontFamily: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 15
        }
      }, "Categories"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Label"], {
        align: "center",
        textWeight: "600",
        m: {
          t: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 15
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Radiobox"], {
        onChange: function onChange() {
          _this2.category = "";
          _this2.category_name = "All category";

          _this2.setState({
            tailors: [],
            filter: false
          });

          _this2.getTailors();
        },
        checked: this.category === "",
        name: "count",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 17
        }
      }), "All tailors"), categories.map(function (c) {
        return __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Label"], {
          align: "center",
          textWeight: "600",
          m: {
            t: "1rem"
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 17
          }
        }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Radiobox"], {
          onChange: function onChange() {
            _this2.category = c._id;
            _this2.category_name = c.categoryName;

            _this2.setState({
              tailors: [],
              filter: false
            });

            _this2.getTailors();
          },
          checked: _this2.category === c._id,
          name: "count",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 19
          }
        }), c.categoryName);
      })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Div"], {
        m: {
          t: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 13
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        tag: "label",
        textColor: "black200",
        fontFamily: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 15
        }
      }, "Gender"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Label"], {
        align: "center",
        textWeight: "600",
        m: {
          t: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 15
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Radiobox"], {
        onChange: function onChange() {
          _this2.gender = "";
        },
        checked: this.gender === "",
        name: "count",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 17
        }
      }), "Both"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Label"], {
        align: "center",
        textWeight: "600",
        m: {
          t: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 15
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Radiobox"], {
        onChange: function onChange() {
          _this2.gender = "Female";
        },
        checked: this.gender === "Female",
        name: "count",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 17
        }
      }), "Female"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Label"], {
        align: "center",
        textWeight: "600",
        m: {
          t: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 15
        }
      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_10__["Radiobox"], {
        onChange: function onChange() {
          _this2.gender = "Male";
        },
        checked: this.gender === "Male",
        name: "count",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 17
        }
      }), "Male")))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLWNvbXBvbmVudHMvbWFwX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcFN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiTWFwdmlldyIsInByb3BzIiwibWFya2VyIiwic2V0U3RhdGUiLCJzZWxlY3RlZFN0b3JlIiwiZGF0YSIsImFjdGl2ZVN0b3JlIiwic2hvd2luZ0luZm9XaW5kb3ciLCJzZWxlY3RlZEltZyIsInN0b3JlQmFubmVyIiwidXJsIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwic2V0VGltZW91dCIsInN0b3JlcyIsInRhaWxvcnMiLCJnb29nbGUiLCJwb3NpdGlvbiIsIm1hcFN0eWxlIiwibWFwIiwic3RvcmUiLCJfaWQiLCJsYXQiLCJnZW9sb2NhdGlvbiIsImxuZyIsIm5hbWUiLCJvbk1hcmtlckNsaWNrIiwiQ29tcG9uZW50IiwiR29vZ2xlQXBpV3JhcHBlciIsImFwaUtleSIsImZlYXR1cmVUeXBlIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwiY29sb3IiLCJ2aXNpYmlsaXR5Iiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsIkhvbWUiLCJ0b2tlbiIsImdldFN0YXRlIiwiYXV0aCIsImxvYWRpbmciLCJheGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJveHkiLCJob3N0IiwicG9ydCIsIm1ldGhvZCIsInBhcmFtcyIsImNhdGVnb3J5IiwicHJvZHVjdENhdGVnb3JpZXMiLCIkb2lkIiwidGhlbiIsInJlcyIsImVycm9yIiwibmF2aWdhdG9yIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY3VycmVudCIsImN1cnJlbnRQb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZ2VuZGVyIiwiY2F0ZWdvcnlfbmFtZSIsIm9wZW5NYXAiLCJmaWx0ZXIiLCJpbml0aWFsX3RhaWxvcnMiLCJjYXRlZ29yaWVzIiwiaW5pdGlhbF9jYXRlZ29yaWVzIiwiZ2V0VXNlckxvY2F0aW9uIiwiciIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJiIiwieCIsImwiLCJsZW5ndGgiLCJ0Iiwic3RvcmVOYW1lIiwiY2l0eSIsImFkZHJlc3MiLCJnZXRUYWlsb3JzIiwiYyIsImNhdGVnb3J5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLE9BQUssRUFBRSxNQURTO0FBRWhCQyxRQUFNLEVBQUU7QUFGUSxDQUFsQjtBQUtPLElBQU1DLE9BQWI7QUFBQTs7QUFBQTs7QUFDRSxtQkFBWUMsTUFBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsTUFBTjs7QUFEaUIsZ1ZBV0gsVUFBQ0EsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxxQkFBYSxFQUFFSCxLQUFLLENBQUNJLElBRFQ7QUFFWkMsbUJBQVcsRUFBRUosTUFGRDtBQUdaSyx5QkFBaUIsRUFBRSxJQUhQO0FBSVpDLG1CQUFXLEVBQUVQLEtBQUssQ0FBQ0ksSUFBTixDQUFXSSxXQUFYLENBQXVCQztBQUp4QixPQUFkOztBQU1BQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLQyxLQUFMLENBQVdMLFdBQXZCO0FBQ0QsS0FuQmtCOztBQUFBLHFWQXFCRSxZQUFNO0FBQ3pCTSxnQkFBVSxDQUFDLFlBQU07QUFDZixjQUFLWCxRQUFMLENBQWM7QUFBRUksMkJBQWlCLEVBQUU7QUFBckIsU0FBZDtBQUNELE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxLQXpCa0I7O0FBRWpCLFVBQUtNLEtBQUwsR0FBYTtBQUNYRSxZQUFNLEVBQUUsTUFBS2QsS0FBTCxDQUFXZSxPQURSO0FBRVhWLGlCQUFXLEVBQUUsRUFGRjtBQUdYQyx1QkFBaUIsRUFBRSxLQUhSO0FBSVhILG1CQUFhLEVBQUUsRUFKSjtBQUtYSSxpQkFBVyxFQUFFO0FBTEYsS0FBYjtBQUZpQjtBQVNsQjs7QUFWSDtBQUFBO0FBQUEsNkJBNEJXO0FBQUE7O0FBQ1AsYUFDRSxNQUFDLHFEQUFEO0FBQ0UsY0FBTSxFQUFFLEtBQUtQLEtBQUwsQ0FBV2dCLE1BRHJCO0FBRUUsaUJBQVMsRUFBQyxTQUZaO0FBR0UsWUFBSSxFQUFFLEVBSFI7QUFJRSxhQUFLLEVBQUVwQixTQUpUO0FBS0UscUJBQWEsRUFBRSxLQUFLSSxLQUFMLENBQVdpQixRQUw1QjtBQU1FLGNBQU0sRUFBRUMsUUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUcsS0FBS04sS0FBTCxDQUFXRSxNQUFYLENBQWtCSyxHQUFsQixDQUFzQixVQUFDQyxLQUFEO0FBQUEsZUFDckIsTUFBQyx3REFBRDtBQUNFLGFBQUcsRUFBRUEsS0FBSyxDQUFDQyxHQURiO0FBRUUsa0JBQVEsRUFBRTtBQUNSQyxlQUFHLEVBQUVGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQsR0FEZjtBQUVSRSxlQUFHLEVBQUVKLEtBQUssQ0FBQ0csV0FBTjtBQUZHLFdBRlo7QUFNRSxlQUFLLEVBQUVILEtBQUssQ0FBQ0ssSUFOZjtBQU9FLGNBQUksRUFBRUwsS0FQUjtBQVFFLGlCQUFPLEVBQUUsTUFBSSxDQUFDTSxhQVJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRHFCO0FBQUEsT0FBdEIsQ0FSSCxFQW9CRSxNQUFDLDREQUFEO0FBQ0UsY0FBTSxFQUFFLEtBQUtkLEtBQUwsQ0FBV1AsV0FEckI7QUFFRSxlQUFPLEVBQUUsS0FBS08sS0FBTCxDQUFXTixpQkFGdEI7QUFHRSxpQkFBUyxFQUFDLFdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFLE1BQUMsa0RBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS00sS0FBTCxDQUFXVCxhQURwQjtBQUVFLGFBQUssRUFBRSxLQUFLUyxLQUFMLENBQVdMLFdBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixDQXBCRixDQURGO0FBaUNEO0FBOURIOztBQUFBO0FBQUEsRUFBNkJvQiwrQ0FBN0I7QUFpRWVDLHlJQUFnQixDQUFDO0FBQzlCQyxRQUFNLEVBQUU7QUFEc0IsQ0FBRCxDQUFoQixDQUVaOUIsT0FGWSxDQUFmLEUsQ0FJQTs7QUFDQSxJQUFJbUIsUUFBUSxHQUFHLENBQ2I7QUFDRVksYUFBVyxFQUFFLGdCQURmO0FBRUVDLGFBQVcsRUFBRSxrQkFGZjtBQUdFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFQyxTQUFLLEVBQUU7QUFEVCxHQURPO0FBSFgsQ0FEYSxFQVViO0FBQ0VILGFBQVcsRUFBRSxXQURmO0FBRUVDLGFBQVcsRUFBRSxLQUZmO0FBR0VDLFNBQU8sRUFBRSxDQUNQO0FBQ0VDLFNBQUssRUFBRTtBQURULEdBRE87QUFIWCxDQVZhLEVBbUJiO0FBQ0VILGFBQVcsRUFBRSxLQURmO0FBRUVDLGFBQVcsRUFBRSxLQUZmO0FBR0VDLFNBQU8sRUFBRSxDQUNQO0FBQ0VFLGNBQVUsRUFBRTtBQURkLEdBRE87QUFIWCxDQW5CYSxFQTRCYjtBQUNFSixhQUFXLEVBQUUsTUFEZjtBQUVFQyxhQUFXLEVBQUUsS0FGZjtBQUdFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFRyxjQUFVLEVBQUUsQ0FBQztBQURmLEdBRE8sRUFJUDtBQUNFQyxhQUFTLEVBQUU7QUFEYixHQUpPO0FBSFgsQ0E1QmEsRUF3Q2I7QUFDRU4sYUFBVyxFQUFFLGNBRGY7QUFFRUMsYUFBVyxFQUFFLEtBRmY7QUFHRUMsU0FBTyxFQUFFLENBQ1A7QUFDRUUsY0FBVSxFQUFFO0FBRGQsR0FETztBQUhYLENBeENhLEVBaURiO0FBQ0VKLGFBQVcsRUFBRSxlQURmO0FBRUVDLGFBQVcsRUFBRSxhQUZmO0FBR0VDLFNBQU8sRUFBRSxDQUNQO0FBQ0VFLGNBQVUsRUFBRTtBQURkLEdBRE87QUFIWCxDQWpEYSxFQTBEYjtBQUNFSixhQUFXLEVBQUUsU0FEZjtBQUVFQyxhQUFXLEVBQUUsS0FGZjtBQUdFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFRSxjQUFVLEVBQUU7QUFEZCxHQURPO0FBSFgsQ0ExRGEsRUFtRWI7QUFDRUosYUFBVyxFQUFFLE9BRGY7QUFFRUMsYUFBVyxFQUFFLEtBRmY7QUFHRUMsU0FBTyxFQUFFLENBQ1A7QUFDRUMsU0FBSyxFQUFFO0FBRFQsR0FETyxFQUlQO0FBQ0VDLGNBQVUsRUFBRTtBQURkLEdBSk87QUFIWCxDQW5FYSxFQStFYjtBQUNFSixhQUFXLEVBQUUsT0FEZjtBQUVFQyxhQUFXLEVBQUUsZUFGZjtBQUdFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFQyxTQUFLLEVBQUU7QUFEVCxHQURPO0FBSFgsQ0EvRWEsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQUVxQkksSTs7Ozs7QUFDbkIsZ0JBQVlyQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixtb0JBaUJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMc0MsbUJBREssR0FDR2xCLHdEQUFLLENBQUNtQixRQUFOLEdBQWlCQyxJQUFqQixDQUFzQkYsS0FEekI7O0FBRVgsb0JBQUtwQyxRQUFMLENBQWM7QUFBRXVDLHVCQUFPLEVBQUU7QUFBWCxlQUFkOztBQUZXO0FBQUEscUJBR0xDLDZDQUFLLENBQUM7QUFDVkMsdUJBQU8sRUFBRTtBQUNQLGlEQUErQixHQUR4QjtBQUVQQywrQkFBYSxtQkFBWU4sS0FBWjtBQUZOLGlCQURDO0FBS1ZPLHFCQUFLLEVBQUU7QUFDTEMsc0JBQUksRUFBRSxnQkFERDtBQUVMQyxzQkFBSSxFQUFFO0FBRkQsaUJBTEc7QUFTVkMsc0JBQU0sRUFBRSxLQVRFO0FBVVZ2QyxtQkFBRyw4Q0FWTztBQVdWd0Msc0JBQU0sRUFDSixNQUFLQyxRQUFMLEtBQWtCLEVBQWxCLEdBQ0k7QUFBRUMsbUNBQWlCLEVBQUU7QUFBRUMsd0JBQUksRUFBRSxNQUFLRjtBQUFiO0FBQXJCLGlCQURKLEdBRUk7QUFkSSxlQUFELENBQUwsQ0FnQkhHLElBaEJHLENBZ0JFLFVBQUNDLEdBQUQsRUFBUztBQUNiLHNCQUFLcEQsUUFBTCxDQUFjO0FBQUVhLHlCQUFPLEVBQUV1QyxHQUFHLENBQUNsRDtBQUFmLGlCQUFkOztBQUNBTSx1QkFBTyxDQUFDQyxHQUFSLENBQVkyQyxHQUFaO0FBQ0QsZUFuQkcsV0FvQkcsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCN0MsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZNEMsS0FBWjtBQUNELGVBdEJHLGFBdUJLLFlBQU07QUFDYixzQkFBS3JELFFBQUwsQ0FBYztBQUFFdUMseUJBQU8sRUFBRTtBQUFYLGlCQUFkO0FBQ0QsZUF6QkcsQ0FISzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpCTTs7QUFBQSx3b0JBZ0REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEIsa0JBQUllLFNBQVMsQ0FBQ2pDLFdBQWQsRUFBMkI7QUFDekJpQyx5QkFBUyxDQUFDakMsV0FBVixDQUFzQmtDLGtCQUF0QixDQUF5QyxVQUFDQyxPQUFELEVBQWE7QUFDcEQsc0JBQU1DLGVBQWUsR0FBRztBQUN0QnJDLHVCQUFHLEVBQUVvQyxPQUFPLENBQUNFLE1BQVIsQ0FBZUMsUUFERTtBQUV0QnJDLHVCQUFHLEVBQUVrQyxPQUFPLENBQUNFLE1BQVIsQ0FBZUU7QUFGRSxtQkFBeEI7O0FBSUEsd0JBQUs1RCxRQUFMLENBQWM7QUFBRWUsNEJBQVEsRUFBRTBDO0FBQVosbUJBQWQ7QUFDRCxpQkFORDtBQU9EOztBQVRlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaERDOztBQUVqQixVQUFLVCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsVUFBS2EsTUFBTCxHQUFjLE1BQWQ7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLGNBQXJCO0FBQ0EsVUFBS3BELEtBQUwsR0FBYTtBQUNYcUQsYUFBTyxFQUFFLEtBREU7QUFFWGhELGNBQVEsRUFBRSxFQUZDO0FBR1hpRCxZQUFNLEVBQUUsS0FIRztBQUlYekIsYUFBTyxFQUFFLEtBSkU7QUFLWDFCLGFBQU8sRUFBRSxNQUFLZixLQUFMLENBQVdtRSxlQUxUO0FBTVhDLGdCQUFVLEVBQUUsTUFBS3BFLEtBQUwsQ0FBV3FFO0FBTlosS0FBYjtBQUxpQjtBQWFsQixHLENBRUQ7Ozs7O0FBNkNBO2dEQUU0QjtBQUMxQixXQUFLQyxlQUFMO0FBQ0QsSyxDQUVEOzs7O3dDQUVvQjtBQUNsQixXQUFLQSxlQUFMO0FBQ0E1RCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWCxLQUFMLENBQVdtRSxlQUF2QjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSx3QkFRSCxLQUFLdkQsS0FSRjtBQUFBLFVBRUx3RCxVQUZLLGVBRUxBLFVBRks7QUFBQSxVQUdMckQsT0FISyxlQUdMQSxPQUhLO0FBQUEsVUFJTDBCLE9BSkssZUFJTEEsT0FKSztBQUFBLFVBS0x4QixRQUxLLGVBS0xBLFFBTEs7QUFBQSxVQU1MaUQsTUFOSyxlQU1MQSxNQU5LO0FBQUEsVUFPTEQsT0FQSyxlQU9MQSxPQVBLO0FBU1AsYUFDRSxtRUFDRSxNQUFDLCtEQUFEO0FBQVEsYUFBSyxFQUFFLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsNENBQUQ7QUFBSyxTQUFDLEVBQUU7QUFBRU0sV0FBQyxFQUFFO0FBQUVDLGNBQUUsRUFBRSxHQUFOO0FBQVdDLGNBQUUsRUFBRSxHQUFmO0FBQW9CQyxjQUFFLEVBQUUsR0FBeEI7QUFBNkJDLGNBQUUsRUFBRSxLQUFqQztBQUF3Q0MsY0FBRSxFQUFFO0FBQTVDO0FBQUwsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0Q0FBRDtBQUNFLFNBQUMsRUFBQyxNQURKO0FBRUUsZUFBTyxFQUFDLGVBRlY7QUFHRSxTQUFDLEVBQUU7QUFBRUMsV0FBQyxFQUFFO0FBQUwsU0FITDtBQUlFLFNBQUMsRUFBRTtBQUFFQSxXQUFDLEVBQUU7QUFBTCxTQUpMO0FBS0UsY0FBTSxFQUFFO0FBQUVBLFdBQUMsRUFBRTtBQUFMLFNBTFY7QUFNRSxtQkFBVyxFQUFDLFNBTmQ7QUFPRSxhQUFLLEVBQUMsUUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBU0UsTUFBQywrQ0FBRDtBQUNFLFNBQUMsRUFBRTtBQUFFQyxXQUFDLEVBQUU7QUFBTCxTQURMO0FBRUUsVUFBRSxFQUFDLGFBRkw7QUFHRSxpQkFBUyxFQUFDLFVBSFo7QUFJRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUM1RSxRQUFMLENBQWM7QUFBRWdFLGtCQUFNLEVBQUU7QUFBVixXQUFkLENBQU47QUFBQSxTQUpYO0FBS0UsY0FBTSxFQUNKLE1BQUMsNkNBQUQ7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFzQixjQUFJLEVBQUMsTUFBM0I7QUFBa0MsV0FBQyxFQUFFO0FBQUVLLGFBQUMsRUFBRTtBQUFMLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFOSjtBQVFFLGFBQUssRUFBQyxRQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVVMsR0FWVCxFQVdFLE1BQUMsOENBQUQ7QUFDRSxTQUFDLEVBQUU7QUFDREMsWUFBRSxFQUFFLE1BREg7QUFFREMsWUFBRSxFQUFFLE1BRkg7QUFHREMsWUFBRSxFQUFFLGNBSEg7QUFJREMsWUFBRSxFQUFFLGNBSkg7QUFLREMsWUFBRSxFQUFFO0FBTEgsU0FETDtBQVFFLFNBQUMsRUFBRTtBQUFFRyxXQUFDLEVBQUU7QUFBTCxTQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVWMsS0FBS2YsYUFWbkIsTUFYRixDQVRGLEVBaUNFLE1BQUMsK0NBQUQ7QUFDRSxTQUFDLEVBQUU7QUFBRWMsV0FBQyxFQUFFO0FBQUwsU0FETDtBQUVFLFVBQUUsRUFBQyxhQUZMO0FBR0UsaUJBQVMsRUFBQyxVQUhaO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDNUUsUUFBTCxDQUFjO0FBQUUrRCxtQkFBTyxFQUFFO0FBQVgsV0FBZCxDQUFOO0FBQUEsU0FKWDtBQUtFLGNBQU0sRUFDSixNQUFDLDZDQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBc0IsY0FBSSxFQUFDLE1BQTNCO0FBQWtDLFdBQUMsRUFBRTtBQUFFTSxhQUFDLEVBQUU7QUFBTCxXQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTko7QUFRRSxhQUFLLEVBQUMsUUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpDRixDQURGLEVBK0NFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHeEQsT0FBTyxDQUFDaUUsTUFBUixLQUFtQixDQUFuQixHQUNDdkMsT0FBTyxHQUFHLElBQUgsR0FDTCxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSCxHQUtDMUIsT0FBTyxDQUFDSSxHQUFSLENBQVksVUFBQzhELENBQUQ7QUFBQSxlQUNWLE1BQUMsNENBQUQ7QUFDRSxjQUFJLEVBQUU7QUFDSlQsY0FBRSxFQUFFLElBREE7QUFFSkMsY0FBRSxFQUFFLEdBRkE7QUFHSkMsY0FBRSxFQUFFLEdBSEE7QUFJSkMsY0FBRSxFQUFFLEdBSkE7QUFLSkMsY0FBRSxFQUFFO0FBTEEsV0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBU0UsTUFBQyxpREFBRDtBQUFNLGNBQUksYUFBTUssQ0FBQyxDQUFDNUQsR0FBUixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDRDQUFEO0FBQ0UsaUJBQU8sRUFBQyxJQURWO0FBRUUsa0JBQVEsRUFBQyxRQUZYO0FBR0UsV0FBQyxFQUFFO0FBQUV3RCxhQUFDLEVBQUU7QUFBTCxXQUhMO0FBSUUsWUFBRSxFQUFDLE1BSkw7QUFLRSxnQkFBTSxFQUFDLFdBTFQ7QUFNRSxxQkFBVyxFQUFDLFNBTmQ7QUFPRSxnQkFBTSxFQUFDLFNBUFQ7QUFRRSxxQkFBVyxFQUFDLEdBUmQ7QUFTRSxvQkFBVSxFQUFDLHNCQVRiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FXRSxNQUFDLDRDQUFEO0FBQ0UsV0FBQyxFQUFDLE1BREo7QUFFRSxXQUFDLEVBQUU7QUFDREwsY0FBRSxFQUFFLE9BREg7QUFFREMsY0FBRSxFQUFFLE9BRkg7QUFHREMsY0FBRSxFQUFFLE9BSEg7QUFJREMsY0FBRSxFQUFFLE9BSkg7QUFLREMsY0FBRSxFQUFFO0FBTEgsV0FGTDtBQVNFLFlBQUUsRUFBQyxNQVRMO0FBVUUsYUFBRyxFQUFDLFVBVk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVlFLE1BQUMsa0RBQUQ7QUFDRSxhQUFHLEVBQUVLLENBQUMsQ0FBQ0MsU0FEVDtBQUVFLGFBQUcsRUFBRUQsQ0FBQyxDQUFDekUsV0FBRixDQUFjQyxHQUZyQjtBQUdFLG1CQUFTLEVBQUMsYUFIWjtBQUlFLGdCQUFNLEVBQUMsTUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBWkYsRUFrQkUsTUFBQyw0Q0FBRDtBQUNFLFlBQUUsRUFBQyxpQkFETDtBQUVFLGFBQUcsRUFBQyxVQUZOO0FBR0UsYUFBRyxFQUFDLEdBSE47QUFJRSxjQUFJLEVBQUMsR0FKUDtBQUtFLFdBQUMsRUFBQyxNQUxKO0FBTUUsV0FBQyxFQUFDLE1BTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWxCRixFQTBCRSxNQUFDLDRDQUFEO0FBQUssYUFBRyxFQUFDLFVBQVQ7QUFBb0IsZ0JBQU0sRUFBQyxHQUEzQjtBQUErQixjQUFJLEVBQUMsR0FBcEM7QUFBd0MsV0FBQyxFQUFDLE1BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDZDQUFEO0FBQU0sa0JBQVEsRUFBQyxXQUFmO0FBQTJCLG1CQUFTLEVBQUMsTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHd0UsQ0FBQyxDQUFDRSxJQURMLENBREYsRUFJRSxNQUFDLDZDQUFEO0FBQU0sa0JBQVEsRUFBQyxPQUFmO0FBQXVCLG1CQUFTLEVBQUMsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHRixDQUFDLENBQUNDLFNBREwsQ0FKRixDQTFCRixDQVhGLEVBOENFLE1BQUMsNENBQUQ7QUFBSyxXQUFDLEVBQUU7QUFBRUQsYUFBQyxFQUFFLE1BQUw7QUFBYUosYUFBQyxFQUFFLE1BQWhCO0FBQXdCRSxhQUFDLEVBQUUsTUFBM0I7QUFBbUNSLGFBQUMsRUFBRTtBQUF0QyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLDhDQUFEO0FBQU8sV0FBQyxFQUFDLE1BQVQ7QUFBZ0Isa0JBQVEsRUFBQyxXQUF6QjtBQUFxQyxlQUFLLEVBQUMsUUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsNkNBQUQ7QUFDRSxjQUFJLEVBQUMsV0FEUDtBQUVFLGVBQUssRUFBQyxZQUZSO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxXQUFDLEVBQUU7QUFBRVUsYUFBQyxFQUFFLE1BQUw7QUFBYVYsYUFBQyxFQUFFLEtBQWhCO0FBQXVCUSxhQUFDLEVBQUU7QUFBMUIsV0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsVUFPTyxHQVBQLEVBUUUsTUFBQyw2Q0FBRDtBQUFNLFdBQUMsRUFBRTtBQUFFQSxhQUFDLEVBQUU7QUFBTCxXQUFUO0FBQXVCLG1CQUFTLEVBQUMsVUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixFQVdFLE1BQUMsNkNBQUQ7QUFDRSxXQUFDLEVBQUU7QUFBRUEsYUFBQyxFQUFFLEtBQUw7QUFBWUUsYUFBQyxFQUFFO0FBQWYsV0FETDtBQUVFLG1CQUFTLEVBQUMsVUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsRUFpQkUsTUFBQyw2Q0FBRDtBQUFNLFdBQUMsRUFBRTtBQUFFRixhQUFDLEVBQUU7QUFBTCxXQUFUO0FBQXVCLG1CQUFTLEVBQUMsVUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFqQkYsQ0FERixFQXNCRSxNQUFDLDZDQUFEO0FBQU0sYUFBRyxFQUFDLE9BQVY7QUFBa0Isb0JBQVUsRUFBQyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dFLENBQUMsQ0FBQ0csT0FETCxDQXRCRixDQTlDRixDQURGLENBVEYsQ0FEVTtBQUFBLE9BQVosQ0FOSixDQS9DRixFQThJRSxNQUFDLDRDQUFEO0FBQUssU0FBQyxFQUFDLE1BQVA7QUFBYyxlQUFPLEVBQUMsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsK0NBQUQ7QUFDRSxjQUFNLEVBQ0osTUFBQyw2Q0FBRDtBQUNFLGNBQUksRUFBRTNDLE9BQU8sR0FBRyxVQUFILEdBQWdCLFNBRC9CO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxlQUFLLEVBQUMsT0FIUjtBQUlFLFdBQUMsRUFBRTtBQUFFOEIsYUFBQyxFQUFFO0FBQUwsV0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFTRSxVQUFFLEVBQUMsWUFUTDtBQVVFLGVBQU8sRUFBQyxZQVZWO0FBV0UsZUFBTyxFQUFDLFFBWFY7QUFZRSxTQUFDLEVBQUU7QUFBRUEsV0FBQyxFQUFFLFFBQUw7QUFBZVEsV0FBQyxFQUFFO0FBQWxCLFNBWkw7QUFhRSxjQUFNLEVBQUMsV0FiVDtBQWNFLG1CQUFXLEVBQUMsU0FkZDtBQWVFLG1CQUFXLEVBQUMsR0FmZDtBQWdCRSxTQUFDLEVBQUU7QUFBRUUsV0FBQyxFQUFFO0FBQUwsU0FoQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtCR3hDLE9BQU8sR0FBRyxTQUFILEdBQWUsV0FsQnpCLENBREYsQ0E5SUYsQ0FERixDQURGLEVBd0tFLE1BQUMseUVBQUQ7QUFDRSxjQUFNLEVBQUV3QixPQURWO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDL0QsUUFBTCxDQUFjO0FBQUUrRCxtQkFBTyxFQUFFO0FBQVgsV0FBZCxDQUFOO0FBQUEsU0FGWDtBQUdFLGdCQUFRLEVBQUVoRCxRQUhaO0FBSUUsZUFBTyxFQUFFRixPQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF4S0YsRUE4S0UsTUFBQyw0Q0FBRDtBQUNFLFdBQUcsRUFBQyxPQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxXQUFHLEVBQUMsTUFITjtBQUlFLFNBQUMsRUFBQyxLQUpKO0FBS0UsaUJBQVMsRUFBQyxLQUxaO0FBTUUsVUFBRSxFQUFDLE1BTkw7QUFPRSxTQUFDLEVBQUU7QUFDRHlELFlBQUUsRUFBRSxNQURIO0FBRURDLFlBQUUsRUFBRSxNQUZIO0FBR0RDLFlBQUUsRUFBRSxNQUhIO0FBSURDLFlBQUUsRUFBRSxPQUpIO0FBS0RDLFlBQUUsRUFBRTtBQUxILFNBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWVFLE1BQUMsaUVBQUQ7QUFBUyxnQkFBUSxFQUFFM0QsUUFBbkI7QUFBNkIsZUFBTyxFQUFFRixPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZkYsQ0E5S0YsRUErTEUsTUFBQyw4Q0FBRDtBQUNFLGNBQU0sRUFBRW1ELE1BRFY7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNoRSxRQUFMLENBQWM7QUFBRWdFLGtCQUFNLEVBQUU7QUFBVixXQUFkLENBQU47QUFBQSxTQUZYO0FBR0UsZUFBTyxFQUFDLElBSFY7QUFJRSxZQUFJLEVBQUMsT0FKUDtBQUtFLFVBQUUsRUFBQyxNQUxMO0FBTUUsU0FBQyxFQUFDLE1BTko7QUFPRSxnQkFBUSxFQUFDLFFBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVNFLE1BQUMsNkNBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLFdBQUcsRUFBQyxVQUZOO0FBR0UsV0FBRyxFQUFDLE1BSE47QUFJRSxhQUFLLEVBQUMsTUFKUjtBQUtFLFlBQUksRUFBQyxNQUxQO0FBTUUsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDaEUsUUFBTCxDQUFjO0FBQUVnRSxrQkFBTSxFQUFFO0FBQVYsV0FBZCxDQUFOO0FBQUEsU0FOWDtBQU9FLGNBQU0sRUFBQyxTQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFURixFQWtCRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDZDQUFEO0FBQ0UsaUJBQVMsRUFBQyxRQURaO0FBRUUsV0FBRyxFQUFDLFFBRk47QUFHRSxnQkFBUSxFQUFDLE9BSFg7QUFJRSxrQkFBVSxFQUFDLFNBSmI7QUFLRSxTQUFDLEVBQUU7QUFBRVcsV0FBQyxFQUFFO0FBQUwsU0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBVUUsTUFBQyw0Q0FBRDtBQUFLLFNBQUMsRUFBRTtBQUFFSSxXQUFDLEVBQUU7QUFBTCxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDZDQUFEO0FBQU0sV0FBRyxFQUFDLE9BQVY7QUFBa0IsaUJBQVMsRUFBQyxVQUE1QjtBQUF1QyxrQkFBVSxFQUFDLFNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFJRSxNQUFDLDhDQUFEO0FBQU8sYUFBSyxFQUFDLFFBQWI7QUFBc0Isa0JBQVUsRUFBQyxLQUFqQztBQUF1QyxTQUFDLEVBQUU7QUFBRUEsV0FBQyxFQUFFO0FBQUwsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsaURBQUQ7QUFDRSxnQkFBUSxFQUFFLG9CQUFNO0FBQ2QsZ0JBQUksQ0FBQy9CLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxnQkFBSSxDQUFDYyxhQUFMLEdBQXFCLGNBQXJCOztBQUNBLGdCQUFJLENBQUM5RCxRQUFMLENBQWM7QUFBRWEsbUJBQU8sRUFBRSxFQUFYO0FBQWVtRCxrQkFBTSxFQUFFO0FBQXZCLFdBQWQ7O0FBQ0EsZ0JBQUksQ0FBQ21CLFVBQUw7QUFDRCxTQU5IO0FBT0UsZUFBTyxFQUFFLEtBQUtuQyxRQUFMLEtBQWtCLEVBUDdCO0FBUUUsWUFBSSxFQUFDLE9BUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLGdCQUpGLEVBaUJHa0IsVUFBVSxDQUFDakQsR0FBWCxDQUFlLFVBQUNtRSxDQUFEO0FBQUEsZUFDZCxNQUFDLDhDQUFEO0FBQU8sZUFBSyxFQUFDLFFBQWI7QUFBc0Isb0JBQVUsRUFBQyxLQUFqQztBQUF1QyxXQUFDLEVBQUU7QUFBRUwsYUFBQyxFQUFFO0FBQUwsV0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsaURBQUQ7QUFDRSxrQkFBUSxFQUFFLG9CQUFNO0FBQ2Qsa0JBQUksQ0FBQy9CLFFBQUwsR0FBZ0JvQyxDQUFDLENBQUNqRSxHQUFsQjtBQUNBLGtCQUFJLENBQUMyQyxhQUFMLEdBQXFCc0IsQ0FBQyxDQUFDQyxZQUF2Qjs7QUFDQSxrQkFBSSxDQUFDckYsUUFBTCxDQUFjO0FBQUVhLHFCQUFPLEVBQUUsRUFBWDtBQUFlbUQsb0JBQU0sRUFBRTtBQUF2QixhQUFkOztBQUNBLGtCQUFJLENBQUNtQixVQUFMO0FBQ0QsV0FOSDtBQU9FLGlCQUFPLEVBQUUsTUFBSSxDQUFDbkMsUUFBTCxLQUFrQm9DLENBQUMsQ0FBQ2pFLEdBUC9CO0FBUUUsY0FBSSxFQUFDLE9BUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLEVBV0dpRSxDQUFDLENBQUNDLFlBWEwsQ0FEYztBQUFBLE9BQWYsQ0FqQkgsQ0FWRixFQTJDRSxNQUFDLDRDQUFEO0FBQUssU0FBQyxFQUFFO0FBQUVOLFdBQUMsRUFBRTtBQUFMLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsNkNBQUQ7QUFBTSxXQUFHLEVBQUMsT0FBVjtBQUFrQixpQkFBUyxFQUFDLFVBQTVCO0FBQXVDLGtCQUFVLEVBQUMsU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUlFLE1BQUMsOENBQUQ7QUFBTyxhQUFLLEVBQUMsUUFBYjtBQUFzQixrQkFBVSxFQUFDLEtBQWpDO0FBQXVDLFNBQUMsRUFBRTtBQUFFQSxXQUFDLEVBQUU7QUFBTCxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpREFBRDtBQUNFLGdCQUFRLEVBQUUsb0JBQU07QUFDZCxnQkFBSSxDQUFDbEIsTUFBTCxHQUFjLEVBQWQ7QUFDRCxTQUhIO0FBSUUsZUFBTyxFQUFFLEtBQUtBLE1BQUwsS0FBZ0IsRUFKM0I7QUFLRSxZQUFJLEVBQUMsT0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsU0FKRixFQWNFLE1BQUMsOENBQUQ7QUFBTyxhQUFLLEVBQUMsUUFBYjtBQUFzQixrQkFBVSxFQUFDLEtBQWpDO0FBQXVDLFNBQUMsRUFBRTtBQUFFa0IsV0FBQyxFQUFFO0FBQUwsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsaURBQUQ7QUFDRSxnQkFBUSxFQUFFLG9CQUFNO0FBQ2QsZ0JBQUksQ0FBQ2xCLE1BQUwsR0FBYyxRQUFkO0FBQ0QsU0FISDtBQUlFLGVBQU8sRUFBRSxLQUFLQSxNQUFMLEtBQWdCLFFBSjNCO0FBS0UsWUFBSSxFQUFDLE9BTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLFdBZEYsRUF3QkUsTUFBQyw4Q0FBRDtBQUFPLGFBQUssRUFBQyxRQUFiO0FBQXNCLGtCQUFVLEVBQUMsS0FBakM7QUFBdUMsU0FBQyxFQUFFO0FBQUVrQixXQUFDLEVBQUU7QUFBTCxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpREFBRDtBQUNFLGdCQUFRLEVBQUUsb0JBQU07QUFDZCxnQkFBSSxDQUFDbEIsTUFBTCxHQUFjLE1BQWQ7QUFDRCxTQUhIO0FBSUUsZUFBTyxFQUFFLEtBQUtBLE1BQUwsS0FBZ0IsTUFKM0I7QUFLRSxZQUFJLEVBQUMsT0FMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsU0F4QkYsQ0EzQ0YsQ0FsQkYsQ0EvTEYsQ0FERjtBQW9TRDs7OztFQXZYK0JwQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NmZmOThlZjRjMGExNzc1NGU1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNYXAsIEdvb2dsZUFwaVdyYXBwZXIsIE1hcmtlciwgSW5mb1dpbmRvdyB9IGZyb20gXCJnb29nbGUtbWFwcy1yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IERpdiB9IGZyb20gXCJhdG9taXplXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1hcENhcmQgZnJvbSBcIi4vbWFwX2NhcmRcIjtcclxuXHJcbmNvbnN0IG1hcFN0eWxlcyA9IHtcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgaGVpZ2h0OiBcIjEwMCVcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXB2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3RvcmVzOiB0aGlzLnByb3BzLnRhaWxvcnMsXHJcbiAgICAgIGFjdGl2ZVN0b3JlOiB7fSxcclxuICAgICAgc2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZFN0b3JlOiBbXSxcclxuICAgICAgc2VsZWN0ZWRJbWc6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25NYXJrZXJDbGljayA9IChwcm9wcywgbWFya2VyKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRTdG9yZTogcHJvcHMuZGF0YSxcclxuICAgICAgYWN0aXZlU3RvcmU6IG1hcmtlcixcclxuICAgICAgc2hvd2luZ0luZm9XaW5kb3c6IHRydWUsXHJcbiAgICAgIHNlbGVjdGVkSW1nOiBwcm9wcy5kYXRhLnN0b3JlQmFubmVyLnVybCxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZEltZyk7XHJcbiAgfTtcclxuXHJcbiAgcmVtb3ZlQWN0aXZlTWFya2VyID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93aW5nSW5mb1dpbmRvdzogZmFsc2UgfSk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWFwXHJcbiAgICAgICAgZ29vZ2xlPXt0aGlzLnByb3BzLmdvb2dsZX1cclxuICAgICAgICBtYXBUeXBlSWQ9XCJyb2FkbWFwXCJcclxuICAgICAgICB6b29tPXsxNX1cclxuICAgICAgICBzdHlsZT17bWFwU3R5bGVzfVxyXG4gICAgICAgIGluaXRpYWxDZW50ZXI9e3RoaXMucHJvcHMucG9zaXRpb259XHJcbiAgICAgICAgc3R5bGVzPXttYXBTdHlsZX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnN0b3Jlcy5tYXAoKHN0b3JlKSA9PiAoXHJcbiAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgIGtleT17c3RvcmUuX2lkfVxyXG4gICAgICAgICAgICBwb3NpdGlvbj17e1xyXG4gICAgICAgICAgICAgIGxhdDogc3RvcmUuZ2VvbG9jYXRpb24ubGF0LFxyXG4gICAgICAgICAgICAgIGxuZzogc3RvcmUuZ2VvbG9jYXRpb24ubG9uZyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdGl0bGU9e3N0b3JlLm5hbWV9XHJcbiAgICAgICAgICAgIGRhdGE9e3N0b3JlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxJbmZvV2luZG93XHJcbiAgICAgICAgICBtYXJrZXI9e3RoaXMuc3RhdGUuYWN0aXZlU3RvcmV9XHJcbiAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1saW5rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWFwQ2FyZFxyXG4gICAgICAgICAgICBzdG9yZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0b3JlfVxyXG4gICAgICAgICAgICBpbWFnZT17dGhpcy5zdGF0ZS5zZWxlY3RlZEltZ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9JbmZvV2luZG93PlxyXG4gICAgICA8L01hcD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKHtcclxuICBhcGlLZXk6IFwiQUl6YVN5RDB3Rk1xcXNLUDZWdVg1bGV6UVFHMFF1VUZMbTlLUXh3XCIsXHJcbn0pKE1hcHZpZXcpO1xyXG5cclxuLy8gQ3JlYXRlIGN1c3RvbSBtYXAgc3R5bGUgaGVyZTogaHR0cHM6Ly9tYXBzdHlsZS53aXRoZ29vZ2xlLmNvbS9cclxudmFyIG1hcFN0eWxlID0gW1xyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogXCIjNDQ0NDQ0XCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwibGFuZHNjYXBlXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiBcIiNmMmYyZjJcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogXCJwb2lcIixcclxuICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHNhdHVyYXRpb246IC0xMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsaWdodG5lc3M6IDQ1LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0XCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcclxuICAgIHN0eWxlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IFwib2ZmXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcclxuICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxyXG4gICAgc3R5bGVyczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiIzQ2YmNlY1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5maWxsXCIsXHJcbiAgICBzdHlsZXJzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogXCIjMjE5NmYzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29sLFxuICBEaXYsXG4gIEljb24sXG4gIFJvdyxcbiAgVGV4dCxcbiAgTW9kYWwsXG4gIExhYmVsLFxuICBSYWRpb2JveCxcbn0gZnJvbSBcImF0b21pemVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2FwcC1jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IE1hcE1vZGFsIGZyb20gXCIuLi9hcHAtY29tcG9uZW50cy9tb2JpbGVfbWFwX21vZGFsXCI7XG5pbXBvcnQgTWFwVmlldyBmcm9tIFwiLi4vYXBwLWNvbXBvbmVudHMvbWFwX3ZpZXdcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEVtcHR5TGlzdCBmcm9tIFwiLi4vYXBwLWNvbXBvbmVudHMvZW1wdHlfbGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IFwiXCI7XG4gICAgdGhpcy5nZW5kZXIgPSBcIkJvdGhcIjtcbiAgICB0aGlzLmNhdGVnb3J5X25hbWUgPSBcIkFsbCBjYXRlZ29yeVwiO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuTWFwOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHRhaWxvcnM6IHRoaXMucHJvcHMuaW5pdGlhbF90YWlsb3JzLFxuICAgICAgY2F0ZWdvcmllczogdGhpcy5wcm9wcy5pbml0aWFsX2NhdGVnb3JpZXMsXG4gICAgfTtcbiAgfVxuXG4gIC8vXG5cbiAgZ2V0VGFpbG9ycyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbjtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBhd2FpdCBheGlvcyh7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIH0sXG4gICAgICBwcm94eToge1xuICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXG4gICAgICAgIHBvcnQ6IDMxMjgsXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9zdGVlY2hpdC1hcGkuaGVyb2t1YXBwLmNvbS9zdG9yZXMvYCxcbiAgICAgIHBhcmFtczpcbiAgICAgICAgdGhpcy5jYXRlZ29yeSAhPT0gXCJcIlxuICAgICAgICAgID8geyBwcm9kdWN0Q2F0ZWdvcmllczogeyAkb2lkOiB0aGlzLmNhdGVnb3J5IH0gfVxuICAgICAgICAgIDogbnVsbCxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFpbG9yczogcmVzLmRhdGEgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBnZXRVc2VyTG9jYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB7XG4gICAgICAgICAgbGF0OiBjdXJyZW50LmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IGN1cnJlbnQuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvc2l0aW9uOiBjdXJyZW50UG9zaXRpb24gfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVXBkYXRpbmcgc3RhdGVzIHdpdGggd2lsbCBtb3VudFxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5nZXRVc2VyTG9jYXRpb24oKTtcbiAgfVxuXG4gIC8vIE9uIGxvYWRcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFVzZXJMb2NhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaW5pdGlhbF90YWlsb3JzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXRlZ29yaWVzLFxuICAgICAgdGFpbG9ycyxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGZpbHRlcixcbiAgICAgIG9wZW5NYXAsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxMYXlvdXQgZml4ZWQ9e3RydWV9PlxuICAgICAgICAgIDxEaXYgbT17eyByOiB7IHhzOiBcIjBcIiwgc206IFwiMFwiLCBtZDogXCIwXCIsIGxnOiBcIjQ1JVwiLCB4bDogXCI0NSVcIiB9IH19PlxuICAgICAgICAgICAgPERpdlxuICAgICAgICAgICAgICBkPVwiZmxleFwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgbT17eyBiOiBcIjFyZW1cIiB9fVxuICAgICAgICAgICAgICBwPXt7IGI6IFwiMC41cmVtXCIgfX1cbiAgICAgICAgICAgICAgYm9yZGVyPXt7IGI6IFwiMXB4IHNvbGlkXCIgfX1cbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJncmF5NTAwXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgcD17eyB4OiBcIjBcIiB9fVxuICAgICAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cImJsYWNrODAwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZmlsdGVyOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgIHByZWZpeD17XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiU2V0dGluZ3NcIiBzaXplPVwiMjBweFwiIG09e3sgcjogXCIwLjVyZW1cIiB9fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBGaWx0ZXJ7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgICBkPXt7XG4gICAgICAgICAgICAgICAgICAgIHhzOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgc206IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBtZDogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgbGc6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgIHhsOiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG09e3sgbDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIChDYXRlZ29yeToge3RoaXMuY2F0ZWdvcnlfbmFtZX0pXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBwPXt7IHg6IFwiMFwiIH19XG4gICAgICAgICAgICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yPVwiYmxhY2s4MDBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuTWFwOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgIHByZWZpeD17XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiTG9jYXRpb25cIiBzaXplPVwiMjBweFwiIG09e3sgcjogXCIwLjVyZW1cIiB9fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNYXAgVmlld1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAge3RhaWxvcnMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgPEVtcHR5TGlzdCAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICB0YWlsb3JzLm1hcCgodCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICBzaXplPXt7XG4gICAgICAgICAgICAgICAgICAgICAgeHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxnOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICB4bDogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHt0Ll9pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RGl2XG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbT17eyBiOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cImdyYXkzMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlclNoYWRvdz1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cImFsbCAwLjRzIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzOiBcIjE1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiMTUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCIxNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxnOiBcIjE4MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGw6IFwiMTgwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Quc3RvcmVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dC5zdG9yZUJhbm5lci51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RvcmVfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJyZ2JhKDAsMCwwLDAuNSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcz1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdiBwb3M9XCJhYnNvbHV0ZVwiIGJvdHRvbT1cIjBcIiBsZWZ0PVwiMFwiIHA9XCIxNXB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGV4dFNpemU9XCJzdWJoZWFkZXJcIiB0ZXh0Q29sb3I9XCIjZmZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dC5jaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0U2l6ZT1cInRpdGxlXCIgdGV4dENvbG9yPVwiI2ZmZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Quc3RvcmVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXYgcD17eyB0OiBcIjFyZW1cIiwgYjogXCIxcmVtXCIsIGw6IFwiMTVweFwiLCByOiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGQ9XCJmbGV4XCIgdGV4dFNpemU9XCJwYXJhZ3JhcGhcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU3RhclNvbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2FybmluZzgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtPXt7IHQ6IFwiLTNweFwiLCByOiBcIjZweFwiLCBsOiBcIi0zcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNC4yMXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBtPXt7IGw6IFwiNXB4XCIgfX0gdGV4dENvbG9yPVwiYmxhY2szMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgxMjkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtPXt7IGw6IFwiNnB4XCIsIHQ6IFwiLTVweFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJibGFjazMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBtPXt7IGw6IFwiNnB4XCIgfX0gdGV4dENvbG9yPVwiYmxhY2szMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhZ29zLCBOaWdlcmlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJsYWJlbFwiIGZvbnRGYW1pbHk9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxEaXYgZD1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBwcmVmaXg9e1xuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bG9hZGluZyA/IFwiTG9hZGluZzNcIiA6IFwiUmVmcmVzaFwifVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBtPXt7IHI6IFwiMC41cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJnPVwid2FybmluZzcwMFwiXG4gICAgICAgICAgICAgICAgaG92ZXJCZz1cIndhcm5pbmc4MDBcIlxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJjaXJjbGVcIlxuICAgICAgICAgICAgICAgIHA9e3sgcjogXCIxLjVyZW1cIiwgbDogXCIxcmVtXCIgfX1cbiAgICAgICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWRcIlxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiZ3JheTMwMFwiXG4gICAgICAgICAgICAgICAgaG92ZXJTaGFkb3c9XCI0XCJcbiAgICAgICAgICAgICAgICBtPXt7IHQ6IFwiMnJlbVwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IFwiTG9hZGluZ1wiIDogXCJMb2FkIG1vcmVcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDxNYXBNb2RhbFxuICAgICAgICAgIGlzT3Blbj17b3Blbk1hcH1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3Blbk1hcDogZmFsc2UgfSl9XG4gICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICAgIHRhaWxvcnM9e3RhaWxvcnN9XG4gICAgICAgIC8+XG4gICAgICAgIDxEaXZcbiAgICAgICAgICBwb3M9XCJmaXhlZFwiXG4gICAgICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgICAgICB0b3A9XCI5MHB4XCJcbiAgICAgICAgICB3PVwiNDUlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXBcIlxuICAgICAgICAgIGJnPVwiI2ZmZlwiXG4gICAgICAgICAgZD17e1xuICAgICAgICAgICAgeHM6IFwibm9uZVwiLFxuICAgICAgICAgICAgc206IFwibm9uZVwiLFxuICAgICAgICAgICAgbWQ6IFwibm9uZVwiLFxuICAgICAgICAgICAgbGc6IFwiYmxvY2tcIixcbiAgICAgICAgICAgIHhsOiBcImJsb2NrXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNYXBWaWV3IHBvc2l0aW9uPXtwb3NpdGlvbn0gdGFpbG9ycz17dGFpbG9yc30gLz5cbiAgICAgICAgPC9EaXY+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlzT3Blbj17ZmlsdGVyfVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXI6IGZhbHNlIH0pfVxuICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiXG4gICAgICAgICAgbWF4Vz1cIjIwcmVtXCJcbiAgICAgICAgICBiZz1cIiNmZmZcIlxuICAgICAgICAgIHA9XCIyMHB4XCJcbiAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgbmFtZT1cIkNyb3NzXCJcbiAgICAgICAgICAgIHBvcz1cImFic29sdXRlXCJcbiAgICAgICAgICAgIHRvcD1cIjFyZW1cIlxuICAgICAgICAgICAgcmlnaHQ9XCIxcmVtXCJcbiAgICAgICAgICAgIHNpemU9XCIzMnB4XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXI6IGZhbHNlIH0pfVxuICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGl2PlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgdGFnPVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgdGV4dFNpemU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgbT17eyBiOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGSUxURVIgUkVTVUxUXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8RGl2IG09e3sgdDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgIDxUZXh0IHRhZz1cImxhYmVsXCIgdGV4dENvbG9yPVwiYmxhY2syMDBcIiBmb250RmFtaWx5PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8TGFiZWwgYWxpZ249XCJjZW50ZXJcIiB0ZXh0V2VpZ2h0PVwiNjAwXCIgbT17eyB0OiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8UmFkaW9ib3hcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5X25hbWUgPSBcIkFsbCBjYXRlZ29yeVwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFpbG9yczogW10sIGZpbHRlcjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGFpbG9ycygpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuY2F0ZWdvcnkgPT09IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgQWxsIHRhaWxvcnNcbiAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjKSA9PiAoXG4gICAgICAgICAgICAgICAgPExhYmVsIGFsaWduPVwiY2VudGVyXCIgdGV4dFdlaWdodD1cIjYwMFwiIG09e3sgdDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8UmFkaW9ib3hcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gYy5faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeV9uYW1lID0gYy5jYXRlZ29yeU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhaWxvcnM6IFtdLCBmaWx0ZXI6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGFpbG9ycygpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmNhdGVnb3J5ID09PSBjLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdW50XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7Yy5jYXRlZ29yeU5hbWV9XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICAgIDxEaXYgbT17eyB0OiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgPFRleHQgdGFnPVwibGFiZWxcIiB0ZXh0Q29sb3I9XCJibGFjazIwMFwiIGZvbnRGYW1pbHk9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgR2VuZGVyXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPExhYmVsIGFsaWduPVwiY2VudGVyXCIgdGV4dFdlaWdodD1cIjYwMFwiIG09e3sgdDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPFJhZGlvYm94XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmRlciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5nZW5kZXIgPT09IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgQm90aFxuICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8TGFiZWwgYWxpZ249XCJjZW50ZXJcIiB0ZXh0V2VpZ2h0PVwiNjAwXCIgbT17eyB0OiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8UmFkaW9ib3hcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZGVyID0gXCJGZW1hbGVcIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmdlbmRlciA9PT0gXCJGZW1hbGVcIn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBGZW1hbGVcbiAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPExhYmVsIGFsaWduPVwiY2VudGVyXCIgdGV4dFdlaWdodD1cIjYwMFwiIG09e3sgdDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPFJhZGlvYm94XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmRlciA9IFwiTWFsZVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuZ2VuZGVyID09PSBcIk1hbGVcIn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBNYWxlXG4gICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBjYXRlZ29yaWVzX3JlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3N0ZWVjaGl0LWFwaS5oZXJva3VhcHAuY29tL2NhdGVnb3JpZXMvYFxuICApO1xuICBjb25zdCB0YWlsb3JzX3JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3N0ZWVjaGl0LWFwaS5oZXJva3VhcHAuY29tL3N0b3Jlc2ApO1xuXG4gIGNvbnN0IGluaXRpYWxfdGFpbG9ycyA9IGF3YWl0IHRhaWxvcnNfcmVzLmpzb24oKTtcbiAgY29uc3QgaW5pdGlhbF9jYXRlZ29yaWVzID0gYXdhaXQgY2F0ZWdvcmllc19yZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGluaXRpYWxfdGFpbG9ycyxcbiAgICAgIGluaXRpYWxfY2F0ZWdvcmllcyxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==