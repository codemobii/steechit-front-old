webpackHotUpdate_N_E("pages/profile/store/sell",{

/***/ "./app-components/sell_product_form.js":
/*!*********************************************!*\
  !*** ./app-components/sell_product_form.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SellProductForm; });
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! atomize */ "./node_modules/atomize/index.js");
/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var _jsxFileName = "C:\\Users\\ijele\\Documents\\Projects\\steechit-front\\app-components\\sell_product_form.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






function SellProductForm(_ref) {
  _s();

  var _this = this,
      _jsx2;

  var user = _ref.user;
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.auth;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      productName = _useState[0],
      setProductName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      productDescription = _useState2[0],
      setProductDescription = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      productCategory = _useState3[0],
      setProductCategory = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      categoryState = _useState4[0],
      setCategoryState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      measurement = _useState5[0],
      setMeasurement = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      price = _useState6[0],
      setPrice = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      percentageDiscount = _useState7[0],
      setPercentageDiscount = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      imageUrlLogo = _useState8[0],
      setImageUrlLogo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      storeID = _useState9[0],
      setStoreID = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      checkSubmit = _useState11[0],
      setCheckSubmit = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      uploading = _useState12[0],
      setUploading = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      show = _useState13[0],
      setShow = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      message = _useState14[0],
      setMessage = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      images = _useState15[0],
      setImages = _useState15[1];

  var token = auth.token;
  var id = auth._id;
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    getCategory();
    getStore();
  }, []);

  var handleProductName = function handleProductName(e) {
    setProductName(e.target.value);
  };

  var handleProductDescription = function handleProductDescription(e) {
    setProductDescription(e.target.value);
  };

  var handleProductCategory = function handleProductCategory(e) {
    setProductCategory(e.target.value);
  };

  var handleMeasurement = function handleMeasurement(e) {
    setMeasurement(e.target.value);
  };

  var handlePrice = function handlePrice(e) {
    setPrice(e.target.value);
  };

  var handlePercentageDiscount = function handlePercentageDiscount(e) {
    setPercentageDiscount(e.target.value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(evt) {
      var data, res, msg;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              evt.preventDefault();
              setLoading(true);
              data = {
                productName: productName,
                productDescription: productDescription,
                productCategory: productCategory,
                store: storeID,
                user: id,
                availableOptions: {
                  measurement: null,
                  price: price,
                  percentageDiscount: percentageDiscount
                },
                productPictures: images,
                feedback: {
                  user: id
                }
              };
              console.log(data);
              _context.prev = 4;
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "POST",
                url: "".concat("https://api.steechit.com/", "products/"),
                data: data
              });

            case 7:
              res = _context.sent;
              setLoading(false);
              setCheckSubmit(true);
              setMessage("Product uploaded successfully");
              setShow(true);
              setProductName("");
              setPrice("");
              setImages([]);
              setProductCategory("");
              setPercentageDiscount("");
              setProductDescription("");
              console.log(res);
              _context.next = 27;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](4);
              msg = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(_context.t0, "response.data.message") || _context.t0.message;
              console.log(msg);
              setMessage(msg);
              setShow(true);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 21]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleProductImageUpload = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event) {
      var image, formData, save, get_images;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setUploading(true);

              if (!(images.length === 4)) {
                _context2.next = 7;
                break;
              }

              setMessage("Your can only add four (4) images for product");
              setShow(true);
              setUploading(false);
              _context2.next = 21;
              break;

            case 7:
              image = event.target.files[0];
              formData = new FormData();
              formData.append("image", image, image.name, image.size, image.type);
              _context2.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("https://steechit-image-manager.herokuapp.com/upload", formData);

            case 12:
              save = _context2.sent;
              setImageUrlLogo(save.data.link);
              get_images = images;
              get_images.push({
                url: save.data.link
              });
              setImages(get_images);
              console.log(images);
              setMessage("Image uploaded successfully");
              setShow(true);
              setUploading(false);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleProductImageUpload(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getCategory = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var res;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  Authorization: "Bearer ".concat(token)
                },
                proxy: {
                  host: "104.236.174.88",
                  port: 3128
                },
                method: "GET",
                url: "".concat("https://api.steechit.com/", "categories/")
              });

            case 2:
              res = _context3.sent;
              setCategoryState(res.data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getCategory() {
      return _ref4.apply(this, arguments);
    };
  }();

  var getStore = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var res;
      return C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
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
              });

            case 2:
              res = _context4.sent;
              console.log(res.data);
              setStoreID(res.data[0]._id);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getStore() {
      return _ref5.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    size: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, "Product Image(s)", __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], {
    d: "flex",
    style: {
      flexFlow: "wrap"
    },
    align: "center",
    m: {
      t: "0.5rem"
    },
    justify: "flex-start",
    pos: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }, images.map(function (i) {
    var _jsx;

    return __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], (_jsx = {
      key: i,
      pos: "relative",
      w: "120px",
      h: "120px",
      border: "1px solid",
      borderColor: "gray300",
      rounded: "md",
      d: "flex",
      align: "center"
    }, Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "pos", "relative"), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "overflow", "hidden"), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "justify", "center"), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "m", {
      r: "1rem",
      b: "1rem"
    }), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 19
    }), _jsx), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      pos: "absolute",
      top: "0",
      left: "0",
      w: "100%",
      h: "100%",
      src: i.url,
      style: {
        objectFit: "cover"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }
    }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      zIndex: "10",
      name: "CloseSolid",
      size: "30px",
      color: "gray600",
      onClick: function onClick() {
        var let_imgs = images;
        var a = let_imgs.indexOf(i, 0);
        var new_imgs = let_imgs.splice(0, a);
        setImages(new_imgs);
        console.log(new_imgs);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }));
  }), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Div"], (_jsx2 = {
    pos: "relative",
    w: "120px",
    h: "120px",
    border: "1px solid",
    borderColor: "gray300",
    rounded: "md",
    d: "flex",
    align: "center",
    justify: "center"
  }, Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "pos", "relative"), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "overflow", "hidden"), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "m", {
    t: "-15px"
  }), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), Object(C_Users_ijele_Documents_Projects_steechit_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 246,
    columnNumber: 17
  }), _jsx2), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: uploading ? "Loading3" : "Add",
    size: "50px",
    color: "gray600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 19
    }
  }), __jsx("input", {
    type: "file",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      cursor: "pointer",
      opacity: "0"
    },
    onChange: handleProductImageUpload,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 19
    }
  }))))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
      lineNumber: 281,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, "Product Name", __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Product Name",
    value: productName,
    onChange: handleProductName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
      lineNumber: 299,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  }, "Product Category", __jsx("select", {
    className: "select",
    onChange: handleProductCategory,
    value: productCategory,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 15
    }
  }, __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 17
    }
  }, "Select state"), categoryState.map(function (value) {
    return __jsx("option", {
      key: value,
      value: value._id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 19
      }
    }, value.categoryName);
  })))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
      lineNumber: 324,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 13
    }
  }, "Product Price", __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Price",
    value: price,
    onChange: handlePrice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
      lineNumber: 338,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 13
    }
  }, "Discount for product in percent", __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Discount",
    value: percentageDiscount,
    onChange: handlePercentageDiscount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 15
    }
  }))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    size: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 11
    }
  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    d: "block",
    m: {
      b: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, "Product Description", __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    placeholder: "Product Description",
    value: productDescription,
    onChange: handleProductDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 15
    }
  })))), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fontFamily: "primary",
    bg: "warning700",
    justify: "center",
    m: {
      t: "1rem"
    },
    prefix: loading ? __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "Loading3",
      size: "18px",
      color: "white",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 15
      }
    }) : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 9
    }
  }, loading ? "Uploading" : "Add product")), __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Notification"], {
    bg: "warning700",
    isOpen: show,
    onClose: function onClose() {
      return setShow(false);
    },
    prefix: __jsx(atomize__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "CloseSolid",
      color: "white",
      size: "18px",
      m: {
        r: "0.5rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 11
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 7
    }
  }, message));
}

