module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/booths/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/booths/index.js":
/*!***********************************!*\
  !*** ./pages/api/booths/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((request, res) => {\n  const {\n    query\n  } = request;\n  const {\n    id\n  } = query; //Data the all booths\n\n  let booths = [];\n  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref('/booths/').once('value', snapshot => {\n    const data = snapshot.val();\n\n    for (let key in data) {\n      let elems = {\n        code: data[key]['code'],\n        photo: data[key]['photo']\n      };\n      booths.push(elems);\n    }\n\n    res.statusCode = 200;\n    res.json({\n      booths\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYm9vdGhzL2luZGV4LmpzPzJjNTMiXSwibmFtZXMiOlsicmVxdWVzdCIsInJlcyIsInF1ZXJ5IiwiaWQiLCJib290aHMiLCJmaXJlYmFzZSIsImRhdGFiYXNlIiwicmVmIiwib25jZSIsInNuYXBzaG90IiwiZGF0YSIsInZhbCIsImtleSIsImVsZW1zIiwiY29kZSIsInBob3RvIiwicHVzaCIsInN0YXR1c0NvZGUiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdlLGdFQUFDQSxPQUFELEVBQVVDLEdBQVYsS0FBa0I7QUFDN0IsUUFBTTtBQUFFQztBQUFGLE1BQVlGLE9BQWxCO0FBRUEsUUFBTTtBQUFFRztBQUFGLE1BQVNELEtBQWYsQ0FINkIsQ0FNN0I7O0FBQ0EsTUFBSUUsTUFBTSxHQUFHLEVBQWI7QUFFQUMsaURBQVEsQ0FBQ0MsUUFBVCxHQUFvQkMsR0FBcEIsQ0FBd0IsVUFBeEIsRUFDS0MsSUFETCxDQUNVLE9BRFYsRUFDb0JDLFFBQUQsSUFBYztBQUN6QixVQUFNQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsR0FBVCxFQUFiOztBQUdBLFNBQUssSUFBSUMsR0FBVCxJQUFnQkYsSUFBaEIsRUFBc0I7QUFDbEIsVUFBSUcsS0FBSyxHQUFHO0FBQ1JDLFlBQUksRUFBRUosSUFBSSxDQUFDRSxHQUFELENBQUosQ0FBVSxNQUFWLENBREU7QUFFUkcsYUFBSyxFQUFFTCxJQUFJLENBQUNFLEdBQUQsQ0FBSixDQUFVLE9BQVY7QUFGQyxPQUFaO0FBSUFSLFlBQU0sQ0FBQ1ksSUFBUCxDQUFZSCxLQUFaO0FBQ0g7O0FBQ0RaLE9BQUcsQ0FBQ2dCLFVBQUosR0FBaUIsR0FBakI7QUFDQWhCLE9BQUcsQ0FBQ2lCLElBQUosQ0FBUztBQUFFZDtBQUFGLEtBQVQ7QUFFSCxHQWZMO0FBaUJILENBMUJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2Jvb3Rocy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHJlcXVlc3QsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHJlcXVlc3Q7XG5cbiAgICBjb25zdCB7IGlkIH0gPSBxdWVyeVxuXG5cbiAgICAvL0RhdGEgdGhlIGFsbCBib290aHNcbiAgICBsZXQgYm9vdGhzID0gW107XG5cbiAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL2Jvb3Rocy8nKVxuICAgICAgICAub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKVxuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBkYXRhW2tleV1bJ2NvZGUnXSxcbiAgICAgICAgICAgICAgICAgICAgcGhvdG86IGRhdGFba2V5XVsncGhvdG8nXSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9vdGhzLnB1c2goZWxlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcbiAgICAgICAgICAgIHJlcy5qc29uKHsgYm9vdGhzIH0pXG5cbiAgICAgICAgfSlcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/booths/index.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ })

/******/ });