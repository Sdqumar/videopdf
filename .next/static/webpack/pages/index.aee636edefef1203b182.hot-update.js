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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pdf */ \"./node_modules/react-pdf/dist/esm/entry.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/sadeeq/Downloads/videopdf/components/PdfView.jsx\",\n    _s = $RefreshSig$();\n\n\n // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;\n// import \"react-pdf/dist/esm/Page/AnnotationLayer.css\";\n// import \"react-pdf/dist/esm/Page/TextLayer.css\";\n\n // import pdfmap from \"../pdfmap1.json\";\n\nvar options = {\n  cMapUrl: \"cmaps/\",\n  cMapPacked: true,\n  standardFontDataUrl: \"standard_fonts/\"\n};\n\nfunction highlightPattern(text, pattern) {\n  var _this = this;\n\n  return text.replace(pattern.find(function (e) {\n    return e == text;\n  }), function (value) {\n    return \"<mark>\".concat(value, \"</mark>\");\n  });\n  var splitText = text.split(pattern);\n\n  if (splitText.length <= 1) {\n    return text;\n  }\n\n  var matches = text.match(pattern);\n  return splitText.reduce(function (arr, element, index) {\n    return matches[index] ? [].concat((0,_Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr), [element, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n      children: matches[index]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 29\n    }, _this)]) : [].concat((0,_Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr), [element]);\n  }, []);\n}\n\nfunction searchTextInSentence(textArray, sentence) {\n  var str = textArray.join(\"-----\");\n  var str2 = sentence.split(\" \").join(\"-----\");\n  console.log(textArray.filter(function (str) {\n    return str !== \" \";\n  }));\n}\n\nfunction replaceArray(find, replace) {\n  var replaceString = this;\n  var regex;\n\n  for (var i = 0; i < find.length; i++) {\n    regex = new RegExp(find[i].str, \"g\");\n    console.log(regex);\n    replaceString = replaceString.replace(regex, replace[i]);\n  }\n\n  return replaceString;\n}\n\nfunction PdfView(_ref) {\n  _s();\n\n  var paragraphs = _ref.paragraphs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"/pdfs/visifit.pdf\"),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      numPages = _useState2[0],\n      setNumPages = _useState2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(1),\n      _React$useState2 = (0,_Users_sadeeq_Downloads_videopdf_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      pageNumber = _React$useState2[0],\n      setPageNumber = _React$useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      searchText = _useState3[0],\n      setSearchText = _useState3[1]; // function onFileChange(event) {\n  //   setFile(event.target.files[0]);\n  // }\n\n\n  function onDocumentLoadSuccess(_ref2) {\n    var nextNumPages = _ref2.numPages;\n    setNumPages(nextNumPages);\n  }\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(); // useEffect(() => {\n  //   const { page, para } = router.query;\n  //   if (!para) {\n  //     console.log(page);\n  //     if (page) {\n  //       setPageNumber(Number(page));\n  //     }\n  //   } else {\n  //     setTimeout(() => {\n  //       // searchTextInSentence(textArray, 'We perform')\n  //     }, 1000);\n  //     pdfmap.map((item) => {\n  //       if (Number(item.id) == para) {\n  //         setPageNumber(Number(item.page));\n  //         console.log(item.paragraphs);\n  //         setSearchText(item.paragraphs.split(\" \"));\n  //       }\n  //     });\n  //   }\n  // }, [router.query.page, router.query.para]);\n  // useEffect(() => {\n  //   if (paragraphs) {\n  //     pdfmap.map((item) => {\n  //       if (Number(item.id) == paragraphs.paragraphs[0]) {\n  //         setPageNumber(Number(item.page));\n  //         console.log(item.paragraphs);\n  //         setSearchText(item.paragraphs.split(\" \"));\n  //       }\n  //     });\n  //   } else {\n  //     setPageNumber(1);\n  //   }\n  // }, [paragraphs]);\n\n  var textRenderer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (textItem) {\n    return highlightPattern(textItem.str, searchText);\n  }, [searchText]);\n\n  var clicked = function clicked(index) {\n    pdfmap.map(function (item) {\n      if (Number(item.id) == paragraphs.paragraphs[index]) {\n        setPageNumber(Number(item.page));\n        setSearchText(item.paragraphs.split(\" \"));\n      }\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"pdfview\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 122,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PdfView, \"Uy+pzNeTui1xut9iFtfEpuAKSf8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n_c = PdfView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PdfView);\n\nvar _c;\n\n$RefreshReg$(_c, \"PdfView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QZGZWaWV3LmpzeD9iNTQ1Il0sIm5hbWVzIjpbIm9wdGlvbnMiLCJjTWFwVXJsIiwiY01hcFBhY2tlZCIsInN0YW5kYXJkRm9udERhdGFVcmwiLCJoaWdobGlnaHRQYXR0ZXJuIiwidGV4dCIsInBhdHRlcm4iLCJyZXBsYWNlIiwiZmluZCIsImUiLCJ2YWx1ZSIsInNwbGl0VGV4dCIsInNwbGl0IiwibGVuZ3RoIiwibWF0Y2hlcyIsIm1hdGNoIiwicmVkdWNlIiwiYXJyIiwiZWxlbWVudCIsImluZGV4Iiwic2VhcmNoVGV4dEluU2VudGVuY2UiLCJ0ZXh0QXJyYXkiLCJzZW50ZW5jZSIsInN0ciIsImpvaW4iLCJzdHIyIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsInJlcGxhY2VBcnJheSIsInJlcGxhY2VTdHJpbmciLCJyZWdleCIsImkiLCJSZWdFeHAiLCJQZGZWaWV3IiwicGFyYWdyYXBocyIsInVzZVN0YXRlIiwiZmlsZSIsInNldEZpbGUiLCJudW1QYWdlcyIsInNldE51bVBhZ2VzIiwiUmVhY3QiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInNlYXJjaFRleHQiLCJzZXRTZWFyY2hUZXh0Iiwib25Eb2N1bWVudExvYWRTdWNjZXNzIiwibmV4dE51bVBhZ2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwidGV4dFJlbmRlcmVyIiwidXNlQ2FsbGJhY2siLCJ0ZXh0SXRlbSIsImNsaWNrZWQiLCJwZGZtYXAiLCJtYXAiLCJpdGVtIiwiTnVtYmVyIiwiaWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFDQTs7Q0FFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsU0FBTyxFQUFFLFFBREs7QUFFZEMsWUFBVSxFQUFFLElBRkU7QUFHZEMscUJBQW1CLEVBQUU7QUFIUCxDQUFoQjs7QUFNQSxTQUFTQyxnQkFBVCxDQUEwQkMsSUFBMUIs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QWdCL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFlBQVksR0FBR0Msa0RBQVcsQ0FDOUIsVUFBQ0MsUUFBRCxFQUFjO0FBQ1osV0FBT2hELGdCQUFnQixDQUFDZ0QsUUFBUSxDQUFDN0IsR0FBVixFQUFlcUIsVUFBZixDQUF2QjtBQUNELEdBSDZCLEVBSTlCLENBQUNBLFVBQUQsQ0FKOEIsQ0FBaEM7O0FBT0EsTUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ2xDLEtBQUQsRUFBVztBQUN6Qm1DLFVBQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBVTtBQUNuQixVQUFJQyxNQUFNLENBQUNELElBQUksQ0FBQ0UsRUFBTixDQUFOLElBQW1CdkIsVUFBVSxDQUFDQSxVQUFYLENBQXNCaEIsS0FBdEIsQ0FBdkIsRUFBcUQ7QUFDbkR3QixxQkFBYSxDQUFDYyxNQUFNLENBQUNELElBQUksQ0FBQ0csSUFBTixDQUFQLENBQWI7QUFDQWQscUJBQWEsQ0FBQ1csSUFBSSxDQUFDckIsVUFBTCxDQUFnQnZCLEtBQWhCLENBQXNCLEdBQXRCLENBQUQsQ0FBYjtBQUNEO0FBQ0YsS0FMRDtBQU1ELEdBUEQ7O0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwREQ7O0dBN0hRc0IsTztVQWNRZSxrRDs7O0tBZFJmLE87QUErSFQsK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BkZlZpZXcuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwZGZqcywgRG9jdW1lbnQsIFBhZ2UgfSBmcm9tIFwicmVhY3QtcGRmXCI7XG4vLyBwZGZqcy5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9IGAvL3VucGtnLmNvbS9wZGZqcy1kaXN0QCR7cGRmanMudmVyc2lvbn0vYnVpbGQvcGRmLndvcmtlci5taW4uanNgO1xuLy8gaW1wb3J0IFwicmVhY3QtcGRmL2Rpc3QvZXNtL1BhZ2UvQW5ub3RhdGlvbkxheWVyLmNzc1wiO1xuLy8gaW1wb3J0IFwicmVhY3QtcGRmL2Rpc3QvZXNtL1BhZ2UvVGV4dExheWVyLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyBpbXBvcnQgcGRmbWFwIGZyb20gXCIuLi9wZGZtYXAxLmpzb25cIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgY01hcFVybDogXCJjbWFwcy9cIixcbiAgY01hcFBhY2tlZDogdHJ1ZSxcbiAgc3RhbmRhcmRGb250RGF0YVVybDogXCJzdGFuZGFyZF9mb250cy9cIixcbn07XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodFBhdHRlcm4odGV4dCwgcGF0dGVybikge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKFxuICAgIHBhdHRlcm4uZmluZCgoZSkgPT4gZSA9PSB0ZXh0KSxcbiAgICAodmFsdWUpID0+IGA8bWFyaz4ke3ZhbHVlfTwvbWFyaz5gXG4gICk7XG5cbiAgY29uc3Qgc3BsaXRUZXh0ID0gdGV4dC5zcGxpdChwYXR0ZXJuKTtcbiAgaWYgKHNwbGl0VGV4dC5sZW5ndGggPD0gMSkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHRleHQubWF0Y2gocGF0dGVybik7XG5cbiAgcmV0dXJuIHNwbGl0VGV4dC5yZWR1Y2UoXG4gICAgKGFyciwgZWxlbWVudCwgaW5kZXgpID0+XG4gICAgICBtYXRjaGVzW2luZGV4XVxuICAgICAgICA/IFsuLi5hcnIsIGVsZW1lbnQsIDxtYXJrPnttYXRjaGVzW2luZGV4XX08L21hcms+XVxuICAgICAgICA6IFsuLi5hcnIsIGVsZW1lbnRdLFxuICAgIFtdXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFRleHRJblNlbnRlbmNlKHRleHRBcnJheSwgc2VudGVuY2UpIHtcbiAgY29uc3Qgc3RyID0gdGV4dEFycmF5LmpvaW4oXCItLS0tLVwiKTtcbiAgY29uc3Qgc3RyMiA9IHNlbnRlbmNlLnNwbGl0KFwiIFwiKS5qb2luKFwiLS0tLS1cIik7XG4gIGNvbnNvbGUubG9nKHRleHRBcnJheS5maWx0ZXIoKHN0cikgPT4gc3RyICE9PSBcIiBcIikpO1xufVxuZnVuY3Rpb24gcmVwbGFjZUFycmF5KGZpbmQsIHJlcGxhY2UpIHtcbiAgdmFyIHJlcGxhY2VTdHJpbmcgPSB0aGlzO1xuICB2YXIgcmVnZXg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kW2ldLnN0ciwgXCJnXCIpO1xuICAgIGNvbnNvbGUubG9nKHJlZ2V4KTtcbiAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKHJlZ2V4LCByZXBsYWNlW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXBsYWNlU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBQZGZWaWV3KHsgcGFyYWdyYXBocyB9KSB7XG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKFwiL3BkZnMvdmlzaWZpdC5wZGZcIik7XG4gIGNvbnN0IFtudW1QYWdlcywgc2V0TnVtUGFnZXNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBmdW5jdGlvbiBvbkZpbGVDaGFuZ2UoZXZlbnQpIHtcbiAgLy8gICBzZXRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XG4gIC8vIH1cblxuICBmdW5jdGlvbiBvbkRvY3VtZW50TG9hZFN1Y2Nlc3MoeyBudW1QYWdlczogbmV4dE51bVBhZ2VzIH0pIHtcbiAgICBzZXROdW1QYWdlcyhuZXh0TnVtUGFnZXMpO1xuICB9XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCB7IHBhZ2UsIHBhcmEgfSA9IHJvdXRlci5xdWVyeTtcbiAgLy8gICBpZiAoIXBhcmEpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xuICAvLyAgICAgaWYgKHBhZ2UpIHtcbiAgLy8gICAgICAgc2V0UGFnZU51bWJlcihOdW1iZXIocGFnZSkpO1xuICAvLyAgICAgfVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgLy8gc2VhcmNoVGV4dEluU2VudGVuY2UodGV4dEFycmF5LCAnV2UgcGVyZm9ybScpXG4gIC8vICAgICB9LCAxMDAwKTtcbiAgLy8gICAgIHBkZm1hcC5tYXAoKGl0ZW0pID0+IHtcbiAgLy8gICAgICAgaWYgKE51bWJlcihpdGVtLmlkKSA9PSBwYXJhKSB7XG4gIC8vICAgICAgICAgc2V0UGFnZU51bWJlcihOdW1iZXIoaXRlbS5wYWdlKSk7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coaXRlbS5wYXJhZ3JhcGhzKTtcbiAgLy8gICAgICAgICBzZXRTZWFyY2hUZXh0KGl0ZW0ucGFyYWdyYXBocy5zcGxpdChcIiBcIikpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICB9XG4gIC8vIH0sIFtyb3V0ZXIucXVlcnkucGFnZSwgcm91dGVyLnF1ZXJ5LnBhcmFdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChwYXJhZ3JhcGhzKSB7XG4gIC8vICAgICBwZGZtYXAubWFwKChpdGVtKSA9PiB7XG4gIC8vICAgICAgIGlmIChOdW1iZXIoaXRlbS5pZCkgPT0gcGFyYWdyYXBocy5wYXJhZ3JhcGhzWzBdKSB7XG4gIC8vICAgICAgICAgc2V0UGFnZU51bWJlcihOdW1iZXIoaXRlbS5wYWdlKSk7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coaXRlbS5wYXJhZ3JhcGhzKTtcbiAgLy8gICAgICAgICBzZXRTZWFyY2hUZXh0KGl0ZW0ucGFyYWdyYXBocy5zcGxpdChcIiBcIikpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgc2V0UGFnZU51bWJlcigxKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtwYXJhZ3JhcGhzXSk7XG5cbiAgY29uc3QgdGV4dFJlbmRlcmVyID0gdXNlQ2FsbGJhY2soXG4gICAgKHRleHRJdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaGlnaGxpZ2h0UGF0dGVybih0ZXh0SXRlbS5zdHIsIHNlYXJjaFRleHQpO1xuICAgIH0sXG4gICAgW3NlYXJjaFRleHRdXG4gICk7XG5cbiAgY29uc3QgY2xpY2tlZCA9IChpbmRleCkgPT4ge1xuICAgIHBkZm1hcC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChOdW1iZXIoaXRlbS5pZCkgPT0gcGFyYWdyYXBocy5wYXJhZ3JhcGhzW2luZGV4XSkge1xuICAgICAgICBzZXRQYWdlTnVtYmVyKE51bWJlcihpdGVtLnBhZ2UpKTtcbiAgICAgICAgc2V0U2VhcmNoVGV4dChpdGVtLnBhcmFncmFwaHMuc3BsaXQoXCIgXCIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGRmdmlld1wiPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGRmdmlld19fY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGRmdmlld19fY29udGFpbmVyX19kb2N1bWVudFwiPlxuICAgICAgICAgIDxEb2N1bWVudFxuICAgICAgICAgICAgZmlsZT17ZmlsZX1cbiAgICAgICAgICAgIG9uTG9hZFN1Y2Nlc3M9e29uRG9jdW1lbnRMb2FkU3VjY2Vzc31cbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgIHBhZ2VOdW1iZXI9e3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICAgIGN1c3RvbVRleHRSZW5kZXJlcj17dGV4dFJlbmRlcmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RvY3VtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXdoaXRlIG1sLTEyIHRleHQtc21cIj5cbiAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAocGFyYWdyYXBocykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhZ3JhcGhzLnNlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgc2VjdGlvbnMgPSBwYXJhZ3JhcGhzLnNlY3Rpb25zLnJlcGxhY2UoLycvZywgJ1wiJyk7IC8vcmVwbGFjaW5nIGFsbCAnIHdpdGggXCJcbiAgICAgICAgICAgICAgICAgIGxldCBzY29yZXMgPSBwYXJhZ3JhcGhzLnNjb3JlcztcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb25zID0gSlNPTi5wYXJzZShzZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgIGxldCBidXR0b25zID0gW107XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgcGRmbWFwLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoaXRlbS5pZCkgPT0gcGFyYWdyYXBocy5wYXJhZ3JhcGhzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhID0gaXRlbS5wYXJhZ3JhcGhzLnNwbGl0KFwiIFwiKS5zbGljZSgwLCA3KS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xpY2tlZChpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVzW2ldIDwgMC43ID8gXCJiZy15ZWxsb3ctNTAwXCIgOiBcImJnLXJvc2UtODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSB0ZXh0LXdoaXRlIHctNDQgcHktNCByb3VuZGVkLWxnIHRleHQtY2VudGVyIGZvbnQtYm9sZCBtci0zYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY3Rpb25zW2ldfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyYX0uLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBkZlZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PdfView.jsx\n");

/***/ })

});