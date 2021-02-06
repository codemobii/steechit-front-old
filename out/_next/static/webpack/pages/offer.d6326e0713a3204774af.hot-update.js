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
    style: {
      textAlign: "center"
    },
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
      lineNumber: 368,
      columnNumber: 9
    }
  }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    tag: "h1",
    textSize: "heading",
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 9
    }
  }, "Kindly the contact this store to follow up on your order"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/profile/offers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Okay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0X29mZmVyX2Zvcm1fdGFpbG9yLmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RPZmZlckZvcm1UYWlsb3IiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInN1bXByaWNlIiwicGFyc2VGbG9hdCIsInByb2R1Y3RJbmZvIiwibVByaWNlIiwic1ByaWNlIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwaW4iLCJzZXRQaW4iLCJnZXR0aW5nX21lYXN1cmVtZW50Iiwic2V0R2V0dGluZ19tZWFzdXJlbWVudCIsInNoYXJlX21lYXN1cmVtZW50Iiwic2V0U2hhcmVfbWVhc3VyZW1lbnQiLCJnZW5kZXIiLCJzZXRHZW5kZXIiLCJzaXplIiwic2V0U2l6ZSIsImVycm9yIiwic2V0RXJyb3IiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwicHJpY2UiLCJzZXRQcmljZSIsIkRhdGUiLCJkZWxpdmVyeURhdGUiLCJzZXREZWxpdmVyeURhdGUiLCJxdWFudGl0eSIsInNldFF1YW50aXR5Iiwibm9NZWFzdXJlbWVudCIsInNldE5vTWVhc3VyZW1lbnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRvbmUiLCJzZXREb25lIiwiaGFuZGxlU2V0UGluIiwiZSIsImxlbmd0aCIsInRhcmdldCIsInZhbHVlIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ0b2tlbiIsImlkIiwiX2lkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUdldE1lYXN1cmVtZW50IiwiQXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicGFyYW1zIiwidXNlciIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZ2VuZCIsImVyciIsImhhbmRsZVN1Ym1pdCIsInByb19wcmljZSIsIndhbGxldF9iYWwiLCJiYWwiLCJ3YWxsZXQiLCJQVE4iLCJzdG9yZSIsImNvbnNpZGVyYXRpb24iLCJvcGVuT2ZmZXIiLCJtb21lbnQiLCJmb3JtYXQiLCJzYW1wbGUiLCJwcm9kdWN0IiwiaW5pdGlhdG9yIiwibWVhc3VybWVudCIsIm1hbGUiLCJzdGFuZGFyZCIsInFhdW50aXR5IiwidHlwZSIsInJlc3MiLCJlciIsIm1zZyIsImdldCIsIm1lc3NhZ2UiLCJiIiwibCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJzZXRUaW1lb3V0IiwiciIsInRleHRBbGlnbiIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0Esc0JBQVQsQ0FBZ0NDLEtBQWhDLEVBQXVDO0FBQUE7O0FBQ3BELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxRQUFRLEdBQ1pDLFVBQVUsQ0FBQ0osS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxNQUFuQixDQUFWLEdBQXVDRixVQUFVLENBQUNKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkUsTUFBbkIsQ0FEbkQ7O0FBSG9ELGtCQU14QkMsc0RBQVEsQ0FBQyxLQUFELENBTmdCO0FBQUEsTUFNN0NDLE1BTjZDO0FBQUEsTUFNckNDLFNBTnFDOztBQUFBLG1CQU85QkYsc0RBQVEsQ0FBQyxFQUFELENBUHNCO0FBQUEsTUFPN0NHLEdBUDZDO0FBQUEsTUFPeENDLE1BUHdDOztBQUFBLG1CQVFFSixzREFBUSxDQUFDLEtBQUQsQ0FSVjtBQUFBLE1BUTdDSyxtQkFSNkM7QUFBQSxNQVF4QkMsc0JBUndCOztBQUFBLG1CQVNGTixzREFBUSxDQUFDLEtBQUQsQ0FUTjtBQUFBLE1BUzdDTyxpQkFUNkM7QUFBQSxNQVMxQkMsb0JBVDBCOztBQUFBLG1CQVV4QlIsc0RBQVEsQ0FBQyxFQUFELENBVmdCO0FBQUEsTUFVN0NTLE1BVjZDO0FBQUEsTUFVckNDLFNBVnFDOztBQUFBLG1C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QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBWSxTQUFLLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBMUJGLENBL0lGLENBREY7QUFnTEQ7O0dBMVd1QjdGLHNCO1VBQ1BHLHFELEVBOEJGMEMsdUQ7OztLQS9CUzdDLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29mZmVyLmQ2MzI2ZTA3MTNhMzIwNDc3NGFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFuY2hvcixcclxuICBJY29uLFxyXG4gIEltYWdlLFxyXG4gIElucHV0LFxyXG4gIExhYmVsLFxyXG4gIE1vZGFsLFxyXG4gIE5vdGlmaWNhdGlvbixcclxuICBTd2l0Y2gsXHJcbiAgVGV4dCxcclxufSBmcm9tIFwiYXRvbWl6ZVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL21haW5fYnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXF1ZXN0T2ZmZXJGb3JtVGFpbG9yKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHN1bXByaWNlID1cclxuICAgIHBhcnNlRmxvYXQocHJvcHMucHJvZHVjdEluZm8ubVByaWNlKSArIHBhcnNlRmxvYXQocHJvcHMucHJvZHVjdEluZm8uc1ByaWNlKTtcclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGluLCBzZXRQaW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2dldHRpbmdfbWVhc3VyZW1lbnQsIHNldEdldHRpbmdfbWVhc3VyZW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaGFyZV9tZWFzdXJlbWVudCwgc2V0U2hhcmVfbWVhc3VyZW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKFwiRXJyb3JcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVsaXZlcnlEYXRlLCBzZXREZWxpdmVyeURhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZShcIjFcIik7XHJcbiAgY29uc3QgW25vTWVhc3VyZW1lbnQsIHNldE5vTWVhc3VyZW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIEhhbmRsZSBlbnRlciBwaW5cclxuXHJcbiAgY29uc3QgaGFuZGxlU2V0UGluID0gKGUpID0+IHtcclxuICAgIGlmIChwaW4ubGVuZ3RoICE9PSA1KSB7XHJcbiAgICAgIHNldFBpbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gYXV0aC50b2tlbjtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcblxyXG4gIC8vIEhhbmRsZSBnZXQgbWVhc3VyZW1lbnRcclxuICBjb25zdCBoYW5kbGVHZXRNZWFzdXJlbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghc2hhcmVfbWVhc3VyZW1lbnQpIHtcclxuICAgICAgc2V0R2V0dGluZ19tZWFzdXJlbWVudCh0cnVlKTtcclxuICAgICAgYXdhaXQgQXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1tZWFzdXJlbWVudHMvYCxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBnZW5kID0gcmVzLmRhdGFbMF0uZ2VuZGVyO1xyXG4gICAgICAgICAgICBzZXRTaXplKHJlcy5kYXRhWzBdLl9pZCk7XHJcbiAgICAgICAgICAgIHNldFNoYXJlX21lYXN1cmVtZW50KHRydWUpO1xyXG4gICAgICAgICAgICBhd2FpdCBBeGlvcyh7XHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfSR7XHJcbiAgICAgICAgICAgICAgICBnZW5kID09PSBcIk1cIiA/IFwibWVuTWVhc3VyZW1lbnRcIiA6IFwid29tZW5NZWFzdXJlbWVudFwiXHJcbiAgICAgICAgICAgICAgfS9gLFxyXG4gICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0R2VuZGVyKHJlcy5kYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JNc2coXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgbWVhc3VyZW1lbnQgdG8gc2hhcmVcIik7XHJcbiAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICBzZXROb01lYXN1cmVtZW50KHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBzZXRFcnJvck1zZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICAgICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0R2V0dGluZ19tZWFzdXJlbWVudChmYWxzZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hhcmVfbWVhc3VyZW1lbnQoZmFsc2UpO1xyXG4gICAgICBzZXROb01lYXN1cmVtZW50KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBIYW5kbGUgU3VibWl0XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBhd2FpdCBBeGlvcyh7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH13YWxsZXQvYCxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvX3ByaWNlID0gcGFyc2VGbG9hdChwcmljZSk7XHJcbiAgICAgICAgY29uc3Qgd2FsbGV0X2JhbCA9IHBhcnNlRmxvYXQocmVzLmRhdGFbMF0uYmFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIHdhbGxldDogcmVzLmRhdGFbMF0uX2lkLFxyXG4gICAgICAgICAgUFROOiBwaW4sXHJcbiAgICAgICAgICBzdG9yZTogcHJvcHMuc3RvcmUsXHJcbiAgICAgICAgICBjb25zaWRlcmF0aW9uOiBwcm9wcy5vcGVuT2ZmZXJcclxuICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHN1bXByaWNlKSAqIHBhcnNlRmxvYXQocXVhbnRpdHkpXHJcbiAgICAgICAgICAgIDogcGFyc2VGbG9hdChwcm9fcHJpY2UpICogcGFyc2VGbG9hdChxdWFudGl0eSksXHJcbiAgICAgICAgICBkZWxpdmVyeURhdGU6IG1vbWVudChkZWxpdmVyeURhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIiksXHJcbiAgICAgICAgICBzYW1wbGU6IFtwcm9wcy5wcm9kdWN0XSxcclxuICAgICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICAgICAgaW5pdGlhdG9yOiBcIlVzZXJcIixcclxuICAgICAgICAgIG1lYXN1cm1lbnQ6IHtcclxuICAgICAgICAgICAgbWFsZTogZ2VuZGVyLFxyXG4gICAgICAgICAgICBzdGFuZGFyZDogc2l6ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBxYXVudGl0eTogcGFyc2VGbG9hdChxdWFudGl0eSksXHJcbiAgICAgICAgICBvcGVuT2ZmZXI6IHByb3BzLm9wZW5PZmZlcixcclxuICAgICAgICAgIHR5cGU6IFwib2ZmZXJcIixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgICAgICBpZiAocHJvX3ByaWNlID4gd2FsbGV0X2JhbCkge1xyXG4gICAgICAgICAgc2V0RXJyb3JNc2coXHJcbiAgICAgICAgICAgIFwiWW91IGRvbid0IGhhdmUgZW5vdWdoIGZ1bmRzIHRvIGNvbnRpbnVlLCBmdW5kIHlvdXIgd2FsbGV0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBhd2FpdCBBeGlvcyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9b2ZmZXJUYWlsb3JzYCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3JNc2coXCJPZmZlciBzZW50IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHNldERvbmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBtc2cgPSBnZXQoZXIsIFwicmVzcG9uc2UuZGF0YS5tZXNzYWdlXCIpIHx8IGUubWVzc2FnZTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgICAgICAgIHNldEVycm9yTXNnKG1zZyk7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldEVycm9yTXNnKFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xyXG4gICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIHshcHJvcHMub3Blbk9mZmVyICYmIChcclxuICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICBDb25zaWRlcmF0aW9uIHByaWNlXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICBEZWxpdmVyeSBkYXRlXHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVsaXZlcnlEYXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlbGl2ZXJ5RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MYWJlbD5cclxuXHJcbiAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICBHZW5kZXJcclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5kZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17Z2VuZGVyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9uZVwiPlNlbGVjdCBnZW5kZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZcIj5GZW1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1cIj5NYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L0xhYmVsPlxyXG5cclxuICAgICAgICA8TGFiZWxcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdldE1lYXN1cmVtZW50fVxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgdGV4dFdlaWdodD1cIjYwMFwiXHJcbiAgICAgICAgICBtPXt7IGI6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtzaGFyZV9tZWFzdXJlbWVudH0gaXNMb2FkaW5nPXtnZXR0aW5nX21lYXN1cmVtZW50fSAvPlxyXG4gICAgICAgICAgU2hhcmUgbWVhc3VyZW1lbnQgd2l0aCB0YWlsb3JcclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgIHsvKiogKi99XHJcbiAgICAgICAge25vTWVhc3VyZW1lbnQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExhYmVsIG09e3sgYjogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgUGxlYXNlIGNyZWF0ZSB5b3VyIG1lYXN1cmVtZW50e1wiIFwifVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9zZXR0aW5ncz9hY3Rpb249bWVhc3VyZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxBbmNob3IgbT17eyBsOiBcIjVweFwiIH19PmhlcmU8L0FuY2hvcj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxMYWJlbFxyXG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWFudGl0eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBkPVwiYmxvY2tcIlxyXG4gICAgICAgICAgbT17eyBiOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFF1YW50aXR5XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICBUb3RhbCBwcmljZSAqIHF1YW50aXR5IChcclxuICAgICAgICAgICAge3Byb3BzLm9wZW5PZmZlclxyXG4gICAgICAgICAgICAgID8gcGFyc2VGbG9hdChzdW1wcmljZSkgKiBwYXJzZUZsb2F0KHF1YW50aXR5KVxyXG4gICAgICAgICAgICAgIDogcGFyc2VGbG9hdChwcmljZSkgKiBwYXJzZUZsb2F0KHF1YW50aXR5KX1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPE1haW5CdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfSB0aXRsZT1cIkNvbnRpbnVlXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxyXG4gICAgICAgIGFsaWduPXt7XHJcbiAgICAgICAgICB4czogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBzbTogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBtZDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBsZzogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHhsOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcm91bmRlZD1cIm1kXCJcclxuICAgICAgICBtYXhXPVwiMjVyZW1cIlxyXG4gICAgICAgIHA9XCIyMHB4XCJcclxuICAgICAgICBiZz1cIiNmZmZcIlxyXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICBuYW1lPVwiQ3Jvc3NcIlxyXG4gICAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgdG9wPVwiMXJlbVwiXHJcbiAgICAgICAgICByaWdodD1cIjFyZW1cIlxyXG4gICAgICAgICAgc2l6ZT1cIjMycHhcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICB0YWc9XCJoZWFkZXJcIlxyXG4gICAgICAgICAgICB0ZXh0U2l6ZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgbT17eyBiOiBcIjJyZW1cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFbnRlciB5b3VyIHBpblxyXG4gICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICBQSU5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bpbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNldFBpbihlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8TWFpbkJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgIHRpdGxlPVwiTWFrZSBvZmZlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE5vdGlmaWNhdGlvblxyXG4gICAgICAgIGJnPVwid2FybmluZzcwMFwiXHJcbiAgICAgICAgaXNPcGVuPXtlcnJvcn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBwcmVmaXg9e1xyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgbmFtZT1cIkNsb3NlU29saWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICBtPXt7IHI6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2Vycm9yTXNnfVxyXG4gICAgICA8L05vdGlmaWNhdGlvbj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXtkb25lfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldERvbmUodHJ1ZSl9XHJcbiAgICAgICAgYWxpZ249e3tcclxuICAgICAgICAgIHhzOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIHNtOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIG1kOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIGxnOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgeGw6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICByb3VuZGVkPVwibWRcIlxyXG4gICAgICAgIG1heFc9XCIyNXJlbVwiXHJcbiAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgIGJnPVwiI2ZmZlwiXHJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxyXG4gICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICB3PVwiMTAwcHhcIlxyXG4gICAgICAgICAgaD1cIjEwMHB4XCJcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2NvbGljb24vMjQvY2hlY2ttYXJrX2RvbmVfY29tcGxldGUtNTEyLnBuZ1wiXHJcbiAgICAgICAgICBtPXt7IHg6IFwiYXV0b1wiLCBiOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHQgdGFnPVwiaDFcIiB0ZXh0U2l6ZT1cImhlYWRpbmdcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIEtpbmRseSB0aGUgY29udGFjdCB0aGlzIHN0b3JlIHRvIGZvbGxvdyB1cCBvbiB5b3VyIG9yZGVyXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9vZmZlcnNcIj5cclxuICAgICAgICAgIDxNYWluQnV0dG9uIHRpdGxlPVwiT2theVwiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9