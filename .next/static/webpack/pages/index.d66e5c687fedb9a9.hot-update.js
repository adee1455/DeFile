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

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useIpfsAndEthereum */ \"./src/hooks/useIpfsAndEthereum.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const { connectWallet, account, loading } = (0,_hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const handleConnectWallet = async ()=>{\n        console.log(\"Button clicked\");\n        connectWallet();\n    };\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"backdrop-blur-sm  fixed w-full h-[73px]  z-20 top-0 start-0 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-xl flex flex-wrap items-center dark:text-blue-600 text-blue-600  justify-between mx-auto p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        className: \"flex items-center space-x-3 rtl:space-x-reverse\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/logo2.png\",\n                                class: \"sm:h-12 h-8\",\n                                alt: \" Logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                lineNumber: 20,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"self-center font-mono md:text-3xl text-xl  sm:font-semibold font-bold whitespace-nowrap \",\n                                children: \"DeFile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                lineNumber: 21,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                        lineNumber: 19,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"relative  md:inline-flex sm:hidden hidden h-12  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50\",\n                                onClick: handleConnectWallet,\n                                disabled: loading,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-500 md:px-7 px-4 py-1 text-sm font-semibold text-white backdrop-blur-3xl\",\n                                        children: account ? \"Connected: \".concat(account.slice(0, 6), \"...\").concat(account.slice(-4)) : \"Connect Wallet\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                lineNumber: 24,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>document.getElementById(\"dropdown\").classList.toggle(\"hidden\"),\n                                type: \"button\",\n                                className: \"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600\",\n                                \"aria-controls\": \"dropdown\",\n                                \"aria-expanded\": \"false\",\n                                \"aria-hidden\": \"true\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Open main menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-5 h-5\",\n                                        \"aria-hidden\": \"true\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 17 14\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            stroke: \"currentColor\",\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: \"2\",\n                                            d: \"M1 1h15M1 7h15M1 13h15\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                lineNumber: 35,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                        lineNumber: 23,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-center justify-between hidden w-full md:flex md:w-auto md:order-1 backdrop-blur-md\",\n                        id: \"dropdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-col sm:text-black text-white  p-4 md:p-0 mt-4 font-medium backdrop-blur-md border border-gray-100 rounded-lg sm:bg-indigo-900  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: ()=>router.push(\"/\"),\n                                        className: \"block py-2 px-3  rounded   sm:bg-transparent bg-indigo-900  dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"block py-2 px-3  rounded     sm:bg-transparent bg-indigo-900 dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: ()=>router.push(\"/App\"),\n                                        className: \"block py-2 px-3  rounded  sm:bg-transparent bg-indigo-900   dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700\",\n                                        children: \"App\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                            lineNumber: 43,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                        lineNumber: 42,\n                        columnNumber: 3\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                lineNumber: 18,\n                columnNumber: 3\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"AV11KGoMGoqBmefhOpG0xANvq58=\", false, function() {\n    return [\n        _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBCO0FBQ2tCO0FBQ2dCO0FBRTVELE1BQU1HLFNBQVM7O0lBQ2IsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdKLHFFQUFrQkE7SUFFOUQsTUFBTUssc0JBQXNCO1FBQzFCQyxRQUFRQyxHQUFHLENBQUM7UUFDYkw7SUFDRDtJQUNGLE1BQU1NLFNBQVNULDBEQUFTQTtJQUV0QixxQkFDRSw4REFBQ1U7a0JBQ0csNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ3JCLDRFQUFDRjtnQkFBSUUsV0FBVzs7a0NBQ2hCLDhEQUFDQzt3QkFBRUMsTUFBSzt3QkFBSUYsV0FBVTs7MENBQ2xCLDhEQUFDRztnQ0FBSUMsS0FBSTtnQ0FBYUMsT0FBTTtnQ0FBY0MsS0FBSTs7Ozs7OzBDQUM5Qyw4REFBQ0M7Z0NBQUtQLFdBQVU7MENBQTJGOzs7Ozs7Ozs7Ozs7a0NBRS9HLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ1gsOERBQUNRO2dDQUNDUixXQUFVO2dDQUNWUyxTQUFTZjtnQ0FDVGdCLFVBQVVqQjs7a0RBRVYsOERBQUNjO3dDQUFLUCxXQUFVOzs7Ozs7a0RBQ2hCLDhEQUFDTzt3Q0FBS1AsV0FBVTtrREFDYlIsVUFBVSxjQUF1Q0EsT0FBekJBLFFBQVFtQixLQUFLLENBQUMsR0FBRyxJQUFHLE9BQXVCLE9BQWxCbkIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLE1BQU87Ozs7Ozs7Ozs7OzswQ0FJbEYsOERBQUNIO2dDQUFPQyxTQUFTLElBQU1HLFNBQVNDLGNBQWMsQ0FBQyxZQUFZQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztnQ0FBV0MsTUFBSztnQ0FBU2hCLFdBQVU7Z0NBQXdOaUIsaUJBQWM7Z0NBQVdDLGlCQUFjO2dDQUFRQyxlQUFZOztrREFDMVgsOERBQUNaO3dDQUFLUCxXQUFVO2tEQUFVOzs7Ozs7a0RBQzFCLDhEQUFDb0I7d0NBQUlwQixXQUFVO3dDQUFVbUIsZUFBWTt3Q0FBT0UsT0FBTTt3Q0FBNkJDLE1BQUs7d0NBQU9DLFNBQVE7a0RBQy9GLDRFQUFDQzs0Q0FBS0MsUUFBTzs0Q0FBZUMsZUFBYzs0Q0FBUUMsZ0JBQWU7NENBQVFDLGFBQVk7NENBQUlDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlyRyw4REFBQy9CO3dCQUFJRSxXQUFVO3dCQUEyRjhCLElBQUc7a0NBQzNHLDRFQUFDQzs0QkFBRy9CLFdBQVU7OzhDQUNkLDhEQUFDZ0M7OENBQ0csNEVBQUMvQjt3Q0FBRVEsU0FBUyxJQUFNWixPQUFPb0MsSUFBSSxDQUFDO3dDQUFNakMsV0FBVTtrREFBeUk7Ozs7Ozs7Ozs7OzhDQUV6TCw4REFBQ2dDOzhDQUNDLDRFQUFDL0I7d0NBQUVDLE1BQUs7d0NBQUlGLFdBQVU7a0RBQTBJOzs7Ozs7Ozs7Ozs4Q0FFbEssOERBQUNnQzs4Q0FDQyw0RUFBQy9CO3dDQUFFUSxTQUFTLElBQU1aLE9BQU9vQyxJQUFJLENBQUM7d0NBQVNqQyxXQUFVO2tEQUF5STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbE07R0F2RE1WOztRQUN3Q0QsaUVBQWtCQTtRQU1qREQsc0RBQVNBOzs7S0FQbEJFO0FBeUROLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qcz9hNTYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgdXNlSXBmc0FuZEV0aGVyZXVtIGZyb20gJ0AvaG9va3MvdXNlSXBmc0FuZEV0aGVyZXVtJztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbm5lY3RXYWxsZXQsIGFjY291bnQsIGxvYWRpbmcgfSA9IHVzZUlwZnNBbmRFdGhlcmV1bSgpO1xuXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJCdXR0b24gY2xpY2tlZFwiKTtcbiAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgfTtcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiYWNrZHJvcC1ibHVyLXNtICBmaXhlZCB3LWZ1bGwgaC1bNzNweF0gIHotMjAgdG9wLTAgc3RhcnQtMCBcIj5cbiAgPGRpdiBjbGFzc05hbWUgPVwibWF4LXctc2NyZWVuLXhsIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBkYXJrOnRleHQtYmx1ZS02MDAgdGV4dC1ibHVlLTYwMCAganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gcC00XCI+XG4gIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHJ0bDpzcGFjZS14LXJldmVyc2VcIj5cbiAgICAgIDxpbWcgc3JjPVwiL2xvZ28yLnBuZ1wiIGNsYXNzPVwic206aC0xMiBoLThcIiBhbHQ9XCIgTG9nb1wiLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGYtY2VudGVyIGZvbnQtbW9ubyBtZDp0ZXh0LTN4bCB0ZXh0LXhsICBzbTpmb250LXNlbWlib2xkIGZvbnQtYm9sZCB3aGl0ZXNwYWNlLW5vd3JhcCBcIj5EZUZpbGU8L3NwYW4+XG4gIDwvYT5cbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOm9yZGVyLTIgc3BhY2UteC0zIG1kOnNwYWNlLXgtMCBydGw6c3BhY2UteC1yZXZlcnNlXCI+XG4gICAgICA8YnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSAgbWQ6aW5saW5lLWZsZXggc206aGlkZGVuIGhpZGRlbiBoLTEyICBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsIHAtWzFweF0gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXNsYXRlLTQwMCBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LXNsYXRlLTUwXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ29ubmVjdFdhbGxldH1cbiAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LVstMTAwMCVdIGFuaW1hdGUtW3NwaW5fMnNfbGluZWFyX2luZmluaXRlXSBiZy1bY29uaWMtZ3JhZGllbnQoZnJvbV85MGRlZ19hdF81MCVfNTAlLCNFMkNCRkZfMCUsIzM5M0JCMl81MCUsI0UyQ0JGRl8xMDAlKV1cIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLWZ1bGwgdy1mdWxsIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctYmx1ZS01MDAgbWQ6cHgtNyBweC00IHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmFja2Ryb3AtYmx1ci0zeGxcIj5cbiAgICAgICAgICB7YWNjb3VudCA/IGBDb25uZWN0ZWQ6ICR7YWNjb3VudC5zbGljZSgwLCA2KX0uLi4ke2FjY291bnQuc2xpY2UoLTQpfWAgOiAnQ29ubmVjdCBXYWxsZXQnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTIgdy0xMCBoLTEwIGp1c3RpZnktY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCByb3VuZGVkLWxnIG1kOmhpZGRlbiBob3Zlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiIGFyaWEtY29udHJvbHM9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTcgMTRcIj5cbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTEgMWgxNU0xIDdoMTVNMSAxM2gxNVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaGlkZGVuIHctZnVsbCBtZDpmbGV4IG1kOnctYXV0byBtZDpvcmRlci0xIGJhY2tkcm9wLWJsdXItbWRcIiBpZD1cImRyb3Bkb3duXCI+XG4gICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206dGV4dC1ibGFjayB0ZXh0LXdoaXRlICBwLTQgbWQ6cC0wIG10LTQgZm9udC1tZWRpdW0gYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbGcgc206YmctaW5kaWdvLTkwMCAgbWQ6c3BhY2UteC04IHJ0bDpzcGFjZS14LXJldmVyc2UgbWQ6ZmxleC1yb3cgbWQ6bXQtMCBtZDpib3JkZXItMCBtZDpiZy10cmFuc3BhcmVudCBkYXJrOmJnLXRyYW5zcGFyZW50IG1kOmRhcms6YmctdHJhbnNwYXJlbnQgZGFyazpib3JkZXItZ3JheS03MDBcIj5cbiAgICA8bGk+XG4gICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9IGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHgtMyAgcm91bmRlZCAgIHNtOmJnLXRyYW5zcGFyZW50IGJnLWluZGlnby05MDAgIGRhcms6aG92ZXI6dGV4dC1ibHVlLTQwMCBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50IGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+SG9tZTwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zICByb3VuZGVkICAgICBzbTpiZy10cmFuc3BhcmVudCBiZy1pbmRpZ28tOTAwIGRhcms6aG92ZXI6dGV4dC1ibHVlLTQwMCBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50IGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+QWJvdXQ8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL0FwcCcpfSBjbGFzc05hbWU9XCJibG9jayBweS0yIHB4LTMgIHJvdW5kZWQgIHNtOmJnLXRyYW5zcGFyZW50IGJnLWluZGlnby05MDAgICBkYXJrOmhvdmVyOnRleHQtYmx1ZS00MDAgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPkFwcDwvYT5cbiAgICAgIDwvbGk+XG4gICAgIFxuICAgIDwvdWw+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmF2PlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VJcGZzQW5kRXRoZXJldW0iLCJOYXZiYXIiLCJjb25uZWN0V2FsbGV0IiwiYWNjb3VudCIsImxvYWRpbmciLCJoYW5kbGVDb25uZWN0V2FsbGV0IiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImRpdiIsIm5hdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiY2xhc3MiLCJhbHQiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwic2xpY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidHlwZSIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1oaWRkZW4iLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsInN0cm9rZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsImlkIiwidWwiLCJsaSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navbar.js\n"));

/***/ })

});