webpackHotUpdate_N_E("pages/profile/wallet",{

/***/ "./pages/profile/wallet.js":
/*!*********************************!*\
  !*** ./pages/profile/wallet.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wallet; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/store */ "./services/store.js");
/* harmony import */ var _components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/parts/profile_loader */ "./components/parts/profile_loader.js");
/* harmony import */ var _components_parts_empty_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/parts/empty_list */ "./components/parts/empty_list.js");
/* harmony import */ var _components_layouts_profile_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layouts/profile_layout */ "./components/layouts/profile_layout.js");
/* harmony import */ var _components_forms_fund_wallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/forms/fund_wallet */ "./components/forms/fund_wallet.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\pages\\profile\\wallet.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











function Wallet() {
  _s();

  var _this = this;

  // Getting auth state and user data for structuring the navbar
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var token = _services_store__WEBPACK_IMPORTED_MODULE_6__["default"].getState().auth.token;
  var id = auth._id;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      orders = _useState[0],
      setOrders = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      wallet = _useState2[0],
      setWallet = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showFunder = _useState4[0],
      setShowFunder = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      hasStore = _useState5[0],
      setHasStore = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getUserItems = /*#__PURE__*/function () {
      var _ref = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default()({
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
                  var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                    var orders_res, ordersRes;
                    return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            setWallet(res.data[0].amount);
                            _context.next = 3;
                            return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                              headers: {
                                "Access-Control-Allow-Origin": "*",
                                Authorization: "Bearer ".concat(token)
                              },
                              proxy: {
                                host: "104.236.174.88",
                                port: 3128
                              },
                              method: "GET",
                              url: "".concat("https://api.steechit.com/", "history/"),
                              params: {
                                user: id
                              }
                            });

                          case 3:
                            orders_res = _context.sent;
                            console.log(orders_res);
                            ordersRes = orders_res.data.reverse();
                            setOrders(ordersRes);

                          case 7:
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
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_5___default()({
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
                  var _ref3 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(store_res) {
                    return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (store_res.data.length === 0) {
                              setHasStore(false);
                            }

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }())["catch"](function () {});

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getUserItems() {
        return _ref.apply(this, arguments);
      };
    }();

    getUserItems();
  }, [id, token]);
  return __jsx(_components_layouts_profile_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "My Wallet | Steechit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
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
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "My Balance")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    w: "100%",
    p: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    w: "100%",
    d: {
      xs: "block",
      sm: "block",
      md: "flex",
      lg: "flex",
      xl: "flex"
    },
    align: "center",
    p: "20px",
    justify: "space-between",
    bg: "success200",
    rounded: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    m: {
      b: {
        xs: "20px",
        sm: "20px",
        md: "0",
        lg: "0",
        xl: "0"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    d: "block",
    tag: "label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, "Ledger Balance"), __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: wallet,
    displayType: "text",
    thousandSeparator: true,
    prefix: "₦",
    renderText: function renderText(value) {
      return __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        tag: "h3",
        textSize: "heading",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }
      }, value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    d: "block",
    tag: "label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, "Available Balance"), __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: wallet,
    displayType: "text",
    thousandSeparator: true,
    prefix: "₦",
    renderText: function renderText(value) {
      return __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        tag: "h3",
        textSize: "heading",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }
      }, value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    d: {
      xs: "block",
      sm: "block",
      md: "flex",
      lg: "flex",
      xl: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    w: "100%",
    bg: "black800",
    onClick: function onClick() {
      return setShowFunder(true);
    },
    m: {
      r: "1rem",
      b: {
        xs: "10px",
        sm: "10px",
        md: "0",
        lg: "0",
        xl: "0"
      },
      t: {
        xs: "10px",
        sm: "10px",
        md: "0",
        lg: "0",
        xl: "0"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, "Fund wallet"))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    m: {
      t: "1rem"
    },
    tag: "header",
    textSize: "subheader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, "Transaction History"), orders.length !== 0 ? __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }, "S/N"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  }, "Amount"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, "Type"), __jsx("td", {
    "data-label": "Amount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, "Description"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, "Date"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, orders.map(function (o, index) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 21
      }
    }, __jsx("td", {
      "data-label": "S/N",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 23
      }
    }, index + 1), __jsx("td", {
      "data-label": "Amount",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 23
      }
    }, o.amount), __jsx("td", {
      "data-label": "Type",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 23
      }
    }, o.transactionType === "cr" ? "Credit" : "Debit"), __jsx("td", {
      "data-label": "Amount",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 23
      }
    }, o.header), __jsx("td", {
      "data-label": "Date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 23
      }
    }, new Date(o.createdAt).toDateString()));
  }))) : __jsx(_components_parts_empty_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }))), __jsx(_components_forms_fund_wallet__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isOpen: showFunder,
    onClose: function onClose() {
      return setShowFunder(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }));
}

