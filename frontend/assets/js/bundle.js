/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/019-exercicios/exercicos.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/019-exercicios/exercicos.ts":
/*!*****************************************!*\
  !*** ./src/019-exercicios/exercicos.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./formControl */ "./src/019-exercicios/formControl.ts");
addEventListener("submit", function (e) {
    e.preventDefault();
    var nameInput = document.querySelector('.input-user');
    var emailInput = document.querySelector('.input-email');
    var passwordInput = document.querySelector('.input-password');
    var confirmPasswordInput = document.querySelector('.input-confirm-password');
});


/***/ }),

/***/ "./src/019-exercicios/formControl.ts":
/*!*******************************************!*\
  !*** ./src/019-exercicios/formControl.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SHOW_ERROR_MESSAGES = 'show-error-message';
var form = document.querySelector('.form');
var nameInput = document.querySelector('.input-user');
var emailInput = document.querySelector('.input-email');
var passwordInput = document.querySelector('.input-password');
var confirmPasswordInput = document.querySelector('.input-confirm-password');
form.addEventListener('submit', function (even) {
    even.preventDefault();
    hideErrorMessages(this);
    cheakForEmptyFilds(nameInput, emailInput, passwordInput, confirmPasswordInput);
    heveErr(nameInput, emailInput, passwordInput, confirmPasswordInput) && console.log('mandou');
});
function cheakForEmptyFilds() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    input.forEach(function (input) {
        if (!input.value) {
            showErrorMessage(input, 'invalido');
        }
        ;
    });
}
;
function hideErrorMessages(form) {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(function (i) { return i.classList.remove(SHOW_ERROR_MESSAGES); });
}
;
function showErrorMessage(input, mgs) {
    var formFilds = input.parentElement;
    var errorMessage = formFilds.querySelector('.error-message');
    errorMessage.innerText = mgs;
    formFilds.classList.add(SHOW_ERROR_MESSAGES);
}
;
function heveErr() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var devo = true;
    inputs.forEach(function (e) {
        var _a;
        (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.forEach(function (e) {
            if (e === 'show-error-message') {
                devo = false;
            }
        });
    });
    return devo;
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map