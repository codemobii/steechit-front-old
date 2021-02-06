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
                            type: "offer"
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
      lineNumber: 209,
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
      lineNumber: 211,
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
      lineNumber: 213,
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
      lineNumber: 221,
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
      lineNumber: 223,
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
      lineNumber: 231,
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
      lineNumber: 233,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "None",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "Select gender"), __jsx("option", {
    value: "F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, "Female"), __jsx("option", {
    value: "M",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
      lineNumber: 244,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    checked: share_measurement,
    isLoading: getting_measurement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 11
    }
  }), "Share measurement with tailor"), noMeasurement && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    m: {
      b: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, "Please create your measurement", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/profile/settings?action=measurement",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    m: {
      l: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
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
      lineNumber: 264,
      columnNumber: 9
    }
  }, "Quantity", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "",
    type: "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
      lineNumber: 280,
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
      lineNumber: 282,
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
      lineNumber: 298,
      columnNumber: 9
    }
  }), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
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
      lineNumber: 308,
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
      lineNumber: 317,
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
      lineNumber: 319,
      columnNumber: 13
    }
  })), __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleSubmit,
    loading: loading,
    title: "Make offer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
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
        lineNumber: 341,
        columnNumber: 11
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
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
      lineNumber: 351,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    w: "100px",
    h: "100px",
    src: "https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-512.png",
    m: {
      x: "auto",
      b: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 9
    }
  }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    tag: "h1",
    textSize: "heading",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 9
    }
  }, "Kindly the contact this store to follow up on your order"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/profile/offers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 9
    }
  }, __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Okay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0X29mZmVyX2Zvcm1fdGFpbG9yLmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RPZmZlckZvcm1UYWlsb3IiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInN1bXByaWNlIiwicGFyc2VGbG9hdCIsInByb2R1Y3RJbmZvIiwibVByaWNlIiwic1ByaWNlIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwaW4iLCJzZXRQaW4iLCJnZXR0aW5nX21lYXN1cmVtZW50Iiwic2V0R2V0dGluZ19tZWFzdXJlbWVudCIsInNoYXJlX21lYXN1cmVtZW50Iiwic2V0U2hhcmVfbWVhc3VyZW1lbnQiLCJnZW5kZXIiLCJzZXRHZW5kZXIiLCJzaXplIiwic2V0U2l6ZSIsImVycm9yIiwic2V0RXJyb3IiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwicHJpY2UiLCJzZXRQcmljZSIsIkRhdGUiLCJkZWxpdmVyeURhdGUiLCJzZXREZWxpdmVyeURhdGUiLCJxdWFudGl0eSIsInNldFF1YW50aXR5Iiwibm9NZWFzdXJlbWVudCIsInNldE5vTWVhc3VyZW1lbnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRvbmUiLCJzZXREb25lIiwiaGFuZGxlU2V0UGluIiwiZSIsImxlbmd0aCIsInRhcmdldCIsInZhbHVlIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0b2tlbiIsImlkIiwiX2lkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUdldE1lYXN1cmVtZW50IiwiQXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicGFyYW1zIiwidXNlciIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZ2VuZCIsImVyciIsImhhbmRsZVN1Ym1pdCIsInByb19wcmljZSIsIndhbGxldF9iYWwiLCJiYWwiLCJ3YWxsZXQiLCJQVE4iLCJzdG9yZSIsImNvbnNpZGVyYXRpb24iLCJvcGVuT2ZmZXIiLCJtb21lbnQiLCJmb3JtYXQiLCJzYW1wbGUiLCJwcm9kdWN0IiwiaW5pdGlhdG9yIiwibWVhc3VybWVudCIsIm1hbGUiLCJzdGFuZGFyZCIsInFhdW50aXR5IiwidHlwZSIsInJlc3MiLCJlciIsIm1zZyIsImdldCIsIm1lc3NhZ2UiLCJiIiwibCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJzZXRUaW1lb3V0IiwiciIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0Esc0JBQVQsQ0FBZ0NDLEtBQWhDLEVBQXVDO0FBQUE7O0FBQ3BELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxRQUFRLEdBQ1pDLFVBQVUsQ0FBQ0osS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxNQUFuQixDQUFWLEdBQXVDRixVQUFVLENBQUNKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkUsTUFBbkIsQ0FEbkQ7O0FBSG9ELGtCQU14QkMsc0RBQVEsQ0FBQyxLQUFELENBTmdCO0FBQUEsTUFNN0NDLE1BTjZDO0FBQUEsTUFNckNDLFNBTnFDOztBQUFBLG1CQU85QkYsc0RBQVEsQ0FBQyxFQUFELENBUHNCO0FBQUEsTUFPN0NHLEdBUDZDO0FBQUEsTUFPeENDLE1BUHdDOztBQUFBLG1CQVFFSixzREFBUSxDQUFDLEtBQUQsQ0FSVjtBQUFBLE1BUTdDSyxtQkFSNkM7QUFBQSxNQVF4QkMsc0JBUndCOztBQUFBLG1CQVNGTixzREFBUSxDQUFDLEtBQUQsQ0FUTjtBQUFBLE1BUzdDTyxpQkFUNkM7QUFBQSxNQVMxQkMsb0JBVDBCOztBQUFBLG1CQVV4QlIsc0RBQVEsQ0FBQyxFQUFELENBVmdCO0FBQUEsTUFVN0NTLE1BVjZDO0FBQUEsTUFVckNDLFNBVnFDOztBQUFBLG1CQVc1QlYsc0RBQVEs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QWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXpCRixDQS9JRixDQURGO0FBK0tEOztHQXpXdUI3RixzQjtVQUNQRyxxRCxFQThCRjBDLHVEOzs7S0EvQlM3QyxzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vZmZlci4zZDUxZDNlMDdjZmY5NGI4MTk5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBbmNob3IsXHJcbiAgSWNvbixcclxuICBJbWFnZSxcclxuICBJbnB1dCxcclxuICBMYWJlbCxcclxuICBNb2RhbCxcclxuICBOb3RpZmljYXRpb24sXHJcbiAgU3dpdGNoLFxyXG4gIFRleHQsXHJcbn0gZnJvbSBcImF0b21pemVcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4vYnV0dG9ucy9tYWluX2J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVxdWVzdE9mZmVyRm9ybVRhaWxvcihwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBzdW1wcmljZSA9XHJcbiAgICBwYXJzZUZsb2F0KHByb3BzLnByb2R1Y3RJbmZvLm1QcmljZSkgKyBwYXJzZUZsb2F0KHByb3BzLnByb2R1Y3RJbmZvLnNQcmljZSk7XHJcblxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Bpbiwgc2V0UGluXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtnZXR0aW5nX21lYXN1cmVtZW50LCBzZXRHZXR0aW5nX21lYXN1cmVtZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hhcmVfbWVhc3VyZW1lbnQsIHNldFNoYXJlX21lYXN1cmVtZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZ2VuZGVyLCBzZXRHZW5kZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShcIkVycm9yXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RlbGl2ZXJ5RGF0ZSwgc2V0RGVsaXZlcnlEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoXCIxXCIpO1xyXG4gIGNvbnN0IFtub01lYXN1cmVtZW50LCBzZXROb01lYXN1cmVtZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RvbmUsIHNldERvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBIYW5kbGUgZW50ZXIgcGluXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNldFBpbiA9IChlKSA9PiB7XHJcbiAgICBpZiAocGluLmxlbmd0aCAhPT0gNSkge1xyXG4gICAgICBzZXRQaW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG5cclxuICBjb25zdCB0b2tlbiA9IGF1dGgudG9rZW47XHJcbiAgY29uc3QgaWQgPSBhdXRoLl9pZDtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvcHMpO1xyXG5cclxuICAvLyBIYW5kbGUgZ2V0IG1lYXN1cmVtZW50XHJcbiAgY29uc3QgaGFuZGxlR2V0TWVhc3VyZW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNoYXJlX21lYXN1cmVtZW50KSB7XHJcbiAgICAgIHNldEdldHRpbmdfbWVhc3VyZW1lbnQodHJ1ZSk7XHJcbiAgICAgIGF3YWl0IEF4aW9zKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9bWVhc3VyZW1lbnRzL2AsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB1c2VyOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZ2VuZCA9IHJlcy5kYXRhWzBdLmdlbmRlcjtcclxuICAgICAgICAgICAgc2V0U2l6ZShyZXMuZGF0YVswXS5faWQpO1xyXG4gICAgICAgICAgICBzZXRTaGFyZV9tZWFzdXJlbWVudCh0cnVlKTtcclxuICAgICAgICAgICAgYXdhaXQgQXhpb3Moe1xyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH0ke1xyXG4gICAgICAgICAgICAgICAgZ2VuZCA9PT0gXCJNXCIgPyBcIm1lbk1lYXN1cmVtZW50XCIgOiBcIndvbWVuTWVhc3VyZW1lbnRcIlxyXG4gICAgICAgICAgICAgIH0vYCxcclxuICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEdlbmRlcihyZXMuZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yTXNnKFwiWW91IGRvbid0IGhhdmUgYW55IG1lYXN1cmVtZW50IHRvIHNoYXJlXCIpO1xyXG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICAgICAgc2V0Tm9NZWFzdXJlbWVudCh0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0RXJyb3JNc2coXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XHJcbiAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHNldEdldHRpbmdfbWVhc3VyZW1lbnQoZmFsc2UpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNoYXJlX21lYXN1cmVtZW50KGZhbHNlKTtcclxuICAgICAgc2V0Tm9NZWFzdXJlbWVudChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gSGFuZGxlIFN1Ym1pdFxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgYXdhaXQgQXhpb3Moe1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9d2FsbGV0L2AsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb19wcmljZSA9IHBhcnNlRmxvYXQocHJpY2UpO1xyXG4gICAgICAgIGNvbnN0IHdhbGxldF9iYWwgPSBwYXJzZUZsb2F0KHJlcy5kYXRhWzBdLmJhbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICB3YWxsZXQ6IHJlcy5kYXRhWzBdLl9pZCxcclxuICAgICAgICAgIFBUTjogcGluLFxyXG4gICAgICAgICAgc3RvcmU6IHByb3BzLnN0b3JlLFxyXG4gICAgICAgICAgY29uc2lkZXJhdGlvbjogcHJvcHMub3Blbk9mZmVyXHJcbiAgICAgICAgICAgID8gcGFyc2VGbG9hdChzdW1wcmljZSkgKiBwYXJzZUZsb2F0KHF1YW50aXR5KVxyXG4gICAgICAgICAgICA6IHBhcnNlRmxvYXQocHJvX3ByaWNlKSAqIHBhcnNlRmxvYXQocXVhbnRpdHkpLFxyXG4gICAgICAgICAgZGVsaXZlcnlEYXRlOiBtb21lbnQoZGVsaXZlcnlEYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxyXG4gICAgICAgICAgc2FtcGxlOiBbcHJvcHMucHJvZHVjdF0sXHJcbiAgICAgICAgICB1c2VyOiBpZCxcclxuICAgICAgICAgIGluaXRpYXRvcjogXCJVc2VyXCIsXHJcbiAgICAgICAgICBtZWFzdXJtZW50OiB7XHJcbiAgICAgICAgICAgIG1hbGU6IGdlbmRlcixcclxuICAgICAgICAgICAgc3RhbmRhcmQ6IHNpemUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcWF1bnRpdHk6IHBhcnNlRmxvYXQocXVhbnRpdHkpLFxyXG4gICAgICAgICAgb3Blbk9mZmVyOiBwcm9wcy5vcGVuT2ZmZXIsXHJcbiAgICAgICAgICB0eXBlOiBcIm9mZmVyXCIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuXHJcbiAgICAgICAgaWYgKHByb19wcmljZSA+IHdhbGxldF9iYWwpIHtcclxuICAgICAgICAgIHNldEVycm9yTXNnKFxyXG4gICAgICAgICAgICBcIllvdSBkb24ndCBoYXZlIGVub3VnaCBmdW5kcyB0byBjb250aW51ZSwgZnVuZCB5b3VyIHdhbGxldFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgYXdhaXQgQXhpb3Moe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfW9mZmVyVGFpbG9yc2AsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcykgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yTXNnKFwiT2ZmZXIgc2VudCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICBzZXREb25lKHRydWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbXNnID0gZ2V0KGVyLCBcInJlc3BvbnNlLmRhdGEubWVzc2FnZVwiKSB8fCBlLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgICBzZXRFcnJvck1zZyhtc2cpO1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRFcnJvck1zZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICB7IXByb3BzLm9wZW5PZmZlciAmJiAoXHJcbiAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgQ29uc2lkZXJhdGlvbiBwcmljZVxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgRGVsaXZlcnkgZGF0ZVxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgdmFsdWU9e2RlbGl2ZXJ5RGF0ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZWxpdmVyeURhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGFiZWw+XHJcblxyXG4gICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgR2VuZGVyXHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vbmVcIj5TZWxlY3QgZ2VuZGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNXCI+TWFsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9MYWJlbD5cclxuXHJcbiAgICAgICAgPExhYmVsXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHZXRNZWFzdXJlbWVudH1cclxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgIHRleHRXZWlnaHQ9XCI2MDBcIlxyXG4gICAgICAgICAgbT17eyBiOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17c2hhcmVfbWVhc3VyZW1lbnR9IGlzTG9hZGluZz17Z2V0dGluZ19tZWFzdXJlbWVudH0gLz5cclxuICAgICAgICAgIFNoYXJlIG1lYXN1cmVtZW50IHdpdGggdGFpbG9yXHJcbiAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICB7LyoqICovfVxyXG4gICAgICAgIHtub01lYXN1cmVtZW50ICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMYWJlbCBtPXt7IGI6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIFBsZWFzZSBjcmVhdGUgeW91ciBtZWFzdXJlbWVudHtcIiBcIn1cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvc2V0dGluZ3M/YWN0aW9uPW1lYXN1cmVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8QW5jaG9yIG09e3sgbDogXCI1cHhcIiB9fT5oZXJlPC9BbmNob3I+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8TGFiZWxcclxuICAgICAgICAgIHZhbHVlPXtxdWFudGl0eX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVhbnRpdHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgZD1cImJsb2NrXCJcclxuICAgICAgICAgIG09e3sgYjogXCIxcmVtXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBRdWFudGl0eVxyXG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgVG90YWwgcHJpY2UgKiBxdWFudGl0eSAoXHJcbiAgICAgICAgICAgIHtwcm9wcy5vcGVuT2ZmZXJcclxuICAgICAgICAgICAgICA/IHBhcnNlRmxvYXQoc3VtcHJpY2UpICogcGFyc2VGbG9hdChxdWFudGl0eSlcclxuICAgICAgICAgICAgICA6IHBhcnNlRmxvYXQocHJpY2UpICogcGFyc2VGbG9hdChxdWFudGl0eSl9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIDxNYWluQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0gdGl0bGU9XCJDb250aW51ZVwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cclxuICAgICAgICBhbGlnbj17e1xyXG4gICAgICAgICAgeHM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgICAgICAgc206IFwiZmxleC1zdGFydFwiLFxyXG4gICAgICAgICAgbWQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgICAgICAgbGc6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB4bDogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHJvdW5kZWQ9XCJtZFwiXHJcbiAgICAgICAgbWF4Vz1cIjI1cmVtXCJcclxuICAgICAgICBwPVwiMjBweFwiXHJcbiAgICAgICAgYmc9XCIjZmZmXCJcclxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXHJcbiAgICAgID5cclxuICAgICAgICA8SWNvblxyXG4gICAgICAgICAgbmFtZT1cIkNyb3NzXCJcclxuICAgICAgICAgIHBvcz1cImFic29sdXRlXCJcclxuICAgICAgICAgIHRvcD1cIjFyZW1cIlxyXG4gICAgICAgICAgcmlnaHQ9XCIxcmVtXCJcclxuICAgICAgICAgIHNpemU9XCIzMnB4XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgdGFnPVwiaGVhZGVyXCJcclxuICAgICAgICAgICAgdGV4dFNpemU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIG09e3sgYjogXCIycmVtXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRW50ZXIgeW91ciBwaW5cclxuICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgUElOXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwaW59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZXRQaW4oZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPE1haW5CdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICB0aXRsZT1cIk1ha2Ugb2ZmZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxOb3RpZmljYXRpb25cclxuICAgICAgICBiZz1cIndhcm5pbmc3MDBcIlxyXG4gICAgICAgIGlzT3Blbj17ZXJyb3J9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcclxuICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgcHJlZml4PXtcclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIG5hbWU9XCJDbG9zZVNvbGlkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgbT17eyByOiBcIjAuNXJlbVwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtlcnJvck1zZ31cclxuICAgICAgPC9Ob3RpZmljYXRpb24+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17ZG9uZX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXREb25lKHRydWUpfVxyXG4gICAgICAgIGFsaWduPXt7XHJcbiAgICAgICAgICB4czogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBzbTogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBtZDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBsZzogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHhsOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcm91bmRlZD1cIm1kXCJcclxuICAgICAgICBtYXhXPVwiMjVyZW1cIlxyXG4gICAgICAgIHA9XCIyMHB4XCJcclxuICAgICAgICBiZz1cIiNmZmZcIlxyXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgdz1cIjEwMHB4XCJcclxuICAgICAgICAgIGg9XCIxMDBweFwiXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9jb2xpY29uLzI0L2NoZWNrbWFya19kb25lX2NvbXBsZXRlLTUxMi5wbmdcIlxyXG4gICAgICAgICAgbT17eyB4OiBcImF1dG9cIiwgYjogXCIzMHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0IHRhZz1cImgxXCIgdGV4dFNpemU9XCJoZWFkaW5nXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICBLaW5kbHkgdGhlIGNvbnRhY3QgdGhpcyBzdG9yZSB0byBmb2xsb3cgdXAgb24geW91ciBvcmRlclxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvb2ZmZXJzXCI+XHJcbiAgICAgICAgICA8TWFpbkJ1dHRvbiB0aXRsZT1cIk9rYXlcIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==