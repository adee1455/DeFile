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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useIpfsAndEthereum */ \"(app-pages-browser)/./src/hooks/useIpfsAndEthereum.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/keccak256/lib.esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/strings/lib.esm/utf8.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst UploadForm = ()=>{\n    _s();\n    const { connectWallet, uploadFileToIPFS, createPaper } = (0,_hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [unlockTime, setUnlockTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [authorizedUsers, setAuthorizedUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [paperId, setPaperId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showPaperId, setShowPaperId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleFileChange = (e)=>{\n        setFile(e.target.files[0]);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        try {\n            await connectWallet();\n            const ipfsHash = await uploadFileToIPFS(file);\n            const newPaperId = ethers__WEBPACK_IMPORTED_MODULE_3__.keccak256(ethers__WEBPACK_IMPORTED_MODULE_4__.toUtf8Bytes(ipfsHash));\n            const unlockTimestamp = new Date(unlockTime).getTime() / 1000;\n            const authorizedAddresses = authorizedUsers.split(\",\").map((addr)=>addr.trim());\n            await createPaper(newPaperId, ipfsHash, unlockTimestamp, authorizedAddresses);\n            // If the transaction is successful, update the state to show the paperId\n            setPaperId(newPaperId);\n            setShowPaperId(true);\n        } catch (error) {\n            console.error(\"Error submitting form:\", error);\n            alert(\"Failed to submit form\");\n            // Ensure that paperId and showPaperId are not updated on failure\n            setPaperId(\"\");\n            setShowPaperId(false);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleRefresh = ()=>{\n        // Reset form fields and hide paperId div\n        setFile(null);\n        setUnlockTime(\"\");\n        setAuthorizedUsers(\"\");\n        setPaperId(\"\");\n        setShowPaperId(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:w-[25rem] p-4 m-auto border-2 rounded-xl \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"flex flex-col \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block mb-1 text-sm font-medium text-gray-900 dark:text-gray-900\",\n                    htmlFor: \"file\",\n                    children: \"Upload File :\"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleFileChange,\n                    required: true,\n                    className: \"shadow-md block w-full text-sm text-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-600 focus:outline-none dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-600 mb-4 p-2\",\n                    \"aria-describedby\": \"user_avatar_help\",\n                    id: \"file\",\n                    type: \"file\"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block mb-1 text-sm font-medium text-gray-900 dark:text-gray-900\",\n                    htmlFor: \"unlockTime\",\n                    children: \"Time to Unlock :\"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"datetime-local\",\n                    value: unlockTime,\n                    onChange: (e)=>setUnlockTime(e.target.value),\n                    required: true,\n                    className: \"mb-4 p-2 rounded-lg shadow-md \"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900\",\n                    htmlFor: \"authorizedUsers\",\n                    children: \"Addresses of authorized users :\"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"p-2 mb-4 rounded-lg shadow-md \",\n                    type: \"text\",\n                    placeholder: \"Authorized Users (comma separates addresses)\",\n                    value: authorizedUsers,\n                    onChange: (e)=>setAuthorizedUsers(e.target.value),\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                showPaperId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"paperId\",\n                    className: \"font-medium text-gray-900 dark:text-gray-900\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-1 text-sm font-medium text-gray-900 dark:text-gray-900\",\n                            children: \"FileId: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[10px] mb-2\",\n                            children: paperId\n                        }, void 0, false, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[12px] mb-3\",\n                            children: \"( Store the File Id safely to retrieve the file again.)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-900 text-white text-sm w-36 rounded-xl p-2 font-semibold\",\n                            type: \"button\",\n                            onClick: handleRefresh,\n                            children: \"Refresh\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, undefined),\n                !showPaperId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-900 hover:bg-blue-600 hover:transition-colors  text-white w-36 mx-auto rounded-xl p-2 font-semibold\",\n                    type: \"submit\",\n                    disabled: loading,\n                    children: loading ? \"Uploading...\" : \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UploadForm.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UploadForm, \"6YXZELpdUgV9puIxTl292XA4VuU=\", false, function() {\n    return [\n        _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = UploadForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadForm);\nvar _c;\n$RefreshReg$(_c, \"UploadForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ3FCO0FBQzdCO0FBRWhDLE1BQU1JLGFBQWE7O0lBQ2pCLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFLEdBQUdMLHFFQUFrQkE7SUFDM0UsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLGlCQUFpQkMsbUJBQW1CLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2lCLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1tQixtQkFBbUIsQ0FBQ0M7UUFDeEJaLFFBQVFZLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7SUFDM0I7SUFFQSxNQUFNQyxlQUFlLE9BQU9IO1FBQzFCQSxFQUFFSSxjQUFjO1FBQ2hCVixXQUFXO1FBRVgsSUFBSTtZQUNGLE1BQU1WO1lBQ04sTUFBTXFCLFdBQVcsTUFBTXBCLGlCQUFpQkU7WUFDeEMsTUFBTW1CLGFBQWF4Qiw2Q0FBc0IsQ0FBQ0EsK0NBQXdCLENBQUN1QjtZQUVuRSxNQUFNSyxrQkFBa0IsSUFBSUMsS0FBS3RCLFlBQVl1QixPQUFPLEtBQUs7WUFDekQsTUFBTUMsc0JBQXNCdEIsZ0JBQWdCdUIsS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsSUFBSTtZQUU1RSxNQUFNL0IsWUFBWW9CLFlBQVlELFVBQVVLLGlCQUFpQkc7WUFFekQseUVBQXlFO1lBQ3pFakIsV0FBV1U7WUFDWFIsZUFBZTtRQUNqQixFQUFFLE9BQU9vQixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1lBQ3hDRSxNQUFNO1lBQ04saUVBQWlFO1lBQ2pFeEIsV0FBVztZQUNYRSxlQUFlO1FBQ2pCLFNBQVU7WUFDUkosV0FBVztRQUNiO0lBQ0Y7SUFFQSxNQUFNMkIsZ0JBQWdCO1FBQ3BCLHlDQUF5QztRQUN6Q2pDLFFBQVE7UUFDUkUsY0FBYztRQUNkRSxtQkFBbUI7UUFDbkJJLFdBQVc7UUFDWEUsZUFBZTtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDd0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0MsVUFBVXRCO1lBQWNvQixXQUFVOzs4QkFDdEMsOERBQUNHO29CQUFNSCxXQUFVO29CQUFrRUksU0FBUTs4QkFBTzs7Ozs7OzhCQUNsRyw4REFBQ0M7b0JBQU1DLFVBQVU5QjtvQkFBa0IrQixRQUFRO29CQUFDUCxXQUFVO29CQUFrTVEsb0JBQWlCO29CQUFtQkMsSUFBRztvQkFBT0MsTUFBSzs7Ozs7OzhCQUUzUyw4REFBQ1A7b0JBQU1ILFdBQVU7b0JBQWtFSSxTQUFROzhCQUFhOzs7Ozs7OEJBQ3hHLDhEQUFDQztvQkFBTUssTUFBSztvQkFBaUJDLE9BQU83QztvQkFBWXdDLFVBQVUsQ0FBQzdCLElBQU1WLGNBQWNVLEVBQUVDLE1BQU0sQ0FBQ2lDLEtBQUs7b0JBQUdKLFFBQVE7b0JBQUNQLFdBQVU7Ozs7Ozs4QkFFbkgsOERBQUNHO29CQUFNSCxXQUFVO29CQUFrRUksU0FBUTs4QkFBa0I7Ozs7Ozs4QkFDN0csOERBQUNDO29CQUFNTCxXQUFVO29CQUFpQ1UsTUFBSztvQkFBT0UsYUFBWTtvQkFBK0NELE9BQU8zQztvQkFBaUJzQyxVQUFVLENBQUM3QixJQUFNUixtQkFBbUJRLEVBQUVDLE1BQU0sQ0FBQ2lDLEtBQUs7b0JBQUdKLFFBQVE7Ozs7OztnQkFFN01qQyw2QkFDQyw4REFBQ3lCO29CQUFJVSxJQUFHO29CQUFVVCxXQUFVOztzQ0FDMUIsOERBQUNhOzRCQUFFYixXQUFVO3NDQUE0RDs7Ozs7O3NDQUN6RSw4REFBQ2E7NEJBQUViLFdBQVU7c0NBQW9CNUI7Ozs7OztzQ0FDakMsOERBQUN5Qzs0QkFBRWIsV0FBVTtzQ0FBbUI7Ozs7OztzQ0FDaEMsOERBQUNjOzRCQUFPZCxXQUFVOzRCQUFtRVUsTUFBSzs0QkFBU0ssU0FBU2pCO3NDQUFlOzs7Ozs7Ozs7Ozs7Z0JBSzlILENBQUN4Qiw2QkFDQSw4REFBQ3dDO29CQUFPZCxXQUFVO29CQUE4R1UsTUFBSztvQkFBU00sVUFBVTlDOzhCQUNySkEsVUFBVSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hDO0dBakZNVjs7UUFDcURGLGlFQUFrQkE7OztLQUR2RUU7QUFtRk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXBsb2FkRm9ybS5qcz82Y2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJcGZzQW5kRXRoZXJldW0gZnJvbSAnLi4vaG9va3MvdXNlSXBmc0FuZEV0aGVyZXVtJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5cbmNvbnN0IFVwbG9hZEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29ubmVjdFdhbGxldCwgdXBsb2FkRmlsZVRvSVBGUywgY3JlYXRlUGFwZXIgfSA9IHVzZUlwZnNBbmRFdGhlcmV1bSgpO1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VubG9ja1RpbWUsIHNldFVubG9ja1RpbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXV0aG9yaXplZFVzZXJzLCBzZXRBdXRob3JpemVkVXNlcnNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYXBlcklkLCBzZXRQYXBlcklkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dQYXBlcklkLCBzZXRTaG93UGFwZXJJZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb25uZWN0V2FsbGV0KCk7XG4gICAgICBjb25zdCBpcGZzSGFzaCA9IGF3YWl0IHVwbG9hZEZpbGVUb0lQRlMoZmlsZSk7XG4gICAgICBjb25zdCBuZXdQYXBlcklkID0gZXRoZXJzLnV0aWxzLmtlY2NhazI1NihldGhlcnMudXRpbHMudG9VdGY4Qnl0ZXMoaXBmc0hhc2gpKTtcblxuICAgICAgY29uc3QgdW5sb2NrVGltZXN0YW1wID0gbmV3IERhdGUodW5sb2NrVGltZSkuZ2V0VGltZSgpIC8gMTAwMDtcbiAgICAgIGNvbnN0IGF1dGhvcml6ZWRBZGRyZXNzZXMgPSBhdXRob3JpemVkVXNlcnMuc3BsaXQoJywnKS5tYXAoYWRkciA9PiBhZGRyLnRyaW0oKSk7XG5cbiAgICAgIGF3YWl0IGNyZWF0ZVBhcGVyKG5ld1BhcGVySWQsIGlwZnNIYXNoLCB1bmxvY2tUaW1lc3RhbXAsIGF1dGhvcml6ZWRBZGRyZXNzZXMpO1xuXG4gICAgICAvLyBJZiB0aGUgdHJhbnNhY3Rpb24gaXMgc3VjY2Vzc2Z1bCwgdXBkYXRlIHRoZSBzdGF0ZSB0byBzaG93IHRoZSBwYXBlcklkXG4gICAgICBzZXRQYXBlcklkKG5ld1BhcGVySWQpO1xuICAgICAgc2V0U2hvd1BhcGVySWQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1Ym1pdHRpbmcgZm9ybTonLCBlcnJvcik7XG4gICAgICBhbGVydCgnRmFpbGVkIHRvIHN1Ym1pdCBmb3JtJyk7XG4gICAgICAvLyBFbnN1cmUgdGhhdCBwYXBlcklkIGFuZCBzaG93UGFwZXJJZCBhcmUgbm90IHVwZGF0ZWQgb24gZmFpbHVyZVxuICAgICAgc2V0UGFwZXJJZCgnJyk7XG4gICAgICBzZXRTaG93UGFwZXJJZChmYWxzZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZWZyZXNoID0gKCkgPT4ge1xuICAgIC8vIFJlc2V0IGZvcm0gZmllbGRzIGFuZCBoaWRlIHBhcGVySWQgZGl2XG4gICAgc2V0RmlsZShudWxsKTtcbiAgICBzZXRVbmxvY2tUaW1lKCcnKTtcbiAgICBzZXRBdXRob3JpemVkVXNlcnMoJycpO1xuICAgIHNldFBhcGVySWQoJycpO1xuICAgIHNldFNob3dQYXBlcklkKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZDp3LVsyNXJlbV0gcC00IG0tYXV0byBib3JkZXItMiByb3VuZGVkLXhsICc+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgJz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTkwMFwiIGh0bWxGb3I9XCJmaWxlXCI+VXBsb2FkIEZpbGUgOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gcmVxdWlyZWQgY2xhc3NOYW1lPVwic2hhZG93LW1kIGJsb2NrIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS02MDAgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBiZy1ncmF5LTUwIGRhcms6dGV4dC1ncmF5LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpiZy1ncmF5LTUwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS02MDAgbWItNCBwLTJcIiBhcmlhLWRlc2NyaWJlZGJ5PVwidXNlcl9hdmF0YXJfaGVscFwiIGlkPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0xIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS05MDBcIiBodG1sRm9yPVwidW5sb2NrVGltZVwiPlRpbWUgdG8gVW5sb2NrIDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgdmFsdWU9e3VubG9ja1RpbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VW5sb2NrVGltZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIGNsYXNzTmFtZT0nbWItNCBwLTIgcm91bmRlZC1sZyBzaGFkb3ctbWQgJyAvPlxuICAgICAgICBcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTkwMFwiIGh0bWxGb3I9XCJhdXRob3JpemVkVXNlcnNcIj5BZGRyZXNzZXMgb2YgYXV0aG9yaXplZCB1c2VycyA6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncC0yIG1iLTQgcm91bmRlZC1sZyBzaGFkb3ctbWQgJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXV0aG9yaXplZCBVc2VycyAoY29tbWEgc2VwYXJhdGVzIGFkZHJlc3NlcylcIiB2YWx1ZT17YXV0aG9yaXplZFVzZXJzfSBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcml6ZWRVc2VycyhlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgIFxuICAgICAgICB7c2hvd1BhcGVySWQgJiYgKFxuICAgICAgICAgIDxkaXYgaWQ9XCJwYXBlcklkXCIgY2xhc3NOYW1lPSdmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS05MDBcIj5GaWxlSWQ6IDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1bMTBweF0gbWItMic+e3BhcGVySWR9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVsxMnB4XSBtYi0zJz4oIFN0b3JlIHRoZSBGaWxlIElkIHNhZmVseSB0byByZXRyaWV2ZSB0aGUgZmlsZSBhZ2Fpbi4pPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtOTAwIHRleHQtd2hpdGUgdGV4dC1zbSB3LTM2IHJvdW5kZWQteGwgcC0yIGZvbnQtc2VtaWJvbGQnIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVSZWZyZXNofT5SZWZyZXNoPC9idXR0b24+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgXG4gICAgICAgIHshc2hvd1BhcGVySWQgJiYgKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTkwMCBob3ZlcjpiZy1ibHVlLTYwMCBob3Zlcjp0cmFuc2l0aW9uLWNvbG9ycyAgdGV4dC13aGl0ZSB3LTM2IG14LWF1dG8gcm91bmRlZC14bCBwLTIgZm9udC1zZW1pYm9sZCcgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gJ1VwbG9hZGluZy4uLicgOiAnU3VibWl0J31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgKX1cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUlwZnNBbmRFdGhlcmV1bSIsImV0aGVycyIsIlVwbG9hZEZvcm0iLCJjb25uZWN0V2FsbGV0IiwidXBsb2FkRmlsZVRvSVBGUyIsImNyZWF0ZVBhcGVyIiwiZmlsZSIsInNldEZpbGUiLCJ1bmxvY2tUaW1lIiwic2V0VW5sb2NrVGltZSIsImF1dGhvcml6ZWRVc2VycyIsInNldEF1dGhvcml6ZWRVc2VycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGFwZXJJZCIsInNldFBhcGVySWQiLCJzaG93UGFwZXJJZCIsInNldFNob3dQYXBlcklkIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaXBmc0hhc2giLCJuZXdQYXBlcklkIiwidXRpbHMiLCJrZWNjYWsyNTYiLCJ0b1V0ZjhCeXRlcyIsInVubG9ja1RpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiYXV0aG9yaXplZEFkZHJlc3NlcyIsInNwbGl0IiwibWFwIiwiYWRkciIsInRyaW0iLCJlcnJvciIsImNvbnNvbGUiLCJhbGVydCIsImhhbmRsZVJlZnJlc2giLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UploadForm.js\n"));

/***/ })

});