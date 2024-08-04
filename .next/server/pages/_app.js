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

/***/ "./src/context/web3modal.tsx":
/*!***********************************!*\
  !*** ./src/context/web3modal.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Web3Modal: () => (/* binding */ Web3Modal)\n/* harmony export */ });\n/* harmony import */ var _web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3modal/ethers5/react */ \"@web3modal/ethers5/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__]);\n_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ Web3Modal auto */ \n// 1. Get projectId at https://cloud.walletconnect.com\nconst projectId = \"5d16e2c0f85cdb58d7408b89cd47bf24\";\n// 2. Set chains\nconst mainnet = {\n    chainId: 1,\n    name: \"Ethereum\",\n    currency: \"ETH\",\n    explorerUrl: \"https://etherscan.io\",\n    rpcUrl: \"https://cloudflare-eth.com\"\n};\nconst testnet = {\n    chainId: 11155111,\n    name: \"Sepolia\",\n    currency: \"SepoliaETH\",\n    explorerUrl: \"https://sepolia.etherscan.io/\",\n    rpcUrl: \"https://eth-sepolia.g.alchemy.com/v2/UEi3OlYcSdlnavJoB9mQWf6f2VQGAeBf\"\n};\n// 3. Create a metadata object\nconst metadata = {\n    name: \"DeFile\",\n    description: \"Decentralized File Locker\",\n    url: \"https://defile.vercel.app\",\n    icons: [\n        \"https://drive.google.com/file/d/15E-Th6oVxc5iqNBNfHnkCCAy_6V858Tl/view?usp=sharing\"\n    ]\n};\n// 4. Create Ethers config\n// const ethersConfig = defaultConfig({\n//   metadata,\n//   auth: {\n//     email: true, // default to true\n//     socials: ['google', 'x', 'github', 'discord', 'apple'],\n//     showWallets: true, // default to true\n//     walletFeatures: true // default to true\n//   },\n//   enableEIP6963: true, // true by default\n//   enableInjected: true, // true by default\n//   enableCoinbase: true, // true by default\n//   rpcUrl: '...', // used for the Coinbase SDK\n//   defaultChainId: 1 // used for the Coinbase SDK\n// })\n// 5. Create a Web3Modal instance\n// createWeb3Modal({\n//   ethersConfig,\n//   chains: [testnet],\n//   projectId,\n//   enableOnramp: true,\n//   enableAnalytics: true // Optional - defaults to your Cloud configuration\n// })\n(0,_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__.createWeb3Modal)({\n    ethersConfig: (0,_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__.defaultConfig)({\n        metadata,\n        auth: {\n            email: true,\n            socials: [\n                \"google\",\n                \"x\",\n                \"github\",\n                \"discord\",\n                \"apple\"\n            ],\n            showWallets: false,\n            walletFeatures: true // default to true\n        },\n        enableEIP6963: true,\n        enableInjected: true,\n        enableCoinbase: true,\n        rpcUrl: \"...\",\n        defaultChainId: 1 // used for the Coinbase SDK\n    }),\n    projectId,\n    chains: [\n        testnet\n    ],\n    enableOnramp: true,\n    enableAnalytics: true // Optional - defaults to your Cloud configuration\n});\nfunction Web3Modal({ children }) {\n    return children;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC93ZWIzbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OytEQUV5RTtBQUV6RSxzREFBc0Q7QUFDdEQsTUFBTUUsWUFBWTtBQUVsQixnQkFBZ0I7QUFDaEIsTUFBTUMsVUFBVTtJQUNkQyxTQUFTO0lBQ1RDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxhQUFhO0lBQ2JDLFFBQVE7QUFFVjtBQUNBLE1BQU1DLFVBQVU7SUFDWkwsU0FBUztJQUNUQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsYUFBYTtJQUNiQyxRQUFRO0FBRVY7QUFFRiw4QkFBOEI7QUFDOUIsTUFBTUUsV0FBVztJQUNmTCxNQUFNO0lBQ05NLGFBQWE7SUFDYkMsS0FBSztJQUNMQyxPQUFPO1FBQUM7S0FBcUY7QUFDL0Y7QUFFQSwwQkFBMEI7QUFDMUIsdUNBQXVDO0FBQ3ZDLGNBQWM7QUFDZCxZQUFZO0FBQ1osc0NBQXNDO0FBQ3RDLDhEQUE4RDtBQUM5RCw0Q0FBNEM7QUFDNUMsOENBQThDO0FBQzlDLE9BQU87QUFDUCw0Q0FBNEM7QUFDNUMsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3QyxnREFBZ0Q7QUFDaEQsbURBQW1EO0FBQ25ELEtBQUs7QUFFTCxpQ0FBaUM7QUFDakMsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLHdCQUF3QjtBQUN4Qiw2RUFBNkU7QUFDN0UsS0FBSztBQUNMYix5RUFBZUEsQ0FBQztJQUNaYyxjQUFjYix1RUFBYUEsQ0FBQztRQUN4QlM7UUFDQUssTUFBTTtZQUNGQyxPQUFPO1lBQ1BDLFNBQVM7Z0JBQUM7Z0JBQVU7Z0JBQUs7Z0JBQVU7Z0JBQVc7YUFBUTtZQUN0REMsYUFBYTtZQUNiQyxnQkFBZ0IsS0FBSyxrQkFBa0I7UUFDM0M7UUFDQUMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJDLGdCQUFnQjtRQUNoQmQsUUFBUTtRQUNSZSxnQkFBZ0IsRUFBRSw0QkFBNEI7SUFDbEQ7SUFDQXJCO0lBQ0FzQixRQUFRO1FBQUNmO0tBQVE7SUFDakJnQixjQUFjO0lBQ2RDLGlCQUFpQixLQUFLLGtEQUFrRDtBQUM1RTtBQUNPLFNBQVNDLFVBQVUsRUFBRUMsUUFBUSxFQUFFO0lBQ3BDLE9BQU9BO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWZpbGUvLi9zcmMvY29udGV4dC93ZWIzbW9kYWwudHN4PzZjMjEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IGNyZWF0ZVdlYjNNb2RhbCwgZGVmYXVsdENvbmZpZyB9IGZyb20gJ0B3ZWIzbW9kYWwvZXRoZXJzNS9yZWFjdCdcblxuLy8gMS4gR2V0IHByb2plY3RJZCBhdCBodHRwczovL2Nsb3VkLndhbGxldGNvbm5lY3QuY29tXG5jb25zdCBwcm9qZWN0SWQgPSAnNWQxNmUyYzBmODVjZGI1OGQ3NDA4Yjg5Y2Q0N2JmMjQnXG5cbi8vIDIuIFNldCBjaGFpbnNcbmNvbnN0IG1haW5uZXQgPSB7XG4gIGNoYWluSWQ6IDEsXG4gIG5hbWU6ICdFdGhlcmV1bScsXG4gIGN1cnJlbmN5OiAnRVRIJyxcbiAgZXhwbG9yZXJVcmw6ICdodHRwczovL2V0aGVyc2Nhbi5pbycsXG4gIHJwY1VybDogJ2h0dHBzOi8vY2xvdWRmbGFyZS1ldGguY29tJyxcbiAgXG59XG5jb25zdCB0ZXN0bmV0ID0ge1xuICAgIGNoYWluSWQ6IDExMTU1MTExLFxuICAgIG5hbWU6ICdTZXBvbGlhJyxcbiAgICBjdXJyZW5jeTogJ1NlcG9saWFFVEgnLFxuICAgIGV4cGxvcmVyVXJsOiAnaHR0cHM6Ly9zZXBvbGlhLmV0aGVyc2Nhbi5pby8nLFxuICAgIHJwY1VybDogJ2h0dHBzOi8vZXRoLXNlcG9saWEuZy5hbGNoZW15LmNvbS92Mi9VRWkzT2xZY1NkbG5hdkpvQjltUVdmNmYyVlFHQWVCZicsXG4gICAgXG4gIH1cblxuLy8gMy4gQ3JlYXRlIGEgbWV0YWRhdGEgb2JqZWN0XG5jb25zdCBtZXRhZGF0YSA9IHtcbiAgbmFtZTogJ0RlRmlsZScsXG4gIGRlc2NyaXB0aW9uOiAnRGVjZW50cmFsaXplZCBGaWxlIExvY2tlcicsXG4gIHVybDogJ2h0dHBzOi8vZGVmaWxlLnZlcmNlbC5hcHAnLCAvLyBvcmlnaW4gbXVzdCBtYXRjaCB5b3VyIGRvbWFpbiAmIHN1YmRvbWFpblxuICBpY29uczogWydodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE1RS1UaDZvVnhjNWlxTkJOZkhua0NDQXlfNlY4NThUbC92aWV3P3VzcD1zaGFyaW5nJ11cbn1cblxuLy8gNC4gQ3JlYXRlIEV0aGVycyBjb25maWdcbi8vIGNvbnN0IGV0aGVyc0NvbmZpZyA9IGRlZmF1bHRDb25maWcoe1xuLy8gICBtZXRhZGF0YSxcbi8vICAgYXV0aDoge1xuLy8gICAgIGVtYWlsOiB0cnVlLCAvLyBkZWZhdWx0IHRvIHRydWVcbi8vICAgICBzb2NpYWxzOiBbJ2dvb2dsZScsICd4JywgJ2dpdGh1YicsICdkaXNjb3JkJywgJ2FwcGxlJ10sXG4vLyAgICAgc2hvd1dhbGxldHM6IHRydWUsIC8vIGRlZmF1bHQgdG8gdHJ1ZVxuLy8gICAgIHdhbGxldEZlYXR1cmVzOiB0cnVlIC8vIGRlZmF1bHQgdG8gdHJ1ZVxuLy8gICB9LFxuLy8gICBlbmFibGVFSVA2OTYzOiB0cnVlLCAvLyB0cnVlIGJ5IGRlZmF1bHRcbi8vICAgZW5hYmxlSW5qZWN0ZWQ6IHRydWUsIC8vIHRydWUgYnkgZGVmYXVsdFxuLy8gICBlbmFibGVDb2luYmFzZTogdHJ1ZSwgLy8gdHJ1ZSBieSBkZWZhdWx0XG4vLyAgIHJwY1VybDogJy4uLicsIC8vIHVzZWQgZm9yIHRoZSBDb2luYmFzZSBTREtcbi8vICAgZGVmYXVsdENoYWluSWQ6IDEgLy8gdXNlZCBmb3IgdGhlIENvaW5iYXNlIFNES1xuLy8gfSlcblxuLy8gNS4gQ3JlYXRlIGEgV2ViM01vZGFsIGluc3RhbmNlXG4vLyBjcmVhdGVXZWIzTW9kYWwoe1xuLy8gICBldGhlcnNDb25maWcsXG4vLyAgIGNoYWluczogW3Rlc3RuZXRdLFxuLy8gICBwcm9qZWN0SWQsXG4vLyAgIGVuYWJsZU9ucmFtcDogdHJ1ZSxcbi8vICAgZW5hYmxlQW5hbHl0aWNzOiB0cnVlIC8vIE9wdGlvbmFsIC0gZGVmYXVsdHMgdG8geW91ciBDbG91ZCBjb25maWd1cmF0aW9uXG4vLyB9KVxuY3JlYXRlV2ViM01vZGFsKHtcbiAgICBldGhlcnNDb25maWc6IGRlZmF1bHRDb25maWcoe1xuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgZW1haWw6IHRydWUsIC8vIGRlZmF1bHQgdG8gdHJ1ZVxuICAgICAgICAgICAgc29jaWFsczogWydnb29nbGUnLCAneCcsICdnaXRodWInLCAnZGlzY29yZCcsICdhcHBsZSddLFxuICAgICAgICAgICAgc2hvd1dhbGxldHM6IGZhbHNlLCAvLyBkZWZhdWx0IHRvIHRydWVcbiAgICAgICAgICAgIHdhbGxldEZlYXR1cmVzOiB0cnVlIC8vIGRlZmF1bHQgdG8gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBlbmFibGVFSVA2OTYzOiB0cnVlLCAvLyB0cnVlIGJ5IGRlZmF1bHRcbiAgICAgICAgZW5hYmxlSW5qZWN0ZWQ6IHRydWUsIC8vIHRydWUgYnkgZGVmYXVsdFxuICAgICAgICBlbmFibGVDb2luYmFzZTogdHJ1ZSwgLy8gdHJ1ZSBieSBkZWZhdWx0XG4gICAgICAgIHJwY1VybDogJy4uLicsIC8vIHVzZWQgZm9yIHRoZSBDb2luYmFzZSBTREtcbiAgICAgICAgZGVmYXVsdENoYWluSWQ6IDEgLy8gdXNlZCBmb3IgdGhlIENvaW5iYXNlIFNES1xuICAgIH0pLFxuICAgIHByb2plY3RJZCxcbiAgICBjaGFpbnM6IFt0ZXN0bmV0XSxcbiAgICBlbmFibGVPbnJhbXA6IHRydWUsXG4gICAgZW5hYmxlQW5hbHl0aWNzOiB0cnVlIC8vIE9wdGlvbmFsIC0gZGVmYXVsdHMgdG8geW91ciBDbG91ZCBjb25maWd1cmF0aW9uXG59KVxuZXhwb3J0IGZ1bmN0aW9uIFdlYjNNb2RhbCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIGNoaWxkcmVuXG59Il0sIm5hbWVzIjpbImNyZWF0ZVdlYjNNb2RhbCIsImRlZmF1bHRDb25maWciLCJwcm9qZWN0SWQiLCJtYWlubmV0IiwiY2hhaW5JZCIsIm5hbWUiLCJjdXJyZW5jeSIsImV4cGxvcmVyVXJsIiwicnBjVXJsIiwidGVzdG5ldCIsIm1ldGFkYXRhIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJpY29ucyIsImV0aGVyc0NvbmZpZyIsImF1dGgiLCJlbWFpbCIsInNvY2lhbHMiLCJzaG93V2FsbGV0cyIsIndhbGxldEZlYXR1cmVzIiwiZW5hYmxlRUlQNjk2MyIsImVuYWJsZUluamVjdGVkIiwiZW5hYmxlQ29pbmJhc2UiLCJkZWZhdWx0Q2hhaW5JZCIsImNoYWlucyIsImVuYWJsZU9ucmFtcCIsImVuYWJsZUFuYWx5dGljcyIsIldlYjNNb2RhbCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/web3modal.tsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/globals.css */ \"./src/app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/web3modal */ \"./src/context/web3modal.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_web3modal__WEBPACK_IMPORTED_MODULE_2__]);\n_context_web3modal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_web3modal__WEBPACK_IMPORTED_MODULE_2__.Web3Modal, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/adee/Web3-Dev/DeFile/src/pages/_app.js\",\n            lineNumber: 4,\n            columnNumber: 24\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adee/Web3-Dev/DeFile/src/pages/_app.js\",\n        lineNumber: 4,\n        columnNumber: 13\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ29CO0FBQ2hELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMscUJBQVEsOERBQUNILHlEQUFTQTtrQkFBQyw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUMvQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVmaWxlLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2FwcC9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tICcuLi9jb250ZXh0L3dlYjNtb2RhbCdcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAgPFdlYjNNb2RhbD48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC9XZWIzTW9kYWw+ICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiV2ViM01vZGFsIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethers5/react":
/*!*******************************************!*\
  !*** external "@web3modal/ethers5/react" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethers5/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();