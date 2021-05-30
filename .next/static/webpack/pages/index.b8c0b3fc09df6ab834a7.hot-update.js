webpackHotUpdate_N_E("pages/index",{

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
      className: "container flex-1 mx-auto shadow",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-2",
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
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: user.name,
          user: user
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 20
        }, this), user === _hooks_useUser__WEBPACK_IMPORTED_MODULE_5__["USER_STATES"].NOT_LOGGED && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(List, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 47
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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
            lineNumber: 44,
            columnNumber: 13
          }, _this)
        }, "".concat(href).concat(label), false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIvZGVza3RvcE5hdi5qc3giXSwibmFtZXMiOlsiRGVza3RvcE5hdiIsInVzZXIiLCJkYXRhIiwibmFtZSIsIlVTRVJfU1RBVEVTIiwiTk9UX0xPR0dFRCIsIkxpc3QiLCJsaW5rcyIsImhyZWYiLCJsYWJlbCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQThCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzNDLE1BQUlDLElBQUksR0FBRyxDQUFDLFFBQUQsRUFBVyxPQUFYLENBQVg7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHVDQUFmO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsZUFBRyxFQUFDLHNCQUROO0FBRUUsZUFBRyxFQUFDLE1BRk47QUFHRSxrQkFBTSxFQUFDLElBSFQ7QUFJRSxpQkFBSyxFQUFDLElBSlI7QUFLRSxxQkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFVR0QsSUFBSSxpQkFBSSxxRUFBQyxzREFBRDtBQUFVLGNBQUksRUFBRUEsSUFBSSxDQUFDRSxJQUFyQjtBQUEyQixjQUFJLEVBQUVGO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVlgsRUFXR0EsSUFBSSxLQUFLRywwREFBVyxDQUFDQyxVQUFyQixpQkFBbUMscUVBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVh0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtQkQ7S0F0QnVCTCxVOztBQXdCeEIsSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUFFQyxRQUFJLEVBQUUsWUFBUjtBQUFzQkMsU0FBSyxFQUFFO0FBQTdCLEdBRFksRUFFWjtBQUFFRCxRQUFJLEVBQUUsT0FBUjtBQUFpQkMsU0FBSyxFQUFFO0FBQXhCLEdBRlksQ0FBZDtBQUtBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSSxlQUFTLEVBQUMsa0RBQWQ7QUFBQSxnQkFDR0YsS0FBSyxDQUFDRyxHQUFOLENBQVU7QUFBQSxZQUFHRixJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFTQyxLQUFULFNBQVNBLEtBQVQ7QUFBQSw0QkFDVDtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRUQsSUFBWjtBQUFrQixxQkFBUyxFQUFDLGVBQTVCO0FBQUEsc0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQUFZRCxJQUFaLFNBQW1CQyxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWFELENBbkJEOztNQUFNSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI4YzBiM2ZjMDlkZjZhYjgzNGE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi9Ib21lL2Ryb3Bkb3duXCJcbmltcG9ydCB7IFVTRVJfU1RBVEVTIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVVzZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNrdG9wTmF2KHsgdXNlciB9KSB7XG4gIGxldCBkYXRhID0gW1wiTm9tYnJlXCIsIFwiRW1haWxcIl1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4LTEgbXgtYXV0byBzaGFkb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Zvci1zYWxlLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6LTMwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHt1c2VyICYmIDxEcm9wZG93biBuYW1lPXt1c2VyLm5hbWV9IHVzZXI9e3VzZXJ9IC8+fVxuICAgICAgICAgIHt1c2VyID09PSBVU0VSX1NUQVRFUy5OT1RfTE9HR0VEICYmIDxMaXN0IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHsgaHJlZjogXCJwcm9wZXJ0aWVzXCIsIGxhYmVsOiBcIlByb3BpZWRhZGVzXCIgfSxcbiAgICB7IGhyZWY6IFwibG9naW5cIiwgbGFiZWw6IFwiSW5pY2lhciBTZXNpw7NuXCIgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC04IHotMzBcIj5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17YCR7aHJlZn0ke2xhYmVsfWB9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwibm8tdW5kZXJsaW5lIFwiPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9