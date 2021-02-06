webpackHotUpdate_N_E("pages/profile/offers",{

/***/ "./pages/profile/offers.js":
/*!*********************************!*\
  !*** ./pages/profile/offers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bookings; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/parts/profile_loader */ "./components/parts/profile_loader.js");
/* harmony import */ var _components_parts_empty_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/parts/empty_list */ "./components/parts/empty_list.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/store */ "./services/store.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _components_layouts_profile_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/layouts/profile_layout */ "./components/layouts/profile_layout.js");




var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\pages\\profile\\offers.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;










function Bookings() {
  _s();

  var _this = this;

  // Getting auth state and user data for structuring the navbar
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.auth;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var token = _services_store__WEBPACK_IMPORTED_MODULE_9__["default"].getState().auth.token;
  var id = auth._id;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      orders = _useState[0],
      setOrders = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      hasStore = _useState2[0],
      setHasStore = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      showN = _useState4[0],
      setShowN = _useState4[1];

  var menuList = __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    d: "block",
    p: "5px 10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Details"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    textColor: "danger800",
    d: "block",
    p: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Cancel"));

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var getUserItems = /*#__PURE__*/function () {
      var _ref = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer ".concat(token)
                  },
                  proxy: {
                    host: "104.236.174.88",
                    port: 3128
                  },
                  method: "GET",
                  url: "".concat("https://api.steechit.com/", "stores/"),
                  params: {
                    user: id
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(store_res) {
                    return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                              headers: {
                                "Access-Control-Allow-Origin": "*",
                                Authorization: "Bearer ".concat(token)
                              },
                              proxy: {
                                host: "104.236.174.88",
                                port: 3128
                              },
                              method: "GET",
                              url: "".concat("https://api.steechit.com/", "offerTailors")
                            }).then( /*#__PURE__*/function () {
                              var _ref3 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(orders_res) {
                                return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        setOrders(orders_res.data);
                                        _context2.next = 3;
                                        return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                                          headers: {
                                            "Access-Control-Allow-Origin": "*",
                                            Authorization: "Bearer ".concat(token)
                                          },
                                          proxy: {
                                            host: "104.236.174.88",
                                            port: 3128
                                          },
                                          method: "GET",
                                          url: "".concat("https://api.steechit.com/", "offerFabrics")
                                        }).then( /*#__PURE__*/function () {
                                          var _ref4 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(orderss) {
                                            var orders_re;
                                            return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                                              while (1) {
                                                switch (_context.prev = _context.next) {
                                                  case 0:
                                                    orders_re = orderss.data;
                                                    setOrders([].concat(Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(orders), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(orders_re)));
                                                    console.log(orders);

                                                  case 3:
                                                  case "end":
                                                    return _context.stop();
                                                }
                                              }
                                            }, _callee);
                                          }));

                                          return function (_x3) {
                                            return _ref4.apply(this, arguments);
                                          };
                                        }())["catch"](function (error) {
                                          console.log(error);
                                        });

                                      case 3:
                                        console.log(orders_res);

                                      case 4:
                                      case "end":
                                        return _context2.stop();
                                    }
                                  }
                                }, _callee2);
                              }));

                              return function (_x2) {
                                return _ref3.apply(this, arguments);
                              };
                            }())["catch"](function (error) {
                              console.log(error);
                            });

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }())["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  setLoading(false);
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function getUserItems() {
        return _ref.apply(this, arguments);
      };
    }();

    getUserItems();
  }, [id, token, dispatch]);
  return __jsx(_components_layouts_profile_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "My Offers | Steechit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    p: "20px",
    style: {
      borderBottom: "1px solid #ccc"
    },
    d: "flex",
    justify: "space-between",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "My Offers")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    w: "100%",
    p: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }) : hasStore ? orders.length === 0 ? __jsx(_components_parts_empty_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }) : __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, "S/N"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, "Created on"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, "Amount"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }, "Status"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }, "Action"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, orders.map(function (o, i) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 19
      }
    }, __jsx("td", {
      "data-label": "S/N",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, i + 1), __jsx("td", {
      "data-label": "Created on",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }, new Date(o.createdAt).toDateString()), __jsx("td", {
      "data-label": "Amount",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_11__["default"], {
      value: o.consideration,
      displayType: "text",
      thousandSeparator: true,
      prefix: "₦",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 23
      }
    })), __jsx("td", {
      "data-label": "Status",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      bg: !o.decline.is_decline && !o.accept.is_accept ? "warning700" : o.accept.is_accept ? "success700" : "danger700",
      textColor: "white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 23
      }
    }, !o.decline.is_decline && !o.accept.is_accept ? "Pending" : o.accept.is_accept ? "Accepted" : "Declined")), __jsx("td", {
      "data-label": "Action",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
      textColor: "danger800",
      d: "block",
      p: "10px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 23
      }
    }, "Cancel")));
  }))) : __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    w: "100%",
    h: "300px",
    d: "flex",
    align: "center",
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-active.svg",
    width: "300px",
    m: {
      b: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, "You don't have a store"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "Store",
      size: "16px",
      color: "white",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
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
    shadow: "3",
    hoverShadow: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, "Create your store")))));
}

