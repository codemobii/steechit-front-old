webpackHotUpdate_N_E("pages/profile/settings",{

/***/ "./app-components/about_me_settings.js":
/*!*********************************************!*\
  !*** ./app-components/about_me_settings.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutMeSettings; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/store */ "./services/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\app-components\\about_me_settings.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






function AboutMeSettings(_ref) {
  _s();

  var user = _ref.user;
  // Getting auth state and user data for structuring the navbar
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.auth;
  });
  var token = _services_store__WEBPACK_IMPORTED_MODULE_5__["default"].getState().auth.token;
  var id = auth._id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(user.firstName),
      firstName = _useState[0],
      setFirstName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(user.lastName),
      lastName = _useState2[0],
      setLastName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(user.email),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(user.dateOfBirth),
      dateOfBirth = _useState4[0],
      setDateOfBirth = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(user.gender),
      gender = _useState5[0],
      setGender = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(user.state),
      stateU = _useState6[0],
      setStateU = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(user.country),
      country = _useState7[0],
      setCountry = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      uploading = _useState9[0],
      setUploading = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(user.imageUrl),
      userImg = _useState10[0],
      setUserImg = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      message = _useState11[0],
      setMessage = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      show = _useState12[0],
      setShow = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(user.phone),
      phone = _useState13[0],
      setPhone = _useState13[1];

  var handleFirstName = function handleFirstName(e) {
    setFirstName(e.target.value);
  };

  var handleLastName = function handleLastName(e) {
    setLastName(e.target.value);
  };

  var handleEmail = function handleEmail(e) {
    setEmail(e.target.value);
  };

  var handlePhone = function handlePhone(e) {
    setPhone(e.target.value);
  };

  var handleDateOfBirth = function handleDateOfBirth(e) {
    setDateOfBirth(e.target.value);
  };

  var handleGender = function handleGender(e) {
    setGender(e.target.value);
    console.log(gender);
  };

  var handleCountry = function handleCountry(e) {
    setCountry(e.target.value);
  };

  var handleState = function handleState(e) {
    setStateU(e.target.value);
  };

  var handleImageUpload = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var image, formData, save, Img_url, res, msg;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(event.target.files[0] !== "")) {
                _context.next = 30;
                break;
              }

              setUploading(true);
              image = event.target.files[0];
              console.log(image);
              formData = new FormData();
              formData.append("image", image, image.name, image.size, image.type);
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("https://steechit-image-manager.herokuapp.com/upload", formData);

            case 8:
              save = _context.sent;
              Img_url = save.data.link;
              _context.prev = 10;
              _context.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "PUT",
                url: "https://steechit-api.herokuapp.com/users/".concat(id),
                data: {
                  avatar: {
                    url: Img_url
                  }
                }
              });

            case 13:
              res = _context.sent;
              console.log(res);
              setUserImg(Img_url);
              setMessage("Image Upload Successful");
              setShow(true);
              setUploading(false);
              _context.next = 28;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](10);
              msg = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(_context.t0, "response.data.message") || _context.t0.message;
              console.log(_context.t0);
              setUploading(false);
              setMessage(msg);
              setShow(true);

            case 28:
              _context.next = 32;
              break;

            case 30:
              setMessage("Please select an image");
              setShow(true);

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[10, 21]]);
    }));

    return function handleImageUpload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(evt) {
      var res, msg;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              evt.preventDefault();
              setLoading(true);
              _context2.prev = 2;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_6___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "PUT",
                url: "https://steechit-api.herokuapp.com/users/".concat(id),
                data: {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phone: phone,
                  dateOfBirth: dateOfBirth,
                  gender: gender,
                  country: country,
                  state: stateU
                }
              });

            case 5:
              res = _context2.sent;
              setLoading(false);
              setMessage("Updated successfully");
              setShow(true);
              console.log(res);
              _context2.next = 19;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](2);
              msg = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(_context2.t0, "response.data.message") || _context2.t0.message;
              console.log(_context2.t0);
              setMessage(msg);
              setShow(true);
              setLoading(false);

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 12]]);
    }));

    return function handleSubmit(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    d: "flex",
    align: "center",
    justify: "center",
    m: {
      t: "1rem",
      b: "3rem"
    },
    pos: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    pos: "relative",
    w: "120px",
    h: "120px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    pos: "absolute",
    rounded: "circle",
    overflow: "hidden",
    w: "100%",
    h: "100%",
    style: {
      objectFit: "cover"
    },
    left: "0",
    right: "0",
    src: userImg,
    shadow: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }), uploading ? __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    rounded: "circle",
    className: "overlay_light",
    d: "flex",
    align: "center",
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "Loading3",
    size: "32px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  })) : null, __jsx("div", {
    className: "selectImageIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "file",
    className: "selectImage",
    onChange: handleImageUpload,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }))))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, "First name", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "John",
    value: firstName,
    onChange: handleFirstName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, "Last name", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Doe",
    value: lastName,
    onChange: handleLastName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, "Phone number", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "070********",
    value: phone,
    onChange: handlePhone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }
  }, "Email address", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "johndoe@gmail.com",
    value: email,
    onChange: handleEmail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, "Date of Birth", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Date of birth",
    type: "date",
    value: dateOfBirth,
    onChange: handleDateOfBirth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, "Gender", __jsx("select", {
    "class": "select",
    onChange: handleGender,
    value: gender,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 15
    }
  }, __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  }, "Select gender"), __jsx("option", {
    value: "F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 17
    }
  }, "Female"), __jsx("option", {
    value: "M",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 17
    }
  }, "Male")))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }
  }, "Country", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Nigeria",
    value: country,
    onChange: handleCountry,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 13
    }
  }, "State", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Lagos",
    value: stateU,
    onChange: handleState,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 15
    }
  })))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fontFamily: "primary",
    bg: "warning700",
    justify: "center",
    m: {
      t: "1rem"
    },
    prefix: loading ? __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "Loading3",
      size: "18px",
      color: "white",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 15
      }
    }) : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 9
    }
  }, loading ? "Saving" : "Save changes")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Notification"], {
    bg: "warning700",
    isOpen: show,
    onClose: function onClose() {
      return setShow(false);
    },
    prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "CloseSolid",
      color: "white",
      size: "18px",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 11
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 7
    }
  }, message));
}

_s(AboutMeSettings, "K8ay81x+fQw7GzzUGGq9xcdbYgM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = AboutMeSettings;

var _c;

$RefreshReg$(_c, "AboutMeSettings");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app-components/contact_settings.js":
/*!********************************************!*\
  !*** ./app-components/contact_settings.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactSettings; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/store */ "./services/store.js");



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\app-components\\contact_settings.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






function ContactSettings(_ref) {
  _s();

  var user = _ref.user;
  // Getting auth state and user data for structuring the navbar
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.auth;
  });
  var token = _services_store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().auth.token;
  var id = auth._id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(user.address),
      address = _useState4[0],
      setAddress = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(user.zipCode),
      zipCode = _useState5[0],
      setZipCode = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(user.phone),
      phone = _useState6[0],
      setPhone = _useState6[1];

  var handleAddress = function handleAddress(e) {
    setAddress(e.target.value);
  };

  var handleZipCode = function handleZipCode(e) {
    setZipCode(e.target.value);
  };

  var handlePhone = function handlePhone(e) {
    setPhone(e.target.value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
      var res, msg;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              evt.preventDefault();
              setLoading(true);
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "PUT",
                url: "https://steechit-api.herokuapp.com/users/".concat(id),
                data: {
                  phone: phone,
                  contact: {
                    address: address,
                    zipCode: zipCode
                  }
                }
              });

            case 5:
              res = _context.sent;
              setLoading(false);
              setMessage("Updated successfully");
              setShow(true);
              console.log(res);
              _context.next = 19;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              msg = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(_context.t0, "response.data.message") || _context.t0.message;
              console.log(_context.t0);
              setMessage(msg);
              setShow(true);
              setLoading(false);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Address", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "72 Ostritch Street, Everywhere",
    value: address,
    onChange: handleAddress,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Zip Code", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "0100011",
    value: zipCode,
    onChange: handleZipCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Phone number", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "070********",
    value: phone,
    onChange: handlePhone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  })))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fontFamily: "primary",
    bg: "warning700",
    justify: "center",
    m: {
      t: "1rem"
    },
    prefix: loading ? __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "Loading3",
      size: "18px",
      color: "white",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }) : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, loading ? "Saving" : "Save changes")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Notification"], {
    bg: "warning700",
    isOpen: show,
    onClose: function onClose() {
      return setShow(false);
    },
    prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "CloseSolid",
      color: "white",
      size: "18px",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, message));
}

