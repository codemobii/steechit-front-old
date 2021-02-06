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
    p: {
      t: "0.5rem",
      b: "0.5rem"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvb3JkZXJfaW5mb19tb2RhbC5qcyJdLCJuYW1lcyI6WyJPcmRlckluZm9Nb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJsb2FkaW5nIiwib3JkZXIiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwidCIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULE9BQTZEO0FBQUEsTUFBbkNDLE1BQW1DLFFBQW5DQSxNQUFtQztBQUFBLE1BQTNCQyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxNQUFsQkMsT0FBa0IsUUFBbEJBLE9BQWtCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzFFLFNBQ0UsTUFBQyw2Q0FBRDtBQUNFLFVBQU0sRUFBRUgsTUFEVjtBQUVFLFdBQU8sRUFBRUMsT0FGWDtBQUdFLFNBQUssRUFBRTtBQUNMRyxRQUFFLEVBQUUsWUFEQztBQUVMQyxRQUFFLEVBQUUsWUFGQztBQUdMQyxRQUFFLEVBQUUsWUFIQztBQUlMQyxRQUFFLEVBQUUsUUFKQztBQUtMQyxRQUFFLEVBQUU7QUFMQyxLQUhUO0FBVUUsV0FBTyxFQUFDLElBVlY7QUFXRSxRQUFJLEVBQUMsT0FYUDtBQVlFLEtBQUMsRUFBQyxNQVpKO0FBYUUsWUFBUSxFQUFDLFFBYlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVFLE1BQUMsOENBQUQ7QUFDRSxXQUFPLEVBQUMsUUFEVjtBQUVFLE1BQUUsRUFBQyxNQUZMO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JQLGFBQU87QUFDUixLQUxIO0FBTUUsVUFBTSxFQUFDLFNBTlQ7QUFPRSxPQUFHLEVBQUMsVUFQTjtBQVFFLE9BQUcsRUFBQyxNQVJOO0FBU0UsU0FBSyxFQUFDLE1BVFI7QUFVRSxVQUFNLEVBQUMsTUFWVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUUsTUFBQyw0Q0FBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQW1CLFFBQUksRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FmRixFQTZCR0MsT0FBTyxHQUNOLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURNLEdBR04sbUVBQ0UsTUFBQyw0Q0FBRDtBQUFNLE9BQUcsRUFBQyxJQUFWO0FBQWUsWUFBUSxFQUFDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFJRSxNQUFDLDJDQUFEO0FBQ0UsS0FBQyxFQUFFO0FBQUVPLE9BQUMsRUFBRSxRQUFMO0FBQWVDLE9BQUMsRUFBRTtBQUFsQixLQURMO0FBRUUsVUFBTSxFQUFFO0FBQUVBLE9BQUMsRUFBRTtBQUFMLEtBRlY7QUFHRSxlQUFXLEVBQUMsU0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQywyQ0FBRDtBQUFLLFFBQUksRUFBQyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU8sS0FBQyxFQUFDLGNBQVQ7QUFBd0IsY0FBVSxFQUFDLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FMRixFQVVFLE1BQUMsMkNBQUQ7QUFBSyxRQUFJLEVBQUMsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFPLEtBQUMsRUFBQyxjQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQVZGLENBSkYsQ0FoQ0osQ0FERjtBQXVERDtLQXhEdUJYLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9jb250cmFjdHMuNGE2ZmE4ODVmYjRmMzViNGM0ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQW5jaG9yLFxyXG4gIEJ1dHRvbixcclxuICBDb2wsXHJcbiAgRGl2LFxyXG4gIEljb24sXHJcbiAgTGFiZWwsXHJcbiAgTW9kYWwsXHJcbiAgUm93LFxyXG4gIFRleHQsXHJcbn0gZnJvbSBcImF0b21pemVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9maWxlTG9hZGVyIGZyb20gXCIuLi9wYXJ0cy9wcm9maWxlX2xvYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJJbmZvTW9kYWwoeyBpc09wZW4sIG9uQ2xvc2UsIGxvYWRpbmcsIG9yZGVyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBhbGlnbj17e1xyXG4gICAgICAgIHhzOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICBzbTogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgbWQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgICAgIGxnOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHhsOiBcImNlbnRlclwiLFxyXG4gICAgICB9fVxyXG4gICAgICByb3VuZGVkPVwibWRcIlxyXG4gICAgICBtYXhXPVwiNTByZW1cIlxyXG4gICAgICBwPVwiMjBweFwiXHJcbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcclxuICAgID5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHJvdW5kZWQ9XCJjaXJjbGVcIlxyXG4gICAgICAgIGJnPVwiI2ZmZlwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgIHRvcD1cIjFyZW1cIlxyXG4gICAgICAgIHJpZ2h0PVwiMXJlbVwiXHJcbiAgICAgICAgekluZGV4PVwiMTAwMFwiXHJcbiAgICAgID5cclxuICAgICAgICA8SWNvbiBuYW1lPVwiQ3Jvc3NcIiBzaXplPVwiMzJweFwiIC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8UHJvZmlsZUxvYWRlciAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VGV4dCB0YWc9XCJoMVwiIHRleHRTaXplPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgQ29udHJhY3QgRGV0YWlsc1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICBwPXt7IHQ6IFwiMC41cmVtXCIsIGI6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgICAgYm9yZGVyPXt7IGI6IFwiMXB4IHNvbGlkXCIgfX1cclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJncmF5MzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENvbCBzaXplPVwiOFwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBkPVwiaW5saW5lLWJsb2NrXCIgdGV4dFdlaWdodD1cIjYwMFwiPlxyXG4gICAgICAgICAgICAgICAgU2hpcnQgTGVuZ3RoXHJcbiAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc2l6ZT1cIjRcIj5cclxuICAgICAgICAgICAgICA8TGFiZWwgZD1cImlubGluZS1ibG9ja1wiPjM4Mzg8L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=