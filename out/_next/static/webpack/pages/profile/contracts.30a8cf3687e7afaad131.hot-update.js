webpackHotUpdate_N_E("pages/profile/contracts",{

/***/ "./pages/profile/contracts.js":
/*!************************************!*\
  !*** ./pages/profile/contracts.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contracts; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _components_buttons_main_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/buttons/main_button */ "./components/buttons/main_button.js");
/* harmony import */ var _components_layouts_profile_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/layouts/profile_layout */ "./components/layouts/profile_layout.js");
/* harmony import */ var _components_modals_order_info_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/modals/order_info_modal */ "./components/modals/order_info_modal.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");




var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\pages\\profile\\contracts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function Contracts() {
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      order = _useState2[0],
      setOrder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loadingOrder = _useState3[0],
      setLoadingOrder = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      isOpen = _useState5[0],
      setIsOpen = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var getUserItems = /*#__PURE__*/function () {
      var _ref = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
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
                  url: "".concat("https://api.steechit.com/", "contract/"),
                  params: {
                    customer: id
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(orders_res) {
                    return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            setOrders(orders_res.data);

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
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
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getUserItems() {
        return _ref.apply(this, arguments);
      };
    }();

    getUserItems();
  }, [id, token, dispatch]);

  var getOrder = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(id) {
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setLoadingOrder(true);
              setIsOpen(true);
              _context5.next = 4;
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
                url: "".concat("https://api.steechit.com/", "offerFabrics/").concat(id)
              }).then( /*#__PURE__*/function () {
                var _ref4 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(res) {
                  return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          setOrder(res.data);
                          _context4.next = 3;
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
                            url: "".concat("https://api.steechit.com/", "products/").concat(res.data.sample[0])
                          }).then( /*#__PURE__*/function () {
                            var _ref5 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(orders_res) {
                              var order_w, order_n, ordered;
                              return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      order_w = res.data;
                                      order_n = orders_res.data;
                                      ordered = _objectSpread({
                                        order_w: order_w
                                      }, order_n);
                                      setOrder(ordered);

                                    case 4:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3);
                            }));

                            return function (_x4) {
                              return _ref5.apply(this, arguments);
                            };
                          }())["catch"](function (error) {
                            console.log(error);
                          });

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x3) {
                  return _ref4.apply(this, arguments);
                };
              }())["catch"](function (error) {
                console.log(error);
              })["finally"](function () {
                return setLoadingOrder(false);
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getOrder(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(_components_layouts_profile_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "My Contracts | Steechit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "My Contracts")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    w: "100%",
    p: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }) : orders.length === 0 ? __jsx(_components_parts_empty_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }) : __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "Contract Ref"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, "Date"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "Status"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "Amount"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "Action"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, orders.map(function (o) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 19
      }
    }, o.contractRef), __jsx("td", {
      "data-label": "Date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 19
      }
    }, new Date(o.createdAt).toDateString()), __jsx("td", {
      "data-label": "Status",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 19
      }
    }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      bg: o.isClosed ? "success600" : "danger600",
      textColor: "white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 21
      }
    }, o.isClosed ? "Successful" : "Pending")), __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 19
      }
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_14__["default"], {
      value: o.fabrics[0].consideration,
      displayType: "text",
      thousandSeparator: true,
      prefix: "₦",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 21
      }
    })), __jsx("td", {
      "data-label": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 19
      }
    }, __jsx(_components_buttons_main_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onClick: function onClick() {
        return getOrder(o.fabrics[0].offerFabrics);
      },
      title: "Show details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }
    })));
  })))), __jsx(_components_modals_order_info_modal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    loading: loadingOrder,
    order: order,
    isOpen: isOpen,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }));
}

_s(Contracts, "VMBOpHpwFWwe4ujZgnoskr9mVv4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
});

_c = Contracts;

var _c;

