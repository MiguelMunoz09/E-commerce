(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2023:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Header_nav__6rxbv",
	"menu": "Header_menu__53eqk",
	"nav-logo": "Header_nav-logo__Ig_eA",
	"navbar-left": "Header_navbar-left__zEVzI",
	"navbar-right": "Header_navbar-right__2CNAT",
	"navbar-email": "Header_navbar-email__G_f5P",
	"navbar-shopping-cart": "Header_navbar-shopping-cart__t_WEj"
};


/***/ }),

/***/ 6737:
/***/ ((module) => {

// Exports
module.exports = {
	"Menu": "Menu_Menu__6xmVK"
};


/***/ }),

/***/ 991:
/***/ ((module) => {

// Exports
module.exports = {
	"mobile-menu": "MenuMobile_mobile-menu__JOZoS",
	"swipeDown": "MenuMobile_swipeDown___qras",
	"email": "MenuMobile_email__CFmnD",
	"sign-out": "MenuMobile_sign-out__gZTV6"
};


/***/ }),

/***/ 4986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo_yard_sale.ab5a49e4.svg","height":20,"width":97});

/***/ }),

/***/ 6326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/Menu.module.scss
var Menu_module = __webpack_require__(6737);
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);
;// CONCATENATED MODULE: ./src/components/Menu.jsx




