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
    border: {
      l: "1px solid"
    },
    borderColor: "gray800",
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
      lineNumber: 137,
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
          lineNumber: 146,
          columnNumber: 21
        }
      }, value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    d: "block",
    tag: "label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
          lineNumber: 162,
          columnNumber: 21
        }
      }, value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
      lineNumber: 168,
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
      lineNumber: 177,
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
      lineNumber: 203,
      columnNumber: 13
    }
  }, "Transaction History"), orders.length !== 0 ? __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, "S/N"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, "Amount"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, "Type"), __jsx("td", {
    "data-label": "Amount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, "Description"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, "Date"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, orders.map(function (o, index) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 21
      }
    }, __jsx("td", {
      "data-label": "S/N",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 23
      }
    }, index + 1), __jsx("td", {
      "data-label": "Amount",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 23
      }
    }, o.amount), __jsx("td", {
      "data-label": "Type",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 23
      }
    }, o.transactionType === "cr" ? "Credit" : "Debit"), __jsx("td", {
      "data-label": "Amount",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 23
      }
    }, o.header), __jsx("td", {
      "data-label": "Date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 23
      }
    }, new Date(o.createdAt).toDateString()));
  }))) : __jsx(_components_parts_empty_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
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
      lineNumber: 241,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS93YWxsZXQuanMiXSwibmFtZXMiOlsiV2FsbGV0IiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiaWQiLCJfaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIndhbGxldCIsInNldFdhbGxldCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd0Z1bmRlciIsInNldFNob3dGdW5kZXIiLCJoYXNTdG9yZSIsInNldEhhc1N0b3JlIiwidXNlRWZmZWN0IiwiZ2V0VXNlckl0ZW1zIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicGFyYW1zIiwidXNlciIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYW1vdW50Iiwib3JkZXJzX3JlcyIsImNvbnNvbGUiLCJsb2ciLCJvcmRlcnNSZXMiLCJyZXZlcnNlIiwiZXJyb3IiLCJzdG9yZV9yZXMiLCJsZW5ndGgiLCJib3JkZXJCb3R0b20iLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwiYiIsImwiLCJ2YWx1ZSIsInIiLCJ0IiwibWFwIiwibyIsImluZGV4IiwidHJhbnNhY3Rpb25UeXBlIiwiaGVhZGVyIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQy9CO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxX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QWdDLFdBQU8sRUFBRTtBQUFBLGFBQU1DLGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUEsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9JRixDQURGO0FBbUpEOztHQXZPdUJyQixNO1VBRVRFLHVELEVBQ0lHLHVELEVBSUZPLHNEOzs7S0FQT1osTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL3dhbGxldC40YTJkZWNiMzhiZDdhMzA0OTY1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBEaXYsIEltYWdlLCBMYWJlbCwgVGFnLCBUZXh0IH0gZnJvbSBcImF0b21pemVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5pbXBvcnQgUHJvZmlsZUxvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9wcm9maWxlX2xvYWRlclwiO1xyXG5pbXBvcnQgRW1wdHlMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhcnRzL2VtcHR5X2xpc3RcIjtcclxuaW1wb3J0IFByb2ZpbGVMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9wcm9maWxlX2xheW91dFwiO1xyXG5pbXBvcnQgRnVuZFdhbGxldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9mdW5kX3dhbGxldFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbGV0KCkge1xyXG4gIC8vIEdldHRpbmcgYXV0aCBzdGF0ZSBhbmQgdXNlciBkYXRhIGZvciBzdHJ1Y3R1cmluZyB0aGUgbmF2YmFyXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHRva2VuID0gc3RvcmUuZ2V0U3RhdGUoKS5hdXRoLnRva2VuO1xyXG4gIGNvbnN0IGlkID0gYXV0aC5faWQ7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt3YWxsZXQsIHNldFdhbGxldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2hvd0Z1bmRlciwgc2V0U2hvd0Z1bmRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hhc1N0b3JlLCBzZXRIYXNTdG9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXJJdGVtcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH13YWxsZXQvYCxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0V2FsbGV0KHJlcy5kYXRhWzBdLmFtb3VudCk7XHJcbiAgICAgICAgICBjb25zdCBvcmRlcnNfcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9aGlzdG9yeS9gLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICB1c2VyOiBpZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cob3JkZXJzX3Jlcyk7XHJcbiAgICAgICAgICBjb25zdCBvcmRlcnNSZXMgPSBvcmRlcnNfcmVzLmRhdGEucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgc2V0T3JkZXJzKG9yZGVyc1Jlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1zdG9yZXMvYCxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHVzZXI6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHN0b3JlX3JlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHN0b3JlX3Jlcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRIYXNTdG9yZShmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfTtcclxuICAgIGdldFVzZXJJdGVtcygpO1xyXG4gIH0sIFtpZCwgdG9rZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9maWxlTGF5b3V0IHRpdGxlPVwiTXkgV2FsbGV0IHwgU3RlZWNoaXRcIj5cclxuICAgICAgPERpdlxyXG4gICAgICAgIHA9XCIyMHB4XCJcclxuICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNjY2NcIiB9fVxyXG4gICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQgdGFnPVwiaGVhZGVyXCIgdGV4dFNpemU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgTXkgQmFsYW5jZVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9EaXY+XHJcbiAgICAgIDxEaXYgdz1cIjEwMCVcIiBwPVwiMjBweFwiPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPFByb2ZpbGVMb2FkZXIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPERpdlxyXG4gICAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBkPXt7XHJcbiAgICAgICAgICAgICAgICB4czogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgc206IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIG1kOiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGxnOiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIHhsOiBcImZsZXhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBwPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgIGJnPVwic3VjY2VzczIwMFwiXHJcbiAgICAgICAgICAgICAgcm91bmRlZD1cImxnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxEaXZcclxuICAgICAgICAgICAgICAgIG09e3tcclxuICAgICAgICAgICAgICAgICAgYjogeyB4czogXCIyMHB4XCIsIHNtOiBcIjIwcHhcIiwgbWQ6IFwiMFwiLCBsZzogXCIwXCIsIHhsOiBcIjBcIiB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGJvcmRlcj17eyBsOiBcIjFweCBzb2xpZFwiIH19XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cImdyYXk4MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGQ9XCJibG9ja1wiIHRhZz1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIExlZGdlciBCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3YWxsZXR9XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHByZWZpeD17XCLigqZcIn1cclxuICAgICAgICAgICAgICAgICAgcmVuZGVyVGV4dD17KHZhbHVlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgdGFnPVwiaDNcIiB0ZXh0U2l6ZT1cImhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICAgIDxEaXY+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBkPVwiYmxvY2tcIiB0YWc9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICBBdmFpbGFibGUgQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBwcmVmaXg9e1wi4oKmXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlclRleHQ9eyh2YWx1ZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRhZz1cImgzXCIgdGV4dFNpemU9XCJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgICBkPXt7XHJcbiAgICAgICAgICAgICAgICAgIHhzOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNtOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1kOiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgbGc6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICB4bDogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICBiZz1cImJsYWNrODAwXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0Z1bmRlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgbT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHI6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHhzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGxnOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHhsOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHhzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGxnOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHhsOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBGdW5kIHdhbGxldFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICA8VGV4dCBtPXt7IHQ6IFwiMXJlbVwiIH19IHRhZz1cImhlYWRlclwiIHRleHRTaXplPVwic3ViaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgVHJhbnNhY3Rpb24gSGlzdG9yeVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgICB7b3JkZXJzLmxlbmd0aCAhPT0gMCA/IChcclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlMvTjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkFtb3VudFwiPkRlc2NyaXB0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtvcmRlcnMubWFwKChvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiUy9OXCI+e2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJBbW91bnRcIj57by5hbW91bnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7by50cmFuc2FjdGlvblR5cGUgPT09IFwiY3JcIiA/IFwiQ3JlZGl0XCIgOiBcIkRlYml0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJBbW91bnRcIj57by5oZWFkZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoby5jcmVhdGVkQXQpLnRvRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RW1wdHlMaXN0IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Rpdj5cclxuXHJcbiAgICAgIDxGdW5kV2FsbGV0IGlzT3Blbj17c2hvd0Z1bmRlcn0gb25DbG9zZT17KCkgPT4gc2V0U2hvd0Z1bmRlcihmYWxzZSl9IC8+XHJcbiAgICA8L1Byb2ZpbGVMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9