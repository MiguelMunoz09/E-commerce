exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 5867:
/***/ ((module) => {

// Exports
module.exports = {
	"primary_btn": "MyOrder_primary_btn__TQvGY",
	"shopping-cart-container": "MyOrder_shopping-cart-container__XHNFv",
	"title-container-shopping-cart": "MyOrder_title-container-shopping-cart__Z3V6H",
	"title-shopping-cart": "MyOrder_title-shopping-cart__zc1EU",
	"shopping-cart": "MyOrder_shopping-cart__UqZFV",
	"shopping-image": "MyOrder_shopping-image__D37Du",
	"my-order-content": "MyOrder_my-order-content___FFAb",
	"mjs-add-products": "MyOrder_mjs-add-products__hxMHB",
	"close-x": "MyOrder_close-x__bkqqu"
};


/***/ }),

/***/ 8843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon_close.e791344b.png","height":14,"width":14,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATUlEQVR42mWNQQrAQAgD409kD35pWXroY10wz2qkPRTWQ4iGMajJANK2AYyaLRcHNBxy8ZqbTpd2kAZoWbXogMD9Pyg+kPNp1zabX+0DV1ouPcVDLDUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2417);
/* harmony import */ var _asset_icons_icon_close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8843);
/* harmony import */ var _styles_MyOrder_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5867);
/* harmony import */ var _styles_MyOrder_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_MyOrder_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);






const OrderItem = ({ product  })=>{
    const { removeFromCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const handleRemove = (product)=>{
        removeFromCart(product);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_MyOrder_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["shopping-cart"]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: product?.images[0],
                    alt: product?.title,
                    width: 100,
                    height: 100,
                    className: (_styles_MyOrder_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["shopping-image"])
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: product?.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "$",
                    product?.price
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: _asset_icons_icon_close_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                alt: "close",
                className: (_styles_MyOrder_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["close-x"]),
                onClick: ()=>handleRemove(product)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderItem);


/***/ }),

/***/ 2417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);


/***/ })

};
;