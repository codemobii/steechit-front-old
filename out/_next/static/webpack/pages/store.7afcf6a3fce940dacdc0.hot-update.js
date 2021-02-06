webpackHotUpdate_N_E("pages/store",{

/***/ "./components/layouts/header.js":
/*!**************************************!*\
  !*** ./components/layouts/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/store */ "./services/store.js");
/* harmony import */ var _buttons_light_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buttons/light_button */ "./components/buttons/light_button.js");
/* harmony import */ var _buttons_main_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buttons/main_button */ "./components/buttons/main_button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_login_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/login_action */ "./services/login_action.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\components\\layouts\\header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;










function Header(_ref) {
  _s();

  var onOpen = _ref.onOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      openMenu = _useState[0],
      setOpenMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      img = _useState2[0],
      setImg = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showList = _useState3[0],
      setShowList = _useState3[1];

  var token = _services_store__WEBPACK_IMPORTED_MODULE_5__["default"].getState().auth.token;
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.auth;
  });
  var id = auth._id;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();

  function LogOutForm() {
    if (dispatch(Object(_services_login_action__WEBPACK_IMPORTED_MODULE_10__["LogOutRequest"])({
      date: "pen"
    }))) {
      router.push("/?auth=true");
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var getUserImg = /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_9___default()({
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer ".concat(token)
                  },
                  proxy: {
                    host: "104.236.174.88",
                    port: 3128
                  },
                  method: "GET",
                  url: "".concat("https://api.steechit.com/", "users/").concat(id)
                }).then(function (res) {
                  setImg(res.data.avatar.url);
                  console.log(res);
                })["catch"](function () {});

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getUserImg() {
        return _ref2.apply(this, arguments);
      };
    }();

    getUserImg();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    pos: "fixed",
    zIndex: "100",
    top: "0",
    left: "0",
    bg: "white",
    w: "100%",
    shadow: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    pos: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    w: "100%",
    h: "60px",
    d: "flex",
    p: "0",
    justify: "space-between",
    align: "center",
    pos: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    d: "flex",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    h: "32px",
    w: "32px",
    bg: "transparent",
    hoverBg: "gray300",
    rounded: "lg",
    m: {
      r: "1rem"
    },
    d: {
      xs: "flex",
      sm: "flex",
      md: "flex",
      lg: "none",
      xl: "none"
    },
    onClick: function onClick() {
      return setOpenMenu(!openMenu);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: openMenu ? "Cross" : "Menu",
    size: "32px",
    color: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    w: "40px",
    h: "40px",
    src: "https://github.com/ijelechimaobi/steechit-front/blob/main/LOGO%203D%20Icon_3%20PNG.png?raw=true",
    alt: "Steechit - Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    m: {
      l: "50px"
    },
    d: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "flex",
      xl: "flex"
    },
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/?explore=t",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    d: "block",
    m: {
      r: "30px"
    },
    fontFamily: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, "Book Tailors")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/fabrics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    d: "block",
    m: {
      r: "30px"
    },
    fontFamily: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, "Buy Materials")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    d: "block",
    m: {
      r: "30px"
    },
    fontFamily: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 19
    }
  }, "About")))), !token ? __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    d: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    d: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "block",
      xl: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, __jsx(_buttons_light_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Sign in",
    onClick: onOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    m: {
      l: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Sign up",
    onClick: onOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }))) : __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    d: "flex",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    m: {
      l: "20px"
    },
    d: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "block",
      xl: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/store/products/create",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, __jsx(_buttons_main_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Create a product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    h: "2.5rem",
    w: "2.5rem",
    bg: "transparent",
    hoverBg: "gray300",
    rounded: "circle",
    m: {
      l: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 17
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "Notification",
    size: "24px",
    color: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 19
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    h: "2.5rem",
    w: "2.5rem",
    bg: "transparent",
    hoverBg: "gray300",
    rounded: "circle",
    m: {
      l: "1rem"
    },
    onClick: function onClick() {
      return setShowList(!showList);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    w: "2rem",
    h: "2rem",
    rounded: "circle",
    style: {
      objectFit: "cover"
    },
    bgSize: "cover",
    src: img || "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 19
    }
  })), showList && __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    pos: "absolute",
    right: "0",
    top: "60px",
    w: "200px",
    bg: "#fff",
    shadow: "3",
    rounded: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 21
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    d: "block",
    p: "5px 10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 23
    }
  }, "Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/store",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 21
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    d: "block",
    p: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 23
    }
  }, "My store")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    onClick: LogOutForm,
    textColor: "danger800",
    d: "block",
    p: "10px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 21
    }
  }, "Signout"))))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    d: !openMenu && "none",
    border: {
      t: "1px solid"
    },
    borderColor: "gray500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/?explore=t",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    d: "block",
    p: {
      y: "10px"
    },
    fontFamily: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 15
    }
  }, "Book Tailors")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/fabrics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    d: "block",
    p: {
      y: "10px"
    },
    fontFamily: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 15
    }
  }, "Buy Materials")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    d: "block",
    p: {
      y: "10px"
    },
    fontFamily: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  }, "About"))))));
}