const Menu = ({ handleToggle  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Menu_module_default()).Menu,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Orders",
                        className: (Menu_module_default()).title,
                        onClick: handleToggle,
                        children: "My orders"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: " /MyAccount",
                        onClick: handleToggle,
                        children: "My account"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Login",
                        onClick: handleToggle,
                        children: "Sign out"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Menu = (Menu);

// EXTERNAL MODULE: ./src/components/OrderItem.jsx
var OrderItem = __webpack_require__(8540);
// EXTERNAL MODULE: ./src/context/AppContext.js
var AppContext = __webpack_require__(2417);
;// CONCATENATED MODULE: ./src/asset/icons/flechita.svg
/* harmony default export */ const flechita = ({"src":"/_next/static/media/flechita.1c152575.svg","height":12,"width":7});
// EXTERNAL MODULE: ./src/styles/MyOrder.module.scss
var MyOrder_module = __webpack_require__(5867);
var MyOrder_module_default = /*#__PURE__*/__webpack_require__.n(MyOrder_module);
;// CONCATENATED MODULE: ./src/containers/MyOrder.jsx








//pasar como parametro toggleOrders, setToggleOrders es lo que nos permite importar la funcion del header.
const MyOrder = ({ toggleOrders , setToggleOrders  })=>{
    const { state  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    const sumTotal = ()=>{
        const reducer = (accumator, currentValue)=>accumator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: (MyOrder_module_default())["shopping-cart-container"],
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MyOrder_module_default())["title-container-shopping-cart"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: flechita,
                        alt: "arrow",
                        onClick: ()=>setToggleOrders(!toggleOrders)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (MyOrder_module_default())["title-shopping-cart"],
                        children: "My order"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MyOrder_module_default())["articulos-container"],
                children: [
                    state.cart.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(OrderItem/* default */.Z, {
                            product: product
                        }, `orderItem-${product.id}`)),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (MyOrder_module_default())["my-order-content"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Total"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "$ ",
                                    sumTotal()
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/checkout",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (MyOrder_module_default()).primary_btn,
                            onClick: ()=>setToggleOrders(!toggleOrders),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Checkout"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const containers_MyOrder = (MyOrder);

;// CONCATENATED MODULE: ./src/asset/icons/icon_menu.svg
/* harmony default export */ const icon_menu = ({"src":"/_next/static/media/icon_menu.b70fc14a.svg","height":21,"width":25});
// EXTERNAL MODULE: ./src/asset/logos/logo_yard_sale.svg
var logo_yard_sale = __webpack_require__(4986);
;// CONCATENATED MODULE: ./src/asset/icons/icon_shopping_cart.svg
/* harmony default export */ const icon_shopping_cart = ({"src":"/_next/static/media/icon_shopping_cart.665a6046.svg","height":25,"width":24});
// EXTERNAL MODULE: ./src/styles/MenuMobile.module.scss
var MenuMobile_module = __webpack_require__(991);
var MenuMobile_module_default = /*#__PURE__*/__webpack_require__.n(MenuMobile_module);
;// CONCATENATED MODULE: ./src/components/MenuMobile.jsx




const MobileMenu = ({ handleToggleMenuMobile  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MenuMobile_module_default())["mobile-menu"],
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "CATEGORIES"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            onClick: handleToggleMenuMobile,
                            children: "All"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            onClick: handleToggleMenuMobile,
                            children: "Clothes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            onClick: handleToggleMenuMobile,
                            children: "Electronics"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            onClick: handleToggleMenuMobile,
                            children: "Furnitures"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            onClick: handleToggleMenuMobile,
                            children: "Toys"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "",
                            onClick: handleToggleMenuMobile,
                            children: "Other"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/MyAccount",
                        onClick: handleToggleMenuMobile,
                        children: "My account"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: (MenuMobile_module_default()).email,
                            children: "thewintherdmc@gmail.com"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/Login",
                            className: (MenuMobile_module_default())["sign-out"],
                            onClick: handleToggleMenuMobile,
                            children: "Sign out"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const MenuMobile = (MobileMenu);

// EXTERNAL MODULE: ./src/styles/Header.module.scss
var Header_module = __webpack_require__(2023);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/components/Header.jsx














const Header = ()=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    const [toggleOrders, setToggleOrders] = (0,external_react_.useState)(false);
    const [toggleMenuMobile, setToggleMenuMobile] = (0,external_react_.useState)(false);
    //para esconder el navbar en la Pagina de login
    const [Hidenavbar, setHideNavbar] = (0,external_react_.useState)(false);
    const { state  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    const router = (0,router_namespaceObject.useRouter)();
    const { pathname  } = router;
    var path = pathname.slice(1, -1);
    console.log(path);
    (0,external_react_.useEffect)(()=>{
        if (path == "Logi") {
            setHideNavbar(true);
        } else if (path == "") {
            setHideNavbar(false);
        }
    }, [
        path
    ]);
    const handleToggle = ()=>{
        setToggle(!toggle);
    };
    const handleToggleMenuMobile = ()=>{
        setToggleMenuMobile(!toggleMenuMobile);
    };
    if (Hidenavbar) {
        return null;
    } else {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (Header_module_default()).nav,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: icon_menu,
                        alt: "menu",
                        className: (Header_module_default()).menu,
                        onClick: ()=>setToggleMenuMobile(!toggleMenuMobile)
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Header_module_default())["navbar-left"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo_yard_sale/* default */.Z,
                                alt: "logo",
                                className: (Header_module_default())["nav-logo"]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: " All "
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Clothes"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Electronics"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Furnitures"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Toys"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: " ",
                                        children: "Others"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Header_module_default())["navbar-right"],
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default())["navbar-email"],
                                    onClick: handleToggle,
                                    children: "Thewintherdmc@gmail.com"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Header_module_default())["navbar-shopping-cart"],
                                    onClick: ()=>setToggleOrders(!toggleOrders),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: icon_shopping_cart,
                                            alt: "shopping cart"
                                        }),
                                        state.cart.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: state.cart.length
                                        }) : null
                                    ]
                                })
                            ]
                        }),
                        toggleOrders && /*#__PURE__*/ jsx_runtime_.jsx(containers_MyOrder, {
                            toggleOrders: toggleOrders,
                            setToggleOrders: setToggleOrders
                        })
                    ]
                }),
                toggle && /*#__PURE__*/ jsx_runtime_.jsx(components_Menu, {
                    handleToggle: handleToggle
                }),
                toggleMenuMobile && /*#__PURE__*/ jsx_runtime_.jsx(MenuMobile, {
                    handleToggleMenuMobile: handleToggleMenuMobile
                })
            ]
        });
    }
};
// 	return (
// 		<nav className={styles.nav}>
// 				<Link href={"/"}>
// 					<Image src={menu} alt="menu" className={styles.menu} onClick={() => setToggleMenuMobile(!toggleMenuMobile)} />
// 				</Link>
// 				<div className={styles["navbar-left"]}>
// 					<Link href="/">
// 						<Image src={logo} alt="logo" className={styles["nav-logo"]} />
// 					</Link>
// 					<ul>
// 						<li>
// 							<Link href="/"> All </Link>
// 						</li>
// 						<li>
// 							<Link href="/">
// 								Clothes
// 							</Link>
// 						</li>
// 						<li>
// 							<Link href="/">
// 								Electronics
// 							</Link>
// 						</li>
// 						<li>
// 							<Link href="/">
// 								Furnitures
// 							</Link>
// 						</li>
// 						<li>
// 							<Link href="/">
// 								Toys
// 							</Link>
// 						</li>
// 						<li>
// 							<Link href=" ">
// 								Others
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 				<div className={styles["navbar-right"]}>
// 					<ul>
// 						<li className={styles["navbar-email"]} onClick={handleToggle}>
// 							Thewintherdmc@gmail.com
// 						</li>
// 						<li
// 							className={styles["navbar-shopping-cart"]}
// 							onClick={() => setToggleOrders(!toggleOrders)}
// 						>
// 							<Image src={shoppingCart} alt="shopping cart" />
// 							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
// 						</li>
// 					</ul>
// 					{toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
// 				</div>
// 				{toggle && <Menu handleToggle={handleToggle} />}
// 				{toggleMenuMobile && <MenuMobile handleToggleMenuMobile={handleToggleMenuMobile} />}
// 			</nav>
// 	);
// }
/* harmony default export */ const components_Header = (Header); //aveces los estilos se rompen, porque no organizamos en la posicion que se debe los props

;// CONCATENATED MODULE: ./src/hooks/useInitialState.js

const initialState = {
    cart: []
};
const useInitialState = ()=>{
    const [state, setState] = (0,external_react_.useState)(initialState);
    const addToCart = (payload)=>{
        setState({
            ...state,
            cart: [
                ...state.cart,
                payload
            ]
        });
    };
    const removeFromCart = (payload)=>{
        setState({
            ...state,
            cart: state.cart.filter((items)=>items.id !== payload.id)
        });
    };
    return {
        state,
        addToCart,
        removeFromCart
    };
};
/* harmony default export */ const hooks_useInitialState = (useInitialState);

;// CONCATENATED MODULE: ./src/pages/_app.tsx




function App({ Component , pageProps  }) {
    const initialState = hooks_useInitialState();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AppContext/* default.Provider */.Z.Provider, {
        value: initialState,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,540], () => (__webpack_exec__(6326)));
module.exports = __webpack_exports__;

})();