_s(ContactSettings, "qvk4kR4qcsTlBNbcpN/pMWxuzfA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = ContactSettings;

var _c;

$RefreshReg$(_c, "ContactSettings");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app-components/store_settings.js":
/*!******************************************!*\
  !*** ./app-components/store_settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoreSettings; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\app-components\\store_settings.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






function StoreSettings(_ref) {
  _s();

  var _this = this;

  var user = _ref.user;
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.auth;
  });
  var token = auth.token;
  var id = auth._id;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      storeName = _useState[0],
      setStoreName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      phone = _useState3[0],
      setPhone = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      country = _useState4[0],
      setCountry = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      category = _useState5[0],
      setCategory = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      categoryState = _useState6[0],
      setCategoryState = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      stateU = _useState7[0],
      setStateU = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      getState = _useState8[0],
      setGetState = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      address = _useState9[0],
      setAddress = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      zipCode = _useState10[0],
      setZipCode = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      city = _useState11[0],
      setCity = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      uploadingBanner = _useState13[0],
      setUploadingBanner = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      uploadingLogo = _useState14[0],
      setUploadingLogo = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      imageUrlLogo = _useState15[0],
      setImageUrlLogo = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      imageUrlBanner = _useState16[0],
      setImageUrlBanner = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      latitude = _useState17[0],
      setLatitude = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      longitude = _useState18[0],
      setLongitude = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      show = _useState19[0],
      setShow = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      message = _useState20[0],
      setMessage = _useState20[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var getUserStore = /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, store;
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer ".concat(token)
                  },
                  proxy: {
                    host: "104.236.174.88",
                    port: 3128
                  },
                  method: "GET",
                  url: "https://steechit-api.herokuapp.com/stores/",
                  params: {
                    user: id
                  }
                });

              case 2:
                res = _context.sent;
                store = res.data[0];

                if (store === undefined) {
                  router.push("/profile/store/start");
                } else {
                  setStoreName(store.storeName);
                  setImageUrlBanner(store.storeBanner.url);
                  setImageUrlLogo(store.storeLogo.url);
                  setEmail(store.email);
                  setPhone(store.phone);
                  setStateU(store.state);
                  setCity(store.city);
                  setZipCode(store.zipCode);
                  setCategory(store.productCategories[0]);
                  setAddress(store.address);
                }

                console.log(store);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getUserStore() {
        return _ref2.apply(this, arguments);
      };
    }();

    var getCountries = /*#__PURE__*/function () {
      var _ref3 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer ".concat(token)
                  },
                  proxy: {
                    host: "104.236.174.88",
                    port: 3128
                  },
                  method: "GET",
                  url: "https://steechit-api.herokuapp.com/countries/"
                });

              case 2:
                res = _context2.sent;
                setCountry(res.data[0]._id);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getCountries() {
        return _ref3.apply(this, arguments);
      };
    }();

    var getStates = /*#__PURE__*/function () {
      var _ref4 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res;
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer ".concat(token)
                  },
                  proxy: {
                    host: "104.236.174.88",
                    port: 3128
                  },
                  method: "GET",
                  url: "https://steechit-api.herokuapp.com/states/"
                });

              case 2:
                res = _context3.sent;
                setGetState(res.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getStates() {
        return _ref4.apply(this, arguments);
      };
    }();

    var getCategory = /*#__PURE__*/function () {
      var _ref5 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res;
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer ".concat(token)
                  },
                  proxy: {
                    host: "104.236.174.88",
                    port: 3128
                  },
                  method: "GET",
                  url: "https://steechit-api.herokuapp.com/categories/"
                });

              case 2:
                res = _context4.sent;
                setCategoryState(res.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function getCategory() {
        return _ref5.apply(this, arguments);
      };
    }();

    getUserStore();
    getCountries();
    getStates();
    getCategory();
  }, [token, latitude, longitude]);

  var handleStoreName = function handleStoreName(e) {
    setStoreName(e.target.value);
  };

  var handleEmail = function handleEmail(e) {
    setEmail(e.target.value);
  };

  var handlePhone = function handlePhone(e) {
    setPhone(e.target.value);
  };

  var handleState = function handleState(e) {
    setStateU(e.target.value);
  };

  var handleAddress = function handleAddress(e) {
    setAddress(e.target.value);
  };

  var handleZipCode = function handleZipCode(e) {
    setZipCode(e.target.value);
  };

  var handleCity = function handleCity(e) {
    setCity(e.target.value);
  };

  var handleCategory = function handleCategory(e) {
    setCategory(e.target.value);
  }; //---- Upload image


  var handleStoreLogoUpload = /*#__PURE__*/function () {
    var _ref6 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(event) {
      var image, formData;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              image = event.target.files[0];
              setUploadingLogo(true);
              formData = new FormData();
              formData.append("image", image, image.name, image.size, image.type);
              _context5.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("https://steechit-image-manager.herokuapp.com/upload", formData).then(function (saved) {
                setMessage("Logo upload was successful.");
                setShow(true);
                setImageUrlLogo(saved.data.link);
              })["catch"](function (error) {
                setMessage("Something went wrong");
                setShow(true);
              })["finally"](function () {
                setUploadingLogo(false);
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleStoreLogoUpload(_x) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleStoreBannerUpload = /*#__PURE__*/function () {
    var _ref7 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(event) {
      var image, formData;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              image = event.target.files[0];
              setUploadingBanner(true);
              formData = new FormData();
              formData.append("image", image, image.name, image.size, image.type);
              _context6.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("https://steechit-image-manager.herokuapp.com/upload", formData).then(function (save) {
                setImageUrlBanner(save.data.link);
                setMessage("Store banner uploaded successfully");
                setShow(true);
              })["catch"](function () {
                setMessage("Something went wrong");
                setShow(true);
              })["finally"](function () {
                setUploadingBanner(false);
              });

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function handleStoreBannerUpload(_x2) {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref8 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(evt) {
      var res, msg;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              evt.preventDefault();
              setLoading(true);
              _context7.prev = 2;
              _context7.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "PUT",
                url: "https://steechit-api.herokuapp.com/stores/".concat(id),
                data: {
                  storeName: storeName,
                  phone: phone,
                  email: email,
                  storeLogo: {
                    thumb: "",
                    url: imageUrlLogo
                  },
                  storeBanner: {
                    thumb: "",
                    url: imageUrlBanner
                  },
                  country: country,
                  state: stateU,
                  city: city,
                  address: address,
                  zipCode: zipCode,
                  productCategories: category
                }
              });

            case 5:
              res = _context7.sent;
              setLoading(false);
              setMessage("Store created successfully");
              setShow(true);
              setLoading(false);
              console.log(res);
              _context7.next = 20;
              break;

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](2);
              msg = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(_context7.t0, "response.data.message") || _context7.t0.message;
              console.log(_context7.t0);
              setMessage(msg);
              setShow(true);
              setLoading(false);

            case 20:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[2, 13]]);
    }));

    return function handleSubmit(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    d: "flex",
    align: "center",
    justify: "center",
    m: {
      t: "1rem",
      b: "3rem"
    },
    pos: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: imageUrlBanner,
    w: "100%",
    h: "150px",
    rounded: "lg",
    pos: "absolute",
    top: "0",
    left: "0",
    style: {
      objectFit: "cover"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 15
    }
  }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    pos: "absolute",
    top: "0",
    left: "0",
    w: "100%",
    h: "150",
    rounded: "lg",
    bg: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "selectImageIcon",
    style: {
      bottom: 20,
      right: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 15
    }
  }, __jsx("input", {
    type: "file",
    ml: 10,
    className: "selectImage",
    onChange: handleStoreBannerUpload,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    m: {
      t: "3rem"
    },
    rounded: "circle",
    pos: "relative",
    bg: "gray200",
    w: "120px",
    h: "120px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    pos: "absolute",
    rounded: "circle",
    overflow: "hidden",
    w: "100%",
    h: "100%",
    style: {
      objectFit: "cover"
    },
    left: "0",
    right: "0",
    src: imageUrlLogo,
    shadow: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  }), uploadingLogo ? __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    rounded: "circle",
    className: "overlay_light",
    d: "flex",
    align: "center",
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 19
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "Loading3",
    size: "32px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 21
    }
  })) : null, __jsx("div", {
    className: "selectImageIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "file",
    className: "selectImage",
    onChange: handleStoreLogoUpload,
    src: imageUrlLogo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 19
    }
  }))))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 13
    }
  }, "Store name", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Store name",
    value: storeName,
    onChange: handleStoreName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 13
    }
  }, "Email address", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Email address",
    value: email,
    onChange: handleEmail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 13
    }
  }, "Phone number", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "070********",
    value: phone,
    onChange: handlePhone,
    type: "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 13
    }
  }, "State", __jsx("select", {
    "class": "select",
    onChange: handleState,
    value: stateU,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 15
    }
  }, __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 17
    }
  }, "Select state"), getState.map(function (item, key) {
    return __jsx("option", {
      key: item._id,
      value: item._id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 19
      }
    }, item.name);
  })))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 13
    }
  }, "City", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Lagos",
    type: "text",
    value: city,
    onChange: handleCity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }, "Zip Code", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "1001010",
    value: zipCode,
    onChange: handleZipCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 13
    }
  }, "Category", __jsx("select", {
    "class": "select",
    onChange: handleCategory,
    value: category,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 15
    }
  }, __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 17
    }
  }, "Select category"), categoryState.map(function (value) {
    return __jsx("option", {
      key: value._id,
      value: value._id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474,
        columnNumber: 19
      }
    }, value.categoryName);
  })))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: {
      xs: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 13
    }
  }, "Address", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Somewhere, somethere",
    value: address,
    onChange: handleAddress,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 15
    }
  })))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fontFamily: "primary",
    bg: "warning700",
    justify: "center",
    m: {
      t: "1rem"
    },
    prefix: loading ? __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "Loading3",
      size: "18px",
      color: "white",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 15
      }
    }) : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 9
    }
  }, loading ? "Saving" : "Save Changes")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Notification"], {
    bg: "warning700",
    isOpen: show,
    onClose: function onClose() {
      return setShow(false);
    },
    prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "CloseSolid",
      color: "white",
      size: "18px",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 11
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 7
    }
  }, message));
}

