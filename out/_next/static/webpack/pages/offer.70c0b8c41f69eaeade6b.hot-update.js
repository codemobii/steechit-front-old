webpackHotUpdate_N_E("pages/offer",{

/***/ "./components/request_offer_form_tailor.js":
/*!*************************************************!*\
  !*** ./components/request_offer_form_tailor.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestOfferFormTailor; });
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



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\components\\request_offer_form_tailor.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









function RequestOfferFormTailor(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var sumprice = parseFloat(props.productInfo.mPrice) + parseFloat(props.productInfo.sPrice);

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
      noMeasurement = _useState12[0],
      setNoMeasurement = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      loading = _useState13[0],
      setLoading = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      done = _useState14[0],
      setDone = _useState14[1]; // Handle enter pin


  var handleSetPin = function handleSetPin(e) {
    if (pin.length !== 5) {
      setPin(e.target.value);
    } else {
      return false;
    }
  };

  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.auth;
  });
  var token = auth.token;
  var id = auth._id;
  console.log(props); // Handle get measurement

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
                          _context.next = 11;
                          break;

                        case 8:
                          setErrorMsg("You don't have any measurement to share");
                          setError(true);
                          setNoMeasurement(true);

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
              _context2.next = 8;
              break;

            case 6:
              setShare_measurement(false);
              setNoMeasurement(false);

            case 8:
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
                          pro_price = parseFloat(price);
                          wallet_bal = parseFloat(res.data[0].bal);
                          data = {
                            wallet: res.data[0]._id,
                            PTN: pin,
                            store: props.store,
                            consideration: props.openOffer ? parseFloat(sumprice) * parseFloat(quantity) : parseFloat(pro_price) * parseFloat(quantity),
                            deliveryDate: moment__WEBPACK_IMPORTED_MODULE_5___default()(deliveryDate).format("YYYY-MM-DD"),
                            sample: [props.product],
                            user: id,
                            initiator: "User",
                            measurment: {
                              male: gender,
                              standard: size
                            },
                            qauntity: parseFloat(quantity),
                            openOffer: props.openOffer,
                            type: props.openOffer ? "order" : "offer"
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
                            url: "".concat("https://api.steechit.com/", "offerTailors"),
                            data: data
                          }).then(function (ress) {
                            setErrorMsg("Offer sent successfully");
                            setError(true);
                            setIsOpen(false);
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
      lineNumber: 208,
      columnNumber: 7
    }
  }, !props.openOffer && __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, "Consideration price", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "",
    value: price,
    onChange: function onChange(e) {
      return setPrice(e.target.value);
    },
    type: "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }, "Delivery date", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "",
    value: deliveryDate,
    onChange: function onChange(e) {
      return setDeliveryDate(e.target.value);
    },
    type: "date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
      lineNumber: 230,
      columnNumber: 9
    }
  }, "Gender", __jsx("select", {
    onChange: function onChange(e) {
      return setGender(e.target.value);
    },
    value: gender,
    className: "select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "None",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, "Select gender"), __jsx("option", {
    value: "F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "Female"), __jsx("option", {
    value: "M",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, "Male"))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    onClick: handleGetMeasurement,
    align: "center",
    textWeight: "600",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    checked: share_measurement,
    isLoading: getting_measurement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 11
    }
  }), "Share measurement with tailor"), noMeasurement && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    m: {
      b: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, "Please create your measurement", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/profile/settings?action=measurement",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    m: {
      l: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, "here")))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    value: quantity,
    onChange: function onChange(e) {
      return setQuantity(e.target.value);
    },
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 9
    }
  }, "Quantity", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "",
    type: "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 11
    }
  }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, "Total price * quantity (", props.openOffer ? parseFloat(sumprice) * parseFloat(quantity) : parseFloat(price) * parseFloat(quantity), ")")), __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: function onClick() {
      return setIsOpen(true);
    },
    title: "Continue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
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
      lineNumber: 281,
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
      lineNumber: 297,
      columnNumber: 9
    }
  }), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
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
      lineNumber: 307,
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
      lineNumber: 316,
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
      lineNumber: 318,
      columnNumber: 13
    }
  })), __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleSubmit,
    loading: loading,
    title: "Make offer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
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
        lineNumber: 340,
        columnNumber: 11
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
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
      lineNumber: 350,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 9
    }
  }, "Kindly the contact this store to follow up on your order"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/profile/contract",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 9
    }
  }, __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Okay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }))));
}

_s(RequestOfferFormTailor, "cdqf2eQCEY1kl1M7nGSsgnaKByg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c = RequestOfferFormTailor;

var _c;

$RefreshReg$(_c, "RequestOfferFormTailor");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0X29mZmVyX2Zvcm1fdGFpbG9yLmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RPZmZlckZvcm1UYWlsb3IiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInN1bXByaWNlIiwicGFyc2VGbG9hdCIsInByb2R1Y3RJbmZvIiwibVByaWNlIiwic1ByaWNlIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwaW4iLCJzZXRQaW4iLCJnZXR0aW5nX21lYXN1cmVtZW50Iiwic2V0R2V0dGluZ19tZWFzdXJlbWVudCIsInNoYXJlX21lYXN1cmVtZW50Iiwic2V0U2hhcmVfbWVhc3VyZW1lbnQiLCJnZW5kZXIiLCJzZXRHZW5kZXIiLCJzaXplIiwic2V0U2l6ZSIsImVycm9yIiwic2V0RXJyb3IiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwicHJpY2UiLCJzZXRQcmljZSIsIkRhdGUiLCJkZWxpdmVyeURhdGUiLCJzZXREZWxpdmVyeURhdGUiLCJxdWFudGl0eSIsInNldFF1YW50aXR5Iiwibm9NZWFzdXJlbWVudCIsInNldE5vTWVhc3VyZW1lbnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRvbmUiLCJzZXREb25lIiwiaGFuZGxlU2V0UGluIiwiZSIsImxlbmd0aCIsInRhcmdldCIsInZhbHVlIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0b2tlbiIsImlkIiwiX2lkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUdldE1lYXN1cmVtZW50IiwiQXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicGFyYW1zIiwidXNlciIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZ2VuZCIsImVyciIsImhhbmRsZVN1Ym1pdCIsInByb19wcmljZSIsIndhbGxldF9iYWwiLCJiYWwiLCJ3YWxsZXQiLCJQVE4iLCJzdG9yZSIsImNvbnNpZGVyYXRpb24iLCJvcGVuT2ZmZXIiLCJtb21lbnQiLCJmb3JtYXQiLCJzYW1wbGUiLCJwcm9kdWN0IiwiaW5pdGlhdG9yIiwibWVhc3VybWVudCIsIm1hbGUiLCJzdGFuZGFyZCIsInFhdW50aXR5IiwidHlwZSIsInJlc3MiLCJlciIsIm1zZyIsImdldCIsIm1lc3NhZ2UiLCJiIiwibCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJzZXRUaW1lb3V0IiwiciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxzQkFBVCxDQUFnQ0MsS0FBaEMsRUFBdUM7QUFBQTs7QUFDcEQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLFFBQVEsR0FDWkMsVUFBVSxDQUFDSixLQUFLLENBQUNLLFdBQU4sQ0FBa0JDLE1BQW5CLENBQVYsR0FBdUNGLFVBQVUsQ0FBQ0osS0FBSyxDQUFDSyxXQUFOLENBQWtCRSxNQUFuQixDQURuRDs7QUFIb0Qsa0JBTXhCQyxzREFBUSxDQUFDLEtBQUQsQ0FOZ0I7QUFBQSxNQU03Q0MsTUFONkM7QUFBQSxNQU1yQ0MsU0FOcUM7O0FBQUEsbUJBTzlCRixzREFBUSxDQUFDLEVBQUQsQ0FQc0I7QUFBQSxNQU83Q0csR0FQNkM7QUFBQSxNQU94Q0MsTUFQd0M7O0FBQUEsbUJBUUVKLHNEQUFRLENBQUMsS0FBRCxDQVJWO0FBQUEsTUFRN0NLLG1CQVI2QztBQUFBLE1BUXhCQyxzQkFSd0I7O0FBQUEsbUJBU0ZOLHNEQUFRLENBQUMsS0FBRCxDQVROO0FBQUEsTUFTN0NPLGlCQVQ2QztBQUFBLE1BUzFCQyxvQkFUMEI7O0FBQUEsbUJBVXhCUixzREFBUSxDQUFDLEVBQUQsQ0FWZ0I7QUFBQSxNQVU3Q1MsTUFWNkM7QUFBQSxNQVVyQ0MsU0FWcUM7O0FBQUEsbUJBVzVCVixzREFBUSxDQUFD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SyxFQUFDLE9BRlI7QUFHRSxVQUFJLEVBQUMsTUFIUDtBQUlFLE9BQUMsRUFBRTtBQUFFOEUsU0FBQyxFQUFFO0FBQUwsT0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWlCRzdFLFFBakJILENBNUhGLEVBK0lFLE1BQUMsNkNBQUQ7QUFDRSxVQUFNLEVBQUVhLElBRFY7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxPQUFPLENBQUMsSUFBRCxDQUFiO0FBQUEsS0FGWDtBQUdFLFNBQUssRUFBRTtBQUNMeUQsUUFBRSxFQUFFLFlBREM7QUFFTEMsUUFBRSxFQUFFLFlBRkM7QUFHTEMsUUFBRSxFQUFFLFlBSEM7QUFJTEMsUUFBRSxFQUFFLFFBSkM7QUFLTEMsUUFBRSxFQUFFO0FBTEMsS0FIVDtBQVVFLFdBQU8sRUFBQyxJQVZWO0FBV0UsUUFBSSxFQUFDLE9BWFA7QUFZRSxLQUFDLEVBQUMsTUFaSjtBQWFFLE1BQUUsRUFBQyxNQWJMO0FBY0UsWUFBUSxFQUFDLFFBZFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWdCRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBaEJGLEVBaUJFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBWSxTQUFLLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakJGLENBL0lGLENBREY7QUF1S0Q7O0dBald1Qm5HLHNCO1VBQ1BHLHFELEVBOEJGMEMsdUQ7OztLQS9CUzdDLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29mZmVyLjcwYzBiOGM0MWY2OWVhZWFkZTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFuY2hvcixcclxuICBJY29uLFxyXG4gIElucHV0LFxyXG4gIExhYmVsLFxyXG4gIE1vZGFsLFxyXG4gIE5vdGlmaWNhdGlvbixcclxuICBTd2l0Y2gsXHJcbiAgVGV4dCxcclxufSBmcm9tIFwiYXRvbWl6ZVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL21haW5fYnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXF1ZXN0T2ZmZXJGb3JtVGFpbG9yKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHN1bXByaWNlID1cclxuICAgIHBhcnNlRmxvYXQocHJvcHMucHJvZHVjdEluZm8ubVByaWNlKSArIHBhcnNlRmxvYXQocHJvcHMucHJvZHVjdEluZm8uc1ByaWNlKTtcclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGluLCBzZXRQaW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2dldHRpbmdfbWVhc3VyZW1lbnQsIHNldEdldHRpbmdfbWVhc3VyZW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaGFyZV9tZWFzdXJlbWVudCwgc2V0U2hhcmVfbWVhc3VyZW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKFwiRXJyb3JcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVsaXZlcnlEYXRlLCBzZXREZWxpdmVyeURhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZShcIjFcIik7XHJcbiAgY29uc3QgW25vTWVhc3VyZW1lbnQsIHNldE5vTWVhc3VyZW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIEhhbmRsZSBlbnRlciBwaW5cclxuXHJcbiAgY29uc3QgaGFuZGxlU2V0UGluID0gKGUpID0+IHtcclxuICAgIGlmIChwaW4ubGVuZ3RoICE9PSA1KSB7XHJcbiAgICAgIHNldFBpbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gYXV0aC50b2tlbjtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcblxyXG4gIC8vIEhhbmRsZSBnZXQgbWVhc3VyZW1lbnRcclxuICBjb25zdCBoYW5kbGVHZXRNZWFzdXJlbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghc2hhcmVfbWVhc3VyZW1lbnQpIHtcclxuICAgICAgc2V0R2V0dGluZ19tZWFzdXJlbWVudCh0cnVlKTtcclxuICAgICAgYXdhaXQgQXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1tZWFzdXJlbWVudHMvYCxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBnZW5kID0gcmVzLmRhdGFbMF0uZ2VuZGVyO1xyXG4gICAgICAgICAgICBzZXRTaXplKHJlcy5kYXRhWzBdLl9pZCk7XHJcbiAgICAgICAgICAgIHNldFNoYXJlX21lYXN1cmVtZW50KHRydWUpO1xyXG4gICAgICAgICAgICBhd2FpdCBBeGlvcyh7XHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfSR7XHJcbiAgICAgICAgICAgICAgICBnZW5kID09PSBcIk1cIiA/IFwibWVuTWVhc3VyZW1lbnRcIiA6IFwid29tZW5NZWFzdXJlbWVudFwiXHJcbiAgICAgICAgICAgICAgfS9gLFxyXG4gICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0R2VuZGVyKHJlcy5kYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JNc2coXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgbWVhc3VyZW1lbnQgdG8gc2hhcmVcIik7XHJcbiAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICBzZXROb01lYXN1cmVtZW50KHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBzZXRFcnJvck1zZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0R2V0dGluZ19tZWFzdXJlbWVudChmYWxzZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hhcmVfbWVhc3VyZW1lbnQoZmFsc2UpO1xyXG4gICAgICBzZXROb01lYXN1cmVtZW50KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBIYW5kbGUgU3VibWl0XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBhd2FpdCBBeGlvcyh7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH13YWxsZXQvYCxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvX3ByaWNlID0gcGFyc2VGbG9hdChwcmljZSk7XHJcbiAgICAgICAgY29uc3Qgd2FsbGV0X2JhbCA9IHBhcnNlRmxvYXQocmVzLmRhdGFbMF0uYmFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIHdhbGxldDogcmVzLmRhdGFbMF0uX2lkLFxyXG4gICAgICAgICAgUFROOiBwaW4sXHJcbiAgICAgICAgICBzdG9yZTogcHJvcHMuc3RvcmUsXHJcbiAgICAgICAgICBjb25zaWRlcmF0aW9uOiBwcm9wcy5vcGVuT2ZmZXJcclxuICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHN1bXByaWNlKSAqIHBhcnNlRmxvYXQocXVhbnRpdHkpXHJcbiAgICAgICAgICAgIDogcGFyc2VGbG9hdChwcm9fcHJpY2UpICogcGFyc2VGbG9hdChxdWFudGl0eSksXHJcbiAgICAgICAgICBkZWxpdmVyeURhdGU6IG1vbWVudChkZWxpdmVyeURhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIiksXHJcbiAgICAgICAgICBzYW1wbGU6IFtwcm9wcy5wcm9kdWN0XSxcclxuICAgICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICAgICAgaW5pdGlhdG9yOiBcIlVzZXJcIixcclxuICAgICAgICAgIG1lYXN1cm1lbnQ6IHtcclxuICAgICAgICAgICAgbWFsZTogZ2VuZGVyLFxyXG4gICAgICAgICAgICBzdGFuZGFyZDogc2l6ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBxYXVudGl0eTogcGFyc2VGbG9hdChxdWFudGl0eSksXHJcbiAgICAgICAgICBvcGVuT2ZmZXI6IHByb3BzLm9wZW5PZmZlcixcclxuICAgICAgICAgIHR5cGU6IHByb3BzLm9wZW5PZmZlciA/IFwib3JkZXJcIiA6IFwib2ZmZXJcIixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgICAgICBpZiAocHJvX3ByaWNlID4gd2FsbGV0X2JhbCkge1xyXG4gICAgICAgICAgc2V0RXJyb3JNc2coXHJcbiAgICAgICAgICAgIFwiWW91IGRvbid0IGhhdmUgZW5vdWdoIGZ1bmRzIHRvIGNvbnRpbnVlLCBmdW5kIHlvdXIgd2FsbGV0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBhd2FpdCBBeGlvcyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9b2ZmZXJUYWlsb3JzYCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3JNc2coXCJPZmZlciBzZW50IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHNldERvbmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBtc2cgPSBnZXQoZXIsIFwicmVzcG9uc2UuZGF0YS5tZXNzYWdlXCIpIHx8IGUubWVzc2FnZTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgICAgICAgIHNldEVycm9yTXNnKG1zZyk7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldEVycm9yTXNnKFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xyXG4gICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIHshcHJvcHMub3Blbk9mZmVyICYmIChcclxuICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICBDb25zaWRlcmF0aW9uIHByaWNlXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICBEZWxpdmVyeSBkYXRlXHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVsaXZlcnlEYXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlbGl2ZXJ5RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MYWJlbD5cclxuXHJcbiAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICBHZW5kZXJcclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5kZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17Z2VuZGVyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9uZVwiPlNlbGVjdCBnZW5kZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZcIj5GZW1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1cIj5NYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L0xhYmVsPlxyXG5cclxuICAgICAgICA8TGFiZWxcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdldE1lYXN1cmVtZW50fVxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgdGV4dFdlaWdodD1cIjYwMFwiXHJcbiAgICAgICAgICBtPXt7IGI6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtzaGFyZV9tZWFzdXJlbWVudH0gaXNMb2FkaW5nPXtnZXR0aW5nX21lYXN1cmVtZW50fSAvPlxyXG4gICAgICAgICAgU2hhcmUgbWVhc3VyZW1lbnQgd2l0aCB0YWlsb3JcclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIHsvKiogKi99XHJcbiAgICAgICAge25vTWVhc3VyZW1lbnQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExhYmVsIG09e3sgYjogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgUGxlYXNlIGNyZWF0ZSB5b3VyIG1lYXN1cmVtZW50e1wiIFwifVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9zZXR0aW5ncz9hY3Rpb249bWVhc3VyZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxBbmNob3IgbT17eyBsOiBcIjVweFwiIH19PmhlcmU8L0FuY2hvcj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxMYWJlbFxyXG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWFudGl0eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBkPVwiYmxvY2tcIlxyXG4gICAgICAgICAgbT17eyBiOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFF1YW50aXR5XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICBUb3RhbCBwcmljZSAqIHF1YW50aXR5IChcclxuICAgICAgICAgICAge3Byb3BzLm9wZW5PZmZlclxyXG4gICAgICAgICAgICAgID8gcGFyc2VGbG9hdChzdW1wcmljZSkgKiBwYXJzZUZsb2F0KHF1YW50aXR5KVxyXG4gICAgICAgICAgICAgIDogcGFyc2VGbG9hdChwcmljZSkgKiBwYXJzZUZsb2F0KHF1YW50aXR5KX1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPE1haW5CdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfSB0aXRsZT1cIkNvbnRpbnVlXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxyXG4gICAgICAgIGFsaWduPXt7XHJcbiAgICAgICAgICB4czogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBzbTogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBtZDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBsZzogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHhsOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcm91bmRlZD1cIm1kXCJcclxuICAgICAgICBtYXhXPVwiMjVyZW1cIlxyXG4gICAgICAgIHA9XCIyMHB4XCJcclxuICAgICAgICBiZz1cIiNmZmZcIlxyXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICBuYW1lPVwiQ3Jvc3NcIlxyXG4gICAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgdG9wPVwiMXJlbVwiXHJcbiAgICAgICAgICByaWdodD1cIjFyZW1cIlxyXG4gICAgICAgICAgc2l6ZT1cIjMycHhcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICB0YWc9XCJoZWFkZXJcIlxyXG4gICAgICAgICAgICB0ZXh0U2l6ZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgbT17eyBiOiBcIjJyZW1cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFbnRlciB5b3VyIHBpblxyXG4gICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICBQSU5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bpbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNldFBpbihlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8TWFpbkJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgIHRpdGxlPVwiTWFrZSBvZmZlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE5vdGlmaWNhdGlvblxyXG4gICAgICAgIGJnPVwid2FybmluZzcwMFwiXHJcbiAgICAgICAgaXNPcGVuPXtlcnJvcn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBwcmVmaXg9e1xyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgbmFtZT1cIkNsb3NlU29saWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICBtPXt7IHI6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2Vycm9yTXNnfVxyXG4gICAgICA8L05vdGlmaWNhdGlvbj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXtkb25lfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldERvbmUodHJ1ZSl9XHJcbiAgICAgICAgYWxpZ249e3tcclxuICAgICAgICAgIHhzOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIHNtOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIG1kOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIGxnOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgeGw6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICByb3VuZGVkPVwibWRcIlxyXG4gICAgICAgIG1heFc9XCIyNXJlbVwiXHJcbiAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgIGJnPVwiI2ZmZlwiXHJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQ+S2luZGx5IHRoZSBjb250YWN0IHRoaXMgc3RvcmUgdG8gZm9sbG93IHVwIG9uIHlvdXIgb3JkZXI8L1RleHQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL2NvbnRyYWN0XCI+XHJcbiAgICAgICAgICA8TWFpbkJ1dHRvbiB0aXRsZT1cIk9rYXlcIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==