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
                              var order_n;
                              return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      order_n = orders_res.data;
                                      setOrder(_objectSpread(_objectSpread({}, order), {}, {
                                        order_n: order_n
                                      }));
                                      console.log(orders_res);

                                    case 3:
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
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, "My Contracts")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    w: "100%",
    p: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }) : orders.length === 0 ? __jsx(_components_parts_empty_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }) : __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "Contract Ref"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "Date"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, "Status"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "Amount"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "Action"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, orders.map(function (o) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }
    }, __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 19
      }
    }, o.contractRef), __jsx("td", {
      "data-label": "Date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 19
      }
    }, new Date(o.createdAt).toDateString()), __jsx("td", {
      "data-label": "Status",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      bg: o.isClosed ? "success600" : "danger600",
      textColor: "white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }, o.isClosed ? "Successful" : "Pending")), __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
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
        lineNumber: 148,
        columnNumber: 21
      }
    })), __jsx("td", {
      "data-label": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
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
        lineNumber: 156,
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
      lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9jb250cmFjdHMuanMiXSwibmFtZXMiOlsiQ29udHJhY3RzIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiaWQiLCJfaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIm9yZGVyIiwic2V0T3JkZXIiLCJsb2FkaW5nT3JkZXIiLCJzZXRMb2FkaW5nT3JkZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZUVmZmVjdCIsImdldFVzZXJJdGVtcyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm94eSIsImhvc3QiLCJwb3J0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInBhcmFtcyIsImN1c3RvbWVyIiwidGhlbiIsIm9yZGVyc19yZXMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0T3JkZXIiLCJyZXMiLCJzYW1wbGUiLCJvcmRlcl9uIiwiYm9yZGVyQm90dG9tIiwibGVuZ3RoIiwibWFwIiwibyIsImNvbnRyYWN0UmVmIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvRGF0ZVN0cmluZyIsImlzQ2xvc2VkIiwiZmFicmljcyIsImNvbnNpZGVyYXRpb24iLCJvZmZlckZhYnJpY3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFDbEM7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUss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QUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQWJGLEVBcUJFO0FBQUksb0JBQVcsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx3RUFBRDtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU1kLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDTSxPQUFGLENBQVUsQ0FBVixFQUFhRSxZQUFkLENBQWQ7QUFBQSxPQURYO0FBRUUsV0FBSyxFQUFDLGNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBckJGLENBRFU7QUFBQSxHQUFYLENBREgsQ0FWRixDQU5KLENBWkYsRUFnRUUsTUFBQyw0RUFBRDtBQUNFLFdBQU8sRUFBRXhDLFlBRFg7QUFFRSxTQUFLLEVBQUVGLEtBRlQ7QUFHRSxVQUFNLEVBQUVNLE1BSFY7QUFJRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEVGLENBREY7QUF5RUQ7O0dBbEt1QnZCLFM7VUFFVEUsdUQsRUFDSUcsdUQsRUFJRk8sc0Q7OztLQVBPWixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvY29udHJhY3RzLjM4OWRiMDk4NjNlYmI2NTY5NTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIERpdiwgSWNvbiwgSW1hZ2UsIFRhZywgVGV4dCB9IGZyb20gXCJhdG9taXplXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQcm9maWxlTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhcnRzL3Byb2ZpbGVfbG9hZGVyXCI7XHJcbmltcG9ydCBFbXB0eUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFydHMvZW1wdHlfbGlzdFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b25zL21haW5fYnV0dG9uXCI7XHJcbmltcG9ydCBQcm9maWxlTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvcHJvZmlsZV9sYXlvdXRcIjtcclxuaW1wb3J0IE9yZGVySW5mb01vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZGFscy9vcmRlcl9pbmZvX21vZGFsXCI7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyYWN0cygpIHtcclxuICAvLyBHZXR0aW5nIGF1dGggc3RhdGUgYW5kIHVzZXIgZGF0YSBmb3Igc3RydWN0dXJpbmcgdGhlIG5hdmJhclxyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB0b2tlbiA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbjtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZ09yZGVyLCBzZXRMb2FkaW5nT3JkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXJJdGVtcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1jb250cmFjdC9gLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgY3VzdG9tZXI6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKG9yZGVyc19yZXMpID0+IHtcclxuICAgICAgICAgIHNldE9yZGVycyhvcmRlcnNfcmVzLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlckl0ZW1zKCk7XHJcbiAgfSwgW2lkLCB0b2tlbiwgZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgZ2V0T3JkZXIgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHNldExvYWRpbmdPcmRlcih0cnVlKTtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm94eToge1xyXG4gICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfW9mZmVyRmFicmljcy8ke2lkfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0T3JkZXIocmVzLmRhdGEpO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1wcm9kdWN0cy8ke3Jlcy5kYXRhLnNhbXBsZVswXX1gLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihhc3luYyAob3JkZXJzX3JlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlcl9uID0gb3JkZXJzX3Jlcy5kYXRhO1xyXG4gICAgICAgICAgICBzZXRPcmRlcih7IC4uLm9yZGVyLCBvcmRlcl9uIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnNfcmVzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nT3JkZXIoZmFsc2UpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2ZpbGVMYXlvdXQgdGl0bGU9XCJNeSBDb250cmFjdHMgfCBTdGVlY2hpdFwiPlxyXG4gICAgICA8RGl2XHJcbiAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2NjY1wiIH19XHJcbiAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB0YWc9XCJoZWFkZXJcIiB0ZXh0U2l6ZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICBNeSBDb250cmFjdHNcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgICA8RGl2IHc9XCIxMDAlXCIgcD1cIjIwcHhcIj5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxQcm9maWxlTG9hZGVyIC8+XHJcbiAgICAgICAgKSA6IG9yZGVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8RW1wdHlMaXN0IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q29udHJhY3QgUmVmPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7b3JkZXJzLm1hcCgobykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNvbnRyYWN0IFJlZlwiPntvLmNvbnRyYWN0UmVmfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShvLmNyZWF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmc9e28uaXNDbG9zZWQgPyBcInN1Y2Nlc3M2MDBcIiA6IFwiZGFuZ2VyNjAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge28uaXNDbG9zZWQgPyBcIlN1Y2Nlc3NmdWxcIiA6IFwiUGVuZGluZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNvbnRyYWN0IFJlZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvLmZhYnJpY3NbMF0uY29uc2lkZXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZml4PXtcIuKCplwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldE9yZGVyKG8uZmFicmljc1swXS5vZmZlckZhYnJpY3MpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaG93IGRldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Rpdj5cclxuICAgICAgey8qIEluZm8gTW9kYWwgKi99XHJcbiAgICAgIDxPcmRlckluZm9Nb2RhbFxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmdPcmRlcn1cclxuICAgICAgICBvcmRlcj17b3JkZXJ9XHJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgIDwvUHJvZmlsZUxheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=