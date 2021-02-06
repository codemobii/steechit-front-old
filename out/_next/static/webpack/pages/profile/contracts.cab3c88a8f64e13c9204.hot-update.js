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
                                      console.log(order);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9jb250cmFjdHMuanMiXSwibmFtZXMiOlsiQ29udHJhY3RzIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiaWQiLCJfaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIm9yZGVyIiwic2V0T3JkZXIiLCJsb2FkaW5nT3JkZXIiLCJzZXRMb2FkaW5nT3JkZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZUVmZmVjdCIsImdldFVzZXJJdGVtcyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm94eSIsImhvc3QiLCJwb3J0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInBhcmFtcyIsImN1c3RvbWVyIiwidGhlbiIsIm9yZGVyc19yZXMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0T3JkZXIiLCJyZXMiLCJzYW1wbGUiLCJvcmRlcl9uIiwiYm9yZGVyQm90dG9tIiwibGVuZ3RoIiwibWFwIiwibyIsImNvbnRyYWN0UmVmIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvRGF0ZVN0cmluZyIsImlzQ2xvc2VkIiwiZmFicmljcyIsImNvbnNpZGVyYXRpb24iLCJvZmZlckZhYnJpY3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFDbEM7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUss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LEdBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBYkYsRUFxQkU7QUFBSSxvQkFBVyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdFQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTWQsUUFBUSxDQUFDTyxDQUFDLENBQUNNLE9BQUYsQ0FBVSxDQUFWLEVBQWFFLFlBQWQsQ0FBZDtBQUFBLE9BRFg7QUFFRSxXQUFLLEVBQUMsY0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FyQkYsQ0FEVTtBQUFBLEdBQVgsQ0FESCxDQVZGLENBTkosQ0FaRixFQWdFRSxNQUFDLDRFQUFEO0FBQ0UsV0FBTyxFQUFFeEMsWUFEWDtBQUVFLFNBQUssRUFBRUYsS0FGVDtBQUdFLFVBQU0sRUFBRU0sTUFIVjtBQUlFLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoRUYsQ0FERjtBQXlFRDs7R0FsS3VCdkIsUztVQUVURSx1RCxFQUNJRyx1RCxFQUlGTyxzRDs7O0tBUE9aLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9jb250cmFjdHMuY2FiM2M4OGE4ZjY0ZTEzYzkyMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRGl2LCBJY29uLCBJbWFnZSwgVGFnLCBUZXh0IH0gZnJvbSBcImF0b21pemVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFByb2ZpbGVMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFydHMvcHJvZmlsZV9sb2FkZXJcIjtcclxuaW1wb3J0IEVtcHR5TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9lbXB0eV9saXN0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvbWFpbl9idXR0b25cIjtcclxuaW1wb3J0IFByb2ZpbGVMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9wcm9maWxlX2xheW91dFwiO1xyXG5pbXBvcnQgT3JkZXJJbmZvTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL29yZGVyX2luZm9fbW9kYWxcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udHJhY3RzKCkge1xyXG4gIC8vIEdldHRpbmcgYXV0aCBzdGF0ZSBhbmQgdXNlciBkYXRhIGZvciBzdHJ1Y3R1cmluZyB0aGUgbmF2YmFyXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHRva2VuID0gc3RvcmUuZ2V0U3RhdGUoKS5hdXRoLnRva2VuO1xyXG4gIGNvbnN0IGlkID0gYXV0aC5faWQ7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3JkZXIsIHNldExvYWRpbmdPcmRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VXNlckl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfWNvbnRyYWN0L2AsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBjdXN0b21lcjogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAob3JkZXJzX3JlcykgPT4ge1xyXG4gICAgICAgICAgc2V0T3JkZXJzKG9yZGVyc19yZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBnZXRVc2VySXRlbXMoKTtcclxuICB9LCBbaWQsIHRva2VuLCBkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBnZXRPcmRlciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09yZGVyKHRydWUpO1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9b2ZmZXJGYWJyaWNzLyR7aWR9YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBzZXRPcmRlcihyZXMuZGF0YSk7XHJcbiAgICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfXByb2R1Y3RzLyR7cmVzLmRhdGEuc2FtcGxlWzBdfWAsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGFzeW5jIChvcmRlcnNfcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyX24gPSBvcmRlcnNfcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIHNldE9yZGVyKHsgLi4ub3JkZXIsIG9yZGVyX24gfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9yZGVyKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nT3JkZXIoZmFsc2UpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2ZpbGVMYXlvdXQgdGl0bGU9XCJNeSBDb250cmFjdHMgfCBTdGVlY2hpdFwiPlxyXG4gICAgICA8RGl2XHJcbiAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2NjY1wiIH19XHJcbiAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB0YWc9XCJoZWFkZXJcIiB0ZXh0U2l6ZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICBNeSBDb250cmFjdHNcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgICA8RGl2IHc9XCIxMDAlXCIgcD1cIjIwcHhcIj5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxQcm9maWxlTG9hZGVyIC8+XHJcbiAgICAgICAgKSA6IG9yZGVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8RW1wdHlMaXN0IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q29udHJhY3QgUmVmPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7b3JkZXJzLm1hcCgobykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNvbnRyYWN0IFJlZlwiPntvLmNvbnRyYWN0UmVmfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShvLmNyZWF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmc9e28uaXNDbG9zZWQgPyBcInN1Y2Nlc3M2MDBcIiA6IFwiZGFuZ2VyNjAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge28uaXNDbG9zZWQgPyBcIlN1Y2Nlc3NmdWxcIiA6IFwiUGVuZGluZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNvbnRyYWN0IFJlZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvLmZhYnJpY3NbMF0uY29uc2lkZXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZml4PXtcIuKCplwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldE9yZGVyKG8uZmFicmljc1swXS5vZmZlckZhYnJpY3MpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaG93IGRldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Rpdj5cclxuICAgICAgey8qIEluZm8gTW9kYWwgKi99XHJcbiAgICAgIDxPcmRlckluZm9Nb2RhbFxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmdPcmRlcn1cclxuICAgICAgICBvcmRlcj17b3JkZXJ9XHJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgIDwvUHJvZmlsZUxheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=