/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PdfView.jsx":
/*!********************************!*\
  !*** ./components/PdfView.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pdf */ \"./node_modules/react-pdf/dist/esm/entry.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/sadeeq/Downloads/videopdf/components/PdfView.jsx\",\n    _s = $RefreshSig$();\n\n\n // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;\n// import \"react-pdf/dist/esm/Page/AnnotationLayer.css\";\n// import \"react-pdf/dist/esm/Page/TextLayer.css\";\n\n // import pdfmap from \"../pdfmap1.json\";\n\nvar options = {\n  cMapUrl: \"cmaps/\",\n  cMapPacked: true,\n  standardFontDataUrl: \"standard_fonts/\"\n};\n\nfunction highlightPattern(text, pattern) {\n  var _this = this;\n\n  return text.replace(pattern.find(function (e) {\n    return e == text;\n  }), function (value) {\n    return \"<mark>\".concat(value, \"</mark>\");\n  });\n  var splitText = text.split(pattern);\n\n  if (splitText.length <= 1) {\n    return text;\n  }\n\n  var matches = text.match(pattern);\n  return splitText.reduce(function (arr, element, index) {\n    return matches[index] ? [].concat((0,_Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr), [element, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n      children: matches[index]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 29\n    }, _this)]) : [].concat((0,_Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr), [element]);\n  }, []);\n}\n\nfunction searchTextInSentence(textArray, sentence) {\n  var str = textArray.join(\"-----\");\n  var str2 = sentence.split(\" \").join(\"-----\");\n  console.log(textArray.filter(function (str) {\n    return str !== \" \";\n  }));\n}\n\nfunction replaceArray(find, replace) {\n  var replaceString = this;\n  var regex;\n\n  for (var i = 0; i < find.length; i++) {\n    regex = new RegExp(find[i].str, \"g\");\n    console.log(regex);\n    replaceString = replaceString.replace(regex, replace[i]);\n  }\n\n  return replaceString;\n}\n\nfunction PdfView(_ref) {\n  _s();\n\n  var paragraphs = _ref.paragraphs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"/pdfs/visifit.pdf\"),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      numPages = _useState2[0],\n      setNumPages = _useState2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(1),\n      _React$useState2 = (0,_Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      pageNumber = _React$useState2[0],\n      setPageNumber = _React$useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      searchText = _useState3[0],\n      setSearchText = _useState3[1]; // function onFileChange(event) {\n  //   setFile(event.target.files[0]);\n  // }\n\n\n  function onDocumentLoadSuccess(_ref2) {\n    var nextNumPages = _ref2.numPages;\n    setNumPages(nextNumPages);\n  }\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var _router$query = router.query,\n        page = _router$query.page,\n        para = _router$query.para;\n\n    if (!para) {\n      console.log(page);\n\n      if (page) {\n        setPageNumber(Number(page));\n      }\n    } else {\n      setTimeout(function () {// searchTextInSentence(textArray, 'We perform')\n      }, 1000);\n      pdfmap.map(function (item) {\n        if (Number(item.id) == para) {\n          setPageNumber(Number(item.page));\n          console.log(item.paragraphs);\n          setSearchText(item.paragraphs.split(\" \"));\n        }\n      });\n    }\n  }, [router.query.page, router.query.para]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (paragraphs) {\n      pdfmap.map(function (item) {\n        if (Number(item.id) == paragraphs.paragraphs[0]) {\n          setPageNumber(Number(item.page));\n          console.log(item.paragraphs);\n          setSearchText(item.paragraphs.split(\" \"));\n        }\n      });\n    } else {\n      setPageNumber(1);\n    }\n  }, [paragraphs]);\n  var textRenderer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (textItem) {\n    return highlightPattern(textItem.str, searchText);\n  }, [searchText]);\n\n  var clicked = function clicked(index) {\n    pdfmap.map(function (item) {\n      if (Number(item.id) == paragraphs.paragraphs[index]) {\n        setPageNumber(Number(item.page));\n        setSearchText(item.paragraphs.split(\" \"));\n      }\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"pdfview\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 122,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PdfView, \"7euGOREhw3jpsbBtTikrhGOh1qk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = PdfView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PdfView);\n\nvar _c;\n\n$RefreshReg$(_c, \"PdfView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZGZWaWV3LmpzeD9iNTQ1Il0sIm5hbWVzIjpbIm9wdGlvbnMiLCJjTWFwVXJsIiwiY01hcFBhY2tlZCIsInN0YW5kYXJkRm9udERhdGFVcmwiLCJoaWdobGlnaHRQYXR0ZXJuIiwidGV4dCIsInBhdHRlcm4iLCJyZXBsYWNlIiwiZmluZCIsImUiLCJ2YWx1ZSIsInNwbGl0VGV4dCIsInNwbGl0IiwibGVuZ3RoIiwibWF0Y2hlcyIsIm1hdGNoIiwicmVkdWNlIiwiYXJyIiwiZWxlbWVudCIsImluZGV4Iiwic2VhcmNoVGV4dEluU2VudGVuY2UiLCJ0ZXh0QXJyYXkiLCJzZW50ZW5jZSIsInN0ciIsImpvaW4iLCJzdHIyIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsInJlcGxhY2VBcnJheSIsInJlcGxhY2VTdHJpbmciLCJyZWdleCIsImkiLCJSZWdFeHAiLCJQZGZWaWV3IiwicGFyYWdyYXBocyIsInVzZVN0YXRlIiwiZmlsZSIsInNldEZpbGUiLCJudW1QYWdlcyIsInNldE51bVBhZ2VzIiwiUmVhY3QiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInNlYXJjaFRleHQiLCJzZXRTZWFyY2hUZXh0Iiwib25Eb2N1bWVudExvYWRTdWNjZXNzIiwibmV4dE51bVBhZ2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicXVlcnkiLCJwYWdlIiwicGFyYSIsIk51bWJlciIsInNldFRpbWVvdXQiLCJwZGZtYXAiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0ZXh0UmVuZGVyZXIiLCJ1c2VDYWxsYmFjayIsInRleHRJdGVtIiwiY2xpY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBO0FBQ0E7O0NBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBRSxRQURLO0FBRWRDLFlBQVUsRUFBRSxJQUZFO0FBR2RDLHFCQUFtQixFQUFFO0FB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IiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QZGZWaWV3LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcGRmanMsIERvY3VtZW50LCBQYWdlIH0gZnJvbSBcInJlYWN0LXBkZlwiO1xuLy8gcGRmanMuR2xvYmFsV29ya2VyT3B0aW9ucy53b3JrZXJTcmMgPSBgLy91bnBrZy5jb20vcGRmanMtZGlzdEAke3BkZmpzLnZlcnNpb259L2J1aWxkL3BkZi53b3JrZXIubWluLmpzYDtcbi8vIGltcG9ydCBcInJlYWN0LXBkZi9kaXN0L2VzbS9QYWdlL0Fubm90YXRpb25MYXllci5jc3NcIjtcbi8vIGltcG9ydCBcInJlYWN0LXBkZi9kaXN0L2VzbS9QYWdlL1RleHRMYXllci5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLy8gaW1wb3J0IHBkZm1hcCBmcm9tIFwiLi4vcGRmbWFwMS5qc29uXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGNNYXBVcmw6IFwiY21hcHMvXCIsXG4gIGNNYXBQYWNrZWQ6IHRydWUsXG4gIHN0YW5kYXJkRm9udERhdGFVcmw6IFwic3RhbmRhcmRfZm9udHMvXCIsXG59O1xuXG5mdW5jdGlvbiBoaWdobGlnaHRQYXR0ZXJuKHRleHQsIHBhdHRlcm4pIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZShcbiAgICBwYXR0ZXJuLmZpbmQoKGUpID0+IGUgPT0gdGV4dCksXG4gICAgKHZhbHVlKSA9PiBgPG1hcms+JHt2YWx1ZX08L21hcms+YFxuICApO1xuXG4gIGNvbnN0IHNwbGl0VGV4dCA9IHRleHQuc3BsaXQocGF0dGVybik7XG4gIGlmIChzcGxpdFRleHQubGVuZ3RoIDw9IDEpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGNvbnN0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoKHBhdHRlcm4pO1xuXG4gIHJldHVybiBzcGxpdFRleHQucmVkdWNlKFxuICAgIChhcnIsIGVsZW1lbnQsIGluZGV4KSA9PlxuICAgICAgbWF0Y2hlc1tpbmRleF1cbiAgICAgICAgPyBbLi4uYXJyLCBlbGVtZW50LCA8bWFyaz57bWF0Y2hlc1tpbmRleF19PC9tYXJrPl1cbiAgICAgICAgOiBbLi4uYXJyLCBlbGVtZW50XSxcbiAgICBbXVxuICApO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hUZXh0SW5TZW50ZW5jZSh0ZXh0QXJyYXksIHNlbnRlbmNlKSB7XG4gIGNvbnN0IHN0ciA9IHRleHRBcnJheS5qb2luKFwiLS0tLS1cIik7XG4gIGNvbnN0IHN0cjIgPSBzZW50ZW5jZS5zcGxpdChcIiBcIikuam9pbihcIi0tLS0tXCIpO1xuICBjb25zb2xlLmxvZyh0ZXh0QXJyYXkuZmlsdGVyKChzdHIpID0+IHN0ciAhPT0gXCIgXCIpKTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VBcnJheShmaW5kLCByZXBsYWNlKSB7XG4gIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcbiAgdmFyIHJlZ2V4O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcbiAgICByZWdleCA9IG5ldyBSZWdFeHAoZmluZFtpXS5zdHIsIFwiZ1wiKTtcbiAgICBjb25zb2xlLmxvZyhyZWdleCk7XG4gICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShyZWdleCwgcmVwbGFjZVtpXSk7XG4gIH1cblxuICByZXR1cm4gcmVwbGFjZVN0cmluZztcbn1cblxuZnVuY3Rpb24gUGRmVmlldyh7IHBhcmFncmFwaHMgfSkge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShcIi9wZGZzL3Zpc2lmaXQucGRmXCIpO1xuICBjb25zdCBbbnVtUGFnZXMsIHNldE51bVBhZ2VzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gZnVuY3Rpb24gb25GaWxlQ2hhbmdlKGV2ZW50KSB7XG4gIC8vICAgc2V0RmlsZShldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gb25Eb2N1bWVudExvYWRTdWNjZXNzKHsgbnVtUGFnZXM6IG5leHROdW1QYWdlcyB9KSB7XG4gICAgc2V0TnVtUGFnZXMobmV4dE51bVBhZ2VzKTtcbiAgfVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlLCBwYXJhIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgaWYgKCFwYXJhKSB7XG4gICAgICBjb25zb2xlLmxvZyhwYWdlKTtcbiAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgIHNldFBhZ2VOdW1iZXIoTnVtYmVyKHBhZ2UpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIHNlYXJjaFRleHRJblNlbnRlbmNlKHRleHRBcnJheSwgJ1dlIHBlcmZvcm0nKVxuICAgICAgfSwgMTAwMCk7XG4gICAgICBwZGZtYXAubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChOdW1iZXIoaXRlbS5pZCkgPT0gcGFyYSkge1xuICAgICAgICAgIHNldFBhZ2VOdW1iZXIoTnVtYmVyKGl0ZW0ucGFnZSkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ucGFyYWdyYXBocyk7XG4gICAgICAgICAgc2V0U2VhcmNoVGV4dChpdGVtLnBhcmFncmFwaHMuc3BsaXQoXCIgXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcm91dGVyLnF1ZXJ5LnBhZ2UsIHJvdXRlci5xdWVyeS5wYXJhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGFyYWdyYXBocykge1xuICAgICAgcGRmbWFwLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoTnVtYmVyKGl0ZW0uaWQpID09IHBhcmFncmFwaHMucGFyYWdyYXBoc1swXSkge1xuICAgICAgICAgIHNldFBhZ2VOdW1iZXIoTnVtYmVyKGl0ZW0ucGFnZSkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ucGFyYWdyYXBocyk7XG4gICAgICAgICAgc2V0U2VhcmNoVGV4dChpdGVtLnBhcmFncmFwaHMuc3BsaXQoXCIgXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFBhZ2VOdW1iZXIoMSk7XG4gICAgfVxuICB9LCBbcGFyYWdyYXBoc10pO1xuXG4gIGNvbnN0IHRleHRSZW5kZXJlciA9IHVzZUNhbGxiYWNrKFxuICAgICh0ZXh0SXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGhpZ2hsaWdodFBhdHRlcm4odGV4dEl0ZW0uc3RyLCBzZWFyY2hUZXh0KTtcbiAgICB9LFxuICAgIFtzZWFyY2hUZXh0XVxuICApO1xuXG4gIGNvbnN0IGNsaWNrZWQgPSAoaW5kZXgpID0+IHtcbiAgICBwZGZtYXAubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoTnVtYmVyKGl0ZW0uaWQpID09IHBhcmFncmFwaHMucGFyYWdyYXBoc1tpbmRleF0pIHtcbiAgICAgICAgc2V0UGFnZU51bWJlcihOdW1iZXIoaXRlbS5wYWdlKSk7XG4gICAgICAgIHNldFNlYXJjaFRleHQoaXRlbS5wYXJhZ3JhcGhzLnNwbGl0KFwiIFwiKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBkZnZpZXdcIj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBkZnZpZXdfX2NvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBkZnZpZXdfX2NvbnRhaW5lcl9fZG9jdW1lbnRcIj5cbiAgICAgICAgICA8RG9jdW1lbnRcbiAgICAgICAgICAgIGZpbGU9e2ZpbGV9XG4gICAgICAgICAgICBvbkxvYWRTdWNjZXNzPXtvbkRvY3VtZW50TG9hZFN1Y2Nlc3N9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfVxuICAgICAgICAgICAgICBjdXN0b21UZXh0UmVuZGVyZXI9e3RleHRSZW5kZXJlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Eb2N1bWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC13aGl0ZSBtbC0xMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHBhcmFncmFwaHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYWdyYXBocy5zZWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgbGV0IHNlY3Rpb25zID0gcGFyYWdyYXBocy5zZWN0aW9ucy5yZXBsYWNlKC8nL2csICdcIicpOyAvL3JlcGxhY2luZyBhbGwgJyB3aXRoIFwiXG4gICAgICAgICAgICAgICAgICBsZXQgc2NvcmVzID0gcGFyYWdyYXBocy5zY29yZXM7XG4gICAgICAgICAgICAgICAgICBzZWN0aW9ucyA9IEpTT04ucGFyc2Uoc2VjdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHBkZm1hcC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW0uaWQpID09IHBhcmFncmFwaHMucGFyYWdyYXBoc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSA9IGl0ZW0ucGFyYWdyYXBocy5zcGxpdChcIiBcIikuc2xpY2UoMCwgNykuam9pbihcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBidXR0b25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrZWQoaSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3Jlc1tpXSA8IDAuNyA/IFwiYmcteWVsbG93LTUwMFwiIDogXCJiZy1yb3NlLTgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gdGV4dC13aGl0ZSB3LTQ0IHB5LTQgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciBmb250LWJvbGQgbXItM2B9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uc1tpXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BhcmF9Li4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQZGZWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PdfView.jsx\n");

/***/ })

});