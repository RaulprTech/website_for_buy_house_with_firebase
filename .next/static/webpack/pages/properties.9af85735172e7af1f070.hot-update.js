webpackHotUpdate_N_E("pages/properties",{

/***/ "./pages/properties.js":
/*!*****************************!*\
  !*** ./pages/properties.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Properties; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Property */ "./components/Property.jsx");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Select */ "./components/Select.jsx");
/* harmony import */ var _data_house_house_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/house/house.json */ "./data/house/house.json");
var _data_house_house_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/house/house.json */ "./data/house/house.json", 1);

var _jsxFileName = "/home/raulprtech/code/projects/houseForSale/pages/properties.js";




function Properties() {
  var _this = this;

  var lugares = ["Escuelas", "Parques", "Plazas", "Centro", "playa"];
  var cuartos = ["1", "2", "3", "4 o mas"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: "container max-w-8xl mx-auto my-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "max-w-full flex justify-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "inline-block text-3xl font-bold leading-tight text-gray-900 px-6 ml-2",
        children: "Casas en Merida, Yucatan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "Cerca de",
          data: lugares
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: "Cuartos",
          data: cuartos
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "flex flex-wrap justify-center md:justify-start",
      children: _data_house_house_json__WEBPACK_IMPORTED_MODULE_4__.houses.map(function (house) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Property__WEBPACK_IMPORTED_MODULE_2__["default"], {
          data: house
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
_c = Properties;

var _c;

$RefreshReg$(_c, "Properties");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvcGVydGllcy5qcyJdLCJuYW1lcyI6WyJQcm9wZXJ0aWVzIiwibHVnYXJlcyIsImN1YXJ0b3MiLCJob3VzZXMiLCJtYXAiLCJob3VzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxNQUFJQyxPQUFPLEdBQUcsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixRQUF4QixFQUFrQyxRQUFsQyxFQUE0QyxPQUE1QyxDQUFkO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLFNBQWhCLENBQWQ7QUFDQSxzQkFDRTtBQUFNLGFBQVMsRUFBQyxrQ0FBaEI7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBQyxpQ0FBbEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsdUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBQyw2QkFBZjtBQUFBLGdDQUNFLHFFQUFDLDBEQUFEO0FBQVEsY0FBSSxFQUFDLFVBQWI7QUFBd0IsY0FBSSxFQUFFRDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsMERBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUF1QixjQUFJLEVBQUVDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRTtBQUFTLGVBQVMsRUFBQyxnREFBbkI7QUFBQSxnQkFFSUMsbURBQU0sQ0FBQ0EsTUFBUCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLEtBQUQ7QUFBQSw0QkFDaEIscUVBQUMsNERBQUQ7QUFBVSxjQUFJLEVBQUVBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBbEI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7S0F4QnVCTCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb3BlcnRpZXMuOWFmODU3MzUxNzJlN2FmMWYwNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BlcnR5IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb3BlcnR5XCJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0XCJcbmltcG9ydCBob3VzZXMgZnJvbSBcIi4uL2RhdGEvaG91c2UvaG91c2UuanNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3BlcnRpZXMoKSB7XG4gIGxldCBsdWdhcmVzID0gW1wiRXNjdWVsYXNcIiwgXCJQYXJxdWVzXCIsIFwiUGxhemFzXCIsIFwiQ2VudHJvXCIsIFwicGxheWFcIl1cbiAgbGV0IGN1YXJ0b3MgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0IG8gbWFzXCJdXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG1heC13LTh4bCBteC1hdXRvIG15LTRcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWF4LXctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgcHgtNiBtbC0yXCI+XG4gICAgICAgICAgQ2FzYXMgZW4gTWVyaWRhLCBZdWNhdGFuXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPFNlbGVjdCBuYW1lPVwiQ2VyY2EgZGVcIiBkYXRhPXtsdWdhcmVzfSAvPlxuICAgICAgICAgIDxTZWxlY3QgbmFtZT1cIkN1YXJ0b3NcIiBkYXRhPXtjdWFydG9zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyPjwvaHI+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAge1xuICAgICAgICAgIGhvdXNlcy5ob3VzZXMubWFwKChob3VzZSkgPT4gKFxuICAgICAgICAgICAgPFByb3BlcnR5IGRhdGE9e2hvdXNlfS8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==