_s(StoreSettings, "OiW/X8PojpO/9+yVrICBAT7PDbI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = StoreSettings;

var _c;

$RefreshReg$(_c, "StoreSettings");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app-components/update_password_settings.js":
/*!****************************************************!*\
  !*** ./app-components/update_password_settings.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdatePasswordSettings; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/store */ "./services/store.js");



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\app-components\\update_password_settings.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






function UpdatePasswordSettings() {
  _s();

  // Getting auth state and user data for structuring the navbar
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.auth;
  });
  var token = _services_store__WEBPACK_IMPORTED_MODULE_7__["default"].getState().auth.token;
  var id = auth._id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      newPassword = _useState5[0],
      setNewPassword = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      confirmNewPassword = _useState6[0],
      setConfirmNewPassword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      passwordChecked = _useState7[0],
      setPasswordChecked = _useState7[1];

  var handlePassword = function handlePassword(e) {
    setPassword(e.target.value);
  };

  var handleNewPassword = function handleNewPassword(e) {
    setNewPassword(e.target.value);
  };

  var handleConfirmNewPassword = function handleConfirmNewPassword(e) {
    setConfirmNewPassword(e.target.value);
  };

  var handleCheckPassword = function handleCheckPassword() {
    if (newPassword !== confirmNewPassword) {
      setPasswordChecked(true);
    } else if (newPassword === confirmNewPassword) {
      setPasswordChecked(false);
    } else if (confirmNewPassword === "") {
      setPasswordChecked(false);
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
      var res, msg;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              evt.preventDefault();

              if (!(password === newPassword)) {
                _context.next = 22;
                break;
              }

              setLoading(true);
              _context.prev = 3;
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "PUT",
                url: "https://steechit-api.herokuapp.com/users/".concat(id),
                data: {
                  password: newPassword
                }
              });

            case 6:
              res = _context.sent;
              setLoading(false);
              setMessage("Updated successfully");
              setShow(true);
              console.log(res);
              _context.next = 20;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              msg = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(_context.t0, "response.data.message") || _context.t0.message;
              console.log(_context.t0);
              setMessage(msg);
              setShow(true);
              setLoading(false);

            case 20:
              _context.next = 24;
              break;

            case 22:
              setMessage("Password incorrect");
              setShow(true);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 13]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "Current password", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Current password",
    name: password,
    onChange: handlePassword,
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }), passwordChecked === true ? __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    textColor: "danger700",
    tag: "label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "Password not match") : null)), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "New password", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "New password",
    name: newPassword,
    onChange: handleNewPassword,
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    size: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Confirm password", __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Confirm password",
    name: confirmNewPassword,
    onChange: handleConfirmNewPassword,
    onKeyUp: handleCheckPassword,
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  })))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fontFamily: "primary",
    bg: "warning700",
    justify: "center",
    m: {
      t: "1rem"
    },
    prefix: loading ? __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "Loading3",
      size: "18px",
      color: "white",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    }) : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, loading ? "Saving" : "Save changes")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Notification"], {
    bg: "warning700",
    isOpen: show,
    onClose: function onClose() {
      return setShow(false);
    },
    prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "CloseSolid",
      color: "white",
      size: "18px",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, message));
}

_s(UpdatePasswordSettings, "NinIYxyoVtl3i1R3MJuHQXX4qhw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = UpdatePasswordSettings;

var _c;

$RefreshReg$(_c, "UpdatePasswordSettings");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/Axios/index.js":
false,

/***/ "./node_modules/Axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/Axios/lib/axios.js":
false,

/***/ "./node_modules/Axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/Axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/Axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/Axios/lib/core/Axios.js":
false,

/***/ "./node_modules/Axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/Axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/Axios/lib/core/createError.js":
false,

/***/ "./node_modules/Axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/Axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/Axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/Axios/lib/core/settle.js":
false,

/***/ "./node_modules/Axios/lib/core/transformData.js":
false,

/***/ "./node_modules/Axios/lib/defaults.js":
false,

/***/ "./node_modules/Axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/Axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/Axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/Axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/Axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/Axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/Axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/Axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/Axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/Axios/lib/utils.js":
false,

/***/ "./pages/profile/settings.js":
/*!***********************************!*\
  !*** ./pages/profile/settings.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_components_about_me_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app-components/about_me_settings */ "./app-components/about_me_settings.js");
/* harmony import */ var _app_components_contact_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app-components/contact_settings */ "./app-components/contact_settings.js");
/* harmony import */ var _app_components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app-components/layout */ "./app-components/layout.js");
/* harmony import */ var _app_components_profile_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app-components/profile_loader */ "./app-components/profile_loader.js");
/* harmony import */ var _app_components_profile_mobile_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../app-components/profile_mobile_menu */ "./app-components/profile_mobile_menu.js");
/* harmony import */ var _app_components_settings_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../app-components/settings_sidebar */ "./app-components/settings_sidebar.js");
/* harmony import */ var _app_components_store_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../app-components/store_settings */ "./app-components/store_settings.js");
/* harmony import */ var _app_components_update_password_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../app-components/update_password_settings */ "./app-components/update_password_settings.js");
/* harmony import */ var _services_profile_action__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/profile_action */ "./services/profile_action.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/store */ "./services/store.js");



var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\pages\\profile\\settings.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
















function Settings() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var title = router.query.q === undefined || router.query.q === "about-me" ? "About me" : router.query.q === "contact" ? "Contact" : router.query.q === "update-password" ? "Update Password" : router.query.q === "store" ? "My store" : null; // Getting auth state and user data for structuring the navbar

  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.auth;
  });
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var token = _services_store__WEBPACK_IMPORTED_MODULE_17__["default"].getState().auth.token;
  var id = auth._id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var getUser = /*#__PURE__*/function () {
      var _ref = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var msg;
        return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer ".concat(token)
                  },
                  proxy: {
                    host: "104.236.174.88",
                    port: 3128
                  },
                  method: "PUT",
                  url: "https://steechit-api.herokuapp.com/users/".concat(id)
                }).then(function (res) {
                  setLoading(false);
                });

              case 3:
                _context.next = 10;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                msg = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(_context.t0, "response.data.message") || _context.t0.message;
                setLoading(false);
                console.log(msg);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));

      return function getUser() {
        return _ref.apply(this, arguments);
      };
    }();

    dispatch(Object(_services_profile_action__WEBPACK_IMPORTED_MODULE_16__["profileRequest"])(token, id));
    getUser();
  }, [id, token, dispatch]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_app_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    w: "100%",
    d: {
      xs: "block",
      sm: "block",
      md: "flex",
      lg: "flex",
      xl: "flex"
    },
    align: "flex-start",
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    w: {
      xs: "100%",
      sm: "100%",
      md: "34%",
      lg: "34%",
      xl: "34%"
    },
    bg: "#fff",
    shadow: "3",
    rounded: "md",
    p: "20px",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_app_components_settings_sidebar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  })), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    bg: "#fff",
    shadow: "3",
    rounded: "md",
    w: {
      xs: "100%",
      sm: "100%",
      md: "63%",
      lg: "63%",
      xl: "63%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
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
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    tag: "header",
    textSize: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, title)), __jsx(atomize__WEBPACK_IMPORTED_MODULE_2__["Div"], {
    p: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, loading ? __jsx(_app_components_profile_loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }) : router.query.q === undefined || router.query.q === "about-me" ? __jsx("div", {
    id: "about-me",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(_app_components_about_me_settings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  })) : router.query.q === "contact" ? __jsx("div", {
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(_app_components_contact_settings__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  })) : router.query.q === "update-password" ? __jsx("div", {
    id: "update-password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(_app_components_update_password_settings__WEBPACK_IMPORTED_MODULE_15__["default"], {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  })) : router.query.q === "store" ? __jsx(_app_components_store_settings__WEBPACK_IMPORTED_MODULE_14__["default"], {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }) : null))), __jsx(_app_components_profile_mobile_menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })));
}

_s(Settings, "Q29RHPxJNFOgNpIRNndjTyhJR1o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"]];
});

