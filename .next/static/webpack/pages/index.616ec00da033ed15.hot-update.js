"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductItem.jsx":
/*!****************************************!*\
  !*** ./src/components/ProductItem.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductItem\": function() { return /* binding */ ProductItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AppContext */ \"./src/context/AppContext.js\");\n/* harmony import */ var _asset_icons_bt_add_to_cart_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asset/icons/bt_add_to_cart.svg */ \"./src/asset/icons/bt_add_to_cart.svg\");\n/* harmony import */ var _asset_icons_bt_added_to_cart_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset/icons/bt_added_to_cart.svg */ \"./src/asset/icons/bt_added_to_cart.svg\");\n/* harmony import */ var _containers_ProductDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/ProductDetail */ \"./src/containers/ProductDetail.jsx\");\n/* harmony import */ var _styles_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ProductItem.module.scss */ \"./src/styles/ProductItem.module.scss\");\n/* harmony import */ var _styles_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n//este es la card que debe aparecer en el home\n//aqui es de donde nos tenemos que basar para mejorar este bug, aqui y en productlist\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProductItem = (param)=>{\n    let { product  } = param;\n    _s();\n    const { addToCart , removeFromCart , state  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const [toggleProductDetail, setProductDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = (item)=>{\n        itsProductAdded() ? removeFromCart(item) : addToCart(item);\n    };\n    const itsProductAdded = ()=>state.cart.some((item)=>item.id === product.id) ? true : false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default().ProductItem),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                loader: ()=>product.images[0],\n                src: product.images[0],\n                alt: product.title,\n                width: 100,\n                height: 100,\n                onClick: ()=>setProductDetail(!toggleProductDetail),\n                className: (_styles_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default().ItemImages)\n            }, void 0, false, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"product-info\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"$\",\n                                    product.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                        onClick: ()=>handleClick(product),\n                        children: [\n                            itsProductAdded() ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _asset_icons_bt_added_to_cart_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                alt: \"\",\n                                width: 250,\n                                height: 250\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _asset_icons_bt_add_to_cart_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"\",\n                                width: 250,\n                                height: 250\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined),\n                            toggleProductDetail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_ProductDetail__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                toggleProductDetail: toggleProductDetail,\n                                setProductDetail: setProductDetail,\n                                product: product\n                            }, product.id, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 35\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/ProductItem.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductItem, \"kmd2EdW2+SeCa2DOUmWQ7DrMfLI=\");\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SXRlbS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE4QztBQUU5QyxxRkFBcUY7QUFFckY7O0FBQW9EO0FBQ3JCO0FBQ2lCO0FBQ2U7QUFDQztBQUNUO0FBQ0E7QUFHaEQsTUFBTVMsY0FBYyxTQUFpQjtRQUFoQixFQUFFQyxRQUFPLEVBQUU7O0lBQ3JDLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxlQUFjLEVBQUVDLE1BQUssRUFBRSxHQUFHWixpREFBVUEsQ0FBQ0csMkRBQVVBO0lBQ2xFLE1BQU0sQ0FBQ1UscUJBQXFCQyxpQkFBaUIsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUc5RCxNQUFNYyxjQUFjLENBQUNDLE9BQVM7UUFDNUJDLG9CQUFvQk4sZUFBZUssUUFBUU4sVUFBVU0sS0FBSztJQUM1RDtJQUVBLE1BQU1DLGtCQUFrQixJQUN0QkwsTUFBTU0sSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0gsT0FBU0EsS0FBS0ksRUFBRSxLQUFLWCxRQUFRVyxFQUFFLElBQUksSUFBSSxHQUFHLEtBQUs7SUFFbEUscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdmLG9GQUFrQjs7MEJBRWhDLDhEQUFDTCxtREFBS0E7Z0JBQ0pxQixRQUFRLElBQU1kLFFBQVFlLE1BQU0sQ0FBQyxFQUFFO2dCQUMvQkMsS0FBS2hCLFFBQVFlLE1BQU0sQ0FBQyxFQUFFO2dCQUN0QkUsS0FBS2pCLFFBQVFrQixLQUFLO2dCQUNsQkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsU0FBUyxJQUFNaEIsaUJBQWlCLENBQUNEO2dCQUNqQ1MsV0FBV2YsbUZBQWlCOzs7Ozs7MEJBRzlCLDhEQUFDYztnQkFBSUMsV0FBV2Ysd0ZBQXNCOztrQ0FFcEMsOERBQUNjOzswQ0FDQyw4REFBQ1c7O29DQUFFO29DQUFFdkIsUUFBUXdCLEtBQUs7Ozs7Ozs7MENBQ2xCLDhEQUFDRDswQ0FBR3ZCLFFBQVFrQixLQUFLOzs7Ozs7Ozs7Ozs7a0NBSW5CLDhEQUFDTzt3QkFBT0osU0FBUyxJQUFNZixZQUFZTjs7NEJBRWhDUSxrQ0FDQyw4REFBQ2YsbURBQUtBO2dDQUFDdUIsS0FBS3BCLHlFQUFhQTtnQ0FBRXFCLEtBQUk7Z0NBQUdFLE9BQU87Z0NBQUtDLFFBQVE7Ozs7OzBEQUV0RCw4REFBQzNCLG1EQUFLQTtnQ0FBQ3VCLEtBQUtyQix1RUFBY0E7Z0NBQUVzQixLQUFJO2dDQUFHRSxPQUFPO2dDQUFLQyxRQUFROzs7Ozt5Q0FDeEQ7NEJBQ0FoQixxQ0FBdUIsOERBQUNQLGlFQUFhQTtnQ0FBQ08scUJBQXVCQTtnQ0FBcUJDLGtCQUFvQkE7Z0NBQWtCTCxTQUFTQTsrQkFBY0EsUUFBUVcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEssRUFBRTtHQS9DV1o7S0FBQUE7QUFpRGIsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0uanN4PzVmMGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9lc3RlIGVzIGxhIGNhcmQgcXVlIGRlYmUgYXBhcmVjZXIgZW4gZWwgaG9tZVxuXG4vL2FxdWkgZXMgZGUgZG9uZGUgbm9zIHRlbmVtb3MgcXVlIGJhc2FyIHBhcmEgbWVqb3JhciBlc3RlIGJ1ZywgYXF1aSB5IGVuIHByb2R1Y3RsaXN0XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQXBwQ29udGV4dCAgZnJvbSBcIi4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuaW1wb3J0IGJ0X2FkZF90b19jYXJ0IGZyb20gXCIuLi9hc3NldC9pY29ucy9idF9hZGRfdG9fY2FydC5zdmdcIjtcbmltcG9ydCBhZGRlZF90b19jYXJ0IGZyb20gXCIuLi9hc3NldC9pY29ucy9idF9hZGRlZF90b19jYXJ0LnN2Z1wiO1xuaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdERldGFpbFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvZHVjdEl0ZW0ubW9kdWxlLnNjc3NcIjtcblxuXG5leHBvcnQgY29uc3QgUHJvZHVjdEl0ZW0gPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgY29uc3QgeyBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0LCBzdGF0ZSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3RvZ2dsZVByb2R1Y3REZXRhaWwsIHNldFByb2R1Y3REZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICBjb25zdCBoYW5kbGVDbGljayA9IChpdGVtKSA9PiB7XG4gICAgaXRzUHJvZHVjdEFkZGVkKCkgPyByZW1vdmVGcm9tQ2FydChpdGVtKSA6IGFkZFRvQ2FydChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBpdHNQcm9kdWN0QWRkZWQgPSAoKSA9PlxuICAgIHN0YXRlLmNhcnQuc29tZSgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCkgPyB0cnVlIDogZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlByb2R1Y3RJdGVtfT5cblxuICAgICAgPEltYWdlXG4gICAgICAgIGxvYWRlcj17KCkgPT4gcHJvZHVjdC5pbWFnZXNbMF19XG4gICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZXNbMF19XG4gICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFByb2R1Y3REZXRhaWwoIXRvZ2dsZVByb2R1Y3REZXRhaWwpfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5JdGVtSW1hZ2VzfVxuICAgICAgLz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInByb2R1Y3QtaW5mb1wiXX0+XG4gICAgICAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+JHtwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICA8cD57cHJvZHVjdC50aXRsZX08L3A+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgIDxmaWd1cmUgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socHJvZHVjdCl9PlxuICAgICAgICAgIFxuICAgICAgICAgIHtpdHNQcm9kdWN0QWRkZWQoKSA/IChcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2FkZGVkX3RvX2NhcnR9IGFsdD1cIlwiIHdpZHRoPXsyNTB9IGhlaWdodD17MjUwfS8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2J0X2FkZF90b19jYXJ0fSBhbHQ9XCJcIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0b2dnbGVQcm9kdWN0RGV0YWlsICYmIDxQcm9kdWN0RGV0YWlsIHRvZ2dsZVByb2R1Y3REZXRhaWwgPSB7dG9nZ2xlUHJvZHVjdERldGFpbH0gc2V0UHJvZHVjdERldGFpbCA9IHtzZXRQcm9kdWN0RGV0YWlsfSBwcm9kdWN0PXtwcm9kdWN0fSBrZXk9e3Byb2R1Y3QuaWR9Lz59XG4gICAgICAgIDwvZmlndXJlPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblx0XHRcdFx0XHRcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtO1xuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJBcHBDb250ZXh0IiwiYnRfYWRkX3RvX2NhcnQiLCJhZGRlZF90b19jYXJ0IiwiUHJvZHVjdERldGFpbCIsInN0eWxlcyIsIlByb2R1Y3RJdGVtIiwicHJvZHVjdCIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21DYXJ0Iiwic3RhdGUiLCJ0b2dnbGVQcm9kdWN0RGV0YWlsIiwic2V0UHJvZHVjdERldGFpbCIsImhhbmRsZUNsaWNrIiwiaXRlbSIsIml0c1Byb2R1Y3RBZGRlZCIsImNhcnQiLCJzb21lIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJsb2FkZXIiLCJpbWFnZXMiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsIkl0ZW1JbWFnZXMiLCJwIiwicHJpY2UiLCJmaWd1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductItem.jsx\n"));

/***/ })

});