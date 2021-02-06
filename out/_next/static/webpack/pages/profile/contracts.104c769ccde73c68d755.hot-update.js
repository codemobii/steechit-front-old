webpackHotUpdate_N_E("pages/profile/contracts",{

/***/ "./components/modals/order_info_modal.js":
/*!***********************************************!*\
  !*** ./components/modals/order_info_modal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderInfoModal; });
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parts_profile_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parts/profile_loader */ "./components/parts/profile_loader.js");
var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\components\\modals\\order_info_modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function OrderInfoModal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      loading = _ref.loading,
      order = _ref.order;
  return __jsx(atomize__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    isOpen: isOpen,
    onClose: onClose,
    align: {
      xs: "flex-start",
      sm: "flex-start",
      md: "flex-start",
      lg: "center",
      xl: "center"
    },
    rounded: "md",
    maxW: "50rem",
    p: "20px",
    overflow: "hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    rounded: "circle",
    bg: "#fff",
    onClick: function onClick() {
      onClose();
    },
    cursor: "pointer",
    pos: "absolute",
    top: "1rem",
    right: "1rem",
    zIndex: "1000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
    name: "Cross",
    size: "32px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), loading ? __jsx(_parts_profile_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(atomize__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    tag: "h1",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Contract Details"), __jsx(atomize__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    m: {
      t: "20px"
    },
    border: {
      b: "1px solid"
    },
    borderColor: "gray300",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    size: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_0__["Label"], {
    d: "inline-block",
    textWeight: "600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Shirt Length")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    size: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_0__["Label"], {
    d: "inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "3838")))));
}
_c = OrderInfoModal;

var _c;

$RefreshReg$(_c, "OrderInfoModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvb3JkZXJfaW5mb19tb2RhbC5qcyJdLCJuYW1lcyI6WyJPcmRlckluZm9Nb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJsb2FkaW5nIiwib3JkZXIiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwidCIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULE9BQTZEO0FBQUEsTUFBbkNDLE1BQW1DLFFBQW5DQSxNQUFtQztBQUFBLE1BQTNCQyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxNQUFsQkMsT0FBa0IsUUFBbEJBLE9BQWtCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzFFLFNBQ0UsTUFBQyw2Q0FBRDtBQUNFLFVBQU0sRUFBRUgsTUFEVjtBQUVFLFdBQU8sRUFBRUMsT0FGWDtBQUdFLFNBQUssRUFBRTtBQUNMRyxRQUFFLEVBQUUsWUFEQztBQUVMQyxRQUFFLEVBQUUsWUFGQztBQUdMQyxRQUFFLEVBQUUsWUFIQztBQUlMQyxRQUFFLEVBQUUsUUFKQztBQUtMQyxRQUFFLEVBQUU7QUFMQyxLQUhUO0FBVUUsV0FBTyxFQUFDLElBVlY7QUFXRSxRQUFJLEVBQUMsT0FYUDtBQVlFLEtBQUMsRUFBQyxNQVpKO0FBYUUsWUFBUSxFQUFDLFFBYlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVFLE1BQUMsOENBQUQ7QUFDRSxXQUFPLEVBQUMsUUFEVjtBQUVFLE1BQUUsRUFBQyxNQUZMO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JQLGFBQU87QUFDUixLQUxIO0FBTUUsVUFBTSxFQUFDLFNBTlQ7QUFPRSxPQUFHLEVBQUMsVUFQTjtBQVFFLE9BQUcsRUFBQyxNQVJOO0FBU0UsU0FBSyxFQUFDLE1BVFI7QUFVRSxVQUFNLEVBQUMsTUFWVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUUsTUFBQyw0Q0FBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQW1CLFFBQUksRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FmRixFQTZCR0MsT0FBTyxHQUNOLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURNLEdBR04sbUVBQ0UsTUFBQyw0Q0FBRDtBQUFNLE9BQUcsRUFBQyxJQUFWO0FBQWUsWUFBUSxFQUFDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFJRSxNQUFDLDJDQUFEO0FBQ0UsS0FBQyxFQUFFO0FBQUVPLE9BQUMsRUFBRTtBQUFMLEtBREw7QUFFRSxVQUFNLEVBQUU7QUFBRUMsT0FBQyxFQUFFO0FBQUwsS0FGVjtBQUdFLGVBQVcsRUFBQyxTQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDJDQUFEO0FBQUssUUFBSSxFQUFDLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFBTyxLQUFDLEVBQUMsY0FBVDtBQUF3QixjQUFVLEVBQUMsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUxGLEVBVUUsTUFBQywyQ0FBRDtBQUFLLFFBQUksRUFBQyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU8sS0FBQyxFQUFDLGNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBVkYsQ0FKRixDQWhDSixDQURGO0FBdUREO0tBeER1QlgsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL2NvbnRyYWN0cy4xMDRjNzY5Y2NkZTczYzY4ZDc1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBbmNob3IsXHJcbiAgQnV0dG9uLFxyXG4gIENvbCxcclxuICBEaXYsXHJcbiAgSWNvbixcclxuICBMYWJlbCxcclxuICBNb2RhbCxcclxuICBSb3csXHJcbiAgVGV4dCxcclxufSBmcm9tIFwiYXRvbWl6ZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2ZpbGVMb2FkZXIgZnJvbSBcIi4uL3BhcnRzL3Byb2ZpbGVfbG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlckluZm9Nb2RhbCh7IGlzT3Blbiwgb25DbG9zZSwgbG9hZGluZywgb3JkZXIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGFsaWduPXt7XHJcbiAgICAgICAgeHM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgICAgIHNtOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICBtZDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgbGc6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgeGw6IFwiY2VudGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIHJvdW5kZWQ9XCJtZFwiXHJcbiAgICAgIG1heFc9XCI1MHJlbVwiXHJcbiAgICAgIHA9XCIyMHB4XCJcclxuICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxyXG4gICAgPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgcm91bmRlZD1cImNpcmNsZVwiXHJcbiAgICAgICAgYmc9XCIjZmZmXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBvbkNsb3NlKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICBwb3M9XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgdG9wPVwiMXJlbVwiXHJcbiAgICAgICAgcmlnaHQ9XCIxcmVtXCJcclxuICAgICAgICB6SW5kZXg9XCIxMDAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxJY29uIG5hbWU9XCJDcm9zc1wiIHNpemU9XCIzMnB4XCIgLz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxQcm9maWxlTG9hZGVyIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxUZXh0IHRhZz1cImgxXCIgdGV4dFNpemU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICBDb250cmFjdCBEZXRhaWxzXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgIG09e3sgdDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgYm9yZGVyPXt7IGI6IFwiMXB4IHNvbGlkXCIgfX1cclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJncmF5MzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENvbCBzaXplPVwiOFwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBkPVwiaW5saW5lLWJsb2NrXCIgdGV4dFdlaWdodD1cIjYwMFwiPlxyXG4gICAgICAgICAgICAgICAgU2hpcnQgTGVuZ3RoXHJcbiAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc2l6ZT1cIjRcIj5cclxuICAgICAgICAgICAgICA8TGFiZWwgZD1cImlubGluZS1ibG9ja1wiPjM4Mzg8L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=