_s(Header, "sSQjwu1PeM1y8hZCa4+tVJNaIik=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJvbk9wZW4iLCJ1c2VTdGF0ZSIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJpbWciLCJzZXRJbWciLCJzaG93TGlzdCIsInNldFNob3dMaXN0IiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJpZCIsIl9pZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJMb2dPdXRGb3JtIiwiTG9nT3V0UmVxdWVzdCIsImRhdGUiLCJwdXNoIiwidXNlRWZmZWN0IiwiZ2V0VXNlckltZyIsIkF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm94eSIsImhvc3QiLCJwb3J0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYXZhdGFyIiwiY29uc29sZSIsImxvZyIsInIiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwibCIsIm9iamVjdEZpdCIsInQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNUQyxzREFBUSxDQUFDLEtBQUQsQ0FEQztBQUFBLE1BQ2xDQyxRQURrQztBQUFBLE1BQ3hCQyxXQUR3Qjs7QUFBQSxtQkFFbkJGLHNEQUFRLENBQUMsRUFBRCxDQUZXO0FBQUEsTUFFbENHLEdBRmtDO0FBQUEsTUFFN0JDLE1BRjZCOztBQUFBLG1CQUdUSixzREFBUSxDQUFDLEtBQUQsQ0FIQztBQUFBLE1BR2xDSyxRQUhrQztBQUFBLE1BR3hCQyxXQUh3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QVY7QUFBa0IsS0FBQyxFQUFFO0FBQUVBLE9BQUMsRUFBRTtBQUFMLEtBQXJCO0FBQW9DLGNBQVUsRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBdkJGLEVBaUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFRLEtBQUMsRUFBQyxPQUFWO0FBQWtCLEtBQUMsRUFBRTtBQUFFQSxPQUFDLEVBQUU7QUFBTCxLQUFyQjtBQUFvQyxjQUFVLEVBQUMsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBakNGLENBTEYsQ0E3TkYsQ0FERixDQURGO0FBK1FEOztHQXRUdUJuRCxNO1VBS1RhLHVELEVBR0lLLHVELEVBQ0ZFLHNEOzs7S0FUT3BCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcmUuN2FmY2Y2YTNmY2U5NDBkYWNkYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQW5jaG9yLFxyXG4gIEJ1dHRvbixcclxuICBDb2xsYXBzZSxcclxuICBDb250YWluZXIsXHJcbiAgRGl2LFxyXG4gIEljb24sXHJcbiAgSW1hZ2UsXHJcbiAgSW5wdXQsXHJcbn0gZnJvbSBcImF0b21pemVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0b3JlXCI7XHJcbmltcG9ydCBMaWdodEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9ucy9saWdodF9idXR0b25cIjtcclxuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uL2J1dHRvbnMvbWFpbl9idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTG9nT3V0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sb2dpbl9hY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBvbk9wZW4gfSkge1xyXG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWcsIHNldEltZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2hvd0xpc3QsIHNldFNob3dMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2tlbiA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbjtcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgZnVuY3Rpb24gTG9nT3V0Rm9ybSgpIHtcclxuICAgIGlmIChkaXNwYXRjaChMb2dPdXRSZXF1ZXN0KHsgZGF0ZTogXCJwZW5cIiB9KSkpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvP2F1dGg9dHJ1ZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VySW1nID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBBeGlvcyh7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfXVzZXJzLyR7aWR9YCxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBzZXRJbWcocmVzLmRhdGEuYXZhdGFyLnVybCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIH07XHJcbiAgICBnZXRVc2VySW1nKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPERpdlxyXG4gICAgICAgIHBvcz1cImZpeGVkXCJcclxuICAgICAgICB6SW5kZXg9XCIxMDBcIlxyXG4gICAgICAgIHRvcD1cIjBcIlxyXG4gICAgICAgIGxlZnQ9XCIwXCJcclxuICAgICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgc2hhZG93PVwiMlwiXHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIHBvcz1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgaD1cIjYwcHhcIlxyXG4gICAgICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAgICAgIHA9XCIwXCJcclxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIHBvcz1cInJlbGF0aXZlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qKiBUaGUgbG9nbyBBbmQgcmVzdCAqL31cclxuICAgICAgICAgICAgPERpdiBkPVwiZmxleFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaD1cIjMycHhcIlxyXG4gICAgICAgICAgICAgICAgdz1cIjMycHhcIlxyXG4gICAgICAgICAgICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICBob3ZlckJnPVwiZ3JheTMwMFwiXHJcbiAgICAgICAgICAgICAgICByb3VuZGVkPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgbT17eyByOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgZD17e1xyXG4gICAgICAgICAgICAgICAgICB4czogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHNtOiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgbWQ6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICBsZzogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIHhsOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuTWVudSghb3Blbk1lbnUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e29wZW5NZW51ID8gXCJDcm9zc1wiIDogXCJNZW51XCJ9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIzMnB4XCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgdz1cIjQwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBoPVwiNDBweFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9pamVsZWNoaW1hb2JpL3N0ZWVjaGl0LWZyb250L2Jsb2IvbWFpbi9MT0dPJTIwM0QlMjBJY29uXzMlMjBQTkcucG5nP3Jhdz10cnVlXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiU3RlZWNoaXQgLSBMb2dvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIHsvKiogPElucHV0XHJcbiAgICAgICAgICAgICAgICBtPXt7IGw6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICB3PVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgcD17eyB4OiBcIjIuNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICBkPXt7XHJcbiAgICAgICAgICAgICAgICAgIHhzOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgc206IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBtZDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxnOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgIHhsOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcHJlZml4PXtcclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXk4MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBwb3M9XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wPVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0PVwiMC43NXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlWSgtNTAlKVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0YWlsb3JzLCBmYWJyaWMgc3RvcmUgLiAuIC5cIlxyXG4gICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgICBtPXt7IGw6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBkPXt7XHJcbiAgICAgICAgICAgICAgICAgIHhzOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgc206IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBtZDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxnOiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgeGw6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLz9leHBsb3JlPXRcIj5cclxuICAgICAgICAgICAgICAgICAgPEFuY2hvciBkPVwiYmxvY2tcIiBtPXt7IHI6IFwiMzBweFwiIH19IGZvbnRGYW1pbHk9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQm9vayBUYWlsb3JzXHJcbiAgICAgICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYWJyaWNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgbT17eyByOiBcIjMwcHhcIiB9fSBmb250RmFtaWx5PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJ1eSBNYXRlcmlhbHNcclxuICAgICAgICAgICAgICAgICAgPC9BbmNob3I+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9sb2dpc3RpY3NcIj5cclxuICAgICAgICAgICAgICAgICAgPEFuY2hvciBkPVwiYmxvY2tcIiBtPXt7IHI6IFwiMzBweFwiIH19IGZvbnRGYW1pbHk9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9naXN0aWNzXHJcbiAgICAgICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgbT17eyByOiBcIjMwcHhcIiB9fSBmb250RmFtaWx5PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICA8L0Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiogU2lkZSBidXR0b25zICovfVxyXG4gICAgICAgICAgICB7IXRva2VuID8gKFxyXG4gICAgICAgICAgICAgIDxEaXYgZD1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxEaXZcclxuICAgICAgICAgICAgICAgICAgZD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHhzOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBzbTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWQ6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxnOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgeGw6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpZ2h0QnV0dG9uIHRpdGxlPVwiU2lnbiBpblwiIG9uQ2xpY2s9e29uT3Blbn0gLz5cclxuICAgICAgICAgICAgICAgIDwvRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxEaXYgbT17eyBsOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b24gdGl0bGU9XCJTaWduIHVwXCIgb25DbGljaz17b25PcGVufSAvPlxyXG4gICAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPERpdiBkPVwiZmxleFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgICAgIG09e3sgbDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgZD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHhzOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBzbTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWQ6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxnOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgeGw6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdG9yZS9wcm9kdWN0cy9jcmVhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpbkJ1dHRvbiB0aXRsZT1cIkNyZWF0ZSBhIHByb2R1Y3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGg9XCIyLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICB3PVwiMi41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgIGhvdmVyQmc9XCJncmF5MzAwXCJcclxuICAgICAgICAgICAgICAgICAgcm91bmRlZD1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgIG09e3sgbDogXCIxcmVtXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cIk1lc3NhZ2VcIiBzaXplPVwiMjRweFwiIGNvbG9yPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBoPVwiMi41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgdz1cIjIuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICBob3ZlckJnPVwiZ3JheTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICBtPXt7IGw6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJOb3RpZmljYXRpb25cIiBzaXplPVwiMjRweFwiIGNvbG9yPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGg9XCIyLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICB3PVwiMi41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgIGhvdmVyQmc9XCJncmF5MzAwXCJcclxuICAgICAgICAgICAgICAgICAgcm91bmRlZD1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgIG09e3sgbDogXCIxcmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0xpc3QoIXNob3dMaXN0KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgdz1cIjJyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGg9XCIycmVtXCJcclxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vc3QuZGVwb3NpdHBob3Rvcy5jb20vMTc3OTI1My81MTQwL3YvNjAwL2RlcG9zaXRwaG90b3NfNTE0MDUyNTktc3RvY2staWxsdXN0cmF0aW9uLW1hbGUtYXZhdGFyLXByb2ZpbGUtcGljdHVyZS11c2UuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvd0xpc3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wPVwiNjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdz1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBiZz1cIiNmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgcD1cIjVweCAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0b3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QW5jaG9yIGQ9XCJibG9ja1wiIHA9XCIxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE15IHN0b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFuY2hvclxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17TG9nT3V0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cImRhbmdlcjgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcD1cIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNpZ25vdXRcclxuICAgICAgICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPERpdlxyXG4gICAgICAgICAgZD17IW9wZW5NZW51ICYmIFwibm9uZVwifVxyXG4gICAgICAgICAgYm9yZGVyPXt7IHQ6IFwiMXB4IHNvbGlkXCIgfX1cclxuICAgICAgICAgIGJvcmRlckNvbG9yPVwiZ3JheTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgey8qKjxJbnB1dFxyXG4gICAgICAgICAgICAgIG09e3sgeTogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgcD17eyB4OiBcIjIuNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgcHJlZml4PXtcclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXk4MDBcIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgIHBvcz1cImFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgICAgdG9wPVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgbGVmdD1cIjAuNzVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGVZKC01MCUpXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHRhaWxvcnMsIGZhYnJpYyBzdG9yZSAuIC4gLlwiXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLz9leHBsb3JlPXRcIj5cclxuICAgICAgICAgICAgICA8QW5jaG9yIGQ9XCJibG9ja1wiIHA9e3sgeTogXCIxMHB4XCIgfX0gZm9udEZhbWlseT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIEJvb2sgVGFpbG9yc1xyXG4gICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFicmljc1wiPlxyXG4gICAgICAgICAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgcD17eyB5OiBcIjEwcHhcIiB9fSBmb250RmFtaWx5PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgQnV5IE1hdGVyaWFsc1xyXG4gICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2xvZ2lzdGljc1wiPlxyXG4gICAgICAgICAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgcD17eyB5OiBcIjEwcHhcIiB9fSBmb250RmFtaWx5PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgTG9naXN0aWNzXHJcbiAgICAgICAgICAgICAgPC9BbmNob3I+XHJcbiAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPEFuY2hvciBkPVwiYmxvY2tcIiBwPXt7IHk6IFwiMTBweFwiIH19IGZvbnRGYW1pbHk9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0Rpdj5cclxuICAgICAgPC9EaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=