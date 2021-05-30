webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Container/mobileNav.jsx":
/*!********************************************!*\
  !*** ./components/Container/mobileNav.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileNav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useUser */ "./hooks/useUser.js");



var _jsxFileName = "/home/raulprtech/code/projects/houseForSale/components/Container/mobileNav.jsx",
    _s = $RefreshSig$(),
    _this2 = undefined;




function MobileNav(_ref) {
  _s();

  var _this = this;

  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      links = _useState[0],
      setLinks = _useState[1];

  var linksLogin = [{
    href: '/',
    label: 'Inicio'
  }, {
    href: '/explore',
    label: 'Explorar'
  }, {
    href: '/tickets/123',
    label: 'Mis Reservas'
  }, {
    href: "/profile/123",
    label: 'Perfil'
  }]; //${user.uid}

  var linksLogout = [{
    href: '/',
    label: 'Inicio'
  }, {
    href: '/explore',
    label: 'Explorar'
  }, {
    href: '/login',
    label: 'Iniciar Sesión'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (user) {
      setLinks(linksLogin);
    } else if (user === _hooks_useUser__WEBPACK_IMPORTED_MODULE_3__["USER_STATES"].NOT_KNOW) {
      setLinks(linksLogout);
    } else if (user === _hooks_useUser__WEBPACK_IMPORTED_MODULE_3__["USER_STATES"].NOT_LOGGED) {
      setLinks(linksLogout);
    }
  }, [user]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "bg-white absolute bottom-0 w-full border-t border-gray-200 flex z-40",
      children: links.map(function (_ref2) {
        var href = _ref2.href,
            label = _ref2.label;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: href,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "flex flex-grow items-center justify-center p-2 text-balck-500 hover:text-green-500",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Element, {
              label: label,
              children: iconSelect("".concat(label))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this)
        }, "".concat(href).concat(label), false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(MobileNav, "/eiUDgQvj0Oit/+pwlNd12b+Tf8=");

_c = MobileNav;

var Element = function Element(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-center text-gray-600 group",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "block h-8 text-3xl leading-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        fill: "currentColor",
        className: "w-6  mx-auto group-hover:text-primary text-gray-600",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "block text-xs leading-none group-hover:text-primary",
      children: props.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this2)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, _this2);
};

_c2 = Element;

function iconSelect(href) {
  switch (href) {
    case "Inicio":
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)
      }, void 0, false);

    case "Cápsulas":
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M17,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,17,0ZM7,2H17a3,3,0,0,1,3,3v6H4V5A3,3,0,0,1,7,2ZM17,22H7a3,3,0,0,1-3-3V13H20v6A3,3,0,0,1,17,22Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this)
      }, void 0, false);

    case "Mis Reservas":
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M16,0h-.13a2.02,2.02,0,0,0-1.941,1.532,2,2,0,0,1-3.858,0A2.02,2.02,0,0,0,8.13,0H8A5.006,5.006,0,0,0,3,5V21a3,3,0,0,0,3,3H8.13a2.02,2.02,0,0,0,1.941-1.532,2,2,0,0,1,3.858,0A2.02,2.02,0,0,0,15.87,24H18a3,3,0,0,0,3-3V5A5.006,5.006,0,0,0,16,0Zm2,22-2.143-.063A4,4,0,0,0,8.13,22H6a1,1,0,0,1-1-1V17H7a1,1,0,0,0,0-2H5V5A3,3,0,0,1,8,2l.143.063A4.01,4.01,0,0,0,12,5a4.071,4.071,0,0,0,3.893-3H16a3,3,0,0,1,3,3V15H17a1,1,0,0,0,0,2h2v4A1,1,0,0,1,18,22Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M13,15H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this)]
      }, void 0, true);

    case "Perfil":
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM7,22V21a5,5,0,0,1,10,0v1Zm15-3a3,3,0,0,1-3,3V21A7,7,0,0,0,5,21v1a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,10Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 252
        }, this)]
      }, void 0, true);

    case "Iniciar Sesión":
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM7,22V21a5,5,0,0,1,10,0v1Zm15-3a3,3,0,0,1-3,3V21A7,7,0,0,0,5,21v1a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,10Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 252
        }, this)]
      }, void 0, true);
  }
}

var _c, _c2;