$RefreshReg$(_c, "Contracts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9jb250cmFjdHMuanMiXSwibmFtZXMiOlsiQ29udHJhY3RzIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiaWQiLCJfaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIm9yZGVyIiwic2V0T3JkZXIiLCJsb2FkaW5nT3JkZXIiLCJzZXRMb2FkaW5nT3JkZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZUVmZmVjdCIsImdldFVzZXJJdGVtcyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm94eSIsImhvc3QiLCJwb3J0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInBhcmFtcyIsImN1c3RvbWVyIiwidGhlbiIsIm9yZGVyc19yZXMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0T3JkZXIiLCJyZXMiLCJzYW1wbGUiLCJvcmRlcl93Iiwib3JkZXJfbiIsIm9yZGVyZWQiLCJib3JkZXJCb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJvIiwiY29udHJhY3RSZWYiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9EYXRlU3RyaW5nIiwiaXNDbG9zZWQiLCJmYWJyaWNzIiwiY29uc2lkZXJhdGlvbiIsIm9mZmVyRmFicmljcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUNsQztBQUNBLE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxL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LE1BRmY7QUFHRSx1QkFBaUIsRUFBRSxJQUhyQjtBQUlFLFlBQU0sRUFBRSxHQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQWJGLEVBcUJFO0FBQUksb0JBQVcsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx3RUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1oQixRQUFRLENBQUNTLENBQUMsQ0FBQ00sT0FBRixDQUFVLENBQVYsRUFBYUUsWUFBZCxDQUFkO0FBQUEsT0FEWDtBQUVFLFdBQUssRUFBQyxjQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQXJCRixDQURVO0FBQUEsR0FBWCxDQURILENBVkYsQ0FOSixDQVpGLEVBZ0VFLE1BQUMsNEVBQUQ7QUFDRSxXQUFPLEVBQUUxQyxZQURYO0FBRUUsU0FBSyxFQUFFRixLQUZUO0FBR0UsVUFBTSxFQUFFTSxNQUhWO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTUMsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhFRixDQURGO0FBeUVEOztHQW5LdUJ2QixTO1VBRVRFLHVELEVBQ0lHLHVELEVBSUZPLHNEOzs7S0FQT1osUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL2NvbnRyYWN0cy4zMGE4Y2YzNjg3ZTdhZmFhZDEzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBEaXYsIEljb24sIEltYWdlLCBUYWcsIFRleHQgfSBmcm9tIFwiYXRvbWl6ZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUHJvZmlsZUxvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9wcm9maWxlX2xvYWRlclwiO1xyXG5pbXBvcnQgRW1wdHlMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhcnRzL2VtcHR5X2xpc3RcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9tYWluX2J1dHRvblwiO1xyXG5pbXBvcnQgUHJvZmlsZUxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL3Byb2ZpbGVfbGF5b3V0XCI7XHJcbmltcG9ydCBPcmRlckluZm9Nb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvb3JkZXJfaW5mb19tb2RhbFwiO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cmFjdHMoKSB7XHJcbiAgLy8gR2V0dGluZyBhdXRoIHN0YXRlIGFuZCB1c2VyIGRhdGEgZm9yIHN0cnVjdHVyaW5nIHRoZSBuYXZiYXJcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBzdG9yZS5nZXRTdGF0ZSgpLmF1dGgudG9rZW47XHJcbiAgY29uc3QgaWQgPSBhdXRoLl9pZDtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcmRlciwgc2V0TG9hZGluZ09yZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VySXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9Y29udHJhY3QvYCxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGN1c3RvbWVyOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChvcmRlcnNfcmVzKSA9PiB7XHJcbiAgICAgICAgICBzZXRPcmRlcnMob3JkZXJzX3Jlcy5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldFVzZXJJdGVtcygpO1xyXG4gIH0sIFtpZCwgdG9rZW4sIGRpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGdldE9yZGVyID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3JkZXIodHJ1ZSk7XHJcbiAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1vZmZlckZhYnJpY3MvJHtpZH1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIHNldE9yZGVyKHJlcy5kYXRhKTtcclxuICAgICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9cHJvZHVjdHMvJHtyZXMuZGF0YS5zYW1wbGVbMF19YCxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oYXN5bmMgKG9yZGVyc19yZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3JkZXJfdyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlcl9uID0gb3JkZXJzX3Jlcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlcmVkID0geyBvcmRlcl93LCAuLi5vcmRlcl9uIH07XHJcbiAgICAgICAgICAgIHNldE9yZGVyKG9yZGVyZWQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmdPcmRlcihmYWxzZSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZmlsZUxheW91dCB0aXRsZT1cIk15IENvbnRyYWN0cyB8IFN0ZWVjaGl0XCI+XHJcbiAgICAgIDxEaXZcclxuICAgICAgICBwPVwiMjBweFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjY2NjXCIgfX1cclxuICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHRhZz1cImhlYWRlclwiIHRleHRTaXplPVwidGl0bGVcIj5cclxuICAgICAgICAgIE15IENvbnRyYWN0c1xyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9EaXY+XHJcbiAgICAgIDxEaXYgdz1cIjEwMCVcIiBwPVwiMjBweFwiPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPFByb2ZpbGVMb2FkZXIgLz5cclxuICAgICAgICApIDogb3JkZXJzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxFbXB0eUxpc3QgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db250cmFjdCBSZWY8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHtvcmRlcnMubWFwKChvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ29udHJhY3QgUmVmXCI+e28uY29udHJhY3RSZWZ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKG8uY3JlYXRlZEF0KS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJTdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZz17by5pc0Nsb3NlZCA/IFwic3VjY2VzczYwMFwiIDogXCJkYW5nZXI2MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7by5pc0Nsb3NlZCA/IFwiU3VjY2Vzc2Z1bFwiIDogXCJQZW5kaW5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ29udHJhY3QgUmVmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e28uZmFicmljc1swXS5jb25zaWRlcmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9e1wi4oKmXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0T3JkZXIoby5mYWJyaWNzWzBdLm9mZmVyRmFicmljcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNob3cgZGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgICB7LyogSW5mbyBNb2RhbCAqL31cclxuICAgICAgPE9yZGVySW5mb01vZGFsXHJcbiAgICAgICAgbG9hZGluZz17bG9hZGluZ09yZGVyfVxyXG4gICAgICAgIG9yZGVyPXtvcmRlcn1cclxuICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxyXG4gICAgICAvPlxyXG4gICAgPC9Qcm9maWxlTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==