webpackHotUpdate_N_E("pages/offer",{

/***/ "./components/request_offer_form_fabric.js":
/*!*************************************************!*\
  !*** ./components/request_offer_form_fabric.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestOfferFormFabric; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _buttons_main_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buttons/main_button */ "./components/buttons/main_button.js");



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\components\\request_offer_form_fabric.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









function RequestOfferFormFabric(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      pin = _useState2[0],
      setPin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      getting_measurement = _useState3[0],
      setGetting_measurement = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      share_measurement = _useState4[0],
      setShare_measurement = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      gender = _useState5[0],
      setGender = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      size = _useState6[0],
      setSize = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      error = _useState7[0],
      setError = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])("Error"),
      errorMsg = _useState8[0],
      setErrorMsg = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      price = _useState9[0],
      setPrice = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(new Date()),
      deliveryDate = _useState10[0],
      setDeliveryDate = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])("1"),
      quantity = _useState11[0],
      setQuantity = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      unit = _useState13[0],
      setUnit = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      done = _useState14[0],
      setDone = _useState14[1]; // Handle enter pin


  var handleSetPin = function handleSetPin(e) {
    if (pin.length !== 4) {
      setPin(e.target.value);
    } else {
      return false;
    }
  };

  var price_n = props.product_info.mPrice;
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.auth;
  });
  var token = auth.token;
  var id = auth._id;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  console.log(props.product_info); // Handle get measurement

  var handleGetMeasurement = /*#__PURE__*/function () {
    var _ref = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (share_measurement) {
                _context2.next = 6;
                break;
              }

              setGetting_measurement(true);
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "GET",
                url: "".concat("https://api.steechit.com/", "measurements/"),
                params: {
                  user: id
                }
              }).then( /*#__PURE__*/function () {
                var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                  var gend;
                  return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(res.data.length !== 0)) {
                            _context.next = 8;
                            break;
                          }

                          gend = res.data[0].gender;
                          setSize(res.data[0]._id);
                          setShare_measurement(true);
                          _context.next = 6;
                          return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                            headers: {
                              "Access-Control-Allow-Origin": "*",
                              Authorization: "Bearer ".concat(token)
                            },
                            proxy: {
                              host: "104.236.174.88",
                              port: 3128
                            },
                            method: "GET",
                            url: "".concat("https://api.steechit.com/").concat(gend === "M" ? "menMeasurement" : "womenMeasurement", "/"),
                            params: {
                              user: id
                            }
                          }).then(function (res) {
                            setGender(res.data._id);
                          });

                        case 6:
                          _context.next = 10;
                          break;

                        case 8:
                          setErrorMsg("You don't have any measurement to share");
                          setError(true);

                        case 10:
                          console.log(res);

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }())["catch"](function (err) {
                console.log(err);
                setErrorMsg("Something went wrong!");
                setError(true);
              })["finally"](function () {
                return setGetting_measurement(false);
              });

            case 4:
              _context2.next = 7;
              break;

            case 6:
              setShare_measurement(false);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleGetMeasurement() {
      return _ref.apply(this, arguments);
    };
  }(); // Handle Submit


  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setLoading(true);
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "GET",
                url: "".concat("https://api.steechit.com/", "wallet/"),
                params: {
                  user: id
                }
              }).then( /*#__PURE__*/function () {
                var _ref4 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(res) {
                  var pro_price, wallet_bal, data;
                  return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          pro_price = parseFloat(price_n) * parseFloat(quantity);
                          wallet_bal = parseFloat(res.data[0].amount);
                          data = {
                            wallet: res.data[0]._id,
                            PTN: pin,
                            store: props.store,
                            consideration: pro_price,
                            deliveryDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(deliveryDate).format("YYYY-MM-DD"),
                            sample: [props.product],
                            user: id,
                            initiator: "User",
                            measurment: {
                              unit: "YD",
                              size: 29
                            },
                            qauntity: parseFloat(quantity),
                            openOffer: true,
                            type: "order"
                          };
                          console.log(res);

                          if (!(pro_price > wallet_bal)) {
                            _context3.next = 9;
                            break;
                          }

                          setErrorMsg("You don't have enough funds to continue, fund your wallet");
                          setError(true);
                          _context3.next = 12;
                          break;

                        case 9:
                          console.log(data);
                          _context3.next = 12;
                          return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                            headers: {
                              "Access-Control-Allow-Origin": "*",
                              Authorization: "Bearer ".concat(token)
                            },
                            proxy: {
                              host: "104.236.174.88",
                              port: 3128
                            },
                            method: "POST",
                            url: "".concat("https://api.steechit.com/", "offerFabrics"),
                            data: data
                          }).then(function (ress) {
                            setErrorMsg("Offer sent successfully");
                            setError(true);
                            setDone(true);
                          })["catch"](function (er) {
                            var msg = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(er, "response.data.message") || e.message;
                            console.log(msg);
                            setErrorMsg(msg);
                            setError(true);
                          });

                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }())["catch"](function (err) {
                console.log(err);
                setErrorMsg("Something went wrong!");
                setError(true);
              })["finally"](function () {
                return setLoading(false);
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, "Yards", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "",
    value: quantity,
    onChange: function onChange(e) {
      setQuantity(e.target.value);
    },
    type: "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, "Price (Per yard)", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    textSize: "subheader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }, parseFloat(price_n) * parseFloat(quantity))), __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: function onClick() {
      return setIsOpen(true);
    },
    title: "Continue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: isOpen,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    align: {
      xs: "flex-start",
      sm: "flex-start",
      md: "flex-start",
      lg: "center",
      xl: "center"
    },
    rounded: "md",
    maxW: "25rem",
    p: "20px",
    bg: "#fff",
    overflow: "hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "Cross",
    pos: "absolute",
    top: "1rem",
    right: "1rem",
    size: "32px",
    onClick: function onClick() {
      return setIsOpen(false);
    },
    cursor: "pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 9
    }
  }), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    textAlign: "center",
    tag: "header",
    textSize: "title",
    m: {
      b: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 11
    }
  }, "Enter your pin"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 11
    }
  }, "PIN", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    value: pin,
    onChange: function onChange(e) {
      return handleSetPin(e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }
  })), __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleSubmit,
    loading: loading,
    title: "Make offer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 11
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Notification"], {
    bg: "warning700",
    isOpen: error,
    onClose: function onClose() {
      setTimeout(function () {
        setError(false);
      }, 2000);
    },
    prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "CloseSolid",
      color: "white",
      size: "18px",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 11
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }
  }, errorMsg), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: done,
    onClose: function onClose() {
      return setDone(true);
    },
    align: {
      xs: "flex-start",
      sm: "flex-start",
      md: "flex-start",
      lg: "center",
      xl: "center"
    },
    rounded: "md",
    maxW: "25rem",
    p: "20px",
    bg: "#fff",
    overflow: "hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 9
    }
  }, "Kindly the contact this store to follow up on your order"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/profile/contract",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 9
    }
  }, __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Okay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 11
    }
  }))));
}

