webpackHotUpdate_N_E("pages/index",{

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
    href: '/booking',
    label: 'Cápsulas'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIvbW9iaWxlTmF2LmpzeCJdLCJuYW1lcyI6WyJNb2JpbGVOYXYiLCJ1c2VyIiwidXNlU3RhdGUiLCJsaW5rcyIsInNldExpbmtzIiwibGlua3NMb2dpbiIsImhyZWYiLCJsYWJlbCIsImxpbmtzTG9nb3V0IiwidXNlRWZmZWN0IiwiVVNFUl9TVEFURVMiLCJOT1RfS05PVyIsIk5PVF9MT0dHRUQiLCJtYXAiLCJpY29uU2VsZWN0IiwiRWxlbWVudCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsU0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFFZEMsc0RBQVEsQ0FBQyxFQUFELENBRk07QUFBQSxNQUVqQ0MsS0FGaUM7QUFBQSxNQUUxQkMsUUFGMEI7O0FBSXhDLE1BQU1DLFVBQVUsR0FBRyxDQUNmO0FBQUVDLFFBQUksRUFBRSxHQUFSO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQURlLEVBRWY7QUFBRUQsUUFBSSxFQUFFLFVBQVI7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQUZlLEVBR2Y7QUFBRUQsUUFBSSxFQUFFLGNBQVI7QUFBd0JDLFNBQUssRUFBRTtBQUEvQixHQUhlLEVBSWY7QUFBRUQsUUFBSSxnQkFBTjtBQUF3QkMsU0FBSyxFQUFFO0FBQS9CLEdBSmUsQ0FBbkIsQ0FKd0MsQ0FVeEM7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQ2hCO0FBQUVGLFFBQUksRUFBRSxHQUFSO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQURnQixFQUVoQjtBQUFFRCxRQUFJLEVBQUUsVUFBUjtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBRmdCLEVBR2hCO0FBQUVELFFBQUksRUFBRSxRQUFSO0FBQWtCQyxTQUFLLEVBQUU7QUFBekIsR0FI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QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQzTztBQUFBLHNCQURKO0FBbENSO0FBd0NIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ4MWU2NzMxNDRkZDE3MDQyNzhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFVTRVJfU1RBVEVTIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVXNlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlTmF2KHsgdXNlciB9KSB7XG5cbiAgICBjb25zdCBbbGlua3MsIHNldExpbmtzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGxpbmtzTG9naW4gPSBbXG4gICAgICAgIHsgaHJlZjogJy8nLCBsYWJlbDogJ0luaWNpbycgfSxcbiAgICAgICAgeyBocmVmOiAnL2V4cGxvcmUnLCBsYWJlbDogJ0V4cGxvcmFyJyB9LFxuICAgICAgICB7IGhyZWY6ICcvdGlja2V0cy8xMjMnLCBsYWJlbDogJ01pcyBSZXNlcnZhcycgfSxcbiAgICAgICAgeyBocmVmOiBgL3Byb2ZpbGUvMTIzYCwgbGFiZWw6ICdQZXJmaWwnIH1cbiAgICBdXG4gICAgLy8ke3VzZXIudWlkfVxuICAgIGNvbnN0IGxpbmtzTG9nb3V0ID0gW1xuICAgICAgICB7IGhyZWY6ICcvJywgbGFiZWw6ICdJbmljaW8nIH0sXG4gICAgICAgIHsgaHJlZjogJy9ib29raW5nJywgbGFiZWw6ICdDw6Fwc3VsYXMnIH0sXG4gICAgICAgIHsgaHJlZjogJy9sb2dpbicsIGxhYmVsOiAnSW5pY2lhciBTZXNpw7NuJyB9XG4gICAgXVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHNldExpbmtzKGxpbmtzTG9naW4pXG4gICAgICAgIH0gZWxzZSBpZiAodXNlciA9PT0gVVNFUl9TVEFURVMuTk9UX0tOT1cpIHtcbiAgICAgICAgICAgIHNldExpbmtzKGxpbmtzTG9nb3V0KVxuICAgICAgICB9IGVsc2UgaWYgKHVzZXIgPT09IFVTRVJfU1RBVEVTLk5PVF9MT0dHRUQpIHtcbiAgICAgICAgICAgIHNldExpbmtzKGxpbmtzTG9nb3V0KVxuICAgICAgICB9XG4gICAgfSwgW3VzZXJdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBmbGV4IHotNDBcIj5cbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKCh7IGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtgJHtocmVmfSR7bGFiZWx9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHRleHQtYmFsY2stNTAwIGhvdmVyOnRleHQtZ3JlZW4tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVsZW1lbnQgbGFiZWw9e2xhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25TZWxlY3QoYCR7bGFiZWx9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FbGVtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IEVsZW1lbnQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgZ3JvdXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGgtOCB0ZXh0LTN4bCBsZWFkaW5nLThcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgIG14LWF1dG8gZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5IHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBsZWFkaW5nLW5vbmUgZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5XCI+e3Byb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBpY29uU2VsZWN0KGhyZWYpIHtcbiAgICBzd2l0Y2ggKGhyZWYpIHtcbiAgICAgICAgY2FzZSBcIkluaWNpb1wiOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yMy4xMjEsOS4wNjksMTUuNTM2LDEuNDgzYTUuMDA4LDUuMDA4LDAsMCwwLTcuMDcyLDBMLjg3OSw5LjA2OUEyLjk3OCwyLjk3OCwwLDAsMCwwLDExLjE5djkuODE3YTMsMywwLDAsMCwzLDNIMjFhMywzLDAsMCwwLDMtM1YxMS4xOUEyLjk3OCwyLjk3OCwwLDAsMCwyMy4xMjEsOS4wNjlaTTE1LDIyLjAwN0g5VjE4LjA3M2EzLDMsMCwwLDEsNiwwWm03LTFhMSwxLDAsMCwxLTEsMUgxN1YxOC4wNzNhNSw1LDAsMCwwLTEwLDB2My45MzRIM2ExLDEsMCwwLDEtMS0xVjExLjE5YTEuMDA4LDEuMDA4LDAsMCwxLC4yOTMtLjcwN0w5Ljg3OCwyLjlhMy4wMDgsMy4wMDgsMCwwLDEsNC4yNDQsMGw3LjU4NSw3LjU4NkExLjAwOCwxLjAwOCwwLDAsMSwyMiwxMS4xOVpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICBjYXNlIFwiQ8OhcHN1bGFzXCI6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcsMEg3QTUuMDA2LDUuMDA2LDAsMCwwLDIsNVYxOWE1LjAwNiw1LjAwNiwwLDAsMCw1LDVIMTdhNS4wMDYsNS4wMDYsMCwwLDAsNS01VjVBNS4wMDYsNS4wMDYsMCwwLDAsMTcsMFpNNywySDE3YTMsMywwLDAsMSwzLDN2Nkg0VjVBMywzLDAsMCwxLDcsMlpNMTcsMjJIN2EzLDMsMCwwLDEtMy0zVjEzSDIwdjZBMywzLDAsMCwxLDE3LDIyWlwiIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgIGNhc2UgXCJNaXMgUmVzZXJ2YXNcIjpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTYsMGgtLjEzYTIuMDIsMi4wMiwwLDAsMC0xLjk0MSwxLjUzMiwyLDIsMCwwLDEtMy44NTgsMEEyLjAyLDIuMDIsMCwwLDAsOC4xMywwSDhBNS4wMDYsNS4wMDYsMCwwLDAsMyw1VjIxYTMsMywwLDAsMCwzLDNIOC4xM2EyLjAyLDIuMDIsMCwwLDAsMS45NDEtMS41MzIsMiwyLDAsMCwxLDMuODU4LDBBMi4wMiwyLjAyLDAsMCwwLDE1Ljg3LDI0SDE4YTMsMywwLDAsMCwzLTNWNUE1LjAwNiw1LjAwNiwwLDAsMCwxNiwwWm0yLDIyLTIuMTQzLS4wNjNBNCw0LDAsMCwwLDguMTMsMjJINmExLDEsMCwwLDEtMS0xVjE3SDdhMSwxLDAsMCwwLDAtMkg1VjVBMywzLDAsMCwxLDgsMmwuMTQzLjA2M0E0LjAxLDQuMDEsMCwwLDAsMTIsNWE0LjA3MSw0LjA3MSwwLDAsMCwzLjg5My0zSDE2YTMsMywwLDAsMSwzLDNWMTVIMTdhMSwxLDAsMCwwLDAsMmgydjRBMSwxLDAsMCwxLDE4LDIyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzLDE1SDExYTEsMSwwLDAsMCwwLDJoMmExLDEsMCwwLDAsMC0yWlwiIC8+XG4gICAgICAgICAgICAgICAgPC8+XG5cbiAgICAgICAgICAgIClcbiAgICAgICAgY2FzZSBcIlBlcmZpbFwiOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LDBINUE1LjAwNiw1LjAwNiwwLDAsMCwwLDVWMTlhNS4wMDYsNS4wMDYsMCwwLDAsNSw1SDE5YTUuMDA2LDUuMDA2LDAsMCwwLDUtNVY1QTUuMDA2LDUuMDA2LDAsMCwwLDE5LDBaTTcsMjJWMjFhNSw1LDAsMCwxLDEwLDB2MVptMTUtM2EzLDMsMCwwLDEtMywzVjIxQTcsNywwLDAsMCw1LDIxdjFhMywzLDAsMCwxLTMtM1Y1QTMsMywwLDAsMSw1LDJIMTlhMywzLDAsMCwxLDMsM1pcIiAvPjxwYXRoIGQ9XCJNMTIsNGE0LDQsMCwxLDAsNCw0QTQsNCwwLDAsMCwxMiw0Wm0wLDZhMiwyLDAsMSwxLDItMkEyLDIsMCwwLDEsMTIsMTBaXCIgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgY2FzZSBcIkluaWNpYXIgU2VzacOzblwiOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LDBINUE1LjAwNiw1LjAwNiwwLDAsMCwwLDVWMTlhNS4wMDYsNS4wMDYsMCwwLDAsNSw1SDE5YTUuMDA2LDUuMDA2LDAsMCwwLDUtNVY1QTUuMDA2LDUuMDA2LDAsMCwwLDE5LDBaTTcsMjJWMjFhNSw1LDAsMCwxLDEwLDB2MVptMTUtM2EzLDMsMCwwLDEtMywzVjIxQTcsNywwLDAsMCw1LDIxdjFhMywzLDAsMCwxLTMtM1Y1QTMsMywwLDAsMSw1LDJIMTlhMywzLDAsMCwxLDMsM1pcIiAvPjxwYXRoIGQ9XCJNMTIsNGE0LDQsMCwxLDAsNCw0QTQsNCwwLDAsMCwxMiw0Wm0wLDZhMiwyLDAsMSwxLDItMkEyLDIsMCwwLDEsMTIsMTBaXCIgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9