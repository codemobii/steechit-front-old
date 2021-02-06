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
/* harmony import */ var _components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/parts/profile_loader */ "./components/parts/profile_loader.js");
/* harmony import */ var _components_parts_empty_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/parts/empty_list */ "./components/parts/empty_list.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/store */ "./services/store.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/buttons/main_button */ "./components/buttons/main_button.js");
/* harmony import */ var _components_layouts_profile_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layouts/profile_layout */ "./components/layouts/profile_layout.js");
/* harmony import */ var _components_modals_order_info_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/modals/order_info_modal */ "./components/modals/order_info_modal.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\pages\\profile\\contracts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












function Contracts() {
  _s();

  var _this = this;

  // Getting auth state and user data for structuring the navbar
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var token = _services_store__WEBPACK_IMPORTED_MODULE_8__["default"].getState().auth.token;
  var id = auth._id;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      orders = _useState[0],
      setOrders = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      order = _useState2[0],
      setOrder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loadingOrder = _useState3[0],
      setLoadingOrder = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      isOpen = _useState5[0],
      setIsOpen = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getUserItems = /*#__PURE__*/function () {
      var _ref = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
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
                  url: "".concat("https://api.steechit.com/", "contract/"),
                  params: {
                    customer: id
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(orders_res) {
                    return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            setOrders(orders_res.data);
                            console.log(orders_res);

                          case 2:
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
  return __jsx(_components_layouts_profile_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "My Contracts | Steechit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "My Contracts")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    w: "100%",
    p: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }) : orders.length === 0 ? __jsx(_components_parts_empty_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }) : __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Contract Ref"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "Date"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "Status"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Amount"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, "Action"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, orders.map(function (o) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 19
      }
    }, o.contractRef), __jsx("td", {
      "data-label": "Date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 19
      }
    }, new Date(o.createdAt).toDateString()), __jsx("td", {
      "data-label": "Status",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      bg: o.isClosed ? "success600" : "danger600",
      textColor: "white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }, o.isClosed ? "Successful" : "Pending")), __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 19
      }
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_13__["default"], {
      value: o.fabrics[0].consideration,
      displayType: "text",
      thousandSeparator: true,
      prefix: "₦",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    })), __jsx("td", {
      "data-label": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, __jsx(_components_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: function onClick() {
        setIsOpen(true);
      },
      title: "Show details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    })));
  })))), __jsx(_components_modals_order_info_modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isOpen: isOpen,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }));
}

_s(Contracts, "VMBOpHpwFWwe4ujZgnoskr9mVv4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9jb250cmFjdHMuanMiXSwibmFtZXMiOlsiQ29udHJhY3RzIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiaWQiLCJfaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIm9yZGVyIiwic2V0T3JkZXIiLCJsb2FkaW5nT3JkZXIiLCJzZXRMb2FkaW5nT3JkZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZUVmZmVjdCIsImdldFVzZXJJdGVtcyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm94eSIsImhvc3QiLCJwb3J0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInBhcmFtcyIsImN1c3RvbWVyIiwidGhlbiIsIm9yZGVyc19yZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYm9yZGVyQm90dG9tIiwibGVuZ3RoIiwibWFwIiwibyIsImNvbnRyYWN0UmVmIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvRGF0ZVN0cmluZyIsImlzQ2xvc2VkIiwiZmFicmljcyIsImNvbnNpZGVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUNsQztBQUNBLE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixJQUFqQjtBQUFBLEdBQUQsQ0FBeEI7QUFDQSxNQUFNRyxRQUFRLEdBQUdDLCtEQUFXLEVB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RUFDSUcsdUQsRUFJRk8scUQ7OztLQVBPWixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvY29udHJhY3RzLjYzODhlYjMxNmVhMTU3M2FhOWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIERpdiwgSWNvbiwgSW1hZ2UsIFRhZywgVGV4dCB9IGZyb20gXCJhdG9taXplXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQcm9maWxlTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhcnRzL3Byb2ZpbGVfbG9hZGVyXCI7XHJcbmltcG9ydCBFbXB0eUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFydHMvZW1wdHlfbGlzdFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b25zL21haW5fYnV0dG9uXCI7XHJcbmltcG9ydCBQcm9maWxlTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvcHJvZmlsZV9sYXlvdXRcIjtcclxuaW1wb3J0IE9yZGVySW5mb01vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZGFscy9vcmRlcl9pbmZvX21vZGFsXCI7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyYWN0cygpIHtcclxuICAvLyBHZXR0aW5nIGF1dGggc3RhdGUgYW5kIHVzZXIgZGF0YSBmb3Igc3RydWN0dXJpbmcgdGhlIG5hdmJhclxyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB0b2tlbiA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbjtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZ09yZGVyLCBzZXRMb2FkaW5nT3JkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXJJdGVtcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1jb250cmFjdC9gLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgY3VzdG9tZXI6IGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKG9yZGVyc19yZXMpID0+IHtcclxuICAgICAgICAgIHNldE9yZGVycyhvcmRlcnNfcmVzLmRhdGEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cob3JkZXJzX3Jlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBnZXRVc2VySXRlbXMoKTtcclxuICB9LCBbaWQsIHRva2VuLCBkaXNwYXRjaF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2ZpbGVMYXlvdXQgdGl0bGU9XCJNeSBDb250cmFjdHMgfCBTdGVlY2hpdFwiPlxyXG4gICAgICA8RGl2XHJcbiAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2NjY1wiIH19XHJcbiAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB0YWc9XCJoZWFkZXJcIiB0ZXh0U2l6ZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICBNeSBDb250cmFjdHNcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgICA8RGl2IHc9XCIxMDAlXCIgcD1cIjIwcHhcIj5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxQcm9maWxlTG9hZGVyIC8+XHJcbiAgICAgICAgKSA6IG9yZGVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8RW1wdHlMaXN0IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q29udHJhY3QgUmVmPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7b3JkZXJzLm1hcCgobykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNvbnRyYWN0IFJlZlwiPntvLmNvbnRyYWN0UmVmfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShvLmNyZWF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmc9e28uaXNDbG9zZWQgPyBcInN1Y2Nlc3M2MDBcIiA6IFwiZGFuZ2VyNjAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge28uaXNDbG9zZWQgPyBcIlN1Y2Nlc3NmdWxcIiA6IFwiUGVuZGluZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNvbnRyYWN0IFJlZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvLmZhYnJpY3NbMF0uY29uc2lkZXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZml4PXtcIuKCplwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2hvdyBkZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9EaXY+XHJcbiAgICAgIHsvKiBJbmZvIE1vZGFsICovfVxyXG4gICAgICA8T3JkZXJJbmZvTW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9IC8+XHJcbiAgICA8L1Byb2ZpbGVMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9