_c = Settings;

var _c;

$RefreshReg$(_c, "Settings");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLWNvbXBvbmVudHMvYWJvdXRfbWVfc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC1jb21wb25lbnRzL2NvbnRhY3Rfc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC1jb21wb25lbnRzL3N0b3JlX3NldHRpbmdzLmpzIiwid2VicGFjazovL19OX0UvLi9hcHAtY29tcG9uZW50cy91cGRhdGVfcGFzc3dvcmRfc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiQWJvdXRNZVNldHRpbmdzIiwidXNlciIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidG9rZW4iLCJzdG9yZSIsImdldFN0YXRlIiwiaWQiLCJfaWQiLCJ1c2VTdGF0ZSIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiZGF0ZU9mQmlydGgiLCJzZXREYXRlT2ZCaXJ0aCIsImdlbmRlciIsInNldEdlbmRlciIsInN0YXRlVSIsInNldFN0YXRlVSIsImNvdW50cnkiLCJzZXRDb3VudHJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1cGxvYWRpbmciLCJzZXRVcGxvYWRpbmciLCJpbWFnZVVybCIsInVzZXJJbWciLCJzZXRVc2VySW1nIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzaG93Iiwic2V0U2hvdyIsInBob25lIiwic2V0UGhvbmUiLCJoYW5kbGVGaXJzdE5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVMYXN0TmFtZSIsImhhbmRsZUVtYWlsIiwiaGFuZGxlUGhvbmUiLCJoYW5kbGVEYXRlT2ZCaXJ0aCIsImhhbmRsZUdlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDb3VudHJ5IiwiaGFuZGxlU3RhdGUiLCJoYW5kbGVJbWFnZVVwbG9hZCIsImV2ZW50IiwiZmlsZXMiLCJpbWFnZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJuYW1lIiwic2l6ZSIsInR5cGUiLCJheGlvcyIsInBvc3QiLCJzYXZlIiwiSW1nX3VybCIsImRhdGEiLCJsaW5rIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm94eSIsImhvc3QiLCJwb3J0IiwibWV0aG9kIiwidXJsIiwiYXZhdGFyIiwicmVzIiwibXNnIiwiZ2V0IiwiaGFuZGxlU3VibWl0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJ0IiwiYiIsIm9iamVjdEZpdCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJyIiwiQ29udGFjdFNldHRpbmdzIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJ6aXBDb2RlIiwic2V0WmlwQ29kZSIsImhhbmRsZUFkZHJlc3MiLCJoYW5kbGVaaXBDb2RlIiwiY29udGFjdCIsIlN0b3JlU2V0dGluZ3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdG9yZU5hbWUiLCJzZXRTdG9yZU5hbWUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiY2F0ZWdvcnlTdGF0ZSIsInNldENhdGVnb3J5U3RhdGUiLCJzZXRHZXRTdGF0ZSIsImNpdHkiLCJzZXRDaXR5IiwidXBsb2FkaW5nQmFubmVyIiwic2V0VXBsb2FkaW5nQmFubmVyIiwidXBsb2FkaW5nTG9nbyIsInNldFVwbG9hZGluZ0xvZ28iLCJpbWFnZVVybExvZ28iLCJzZXRJbWFnZVVybExvZ28iLCJpbWFnZVVybEJhbm5lciIsInNldEltYWdlVXJsQmFubmVyIiwibGF0aXR1ZGUiLCJzZXRMYXRpdHVkZSIsImxvbmdpdHVkZSIsInNldExvbmdpdHVkZSIsInVzZUVmZmVjdCIsImdldFVzZXJTdG9yZSIsInBhcmFtcyIsInVuZGVmaW5lZCIsInB1c2giLCJzdG9yZUJhbm5lciIsInN0b3JlTG9nbyIsInByb2R1Y3RDYXRlZ29yaWVzIiwiZ2V0Q291bnRyaWVzIiwiZ2V0U3RhdGVzIiwiZ2V0Q2F0ZWdvcnkiLCJoYW5kbGVTdG9yZU5hbWUiLCJoYW5kbGVDaXR5IiwiaGFuZGxlQ2F0ZWdvcnkiLCJoYW5kbGVTdG9yZUxvZ29VcGxvYWQiLCJ0aGVuIiwic2F2ZWQiLCJlcnJvciIsImhhbmRsZVN0b3JlQmFubmVyVXBsb2FkIiwidGh1bWIiLCJib3R0b20iLCJyaWdodCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJjYXRlZ29yeU5hbWUiLCJVcGRhdGVQYXNzd29yZFNldHRpbmdzIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwic2V0TmV3UGFzc3dvcmQiLCJjb25maXJtTmV3UGFzc3dvcmQiLCJzZXRDb25maXJtTmV3UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrZWQiLCJzZXRQYXNzd29yZENoZWNrZWQiLCJoYW5kbGVQYXNzd29yZCIsImhhbmRsZU5ld1Bhc3N3b3JkIiwiaGFuZGxlQ29uZmlybU5ld1Bhc3N3b3JkIiwiaGFuZGxlQ2hlY2tQYXNzd29yZCIsIlNldHRpbmdzIiwidGl0bGUiLCJxdWVyeSIsInEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZ2V0VXNlciIsInByb2ZpbGVSZXF1ZXN0IiwiYm9yZGVyQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGVBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDaEQ7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsSUFBakI7QUFBQSxHQUFELENBQXhCO0FBQ0EsTUFBTUcsS0FBSyxHQUFHQyx1REFBSyxDQUFDQyxRQUFOLEdBQWlCTCxJQUFqQixDQUFzQkcsS0FBcEM7QUFDQSxNQUFNRyxFQUFFLEdBQUdOLElBQUksQ0FBQ08sR0FBaEI7O0FBSmdELGtCQU1kQyxzREFBUSxDQUFDVCxJQUFJLENBQUNVLFNBQU4sQ0FO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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQWlCLFFBQUksRUFBRW5LLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURFLEdBSUFrRyxNQUFNLENBQUNnRSxLQUFQLENBQWFDLENBQWIsS0FBbUIsaUJBQW5CLEdBQ0Y7QUFBSyxNQUFFLEVBQUMsaUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUZBQUQ7QUFBd0IsUUFBSSxFQUFFbkssSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREUsR0FJQWtHLE1BQU0sQ0FBQ2dFLEtBQVAsQ0FBYUMsQ0FBYixLQUFtQixPQUFuQixHQUNGLE1BQUMsdUVBQUQ7QUFBZSxRQUFJLEVBQUVuSyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREUsR0FFQSxJQWxCTixDQWpCRixDQWhCRixDQURGLEVBd0RFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhERixDQURGLENBREY7QUE4REQ7O0dBL0d1QmdLLFE7VUFDUDdELHFELEVBYUZqRyx1RCxFQUNBQSx1RCxFQUNJbUssdUQ7OztLQWhCS0wsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL3NldHRpbmdzLjg2ZmY5OGVmNGMwYTE3NzU0ZTUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb2wsXHJcbiAgRGl2LFxyXG4gIEljb24sXHJcbiAgSW1hZ2UsXHJcbiAgSW5wdXQsXHJcbiAgTGFiZWwsXHJcbiAgTm90aWZpY2F0aW9uLFxyXG4gIFJvdyxcclxufSBmcm9tIFwiYXRvbWl6ZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0TWVTZXR0aW5ncyh7IHVzZXIgfSkge1xyXG4gIC8vIEdldHRpbmcgYXV0aCBzdGF0ZSBhbmQgdXNlciBkYXRhIGZvciBzdHJ1Y3R1cmluZyB0aGUgbmF2YmFyXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgdG9rZW4gPSBzdG9yZS5nZXRTdGF0ZSgpLmF1dGgudG9rZW47XHJcbiAgY29uc3QgaWQgPSBhdXRoLl9pZDtcclxuXHJcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKHVzZXIuZmlyc3ROYW1lKTtcclxuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKHVzZXIubGFzdE5hbWUpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUodXNlci5lbWFpbCk7XHJcbiAgY29uc3QgW2RhdGVPZkJpcnRoLCBzZXREYXRlT2ZCaXJ0aF0gPSB1c2VTdGF0ZSh1c2VyLmRhdGVPZkJpcnRoKTtcclxuICBjb25zdCBbZ2VuZGVyLCBzZXRHZW5kZXJdID0gdXNlU3RhdGUodXNlci5nZW5kZXIpO1xyXG4gIGNvbnN0IFtzdGF0ZVUsIHNldFN0YXRlVV0gPSB1c2VTdGF0ZSh1c2VyLnN0YXRlKTtcclxuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSh1c2VyLmNvdW50cnkpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkaW5nLCBzZXRVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VySW1nLCBzZXRVc2VySW1nXSA9IHVzZVN0YXRlKHVzZXIuaW1hZ2VVcmwpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKHVzZXIucGhvbmUpO1xyXG5cclxuICBsZXQgaGFuZGxlRmlyc3ROYW1lID0gKGUpID0+IHtcclxuICAgIHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGhhbmRsZUxhc3ROYW1lID0gKGUpID0+IHtcclxuICAgIHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaGFuZGxlRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVQaG9uZSA9IChlKSA9PiB7XHJcbiAgICBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGhhbmRsZURhdGVPZkJpcnRoID0gKGUpID0+IHtcclxuICAgIHNldERhdGVPZkJpcnRoKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaGFuZGxlR2VuZGVyID0gKGUpID0+IHtcclxuICAgIHNldEdlbmRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhnZW5kZXIpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVDb3VudHJ5ID0gKGUpID0+IHtcclxuICAgIHNldENvdW50cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVTdGF0ZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZVUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlVXBsb2FkID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzWzBdICE9PSBcIlwiKSB7XHJcbiAgICAgIHNldFVwbG9hZGluZyh0cnVlKTtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnNvbGUubG9nKGltYWdlKTtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2UsIGltYWdlLm5hbWUsIGltYWdlLnNpemUsIGltYWdlLnR5cGUpO1xyXG4gICAgICBsZXQgc2F2ZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL3N0ZWVjaGl0LWltYWdlLW1hbmFnZXIuaGVyb2t1YXBwLmNvbS91cGxvYWRcIixcclxuICAgICAgICBmb3JtRGF0YVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBJbWdfdXJsID0gc2F2ZS5kYXRhLmxpbms7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgIHVybDogYGh0dHBzOi8vc3RlZWNoaXQtYXBpLmhlcm9rdWFwcC5jb20vdXNlcnMvJHtpZH1gLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhdmF0YXI6IHtcclxuICAgICAgICAgICAgICB1cmw6IEltZ191cmwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgICAgICBzZXRVc2VySW1nKEltZ191cmwpO1xyXG5cclxuICAgICAgICBzZXRNZXNzYWdlKFwiSW1hZ2UgVXBsb2FkIFN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZ2V0KGUsIFwicmVzcG9uc2UuZGF0YS5tZXNzYWdlXCIpIHx8IGUubWVzc2FnZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldE1lc3NhZ2UobXNnKTtcclxuICAgICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNZXNzYWdlKFwiUGxlYXNlIHNlbGVjdCBhbiBpbWFnZVwiKTtcclxuICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZ0KSA9PiB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIHVybDogYGh0dHBzOi8vc3RlZWNoaXQtYXBpLmhlcm9rdWFwcC5jb20vdXNlcnMvJHtpZH1gLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxyXG4gICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgZGF0ZU9mQmlydGg6IGRhdGVPZkJpcnRoLFxyXG4gICAgICAgICAgZ2VuZGVyOiBnZW5kZXIsXHJcbiAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgICAgICAgc3RhdGU6IHN0YXRlVSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgc2V0TWVzc2FnZShcIlVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zdCBtc2cgPSBnZXQoZSwgXCJyZXNwb25zZS5kYXRhLm1lc3NhZ2VcIikgfHwgZS5tZXNzYWdlO1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgIHNldE1lc3NhZ2UobXNnKTtcclxuICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHNpemU9XCIxMlwiPlxyXG4gICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBtPXt7IHQ6IFwiMXJlbVwiLCBiOiBcIjNyZW1cIiB9fVxyXG4gICAgICAgICAgICAgIHBvcz1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxEaXYgcG9zPVwicmVsYXRpdmVcIiB3PVwiMTIwcHhcIiBoPVwiMTIwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBwb3M9XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgaD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBsZWZ0PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17dXNlckltZ31cclxuICAgICAgICAgICAgICAgICAgc2hhZG93PVwiM1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3VwbG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgPERpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXlfbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiTG9hZGluZzNcIiBzaXplPVwiMzJweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdEltYWdlSWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0SW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgRmlyc3QgbmFtZVxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgc2l6ZT17e1xyXG4gICAgICAgICAgICAgIHhzOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgc206IFwiMTJcIixcclxuICAgICAgICAgICAgICBtZDogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIGxnOiBcIjZcIixcclxuICAgICAgICAgICAgICB4bDogXCI2XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIExhc3QgbmFtZVxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEb2VcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgc2l6ZT17e1xyXG4gICAgICAgICAgICAgIHhzOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgc206IFwiMTJcIixcclxuICAgICAgICAgICAgICBtZDogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIGxnOiBcIjZcIixcclxuICAgICAgICAgICAgICB4bDogXCI2XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIFBob25lIG51bWJlclxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwNzAqKioqKioqKlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGhvbmV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huZG9lQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgRGF0ZSBvZiBCaXJ0aFxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXRlIG9mIGJpcnRoXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRlT2ZCaXJ0aH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRlT2ZCaXJ0aH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNpemU9e3tcclxuICAgICAgICAgICAgICB4czogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIHNtOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcclxuICAgICAgICAgICAgICBsZzogXCI2XCIsXHJcbiAgICAgICAgICAgICAgeGw6IFwiNlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBHZW5kZXJcclxuICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZUdlbmRlcn0gdmFsdWU9e2dlbmRlcn0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjdCBnZW5kZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVwiPk1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ291bnRyeVxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOaWdlcmlhXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvdW50cnl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgU3RhdGVcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFnb3NcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlVX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGF0ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgZm9udEZhbWlseT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgYmc9XCJ3YXJuaW5nNzAwXCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgbT17eyB0OiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgcHJlZml4PXtcclxuICAgICAgICAgICAgbG9hZGluZyA/IChcclxuICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIkxvYWRpbmczXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgbT17eyByOiBcIjAuNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IFwiU2F2aW5nXCIgOiBcIlNhdmUgY2hhbmdlc1wifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxOb3RpZmljYXRpb25cclxuICAgICAgICBiZz1cIndhcm5pbmc3MDBcIlxyXG4gICAgICAgIGlzT3Blbj17c2hvd31cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93KGZhbHNlKX1cclxuICAgICAgICBwcmVmaXg9e1xyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgbmFtZT1cIkNsb3NlU29saWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICBtPXt7IHI6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgIDwvTm90aWZpY2F0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCdXR0b24sIENvbCwgSWNvbiwgSW5wdXQsIExhYmVsLCBOb3RpZmljYXRpb24sIFJvdyB9IGZyb20gXCJhdG9taXplXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdFNldHRpbmdzKHsgdXNlciB9KSB7XHJcbiAgLy8gR2V0dGluZyBhdXRoIHN0YXRlIGFuZCB1c2VyIGRhdGEgZm9yIHN0cnVjdHVyaW5nIHRoZSBuYXZiYXJcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCB0b2tlbiA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbjtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKHVzZXIuYWRkcmVzcyk7XHJcbiAgY29uc3QgW3ppcENvZGUsIHNldFppcENvZGVdID0gdXNlU3RhdGUodXNlci56aXBDb2RlKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKHVzZXIucGhvbmUpO1xyXG5cclxuICBsZXQgaGFuZGxlQWRkcmVzcyA9IChlKSA9PiB7XHJcbiAgICBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaGFuZGxlWmlwQ29kZSA9IChlKSA9PiB7XHJcbiAgICBzZXRaaXBDb2RlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaGFuZGxlUGhvbmUgPSAoZSkgPT4ge1xyXG4gICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldnQpID0+IHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9zdGVlY2hpdC1hcGkuaGVyb2t1YXBwLmNvbS91c2Vycy8ke2lkfWAsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgY29udGFjdDoge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICB6aXBDb2RlOiB6aXBDb2RlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgc2V0TWVzc2FnZShcIlVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zdCBtc2cgPSBnZXQoZSwgXCJyZXNwb25zZS5kYXRhLm1lc3NhZ2VcIikgfHwgZS5tZXNzYWdlO1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgIHNldE1lc3NhZ2UobXNnKTtcclxuICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHNpemU9XCIxMlwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjcyIE9zdHJpdGNoIFN0cmVldCwgRXZlcnl3aGVyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBZGRyZXNzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgc2l6ZT17e1xyXG4gICAgICAgICAgICAgIHhzOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgc206IFwiMTJcIixcclxuICAgICAgICAgICAgICBtZDogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIGxnOiBcIjZcIixcclxuICAgICAgICAgICAgICB4bDogXCI2XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIFppcCBDb2RlXHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAxMDAwMTFcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ppcENvZGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlWmlwQ29kZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNpemU9e3tcclxuICAgICAgICAgICAgICB4czogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIHNtOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcclxuICAgICAgICAgICAgICBsZzogXCI2XCIsXHJcbiAgICAgICAgICAgICAgeGw6IFwiNlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBQaG9uZSBudW1iZXJcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDcwKioqKioqKipcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBob25lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBmb250RmFtaWx5PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBiZz1cIndhcm5pbmc3MDBcIlxyXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICBtPXt7IHQ6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICBwcmVmaXg9e1xyXG4gICAgICAgICAgICBsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiTG9hZGluZzNcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBtPXt7IHI6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gXCJTYXZpbmdcIiA6IFwiU2F2ZSBjaGFuZ2VzXCJ9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPE5vdGlmaWNhdGlvblxyXG4gICAgICAgIGJnPVwid2FybmluZzcwMFwiXHJcbiAgICAgICAgaXNPcGVuPXtzaG93fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3coZmFsc2UpfVxyXG4gICAgICAgIHByZWZpeD17XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICBuYW1lPVwiQ2xvc2VTb2xpZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICBzaXplPVwiMThweFwiXHJcbiAgICAgICAgICAgIG09e3sgcjogXCIwLjVyZW1cIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgPC9Ob3RpZmljYXRpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbCxcclxuICBEaXYsXHJcbiAgSWNvbixcclxuICBJbWFnZSxcclxuICBJbnB1dCxcclxuICBMYWJlbCxcclxuICBOb3RpZmljYXRpb24sXHJcbiAgUm93LFxyXG59IGZyb20gXCJhdG9taXplXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b3JlU2V0dGluZ3MoeyB1c2VyIH0pIHtcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBhdXRoLnRva2VuO1xyXG4gIGNvbnN0IGlkID0gYXV0aC5faWQ7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbc3RvcmVOYW1lLCBzZXRTdG9yZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXRlZ29yeVN0YXRlLCBzZXRDYXRlZ29yeVN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RhdGVVLCBzZXRTdGF0ZVVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2dldFN0YXRlLCBzZXRHZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ppcENvZGUsIHNldFppcENvZGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRpbmdCYW5uZXIsIHNldFVwbG9hZGluZ0Jhbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZGluZ0xvZ28sIHNldFVwbG9hZGluZ0xvZ29dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVVybExvZ28sIHNldEltYWdlVXJsTG9nb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2VVcmxCYW5uZXIsIHNldEltYWdlVXJsQmFubmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsYXRpdHVkZSwgc2V0TGF0aXR1ZGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXJTdG9yZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGBodHRwczovL3N0ZWVjaGl0LWFwaS5oZXJva3VhcHAuY29tL3N0b3Jlcy9gLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHN0b3JlID0gcmVzLmRhdGFbMF07XHJcbiAgICAgIGlmIChzdG9yZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcHJvZmlsZS9zdG9yZS9zdGFydFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTdG9yZU5hbWUoc3RvcmUuc3RvcmVOYW1lKTtcclxuICAgICAgICBzZXRJbWFnZVVybEJhbm5lcihzdG9yZS5zdG9yZUJhbm5lci51cmwpO1xyXG4gICAgICAgIHNldEltYWdlVXJsTG9nbyhzdG9yZS5zdG9yZUxvZ28udXJsKTtcclxuICAgICAgICBzZXRFbWFpbChzdG9yZS5lbWFpbCk7XHJcbiAgICAgICAgc2V0UGhvbmUoc3RvcmUucGhvbmUpO1xyXG4gICAgICAgIHNldFN0YXRlVShzdG9yZS5zdGF0ZSk7XHJcbiAgICAgICAgc2V0Q2l0eShzdG9yZS5jaXR5KTtcclxuICAgICAgICBzZXRaaXBDb2RlKHN0b3JlLnppcENvZGUpO1xyXG4gICAgICAgIHNldENhdGVnb3J5KHN0b3JlLnByb2R1Y3RDYXRlZ29yaWVzWzBdKTtcclxuICAgICAgICBzZXRBZGRyZXNzKHN0b3JlLmFkZHJlc3MpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0b3JlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0Q291bnRyaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogYGh0dHBzOi8vc3RlZWNoaXQtYXBpLmhlcm9rdWFwcC5jb20vY291bnRyaWVzL2AsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDb3VudHJ5KHJlcy5kYXRhWzBdLl9pZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFN0YXRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGBodHRwczovL3N0ZWVjaGl0LWFwaS5oZXJva3VhcHAuY29tL3N0YXRlcy9gLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0R2V0U3RhdGUocmVzLmRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRDYXRlZ29yeSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGBodHRwczovL3N0ZWVjaGl0LWFwaS5oZXJva3VhcHAuY29tL2NhdGVnb3JpZXMvYCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldENhdGVnb3J5U3RhdGUocmVzLmRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRVc2VyU3RvcmUoKTtcclxuICAgIGdldENvdW50cmllcygpO1xyXG4gICAgZ2V0U3RhdGVzKCk7XHJcbiAgICBnZXRDYXRlZ29yeSgpO1xyXG4gIH0sIFt0b2tlbiwgbGF0aXR1ZGUsIGxvbmdpdHVkZV0pO1xyXG5cclxuICBsZXQgaGFuZGxlU3RvcmVOYW1lID0gKGUpID0+IHtcclxuICAgIHNldFN0b3JlTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGhhbmRsZUVtYWlsID0gKGUpID0+IHtcclxuICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaGFuZGxlUGhvbmUgPSAoZSkgPT4ge1xyXG4gICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVTdGF0ZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZVUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVBZGRyZXNzID0gKGUpID0+IHtcclxuICAgIHNldEFkZHJlc3MoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVaaXBDb2RlID0gKGUpID0+IHtcclxuICAgIHNldFppcENvZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVDaXR5ID0gKGUpID0+IHtcclxuICAgIHNldENpdHkoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVDYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICBzZXRDYXRlZ29yeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8tLS0tIFVwbG9hZCBpbWFnZVxyXG5cclxuICBjb25zdCBoYW5kbGVTdG9yZUxvZ29VcGxvYWQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0VXBsb2FkaW5nTG9nbyh0cnVlKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZSwgaW1hZ2UubmFtZSwgaW1hZ2Uuc2l6ZSwgaW1hZ2UudHlwZSk7XHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgICAucG9zdChcImh0dHBzOi8vc3RlZWNoaXQtaW1hZ2UtbWFuYWdlci5oZXJva3VhcHAuY29tL3VwbG9hZFwiLCBmb3JtRGF0YSlcclxuICAgICAgLnRoZW4oKHNhdmVkKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIkxvZ28gdXBsb2FkIHdhcyBzdWNjZXNzZnVsLlwiKTtcclxuICAgICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICAgIHNldEltYWdlVXJsTG9nbyhzYXZlZC5kYXRhLmxpbmspO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgIHNldFNob3codHJ1ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBzZXRVcGxvYWRpbmdMb2dvKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RvcmVCYW5uZXJVcGxvYWQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0VXBsb2FkaW5nQmFubmVyKHRydWUpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlLCBpbWFnZS5uYW1lLCBpbWFnZS5zaXplLCBpbWFnZS50eXBlKTtcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiaHR0cHM6Ly9zdGVlY2hpdC1pbWFnZS1tYW5hZ2VyLmhlcm9rdWFwcC5jb20vdXBsb2FkXCIsIGZvcm1EYXRhKVxyXG4gICAgICAudGhlbigoc2F2ZSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlVXJsQmFubmVyKHNhdmUuZGF0YS5saW5rKTtcclxuICAgICAgICBzZXRNZXNzYWdlKFwiU3RvcmUgYmFubmVyIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgc2V0VXBsb2FkaW5nQmFubmVyKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgaG9zdDogXCIxMDQuMjM2LjE3NC44OFwiLFxyXG4gICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICB1cmw6IGBodHRwczovL3N0ZWVjaGl0LWFwaS5oZXJva3VhcHAuY29tL3N0b3Jlcy8ke2lkfWAsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc3RvcmVOYW1lOiBzdG9yZU5hbWUsXHJcbiAgICAgICAgICBwaG9uZTogcGhvbmUsXHJcbiAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICBzdG9yZUxvZ286IHtcclxuICAgICAgICAgICAgdGh1bWI6IFwiXCIsXHJcbiAgICAgICAgICAgIHVybDogaW1hZ2VVcmxMb2dvLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN0b3JlQmFubmVyOiB7XHJcbiAgICAgICAgICAgIHRodW1iOiBcIlwiLFxyXG4gICAgICAgICAgICB1cmw6IGltYWdlVXJsQmFubmVyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvdW50cnk6IGNvdW50cnksXHJcbiAgICAgICAgICBzdGF0ZTogc3RhdGVVLFxyXG4gICAgICAgICAgY2l0eTogY2l0eSxcclxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgICAgICB6aXBDb2RlOiB6aXBDb2RlLFxyXG4gICAgICAgICAgcHJvZHVjdENhdGVnb3JpZXM6IGNhdGVnb3J5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJTdG9yZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnN0IG1zZyA9IGdldChlLCBcInJlc3BvbnNlLmRhdGEubWVzc2FnZVwiKSB8fCBlLm1lc3NhZ2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBzZXRNZXNzYWdlKG1zZyk7XHJcbiAgICAgIHNldFNob3codHJ1ZSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBzaXplPVwiMTJcIj5cclxuICAgICAgICAgICAgPERpdlxyXG4gICAgICAgICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgbT17eyB0OiBcIjFyZW1cIiwgYjogXCIzcmVtXCIgfX1cclxuICAgICAgICAgICAgICBwb3M9XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmxCYW5uZXJ9XHJcbiAgICAgICAgICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBoPVwiMTUwcHhcIlxyXG4gICAgICAgICAgICAgICAgcm91bmRlZD1cImxnXCJcclxuICAgICAgICAgICAgICAgIHBvcz1cImFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgIHRvcD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgbGVmdD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgICBwb3M9XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICB0b3A9XCIwXCJcclxuICAgICAgICAgICAgICAgIGxlZnQ9XCIwXCJcclxuICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGg9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgcm91bmRlZD1cImxnXCJcclxuICAgICAgICAgICAgICAgIGJnPVwicmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdEltYWdlSWNvblwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3R0b206IDIwLCByaWdodDogMTAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBtbD17MTB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0b3JlQmFubmVyVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgICBtPXt7IHQ6IFwiM3JlbVwiIH19XHJcbiAgICAgICAgICAgICAgICByb3VuZGVkPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgIHBvcz1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgIGJnPVwiZ3JheTIwMFwiXHJcbiAgICAgICAgICAgICAgICB3PVwiMTIwcHhcIlxyXG4gICAgICAgICAgICAgICAgaD1cIjEyMHB4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgICAgICByb3VuZGVkPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgbGVmdD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICByaWdodD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsTG9nb31cclxuICAgICAgICAgICAgICAgICAgc2hhZG93PVwiM1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3VwbG9hZGluZ0xvZ28gPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxEaXZcclxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGF5X2xpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cIkxvYWRpbmczXCIgc2l6ZT1cIjMycHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RJbWFnZUljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RvcmVMb2dvVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmxMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNpemU9e3tcclxuICAgICAgICAgICAgICB4czogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIHNtOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcclxuICAgICAgICAgICAgICBsZzogXCI2XCIsXHJcbiAgICAgICAgICAgICAgeGw6IFwiNlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBTdG9yZSBuYW1lXHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0b3JlIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0b3JlTmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdG9yZU5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbWFpbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNpemU9e3tcclxuICAgICAgICAgICAgICB4czogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIHNtOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcclxuICAgICAgICAgICAgICBsZzogXCI2XCIsXHJcbiAgICAgICAgICAgICAgeGw6IFwiNlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBQaG9uZSBudW1iZXJcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDcwKioqKioqKipcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBob25lfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgU3RhdGVcclxuICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZVN0YXRlfSB2YWx1ZT17c3RhdGVVfT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+U2VsZWN0IHN0YXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7Z2V0U3RhdGUubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uX2lkfSB2YWx1ZT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgc2l6ZT17e1xyXG4gICAgICAgICAgICAgIHhzOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgc206IFwiMTJcIixcclxuICAgICAgICAgICAgICBtZDogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIGxnOiBcIjZcIixcclxuICAgICAgICAgICAgICB4bDogXCI2XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIENpdHlcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFnb3NcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NpdHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2l0eX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNpemU9e3tcclxuICAgICAgICAgICAgICB4czogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIHNtOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcclxuICAgICAgICAgICAgICBsZzogXCI2XCIsXHJcbiAgICAgICAgICAgICAgeGw6IFwiNlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBaaXAgQ29kZVxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMDAxMDEwXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt6aXBDb2RlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVppcENvZGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZUNhdGVnb3J5fSB2YWx1ZT17Y2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY3QgY2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeVN0YXRlLm1hcCgodmFsdWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3ZhbHVlLl9pZH0gdmFsdWU9e3ZhbHVlLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmNhdGVnb3J5TmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgQWRkcmVzc1xyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTb21ld2hlcmUsIHNvbWV0aGVyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBZGRyZXNzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBmb250RmFtaWx5PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBiZz1cIndhcm5pbmc3MDBcIlxyXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICBtPXt7IHQ6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICBwcmVmaXg9e1xyXG4gICAgICAgICAgICBsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiTG9hZGluZzNcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBtPXt7IHI6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gXCJTYXZpbmdcIiA6IFwiU2F2ZSBDaGFuZ2VzXCJ9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPE5vdGlmaWNhdGlvblxyXG4gICAgICAgIGJnPVwid2FybmluZzcwMFwiXHJcbiAgICAgICAgaXNPcGVuPXtzaG93fVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3coZmFsc2UpfVxyXG4gICAgICAgIHByZWZpeD17XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICBuYW1lPVwiQ2xvc2VTb2xpZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICBzaXplPVwiMThweFwiXHJcbiAgICAgICAgICAgIG09e3sgcjogXCIwLjVyZW1cIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgPC9Ob3RpZmljYXRpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbCxcclxuICBJY29uLFxyXG4gIElucHV0LFxyXG4gIExhYmVsLFxyXG4gIE5vdGlmaWNhdGlvbixcclxuICBSb3csXHJcbiAgVGV4dCxcclxufSBmcm9tIFwiYXRvbWl6ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc2VydmljZXMvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVBhc3N3b3JkU2V0dGluZ3MoKSB7XHJcbiAgLy8gR2V0dGluZyBhdXRoIHN0YXRlIGFuZCB1c2VyIGRhdGEgZm9yIHN0cnVjdHVyaW5nIHRoZSBuYXZiYXJcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCB0b2tlbiA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbjtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29uZmlybU5ld1Bhc3N3b3JkLCBzZXRDb25maXJtTmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2tlZCwgc2V0UGFzc3dvcmRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgbGV0IGhhbmRsZVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaGFuZGxlTmV3UGFzc3dvcmQgPSAoZSkgPT4ge1xyXG4gICAgc2V0TmV3UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVDb25maXJtTmV3UGFzc3dvcmQgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29uZmlybU5ld1Bhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaGFuZGxlQ2hlY2tQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybU5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2tlZCh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAobmV3UGFzc3dvcmQgPT09IGNvbmZpcm1OZXdQYXNzd29yZCkge1xyXG4gICAgICBzZXRQYXNzd29yZENoZWNrZWQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmIChjb25maXJtTmV3UGFzc3dvcmQgPT09IFwiXCIpIHtcclxuICAgICAgc2V0UGFzc3dvcmRDaGVja2VkKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZ0KSA9PiB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwYXNzd29yZCA9PT0gbmV3UGFzc3dvcmQpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgdXJsOiBgaHR0cHM6Ly9zdGVlY2hpdC1hcGkuaGVyb2t1YXBwLmNvbS91c2Vycy8ke2lkfWAsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHNldE1lc3NhZ2UoXCJVcGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zdCBtc2cgPSBnZXQoZSwgXCJyZXNwb25zZS5kYXRhLm1lc3NhZ2VcIikgfHwgZS5tZXNzYWdlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICBzZXRNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVzc2FnZShcIlBhc3N3b3JkIGluY29ycmVjdFwiKTtcclxuICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc2l6ZT1cIjEyXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIEN1cnJlbnQgcGFzc3dvcmRcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3VycmVudCBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cGFzc3dvcmRDaGVja2VkID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dENvbG9yPVwiZGFuZ2VyNzAwXCIgdGFnPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgUGFzc3dvcmQgbm90IG1hdGNoXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc2l6ZT1cIjEyXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIE5ldyBwYXNzd29yZFxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT17bmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc2l6ZT1cIjEyXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIENvbmZpcm0gcGFzc3dvcmRcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtjb25maXJtTmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29uZmlybU5ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25LZXlVcD17aGFuZGxlQ2hlY2tQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGZvbnRGYW1pbHk9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGJnPVwid2FybmluZzcwMFwiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgIG09e3sgdDogXCIxcmVtXCIgfX1cclxuICAgICAgICAgIHByZWZpeD17XHJcbiAgICAgICAgICAgIGxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJMb2FkaW5nM1wiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMThweFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgIG09e3sgcjogXCIwLjVyZW1cIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyBcIlNhdmluZ1wiIDogXCJTYXZlIGNoYW5nZXNcIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8Tm90aWZpY2F0aW9uXHJcbiAgICAgICAgYmc9XCJ3YXJuaW5nNzAwXCJcclxuICAgICAgICBpc09wZW49e3Nob3d9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvdyhmYWxzZSl9XHJcbiAgICAgICAgcHJlZml4PXtcclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIG5hbWU9XCJDbG9zZVNvbGlkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgbT17eyByOiBcIjAuNXJlbVwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHttZXNzYWdlfVxyXG4gICAgICA8L05vdGlmaWNhdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGl2LCBUZXh0IH0gZnJvbSBcImF0b21pemVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFib3V0TWVTZXR0aW5ncyBmcm9tIFwiLi4vLi4vYXBwLWNvbXBvbmVudHMvYWJvdXRfbWVfc2V0dGluZ3NcIjtcclxuaW1wb3J0IENvbnRhY3RTZXR0aW5ncyBmcm9tIFwiLi4vLi4vYXBwLWNvbXBvbmVudHMvY29udGFjdF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9hcHAtY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IFByb2ZpbGVMb2FkZXIgZnJvbSBcIi4uLy4uL2FwcC1jb21wb25lbnRzL3Byb2ZpbGVfbG9hZGVyXCI7XHJcbmltcG9ydCBQcm9maWxlTW9iaWxlTWVudSBmcm9tIFwiLi4vLi4vYXBwLWNvbXBvbmVudHMvcHJvZmlsZV9tb2JpbGVfbWVudVwiO1xyXG5pbXBvcnQgU2V0dGluZ1NpZGViYXIgZnJvbSBcIi4uLy4uL2FwcC1jb21wb25lbnRzL3NldHRpbmdzX3NpZGViYXJcIjtcclxuaW1wb3J0IFN0b3JlU2V0dGluZ3MgZnJvbSBcIi4uLy4uL2FwcC1jb21wb25lbnRzL3N0b3JlX3NldHRpbmdzXCI7XHJcbmltcG9ydCBVcGRhdGVQYXNzd29yZFNldHRpbmdzIGZyb20gXCIuLi8uLi9hcHAtY29tcG9uZW50cy91cGRhdGVfcGFzc3dvcmRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgcHJvZmlsZVJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJvZmlsZV9hY3Rpb25cIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdGl0bGUgPVxyXG4gICAgcm91dGVyLnF1ZXJ5LnEgPT09IHVuZGVmaW5lZCB8fCByb3V0ZXIucXVlcnkucSA9PT0gXCJhYm91dC1tZVwiXHJcbiAgICAgID8gXCJBYm91dCBtZVwiXHJcbiAgICAgIDogcm91dGVyLnF1ZXJ5LnEgPT09IFwiY29udGFjdFwiXHJcbiAgICAgID8gXCJDb250YWN0XCJcclxuICAgICAgOiByb3V0ZXIucXVlcnkucSA9PT0gXCJ1cGRhdGUtcGFzc3dvcmRcIlxyXG4gICAgICA/IFwiVXBkYXRlIFBhc3N3b3JkXCJcclxuICAgICAgOiByb3V0ZXIucXVlcnkucSA9PT0gXCJzdG9yZVwiXHJcbiAgICAgID8gXCJNeSBzdG9yZVwiXHJcbiAgICAgIDogbnVsbDtcclxuXHJcbiAgLy8gR2V0dGluZyBhdXRoIHN0YXRlIGFuZCB1c2VyIGRhdGEgZm9yIHN0cnVjdHVyaW5nIHRoZSBuYXZiYXJcclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBzdG9yZS5nZXRTdGF0ZSgpLmF1dGgudG9rZW47XHJcbiAgY29uc3QgaWQgPSBhdXRoLl9pZDtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICB1cmw6IGBodHRwczovL3N0ZWVjaGl0LWFwaS5oZXJva3VhcHAuY29tL3VzZXJzLyR7aWR9YCxcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZ2V0KGUsIFwicmVzcG9uc2UuZGF0YS5tZXNzYWdlXCIpIHx8IGUubWVzc2FnZTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2gocHJvZmlsZVJlcXVlc3QodG9rZW4sIGlkKSk7XHJcbiAgICBnZXRVc2VyKCk7XHJcbiAgfSwgW2lkLCB0b2tlbiwgZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPERpdlxyXG4gICAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgZD17eyB4czogXCJibG9ja1wiLCBzbTogXCJibG9ja1wiLCBtZDogXCJmbGV4XCIsIGxnOiBcImZsZXhcIiwgeGw6IFwiZmxleFwiIH19XHJcbiAgICAgICAgICBhbGlnbj1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEaXZcclxuICAgICAgICAgICAgdz17eyB4czogXCIxMDAlXCIsIHNtOiBcIjEwMCVcIiwgbWQ6IFwiMzQlXCIsIGxnOiBcIjM0JVwiLCB4bDogXCIzNCVcIiB9fVxyXG4gICAgICAgICAgICBiZz1cIiNmZmZcIlxyXG4gICAgICAgICAgICBzaGFkb3c9XCIzXCJcclxuICAgICAgICAgICAgcm91bmRlZD1cIm1kXCJcclxuICAgICAgICAgICAgcD1cIjIwcHhcIlxyXG4gICAgICAgICAgICBtPXt7IGI6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nU2lkZWJhciAvPlxyXG4gICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgIGJnPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgIHNoYWRvdz1cIjNcIlxyXG4gICAgICAgICAgICByb3VuZGVkPVwibWRcIlxyXG4gICAgICAgICAgICB3PXt7IHhzOiBcIjEwMCVcIiwgc206IFwiMTAwJVwiLCBtZDogXCI2MyVcIiwgbGc6IFwiNjMlXCIsIHhsOiBcIjYzJVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxEaXZcclxuICAgICAgICAgICAgICBwPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjY2NjXCIgfX1cclxuICAgICAgICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRhZz1cImhlYWRlclwiIHRleHRTaXplPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICA8RGl2IHA9XCIyMHB4XCI+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZUxvYWRlciAvPlxyXG4gICAgICAgICAgICAgICkgOiByb3V0ZXIucXVlcnkucSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucXVlcnkucSA9PT0gXCJhYm91dC1tZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFib3V0LW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBYm91dE1lU2V0dGluZ3MgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiByb3V0ZXIucXVlcnkucSA9PT0gXCJjb250YWN0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q29udGFjdFNldHRpbmdzIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogcm91dGVyLnF1ZXJ5LnEgPT09IFwidXBkYXRlLXBhc3N3b3JkXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidXBkYXRlLXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxVcGRhdGVQYXNzd29yZFNldHRpbmdzIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogcm91dGVyLnF1ZXJ5LnEgPT09IFwic3RvcmVcIiA/IChcclxuICAgICAgICAgICAgICAgIDxTdG9yZVNldHRpbmdzIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgPFByb2ZpbGVNb2JpbGVNZW51IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9