_s(RequestOfferFormFabric, "NypbTrJsc0wSi2j890o/RFJ+jME=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = RequestOfferFormFabric;

var _c;

$RefreshReg$(_c, "RequestOfferFormFabric");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0X29mZmVyX2Zvcm1fZmFicmljLmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RPZmZlckZvcm1GYWJyaWMiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicGluIiwic2V0UGluIiwiZ2V0dGluZ19tZWFzdXJlbWVudCIsInNldEdldHRpbmdfbWVhc3VyZW1lbnQiLCJzaGFyZV9tZWFzdXJlbWVudCIsInNldFNoYXJlX21lYXN1cmVtZW50IiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwic2l6ZSIsInNldFNpemUiLCJlcnJvciIsInNldEVycm9yIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsInByaWNlIiwic2V0UHJpY2UiLCJEYXRlIiwiZGVsaXZlcnlEYXRlIiwic2V0RGVsaXZlcnlEYXRlIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5pdCIsInNldFVuaXQiLCJkb25lIiwic2V0RG9uZSIsImhhbmRsZVNldFBpbiIsImUiLCJsZW5ndGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByaWNlX24iLCJwcm9kdWN0X2luZm8iLCJtUHJpY2UiLCJhdXRoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRva2VuIiwiaWQiLCJfaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlR2V0TWVhc3VyZW1lbnQiLCJBeGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJveHkiLCJob3N0IiwicG9ydCIsIm1ldGhvZCIsInVybCIsInByb2Nlc3MiLCJwYXJhbXMiLCJ1c2VyIiwidGhlbiIsInJlcyIsImRhdGEiLCJnZW5kIiwiZXJyIiwiaGFuZGxlU3VibWl0IiwicHJvX3ByaWNlIiwicGFyc2VGbG9hdCIsIndhbGxldF9iYWwiLCJhbW91bnQiLCJ3YWxsZXQiLCJQVE4iLCJzdG9yZSIsImNvbnNpZGVyYXRpb24iLCJtb21lbnQiLCJmb3JtYXQiLCJzYW1wbGUiLCJwcm9kdWN0IiwiaW5pdGlhdG9yIiwibWVhc3VybWVudCIsInFhdW50aXR5Iiwib3Blbk9mZmVyIiwidHlwZSIsInJlc3MiLCJlciIsIm1zZyIsImdldCIsIm1lc3NhZ2UiLCJiIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInNldFRpbWVvdXQiLCJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLHNCQUFULENBQWdDQyxLQUFoQyxFQUF1QztBQUFBOztBQUFBLGtCQUN4QkMsc0RBQVEsQ0FBQyxLQUFELENBRGdCO0FBQUEsTUFDN0NDLE1BRDZDO0FBQUEsTUFDckNDLFNBRHFDOztBQUFBLG1CQUU5QkYsc0RBQVEsQ0FBQyxFQUFELENBRnNCO0FBQUEsTUFFN0NHLEdBRjZDO0FBQUEsTUFFeENDLE1BRndDOztBQUFBLG1CQUdFSixzREFBUSxDQUFDLEtBQUQsQ0FIVjtBQUFBLE1BRzdDSyxtQkFINkM7QUFBQSxNQUd4QkMsc0JBSHdCOztBQUFBLG1CQUlGTixzREFBUSxDQUFDLEtBQUQsQ0FKTjtBQUFBLE1BSTdDTyxpQkFKNkM7QUFBQSxNQUkxQkMsb0JBSjBCOztBQUFBLG1CQUt4QlIsc0RBQVEsQ0FBQyxFQUFELENBTGdCO0FBQUEsTUFLN0NTLE1BTDZDO0FBQUEsTUFLckNDLFNBTHFDOztBQUFBLG1CQU01QlYsc0RBQVEsQ0FBQyxFQUFELENBTm9CO0FBQUEsTUFNN0NXLElBTjZDO0FBQUEsTUFNdkNDLE9BTnVDOztBQUFBLG1CQU8xQlosc0RBQVEsQ0FBQyxLQUFELENBUGtCO0FBQUEsTUFPN0NhLEtBUDZDO0FBQUEsTUFPdENDLFFBUHNDOztBQUFBLG1CQVFwQmQsc0RBQVEsQ0FBQyxPQUFELENBUlk7QUFBQSxNQVE3Q2UsUUFSNkM7QUFBQSxNQVFuQ0MsV0FSbUM7O0FBQUEsbUJBUzFC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RCxDQUFiO0FBQUEsS0FGWDtBQUdFLFNBQUssRUFBRTtBQUNMNEQsUUFBRSxFQUFFLFlBREM7QUFFTEMsUUFBRSxFQUFFLFlBRkM7QUFHTEMsUUFBRSxFQUFFLFlBSEM7QUFJTEMsUUFBRSxFQUFFLFFBSkM7QUFLTEMsUUFBRSxFQUFFO0FBTEMsS0FIVDtBQVVFLFdBQU8sRUFBQyxJQVZWO0FBV0UsUUFBSSxFQUFDLE9BWFA7QUFZRSxLQUFDLEVBQUMsTUFaSjtBQWFFLE1BQUUsRUFBQyxNQWJMO0FBY0UsWUFBUSxFQUFDLFFBZFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWdCRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBaEJGLEVBaUJFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBWSxTQUFLLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakJGLENBMUpGLENBREY7QUFrTEQ7O0dBdld1Qi9GLHNCO1VBNEJUeUMsdUQsRUFLRU0scUQ7OztLQWpDTy9DLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29mZmVyLmQ0MGU0NmY0ZWZmMjFkN2YzYmMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uLCBJbnB1dCwgTGFiZWwsIE1vZGFsLCBOb3RpZmljYXRpb24sIFN3aXRjaCwgVGV4dCB9IGZyb20gXCJhdG9taXplXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCIuL2J1dHRvbnMvbWFpbl9idXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcXVlc3RPZmZlckZvcm1GYWJyaWMocHJvcHMpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwaW4sIHNldFBpbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZ2V0dGluZ19tZWFzdXJlbWVudCwgc2V0R2V0dGluZ19tZWFzdXJlbWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NoYXJlX21lYXN1cmVtZW50LCBzZXRTaGFyZV9tZWFzdXJlbWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2dlbmRlciwgc2V0R2VuZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUoXCJFcnJvclwiKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZWxpdmVyeURhdGUsIHNldERlbGl2ZXJ5RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKFwiMVwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VuaXQsIHNldFVuaXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RvbmUsIHNldERvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBIYW5kbGUgZW50ZXIgcGluXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNldFBpbiA9IChlKSA9PiB7XHJcbiAgICBpZiAocGluLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgICBzZXRQaW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaWNlX24gPSBwcm9wcy5wcm9kdWN0X2luZm8ubVByaWNlO1xyXG5cclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBhdXRoLnRva2VuO1xyXG4gIGNvbnN0IGlkID0gYXV0aC5faWQ7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9wcy5wcm9kdWN0X2luZm8pO1xyXG5cclxuICAvLyBIYW5kbGUgZ2V0IG1lYXN1cmVtZW50XHJcbiAgY29uc3QgaGFuZGxlR2V0TWVhc3VyZW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNoYXJlX21lYXN1cmVtZW50KSB7XHJcbiAgICAgIHNldEdldHRpbmdfbWVhc3VyZW1lbnQodHJ1ZSk7XHJcbiAgICAgIGF3YWl0IEF4aW9zKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9bWVhc3VyZW1lbnRzL2AsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB1c2VyOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZ2VuZCA9IHJlcy5kYXRhWzBdLmdlbmRlcjtcclxuICAgICAgICAgICAgc2V0U2l6ZShyZXMuZGF0YVswXS5faWQpO1xyXG4gICAgICAgICAgICBzZXRTaGFyZV9tZWFzdXJlbWVudCh0cnVlKTtcclxuICAgICAgICAgICAgYXdhaXQgQXhpb3Moe1xyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH0ke1xyXG4gICAgICAgICAgICAgICAgZ2VuZCA9PT0gXCJNXCIgPyBcIm1lbk1lYXN1cmVtZW50XCIgOiBcIndvbWVuTWVhc3VyZW1lbnRcIlxyXG4gICAgICAgICAgICAgIH0vYCxcclxuICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEdlbmRlcihyZXMuZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yTXNnKFwiWW91IGRvbid0IGhhdmUgYW55IG1lYXN1cmVtZW50IHRvIHNoYXJlXCIpO1xyXG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldEVycm9yTXNnKFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xyXG4gICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiBzZXRHZXR0aW5nX21lYXN1cmVtZW50KGZhbHNlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaGFyZV9tZWFzdXJlbWVudChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gSGFuZGxlIFN1Ym1pdFxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgYXdhaXQgQXhpb3Moe1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9d2FsbGV0L2AsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb19wcmljZSA9IHBhcnNlRmxvYXQocHJpY2VfbikgKiBwYXJzZUZsb2F0KHF1YW50aXR5KTtcclxuICAgICAgICBjb25zdCB3YWxsZXRfYmFsID0gcGFyc2VGbG9hdChyZXMuZGF0YVswXS5hbW91bnQpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgd2FsbGV0OiByZXMuZGF0YVswXS5faWQsXHJcbiAgICAgICAgICBQVE46IHBpbixcclxuICAgICAgICAgIHN0b3JlOiBwcm9wcy5zdG9yZSxcclxuICAgICAgICAgIGNvbnNpZGVyYXRpb246IHByb19wcmljZSxcclxuICAgICAgICAgIGRlbGl2ZXJ5RGF0ZTogbW9tZW50KGRlbGl2ZXJ5RGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcclxuICAgICAgICAgIHNhbXBsZTogW3Byb3BzLnByb2R1Y3RdLFxyXG4gICAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgICAgICBpbml0aWF0b3I6IFwiVXNlclwiLFxyXG4gICAgICAgICAgbWVhc3VybWVudDoge1xyXG4gICAgICAgICAgICB1bml0OiBcIllEXCIsXHJcbiAgICAgICAgICAgIHNpemU6IDI5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHFhdW50aXR5OiBwYXJzZUZsb2F0KHF1YW50aXR5KSxcclxuICAgICAgICAgIG9wZW5PZmZlcjogdHJ1ZSxcclxuICAgICAgICAgIHR5cGU6IFwib3JkZXJcIixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgICAgICBpZiAocHJvX3ByaWNlID4gd2FsbGV0X2JhbCkge1xyXG4gICAgICAgICAgc2V0RXJyb3JNc2coXHJcbiAgICAgICAgICAgIFwiWW91IGRvbid0IGhhdmUgZW5vdWdoIGZ1bmRzIHRvIGNvbnRpbnVlLCBmdW5kIHlvdXIgd2FsbGV0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBhd2FpdCBBeGlvcyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9b2ZmZXJGYWJyaWNzYCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3JNc2coXCJPZmZlciBzZW50IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICAgICAgICBzZXREb25lKHRydWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbXNnID0gZ2V0KGVyLCBcInJlc3BvbnNlLmRhdGEubWVzc2FnZVwiKSB8fCBlLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgICBzZXRFcnJvck1zZyhtc2cpO1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRFcnJvck1zZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgIFlhcmRzXHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFF1YW50aXR5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICBQcmljZSAoUGVyIHlhcmQpXHJcbiAgICAgICAgICA8VGV4dCB0ZXh0U2l6ZT1cInN1YmhlYWRlclwiPlxyXG4gICAgICAgICAgICB7cGFyc2VGbG9hdChwcmljZV9uKSAqIHBhcnNlRmxvYXQocXVhbnRpdHkpfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgey8qIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgRGVsaXZlcnkgZGF0ZVxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgdmFsdWU9e2RlbGl2ZXJ5RGF0ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZWxpdmVyeURhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGFiZWw+ICovfVxyXG5cclxuICAgICAgICB7LyoqIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgR2VuZGVyXHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vbmVcIj5TZWxlY3QgZ2VuZGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNXCI+TWFsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9MYWJlbD5cclxuXHJcbiAgICAgICAgPExhYmVsXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHZXRNZWFzdXJlbWVudH1cclxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgIHRleHRXZWlnaHQ9XCI2MDBcIlxyXG4gICAgICAgICAgbT17eyBiOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17c2hhcmVfbWVhc3VyZW1lbnR9IGlzTG9hZGluZz17Z2V0dGluZ19tZWFzdXJlbWVudH0gLz5cclxuICAgICAgICAgIFNoYXJlIG1lYXN1cmVtZW50IHdpdGggdGFpbG9yXHJcbiAgICAgICAgPC9MYWJlbD4gKi99XHJcbiAgICAgICAgey8qKiAhc2hhcmVfbWVhc3VyZW1lbnQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgTWVhc3VyZW1lbnQgVW5pdFxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VW5pdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dW5pdH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY3QgdW5pdCBvZiBtZWFzdXJlbWVudDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIllEXCI+WWFyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNNXCI+Q2VudGltZXRlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1cIj5NZXRlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBTaXplXHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NpemV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNpemUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjdCBzaXplPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU1wiPlNtYWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxcIj5MYXJnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlhMXCI+RXh0cmEgTGFyZ2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJYWExcIj5FeHRyYSBFeHRyYSBMYXJnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0xhYmVsPntcIiBcIn1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgKi99XHJcbiAgICAgICAgPE1haW5CdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfSB0aXRsZT1cIkNvbnRpbnVlXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxyXG4gICAgICAgIGFsaWduPXt7XHJcbiAgICAgICAgICB4czogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBzbTogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBtZDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBsZzogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHhsOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcm91bmRlZD1cIm1kXCJcclxuICAgICAgICBtYXhXPVwiMjVyZW1cIlxyXG4gICAgICAgIHA9XCIyMHB4XCJcclxuICAgICAgICBiZz1cIiNmZmZcIlxyXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICBuYW1lPVwiQ3Jvc3NcIlxyXG4gICAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgdG9wPVwiMXJlbVwiXHJcbiAgICAgICAgICByaWdodD1cIjFyZW1cIlxyXG4gICAgICAgICAgc2l6ZT1cIjMycHhcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICB0YWc9XCJoZWFkZXJcIlxyXG4gICAgICAgICAgICB0ZXh0U2l6ZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgbT17eyBiOiBcIjJyZW1cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFbnRlciB5b3VyIHBpblxyXG4gICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICBQSU5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bpbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNldFBpbihlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8TWFpbkJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgIHRpdGxlPVwiTWFrZSBvZmZlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE5vdGlmaWNhdGlvblxyXG4gICAgICAgIGJnPVwid2FybmluZzcwMFwiXHJcbiAgICAgICAgaXNPcGVuPXtlcnJvcn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBwcmVmaXg9e1xyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgbmFtZT1cIkNsb3NlU29saWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICBtPXt7IHI6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2Vycm9yTXNnfVxyXG4gICAgICA8L05vdGlmaWNhdGlvbj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXtkb25lfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldERvbmUodHJ1ZSl9XHJcbiAgICAgICAgYWxpZ249e3tcclxuICAgICAgICAgIHhzOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIHNtOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIG1kOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIGxnOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgeGw6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICByb3VuZGVkPVwibWRcIlxyXG4gICAgICAgIG1heFc9XCIyNXJlbVwiXHJcbiAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgIGJnPVwiI2ZmZlwiXHJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQ+S2luZGx5IHRoZSBjb250YWN0IHRoaXMgc3RvcmUgdG8gZm9sbG93IHVwIG9uIHlvdXIgb3JkZXI8L1RleHQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL2NvbnRyYWN0XCI+XHJcbiAgICAgICAgICA8TWFpbkJ1dHRvbiB0aXRsZT1cIk9rYXlcIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==