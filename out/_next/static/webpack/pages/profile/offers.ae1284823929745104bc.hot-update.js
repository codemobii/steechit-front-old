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
  }, "My Offers"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    isOpen: showN,
    onClick: function onClick() {
      setShowN(true);
    },
    border: "none",
    menu: menuList,
    w: "fit-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "more")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    w: "100%",
    p: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }) : hasStore ? orders.length === 0 ? __jsx(_components_parts_empty_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }) : __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, "S/N"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }, "Created on"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, "Amount"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, "Status"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }, "Action"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, orders.map(function (o, i) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, __jsx("td", {
      "data-label": "S/N",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    }, i + 1), __jsx("td", {
      "data-label": "Created on",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }
    }, new Date(o.createdAt).toDateString()), __jsx("td", {
      "data-label": "Amount",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
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
        lineNumber: 156,
        columnNumber: 23
      }
    })), __jsx("td", {
      "data-label": "Status",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 21
      }
    }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      bg: !o.decline.is_decline && !o.accept.is_accept ? "warning700" : o.accept.is_accept ? "success600" : "danger700",
      textColor: "white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 23
      }
    }, !o.decline.is_decline && !o.accept.is_accept ? "Pending" : o.accept.is_accept ? "Accepted" : "Declined")), __jsx("td", {
      "data-label": "Action",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }
    }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
      textColor: "danger800",
      d: "block",
      p: "10px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
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
      lineNumber: 192,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    textAlign: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 194,
      columnNumber: 15
    }
  }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
        lineNumber: 204,
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
      lineNumber: 202,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9vZmZlcnMuanMiXSwibmFtZXMiOlsiQm9va2luZ3MiLCJhdXRoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2tlbiIsInN0b3JlIiwiZ2V0U3RhdGUiLCJpZCIsIl9pZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwib3JkZXJzIiwic2V0T3JkZXJzIiwiaGFzU3RvcmUiLCJzZXRIYXNTdG9yZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd04iLCJzZXRTaG93TiIsIm1lbnVMaXN0IiwidXNlRWZmZWN0IiwiZ2V0VXNlckl0ZW1zIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicGFyYW1zIiwidXNlciIsInRoZW4iLCJzdG9yZV9yZXMiLCJvcmRlcnNfcmVzIiwiZGF0YSIsIm9yZGVyc3MiLCJvcmRlcnNfcmUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJib3JkZXJCb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJvIiwiaSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0RhdGVTdHJpbmciLCJjb25zaWRlcmF0aW9uIiwiZGVjbGluZSIsImlzX2RlY2xpbmUiLCJhY2NlcHQiLCJpc19hY2NlcHQiLCJiIiwiciIsImwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQ2pDO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLElBQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1B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QUQ7QUFBTSxPQUFHLEVBQUMsUUFBVjtBQUFtQixZQUFRLEVBQUMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFORixFQVNFLE1BQUMsOENBQUQ7QUFDRSxVQUFNLEVBQ0osTUFBQyw0Q0FBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsVUFBSSxFQUFDLE1BRlA7QUFHRSxXQUFLLEVBQUMsT0FIUjtBQUlFLE9BQUMsRUFBRTtBQUFFQyxTQUFDLEVBQUU7QUFBTCxPQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSjtBQVNFLE1BQUUsRUFBQyxZQVRMO0FBVUUsV0FBTyxFQUFDLFlBVlY7QUFXRSxXQUFPLEVBQUMsUUFYVjtBQVlFLEtBQUMsRUFBRTtBQUFFQSxPQUFDLEVBQUUsUUFBTDtBQUFlQyxPQUFDLEVBQUU7QUFBbEIsS0FaTDtBQWFFLFVBQU0sRUFBQyxHQWJUO0FBY0UsZUFBVyxFQUFDLEdBZGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFURixDQURGLENBN0RKLENBeEJGLENBREY7QUF3SEQ7O0dBdE51QjVELFE7VUFFVEUsdUQsRUFDSUcsdUQsRUFJRk8sc0Q7OztLQVBPWixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvb2ZmZXJzLmFlMTI4NDgyMzkyOTc0NTEwNGJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJ1dHRvbiwgRGl2LCBEcm9wZG93biwgSWNvbiwgSW1hZ2UsIFRhZywgVGV4dCB9IGZyb20gXCJhdG9taXplXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQcm9maWxlTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhcnRzL3Byb2ZpbGVfbG9hZGVyXCI7XHJcbmltcG9ydCBFbXB0eUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFydHMvZW1wdHlfbGlzdFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcbmltcG9ydCBQcm9maWxlTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvcHJvZmlsZV9sYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tpbmdzKCkge1xyXG4gIC8vIEdldHRpbmcgYXV0aCBzdGF0ZSBhbmQgdXNlciBkYXRhIGZvciBzdHJ1Y3R1cmluZyB0aGUgbmF2YmFyXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHRva2VuID0gc3RvcmUuZ2V0U3RhdGUoKS5hdXRoLnRva2VuO1xyXG4gIGNvbnN0IGlkID0gYXV0aC5faWQ7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtoYXNTdG9yZSwgc2V0SGFzU3RvcmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3dOLCBzZXRTaG93Tl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgbWVudUxpc3QgPSAoXHJcbiAgICA8RGl2PlxyXG4gICAgICA8QW5jaG9yIGQ9XCJibG9ja1wiIHA9XCI1cHggMTBweFwiPlxyXG4gICAgICAgIERldGFpbHNcclxuICAgICAgPC9BbmNob3I+XHJcbiAgICAgIDxBbmNob3IgdGV4dENvbG9yPVwiZGFuZ2VyODAwXCIgZD1cImJsb2NrXCIgcD1cIjEwcHhcIj5cclxuICAgICAgICBDYW5jZWxcclxuICAgICAgPC9BbmNob3I+XHJcbiAgICA8L0Rpdj5cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VXNlckl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfXN0b3Jlcy9gLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAoc3RvcmVfcmVzKSA9PiB7XHJcbiAgICAgICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1vZmZlclRhaWxvcnNgLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKG9yZGVyc19yZXMpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcmRlcnMob3JkZXJzX3Jlcy5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfW9mZmVyRmFicmljc2AsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIChvcmRlcnNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyc19yZSA9IG9yZGVyc3MuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3JkZXJzKFsuLi5vcmRlcnMsIC4uLm9yZGVyc19yZV0pO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cob3JkZXJzX3Jlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlckl0ZW1zKCk7XHJcbiAgfSwgW2lkLCB0b2tlbiwgZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9maWxlTGF5b3V0IHRpdGxlPVwiTXkgT2ZmZXJzIHwgU3RlZWNoaXRcIj5cclxuICAgICAgPERpdlxyXG4gICAgICAgIHA9XCIyMHB4XCJcclxuICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNjY2NcIiB9fVxyXG4gICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQgdGFnPVwiaGVhZGVyXCIgdGV4dFNpemU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgTXkgT2ZmZXJzXHJcbiAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgIGlzT3Blbj17c2hvd059XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNob3dOKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGJvcmRlcj1cIm5vbmVcIlxyXG4gICAgICAgICAgbWVudT17bWVudUxpc3R9XHJcbiAgICAgICAgICB3PVwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIG1vcmVcclxuICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICA8L0Rpdj5cclxuICAgICAgPERpdiB3PVwiMTAwJVwiIHA9XCIyMHB4XCI+XHJcbiAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8UHJvZmlsZUxvYWRlciAvPlxyXG4gICAgICAgICkgOiBoYXNTdG9yZSA/IChcclxuICAgICAgICAgIG9yZGVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgIDxFbXB0eUxpc3QgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Uy9OPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q3JlYXRlZCBvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge29yZGVycy5tYXAoKG8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiUy9OXCI+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJDcmVhdGVkIG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoby5jcmVhdGVkQXQpLnRvRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJBbW91bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e28uY29uc2lkZXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PXtcIuKCplwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhby5kZWNsaW5lLmlzX2RlY2xpbmUgJiYgIW8uYWNjZXB0LmlzX2FjY2VwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIndhcm5pbmc3MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLmFjY2VwdC5pc19hY2NlcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzdWNjZXNzNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJkYW5nZXI3MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFvLmRlY2xpbmUuaXNfZGVjbGluZSAmJiAhby5hY2NlcHQuaXNfYWNjZXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogby5hY2NlcHQuaXNfYWNjZXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkFjY2VwdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiRGVjbGluZWRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJBY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBbmNob3IgdGV4dENvbG9yPVwiZGFuZ2VyODAwXCIgZD1cImJsb2NrXCIgcD1cIjEwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIClcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPERpdiB3PVwiMTAwJVwiIGg9XCIzMDBweFwiIGQ9XCJmbGV4XCIgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxEaXYgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Fzc2V0cy5qaWppLm5nL3N0YXRpYy9pbWcvcHJvZmlsZS1yZWRlc2lnbi9hZHZlcnRzL25vLWFkdmVydHMtaW1hZ2VzL25vLWFkdmVydHMtYWN0aXZlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgIG09e3sgYjogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRhZz1cImhlYWRlclwiIHRleHRTaXplPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFlvdSBkb24ndCBoYXZlIGEgc3RvcmVcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgcHJlZml4PXtcclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBtPXt7IHI6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJnPVwid2FybmluZzcwMFwiXHJcbiAgICAgICAgICAgICAgICBob3ZlckJnPVwid2FybmluZzgwMFwiXHJcbiAgICAgICAgICAgICAgICByb3VuZGVkPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgIHA9e3sgcjogXCIxLjVyZW1cIiwgbDogXCIxcmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIHNoYWRvdz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgaG92ZXJTaGFkb3c9XCI0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDcmVhdGUgeW91ciBzdG9yZVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgPC9Qcm9maWxlTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==