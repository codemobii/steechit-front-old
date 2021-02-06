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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      infoOpen = _useState3[0],
      setInfoOpen = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

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
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "My Contracts")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    w: "100%",
    p: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }) : orders.length === 0 ? __jsx(_components_parts_empty_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }) : __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, "Contract Ref"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "Date"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Status"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "Amount"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "Action"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, orders.map(function (o) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 19
      }
    }, o.contractRef), __jsx("td", {
      "data-label": "Date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }, new Date(o.createdAt).toDateString()), __jsx("td", {
      "data-label": "Status",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 19
      }
    }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      bg: o.isClosed ? "success600" : "danger600",
      textColor: "white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, o.isClosed ? "Successful" : "Pending")), __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    }, o.consideration), __jsx("td", {
      "data-label": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    }, __jsx(_components_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: function onClick() {
        return setIsOpen(true);
      },
      title: "Show details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
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
      lineNumber: 116,
      columnNumber: 7
    }
  }));
}

_s(Contracts, "3FqLrnhX+YFEvmw4suCgcWsjqro=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9jb250cmFjdHMuanMiXSwibmFtZXMiOlsiQ29udHJhY3RzIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiaWQiLCJfaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW5mb09wZW4iLCJzZXRJbmZvT3BlbiIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZUVmZmVjdCIsImdldFVzZXJJdGVtcyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm94eSIsImhvc3QiLCJwb3J0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInBhcmFtcyIsImN1c3RvbWVyIiwidGhlbiIsIm9yZGVyc19yZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYm9yZGVyQm90dG9tIiwibGVuZ3RoIiwibWFwIiwibyIsImNvbnRyYWN0UmVmIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvRGF0ZVN0cmluZyIsImlzQ2xvc2VkIiwiY29uc2lkZXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQ2xDO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLElBQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1BQU1HLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHVEQUFLLENBQUNDLFFBQU4s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SixDQUFDLENBQUNLLFFBQUYsR0FBYSxZQUFiLEdBQTRCLFdBRGxDO0FBRUUsZUFBUyxFQUFDLE9BRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlHTCxDQUFDLENBQUNLLFFBQUYsR0FBYSxZQUFiLEdBQTRCLFNBSi9CLENBREYsQ0FMRixFQWFFO0FBQUksb0JBQVcsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCTCxDQUFDLENBQUNNLGFBQWpDLENBYkYsRUFjRTtBQUFJLG9CQUFXLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0VBQUQ7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUFNN0IsU0FBUyxDQUFDLElBQUQsQ0FBZjtBQUFBLE9BRFg7QUFFRSxXQUFLLEVBQUMsY0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FkRixDQURVO0FBQUEsR0FBWCxDQURILENBVkYsQ0FOSixDQVpGLEVBeURFLE1BQUMsNEVBQUQ7QUFBZ0IsVUFBTSxFQUFFRCxNQUF4QjtBQUFnQyxXQUFPLEVBQUU7QUFBQSxhQUFNQyxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpERixDQURGO0FBNkREOztHQTFHdUJyQixTO1VBRVRFLHVELEVBQ0lHLHVELEVBSUZPLHFEOzs7S0FQT1osUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL2NvbnRyYWN0cy5kMTBmNWE3M2U5NTViYzEwYzU1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBEaXYsIEljb24sIEltYWdlLCBUYWcsIFRleHQgfSBmcm9tIFwiYXRvbWl6ZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUHJvZmlsZUxvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9wcm9maWxlX2xvYWRlclwiO1xyXG5pbXBvcnQgRW1wdHlMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhcnRzL2VtcHR5X2xpc3RcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9tYWluX2J1dHRvblwiO1xyXG5pbXBvcnQgUHJvZmlsZUxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL3Byb2ZpbGVfbGF5b3V0XCI7XHJcbmltcG9ydCBPcmRlckluZm9Nb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvb3JkZXJfaW5mb19tb2RhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udHJhY3RzKCkge1xyXG4gIC8vIEdldHRpbmcgYXV0aCBzdGF0ZSBhbmQgdXNlciBkYXRhIGZvciBzdHJ1Y3R1cmluZyB0aGUgbmF2YmFyXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHRva2VuID0gc3RvcmUuZ2V0U3RhdGUoKS5hdXRoLnRva2VuO1xyXG4gIGNvbnN0IGlkID0gYXV0aC5faWQ7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpbmZvT3Blbiwgc2V0SW5mb09wZW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VXNlckl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfWNvbnRyYWN0L2AsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBjdXN0b21lcjogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAob3JkZXJzX3JlcykgPT4ge1xyXG4gICAgICAgICAgc2V0T3JkZXJzKG9yZGVyc19yZXMuZGF0YSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnNfcmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldFVzZXJJdGVtcygpO1xyXG4gIH0sIFtpZCwgdG9rZW4sIGRpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZmlsZUxheW91dCB0aXRsZT1cIk15IENvbnRyYWN0cyB8IFN0ZWVjaGl0XCI+XHJcbiAgICAgIDxEaXZcclxuICAgICAgICBwPVwiMjBweFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjY2NjXCIgfX1cclxuICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHRhZz1cImhlYWRlclwiIHRleHRTaXplPVwidGl0bGVcIj5cclxuICAgICAgICAgIE15IENvbnRyYWN0c1xyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9EaXY+XHJcbiAgICAgIDxEaXYgdz1cIjEwMCVcIiBwPVwiMjBweFwiPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPFByb2ZpbGVMb2FkZXIgLz5cclxuICAgICAgICApIDogb3JkZXJzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxFbXB0eUxpc3QgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db250cmFjdCBSZWY8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHtvcmRlcnMubWFwKChvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ29udHJhY3QgUmVmXCI+e28uY29udHJhY3RSZWZ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKG8uY3JlYXRlZEF0KS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCJTdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZz17by5pc0Nsb3NlZCA/IFwic3VjY2VzczYwMFwiIDogXCJkYW5nZXI2MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7by5pc0Nsb3NlZCA/IFwiU3VjY2Vzc2Z1bFwiIDogXCJQZW5kaW5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiQ29udHJhY3QgUmVmXCI+e28uY29uc2lkZXJhdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNob3cgZGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgICB7LyogSW5mbyBNb2RhbCAqL31cclxuICAgICAgPE9yZGVySW5mb01vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfSAvPlxyXG4gICAgPC9Qcm9maWxlTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==