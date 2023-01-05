"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./src/components/Menu.jsx\");\n/* harmony import */ var _containers_MyOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/MyOrder */ \"./src/containers/MyOrder.jsx\");\n/* harmony import */ var _asset_icons_icon_menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset/icons/icon_menu.svg */ \"./src/asset/icons/icon_menu.svg\");\n/* harmony import */ var _asset_logos_logo_yard_sale_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../asset/logos/logo_yard_sale.svg */ \"./src/asset/logos/logo_yard_sale.svg\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/AppContext */ \"./src/context/AppContext.js\");\n/* harmony import */ var _asset_icons_icon_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../asset/icons/icon_shopping_cart.svg */ \"./src/asset/icons/icon_shopping_cart.svg\");\n/* harmony import */ var _components_MenuMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MenuMobile */ \"./src/components/MenuMobile.jsx\");\n/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/Header.module.scss */ \"./src/styles/Header.module.scss\");\n/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [toggleOrders, setToggleOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [toggleMenuMobile, setToggleMenuMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hidenavbar, setTogglenavbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();\n    const { pathname  } = router;\n    console.log(\"este es el:\" + pathname.slice(1, -1));\n    var path = pathname.slice(1, -1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"testing\");\n        if (path == \"MyAccoun\") {\n            setTogglenavbar(true);\n        }\n    }, []);\n    const handleToggle = ()=>{\n        setToggle(!toggle);\n    };\n    const handleToggleMenuMobile = ()=>{\n        setToggleMenuMobile(!toggleMenuMobile);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _asset_icons_icon_menu_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"menu\",\n                    className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default().menu),\n                    onClick: ()=>setToggleMenuMobile(!toggleMenuMobile)\n                }, void 0, false, {\n                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"navbar-left\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _asset_logos_logo_yard_sale_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"logo\",\n                            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"nav-logo\"])\n                        }, void 0, false, {\n                            fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \" All \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \"Clothes\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \"Electronics\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \"Furnitures\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    children: \"Toys\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \" \",\n                                    children: \"Others\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"navbar-right\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"navbar-email\"]),\n                                onClick: handleToggle,\n                                children: \"Thewintherdmc@gmail.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_13___default()[\"navbar-shopping-cart\"]),\n                                onClick: ()=>setToggleOrders(!toggleOrders),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _asset_icons_icon_shopping_cart_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                        alt: \"shopping cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    state.cart.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: state.cart.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 33\n                                    }, undefined) : null\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 6\n                    }, undefined),\n                    toggleOrders && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_MyOrder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        toggleOrders: toggleOrders,\n                        setToggleOrders: setToggleOrders\n                    }, void 0, false, {\n                        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 23\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, undefined),\n            toggle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleToggle: handleToggle\n            }, void 0, false, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 109,\n                columnNumber: 16\n            }, undefined),\n            toggleMenuMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuMobile__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                handleToggleMenuMobile: handleToggleMenuMobile\n            }, void 0, false, {\n                fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n                lineNumber: 110,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/migueljaramillo/Desktop/E-commerce/src/components/Header.jsx\",\n        lineNumber: 45,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"t93UWUEXYfFn6fvpwrghpMPVjB4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header); //aveces los estilos se rompen, porque no organizamos en la posicion que se debe los props\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLM0IsMkVBQVlBO3dDQUFFNEIsS0FBSTs7Ozs7O29DQUM3QmIsTUFBTWtCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLGtCQUFJLDhEQUFDSjtrREFBS2YsTUFBTWtCLElBQUksQ0FBQ0MsTUFBTTs7Ozs7b0RBQVUsSUFBSTs7Ozs7Ozs7Ozs7OztvQkFJL0R6Qiw4QkFBZ0IsOERBQUNiLDJEQUFPQTt3QkFBQ2EsY0FBY0E7d0JBQWNDLGlCQUFpQkE7Ozs7Ozs7Ozs7OztZQUV2RUgsd0JBQVUsOERBQUNaLHdEQUFJQTtnQkFBQzJCLGNBQWNBOzs7Ozs7WUFDOUJYLGtDQUFvQiw4REFBQ1YsOERBQVVBO2dCQUFDc0Isd0JBQXdCQTs7Ozs7Ozs7Ozs7O0FBRzdEO0dBakdNakI7O1FBUVVELG1EQUFTQTs7O0tBUm5CQztBQW1HTiwrREFBZUEsTUFBTUEsRUFBQyxDQUV0QiwwRkFBMEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzeD8zY2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcbmltcG9ydCBNeU9yZGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvTXlPcmRlcic7XG5pbXBvcnQgbWVudSBmcm9tICcuLi9hc3NldC9pY29ucy9pY29uX21lbnUuc3ZnJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0L2xvZ29zL2xvZ29feWFyZF9zYWxlLnN2Zyc7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0FwcENvbnRleHQnO1xuaW1wb3J0IHNob3BwaW5nQ2FydCBmcm9tICcuLi9hc3NldC9pY29ucy9pY29uX3Nob3BwaW5nX2NhcnQuc3ZnJztcbmltcG9ydCBNZW51TW9iaWxlIGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVNb2JpbGVcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt0b2dnbGVPcmRlcnMsIHNldFRvZ2dsZU9yZGVyc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt0b2dnbGVNZW51TW9iaWxlLCBzZXRUb2dnbGVNZW51TW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2hpZGVuYXZiYXIsIHNldFRvZ2dsZW5hdmJhcl0gPSB1c2VTdGF0ZSAoZmFsc2UpXG5cblxuXHRjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7cGF0aG5hbWV9ID0gcm91dGVyO1xuXHRjb25zb2xlLmxvZyhcImVzdGUgZXMgZWw6XCIgKyBwYXRobmFtZS5zbGljZSgxLC0xKSkgXG5cdHZhciBwYXRoID0gcGF0aG5hbWUuc2xpY2UoMSwtMSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwidGVzdGluZ1wiKVxuXHQgIGlmIChwYXRoID09IFwiTXlBY2NvdW5cIikge1xuXHRcdHNldFRvZ2dsZW5hdmJhcih0cnVlKVxuXHQgIH1cblx0fSwgW10pXG5cblx0Y29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuXHRcdHNldFRvZ2dsZSghdG9nZ2xlKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVUb2dnbGVNZW51TW9iaWxlID0gKCkgPT4ge1xuXHRcdHNldFRvZ2dsZU1lbnVNb2JpbGUoIXRvZ2dsZU1lbnVNb2JpbGUpO1xuXHQgIH07XG5cblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG5cdFx0XHRcdDxMaW5rIGhyZWY9e1wiL1wifT5cblx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXttZW51fSBhbHQ9XCJtZW51XCIgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlTWVudU1vYmlsZSghdG9nZ2xlTWVudU1vYmlsZSl9IC8+XG5cdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibmF2YmFyLWxlZnRcIl19PlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtbG9nb1wiXX0gLz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PHVsPlxuXG5cdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+IEFsbCA8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdFx0Q2xvdGhlc1xuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdFx0RWxlY3Ryb25pY3Ncblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdEZ1cm5pdHVyZXNcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFRveXNcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiIFwiPlxuXHRcdFx0XHRcdFx0XHRcdE90aGVyc1xuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0XHRcdDwvbGk+XG5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdmJhci1yaWdodFwiXX0+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2YmFyLWVtYWlsXCJdfSBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9PlxuXHRcdFx0XHRcdFx0XHRUaGV3aW50aGVyZG1jQGdtYWlsLmNvbVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlc1tcIm5hdmJhci1zaG9wcGluZy1jYXJ0XCJdfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVPcmRlcnMoIXRvZ2dsZU9yZGVycyl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9e3Nob3BwaW5nQ2FydH0gYWx0PVwic2hvcHBpbmcgY2FydFwiIC8+XG5cdFx0XHRcdFx0XHRcdHtzdGF0ZS5jYXJ0Lmxlbmd0aCA+IDAgPyA8ZGl2PntzdGF0ZS5jYXJ0Lmxlbmd0aH08L2Rpdj4gOiBudWxsfVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXG5cdFx0XHRcdFx0e3RvZ2dsZU9yZGVycyAmJiA8TXlPcmRlciB0b2dnbGVPcmRlcnM9e3RvZ2dsZU9yZGVyc30gc2V0VG9nZ2xlT3JkZXJzPXtzZXRUb2dnbGVPcmRlcnN9IC8+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3RvZ2dsZSAmJiA8TWVudSBoYW5kbGVUb2dnbGU9e2hhbmRsZVRvZ2dsZX0gLz59XG5cdFx0XHRcdHt0b2dnbGVNZW51TW9iaWxlICYmIDxNZW51TW9iaWxlIGhhbmRsZVRvZ2dsZU1lbnVNb2JpbGU9e2hhbmRsZVRvZ2dsZU1lbnVNb2JpbGV9IC8+fVxuXHRcdFx0PC9uYXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuLy9hdmVjZXMgbG9zIGVzdGlsb3Mgc2Ugcm9tcGVuLCBwb3JxdWUgbm8gb3JnYW5pemFtb3MgZW4gbGEgcG9zaWNpb24gcXVlIHNlIGRlYmUgbG9zIHByb3BzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJNZW51IiwiTXlPcmRlciIsIm1lbnUiLCJsb2dvIiwiQXBwQ29udGV4dCIsInNob3BwaW5nQ2FydCIsIk1lbnVNb2JpbGUiLCJzdHlsZXMiLCJMaW5rIiwiSGVhZCIsInVzZVJvdXRlciIsIkhlYWRlciIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInRvZ2dsZU9yZGVycyIsInNldFRvZ2dsZU9yZGVycyIsInRvZ2dsZU1lbnVNb2JpbGUiLCJzZXRUb2dnbGVNZW51TW9iaWxlIiwiaGlkZW5hdmJhciIsInNldFRvZ2dsZW5hdmJhciIsInN0YXRlIiwicm91dGVyIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJwYXRoIiwiaGFuZGxlVG9nZ2xlIiwiaGFuZGxlVG9nZ2xlTWVudU1vYmlsZSIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiZGl2IiwidWwiLCJsaSIsImNhcnQiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.jsx\n"));

/***/ })

});