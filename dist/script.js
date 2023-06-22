/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion-head--active';
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-content--active';
  let paddings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
  for (let i = 0; i < this.length; i++) {
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);
      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};
(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};
(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\cbvc\\udemy\\jsLib\\src\\js\\lib\\components\\modal.js: Identifier 'buttons' has already been declared. (38:43)\n\n\u001b[0m \u001b[90m 36 |\u001b[39m $(\u001b[32m'[data-toggle=\"modal\"]'\u001b[39m)\u001b[33m.\u001b[39mmodal()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 38 |\u001b[39m $\u001b[33m.\u001b[39mprototype\u001b[33m.\u001b[39mcreateModal \u001b[33m=\u001b[39m \u001b[36mfunction\u001b[39m ({text\u001b[33m,\u001b[39m buttons} \u001b[33m=\u001b[39m {}) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 39 |\u001b[39m     \u001b[36mlet\u001b[39m modal \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mcreateElement(\u001b[32m'div'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 41 |\u001b[39m     modal\u001b[33m.\u001b[39mclassList\u001b[33m.\u001b[39madd(\u001b[32m'modal'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:63:32)\n    at constructor (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at Parser.raise (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:3255:19)\n    at ScopeHandler.checkRedeclarationInScope (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:1528:19)\n    at ScopeHandler.declareName (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:1511:14)\n    at Parser.declareNameFromIdentifier (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:7511:16)\n    at Parser.checkIdentifier (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:7507:12)\n    at Parser.checkLVal (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:7446:12)\n    at Parser.checkLVal (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:7477:14)\n    at Parser.checkLVal (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:7477:14)\n    at Parser.checkLVal (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:7477:14)\n    at Parser.checkParams (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:11980:12)\n    at Parser.<anonymous> (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:11955:14)\n    at Parser.parseBlockOrModuleBlockBody (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:13202:23)\n    at Parser.parseBlockBody (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:13178:10)\n    at Parser.parseBlock (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:13166:10)\n    at Parser.parseFunctionBody (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:11947:24)\n    at Parser.parseFunctionBodyAndFinish (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:11933:10)\n    at D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:13316:12\n    at Parser.withSmartMixTopicForbiddingContext (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:12257:14)\n    at Parser.parseFunction (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:13315:10)\n    at Parser.parseFunctionOrFunctionSent (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:11412:17)\n    at Parser.parseExprAtom (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:11185:21)\n    at Parser.parseExprSubscripts (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10890:23)\n    at Parser.parseUpdate (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10873:21)\n    at Parser.parseMaybeUnary (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10849:23)\n    at Parser.parseMaybeUnaryOrPrivate (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10687:61)\n    at Parser.parseExprOps (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10692:23)\n    at Parser.parseMaybeConditional (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10669:23)\n    at Parser.parseMaybeAssign (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10630:21)\n    at Parser.parseMaybeAssign (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10656:25)\n    at Parser.parseExpressionBase (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10584:23)\n    at D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10580:39\n    at Parser.allowInAnd (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:12275:16)\n    at Parser.parseExpression (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:10580:17)\n    at Parser.parseStatementContent (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:12733:23)\n    at Parser.parseStatementLike (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:12584:17)\n    at Parser.parseModuleItem (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:12561:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:13185:36)\n    at Parser.parseBlockBody (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:13178:10)\n    at Parser.parseProgram (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:12460:10)\n    at Parser.parseTopLevel (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:12450:25)\n    at Parser.parse (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:14347:10)\n    at parse (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\parser\\lib\\index.js:14388:38)\n    at parser (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\core\\lib\\parser\\index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\cbvc\\udemy\\jsLib\\node_modules\\@babel\\core\\lib\\transformation\\index.js:21:50)\n    at run.next (<anonymous>)");

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
(() => {
    const $ = function(selector) {
        const elements = document.querySelectorAll(selector);
        const obj = {};

        obj.hide = () => {
            elements.forEach(elem => {
                elem.style.display = "none";
            })
            return obj
        }
        obj.show = () => {
            elements.forEach(elem => {
                elem.style.display = "";
            })
            return obj
        }

        return obj
    }
    window.$ = $;
})();*/

const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;
  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }
  this[0] = swap;
  this.length = 1;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  const findMyIndex = item => {
    return item == this[0];
  };
  return childs.findIndex(findMyIndex);
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length === 0) {
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    counter++;
  }
  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    delete this[counter];
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;
    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add(...arguments);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove(...arguments);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(classNames);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;
  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }
    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1);
    cb(complection);
    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }
  return _animateOverTime;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';
    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };
    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };
    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(dur, display, fin);
    } else {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(dur, display, fin);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }
  return this;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first').on('click', () => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(1).fadeToggle(1800);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second"]').on('click', () => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).fadeToggle(1800);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').eq(2).on('click', () => {
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').fadeToggle(1800);
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.wrap').html(`
    <div class="dropdown">
       <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
       <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a class="dropdown-item" href="">Action</a>
            <a class="dropdown-item" href="">Action #2</a>
            <a class="dropdown-item" href="">Action #3</a>
        </div>
    </div>
    `);
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();
})();

/******/ })()
;
//# sourceMappingURL=script.js.map