webpackHotUpdate_N_E("pages/store/offers",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJvbk9wZW4iLCJ1c2VTdGF0ZSIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJpbWciLCJzZXRJbWciLCJzaG93TGlzdCIsInNldFNob3dMaXN0IiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJpZCIsIl9pZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJMb2dPdXRGb3JtIiwiTG9nT3V0UmVxdWVzdCIsImRhdGUiLCJwdXNoIiwidXNlRWZmZWN0IiwiZ2V0VXNlckltZyIsIkF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm94eSIsImhvc3QiLCJwb3J0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYXZhdGFyIiwiY29uc29sZSIsImxvZyIsInIiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwibCIsIm9iamVjdEZpdCIsInQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNUQyxzREFBUSxDQUFDLEtBQUQsQ0FEQztBQUFBLE1BQ2xDQyxRQURrQztBQUFBLE1BQ3hCQyxXQUR3Qjs7QUFBQSxtQkFFbkJGLHNEQUFRLENBQUMsRUFBRCxDQUZXO0FBQUEsTUFFbENHLEdBRmtDO0FBQUEsTUFFN0JDLE1BRjZCOztBQUFBLG1CQUdUSixzREFBUSxDQUFDLEtBQUQsQ0FIQztBQUFBLE1BR2xDSyxRQUhrQztBQUFBLE1BR3hCQyxXQUh3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QVY7QUFBa0IsS0FBQyxFQUFFO0FBQUVBLE9BQUMsRUFBRTtBQUFMLEtBQXJCO0FBQW9DLGNBQVUsRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBdkJGLEVBaUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFRLEtBQUMsRUFBQyxPQUFWO0FBQWtCLEtBQUMsRUFBRTtBQUFFQSxPQUFDLEVBQUU7QUFBTCxLQUFyQjtBQUFvQyxjQUFVLEVBQUMsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBakNGLENBTEYsQ0E3TkYsQ0FERixDQURGO0FBK1FEOztHQXRUdUJuRCxNO1VBS1RhLHVELEVBR0lLLHVELEVBQ0ZFLHNEOzs7S0FUT3BCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcmUvb2ZmZXJzLjdhZmNmNmEzZmNlOTQwZGFjZGMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFuY2hvcixcclxuICBCdXR0b24sXHJcbiAgQ29sbGFwc2UsXHJcbiAgQ29udGFpbmVyLFxyXG4gIERpdixcclxuICBJY29uLFxyXG4gIEltYWdlLFxyXG4gIElucHV0LFxyXG59IGZyb20gXCJhdG9taXplXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5pbXBvcnQgTGlnaHRCdXR0b24gZnJvbSBcIi4uL2J1dHRvbnMvbGlnaHRfYnV0dG9uXCI7XHJcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCIuLi9idXR0b25zL21haW5fYnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IExvZ091dFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9naW5fYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgb25PcGVuIH0pIHtcclxuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1nLCBzZXRJbWddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3dMaXN0LCBzZXRTaG93TGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9rZW4gPSBzdG9yZS5nZXRTdGF0ZSgpLmF1dGgudG9rZW47XHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgaWQgPSBhdXRoLl9pZDtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGZ1bmN0aW9uIExvZ091dEZvcm0oKSB7XHJcbiAgICBpZiAoZGlzcGF0Y2goTG9nT3V0UmVxdWVzdCh7IGRhdGU6IFwicGVuXCIgfSkpKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiLz9hdXRoPXRydWVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VXNlckltZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgQXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH11c2Vycy8ke2lkfWAsXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0SW1nKHJlcy5kYXRhLmF2YXRhci51cmwpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlckltZygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxEaXZcclxuICAgICAgICBwb3M9XCJmaXhlZFwiXHJcbiAgICAgICAgekluZGV4PVwiMTAwXCJcclxuICAgICAgICB0b3A9XCIwXCJcclxuICAgICAgICBsZWZ0PVwiMFwiXHJcbiAgICAgICAgYmc9XCJ3aGl0ZVwiXHJcbiAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgIHNoYWRvdz1cIjJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lciBwb3M9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPERpdlxyXG4gICAgICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGg9XCI2MHB4XCJcclxuICAgICAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgICAgICBwPVwiMFwiXHJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBwb3M9XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiogVGhlIGxvZ28gQW5kIHJlc3QgKi99XHJcbiAgICAgICAgICAgIDxEaXYgZD1cImZsZXhcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGg9XCIzMnB4XCJcclxuICAgICAgICAgICAgICAgIHc9XCIzMnB4XCJcclxuICAgICAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgaG92ZXJCZz1cImdyYXkzMDBcIlxyXG4gICAgICAgICAgICAgICAgcm91bmRlZD1cImxnXCJcclxuICAgICAgICAgICAgICAgIG09e3sgcjogXCIxcmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIGQ9e3tcclxuICAgICAgICAgICAgICAgICAgeHM6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICBzbTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1kOiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgbGc6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICB4bDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbk1lbnUoIW9wZW5NZW51KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtvcGVuTWVudSA/IFwiQ3Jvc3NcIiA6IFwiTWVudVwifVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwiMzJweFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHc9XCI0MHB4XCJcclxuICAgICAgICAgICAgICAgICAgaD1cIjQwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vaWplbGVjaGltYW9iaS9zdGVlY2hpdC1mcm9udC9ibG9iL21haW4vTE9HTyUyMDNEJTIwSWNvbl8zJTIwUE5HLnBuZz9yYXc9dHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlN0ZWVjaGl0IC0gTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB7LyoqIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbT17eyBsOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgdz1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgIHA9e3sgeDogXCIyLjVyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgZD17e1xyXG4gICAgICAgICAgICAgICAgICB4czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNtOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgbWQ6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBsZzogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICB4bDogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHByZWZpeD17XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5ODAwXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdD1cIjAuNzVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZVkoLTUwJSlcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGFpbG9ycywgZmFicmljIHN0b3JlIC4gLiAuXCJcclxuICAgICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgPERpdlxyXG4gICAgICAgICAgICAgICAgbT17eyBsOiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgZD17e1xyXG4gICAgICAgICAgICAgICAgICB4czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNtOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgbWQ6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBsZzogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHhsOiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8/ZXhwbG9yZT10XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgbT17eyByOiBcIjMwcHhcIiB9fSBmb250RmFtaWx5PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJvb2sgVGFpbG9yc1xyXG4gICAgICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFicmljc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8QW5jaG9yIGQ9XCJibG9ja1wiIG09e3sgcjogXCIzMHB4XCIgfX0gZm9udEZhbWlseT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBCdXkgTWF0ZXJpYWxzXHJcbiAgICAgICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvbG9naXN0aWNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgbT17eyByOiBcIjMwcHhcIiB9fSBmb250RmFtaWx5PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2lzdGljc1xyXG4gICAgICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8QW5jaG9yIGQ9XCJibG9ja1wiIG09e3sgcjogXCIzMHB4XCIgfX0gZm9udEZhbWlseT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgICAgPC9EaXY+XHJcblxyXG4gICAgICAgICAgICB7LyoqIFNpZGUgYnV0dG9ucyAqL31cclxuICAgICAgICAgICAgeyF0b2tlbiA/IChcclxuICAgICAgICAgICAgICA8RGl2IGQ9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgICAgIGQ9e3tcclxuICAgICAgICAgICAgICAgICAgICB4czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc206IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1kOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBsZzogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHhsOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaWdodEJ1dHRvbiB0aXRsZT1cIlNpZ24gaW5cIiBvbkNsaWNrPXtvbk9wZW59IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGl2IG09e3sgbDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxNYWluQnV0dG9uIHRpdGxlPVwiU2lnbiB1cFwiIG9uQ2xpY2s9e29uT3Blbn0gLz5cclxuICAgICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxEaXYgZD1cImZsZXhcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPERpdlxyXG4gICAgICAgICAgICAgICAgICBtPXt7IGw6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGQ9e3tcclxuICAgICAgICAgICAgICAgICAgICB4czogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc206IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1kOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBsZzogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHhsOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3RvcmUvcHJvZHVjdHMvY3JlYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b24gdGl0bGU9XCJDcmVhdGUgYSBwcm9kdWN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBoPVwiMi41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgdz1cIjIuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICBob3ZlckJnPVwiZ3JheTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICBtPXt7IGw6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJNZXNzYWdlXCIgc2l6ZT1cIjI0cHhcIiBjb2xvcj1cImJsYWNrXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgaD1cIjIuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgIHc9XCIyLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICBiZz1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgaG92ZXJCZz1cImdyYXkzMDBcIlxyXG4gICAgICAgICAgICAgICAgICByb3VuZGVkPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgbT17eyBsOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiTm90aWZpY2F0aW9uXCIgc2l6ZT1cIjI0cHhcIiBjb2xvcj1cImJsYWNrXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBoPVwiMi41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgdz1cIjIuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICBob3ZlckJnPVwiZ3JheTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICBtPXt7IGw6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dMaXN0KCFzaG93TGlzdCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHc9XCIycmVtXCJcclxuICAgICAgICAgICAgICAgICAgICBoPVwiMnJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZD1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBiZ1NpemU9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgIGltZyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3N0LmRlcG9zaXRwaG90b3MuY29tLzE3NzkyNTMvNTE0MC92LzYwMC9kZXBvc2l0cGhvdG9zXzUxNDA1MjU5LXN0b2NrLWlsbHVzdHJhdGlvbi1tYWxlLWF2YXRhci1wcm9maWxlLXBpY3R1cmUtdXNlLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAge3Nob3dMaXN0ICYmIChcclxuICAgICAgICAgICAgICAgICAgPERpdlxyXG4gICAgICAgICAgICAgICAgICAgIHBvcz1cImFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICByaWdodD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcD1cIjYwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHc9XCIyMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmc9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QW5jaG9yIGQ9XCJibG9ja1wiIHA9XCI1cHggMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdG9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFuY2hvciBkPVwiYmxvY2tcIiBwPVwiMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNeSBzdG9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9BbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbmNob3JcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e0xvZ091dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJkYW5nZXI4MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cImJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHA9XCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaWdub3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxEaXZcclxuICAgICAgICAgIGQ9eyFvcGVuTWVudSAmJiBcIm5vbmVcIn1cclxuICAgICAgICAgIGJvcmRlcj17eyB0OiBcIjFweCBzb2xpZFwiIH19XHJcbiAgICAgICAgICBib3JkZXJDb2xvcj1cImdyYXk1MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKio8SW5wdXRcclxuICAgICAgICAgICAgICBtPXt7IHk6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHA9e3sgeDogXCIyLjVyZW1cIiB9fVxyXG4gICAgICAgICAgICAgIHByZWZpeD17XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5ODAwXCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICBwb3M9XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ9XCIwLjc1cmVtXCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlWSgtNTAlKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0YWlsb3JzLCBmYWJyaWMgc3RvcmUgLiAuIC5cIlxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8/ZXhwbG9yZT10XCI+XHJcbiAgICAgICAgICAgICAgPEFuY2hvciBkPVwiYmxvY2tcIiBwPXt7IHk6IFwiMTBweFwiIH19IGZvbnRGYW1pbHk9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBCb29rIFRhaWxvcnNcclxuICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhYnJpY3NcIj5cclxuICAgICAgICAgICAgICA8QW5jaG9yIGQ9XCJibG9ja1wiIHA9e3sgeTogXCIxMHB4XCIgfX0gZm9udEZhbWlseT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIEJ1eSBNYXRlcmlhbHNcclxuICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9sb2dpc3RpY3NcIj5cclxuICAgICAgICAgICAgICA8QW5jaG9yIGQ9XCJibG9ja1wiIHA9e3sgeTogXCIxMHB4XCIgfX0gZm9udEZhbWlseT1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIExvZ2lzdGljc1xyXG4gICAgICAgICAgICAgIDwvQW5jaG9yPlxyXG4gICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxBbmNob3IgZD1cImJsb2NrXCIgcD17eyB5OiBcIjEwcHhcIiB9fSBmb250RmFtaWx5PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICA8L0FuY2hvcj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9EaXY+XHJcbiAgICAgIDwvRGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9