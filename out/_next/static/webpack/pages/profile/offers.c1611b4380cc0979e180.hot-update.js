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
  }, "Offer to tailors"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    textColor: "danger800",
    d: "block",
    p: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Offer to fabric stores"));

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
  }, "Filter offer list")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
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
    }, o.offerRef), __jsx("td", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9vZmZlcnMuanMiXSwibmFtZXMiOlsiQm9va2luZ3MiLCJhdXRoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2tlbiIsInN0b3JlIiwiZ2V0U3RhdGUiLCJpZCIsIl9pZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwib3JkZXJzIiwic2V0T3JkZXJzIiwiaGFzU3RvcmUiLCJzZXRIYXNTdG9yZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd04iLCJzZXRTaG93TiIsIm1lbnVMaXN0IiwidXNlRWZmZWN0IiwiZ2V0VXNlckl0ZW1zIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicGFyYW1zIiwidXNlciIsInRoZW4iLCJzdG9yZV9yZXMiLCJvcmRlcnNfcmVzIiwiZGF0YSIsIm9yZGVyc3MiLCJvcmRlcnNfcmUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJib3JkZXJCb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJvIiwiaSIsIm9mZmVyUmVmIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvRGF0ZVN0cmluZyIsImNvbnNpZGVyYXRpb24iLCJkZWNsaW5lIiwiaXNfZGVjbGluZSIsImFjY2VwdCIsImlzX2FjY2VwdCIsImIiLCJyIiwibCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDakM7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsSUFBakI7QUFBQSxHQUFELENB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REYsRUFNRSxNQUFDLDRDQUFEO0FBQU0sT0FBRyxFQUFDLFFBQVY7QUFBbUIsWUFBUSxFQUFDLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTkYsRUFTRSxNQUFDLDhDQUFEO0FBQ0UsVUFBTSxFQUNKLE1BQUMsNENBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsV0FBSyxFQUFDLE9BSFI7QUFJRSxPQUFDLEVBQUU7QUFBRUMsU0FBQyxFQUFFO0FBQUwsT0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRko7QUFTRSxNQUFFLEVBQUMsWUFUTDtBQVVFLFdBQU8sRUFBQyxZQVZWO0FBV0UsV0FBTyxFQUFDLFFBWFY7QUFZRSxLQUFDLEVBQUU7QUFBRUEsT0FBQyxFQUFFLFFBQUw7QUFBZUMsT0FBQyxFQUFFO0FBQWxCLEtBWkw7QUFhRSxVQUFNLEVBQUMsR0FiVDtBQWNFLGVBQVcsRUFBQyxHQWRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEYsQ0FERixDQTdESixDQXhCRixDQURGO0FBd0hELEMsQ0FDRDs7R0F2TndCN0QsUTtVQUVURSx1RCxFQUNJRyx1RCxFQUlGTyxzRDs7O0tBUE9aLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9vZmZlcnMuYzE2MTFiNDM4MGNjMDk3OWUxODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciwgQnV0dG9uLCBEaXYsIERyb3Bkb3duLCBJY29uLCBJbWFnZSwgVGFnLCBUZXh0IH0gZnJvbSBcImF0b21pemVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFByb2ZpbGVMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFydHMvcHJvZmlsZV9sb2FkZXJcIjtcclxuaW1wb3J0IEVtcHR5TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9lbXB0eV9saXN0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuaW1wb3J0IFByb2ZpbGVMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9wcm9maWxlX2xheW91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va2luZ3MoKSB7XHJcbiAgLy8gR2V0dGluZyBhdXRoIHN0YXRlIGFuZCB1c2VyIGRhdGEgZm9yIHN0cnVjdHVyaW5nIHRoZSBuYXZiYXJcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBzdG9yZS5nZXRTdGF0ZSgpLmF1dGgudG9rZW47XHJcbiAgY29uc3QgaWQgPSBhdXRoLl9pZDtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2hhc1N0b3JlLCBzZXRIYXNTdG9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2hvd04sIHNldFNob3dOXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBtZW51TGlzdCA9IChcclxuICAgIDxEaXY+XHJcbiAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgcD1cIjVweCAxMHB4XCI+XHJcbiAgICAgICAgT2ZmZXIgdG8gdGFpbG9yc1xyXG4gICAgICA8L0FuY2hvcj5cclxuICAgICAgPEFuY2hvciB0ZXh0Q29sb3I9XCJkYW5nZXI4MDBcIiBkPVwiYmxvY2tcIiBwPVwiMTBweFwiPlxyXG4gICAgICAgIE9mZmVyIHRvIGZhYnJpYyBzdG9yZXNcclxuICAgICAgPC9BbmNob3I+XHJcbiAgICA8L0Rpdj5cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VXNlckl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfXN0b3Jlcy9gLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAoc3RvcmVfcmVzKSA9PiB7XHJcbiAgICAgICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1vZmZlclRhaWxvcnNgLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKG9yZGVyc19yZXMpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcmRlcnMob3JkZXJzX3Jlcy5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfW9mZmVyRmFicmljc2AsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIChvcmRlcnNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyc19yZSA9IG9yZGVyc3MuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3JkZXJzKFsuLi5vcmRlcnMsIC4uLm9yZGVyc19yZV0pO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cob3JkZXJzX3Jlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlckl0ZW1zKCk7XHJcbiAgfSwgW2lkLCB0b2tlbiwgZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9maWxlTGF5b3V0IHRpdGxlPVwiTXkgT2ZmZXJzIHwgU3RlZWNoaXRcIj5cclxuICAgICAgPERpdlxyXG4gICAgICAgIHA9XCIyMHB4XCJcclxuICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNjY2NcIiB9fVxyXG4gICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQgdGFnPVwiaGVhZGVyXCIgdGV4dFNpemU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgTXkgT2ZmZXJzXHJcbiAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgIGlzT3Blbj17c2hvd059XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNob3dOKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGJvcmRlcj1cIm5vbmVcIlxyXG4gICAgICAgICAgbWVudT17bWVudUxpc3R9XHJcbiAgICAgICAgICB3PVwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEZpbHRlciBvZmZlciBsaXN0XHJcbiAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgPC9EaXY+XHJcbiAgICAgIDxEaXYgdz1cIjEwMCVcIiBwPVwiMjBweFwiPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPFByb2ZpbGVMb2FkZXIgLz5cclxuICAgICAgICApIDogaGFzU3RvcmUgPyAoXHJcbiAgICAgICAgICBvcmRlcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8RW1wdHlMaXN0IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk9mZmVyIElEPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q3JlYXRlZCBvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge29yZGVycy5tYXAoKG8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiT2ZmZXIgSURcIj57by5vZmZlclJlZn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ3JlYXRlZCBvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKG8uY3JlYXRlZEF0KS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvLmNvbnNpZGVyYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17XCLigqZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIW8uZGVjbGluZS5pc19kZWNsaW5lICYmICFvLmFjY2VwdC5pc19hY2NlcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ3YXJuaW5nNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby5hY2NlcHQuaXNfYWNjZXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic3VjY2VzczYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZGFuZ2VyNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshby5kZWNsaW5lLmlzX2RlY2xpbmUgJiYgIW8uYWNjZXB0LmlzX2FjY2VwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJQZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG8uYWNjZXB0LmlzX2FjY2VwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJBY2NlcHRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkRlY2xpbmVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QW5jaG9yIHRleHRDb2xvcj1cImRhbmdlcjgwMFwiIGQ9XCJibG9ja1wiIHA9XCIxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9BbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxEaXYgdz1cIjEwMCVcIiBoPVwiMzAwcHhcIiBkPVwiZmxleFwiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8RGl2IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hc3NldHMuamlqaS5uZy9zdGF0aWMvaW1nL3Byb2ZpbGUtcmVkZXNpZ24vYWR2ZXJ0cy9uby1hZHZlcnRzLWltYWdlcy9uby1hZHZlcnRzLWFjdGl2ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICBtPXt7IGI6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJoZWFkZXJcIiB0ZXh0U2l6ZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBZb3UgZG9uJ3QgaGF2ZSBhIHN0b3JlXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHByZWZpeD17XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbT17eyByOiBcIjAuNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiZz1cIndhcm5pbmc3MDBcIlxyXG4gICAgICAgICAgICAgICAgaG92ZXJCZz1cIndhcm5pbmc4MDBcIlxyXG4gICAgICAgICAgICAgICAgcm91bmRlZD1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICBwPXt7IHI6IFwiMS41cmVtXCIsIGw6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICBzaGFkb3c9XCIzXCJcclxuICAgICAgICAgICAgICAgIGhvdmVyU2hhZG93PVwiNFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIHlvdXIgc3RvcmVcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Rpdj5cclxuICAgIDwvUHJvZmlsZUxheW91dD5cclxuICApO1xyXG59XHJcbi8vXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=