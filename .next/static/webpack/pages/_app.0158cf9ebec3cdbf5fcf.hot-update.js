webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Container/desktopNav.jsx":
/*!*********************************************!*\
  !*** ./components/Container/desktopNav.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DesktopNav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Home_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Home/dropdown */ "./components/Home/dropdown.jsx");
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useUser */ "./hooks/useUser.js");



var _jsxFileName = "/home/raulprtech/code/projects/houseForSale/components/Container/desktopNav.jsx",
    _this = undefined;






function DesktopNav(_ref) {
  var user = _ref.user;
  var data = ["Nombre", "Email"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "container flex-1 mx-auto flex items-center justify-between p-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: "/images/for-sale.png",
          alt: "logo",
          height: "45",
          width: "45",
          className: "z-30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: user.name,
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 20
      }, this), user === _hooks_useUser__WEBPACK_IMPORTED_MODULE_5__["USER_STATES"].NOT_LOGGED && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(List, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 47
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = DesktopNav;

var List = function List() {
  var links = [{
    href: "properties",
    label: "Propiedades"
  }, {
    href: "login",
    label: "Iniciar Sesión"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "flex items-center justify-between space-x-8 z-30",
      children: links.map(function (_ref2) {
        var href = _ref2.href,
            label = _ref2.label;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: href,
            className: "no-underline ",
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, "".concat(href).concat(label), false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c2 = List;

var _c, _c2;

$RefreshReg$(_c, "DesktopNav");
$RefreshReg$(_c2, "List");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIvZGVza3RvcE5hdi5qc3giXSwibmFtZXMiOlsiRGVza3RvcE5hdiIsInVzZXIiLCJkYXRhIiwibmFtZSIsIlVTRVJfU1RBVEVTIiwiTk9UX0xPR0dFRCIsIkxpc3QiLCJsaW5rcyIsImhyZWYiLCJsYWJlbCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQThCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzNDLE1BQUlDLElBQUksR0FBRyxDQUFDLFFBQUQsRUFBVyxPQUFYLENBQVg7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGdFQUFmO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFDLHNCQUROO0FBRUUsYUFBRyxFQUFDLE1BRk47QUFHRSxnQkFBTSxFQUFDLElBSFQ7QUFJRSxlQUFLLEVBQUMsSUFKUjtBQUtFLG1CQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBVUtELElBQUksaUJBQUkscUVBQUMsc0RBQUQ7QUFBVSxZQUFJLEVBQUVBLElBQUksQ0FBQ0UsSUFBckI7QUFBMkIsWUFBSSxFQUFFRjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVmIsRUFXS0EsSUFBSSxLQUFLRywwREFBVyxDQUFDQyxVQUFyQixpQkFBbUMscUVBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWHhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUJEO0tBcEJ1QkwsVTs7QUFzQnhCLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFBRUMsUUFBSSxFQUFFLFlBQVI7QUFBc0JDLFNBQUssRUFBRTtBQUE3QixHQURZLEVBRVo7QUFBRUQsUUFBSSxFQUFFLE9BQVI7QUFBaUJDLFNBQUssRUFBRTtBQUF4QixHQUZZLENBQWQ7QUFLQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUksZUFBUyxFQUFDLGtEQUFkO0FBQUEsZ0JBQ0dGLEtBQUssQ0FBQ0csR0FBTixDQUFVO0FBQUEsWUFBR0YsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBU0MsS0FBVCxTQUFTQSxLQUFUO0FBQUEsNEJBQ1Q7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUVELElBQVo7QUFBa0IscUJBQVMsRUFBQyxlQUE1QjtBQUFBLHNCQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFBWUQsSUFBWixTQUFtQkMsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFhRCxDQW5CRDs7TUFBTUgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAxNThjZjllYmVjM2NkYmY1ZmNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi9Ib21lL2Ryb3Bkb3duXCJcbmltcG9ydCB7IFVTRVJfU1RBVEVTIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVVzZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNrdG9wTmF2KHsgdXNlciB9KSB7XG4gIGxldCBkYXRhID0gW1wiTm9tYnJlXCIsIFwiRW1haWxcIl1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4LTEgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Zvci1zYWxlLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6LTMwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHt1c2VyICYmIDxEcm9wZG93biBuYW1lPXt1c2VyLm5hbWV9IHVzZXI9e3VzZXJ9IC8+fVxuICAgICAgICAgIHt1c2VyID09PSBVU0VSX1NUQVRFUy5OT1RfTE9HR0VEICYmIDxMaXN0IC8+fVxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgeyBocmVmOiBcInByb3BlcnRpZXNcIiwgbGFiZWw6IFwiUHJvcGllZGFkZXNcIiB9LFxuICAgIHsgaHJlZjogXCJsb2dpblwiLCBsYWJlbDogXCJJbmljaWFyIFNlc2nDs25cIiB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTggei0zMFwiPlxuICAgICAgICB7bGlua3MubWFwKCh7IGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtgJHtocmVmfSR7bGFiZWx9YH0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9XCJuby11bmRlcmxpbmUgXCI+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=