_s(SellProductForm, "wuycL8IFe8H6O4dXYqOYrE8EsHI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c = SellProductForm;

var _c;

$RefreshReg$(_c, "SellProductForm");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLWNvbXBvbmVudHMvc2VsbF9wcm9kdWN0X2Zvcm0uanMiXSwibmFtZXMiOlsiU2VsbFByb2R1Y3RGb3JtIiwidXNlciIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlU3RhdGUiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwic2V0UHJvZHVjdERlc2NyaXB0aW9uIiwicHJvZHVjdENhdGVnb3J5Iiwic2V0UHJvZHVjdENhdGVnb3J5IiwiY2F0ZWdvcnlTdGF0ZSIsInNldENhdGVnb3J5U3RhdGUiLCJtZWFzdXJlbWVudCIsInNldE1lYXN1cmVtZW50IiwicHJpY2UiLCJzZXRQcmljZSIsInBlcmNlbnRhZ2VEaXNjb3VudCIsInNldFBlcmNlbnRhZ2VEaXNjb3VudCIsImltYWdlVXJsTG9nbyIsInNldEltYWdlVXJsTG9nbyIsInN0b3JlSUQiLCJzZXRTdG9yZUlEIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjaGVja1N1Ym1pdCIsInNldENoZWNrU3VibWl0IiwidXBsb2FkaW5nIiwic2V0VXBsb2FkaW5nIiwic2hvdyIsInNldFNob3ciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImltYWdlcyIsInNldEltYWdlcyIsInRva2VuIiwiaWQiLCJfaWQiLCJ1c2VFZmZlY3QiLCJnZXRDYXRlZ29yeSIsImdldFN0b3JlIiwiaGFuZGxlUHJvZHVjdE5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQcm9kdWN0RGVzY3JpcHRpb24iLCJoYW5kbGVQcm9kdWN0Q2F0ZWdvcnkiLCJoYW5kbGVNZWFzdXJlbWVudCIsImhhbmRsZVByaWNlIiwiaGFuZGxlUGVyY2VudGFnZURpc2NvdW50IiwiaGFuZGxlU3VibWl0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwic3RvcmUiLCJhdmFpbGFibGVPcHRpb25zIiwicHJvZHVjdFBpY3R1cmVzIiwiZmVlZGJhY2siLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb3h5IiwiaG9zdCIsInBvcnQiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwicmVzIiwibXNnIiwiZ2V0IiwiaGFuZGxlUHJvZHVjdEltYWdlVXBsb2FkIiwiZXZlbnQiLCJsZW5ndGgiLCJpbWFnZSIsImZpbGVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm5hbWUiLCJzaXplIiwidHlwZSIsInBvc3QiLCJzYXZlIiwibGluayIsImdldF9pbWFnZXMiLCJwdXNoIiwicGFyYW1zIiwiYiIsImZsZXhGbG93IiwidCIsIm1hcCIsImkiLCJyIiwib2JqZWN0Rml0IiwibGV0X2ltZ3MiLCJhIiwiaW5kZXhPZiIsIm5ld19pbWdzIiwic3BsaWNlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiY3Vyc29yIiwib3BhY2l0eSIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJjYXRlZ29yeU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsZUFBVCxPQUFtQztBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2hELE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixJQUFqQjtBQUFBLEdBQUQsQ0FBeEI7O0FBRGdELGtCQUVWRyxzREFBUSxDQUFDLEVBQUQsQ0FGRTtBQUFBLE1BRXpDQyxXQUZ5QztBQUFBLE1BRTVCQyxjQUY0Qjs7QUFBQSxtQkFHSUYsc0RBQVEsQ0FBQyxFQUFELENBSFo7QUFBQSxNQUd6Q0csa0JBSHlDO0FBQUEsTUFHckJDLHFCQUhxQjs7QUFBQSxtQkFJRkosc0RBQVEsQ0FBQyxFQUFELENBSk47QUFBQSxNQUl6Q0ssZUFKeUM7QUFBQSxN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QUFEO0FBQ0UsTUFBRSxFQUFDLFlBREw7QUFFRSxVQUFNLEVBQUVNLElBRlY7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsS0FIWDtBQUlFLFVBQU0sRUFDSixNQUFDLDRDQUFEO0FBQ0UsVUFBSSxFQUFDLFlBRFA7QUFFRSxXQUFLLEVBQUMsT0FGUjtBQUdFLFVBQUksRUFBQyxNQUhQO0FBSUUsT0FBQyxFQUFFO0FBQUVnRSxTQUFDLEVBQUU7QUFBTCxPQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUcvRCxPQWJILENBbE1GLENBREY7QUFvTkQ7O0dBaFl1QmhDLGU7VUFDVEcsdUQ7OztLQURTSCxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvc3RvcmUvc2VsbC5iNTljYjUzMTVmMmQ2MWJiYmEyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29sLFxyXG4gIERpdixcclxuICBJY29uLFxyXG4gIEltYWdlLFxyXG4gIElucHV0LFxyXG4gIExhYmVsLFxyXG4gIE5vdGlmaWNhdGlvbixcclxuICBSb3csXHJcbiAgVGV4dGFyZWEsXHJcbn0gZnJvbSBcImF0b21pemVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsbFByb2R1Y3RGb3JtKHsgdXNlciB9KSB7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZHVjdERlc2NyaXB0aW9uLCBzZXRQcm9kdWN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3RDYXRlZ29yeSwgc2V0UHJvZHVjdENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeVN0YXRlLCBzZXRDYXRlZ29yeVN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWVhc3VyZW1lbnQsIHNldE1lYXN1cmVtZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BlcmNlbnRhZ2VEaXNjb3VudCwgc2V0UGVyY2VudGFnZURpc2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZVVybExvZ28sIHNldEltYWdlVXJsTG9nb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RvcmVJRCwgc2V0U3RvcmVJRF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NoZWNrU3VibWl0LCBzZXRDaGVja1N1Ym1pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwbG9hZGluZywgc2V0VXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gYXV0aC50b2tlbjtcclxuICBjb25zdCBpZCA9IGF1dGguX2lkO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q2F0ZWdvcnkoKTtcclxuICAgIGdldFN0b3JlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBsZXQgaGFuZGxlUHJvZHVjdE5hbWUgPSAoZSkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVQcm9kdWN0RGVzY3JpcHRpb24gPSAoZSkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaGFuZGxlUHJvZHVjdENhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgIHNldFByb2R1Y3RDYXRlZ29yeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGhhbmRsZU1lYXN1cmVtZW50ID0gKGUpID0+IHtcclxuICAgIHNldE1lYXN1cmVtZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgaGFuZGxlUHJpY2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBoYW5kbGVQZXJjZW50YWdlRGlzY291bnQgPSAoZSkgPT4ge1xyXG4gICAgc2V0UGVyY2VudGFnZURpc2NvdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZ0KSA9PiB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBwcm9kdWN0TmFtZTogcHJvZHVjdE5hbWUsXHJcbiAgICAgIHByb2R1Y3REZXNjcmlwdGlvbjogcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBwcm9kdWN0Q2F0ZWdvcnk6IHByb2R1Y3RDYXRlZ29yeSxcclxuICAgICAgc3RvcmU6IHN0b3JlSUQsXHJcbiAgICAgIHVzZXI6IGlkLFxyXG4gICAgICBhdmFpbGFibGVPcHRpb25zOiB7XHJcbiAgICAgICAgbWVhc3VyZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgIHBlcmNlbnRhZ2VEaXNjb3VudDogcGVyY2VudGFnZURpc2NvdW50LFxyXG4gICAgICB9LFxyXG4gICAgICBwcm9kdWN0UGljdHVyZXM6IGltYWdlcyxcclxuICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICB1c2VyOiBpZCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICAgIHBvcnQ6IDMxMjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfXByb2R1Y3RzL2AsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0Q2hlY2tTdWJtaXQodHJ1ZSk7XHJcblxyXG4gICAgICBzZXRNZXNzYWdlKFwiUHJvZHVjdCB1cGxvYWRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHNldFNob3codHJ1ZSk7XHJcblxyXG4gICAgICBzZXRQcm9kdWN0TmFtZShcIlwiKTtcclxuICAgICAgc2V0UHJpY2UoXCJcIik7XHJcbiAgICAgIHNldEltYWdlcyhbXSk7XHJcbiAgICAgIHNldFByb2R1Y3RDYXRlZ29yeShcIlwiKTtcclxuICAgICAgc2V0UGVyY2VudGFnZURpc2NvdW50KFwiXCIpO1xyXG4gICAgICBzZXRQcm9kdWN0RGVzY3JpcHRpb24oXCJcIik7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zdCBtc2cgPSBnZXQoZSwgXCJyZXNwb25zZS5kYXRhLm1lc3NhZ2VcIikgfHwgZS5tZXNzYWdlO1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICBzZXRNZXNzYWdlKG1zZyk7XHJcbiAgICAgIHNldFNob3codHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZHVjdEltYWdlVXBsb2FkID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICBzZXRNZXNzYWdlKFwiWW91ciBjYW4gb25seSBhZGQgZm91ciAoNCkgaW1hZ2VzIGZvciBwcm9kdWN0XCIpO1xyXG4gICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlLCBpbWFnZS5uYW1lLCBpbWFnZS5zaXplLCBpbWFnZS50eXBlKTtcclxuICAgICAgbGV0IHNhdmUgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9zdGVlY2hpdC1pbWFnZS1tYW5hZ2VyLmhlcm9rdWFwcC5jb20vdXBsb2FkXCIsXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKTtcclxuICAgICAgc2V0SW1hZ2VVcmxMb2dvKHNhdmUuZGF0YS5saW5rKTtcclxuXHJcbiAgICAgIHZhciBnZXRfaW1hZ2VzID0gaW1hZ2VzO1xyXG4gICAgICBnZXRfaW1hZ2VzLnB1c2goeyB1cmw6IHNhdmUuZGF0YS5saW5rIH0pO1xyXG4gICAgICBzZXRJbWFnZXMoZ2V0X2ltYWdlcyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhpbWFnZXMpO1xyXG5cclxuICAgICAgc2V0TWVzc2FnZShcIkltYWdlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDYXRlZ29yeSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgICBwcm94eToge1xyXG4gICAgICAgIGhvc3Q6IFwiMTA0LjIzNi4xNzQuODhcIixcclxuICAgICAgICBwb3J0OiAzMTI4LFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuYXBpVXJsfWNhdGVnb3JpZXMvYCxcclxuICAgIH0pO1xyXG4gICAgc2V0Q2F0ZWdvcnlTdGF0ZShyZXMuZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U3RvcmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICBob3N0OiBcIjEwNC4yMzYuMTc0Ljg4XCIsXHJcbiAgICAgICAgcG9ydDogMzEyOCxcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAke3Byb2Nlc3MuZW52LmFwaVVybH1zdG9yZXMvYCxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgdXNlcjogaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIHNldFN0b3JlSUQocmVzLmRhdGFbMF0uX2lkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc2l6ZT1cIjEyXCI+XHJcbiAgICAgICAgICAgIDxEaXYgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBQcm9kdWN0IEltYWdlKHMpXHJcbiAgICAgICAgICAgICAgPERpdlxyXG4gICAgICAgICAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxleEZsb3c6IFwid3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBtPXt7IHQ6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgIHBvcz1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RGl2XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcz1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICB3PVwiMTIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGg9XCIxMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkXCJcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cImdyYXkzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBwb3M9XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG09e3sgcjogXCIxcmVtXCIsIGI6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHBvcz1cImFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgekluZGV4PVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNsb3NlU29saWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjMwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5NjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxldF9pbWdzID0gaW1hZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGxldF9pbWdzLmluZGV4T2YoaSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdfaW1ncyA9IGxldF9pbWdzLnNwbGljZSgwLCBhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VzKG5ld19pbWdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3X2ltZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPERpdlxyXG4gICAgICAgICAgICAgICAgICBwb3M9XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHc9XCIxMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGg9XCIxMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiZ3JheTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgcG9zPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgIG09e3sgdDogXCItMTVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dXBsb2FkaW5nID8gXCJMb2FkaW5nM1wiIDogXCJBZGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiNTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5NjAwXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJvZHVjdEltYWdlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNpemU9e3tcclxuICAgICAgICAgICAgICB4czogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIHNtOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcclxuICAgICAgICAgICAgICBsZzogXCI2XCIsXHJcbiAgICAgICAgICAgICAgeGw6IFwiNlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBQcm9kdWN0IE5hbWVcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvZHVjdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNpemU9e3tcclxuICAgICAgICAgICAgICB4czogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIHNtOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcclxuICAgICAgICAgICAgICBsZzogXCI2XCIsXHJcbiAgICAgICAgICAgICAgeGw6IFwiNlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGFiZWwgZD1cImJsb2NrXCIgbT17eyBiOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBQcm9kdWN0IENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQcm9kdWN0Q2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdENhdGVnb3J5fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+U2VsZWN0IHN0YXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlTdGF0ZS5tYXAoKHZhbHVlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt2YWx1ZX0gdmFsdWU9e3ZhbHVlLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmNhdGVnb3J5TmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBzaXplPXt7XHJcbiAgICAgICAgICAgICAgeHM6IFwiMTJcIixcclxuICAgICAgICAgICAgICBzbTogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIG1kOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgbGc6IFwiNlwiLFxyXG4gICAgICAgICAgICAgIHhsOiBcIjZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgUHJvZHVjdCBQcmljZVxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlByaWNlXCIgdmFsdWU9e3ByaWNlfSBvbkNoYW5nZT17aGFuZGxlUHJpY2V9IC8+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgc2l6ZT17e1xyXG4gICAgICAgICAgICAgIHhzOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgc206IFwiMTJcIixcclxuICAgICAgICAgICAgICBtZDogXCIxMlwiLFxyXG4gICAgICAgICAgICAgIGxnOiBcIjZcIixcclxuICAgICAgICAgICAgICB4bDogXCI2XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYWJlbCBkPVwiYmxvY2tcIiBtPXt7IGI6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIERpc2NvdW50IGZvciBwcm9kdWN0IGluIHBlcmNlbnRcclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BlcmNlbnRhZ2VEaXNjb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJjZW50YWdlRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBzaXplPVwiMTJcIj5cclxuICAgICAgICAgICAgPExhYmVsIGQ9XCJibG9ja1wiIG09e3sgYjogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgUHJvZHVjdCBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJvZHVjdERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBmb250RmFtaWx5PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBiZz1cIndhcm5pbmc3MDBcIlxyXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICBtPXt7IHQ6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICBwcmVmaXg9e1xyXG4gICAgICAgICAgICBsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiTG9hZGluZzNcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBtPXt7IHI6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gXCJVcGxvYWRpbmdcIiA6IFwiQWRkIHByb2R1Y3RcIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8Tm90aWZpY2F0aW9uXHJcbiAgICAgICAgYmc9XCJ3YXJuaW5nNzAwXCJcclxuICAgICAgICBpc09wZW49e3Nob3d9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvdyhmYWxzZSl9XHJcbiAgICAgICAgcHJlZml4PXtcclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIG5hbWU9XCJDbG9zZVNvbGlkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgbT17eyByOiBcIjAuNXJlbVwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHttZXNzYWdlfVxyXG4gICAgICA8L05vdGlmaWNhdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==