_s(Wallet, "iB/bQ8FuZXWcucR5BHRUnnZtH3A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
});

_c = Wallet;

var _c;

$RefreshReg$(_c, "Wallet");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS93YWxsZXQuanMiXSwibmFtZXMiOlsiV2FsbGV0IiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiaWQiLCJfaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIndhbGxldCIsInNldFdhbGxldCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd0Z1bmRlciIsInNldFNob3dGdW5kZXIiLCJoYXNTdG9yZSIsInNldEhhc1N0b3JlIiwidXNlRWZmZWN0IiwiZ2V0VXNlckl0ZW1zIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicGFyYW1zIiwidXNlciIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYW1vdW50Iiwib3JkZXJzX3JlcyIsImNvbnNvbGUiLCJsb2ciLCJvcmRlcnNSZXMiLCJyZXZlcnNlIiwiZXJyb3IiLCJzdG9yZV9yZXMiLCJsZW5ndGgiLCJib3JkZXJCb3R0b20iLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwiYiIsInZhbHVlIiwiciIsInQiLCJtYXAiLCJvIiwiaW5kZXgiLCJ0cmFuc2FjdGlvblR5cGUiLCJoZWFkZXIiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9EYXRlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0I7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3SUYsQ0FERjtBQWlKRDs7R0FyT3VCckIsTTtVQUVURSx1RCxFQUNJRyx1RCxFQUlGTyxzRDs7O0tBUE9aLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS93YWxsZXQuNGEyM2ExNzAyOTUxYzMzMDA3ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRGl2LCBJbWFnZSwgTGFiZWwsIFRhZywgVGV4dCB9IGZyb20gXCJhdG9taXplXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RvcmVcIjtcclxuaW1wb3J0IFByb2ZpbGVMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFydHMvcHJvZmlsZV9sb2FkZXJcIjtcclxuaW1wb3J0IEVtcHR5TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9lbXB0eV9saXN0XCI7XHJcbmltcG9ydCBQcm9maWxlTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvcHJvZmlsZV9sYXlvdXRcIjtcclxuaW1wb3J0IEZ1bmRXYWxsZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXMvZnVuZF93YWxsZXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxldCgpIHtcclxuICAvLyBHZXR0aW5nIGF1dGggc3RhdGUgYW5kIHVzZXIgZGF0YSBmb3Igc3RydWN0dXJpbmcgdGhlIG5hdmJhclxyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB0b2tlbiA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbjtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbd2FsbGV0LCBzZXRXYWxsZXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3dGdW5kZXIsIHNldFNob3dGdW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNTdG9yZSwgc2V0SGFzU3RvcmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VySXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9d2FsbGV0L2AsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB1c2VyOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgIHNldFdhbGxldChyZXMuZGF0YVswXS5hbW91bnQpO1xyXG4gICAgICAgICAgY29uc3Qgb3JkZXJzX3JlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfWhpc3RvcnkvYCxcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKG9yZGVyc19yZXMpO1xyXG4gICAgICAgICAgY29uc3Qgb3JkZXJzUmVzID0gb3JkZXJzX3Jlcy5kYXRhLnJldmVyc2UoKTtcclxuICAgICAgICAgIHNldE9yZGVycyhvcmRlcnNSZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9c3RvcmVzL2AsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB1c2VyOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChzdG9yZV9yZXMpID0+IHtcclxuICAgICAgICAgIGlmIChzdG9yZV9yZXMuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc2V0SGFzU3RvcmUoZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIH07XHJcbiAgICBnZXRVc2VySXRlbXMoKTtcclxuICB9LCBbaWQsIHRva2VuXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZmlsZUxheW91dCB0aXRsZT1cIk15IFdhbGxldCB8IFN0ZWVjaGl0XCI+XHJcbiAgICAgIDxEaXZcclxuICAgICAgICBwPVwiMjBweFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjY2NjXCIgfX1cclxuICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHRhZz1cImhlYWRlclwiIHRleHRTaXplPVwidGl0bGVcIj5cclxuICAgICAgICAgIE15IEJhbGFuY2VcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgICA8RGl2IHc9XCIxMDAlXCIgcD1cIjIwcHhcIj5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxQcm9maWxlTG9hZGVyIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxEaXZcclxuICAgICAgICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgZD17e1xyXG4gICAgICAgICAgICAgICAgeHM6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIHNtOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBtZDogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBsZzogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICB4bDogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICBiZz1cInN1Y2Nlc3MyMDBcIlxyXG4gICAgICAgICAgICAgIHJvdW5kZWQ9XCJsZ1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgICBtPXt7XHJcbiAgICAgICAgICAgICAgICAgIGI6IHsgeHM6IFwiMjBweFwiLCBzbTogXCIyMHB4XCIsIG1kOiBcIjBcIiwgbGc6IFwiMFwiLCB4bDogXCIwXCIgfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgZD1cImJsb2NrXCIgdGFnPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgTGVkZ2VyIEJhbGFuY2VcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dhbGxldH1cclxuICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgcHJlZml4PXtcIuKCplwifVxyXG4gICAgICAgICAgICAgICAgICByZW5kZXJUZXh0PXsodmFsdWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJoM1wiIHRleHRTaXplPVwiaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgICAgPERpdj5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGQ9XCJibG9ja1wiIHRhZz1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIEF2YWlsYWJsZSBCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3YWxsZXR9XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHByZWZpeD17XCLigqZcIn1cclxuICAgICAgICAgICAgICAgICAgcmVuZGVyVGV4dD17KHZhbHVlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgdGFnPVwiaDNcIiB0ZXh0U2l6ZT1cImhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICAgIDxEaXZcclxuICAgICAgICAgICAgICAgIGQ9e3tcclxuICAgICAgICAgICAgICAgICAgeHM6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgc206IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgbWQ6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICBsZzogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHhsOiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGJnPVwiYmxhY2s4MDBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RnVuZGVyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICBtPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcjogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgeHM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGc6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgeGw6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgeHM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGc6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgeGw6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZ1bmQgd2FsbGV0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgIDxUZXh0IG09e3sgdDogXCIxcmVtXCIgfX0gdGFnPVwiaGVhZGVyXCIgdGV4dFNpemU9XCJzdWJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICBUcmFuc2FjdGlvbiBIaXN0b3J5XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIHtvcmRlcnMubGVuZ3RoICE9PSAwID8gKFxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Uy9OPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQW1vdW50XCI+RGVzY3JpcHRpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge29yZGVycy5tYXAoKG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJTL05cIj57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFtb3VudFwiPntvLmFtb3VudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvLnRyYW5zYWN0aW9uVHlwZSA9PT0gXCJjclwiID8gXCJDcmVkaXRcIiA6IFwiRGViaXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFtb3VudFwiPntvLmhlYWRlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShvLmNyZWF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFbXB0eUxpc3QgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRGl2PlxyXG5cclxuICAgICAgPEZ1bmRXYWxsZXQgaXNPcGVuPXtzaG93RnVuZGVyfSBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RnVuZGVyKGZhbHNlKX0gLz5cclxuICAgIDwvUHJvZmlsZUxheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=