$RefreshReg$(_c, "MobileNav");
$RefreshReg$(_c2, "Element");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIvbW9iaWxlTmF2LmpzeCJdLCJuYW1lcyI6WyJNb2JpbGVOYXYiLCJ1c2VyIiwidXNlU3RhdGUiLCJsaW5rcyIsInNldExpbmtzIiwibGlua3NMb2dpbiIsImhyZWYiLCJsYWJlbCIsImxpbmtzTG9nb3V0IiwidXNlRWZmZWN0IiwiVVNFUl9TVEFURVMiLCJOT1RfS05PVyIsIk5PVF9MT0dHRUQiLCJtYXAiLCJpY29uU2VsZWN0IiwiRWxlbWVudCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsU0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFFZEMsc0RBQVEsQ0FBQyxFQUFELENBRk07QUFBQSxNQUVqQ0MsS0FGaUM7QUFBQSxNQUUxQkMsUUFGMEI7O0FBSXhDLE1BQU1DLFVBQVUsR0FBRyxDQUNmO0FBQUVDLFFBQUksRUFBRSxHQUFSO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQURlLEVBRWY7QUFBRUQsUUFBSSxFQUFFLFVBQVI7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQUZlLEVBR2Y7QUFBRUQsUUFBSSxFQUFFLGNBQVI7QUFBd0JDLFNBQUssRUFBRTtBQUEvQixHQUhlLEVBSWY7QUFBRUQsUUFBSSxnQkFBTjtBQUF3QkMsU0FBSyxFQUFFO0FBQS9CLEdBSmUsQ0FBbkIsQ0FKd0MsQ0FVeEM7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQ2hCO0FBQUVGLFFBQUksRUFBRSxHQUFSO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQURnQixFQUVoQjtBQUFFRCxRQUFJLEVBQUUsVUFBUjtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBRmdCLEVBR2hCO0FBQUVELFFBQUksRUFBRSxRQUFSO0FBQWtCQyxTQUFLLEVBQUU7QUFBekIsR0FI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QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQzTztBQUFBLHNCQURKO0FBbENSO0FBd0NIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWNmMTIyZTQ4ZmFiMDJlMjA2OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgVVNFUl9TVEFURVMgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVc2VyJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVOYXYoeyB1c2VyIH0pIHtcblxuICAgIGNvbnN0IFtsaW5rcywgc2V0TGlua3NdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgbGlua3NMb2dpbiA9IFtcbiAgICAgICAgeyBocmVmOiAnLycsIGxhYmVsOiAnSW5pY2lvJyB9LFxuICAgICAgICB7IGhyZWY6ICcvZXhwbG9yZScsIGxhYmVsOiAnRXhwbG9yYXInIH0sXG4gICAgICAgIHsgaHJlZjogJy90aWNrZXRzLzEyMycsIGxhYmVsOiAnTWlzIFJlc2VydmFzJyB9LFxuICAgICAgICB7IGhyZWY6IGAvcHJvZmlsZS8xMjNgLCBsYWJlbDogJ1BlcmZpbCcgfVxuICAgIF1cbiAgICAvLyR7dXNlci51aWR9XG4gICAgY29uc3QgbGlua3NMb2dvdXQgPSBbXG4gICAgICAgIHsgaHJlZjogJy8nLCBsYWJlbDogJ0luaWNpbycgfSxcbiAgICAgICAgeyBocmVmOiAnL2V4cGxvcmUnLCBsYWJlbDogJ0V4cGxvcmFyJyB9LFxuICAgICAgICB7IGhyZWY6ICcvbG9naW4nLCBsYWJlbDogJ0luaWNpYXIgU2VzacOzbicgfVxuICAgIF1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBzZXRMaW5rcyhsaW5rc0xvZ2luKVxuICAgICAgICB9IGVsc2UgaWYgKHVzZXIgPT09IFVTRVJfU1RBVEVTLk5PVF9LTk9XKSB7XG4gICAgICAgICAgICBzZXRMaW5rcyhsaW5rc0xvZ291dClcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyID09PSBVU0VSX1NUQVRFUy5OT1RfTE9HR0VEKSB7XG4gICAgICAgICAgICBzZXRMaW5rcyhsaW5rc0xvZ291dClcbiAgICAgICAgfVxuICAgIH0sIFt1c2VyXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgZmxleCB6LTQwXCI+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgoeyBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17YCR7aHJlZn0ke2xhYmVsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWdyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiB0ZXh0LWJhbGNrLTUwMCBob3Zlcjp0ZXh0LWdyZWVuLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGVtZW50IGxhYmVsPXtsYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uU2VsZWN0KGAke2xhYmVsfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRWxlbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBFbGVtZW50ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwIGdyb3VwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBoLTggdGV4dC0zeGwgbGVhZGluZy04XCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02ICBteC1hdXRvIGdyb3VwLWhvdmVyOnRleHQtcHJpbWFyeSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgbGVhZGluZy1ub25lIGdyb3VwLWhvdmVyOnRleHQtcHJpbWFyeVwiPntwcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gaWNvblNlbGVjdChocmVmKSB7XG4gICAgc3dpdGNoIChocmVmKSB7XG4gICAgICAgIGNhc2UgXCJJbmljaW9cIjpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjMuMTIxLDkuMDY5LDE1LjUzNiwxLjQ4M2E1LjAwOCw1LjAwOCwwLDAsMC03LjA3MiwwTC44NzksOS4wNjlBMi45NzgsMi45NzgsMCwwLDAsMCwxMS4xOXY5LjgxN2EzLDMsMCwwLDAsMywzSDIxYTMsMywwLDAsMCwzLTNWMTEuMTlBMi45NzgsMi45NzgsMCwwLDAsMjMuMTIxLDkuMDY5Wk0xNSwyMi4wMDdIOVYxOC4wNzNhMywzLDAsMCwxLDYsMFptNy0xYTEsMSwwLDAsMS0xLDFIMTdWMTguMDczYTUsNSwwLDAsMC0xMCwwdjMuOTM0SDNhMSwxLDAsMCwxLTEtMVYxMS4xOWExLjAwOCwxLjAwOCwwLDAsMSwuMjkzLS43MDdMOS44NzgsMi45YTMuMDA4LDMuMDA4LDAsMCwxLDQuMjQ0LDBsNy41ODUsNy41ODZBMS4wMDgsMS4wMDgsMCwwLDEsMjIsMTEuMTlaXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgY2FzZSBcIkPDoXBzdWxhc1wiOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE3LDBIN0E1LjAwNiw1LjAwNiwwLDAsMCwyLDVWMTlhNS4wMDYsNS4wMDYsMCwwLDAsNSw1SDE3YTUuMDA2LDUuMDA2LDAsMCwwLDUtNVY1QTUuMDA2LDUuMDA2LDAsMCwwLDE3LDBaTTcsMkgxN2EzLDMsMCwwLDEsMywzdjZINFY1QTMsMywwLDAsMSw3LDJaTTE3LDIySDdhMywzLDAsMCwxLTMtM1YxM0gyMHY2QTMsMywwLDAsMSwxNywyMlpcIiAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICBjYXNlIFwiTWlzIFJlc2VydmFzXCI6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE2LDBoLS4xM2EyLjAyLDIuMDIsMCwwLDAtMS45NDEsMS41MzIsMiwyLDAsMCwxLTMuODU4LDBBMi4wMiwyLjAyLDAsMCwwLDguMTMsMEg4QTUuMDA2LDUuMDA2LDAsMCwwLDMsNVYyMWEzLDMsMCwwLDAsMywzSDguMTNhMi4wMiwyLjAyLDAsMCwwLDEuOTQxLTEuNTMyLDIsMiwwLDAsMSwzLjg1OCwwQTIuMDIsMi4wMiwwLDAsMCwxNS44NywyNEgxOGEzLDMsMCwwLDAsMy0zVjVBNS4wMDYsNS4wMDYsMCwwLDAsMTYsMFptMiwyMi0yLjE0My0uMDYzQTQsNCwwLDAsMCw4LjEzLDIySDZhMSwxLDAsMCwxLTEtMVYxN0g3YTEsMSwwLDAsMCwwLTJINVY1QTMsMywwLDAsMSw4LDJsLjE0My4wNjNBNC4wMSw0LjAxLDAsMCwwLDEyLDVhNC4wNzEsNC4wNzEsMCwwLDAsMy44OTMtM0gxNmEzLDMsMCwwLDEsMywzVjE1SDE3YTEsMSwwLDAsMCwwLDJoMnY0QTEsMSwwLDAsMSwxOCwyMlpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMywxNUgxMWExLDEsMCwwLDAsMCwyaDJhMSwxLDAsMCwwLDAtMlpcIiAvPlxuICAgICAgICAgICAgICAgIDwvPlxuXG4gICAgICAgICAgICApXG4gICAgICAgIGNhc2UgXCJQZXJmaWxcIjpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOSwwSDVBNS4wMDYsNS4wMDYsMCwwLDAsMCw1VjE5YTUuMDA2LDUuMDA2LDAsMCwwLDUsNUgxOWE1LjAwNiw1LjAwNiwwLDAsMCw1LTVWNUE1LjAwNiw1LjAwNiwwLDAsMCwxOSwwWk03LDIyVjIxYTUsNSwwLDAsMSwxMCwwdjFabTE1LTNhMywzLDAsMCwxLTMsM1YyMUE3LDcsMCwwLDAsNSwyMXYxYTMsMywwLDAsMS0zLTNWNUEzLDMsMCwwLDEsNSwySDE5YTMsMywwLDAsMSwzLDNaXCIgLz48cGF0aCBkPVwiTTEyLDRhNCw0LDAsMSwwLDQsNEE0LDQsMCwwLDAsMTIsNFptMCw2YTIsMiwwLDEsMSwyLTJBMiwyLDAsMCwxLDEyLDEwWlwiIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgIGNhc2UgXCJJbmljaWFyIFNlc2nDs25cIjpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOSwwSDVBNS4wMDYsNS4wMDYsMCwwLDAsMCw1VjE5YTUuMDA2LDUuMDA2LDAsMCwwLDUsNUgxOWE1LjAwNiw1LjAwNiwwLDAsMCw1LTVWNUE1LjAwNiw1LjAwNiwwLDAsMCwxOSwwWk03LDIyVjIxYTUsNSwwLDAsMSwxMCwwdjFabTE1LTNhMywzLDAsMCwxLTMsM1YyMUE3LDcsMCwwLDAsNSwyMXYxYTMsMywwLDAsMS0zLTNWNUEzLDMsMCwwLDEsNSwySDE5YTMsMywwLDAsMSwzLDNaXCIgLz48cGF0aCBkPVwiTTEyLDRhNCw0LDAsMSwwLDQsNEE0LDQsMCwwLDAsMTIsNFptMCw2YTIsMiwwLDEsMSwyLTJBMiwyLDAsMCwxLDEyLDEwWlwiIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==