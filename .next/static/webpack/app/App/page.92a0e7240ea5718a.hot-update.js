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

/***/ "(app-pages-browser)/./src/components/UnlockForm.js":
/*!**************************************!*\
  !*** ./src/components/UnlockForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useIpfsAndEthereum */ \"(app-pages-browser)/./src/hooks/useIpfsAndEthereum.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst UnlockForm = ()=>{\n    _s();\n    const { contract, loading } = (0,_hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Use the hook\n    const [paperId, setPaperId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fileUrl, setFileUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loadingForm, setLoadingForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileContent, setFileContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loadings, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoadingForm(true);\n        try {\n            if (loading) {\n                alert(\"Contract is initializing, please wait.\");\n                return;\n            }\n            if (!contract) {\n                alert(\"Smart contract is not initialized.\");\n                return;\n            }\n            // Call the unlockPaper function from the smart contract\n            const tx = await contract.unlockPaper(paperId);\n            await tx.wait();\n            // Fetch IPFS hash\n            const ipfsHash = await contract.getIpfsHash(paperId);\n            const ipfsUrl = \"https://black-worldwide-tiger-431.mypinata.cloud/ipfs/\".concat(ipfsHash);\n            // Fetch file content from IPFS\n            const response = await fetch(ipfsUrl);\n            const data = await response.blob();\n            setFileContent(data);\n            setFileUrl(ipfsUrl);\n            alert(\"Paper unlocked successfully\");\n        } catch (error) {\n            console.error(\"Error unlocking file:\", error);\n            alert(\"Error unlocking file. Make sure you are authorized and the unlock time has passed.\");\n        } finally{\n            setLoadingForm(false);\n        }\n    };\n    const handleDownload = ()=>{\n        if (fileContent) {\n            const url = URL.createObjectURL(fileContent);\n            const a = document.createElement(\"a\");\n            a.style.display = \"none\";\n            a.href = url;\n            a.download = \"file_download\".concat(fileContent);\n            document.body.appendChild(a);\n            a.click();\n            URL.revokeObjectURL(url);\n            document.body.removeChild(a);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-4 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900\",\n                        htmlFor: \"PaperId\",\n                        children: \"Enter File Id :\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UnlockForm.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"p-2 mb-4 rounded-lg shadow-md \",\n                        type: \"text\",\n                        placeholder: \"File ID\",\n                        value: paperId,\n                        onChange: (e)=>setPaperId(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UnlockForm.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-900 hover:bg-blue-600 hover:transition-colors text-white w-36 text-sm mx-auto rounded-xl p-2 font-semibold\",\n                        disabled: loading,\n                        children: loading ? \"Unlocking...\" : \"Unlock\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UnlockForm.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UnlockForm.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            fileUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 flex \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: fileUrl,\n                        className: \"text-center bg-blue-700 text-white w-36 text-sm mx-auto rounded-xl p-2 font-semibold\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: \"View File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UnlockForm.js\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-700 text-white w-36 text-sm mx-auto rounded-xl p-2 font-semibold\",\n                        onClick: handleDownload,\n                        children: \"Download File\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UnlockForm.js\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UnlockForm.js\",\n                lineNumber: 76,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adee/Web3-Dev/DeFile/src/components/UnlockForm.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UnlockForm, \"rgiLF8hetxwuCsCUTqE3oayaN70=\", false, function() {\n    return [\n        _hooks_useIpfsAndEthereum__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = UnlockForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnlockForm);\nvar _c;\n$RefreshReg$(_c, \"UnlockForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VubG9ja0Zvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN3QztBQUNSO0FBQzZCO0FBRTdELE1BQU1JLGFBQWE7O0lBQ2YsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRSxHQUFHSCxxRUFBa0JBLElBQUksZUFBZTtJQUNuRSxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYyxVQUFVQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBR3hDLE1BQU1nQixlQUFlLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCUCxlQUFlO1FBRWYsSUFBSTtZQUNBLElBQUlOLFNBQVM7Z0JBQ1RjLE1BQU07Z0JBQ047WUFDSjtZQUVBLElBQUksQ0FBQ2YsVUFBVTtnQkFDWGUsTUFBTTtnQkFDTjtZQUNKO1lBRUEsd0RBQXdEO1lBQ3hELE1BQU1DLEtBQUssTUFBTWhCLFNBQVNpQixXQUFXLENBQUNmO1lBQ3RDLE1BQU1jLEdBQUdFLElBQUk7WUFFYixrQkFBa0I7WUFDbEIsTUFBTUMsV0FBVyxNQUFNbkIsU0FBU29CLFdBQVcsQ0FBQ2xCO1lBQzVDLE1BQU1tQixVQUFVLHlEQUFrRSxPQUFURjtZQUV6RSwrQkFBK0I7WUFDL0IsTUFBTUcsV0FBVyxNQUFNQyxNQUFNRjtZQUM3QixNQUFNRyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENoQixlQUFlZTtZQUNmbkIsV0FBV2dCO1lBRVhOLE1BQU07UUFDVixFQUFFLE9BQU9XLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkNYLE1BQU07UUFDVixTQUFVO1lBQ05SLGVBQWU7UUFDbkI7SUFDSjtJQUVBLE1BQU1xQixpQkFBaUI7UUFDbkIsSUFBSXBCLGFBQWE7WUFDYixNQUFNcUIsTUFBTUMsSUFBSUMsZUFBZSxDQUFDdkI7WUFDaEMsTUFBTXdCLElBQUlDLFNBQVNDLGFBQWEsQ0FBQztZQUNqQ0YsRUFBRUcsS0FBSyxDQUFDQyxPQUFPLEdBQUc7WUFDbEJKLEVBQUVLLElBQUksR0FBR1I7WUFDVEcsRUFBRU0sUUFBUSxHQUFHLGdCQUE0QixPQUFaOUI7WUFDN0J5QixTQUFTTSxJQUFJLENBQUNDLFdBQVcsQ0FBQ1I7WUFDMUJBLEVBQUVTLEtBQUs7WUFDUFgsSUFBSVksZUFBZSxDQUFDYjtZQUNwQkksU0FBU00sSUFBSSxDQUFDSSxXQUFXLENBQUNYO1FBQzlCO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNDO2dCQUFLQyxVQUFVbkM7Z0JBQWNpQyxXQUFVOztrQ0FDeEMsOERBQUNHO3dCQUFNSCxXQUFVO3dCQUFrRUksU0FBUTtrQ0FBVTs7Ozs7O2tDQUNyRyw4REFBQ0M7d0JBQU1MLFdBQVU7d0JBQWlDTSxNQUFLO3dCQUFPQyxhQUFZO3dCQUFVQyxPQUFPbkQ7d0JBQVNvRCxVQUFVLENBQUN6QyxJQUFNVixXQUFXVSxFQUFFMEMsTUFBTSxDQUFDRixLQUFLO3dCQUFHRyxRQUFROzs7Ozs7a0NBRXJKLDhEQUFDQzt3QkFBT04sTUFBSzt3QkFBU04sV0FBVTt3QkFBcUhhLFVBQVV6RDtrQ0FBVUEsVUFBVSxpQkFBaUI7Ozs7Ozs7Ozs7OztZQUV0TUcseUJBQ0UsOERBQUN3QztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNiO3dCQUFFSyxNQUFNakM7d0JBQVN5QyxXQUFVO3dCQUF1RlUsUUFBTzt3QkFBU0ksS0FBSTtrQ0FBc0I7Ozs7OztvQkFBYTtrQ0FDMUssOERBQUNGO3dCQUFPWixXQUFVO3dCQUEyRWUsU0FBU2hDO2tDQUFnQjs7Ozs7O29CQUFzQjs7Ozs7Ozs7Ozs7OztBQUtoSztHQTdFTTdCOztRQUM0QkQsaUVBQWtCQTs7O0tBRDlDQztBQStFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VbmxvY2tGb3JtLmpzPzQ2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHVzZUlwZnNBbmRFdGhlcmV1bSBmcm9tICcuLi9ob29rcy91c2VJcGZzQW5kRXRoZXJldW0nO1xuXG5jb25zdCBVbmxvY2tGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29udHJhY3QsIGxvYWRpbmcgfSA9IHVzZUlwZnNBbmRFdGhlcmV1bSgpOyAvLyBVc2UgdGhlIGhvb2tcbiAgICBjb25zdCBbcGFwZXJJZCwgc2V0UGFwZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2ZpbGVVcmwsIHNldEZpbGVVcmxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2FkaW5nRm9ybSwgc2V0TG9hZGluZ0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmaWxlQ29udGVudCwgc2V0RmlsZUNvbnRlbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2xvYWRpbmdzLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TG9hZGluZ0Zvcm0odHJ1ZSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0NvbnRyYWN0IGlzIGluaXRpYWxpemluZywgcGxlYXNlIHdhaXQuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNvbnRyYWN0KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NtYXJ0IGNvbnRyYWN0IGlzIG5vdCBpbml0aWFsaXplZC4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGwgdGhlIHVubG9ja1BhcGVyIGZ1bmN0aW9uIGZyb20gdGhlIHNtYXJ0IGNvbnRyYWN0XG4gICAgICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LnVubG9ja1BhcGVyKHBhcGVySWQpO1xuICAgICAgICAgICAgYXdhaXQgdHgud2FpdCgpO1xuXG4gICAgICAgICAgICAvLyBGZXRjaCBJUEZTIGhhc2hcbiAgICAgICAgICAgIGNvbnN0IGlwZnNIYXNoID0gYXdhaXQgY29udHJhY3QuZ2V0SXBmc0hhc2gocGFwZXJJZCk7XG4gICAgICAgICAgICBjb25zdCBpcGZzVXJsID0gYGh0dHBzOi8vYmxhY2std29ybGR3aWRlLXRpZ2VyLTQzMS5teXBpbmF0YS5jbG91ZC9pcGZzLyR7aXBmc0hhc2h9YDtcblxuICAgICAgICAgICAgLy8gRmV0Y2ggZmlsZSBjb250ZW50IGZyb20gSVBGU1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpcGZzVXJsKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICBzZXRGaWxlQ29udGVudChkYXRhKTtcbiAgICAgICAgICAgIHNldEZpbGVVcmwoaXBmc1VybCk7XG5cbiAgICAgICAgICAgIGFsZXJ0KCdQYXBlciB1bmxvY2tlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVubG9ja2luZyBmaWxlOicsIGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KCdFcnJvciB1bmxvY2tpbmcgZmlsZS4gTWFrZSBzdXJlIHlvdSBhcmUgYXV0aG9yaXplZCBhbmQgdGhlIHVubG9jayB0aW1lIGhhcyBwYXNzZWQuJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRm9ybShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChmaWxlQ29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlQ29udGVudCk7XG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgICAgICAgYS5kb3dubG9hZCA9IGBmaWxlX2Rvd25sb2FkJHtmaWxlQ29udGVudH1gOyBcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICBhLmNsaWNrKCk7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTQgXCI+XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktOTAwXCIgaHRtbEZvcj1cIlBhcGVySWRcIj5FbnRlciBGaWxlIElkIDo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncC0yIG1iLTQgcm91bmRlZC1sZyBzaGFkb3ctbWQgJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRmlsZSBJRFwiIHZhbHVlPXtwYXBlcklkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhcGVySWQoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J2JnLWJsdWUtOTAwIGhvdmVyOmJnLWJsdWUtNjAwIGhvdmVyOnRyYW5zaXRpb24tY29sb3JzIHRleHQtd2hpdGUgdy0zNiB0ZXh0LXNtIG14LWF1dG8gcm91bmRlZC14bCBwLTIgZm9udC1zZW1pYm9sZCcgZGlzYWJsZWQ9e2xvYWRpbmd9Pntsb2FkaW5nID8gJ1VubG9ja2luZy4uLicgOiAnVW5sb2NrJ308L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHsgZmlsZVVybCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUgZmxleCAnPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtmaWxlVXJsfSBjbGFzc05hbWU9J3RleHQtY2VudGVyIGJnLWJsdWUtNzAwIHRleHQtd2hpdGUgdy0zNiB0ZXh0LXNtIG14LWF1dG8gcm91bmRlZC14bCBwLTIgZm9udC1zZW1pYm9sZCcgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlZpZXcgRmlsZTwvYT4gey8qIExpbmsgdG8gdmlldyBwYXBlciAqL31cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtNzAwIHRleHQtd2hpdGUgdy0zNiB0ZXh0LXNtIG14LWF1dG8gcm91bmRlZC14bCBwLTIgZm9udC1zZW1pYm9sZCcgb25DbGljaz17aGFuZGxlRG93bmxvYWR9PkRvd25sb2FkIEZpbGU8L2J1dHRvbj4gey8qIEJ1dHRvbiB0byBkb3dubG9hZCBwYXBlciAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVbmxvY2tGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJ1c2VJcGZzQW5kRXRoZXJldW0iLCJVbmxvY2tGb3JtIiwiY29udHJhY3QiLCJsb2FkaW5nIiwicGFwZXJJZCIsInNldFBhcGVySWQiLCJmaWxlVXJsIiwic2V0RmlsZVVybCIsImxvYWRpbmdGb3JtIiwic2V0TG9hZGluZ0Zvcm0iLCJmaWxlQ29udGVudCIsInNldEZpbGVDb250ZW50IiwibG9hZGluZ3MiLCJzZXRMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJ0eCIsInVubG9ja1BhcGVyIiwid2FpdCIsImlwZnNIYXNoIiwiZ2V0SXBmc0hhc2giLCJpcGZzVXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJibG9iIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlRG93bmxvYWQiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiaHJlZiIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJyZWwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UnlockForm.js\n"));

/***/ })

});