"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/App/page",{

/***/ "(app-pages-browser)/./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useIpfsAndEthereum */ \"(app-pages-browser)/./src/hooks/useIpfsAndEthereum.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const { connectWallet, account, loading } = (0,_hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const handleConnectWallet = async ()=>{\n        console.log(\"Button clicked\");\n        connectWallet();\n    };\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"backdrop-blur-sm  fixed w-full h-[73px]  z-20 top-0 start-0 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-xl flex flex-wrap items-center dark:text-blue-600 text-blue-600  justify-between mx-auto p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        className: \"flex items-center space-x-3 rtl:space-x-reverse\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/logo2.png\",\n                                class: \"sm:h-12 h-9\",\n                                alt: \" Logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                lineNumber: 20,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"self-center font-mono md:text-3xl text-2xl  sm:font-semibold font-bold whitespace-nowrap \",\n                                children: \"DeFile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                lineNumber: 21,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                        lineNumber: 19,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"relative  md:inline-flex sm:hidden hidden h-12  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50\",\n                                onClick: handleConnectWallet,\n                                disabled: loading,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-500 md:px-7 px-4 py-1 text-sm font-semibold text-white backdrop-blur-3xl\",\n                                        children: account ? \"Connected: \".concat(account.slice(0, 6), \"...\").concat(account.slice(-4)) : \"Connect Wallet\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                lineNumber: 24,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>document.getElementById(\"dropdown\").classList.toggle(\"hidden\"),\n                                type: \"button\",\n                                className: \"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600\",\n                                \"aria-controls\": \"dropdown\",\n                                \"aria-expanded\": \"false\",\n                                \"aria-hidden\": \"true\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Open main menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-5 h-5\",\n                                        \"aria-hidden\": \"true\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 17 14\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            stroke: \"currentColor\",\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: \"2\",\n                                            d: \"M1 1h15M1 7h15M1 13h15\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                lineNumber: 35,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                        lineNumber: 23,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-center justify-between hidden w-full md:flex md:w-auto md:order-1 backdrop-blur-md\",\n                        id: \"dropdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-col sm:text-black text-white  p-4 md:p-0 mt-4 font-medium backdrop-blur-md border border-gray-100 rounded-lg sm:bg-indigo-900  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: ()=>router.push(\"/\"),\n                                        className: \"block py-2 px-3  rounded   sm:bg-transparent bg-indigo-900  dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"block py-2 px-3  rounded     sm:bg-transparent bg-indigo-900 dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: ()=>router.push(\"/App\"),\n                                        className: \"block py-2 px-3  rounded  sm:bg-transparent bg-indigo-900   dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700\",\n                                        children: \"App\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                            lineNumber: 43,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                        lineNumber: 42,\n                        columnNumber: 3\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n                lineNumber: 18,\n                columnNumber: 3\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/navbar.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"AV11KGoMGoqBmefhOpG0xANvq58=\", false, function() {\n    return [\n        _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQjtBQUNrQjtBQUNnQjtBQUU1RCxNQUFNRyxTQUFTOztJQUNiLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHSixxRUFBa0JBO0lBRTlELE1BQU1LLHNCQUFzQjtRQUMxQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2JMO0lBQ0Q7SUFDRixNQUFNTSxTQUFTVCwwREFBU0E7SUFFdEIscUJBQ0UsOERBQUNVO2tCQUNHLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNyQiw0RUFBQ0Y7Z0JBQUlFLFdBQVc7O2tDQUNoQiw4REFBQ0M7d0JBQUVDLE1BQUs7d0JBQUlGLFdBQVU7OzBDQUNsQiw4REFBQ0c7Z0NBQUlDLEtBQUk7Z0NBQWFDLE9BQU07Z0NBQWNDLEtBQUk7Ozs7OzswQ0FDOUMsOERBQUNDO2dDQUFLUCxXQUFVOzBDQUE0Rjs7Ozs7Ozs7Ozs7O2tDQUVoSCw4REFBQ0Y7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDUTtnQ0FDQ1IsV0FBVTtnQ0FDVlMsU0FBU2Y7Z0NBQ1RnQixVQUFVakI7O2tEQUVWLDhEQUFDYzt3Q0FBS1AsV0FBVTs7Ozs7O2tEQUNoQiw4REFBQ087d0NBQUtQLFdBQVU7a0RBQ2JSLFVBQVUsY0FBdUNBLE9BQXpCQSxRQUFRbUIsS0FBSyxDQUFDLEdBQUcsSUFBRyxPQUF1QixPQUFsQm5CLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxNQUFPOzs7Ozs7Ozs7Ozs7MENBSWxGLDhEQUFDSDtnQ0FBT0MsU0FBUyxJQUFNRyxTQUFTQyxjQUFjLENBQUMsWUFBWUMsU0FBUyxDQUFDQyxNQUFNLENBQUM7Z0NBQVdDLE1BQUs7Z0NBQVNoQixXQUFVO2dDQUF3TmlCLGlCQUFjO2dDQUFXQyxpQkFBYztnQ0FBUUMsZUFBWTs7a0RBQzFYLDhEQUFDWjt3Q0FBS1AsV0FBVTtrREFBVTs7Ozs7O2tEQUMxQiw4REFBQ29CO3dDQUFJcEIsV0FBVTt3Q0FBVW1CLGVBQVk7d0NBQU9FLE9BQU07d0NBQTZCQyxNQUFLO3dDQUFPQyxTQUFRO2tEQUMvRiw0RUFBQ0M7NENBQUtDLFFBQU87NENBQWVDLGVBQWM7NENBQVFDLGdCQUFlOzRDQUFRQyxhQUFZOzRDQUFJQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJckcsOERBQUMvQjt3QkFBSUUsV0FBVTt3QkFBMkY4QixJQUFHO2tDQUMzRyw0RUFBQ0M7NEJBQUcvQixXQUFVOzs4Q0FDZCw4REFBQ2dDOzhDQUNHLDRFQUFDL0I7d0NBQUVRLFNBQVMsSUFBTVosT0FBT29DLElBQUksQ0FBQzt3Q0FBTWpDLFdBQVU7a0RBQXlJOzs7Ozs7Ozs7Ozs4Q0FFekwsOERBQUNnQzs4Q0FDQyw0RUFBQy9CO3dDQUFFQyxNQUFLO3dDQUFJRixXQUFVO2tEQUEwSTs7Ozs7Ozs7Ozs7OENBRWxLLDhEQUFDZ0M7OENBQ0MsNEVBQUMvQjt3Q0FBRVEsU0FBUyxJQUFNWixPQUFPb0MsSUFBSSxDQUFDO3dDQUFTakMsV0FBVTtrREFBeUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWxNO0dBdkRNVjs7UUFDd0NELGlFQUFrQkE7UUFNakRELHNEQUFTQTs7O0tBUGxCRTtBQXlETiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanM/YTU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHVzZUlwZnNBbmRFdGhlcmV1bSBmcm9tICdAL2hvb2tzL3VzZUlwZnNBbmRFdGhlcmV1bSc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgeyBjb25uZWN0V2FsbGV0LCBhY2NvdW50LCBsb2FkaW5nIH0gPSB1c2VJcGZzQW5kRXRoZXJldW0oKTtcblxuICBjb25zdCBoYW5kbGVDb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIGNsaWNrZWRcIik7XG4gICBjb25uZWN0V2FsbGV0KCk7XG4gIH07XG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmFja2Ryb3AtYmx1ci1zbSAgZml4ZWQgdy1mdWxsIGgtWzczcHhdICB6LTIwIHRvcC0wIHN0YXJ0LTAgXCI+XG4gIDxkaXYgY2xhc3NOYW1lID1cIm1heC13LXNjcmVlbi14bCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZGFyazp0ZXh0LWJsdWUtNjAwIHRleHQtYmx1ZS02MDAgIGp1c3RpZnktYmV0d2VlbiBteC1hdXRvIHAtNFwiPlxuICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBydGw6c3BhY2UteC1yZXZlcnNlXCI+XG4gICAgICA8aW1nIHNyYz1cIi9sb2dvMi5wbmdcIiBjbGFzcz1cInNtOmgtMTIgaC05XCIgYWx0PVwiIExvZ29cIi8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciBmb250LW1vbm8gbWQ6dGV4dC0zeGwgdGV4dC0yeGwgIHNtOmZvbnQtc2VtaWJvbGQgZm9udC1ib2xkIHdoaXRlc3BhY2Utbm93cmFwIFwiPkRlRmlsZTwvc3Bhbj5cbiAgPC9hPlxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6b3JkZXItMiBzcGFjZS14LTMgbWQ6c3BhY2UteC0wIHJ0bDpzcGFjZS14LXJldmVyc2VcIj5cbiAgICAgIDxidXR0b24gXG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlICBtZDppbmxpbmUtZmxleCBzbTpoaWRkZW4gaGlkZGVuIGgtMTIgIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWZ1bGwgcC1bMXB4XSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctc2xhdGUtNDAwIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtc2xhdGUtNTBcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25uZWN0V2FsbGV0fVxuICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtWy0xMDAwJV0gYW5pbWF0ZS1bc3Bpbl8yc19saW5lYXJfaW5maW5pdGVdIGJnLVtjb25pYy1ncmFkaWVudChmcm9tXzkwZGVnX2F0XzUwJV81MCUsI0UyQ0JGRl8wJSwjMzkzQkIyXzUwJSwjRTJDQkZGXzEwMCUpXVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGgtZnVsbCB3LWZ1bGwgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1ibHVlLTUwMCBtZDpweC03IHB4LTQgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiYWNrZHJvcC1ibHVyLTN4bFwiPlxuICAgICAgICAgIHthY2NvdW50ID8gYENvbm5lY3RlZDogJHthY2NvdW50LnNsaWNlKDAsIDYpfS4uLiR7YWNjb3VudC5zbGljZSgtNCl9YCA6ICdDb25uZWN0IFdhbGxldCd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG48YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiB3LTEwIGgtMTAganVzdGlmeS1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOnRleHQtZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTQwMCAgZGFyazpmb2N1czpyaW5nLWdyYXktNjAwXCIgYXJpYS1jb250cm9scz1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAxNyAxNFwiPlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMSAxaDE1TTEgN2gxNU0xIDEzaDE1XCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoaWRkZW4gdy1mdWxsIG1kOmZsZXggbWQ6dy1hdXRvIG1kOm9yZGVyLTEgYmFja2Ryb3AtYmx1ci1tZFwiIGlkPVwiZHJvcGRvd25cIj5cbiAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTp0ZXh0LWJsYWNrIHRleHQtd2hpdGUgIHAtNCBtZDpwLTAgbXQtNCBmb250LW1lZGl1bSBiYWNrZHJvcC1ibHVyLW1kIGJvcmRlciBib3JkZXItZ3JheS0xMDAgcm91bmRlZC1sZyBzbTpiZy1pbmRpZ28tOTAwICBtZDpzcGFjZS14LTggcnRsOnNwYWNlLXgtcmV2ZXJzZSBtZDpmbGV4LXJvdyBtZDptdC0wIG1kOmJvcmRlci0wIG1kOmJnLXRyYW5zcGFyZW50IGRhcms6YmctdHJhbnNwYXJlbnQgbWQ6ZGFyazpiZy10cmFuc3BhcmVudCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgIDxsaT5cbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0gY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zICByb3VuZGVkICAgc206YmctdHJhbnNwYXJlbnQgYmctaW5kaWdvLTkwMCAgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNDAwIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnQgZGFyazpib3JkZXItZ3JheS03MDBcIj5Ib21lPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHB4LTMgIHJvdW5kZWQgICAgIHNtOmJnLXRyYW5zcGFyZW50IGJnLWluZGlnby05MDAgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNDAwIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnQgZGFyazpib3JkZXItZ3JheS03MDBcIj5BYm91dDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvQXBwJyl9IGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHgtMyAgcm91bmRlZCAgc206YmctdHJhbnNwYXJlbnQgYmctaW5kaWdvLTkwMCAgIGRhcms6aG92ZXI6dGV4dC1ibHVlLTQwMCBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50IGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+QXBwPC9hPlxuICAgICAgPC9saT5cbiAgICAgXG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uYXY+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInVzZUlwZnNBbmRFdGhlcmV1bSIsIk5hdmJhciIsImNvbm5lY3RXYWxsZXQiLCJhY2NvdW50IiwibG9hZGluZyIsImhhbmRsZUNvbm5lY3RXYWxsZXQiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJjbGFzcyIsImFsdCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJzbGljZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0eXBlIiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWhpZGRlbiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJwYXRoIiwic3Ryb2tlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwiaWQiLCJ1bCIsImxpIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar.js\n"));

/***/ })

});