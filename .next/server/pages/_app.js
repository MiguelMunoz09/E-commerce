/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/AppContext.js":
/*!***********************************!*\
  !*** ./src/context/AppContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BcHBDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQywyQkFBYUQsMERBQW1CLENBQUUsQ0FFeEM7QUFFQSxpRUFBZUMsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3lhcmRzYWxlLy4vc3JjL2NvbnRleHQvQXBwQ29udGV4dC5qcz83NjllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQXBwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQgKHtcblxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/AppContext.js\n");

/***/ }),

/***/ "./src/hooks/useInitialState.js":
/*!**************************************!*\
  !*** ./src/hooks/useInitialState.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    cart: []\n};\nconst useInitialState = ()=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);\n    const addToCart = (payload)=>{\n        setState({\n            ...state,\n            cart: [\n                ...state.cart,\n                payload\n            ]\n        });\n    };\n    const removeFromCart = (payload)=>{\n        setState({\n            ...state,\n            cart: state.cart.filter((items)=>items.id !== payload.id)\n        });\n    };\n    return {\n        state,\n        addToCart,\n        removeFromCart\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInitialState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlSW5pdGlhbFN0YXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUVqQyxNQUFNQyxlQUFlO0lBQ3BCQyxNQUFNLEVBQUU7QUFDVDtBQUVBLE1BQU1DLGtCQUFrQixJQUFNO0lBQzdCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQ0M7SUFFbkMsTUFBTUssWUFBWSxDQUFDQyxVQUFZO1FBQzlCRixTQUFTO1lBQ1IsR0FBR0QsS0FBSztZQUNSRixNQUFNO21CQUFJRSxNQUFNRixJQUFJO2dCQUFFSzthQUFRO1FBQy9CO0lBQ0Q7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0QsVUFBWTtRQUNuQ0YsU0FBUztZQUNSLEdBQUdELEtBQUs7WUFDUkYsTUFBTUUsTUFBTUYsSUFBSSxDQUFDTyxNQUFNLENBQUNDLENBQUFBLFFBQVNBLE1BQU1DLEVBQUUsS0FBS0osUUFBUUksRUFBRTtRQUN6RDtJQUNEO0lBRUEsT0FBTztRQUNOUDtRQUNBRTtRQUNBRTtJQUNEO0FBQ0Q7QUFFQSxpRUFBZUwsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3lhcmRzYWxlLy4vc3JjL2hvb2tzL3VzZUluaXRpYWxTdGF0ZS5qcz9hMGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0Y2FydDogW10sXG59XG5cbmNvbnN0IHVzZUluaXRpYWxTdGF0ZSA9ICgpID0+IHtcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG5cdGNvbnN0IGFkZFRvQ2FydCA9IChwYXlsb2FkKSA9PiB7XG5cdFx0c2V0U3RhdGUoe1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjYXJ0OiBbLi4uc3RhdGUuY2FydCwgcGF5bG9hZF1cblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwYXlsb2FkKSA9PiB7XG5cdFx0c2V0U3RhdGUoe1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjYXJ0OiBzdGF0ZS5jYXJ0LmZpbHRlcihpdGVtcyA9PiBpdGVtcy5pZCAhPT0gcGF5bG9hZC5pZCksXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRlLFxuXHRcdGFkZFRvQ2FydCxcblx0XHRyZW1vdmVGcm9tQ2FydFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUluaXRpYWxTdGF0ZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsImNhcnQiLCJ1c2VJbml0aWFsU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiYWRkVG9DYXJ0IiwicGF5bG9hZCIsInJlbW92ZUZyb21DYXJ0IiwiZmlsdGVyIiwiaXRlbXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useInitialState.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ \"./src/context/AppContext.js\");\n/* harmony import */ var _hooks_useInitialState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInitialState */ \"./src/hooks/useInitialState.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const initialState = (0,_hooks_useInitialState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: initialState,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/pages/_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ2dCO0FBQ1E7QUFJdkMsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELE1BQU1DLGVBQWVKLGtFQUFlQTtJQUNwQyxxQkFDRSw4REFBQ0Qsb0VBQW1CO1FBQUNPLE9BQU9GO2tCQUMxQiw0RUFBQ0Y7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWFyZHNhbGUvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQXBwQ29udGV4dCdcbmltcG9ydCB1c2VJbml0aWFsU3RhdGUgZnJvbSBcIi4uL2hvb2tzL3VzZUluaXRpYWxTdGF0ZVwiXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlSW5pdGlhbFN0YXRlICgpO1xuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpbml0aWFsU3RhdGV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKSAgIFxufVxuXG4iXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsInVzZUluaXRpYWxTdGF0ZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXRpYWxTdGF0ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();