"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/graphql */ \"(app-pages-browser)/./graphql/index.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/react/hooks/useQuery.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    var _data_ships, _data;\n    _s();\n    const { data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.ships, {\n        fetchPolicy: \"cache-and-network\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center min-h-screen p-14\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-7xl justify-between flex flex-col gap-2\",\n            children: (_data = data) === null || _data === void 0 ? void 0 : (_data_ships = _data.ships) === null || _data_ships === void 0 ? void 0 : _data_ships.map((ship, index)=>{\n                var _ship;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex px-4 bg-red-100\",\n                    children: (_ship = ship) === null || _ship === void 0 ? void 0 : _ship.name\n                }, index, false, {\n                    fileName: \"/Users/liamscriven/Desktop/apps/Level/interview/spacex-demo-website/app/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/liamscriven/Desktop/apps/Level/interview/spacex-demo-website/app/page.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/liamscriven/Desktop/apps/Level/interview/spacex-demo-website/app/page.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JtionF1PqWN50DPWu724eJIU2SM=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFFUztBQUUzQixTQUFTRTtRQVFmQyxhQUFBQTs7SUFQUCxNQUFNLEVBQUVBLElBQUksRUFBRSxHQUFHRix3REFBUUEsQ0FBYUQsZ0RBQVFBLENBQUNJLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO1FBQzVEQyxhQUFhO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTt1QkFDWkwsUUFBQUEsa0JBQUFBLDZCQUFBQSxjQUFBQSxNQUFNRSxLQUFLLGNBQVhGLGtDQUFBQSxZQUFhTyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7b0JBTWxCRDtnQkFMTCxxQkFDRSw4REFBQ0Y7b0JBRUNELFdBQVU7K0JBRVRHLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTUUsSUFBSTttQkFITkQ7Ozs7O1lBTVg7Ozs7Ozs7Ozs7O0FBSVI7R0FyQndCVjs7UUFDTEQsb0RBQVFBOzs7S0FESEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBhcGlDYWxscyBmcm9tIFwiQC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBTaGlwc1F1ZXJ5IH0gZnJvbSBcIkAvdXRpbC90eXBlcy9ncmFwaHFsXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5PFNoaXBzUXVlcnk+KGFwaUNhbGxzLnF1ZXJpZXMuc2hpcHMsIHtcbiAgICBmZXRjaFBvbGljeTogXCJjYWNoZS1hbmQtbmV0d29ya1wiLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHAtMTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTd4bCBqdXN0aWZ5LWJldHdlZW4gZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxuICAgICAgICB7ZGF0YT8uc2hpcHM/Lm1hcCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHB4LTQgYmctcmVkLTEwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzaGlwPy5uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXBpQ2FsbHMiLCJ1c2VRdWVyeSIsIkhvbWUiLCJkYXRhIiwicXVlcmllcyIsInNoaXBzIiwiZmV0Y2hQb2xpY3kiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwic2hpcCIsImluZGV4IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});