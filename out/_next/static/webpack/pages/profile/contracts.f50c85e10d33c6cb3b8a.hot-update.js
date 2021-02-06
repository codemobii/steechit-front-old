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

  var getOrder = function getOrder(id) {
    setLoadingOrder(true);
    setIsOpen(true);
  };

  return __jsx(_components_layouts_profile_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "My Contracts | Steechit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "My Contracts")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    w: "100%",
    p: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_parts_profile_loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }) : orders.length === 0 ? __jsx(_components_parts_empty_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }) : __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "Contract Ref"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Date"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "Status"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Amount"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "Action"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, orders.map(function (o) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, o.contractRef), __jsx("td", {
      "data-label": "Date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 19
      }
    }, new Date(o.createdAt).toDateString()), __jsx("td", {
      "data-label": "Status",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
      bg: o.isClosed ? "success600" : "danger600",
      textColor: "white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, o.isClosed ? "Successful" : "Pending")), __jsx("td", {
      "data-label": "Contract Ref",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
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
        lineNumber: 110,
        columnNumber: 21
      }
    })), __jsx("td", {
      "data-label": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    }, __jsx(_components_buttons_main_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: function onClick() {
        return getOrder(o.fabrics[0].offerFabrics);
      },
      title: "Show details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    })));
  })))), __jsx(_components_modals_order_info_modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    loading: loadingOrder,
    order: order,
    isOpen: isOpen,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9jb250cmFjdHMuanMiXSwibmFtZXMiOlsiQ29udHJhY3RzIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiaWQiLCJfaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIm9yZGVyIiwic2V0T3JkZXIiLCJsb2FkaW5nT3JkZXIiLCJzZXRMb2FkaW5nT3JkZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZUVmZmVjdCIsImdldFVzZXJJdGVtcyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm94eSIsImhvc3QiLCJwb3J0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInBhcmFtcyIsImN1c3RvbWVyIiwidGhlbiIsIm9yZGVyc19yZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZ2V0T3JkZXIiLCJib3JkZXJCb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJvIiwiY29udHJhY3RSZWYiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9EYXRlU3RyaW5nIiwiaXNDbG9zZWQiLCJmYWJyaWNzIiwiY29uc2lkZXJhdGlvbiIsIm9mZmVyRmFicmljcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQ2xDO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLElBQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUNB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LEVBZ0VFLE1BQUMsNEVBQUQ7QUFDRSxXQUFPLEVBQUVyQyxZQURYO0FBRUUsU0FBSyxFQUFFRixLQUZUO0FBR0UsVUFBTSxFQUFFTSxNQUhWO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTUMsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhFRixDQURGO0FBeUVEOztHQTVIdUJ2QixTO1VBRVRFLHVELEVBQ0lHLHVELEVBSUZPLHFEOzs7S0FQT1osUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL2NvbnRyYWN0cy5mNTBjODVlMTBkMzNjNmNiM2I4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBEaXYsIEljb24sIEltYWdlLCBUYWcsIFRleHQgfSBmcm9tIFwiYXRvbWl6ZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUHJvZmlsZUxvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJ0cy9wcm9maWxlX2xvYWRlclwiO1xyXG5pbXBvcnQgRW1wdHlMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhcnRzL2VtcHR5X2xpc3RcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9tYWluX2J1dHRvblwiO1xyXG5pbXBvcnQgUHJvZmlsZUxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL3Byb2ZpbGVfbGF5b3V0XCI7XHJcbmltcG9ydCBPcmRlckluZm9Nb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvb3JkZXJfaW5mb19tb2RhbFwiO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cmFjdHMoKSB7XHJcbiAgLy8gR2V0dGluZyBhdXRoIHN0YXRlIGFuZCB1c2VyIGRhdGEgZm9yIHN0cnVjdHVyaW5nIHRoZSBuYXZiYXJcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBzdG9yZS5nZXRTdGF0ZSgpLmF1dGgudG9rZW47XHJcbiAgY29uc3QgaWQgPSBhdXRoLl9pZDtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcmRlciwgc2V0TG9hZGluZ09yZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VySXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5hcGlVcmx9Y29udHJhY3QvYCxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGN1c3RvbWVyOiBpZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChvcmRlcnNfcmVzKSA9PiB7XHJcbiAgICAgICAgICBzZXRPcmRlcnMob3JkZXJzX3Jlcy5kYXRhKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKG9yZGVyc19yZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlckl0ZW1zKCk7XHJcbiAgfSwgW2lkLCB0b2tlbiwgZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgZ2V0T3JkZXIgPSAoaWQpID0+IHtcclxuICAgIHNldExvYWRpbmdPcmRlcih0cnVlKTtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2ZpbGVMYXlvdXQgdGl0bGU9XCJNeSBDb250cmFjdHMgfCBTdGVlY2hpdFwiPlxyXG4gICAgICA8RGl2XHJcbiAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2NjY1wiIH19XHJcbiAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB0YWc9XCJoZWFkZXJcIiB0ZXh0U2l6ZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICBNeSBDb250cmFjdHNcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgICA8RGl2IHc9XCIxMDAlXCIgcD1cIjIwcHhcIj5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxQcm9maWxlTG9hZGVyIC8+XHJcbiAgICAgICAgKSA6IG9yZGVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8RW1wdHlMaXN0IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q29udHJhY3QgUmVmPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7b3JkZXJzLm1hcCgobykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNvbnRyYWN0IFJlZlwiPntvLmNvbnRyYWN0UmVmfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShvLmNyZWF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmc9e28uaXNDbG9zZWQgPyBcInN1Y2Nlc3M2MDBcIiA6IFwiZGFuZ2VyNjAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge28uaXNDbG9zZWQgPyBcIlN1Y2Nlc3NmdWxcIiA6IFwiUGVuZGluZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cIkNvbnRyYWN0IFJlZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvLmZhYnJpY3NbMF0uY29uc2lkZXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZml4PXtcIuKCplwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldE9yZGVyKG8uZmFicmljc1swXS5vZmZlckZhYnJpY3MpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaG93IGRldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Rpdj5cclxuICAgICAgey8qIEluZm8gTW9kYWwgKi99XHJcbiAgICAgIDxPcmRlckluZm9Nb2RhbFxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmdPcmRlcn1cclxuICAgICAgICBvcmRlcj17b3JkZXJ9XHJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgIDwvUHJvZmlsZUxheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=