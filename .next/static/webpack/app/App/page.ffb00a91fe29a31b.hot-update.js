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

/***/ "(app-pages-browser)/./src/components/UploadForm.js":
/*!**************************************!*\
  !*** ./src/components/UploadForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useIpfsAndEthereum */ \"(app-pages-browser)/./src/hooks/useIpfsAndEthereum.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/keccak256/lib.esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/strings/lib.esm/utf8.js\");\n/* harmony import */ var _web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3modal/ethers5/react */ \"(app-pages-browser)/./node_modules/@web3modal/ethers5/dist/esm/exports/react.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst UploadForm = ()=>{\n    _s();\n    (0,_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_3__.createWeb3Modal)();\n    const { open } = (0,_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_3__.useWeb3Modal)();\n    const conn = (0,_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_3__.useWalletInfo)().walletInfo;\n    const { connectWallet, uploadFileToIPFS, createPaper } = (0,_hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [unlockTime, setUnlockTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [authorizedUsers, setAuthorizedUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [paperId, setPaperId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showPaperId, setShowPaperId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleFileChange = (e)=>{\n        setFile(e.target.files[0]);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        try {\n            await connectWallet();\n            const ipfsHash = await uploadFileToIPFS(file);\n            const newPaperId = ethers__WEBPACK_IMPORTED_MODULE_4__.keccak256(ethers__WEBPACK_IMPORTED_MODULE_5__.toUtf8Bytes(ipfsHash));\n            const unlockTimestamp = new Date(unlockTime).getTime() / 1000;\n            const authorizedAddresses = authorizedUsers.split(\",\").map((addr)=>addr.trim());\n            await createPaper(newPaperId, ipfsHash, unlockTimestamp, authorizedAddresses);\n            // If the transaction is successful, update the state to show the paperId\n            setPaperId(newPaperId);\n            setShowPaperId(true);\n        } catch (error) {\n            console.error(\"Error submitting form:\", error);\n            alert(\"Failed to submit form\");\n            // Ensure that paperId and showPaperId are not updated on failure\n            setPaperId(\"\");\n            setShowPaperId(false);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleRefresh = ()=>{\n        // Reset form fields and hide paperId div\n        location.reload(true);\n    };\n    const shortPaperId = (paperId, strLen)=>{\n        if (paperId.length <= strLen) return paperId;\n        const seperator = \"...\";\n        let seperatorLength = seperator.length;\n        const charsToShow = strLen - seperatorLength;\n        const frontChars = Math.ceil(charsToShow / 2);\n        const backChars = Math.floor(charsToShow / 2);\n        return paperId.substring(0, frontChars) + seperator + paperId.substring(paperId.length - backChars);\n    };\n    const pid = shortPaperId(paperId, 19);\n    const copylink = (e)=>{\n        navigator.clipboard.writeText(paperId);\n        setCopied(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:w-[25rem] p-4 m-auto border-2 rounded-xl \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"flex flex-col \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block mb-1 text-sm font-medium text-gray-900 dark:text-gray-900\",\n                    htmlFor: \"file\",\n                    children: \"Upload File :\"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleFileChange,\n                    required: true,\n                    className: \"shadow-md block w-full text-sm text-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-600 focus:outline-none dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-600 mb-4 p-2\",\n                    \"aria-describedby\": \"user_avatar_help\",\n                    id: \"file\",\n                    type: \"file\"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block mb-1 text-sm font-medium text-gray-900 dark:text-gray-900\",\n                    htmlFor: \"unlockTime\",\n                    children: \"Time to Unlock :\"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"datetime-local\",\n                    value: unlockTime,\n                    onChange: (e)=>setUnlockTime(e.target.value),\n                    required: true,\n                    className: \"mb-4 p-2 rounded-lg shadow-md \"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900\",\n                    htmlFor: \"authorizedUsers\",\n                    children: \"Addresses of authorized users :\"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"p-2 mb-4 rounded-lg shadow-md \",\n                    type: \"text\",\n                    placeholder: \"Authorized Users (comma separates addresses)\",\n                    value: authorizedUsers,\n                    onChange: (e)=>setAuthorizedUsers(e.target.value),\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined),\n                showPaperId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"paperId\",\n                    className: \"font-medium text-gray-900 dark:text-gray-900\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-1 text-md font-bold text-gray-900 dark:text-gray-900\",\n                                    children: [\n                                        \"File Id: \",\n                                        pid,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: copylink,\n                                    type: \"button\",\n                                    class: \"text-white ml-3 bg-blue-900 hover:bg-blue-700 focus:ring-0 focus:border-transparent font-medium rounded-lg text-sm px-4 py-1 me-2 mb-2  focus:outline-none\",\n                                    children: copied ? \"Copied\" : \"Copy File Id\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] mb-3 font-semibold\",\n                            children: \"( Store the File Id safely to retrieve the file again.)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-900 text-white text-sm w-36 rounded-xl p-2 font-semibold\",\n                            type: \"button\",\n                            onClick: handleRefresh,\n                            children: \"Refresh\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, undefined),\n                !showPaperId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-900 hover:bg-blue-600 hover:transition-colors  text-white w-36 mx-auto rounded-xl p-2 font-semibold\",\n                                type: \"submit\",\n                                disabled: loading,\n                                children: loading ? \"Uploading...\" : \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"relative ml-5 inline-flex  h-12  overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50\",\n                                onClick: ()=>{\n                                    open({\n                                        view: \"\"\n                                    });\n                                },\n                                disabled: loading,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-blue-500 md:px-7 px-4 py-1 text-sm font-semibold text-white backdrop-blur-3xl\",\n                                        children: [\n                                            \"b\",\n                                            conn !== undefined ? \"View Wallet\" : \"Connect Wallet\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UploadForm, \"mI2kh+IZohtBUm0AagLqZ+vKfuI=\", false, function() {\n    return [\n        _web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_3__.useWeb3Modal,\n        _web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_3__.useWalletInfo,\n        _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = UploadForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadForm);\nvar _c;\n$RefreshReg$(_c, \"UploadForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNxQjtBQUM3QjtBQUN3RDtBQUN4RixNQUFNTyxhQUFhOztJQUNqQkgseUVBQWVBO0lBQ2YsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBR0gsc0VBQVlBO0lBQzdCLE1BQU1JLE9BQU9ILHVFQUFhQSxHQUFHSSxVQUFVO0lBRXZDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFLEdBQUdYLHFFQUFrQkE7SUFDM0UsTUFBTSxDQUFDWSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDaUIsaUJBQWlCQyxtQkFBbUIsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ21CLFNBQVNDLFdBQVcsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ3FCLFNBQVNDLFdBQVcsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ3VCLGFBQWFDLGVBQWUsR0FBR3hCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3lCLFFBQU9DLFVBQVUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQ3BDLE1BQU0yQixtQkFBbUIsQ0FBQ0M7UUFDeEJkLFFBQVFjLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7SUFDM0I7SUFFQSxNQUFNQyxlQUFlLE9BQU9IO1FBQzFCQSxFQUFFSSxjQUFjO1FBQ2hCWixXQUFXO1FBRVgsSUFBSTtZQUNGLE1BQU1WO1lBQ04sTUFBTXVCLFdBQVcsTUFBTXRCLGlCQUFpQkU7WUFDeEMsTUFBTXFCLGFBQWFoQyw2Q0FBc0IsQ0FBQ0EsK0NBQXdCLENBQUMrQjtZQUVuRSxNQUFNSyxrQkFBa0IsSUFBSUMsS0FBS3hCLFlBQVl5QixPQUFP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SkEsVUFBVSxpQkFBaUI7Ozs7Ozs7Ozs7O3NDQUc5Qiw4REFBQ2tEO3NDQUNELDRFQUFDZTtnQ0FBT2QsV0FBVTtnQ0FDVmUsU0FBUztvQ0FBTzlFLEtBQUs7d0NBQUVpRixNQUFNO29DQUFHO2dDQUFFO2dDQUNsQ0QsVUFBVXBFOztrREFFbEIsOERBQUNzRTt3Q0FBS25CLFdBQVU7Ozs7OztrREFDaEIsOERBQUNtQjt3Q0FBS25CLFdBQVU7OzRDQUFtSzs0Q0FDN0s5RCxTQUFTa0YsWUFBWSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXJEO0dBdEhNcEY7O1FBRWFGLGtFQUFZQTtRQUNoQkMsbUVBQWFBO1FBRStCSixpRUFBa0JBOzs7S0FMdkVLO0FBd0hOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEZvcm0uanM/NmNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSXBmc0FuZEV0aGVyZXVtIGZyb20gJy4uL2hvb2tzL3VzZUlwZnNBbmRFdGhlcmV1bSc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgY3JlYXRlV2ViM01vZGFsLCB1c2VXZWIzTW9kYWwsIHVzZVdhbGxldEluZm8gfSBmcm9tICdAd2ViM21vZGFsL2V0aGVyczUvcmVhY3QnO1xuY29uc3QgVXBsb2FkRm9ybSA9ICgpID0+IHtcbiAgY3JlYXRlV2ViM01vZGFsKCk7XG4gIGNvbnN0IHsgb3BlbiB9ID0gdXNlV2ViM01vZGFsKClcbiAgY29uc3QgY29ubiA9IHVzZVdhbGxldEluZm8oKS53YWxsZXRJbmZvO1xuXG4gIGNvbnN0IHsgY29ubmVjdFdhbGxldCwgdXBsb2FkRmlsZVRvSVBGUywgY3JlYXRlUGFwZXIgfSA9IHVzZUlwZnNBbmRFdGhlcmV1bSgpO1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VubG9ja1RpbWUsIHNldFVubG9ja1RpbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXV0aG9yaXplZFVzZXJzLCBzZXRBdXRob3JpemVkVXNlcnNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYXBlcklkLCBzZXRQYXBlcklkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dQYXBlcklkLCBzZXRTaG93UGFwZXJJZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb3BpZWQsc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb25uZWN0V2FsbGV0KCk7XG4gICAgICBjb25zdCBpcGZzSGFzaCA9IGF3YWl0IHVwbG9hZEZpbGVUb0lQRlMoZmlsZSk7XG4gICAgICBjb25zdCBuZXdQYXBlcklkID0gZXRoZXJzLnV0aWxzLmtlY2NhazI1NihldGhlcnMudXRpbHMudG9VdGY4Qnl0ZXMoaXBmc0hhc2gpKTtcblxuICAgICAgY29uc3QgdW5sb2NrVGltZXN0YW1wID0gbmV3IERhdGUodW5sb2NrVGltZSkuZ2V0VGltZSgpIC8gMTAwMDtcbiAgICAgIGNvbnN0IGF1dGhvcml6ZWRBZGRyZXNzZXMgPSBhdXRob3JpemVkVXNlcnMuc3BsaXQoJywnKS5tYXAoYWRkciA9PiBhZGRyLnRyaW0oKSk7XG5cbiAgICAgIGF3YWl0IGNyZWF0ZVBhcGVyKG5ld1BhcGVySWQsIGlwZnNIYXNoLCB1bmxvY2tUaW1lc3RhbXAsIGF1dGhvcml6ZWRBZGRyZXNzZXMpO1xuXG4gICAgICAvLyBJZiB0aGUgdHJhbnNhY3Rpb24gaXMgc3VjY2Vzc2Z1bCwgdXBkYXRlIHRoZSBzdGF0ZSB0byBzaG93IHRoZSBwYXBlcklkXG4gICAgICBzZXRQYXBlcklkKG5ld1BhcGVySWQpO1xuICAgICAgc2V0U2hvd1BhcGVySWQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1Ym1pdHRpbmcgZm9ybTonLCBlcnJvcik7XG4gICAgICBhbGVydCgnRmFpbGVkIHRvIHN1Ym1pdCBmb3JtJyk7XG4gICAgICAvLyBFbnN1cmUgdGhhdCBwYXBlcklkIGFuZCBzaG93UGFwZXJJZCBhcmUgbm90IHVwZGF0ZWQgb24gZmFpbHVyZVxuICAgICAgc2V0UGFwZXJJZCgnJyk7XG4gICAgICBzZXRTaG93UGFwZXJJZChmYWxzZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZWZyZXNoID0gKCkgPT4ge1xuICAgIC8vIFJlc2V0IGZvcm0gZmllbGRzIGFuZCBoaWRlIHBhcGVySWQgZGl2XG5cbiAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvcnRQYXBlcklkID0gKHBhcGVySWQsIHN0ckxlbikgPT4ge1xuICAgIGlmIChwYXBlcklkLmxlbmd0aCA8PSBzdHJMZW4pIHJldHVybiBwYXBlcklkO1xuICAgIGNvbnN0IHNlcGVyYXRvciA9ICcuLi4nO1xuICAgIGxldCBzZXBlcmF0b3JMZW5ndGggPSBzZXBlcmF0b3IubGVuZ3RoO1xuICAgIGNvbnN0IGNoYXJzVG9TaG93ID0gc3RyTGVuIC0gc2VwZXJhdG9yTGVuZ3RoO1xuICAgIGNvbnN0IGZyb250Q2hhcnMgPSBNYXRoLmNlaWwoY2hhcnNUb1Nob3cgLyAyKTtcbiAgICBjb25zdCBiYWNrQ2hhcnMgPSBNYXRoLmZsb29yKGNoYXJzVG9TaG93IC8gMik7XG4gICAgcmV0dXJuIChcbiAgICAgIHBhcGVySWQuc3Vic3RyaW5nKDAsIGZyb250Q2hhcnMpICtcbiAgICAgIHNlcGVyYXRvciArXG4gICAgICBwYXBlcklkLnN1YnN0cmluZyhwYXBlcklkLmxlbmd0aCAtIGJhY2tDaGFycylcbiAgICApO1xuICB9O1xuY29uc3QgcGlkID0gc2hvcnRQYXBlcklkKHBhcGVySWQsMTkpO1xuXG5jb25zdCBjb3B5bGluayA9IChlKSA9PiB7XG4gIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHBhcGVySWQpO1xuICBzZXRDb3BpZWQodHJ1ZSk7XG59XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21kOnctWzI1cmVtXSBwLTQgbS1hdXRvIGJvcmRlci0yIHJvdW5kZWQteGwgJz5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCAnPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktOTAwXCIgaHRtbEZvcj1cImZpbGVcIj5VcGxvYWQgRmlsZSA6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSByZXF1aXJlZCBjbGFzc05hbWU9XCJzaGFkb3ctbWQgYmxvY2sgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTYwMCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGJnLWdyYXktNTAgZGFyazp0ZXh0LWdyYXktNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOmJnLWdyYXktNTAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTYwMCBtYi00IHAtMlwiIGFyaWEtZGVzY3JpYmVkYnk9XCJ1c2VyX2F2YXRhcl9oZWxwXCIgaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiAvPlxuICAgICAgICBcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTkwMFwiIGh0bWxGb3I9XCJ1bmxvY2tUaW1lXCI+VGltZSB0byBVbmxvY2sgOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiB2YWx1ZT17dW5sb2NrVGltZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVbmxvY2tUaW1lKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgY2xhc3NOYW1lPSdtYi00IHAtMiByb3VuZGVkLWxnIHNoYWRvdy1tZCAnIC8+XG4gICAgICAgIFxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktOTAwXCIgaHRtbEZvcj1cImF1dGhvcml6ZWRVc2Vyc1wiPkFkZHJlc3NlcyBvZiBhdXRob3JpemVkIHVzZXJzIDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwLTIgbWItNCByb3VuZGVkLWxnIHNoYWRvdy1tZCAnIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBdXRob3JpemVkIFVzZXJzIChjb21tYSBzZXBhcmF0ZXMgYWRkcmVzc2VzKVwiIHZhbHVlPXthdXRob3JpemVkVXNlcnN9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yaXplZFVzZXJzKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgXG4gICAgICAgIHtzaG93UGFwZXJJZCAmJiAoXG4gICAgICAgICAgPGRpdiBpZD1cInBhcGVySWRcIiBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4ICc+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xIHRleHQtbWQgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktOTAwXCI+RmlsZSBJZDoge3BpZH0gPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb3B5bGlua30gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGV4dC13aGl0ZSBtbC0zIGJnLWJsdWUtOTAwIGhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTQgcHktMSBtZS0yIG1iLTIgIGZvY3VzOm91dGxpbmUtbm9uZVwiPntjb3BpZWQgPyAnQ29waWVkJyA6ICAnQ29weSBGaWxlIElkJ308L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVsxNXB4XSBtYi0zIGZvbnQtc2VtaWJvbGQnPiggU3RvcmUgdGhlIEZpbGUgSWQgc2FmZWx5IHRvIHJldHJpZXZlIHRoZSBmaWxlIGFnYWluLik8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS05MDAgdGV4dC13aGl0ZSB0ZXh0LXNtIHctMzYgcm91bmRlZC14bCBwLTIgZm9udC1zZW1pYm9sZCcgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVJlZnJlc2h9PlJlZnJlc2g8L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBcbiAgICAgICAgeyFzaG93UGFwZXJJZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggJz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTkwMCBob3ZlcjpiZy1ibHVlLTYwMCBob3Zlcjp0cmFuc2l0aW9uLWNvbG9ycyAgdGV4dC13aGl0ZSB3LTM2IG14LWF1dG8gcm91bmRlZC14bCBwLTIgZm9udC1zZW1pYm9sZCcgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gJ1VwbG9hZGluZy4uLicgOiAnU3VibWl0J31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVsYXRpdmUgbWwtNSBpbmxpbmUtZmxleCAgaC0xMiAgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQteGwgcC1bMXB4XSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOnJpbmctc2xhdGUtNDAwIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtc2xhdGUtNTBcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge29wZW4oeyB2aWV3OiAnJyB9KX19XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtWy0xMDAwJV0gYW5pbWF0ZS1bc3Bpbl8yc19saW5lYXJfaW5maW5pdGVdIGJnLVtjb25pYy1ncmFkaWVudChmcm9tXzkwZGVnX2F0XzUwJV81MCUsI0UyQ0JGRl8wJSwjMzkzQkIyXzUwJSwjRTJDQkZGXzEwMCUpXVwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaC1mdWxsIHctZnVsbCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC14bCBiZy1ibHVlLTUwMCBtZDpweC03IHB4LTQgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiYWNrZHJvcC1ibHVyLTN4bFwiPlxuICAgICAgICAgICAgICBie2Nvbm4gIT09IHVuZGVmaW5lZCA/ICdWaWV3IFdhbGxldCcgOiAnQ29ubmVjdCBXYWxsZXQnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgXG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VJcGZzQW5kRXRoZXJldW0iLCJldGhlcnMiLCJjcmVhdGVXZWIzTW9kYWwiLCJ1c2VXZWIzTW9kYWwiLCJ1c2VXYWxsZXRJbmZvIiwiVXBsb2FkRm9ybSIsIm9wZW4iLCJjb25uIiwid2FsbGV0SW5mbyIsImNvbm5lY3RXYWxsZXQiLCJ1cGxvYWRGaWxlVG9JUEZTIiwiY3JlYXRlUGFwZXIiLCJmaWxlIiwic2V0RmlsZSIsInVubG9ja1RpbWUiLCJzZXRVbmxvY2tUaW1lIiwiYXV0aG9yaXplZFVzZXJzIiwic2V0QXV0aG9yaXplZFVzZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYXBlcklkIiwic2V0UGFwZXJJZCIsInNob3dQYXBlcklkIiwic2V0U2hvd1BhcGVySWQiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpcGZzSGFzaCIsIm5ld1BhcGVySWQiLCJ1dGlscyIsImtlY2NhazI1NiIsInRvVXRmOEJ5dGVzIiwidW5sb2NrVGltZXN0YW1wIiwiRGF0ZSIsImdldFRpbWUiLCJhdXRob3JpemVkQWRkcmVzc2VzIiwic3BsaXQiLCJtYXAiLCJhZGRyIiwidHJpbSIsImVycm9yIiwiY29uc29sZSIsImFsZXJ0IiwiaGFuZGxlUmVmcmVzaCIsImxvY2F0aW9uIiwicmVsb2FkIiwic2hvcnRQYXBlcklkIiwic3RyTGVuIiwibGVuZ3RoIiwic2VwZXJhdG9yIiwic2VwZXJhdG9yTGVuZ3RoIiwiY2hhcnNUb1Nob3ciLCJmcm9udENoYXJzIiwiTWF0aCIsImNlaWwiLCJiYWNrQ2hhcnMiLCJmbG9vciIsInN1YnN0cmluZyIsInBpZCIsImNvcHlsaW5rIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYXJpYS1kZXNjcmliZWRieSIsImlkIiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzIiwiZGlzYWJsZWQiLCJ2aWV3Iiwic3BhbiIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UploadForm.js\n"));

/***/ })

});