_s(Bookings, "L41RymN533zHOkCtCjJao0NYIog=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
});

_c = Bookings;

var _c;

$RefreshReg$(_c, "Bookings");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9vZmZlcnMuanMiXSwibmFtZXMiOlsiQm9va2luZ3MiLCJhdXRoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2tlbiIsInN0b3JlIiwiZ2V0U3RhdGUiLCJpZCIsIl9pZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwib3JkZXJzIiwic2V0T3JkZXJzIiwiaGFzU3RvcmUiLCJzZXRIYXNTdG9yZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd04iLCJzZXRTaG93TiIsIm1lbnVMaXN0IiwidXNlRWZmZWN0IiwiZ2V0VXNlckl0ZW1zIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicGFyYW1zIiwidXNlciIsInRoZW4iLCJzdG9yZV9yZXMiLCJvcmRlcnNfcmVzIiwiZGF0YSIsIm9yZGVyc3MiLCJvcmRlcnNfcmUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJib3JkZXJCb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJvIiwiaSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0RhdGVTdHJpbmciLCJjb25zaWRlcmF0aW9uIiwiZGVjbGluZSIsImlzX2RlY2xpbmUiLCJhY2NlcHQiLCJpc19hY2NlcHQiLCJiIiwiciIsImwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQ2pDO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLElBQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1B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QyxFQUFFO0FBQUVDLFNBQUMsRUFBRTtBQUFMLE9BSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKO0FBU0UsTUFBRSxFQUFDLFlBVEw7QUFVRSxXQUFPLEVBQUMsWUFWVjtBQVdFLFdBQU8sRUFBQyxRQVhWO0FBWUUsS0FBQyxFQUFFO0FBQUVBLE9BQUMsRUFBRSxRQUFMO0FBQWVDLE9BQUMsRUFBRTtBQUFsQixLQVpMO0FBYUUsVUFBTSxFQUFDLEdBYlQ7QUFjRSxlQUFXLEVBQUMsR0FkZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRGLENBREYsQ0E3REosQ0FaRixDQURGO0FBNEdEOztHQTFNdUI1RCxRO1VBRVRFLHVELEVBQ0lHLHVELEVBSUZPLHNEOzs7S0FQT1osUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL29mZmVycy45Yjc4YjE4MjYzYTRjZDkwYzgxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5jaG9yLCBCdXR0b24sIERpdiwgRHJvcGRvd24sIEljb24sIEltYWdlLCBUYWcsIFRleHQgfSBmcm9tIFwiYXRvbWl6ZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUHJvZmlsZUxvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9wcm9maWxlX2xvYWRlclwiO1xyXG5pbXBvcnQgRW1wdHlMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhcnRzL2VtcHR5X2xpc3RcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG5pbXBvcnQgUHJvZmlsZUxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL3Byb2ZpbGVfbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29raW5ncygpIHtcclxuICAvLyBHZXR0aW5nIGF1dGggc3RhdGUgYW5kIHVzZXIgZGF0YSBmb3Igc3RydWN0dXJpbmcgdGhlIG5hdmJhclxyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB0b2tlbiA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbjtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaGFzU3RvcmUsIHNldEhhc1N0b3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzaG93Tiwgc2V0U2hvd05dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG1lbnVMaXN0ID0gKFxyXG4gICAgPERpdj5cclxuICAgICAgPEFuY2hvciBkPVwiYmxvY2tcIiBwPVwiNXB4IDEwcHhcIj5cclxuICAgICAgICBEZXRhaWxzXHJcbiAgICAgIDwvQW5jaG9yPlxyXG4gICAgICA8QW5jaG9yIHRleHRDb2xvcj1cImRhbmdlcjgwMFwiIGQ9XCJibG9ja1wiIHA9XCIxMHB4XCI+XHJcbiAgICAgICAgQ2FuY2VsXHJcbiAgICAgIDwvQW5jaG9yPlxyXG4gICAgPC9EaXY+XHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXJJdGVtcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1zdG9yZXMvYCxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHN0b3JlX3JlcykgPT4ge1xyXG4gICAgICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9b2ZmZXJUYWlsb3JzYCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGFzeW5jIChvcmRlcnNfcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0T3JkZXJzKG9yZGVyc19yZXMuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1vZmZlckZhYnJpY3NgLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAob3JkZXJzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcnNfcmUgPSBvcmRlcnNzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9yZGVycyhbLi4ub3JkZXJzLCAuLi5vcmRlcnNfcmVdKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3JkZXJzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9yZGVyc19yZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldFVzZXJJdGVtcygpO1xyXG4gIH0sIFtpZCwgdG9rZW4sIGRpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZmlsZUxheW91dCB0aXRsZT1cIk15IE9mZmVycyB8IFN0ZWVjaGl0XCI+XHJcbiAgICAgIDxEaXZcclxuICAgICAgICBwPVwiMjBweFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjY2NjXCIgfX1cclxuICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHRhZz1cImhlYWRlclwiIHRleHRTaXplPVwidGl0bGVcIj5cclxuICAgICAgICAgIE15IE9mZmVyc1xyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9EaXY+XHJcbiAgICAgIDxEaXYgdz1cIjEwMCVcIiBwPVwiMjBweFwiPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPFByb2ZpbGVMb2FkZXIgLz5cclxuICAgICAgICApIDogaGFzU3RvcmUgPyAoXHJcbiAgICAgICAgICBvcmRlcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8RW1wdHlMaXN0IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlMvTjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNyZWF0ZWQgb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtvcmRlcnMubWFwKChvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlMvTlwiPntpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ3JlYXRlZCBvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKG8uY3JlYXRlZEF0KS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvLmNvbnNpZGVyYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17XCLigqZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIW8uZGVjbGluZS5pc19kZWNsaW5lICYmICFvLmFjY2VwdC5pc19hY2NlcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ3YXJuaW5nNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby5hY2NlcHQuaXNfYWNjZXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic3VjY2VzczcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZGFuZ2VyNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshby5kZWNsaW5lLmlzX2RlY2xpbmUgJiYgIW8uYWNjZXB0LmlzX2FjY2VwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJQZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG8uYWNjZXB0LmlzX2FjY2VwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJBY2NlcHRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkRlY2xpbmVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QW5jaG9yIHRleHRDb2xvcj1cImRhbmdlcjgwMFwiIGQ9XCJibG9ja1wiIHA9XCIxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9BbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxEaXYgdz1cIjEwMCVcIiBoPVwiMzAwcHhcIiBkPVwiZmxleFwiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8RGl2IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hc3NldHMuamlqaS5uZy9zdGF0aWMvaW1nL3Byb2ZpbGUtcmVkZXNpZ24vYWR2ZXJ0cy9uby1hZHZlcnRzLWltYWdlcy9uby1hZHZlcnRzLWFjdGl2ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICBtPXt7IGI6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJoZWFkZXJcIiB0ZXh0U2l6ZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBZb3UgZG9uJ3QgaGF2ZSBhIHN0b3JlXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHByZWZpeD17XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbT17eyByOiBcIjAuNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiZz1cIndhcm5pbmc3MDBcIlxyXG4gICAgICAgICAgICAgICAgaG92ZXJCZz1cIndhcm5pbmc4MDBcIlxyXG4gICAgICAgICAgICAgICAgcm91bmRlZD1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICBwPXt7IHI6IFwiMS41cmVtXCIsIGw6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICBzaGFkb3c9XCIzXCJcclxuICAgICAgICAgICAgICAgIGhvdmVyU2hhZG93PVwiNFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIHlvdXIgc3RvcmVcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Rpdj5cclxuICAgIDwvUHJvZmlsZUxheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=