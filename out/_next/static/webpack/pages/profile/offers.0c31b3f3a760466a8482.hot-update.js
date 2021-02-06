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
  }, "Offer ID"), __jsx("th", {
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
      "data-label": "Offer ID",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    }, i.offerRef), __jsx("td", {
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
} //

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9vZmZlcnMuanMiXSwibmFtZXMiOlsiQm9va2luZ3MiLCJhdXRoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2tlbiIsInN0b3JlIiwiZ2V0U3RhdGUiLCJpZCIsIl9pZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwib3JkZXJzIiwic2V0T3JkZXJzIiwiaGFzU3RvcmUiLCJzZXRIYXNTdG9yZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd04iLCJzZXRTaG93TiIsIm1lbnVMaXN0IiwidXNlRWZmZWN0IiwiZ2V0VXNlckl0ZW1zIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicGFyYW1zIiwidXNlciIsInRoZW4iLCJzdG9yZV9yZXMiLCJvcmRlcnNfcmVzIiwiZGF0YSIsIm9yZGVyc3MiLCJvcmRlcnNfcmUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJib3JkZXJCb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJvIiwiaSIsIm9mZmVyUmVmIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvRGF0ZVN0cmluZyIsImNvbnNpZGVyYXRpb24iLCJkZWNsaW5lIiwiaXNfZGVjbGluZSIsImFjY2VwdCIsImlzX2FjY2VwdCIsImIiLCJyIiwibCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDakM7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsSUFBakI7QUFBQSxHQUFELENB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RUFNRSxNQUFDLDRDQUFEO0FBQU0sT0FBRyxFQUFDLFFBQVY7QUFBbUIsWUFBUSxFQUFDLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTkYsRUFTRSxNQUFDLDhDQUFEO0FBQ0UsVUFBTSxFQUNKLE1BQUMsNENBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsV0FBSyxFQUFDLE9BSFI7QUFJRSxPQUFDLEVBQUU7QUFBRUMsU0FBQyxFQUFFO0FBQUwsT0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRko7QUFTRSxNQUFFLEVBQUMsWUFUTDtBQVVFLFdBQU8sRUFBQyxZQVZWO0FBV0UsV0FBTyxFQUFDLFFBWFY7QUFZRSxLQUFDLEVBQUU7QUFBRUEsT0FBQyxFQUFFLFFBQUw7QUFBZUMsT0FBQyxFQUFFO0FBQWxCLEtBWkw7QUFhRSxVQUFNLEVBQUMsR0FiVDtBQWNFLGVBQVcsRUFBQyxHQWRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEYsQ0FERixDQTdESixDQXhCRixDQURGO0FBd0hELEMsQ0FDRDs7R0F2TndCN0QsUTtVQUVURSx1RCxFQUNJRyx1RCxFQUlGTyxzRDs7O0tBUE9aLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9vZmZlcnMuMGMzMWIzZjNhNzYwNDY2YTg0ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciwgQnV0dG9uLCBEaXYsIERyb3Bkb3duLCBJY29uLCBJbWFnZSwgVGFnLCBUZXh0IH0gZnJvbSBcImF0b21pemVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFByb2ZpbGVMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFydHMvcHJvZmlsZV9sb2FkZXJcIjtcclxuaW1wb3J0IEVtcHR5TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9lbXB0eV9saXN0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuaW1wb3J0IFByb2ZpbGVMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9wcm9maWxlX2xheW91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va2luZ3MoKSB7XHJcbiAgLy8gR2V0dGluZyBhdXRoIHN0YXRlIGFuZCB1c2VyIGRhdGEgZm9yIHN0cnVjdHVyaW5nIHRoZSBuYXZiYXJcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBzdG9yZS5nZXRTdGF0ZSgpLmF1dGgudG9rZW47XHJcbiAgY29uc3QgaWQgPSBhdXRoLl9pZDtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2hhc1N0b3JlLCBzZXRIYXNTdG9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2hvd04sIHNldFNob3dOXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBtZW51TGlzdCA9IChcclxuICAgIDxEaXY+XHJcbiAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgcD1cIjVweCAxMHB4XCI+XHJcbiAgICAgICAgRGV0YWlsc1xyXG4gICAgICA8L0FuY2hvcj5cclxuICAgICAgPEFuY2hvciB0ZXh0Q29sb3I9XCJkYW5nZXI4MDBcIiBkPVwiYmxvY2tcIiBwPVwiMTBweFwiPlxyXG4gICAgICAgIENhbmNlbFxyXG4gICAgICA8L0FuY2hvcj5cclxuICAgIDwvRGl2PlxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VySXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9c3RvcmVzL2AsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB1c2VyOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChzdG9yZV9yZXMpID0+IHtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfW9mZmVyVGFpbG9yc2AsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihhc3luYyAob3JkZXJzX3JlcykgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE9yZGVycyhvcmRlcnNfcmVzLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9b2ZmZXJGYWJyaWNzYCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKG9yZGVyc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzX3JlID0gb3JkZXJzcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcmRlcnMoWy4uLm9yZGVycywgLi4ub3JkZXJzX3JlXSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9yZGVycyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnNfcmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBnZXRVc2VySXRlbXMoKTtcclxuICB9LCBbaWQsIHRva2VuLCBkaXNwYXRjaF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2ZpbGVMYXlvdXQgdGl0bGU9XCJNeSBPZmZlcnMgfCBTdGVlY2hpdFwiPlxyXG4gICAgICA8RGl2XHJcbiAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2NjY1wiIH19XHJcbiAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB0YWc9XCJoZWFkZXJcIiB0ZXh0U2l6ZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICBNeSBPZmZlcnNcclxuICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgaXNPcGVuPXtzaG93Tn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0U2hvd04odHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgYm9yZGVyPVwibm9uZVwiXHJcbiAgICAgICAgICBtZW51PXttZW51TGlzdH1cclxuICAgICAgICAgIHc9XCJmaXQtY29udGVudFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgbW9yZVxyXG4gICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgICA8RGl2IHc9XCIxMDAlXCIgcD1cIjIwcHhcIj5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxQcm9maWxlTG9hZGVyIC8+XHJcbiAgICAgICAgKSA6IGhhc1N0b3JlID8gKFxyXG4gICAgICAgICAgb3JkZXJzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgPEVtcHR5TGlzdCAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5PZmZlciBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNyZWF0ZWQgb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtvcmRlcnMubWFwKChvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIk9mZmVyIElEXCI+e2kub2ZmZXJSZWZ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNyZWF0ZWQgb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShvLmNyZWF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFtb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17by5jb25zaWRlcmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9e1wi4oKmXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJTdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFvLmRlY2xpbmUuaXNfZGVjbGluZSAmJiAhby5hY2NlcHQuaXNfYWNjZXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwid2FybmluZzcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG8uYWNjZXB0LmlzX2FjY2VwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInN1Y2Nlc3M2MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImRhbmdlcjcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IW8uZGVjbGluZS5pc19kZWNsaW5lICYmICFvLmFjY2VwdC5pc19hY2NlcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiUGVuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLmFjY2VwdC5pc19hY2NlcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQWNjZXB0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJEZWNsaW5lZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFuY2hvciB0ZXh0Q29sb3I9XCJkYW5nZXI4MDBcIiBkPVwiYmxvY2tcIiBwPVwiMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RGl2IHc9XCIxMDAlXCIgaD1cIjMwMHB4XCIgZD1cImZsZXhcIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPERpdiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXNzZXRzLmppamkubmcvc3RhdGljL2ltZy9wcm9maWxlLXJlZGVzaWduL2FkdmVydHMvbm8tYWR2ZXJ0cy1pbWFnZXMvbm8tYWR2ZXJ0cy1hY3RpdmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgbT17eyBiOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHQgdGFnPVwiaGVhZGVyXCIgdGV4dFNpemU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgWW91IGRvbid0IGhhdmUgYSBzdG9yZVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBwcmVmaXg9e1xyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJTdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG09e3sgcjogXCIwLjVyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmc9XCJ3YXJuaW5nNzAwXCJcclxuICAgICAgICAgICAgICAgIGhvdmVyQmc9XCJ3YXJuaW5nODAwXCJcclxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgcD17eyByOiBcIjEuNXJlbVwiLCBsOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgc2hhZG93PVwiM1wiXHJcbiAgICAgICAgICAgICAgICBob3ZlclNoYWRvdz1cIjRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENyZWF0ZSB5b3VyIHN0b3JlXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9EaXY+XHJcbiAgICA8L1Byb2ZpbGVMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4vL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9