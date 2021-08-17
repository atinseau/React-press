"use strict";
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
exports.id = "pages/admin/[slot]";
exports.ids = ["pages/admin/[slot]"];
exports.modules = {

/***/ "./pages/admin/[slot].js":
/*!*******************************!*\
  !*** ./pages/admin/[slot].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easy-peasy */ \"easy-peasy\");\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/arthurtinseau/Desktop/Codage/TTD/pages/admin/[slot].js\";\n\n\n\n\n\nconst Slot = ({\n  page\n}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const pages = (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.useStoreState)(state => state.pages);\n  const setPageTitle = (0,easy_peasy__WEBPACK_IMPORTED_MODULE_2__.useStoreActions)(actions => actions.setPageTitle);\n  const {\n    0: count,\n    1: setCount\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {\n    if (pages.length != 0) setPageTitle(page.title);\n  }, [pages]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 3\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const data = (await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://127.0.0.1:3000/\" + 'api/admin/get-admin-pages')).data;\n  const allowedPage = [];\n  data.filter(page => page.id != null).forEach(page => {\n    allowedPage.push({\n      params: {\n        slot: page.slug.replace('/', '')\n      }\n    });\n  });\n  return {\n    paths: allowedPage,\n    //indicates that no page needs be created at build time\n    fallback: false //indicates the type of fallback\n\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const data = (await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://127.0.0.1:3000/\" + 'api/admin/get-admin-pages')).data;\n  const page = data.filter(page => page.slug.replace('/', '') == params.slot)[0];\n  return {\n    props: {\n      page\n    }\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slot);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9bc2xvdF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU0sSUFBSSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWM7QUFFMUIsUUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUNBLFFBQU1NLEtBQUssR0FBR1AseURBQWEsQ0FBQ1EsS0FBSyxJQUFJQSxLQUFLLENBQUNELEtBQWhCLENBQTNCO0FBQ0EsUUFBTUUsWUFBWSxHQUFHViwyREFBZSxDQUFDVyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0QsWUFBcEIsQ0FBcEM7QUFFQSxRQUFNO0FBQUEsT0FBQ0UsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JULCtDQUFRLENBQUMsQ0FBRCxDQUFsQztBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZixRQUFJSyxLQUFLLENBQUNNLE1BQU4sSUFBZ0IsQ0FBcEIsRUFDQ0osWUFBWSxDQUFDSixJQUFJLENBQUNTLEtBQU4sQ0FBWjtBQUNELEdBSFEsRUFHTixDQUFDUCxLQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUtBLENBbEJEOztBQW9CTyxlQUFlUSxjQUFmLEdBQWlDO0FBRXZDLFFBQU1DLElBQUksR0FBRyxDQUFDLE1BQU1sQixnREFBQSxDQUFVb0Isd0JBQUEsR0FBa0IsMkJBQTVCLENBQVAsRUFBaUVGLElBQTlFO0FBRUEsUUFBTUssV0FBVyxHQUFHLEVBQXBCO0FBQ0FMLEVBQUFBLElBQUksQ0FBQ00sTUFBTCxDQUFZakIsSUFBSSxJQUFJQSxJQUFJLENBQUNrQixFQUFMLElBQVcsSUFBL0IsRUFBcUNDLE9BQXJDLENBQTZDbkIsSUFBSSxJQUFJO0FBQ3BEZ0IsSUFBQUEsV0FBVyxDQUFDSSxJQUFaLENBQWlCO0FBQ2hCQyxNQUFBQSxNQUFNLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFdEIsSUFBSSxDQUFDdUIsSUFBTCxDQUFVQyxPQUFWLENBQWtCLEdBQWxCLEVBQXVCLEVBQXZCO0FBREM7QUFEUSxLQUFqQjtBQUtBLEdBTkQ7QUFPQSxTQUFPO0FBQ05DLElBQUFBLEtBQUssRUFBRVQsV0FERDtBQUNjO0FBQ3BCVSxJQUFBQSxRQUFRLEVBQUUsS0FGSixDQUVVOztBQUZWLEdBQVA7QUFJQTtBQUdNLGVBQWVDLGNBQWYsQ0FBK0I7QUFBQ04sRUFBQUE7QUFBRCxDQUEvQixFQUF5QztBQUUvQyxRQUFNVixJQUFJLEdBQUcsQ0FBQyxNQUFNbEIsZ0RBQUEsQ0FBVW9CLHdCQUFBLEdBQWtCLDJCQUE1QixDQUFQLEVBQWlFRixJQUE5RTtBQUNBLFFBQU1YLElBQUksR0FBR1csSUFBSSxDQUFDTSxNQUFMLENBQVlqQixJQUFJLElBQUlBLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUMsT0FBVixDQUFrQixHQUFsQixFQUF1QixFQUF2QixLQUE4QkgsTUFBTSxDQUFDQyxJQUF6RCxFQUErRCxDQUEvRCxDQUFiO0FBRUEsU0FBTztBQUNOTSxJQUFBQSxLQUFLLEVBQUU7QUFDTjVCLE1BQUFBO0FBRE07QUFERCxHQUFQO0FBS0E7QUFHRCxpRUFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1ibG9nLy4vcGFnZXMvYWRtaW4vW3Nsb3RdLmpzPzdjOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlU3RvcmVBY3Rpb25zLCB1c2VTdG9yZVN0YXRlIH0gZnJvbSAnZWFzeS1wZWFzeSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTbG90ID0gKHsgcGFnZSB9KSA9PiB7XG5cdFxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCBwYWdlcyA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUucGFnZXMpXG5cdGNvbnN0IHNldFBhZ2VUaXRsZSA9IHVzZVN0b3JlQWN0aW9ucyhhY3Rpb25zID0+IGFjdGlvbnMuc2V0UGFnZVRpdGxlKVxuXG5cdGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwYWdlcy5sZW5ndGggIT0gMClcblx0XHRcdHNldFBhZ2VUaXRsZShwYWdlLnRpdGxlKVxuXHR9LCBbcGFnZXNdKVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24+XG5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzICgpIHtcblxuXHRjb25zdCBkYXRhID0gKGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5BUEkgKyAnYXBpL2FkbWluL2dldC1hZG1pbi1wYWdlcycpKS5kYXRhXG5cblx0Y29uc3QgYWxsb3dlZFBhZ2UgPSBbXVxuXHRkYXRhLmZpbHRlcihwYWdlID0+IHBhZ2UuaWQgIT0gbnVsbCkuZm9yRWFjaChwYWdlID0+IHtcblx0XHRhbGxvd2VkUGFnZS5wdXNoKHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRzbG90OiBwYWdlLnNsdWcucmVwbGFjZSgnLycsICcnKSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fSlcblx0cmV0dXJuIHtcblx0XHRwYXRoczogYWxsb3dlZFBhZ2UsIC8vaW5kaWNhdGVzIHRoYXQgbm8gcGFnZSBuZWVkcyBiZSBjcmVhdGVkIGF0IGJ1aWxkIHRpbWVcblx0XHRmYWxsYmFjazogZmFsc2UgLy9pbmRpY2F0ZXMgdGhlIHR5cGUgb2YgZmFsbGJhY2tcblx0fVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyAoe3BhcmFtc30pIHtcblxuXHRjb25zdCBkYXRhID0gKGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5BUEkgKyAnYXBpL2FkbWluL2dldC1hZG1pbi1wYWdlcycpKS5kYXRhXG5cdGNvbnN0IHBhZ2UgPSBkYXRhLmZpbHRlcihwYWdlID0+IHBhZ2Uuc2x1Zy5yZXBsYWNlKCcvJywgJycpID09IHBhcmFtcy5zbG90KVswXVxuXHRcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cGFnZVxuXHRcdH1cblx0fVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNsb3QiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdG9yZUFjdGlvbnMiLCJ1c2VTdG9yZVN0YXRlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTbG90IiwicGFnZSIsInJvdXRlciIsInBhZ2VzIiwic3RhdGUiLCJzZXRQYWdlVGl0bGUiLCJhY3Rpb25zIiwiY291bnQiLCJzZXRDb3VudCIsImxlbmd0aCIsInRpdGxlIiwiZ2V0U3RhdGljUGF0aHMiLCJkYXRhIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIkFQSSIsImFsbG93ZWRQYWdlIiwiZmlsdGVyIiwiaWQiLCJmb3JFYWNoIiwicHVzaCIsInBhcmFtcyIsInNsb3QiLCJzbHVnIiwicmVwbGFjZSIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/[slot].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "easy-peasy":
/*!*****************************!*\
  !*** external "easy-peasy" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("easy-peasy");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/[slot].js"));
module.exports = __webpack_exports__;

})();