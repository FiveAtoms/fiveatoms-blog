(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./assets/css/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./assets/css/style.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./assets/css/style.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./assets/css/style.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??__nextjs_postcss!./assets/css/style.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "a {\n\tcolor: #ff1456;\n}\n\n.main {\n\twidth: 100%;\n\tmax-width: 100vw;\n\toverflow: hidden;\n}\n\n/* Header */\n.mx-gn {\n\twidth: 100%;\n\theight: 50px;\n\tbackground-color: white;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-bottom: 1px solid #e6e6e6;\n  }\n  .mx-gn-content {\n\twidth: calc(100% - 50px);\n\tpadding: 0 25px;\n\tmax-width: 1024px;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n  }\n  .mx-gn-list {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items:  center;\n  \n\tlist-style: none;\n\t-webkit-padding-start: 0;\n\t        padding-inline-start: 0;\n  }\n  .mx-gn-link {\n\theight: 100%;\n\tpadding: 0 15px;\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tcolor: black;\n\ttext-transform: uppercase;\n\ttext-decoration: none;\n\t-webkit-transition: 0.2s ease-in-out;\n\ttransition: 0.2s ease-in-out;\n  }\n  .mx-gn-link:hover {\n\tcolor: #888;\n  }\n\n\n  /* global.css boilerplate */\n\n/* \n\nAuthor: Tristan Brewster\nLicense: MIT (no attribution required)\n\nHappy coding!\n\n*/\n\nhtml, body {\n    font-family: \"Inter\", 'Roboto', 'Open Sans', system-ui, sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    color: #111;\n    line-height: 1.125;\n    background-color: white;\n    padding: 0;\n    margin: 0;\n  }\n  \n  /* normalize */\n  a {\n    text-decoration: none;\n    cursor: pointer;\n  }\n  .link {\n    color: #0966ca;\n  }\n  .link:hover {\n  text-decoration: underline;\n  }\n  .link.large {\n    margin: 10px 0;\n    color: #07f;\n    font-size: 24px;\n    font-weight: 600;\n  }\n  ul {\n    list-style: none;\n    -webkit-padding-start: 0;\n            padding-inline-start: 0;\n  }\n  blockquote {\n  font-size: 16px;\n  line-height: 24px;\n  color: #333;\n  }\n  blockquote:before {\n    width: 2px;\n    height: 100%;\n    background-color: #d1d5da;\n  }\n  \n  .hide {\n    display: none!important;\n    opacity: 0!important;\n    visibility: hidden!important;\n    pointer-events: none!important;\n  }\n  \n  \n  /* colors and backgrounds */\n  .bg-gray {\n    background-color: #fafafa;\n  }\n  .bg-gray-1 {\n    background-color: #f7f7f7;\n  }\n  .bg-gray-2 {\n    background-color: #f1f1f4;\n  }\n  \n  .bg-111 {\n    background-color: #111;\n  }\n  \n  .bg-blue {\n    background-color: #07f;\n  }\n  \n  .bg-blur {\n    -webkit-backdrop-filter: saturate(180%) blur(20px)!important;\n    backdrop-filter: saturate(180%) blur(20px)!important;\n    background-color: rgba(240,240,240,0.8)!important;\n  }\n  \n  /* font faces */\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Regular.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Regular.woff?v=3.11\") format(\"woff\");\n  }\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fiveatoms.com/new/assets/fonts/inter/Inter-Medium.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Medium.woff?v=3.11\") format(\"woff\");\n  }\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-SemiBold.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-SemiBold.woff?v=3.11\") format(\"woff\");\n  }\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Bold.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Bold.woff?v=3.11\") format(\"woff\");\n  }\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-ExtraBold.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-ExtraBold.woff?v=3.11\") format(\"woff\");\n  }\n  \n  /* text styles */\n  h1, .h1 {\n  margin-top: 0px;\n  margin-bottom: 25px;\n  font-family: Inter, Arial, sans-serif;\n  font-size: 48px;\n  line-height: 57px;\n  font-weight: 500;\n  }\n  h2, .h2 {\n  margin-top: 0px;\n  margin-bottom: 25px;\n  font-size: 40px;\n  line-height: 42px;\n  font-weight: 500;\n  }\n  h3, .h3 {\n  margin-top: 0px;\n  margin-bottom: 15px;\n  font-size: 32px;\n  line-height: 38px;\n  font-weight: 500;\n  }\n  h4, .h4 {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: 500;\n  }\n  h5, .h5 {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  font-family: Inter, Arial, sans-serif;\n  font-size: 24px;\n  line-height: 30px;\n  font-weight: 500;\n  }\n  h6, .h6 {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  line-height: 26px;\n  font-weight: 500;\n  }\n  p, .p {\n  margin-top: 0;\n  margin-bottom: 15px;\n  color: #333;\n  font-size: 16px;\n  line-height: 24px;\n  }\n  \n  /* special */\n  p.semi-large {\n    font-size: 18px;\n    line-height: 1.5;\n    color: black;\n  }\n  p.large, .p.large {\n  color: #888;\n  font-size: 22px;\n  line-height: 29px;\n  font-weight: 400;\n  }\n  p.regular {\n    font-size: 24px;\n    line-height: 1.3;\n    color: #333;\n  }\n  .gigantic-heading {\n  margin-bottom: 30px;\n  font-size: 120px;\n  line-height: 120px;\n  font-weight: 500;\n  }\n  .huge-heading {\n  margin-bottom: 35px;\n  color: #111;\n  font-size: 80px;\n  line-height: 1.125;\n  font-weight: 600;\n  }\n  .large-heading {\n    margin-bottom: 25px;\n  color: #111;\n  font-size: 64px;\n  line-height: 1.125;\n  font-weight: 600;\n  }\n  .callout {\n    margin-bottom: 15px;\n    color: #111;\n    font-size: 32px;\n    line-height: 1.125;\n    font-weight: 500;\n    letter-spacing: 0.004em;\n  }\n  .sub-heading {\n  margin-bottom: 15px;\n  font-size: 19px;\n  line-height: 1.2;\n  font-weight: 500;\n  }\n  .sub-heading.large {\n    margin-bottom: 20px;\n    font-size: 30px;\n    line-height: 1.125;\n    font-weight: 500;\n  }\n  .eyebrow {\n  margin-bottom: 16px;\n  color: #000;\n  font-size: 14px;\n  line-height: 14px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  }\n  .eyebrow-alt {\n    color: rgb(130, 130, 130);\n    font-size: 14px;\n    font-weight: 700;\n    letter-spacing: 2px;\n    line-height: 20px;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n  }\n  .caption {\n    color: #333;\n    font-size: 14px;\n    line-height: 20px;\n  }\n  \n  /* responsive sizing */\n  @media only screen and (max-width: 990px) {\n  h1, .h1 {\n    margin-bottom: 15px;\n    font-size: 40px;\n    line-height: 42px;\n  }\n  h2, .h2 {\n    margin-bottom: 15px;\n    font-size: 32px;\n    line-height: 38px;\n  }\n  h3, .h3 {\n    font-size: 28px;\n    line-height: 32px;\n  }\n  h4, .h4 {\n    font-size: 24px;\n    line-height: 30px;\n  }\n  h5, .h5 {\n    font-size: 20px;\n  }\n  .gigantic-heading {\n    font-size: 80px;\n    line-height: 95px;\n  }\n  .huge-heading {\n    font-size: 70px;\n    line-height: 70px;\n  }\n  .large-heading {\n      font-size: 54px;\n  }\n  .callout {\n        font-size: 28px;\n        line-height: 1.14;\n    }\n  }\n  @media only screen and (max-width: 770px) {\n  h1, .h1 {\n    font-weight: 400;\n  }\n  h5, .h5 {\n    line-height: 26px;\n  }\n  .gigantic-heading {\n    font-size: 40px;\n    line-height: 50px;\n  }\n  .huge-heading {\n    font-size: 60px;\n    line-height: 60px;\n  }\n  .large-heading {\n      font-size: 50px;\n  }\n  .callout {\n        font-size: 24px;\n        line-height: 1.16;\n    }\n  }\n  \n  \n  /* text colors */\n  .tc-9 {\n    color: #999;\n  }\n  .tc-3 {\n    color: #333;\n  }\n  \n  \n  .tc-semi {\n    color: rgba(0,0,0,0.6);\n  }\n  .tc-white {\n    color: white;\n  }\n  .tc-semi-white {\n    color: rgba(255,255,255,0.6);\n  }\n  .tc-semi-white.darker {\n    color: rgba(255,255,255,0.8)!important;\n  }\n  \n  /* styling only <b> elements as child */\n  .tc-b-c b {\n    color: #ccc;\n  }\n  \n  \n  /* = Spacing = */\n  .no-space-bottom {\n    margin-bottom: 0;\n  }\n  .no-space-top {\n    margin-top: 0;\n  }\n  .space-top-tiny {\n    margin-top: 5px;\n  }\n  .space-top-very-small {\n    margin-top: 10px;\n  }\n  .space-top-small {\n    margin-top: 20px;\n  }\n  .space-top {\n    margin-top: 30px;\n  }\n  .space-top-semi-large {\n  margin-top: 45px;\n  }\n  .space-top-large {\n    margin-top: 60px;\n  }\n  .space-top-very-large {\n    margin-top: 90px;\n  }\n  .space-top-huge {\n    margin-top: 120px;\n  }\n  .space-top-gigantic {\n    margin-top: 150px;\n  }\n  .space-bottom-tiny {\n    margin-bottom: 5px;\n  }\n  .space-bottom-very-small {\n  margin-bottom: 10px;\n  }\n  .space-bottom-small {\n  margin-bottom: 20px;\n  }\n  .space-bottom {\n  margin-bottom: 30px;\n  }\n  .space-bottom-semi-large {\n  margin-bottom: 45px;\n  }\n  .space-bottom-large {\n  margin-bottom: 60px;\n  }\n  .space-bottom-very-large {\n  margin-bottom: 90px;\n  }\n  .space-bottom-huge {\n  margin-bottom: 120px;\n  }\n  .space-bottom-gigantic {\n  margin-bottom: 150px;\n  }\n  .space-left-tiny {\n    margin-left: 5px;\n  }\n  \n  \n  /* layout */\n  .relative {\n    position: relative!important;\n  }\n  .container, .container-large, .container-very-large, .container-block, .text, .wrapper, .column {\n    display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  }\n  .row {\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  }\n  .section {\n  width: 100%;\n  padding: 7% 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  z-index: 2;\n  position: relative;\n  }\n  .section.full {\n    box-sizing: border-box;\n    min-height: 100vh;\n  }\n  .section.padding-very-small {\n    padding: 20px;\n    width: calc(100% - 40px);\n  }\n  .section.bg-111, .section.bg-blue {\n    color: white;\n  }\n  .section.border-top {\n    border-top: 1px solid #e6e6e6;\n  }\n  .container {\n  width: calc(100% - 44px);\n  max-width: 1024px;\n  padding: 0 22px;\n  }\n  .container-large {\n    width: calc(100% - 44px);\n  max-width: 1296px;\n  padding: 0 22px;\n  }\n  .container-very-large {\n    width: calc(100% - 160px);\n  max-width: 1440px;\n  padding-right: 80px;\n    padding-left: 80px;\n  }\n  .container-block {\n    box-sizing: border-box;\n    width: calc(100% - 100px);\n    max-width: 1024px;\n    padding: 80px 50px;\n    background-color: #f7f7f7;\n  }\n  .wrapper {\n    width: 100%;\n  }\n  .wrapper.space-between {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n  }\n  .text {\n  width: auto;\n  max-width: 550px;\n  overflow: hidden;\n  }\n  .text.large {\n    max-width: 630px;\n  }\n  .text.very-large {\n    max-width: 700px;\n  }\n  .text.align-center {\n    text-align: center;\n  }\n  @media only screen and (max-width: 767px) {\n    .container-very-large {\n        padding-right: 20px;\n        padding-left: 20px;\n        width: calc(100% - 40px);\n    }\n    .section.padding-very-small {\n        padding: 20px 0;\n        width: 100%;\n    }\n    .section {\n        padding: 65px 0;\n    }\n    .section.full {\n        height: auto;\n        min-height: 100vh;\n    }\n  }\n  \n  /* flex customizations */\n  .l-horz {\n    flex-direction: row;\n  }\n  .align-center {\n    align-items: center;\n  }\n  .space-between {\n    justify-content: space-between;\n  }\n  \n  \n  .caption-block {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .caption-block p {\n    font-size: 14px;\n    color: #111;\n  }\n  .divider {\n    width: 100%;\n    height: 1px;\n    background-color: #e6e6e6;\n    margin: 40px 0;\n  }\n  .divider.dark {\n    background-color: #333;\n  }\n  .text-divider {\n    width: 32px;\n    background-color: #d1d5da;\n    margin: 15px 0;\n  }\n  \n  .grid {\n  width: 100%;\n  display: grid;\n  grid-gap: 20px;\n  }\n  .grid-overflow {\n  width: 100%;\n  overflow-x: scroll;\n  }\n  .grid-1 {\n  grid-template-columns: auto;\n  }\n  .grid-2 {\n  grid-template-columns: auto auto;\n  }\n  .grid-2-force {\n    grid-template-columns: 50% 50%;\n  }\n  .grid-3 {\n  grid-template-columns: auto auto auto;\n  }\n  .grid-4 {\n  grid-template-columns: auto auto auto auto;\n  }\n  .grid-5 {\n  grid-template-columns: auto auto auto auto auto;\n  }\n  .grid-6 {\n  grid-template-columns: auto auto auto auto auto auto;\n  }\n  .gap-no {\n    grid-gap: 0;\n  }\n  .gap-1 {\n  grid-gap: 1px;\n  }\n  .gap-10 {\n  grid-gap: 10px;\n  }\n  .gap-20 {\n  grid-gap: 20px;\n  }\n  .gap-30 {\n  grid-gap: 30px;\n  }\n  .gap-40 {\n  grid-gap: 40px;\n  }\n  .gap-50 {\n  grid-gap: 50px;\n  }\n  .gap-60 {\n  grid-gap: 60px;\n  }\n  .gap-70 {\n  grid-gap: 70px;\n  }\n  .gap-80 {\n  grid-gap: 80px;\n  }\n  .gap-90 {\n  grid-gap: 90px;\n  }\n  .grid-block {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  \n  @media only screen and (max-width: 992px) {\n    .grid.break-main {\n        grid-template-columns: auto auto;\n    }\n  }\n  @media only screen and (max-width: 660px) {\n    .grid.break-main {\n        grid-template-columns: auto;\n    }\n  }\n  @media only screen and (max-width: 770px) {\n    .grid.break-medium {\n        grid-template-columns: auto;\n    }\n  }\n  \n  .columns {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .columns .column {\n    flex: 1 1;\n    max-width: 50%;\n  }\n  .column.full {\n    width: 100%;\n    max-width: none;\n  }\n  .columns .column.text {\n    padding-right: 80px;\n  }\n  .column-image {\n    width: 100%;\n    height: 100%;\n  }\n  .feature-column {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    min-height: 750px;\n    padding: 50px 13%;\n    max-width: 630px;\n    background-color: #fbfbfb;\n  }\n  \n  @media only screen and (max-width: 992px) {\n    .columns.break-main {\n        flex-direction: column;\n    }\n    .columns.break-main .column {\n        flex: 1 1;\n        max-width: none;\n    }\n    .columns.break-main .column.text {\n        padding-right: 0;\n        margin-bottom: 50px;\n    }\n    .feature-column {\n        min-height: auto;\n        padding: 50px 30px;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .columns.break-medium {\n        flex-direction: column;\n    }\n    .columns.break-medium .column {\n        flex: 1 1;\n        max-width: none;\n    }\n    .columns.break-medium .column.text {\n        padding-right: 0;\n        margin-bottom: 50px;\n    }\n    .feature-column {\n        padding-top: 100px;\n        padding-bottom: 100px;\n    }\n    .column.full.img {\n        height: 500px;\n    }\n    .column-image {\n        height: 500px;\n    }\n  }\n  @media only screen and (max-width: 480px) {\n    .columns.break-small {\n        flex-direction: column;\n    }\n    .columns.break-small .column {\n        flex: 1 1;\n        max-width: none;\n    }\n     .columns.break-small .column.text {\n        padding-right: 0;\n        margin-bottom: 50px;\n    }\n  }\n  \n  /* specific layouts */\n  .section-block {\n    width: calc(100% - 80px);\n    padding: 20px 40px;\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  }\n  .section-block-container {\n    padding: 150px 80px 120px 80px;\n    background-color: #fafafa;\n    width: calc(100% - 160px);\n    max-width: 1440px;\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  }\n  @media only screen and (max-width: 990px) {\n    .section-block-container {\n        padding: 50px 30px 70px;\n        width: calc(100% - 60px);\n    }\n  }\n  @media only screen and (max-width: 570px) {\n    .section-block {\n        width: calc(100% - 40px);\n        padding: 20px;\n    }\n  }\n  @media only screen and (max-width: 450px) {\n    .section-block-container {\n        padding: 50px 10px 70px;\n        width: calc(100% - 20px);\n    }\n  }\n  \n  .feature-text-block {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n  }\n  @media only screen and (max-width: 770px) {\n    .feature-text-block {\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n    }\n    .feature-text-block .text {\n        margin-bottom: 60px;\n    }\n  }\n  \n  \n  \n  /* images */\n  .img.full {\n    width: 100%;\n  }\n  .image.full {\n    width: 100%;\n    height: 680px\n  }\n  @media only screen and (max-width: 770px) {\n    .image.full {\n        height: 480px\n    }\n  }\n  @media only screen and (max-width: 570px) {\n    .image.full {\n        height: 380px\n    }\n  }\n  \n  .image-caption {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    text-align: center;\n    color: #777;\n    font-size: 14px;\n    line-height: 20px;\n  }\n  \n  /* features */\n  .feature-blocks {\n    width: 100%;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: auto auto auto auto;\n  }\n  .feature-blocks.c-3 {\n    grid-template-columns: auto auto auto;\n  }\n  @media only screen and (max-width: 850px) {\n    .feature-blocks {\n        grid-template-columns: auto auto;\n    }\n    .feature-blocks.c-3 {\n        grid-template-columns: auto;\n    }\n    .feature-blocks .feature-block.small {\n        width: 100%;\n        max-width: none;\n    }\n  }\n  @media only screen and (max-width: 700px) {\n    .feature-blocks {\n        grid-template-columns: auto;\n    }\n  }\n  .feature-block {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 10px;\n  }\n  .feature-block.small {\n    max-width: 275px;\n  }\n  .caption.feature-caption {\n    max-width: 200px;\n  }\n  \n  \n  /* blog cards */\n  .card {\n    max-width: 350px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    overflow: hidden;\n    border: 1px solid #e6e6e6;\n    cursor: pointer;\n    -webkit-transition: 0.2s ease-in-out;\n    transition: 0.2s ease-in-out;\n  }\n  .card:hover {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n  .card.no-max-w{\n    max-width: none;\n  }\n  .card.large {\n    max-width: none;\n    flex-direction: row-reverse;\n  }\n  .card .card-image {\n    height: 185px;\n    width: 100%;\n  }\n  .card.large .card-image {\n    height: 100%;\n    width: 60%;\n  }\n  .card-content {\n    padding: 30px 30px 25px;\n  }\n  .card.large .card-content {\n    padding: 30px 30px 25px;\n    padding-right: 40px;\n    width: calc(40% - 40px);\n    height: calc(100% - 55px);\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .card-title {\n    color: rgb(38, 38, 38);\n    font-size: 22px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    text-align: left;\n  }\n  .card-content .card-text {\n    color: rgb(38, 38, 38);\n    margin-bottom: 25px;\n  }\n  .card-link {\n    width: 100%;\n    padding-top: 20px;\n    border-top: 1px solid #e6e6e6;\n    color: #07f;\n    -webkit-transition: 0.3s ease-in-out;\n    transition: 0.3s ease-in-out;\n  }\n  .card-link:hover {\n    opacity: 0.7;\n  }\n  \n  @media only screen and (max-width: 992px) {\n    .card {\n        max-width: none;\n    }\n    .card.large {\n        max-width: none;\n        flex-direction: column;\n    }\n    .card.large .card-image {\n        height: 185px;\n        width: 100%;\n    }\n    .card.large .card-content {\n        padding: 30px 30px 25px;\n        width: auto;\n        height: auto;\n        display: block;\n    }\n  }\n  @media only screen and (max-width: 660px) {\n    .card, .card.large {\n        max-width: 100%;\n    }\n    .card-image {\n        height: 300px!important;\n    }\n  }\n  \n  .mx-gn-menu-button[aria-expanded='true'] .mx-gn-menu-button-bar.top {\n  -webkit-transform: translateY(4px) rotate(45deg);\n          transform: translateY(4px) rotate(45deg);\n  }\n  .mx-gn-menu-button[aria-expanded='true'] .mx-gn-menu-button-bar.bottom {\n  -webkit-transform: translateY(-4px) rotate(-45deg);\n          transform: translateY(-4px) rotate(-45deg);\n  }\n  .mx-gn-menu-button-bars {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  }\n  .mx-gn-menu-button-bar {\n  width: 15px;\n  height: 1px;\n  background-color: black;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  }\n  .mx-gn-menu-button-bar.top {\n  -webkit-transform: translateY(0) rotate(0);\n          transform: translateY(0) rotate(0);\n  }\n  .mx-gn-menu-button-bar.bottom {\n  margin-top: 7px;\n  -webkit-transform: translateY(0) rotate(0);\n          transform: translateY(0) rotate(0);\n  }\n  \n  .mx-globalnav.dark .mx-gn-menu-button-bar {\n    background-color: white;\n  }\n  \n  .mobile-only {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n  }\n  @media only screen and (max-width: 770px) {\n  .desktop-only, .mx-gn-list-item {\n    display: none;\n    visibility: hidden;\n    pointer-events: none;\n  }\n  .mobile-only, .mx-gn-list-item.always {\n    display: block;\n    visibility: visible;\n    pointer-events: auto;\n  }\n  }\n  .mx-gn-item {\n  height: 44px;\n  }\n  .mx-gn-mobile-menu {\n    padding: 30px 22px;\n  width: calc(100vw - 44px);\n  height: 100vh;\n    position: fixed;\n  margin: 0;\n  top: 45px;\n  left: 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  overflow-y: scroll;\n  background-color: white;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  \n  visibility: hidden;\n  pointer-events: none;\n  opacity: 0;\n  -webkit-transform: translate(-100px, -100px);\n          transform: translate(-100px, -100px);\n  }\n  .mx-gn-mobile-menu-button[aria-expanded='true'] .mx-gn-menu-button-bar.top {\n  -webkit-transform: translateY(4px) rotate(45deg);\n          transform: translateY(4px) rotate(45deg);\n  }\n  .mx-gn-mobile-menu-button[aria-expanded='true'] .mx-gn-menu-button-bar.bottom {\n  -webkit-transform: translateY(-4px) rotate(-45deg);\n          transform: translateY(-4px) rotate(-45deg);\n  }\n  .mx-gn-mobile-menu-button[aria-expanded='true']+.mx-gn-mobile-menu {\n  /*display: flex;*/\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  overflow: hidden;\n  z-index: 999;\n  -webkit-transform: translate(0,0);\n          transform: translate(0,0);\n  }\n  .mx-gn-mobile-menu-button[aria-expanded='true']+.mx-gn-mobile-menu.bg-blur {\n    top: 44px;\n  }\n  .mx-gn-mobile-list {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 30px;\n  }\n  .mx-gn-mobile-list:last-child {\n  margin-bottom: 0;\n  }\n  .mx-gn-mobile-list li {\n  width: 100%;\n  }\n  .mx-gn-mobile-list-item-category {\n  margin-bottom: 10px;\n  }\n  .mx-gn-mobile-list-item-category span {\n  color: #666;\n  }\n  .mx-gn-mobile-list li a {\n  width: 100%;\n  display: flex;\n  color: black;\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 600;\n  padding: 10px 0px;\n  border-bottom: 1px solid #e6e6e6;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  }\n  .mx-gn-mobile-list li a:hover {\n  opacity: 0.7;\n  }\n  \n  /* mx-footer */\n  .mx-footer {\n    width: calc(100% - 44px);\n    padding: 15px 22px;\n    font-size: 14px;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-top: 1px solid #f1f1f1;\n  }\n  .mx-footer span {\n    color: #5a5a5a;\n  }\n  .mx-social-container ul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n  }\n  .mx-social-link {\n    padding: 0 10px;\n    height: calc(100% - 20px);\n    color: #5a5a5a;\n    cursor: pointer;\n  }\n  .mx-social-link img {\n    -webkit-transition: 0.2s ease-in-out;\n    transition: 0.2s ease-in-out;\n  }\n  .mx-social-link:hover > img {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n  }\n  .mx-social-link img {\n    width: 20px;\n  }\n  @media only screen and (max-width: 600px) {\n    .mx-footer {\n        justify-content: center;\n        flex-direction: column;\n    }\n    .mx-footer span {\n        margin-bottom: 10px;\n    }\n  }\n  .mx-social-menu {\n    list-style: none;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  padding: 0;\n  margin: 0;\n    position: absolute;\n  display: flex;\n  visibility: visible;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  top: 40px;\n  right: 0;\n  width: 7.5rem;\n  background-color: white;\n  overflow: hidden;\n  border-radius: 5px;\n  z-index: 999999999999;\n  box-shadow: 0 0 15px rgba(0,0,0,.15),0 0 1px 1px rgba(0,0,0,.1);\n  \n  display: none;\n  visibility: hidden;\n  opacity: 0;\n  pointer-events: none;\n  }\n  .mx-footer .mx-social-menu {\n    bottom: 60px!important;\n    right: 25px!important;\n    top: auto!important;\n  }\n  .mx-social-link-menu-button {\n    border-radius: 3px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px 10px;\n    -webkit-transition: 0.2s ease-in-out;\n    transition: 0.2s ease-in-out;\n  }\n  .mx-social-link-menu-button:hover {\n    background-color: #f7f7f7;\n  }\n  .mx-social-link-menu-button:hover > img {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  .mx-social-link-menu-button.white:hover {\n    background-color: #333;\n  }\n  .mx-social-link-menu-button[aria-expanded='true'] {\n    background-color: #eee;\n  }\n  .mx-social-link-menu-button.white[aria-expanded='true'] {\n    background-color: #222;\n  }\n  .mx-social-link-menu-button[aria-expanded='true']+.mx-social-menu {\n    display: flex;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  }\n  .mx-social-menu li {\n    width: 100%;\n  }\n  .mx-social-menu-link {\n    width: calc(100% - 2rem);\n  border: none;\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 1.125rem;\n  color: #000;\n  padding: 0 1rem;\n  cursor: pointer;\n  -webkit-transition: 0.1s ease-in-out;\n  transition: 0.1s ease-in-out;\n  }\n  .mx-social-menu-link:hover {\n    background-color: #f7f7f7;\n  }\n  \n  /* mx-btn */\n  .mx-btn {\n  padding: 10px 16px;\n  border-radius: 6px;\n  background-color: #07f;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.19);\n  color: #fff;\n  font-weight: 500;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  }\n  .mx-btn:hover {\n  background-color: #3452ff;\n  }\n  \n  /* size variations */\n  .mx-btn.small {\n  padding: 7px 10px;\n  border-radius: 4px;\n  }\n  .mx-btn.large {\n  padding: 15px 20px;\n  border-radius: 4px;\n  }\n  \n  /* color variations */\n  .mx-btn.white {\n  background-color: white;\n  color: black;\n  }\n  .mx-btn.white:hover {\n  color: #3452ff;\n  }\n  .mx-btn.pink {\n  background-color: #ff1456;\n  }\n  .mx-btn.pink:hover {\n  background-color: #d2003b;\n  }\n  \n  .gx-btn {\n    display: inline-block;\n    padding: 16px 24px;\n    font-size: 14px;\n    font-weight: 500;\n    color: white;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-color: #1074e7;\n    border-radius: 3px;\n    -webkit-transition: .2s ease-in-out;\n    transition: .2s ease-in-out;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  .gx-btn:hover {\n    background-color: #0366d6;\n  }\n  \n  /* special */\n  .underline-link {\n    margin-top: 15px;\n  border-bottom: 1px solid #ddd;\n  position: relative;\n  color: black;\n  padding-bottom: 4px;\n  -webkit-transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  }\n  .underline-link.white {\n    border-color: #555;\n    color: white;\n  }\n  .underline-link:before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 1px;\n  background-color: black;\n  position: absolute;\n  left: 0;\n  bottom: -1px;\n  opacity: 0;\n  -webkit-transform-origin: left;\n          transform-origin: left; \n  -webkit-transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1); \n  transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  }\n  .underline-link:hover:before {\n  width: 100%;\n  opacity: 1;\n  }\n  .underline-link.white:before {\n    background-color: white;\n  }\n  .move-link {\n    height: 25px;\n    font-size: 16px;\n    color: #07f;\n    cursor: pointer;\n    -webkit-transition: 0.2s ease-in-out;\n    transition: 0.2s ease-in-out;\n  }\n  .move-link:hover {\n    -webkit-transform: translateY(-3px);\n            transform: translateY(-3px);\n  }\n  \n  \n  /* form */\n  .form {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .mx-input {\n  height: 42px;\n  width: 100%;\n  max-width: 325px;\n  margin-bottom: 10px;\n  color: #494949;\n  font-size: 15px;\n  line-height: 1.29412;\n  font-weight: 400;\n  letter-spacing: -.021em;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 53px 0 15px;\n  border: 1px solid #d6d6d6;\n  border-radius: 6px;\n  text-align: left;\n  outline: none;\n  box-shadow: none;\n  z-index: 1;\n  }\n  .mx-input:focus {\n  border-color: #07f;\n  outline: none;\n  z-index: 2;\n  }\n  textarea.mx-input {\n    max-width: none;\n  height: auto;\n  padding: 10px;\n  }\n  .form.full .mx-input {\n    max-width: none;\n  }\n  label {\n    color: #333;\n    font-size: 14px;\n    line-height: 20px;\n    margin-bottom: 3px;\n  }\n  \n  input.mx-btn {\n    width: 100%;\n    border: none;\n    outline: none;\n    border-radius: 4px;\n  }\n  \n  /* mx-tag */\n  .mx-tag {\n  padding: 3px 7px;\n  border-radius: .9375rem;\n  background-color: #d0e2ff;\n  color: #0043ce;\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  }\n  .mx-tag:last-child {\n    margin-right: 0;\n  }\n  .mx-tag.red {\n  background-color: #ffd7d9;\n  color: #a2191f!important;\n  }\n  .mx-tag.magenta {\n  background-color: #ffd6e8;\n  color: #9f1853!important;\n  }\n  .mx-tag.purple {\n  background-color: #e8daff;\n  color: #6929c4!important;\n  }\n  .mx-tag.cyan {\n  background-color: #bae6ff;\n  color: #00539a!important;\n  }\n  .mx-tag.teal {\n  background-color: #9ef0f0;\n  color: #005d5d!important;\n  }\n  .mx-tag.green {\n  background-color: #a7f0ba;\n  color: #0e6027!important;\n  }\n  .mx-tag.gray {\n  background-color: #e0e0e0;\n  color: #161616!important;\n  }\n  .mx-tag.cool-gray {\n  background-color: #dde1e6;\n  color: #121619!important;\n  }\n  .mx-tag.warm-gray {\n  background-color: #e5e0df;\n  color: #171414!important;\n  }\n  \n  \n  /* Animate */\n  \n  .fadein {\n  -webkit-animation: fadein 1s;\n  animation: fadein 1s;\n  }\n  .fadeout {\n  -webkit-animation: fadeout 1s;\n  animation: fadeout 1s;\n  }\n  .fadeup {\n  -webkit-animation: fadeup 1s;\n  animation: fadeup 1s;\n  }\n  \n  \n  @keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n  }\n  @-webkit-keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n  }\n  @keyframes fadeout {\n  from { opacity: 1; }\n  to   { opacity: 0; }\n  }\n  @-webkit-keyframes fadeout {\n  from { opacity: 1; }\n  to   { opacity: 0; }\n  }\n  @keyframes fadeup {\n  from { opacity: 0; margin-top: 100px; }\n  to   { opacity: 1; margin-top: 0; }\n  }\n  @-webkit-keyframes fadeup {\n  from { opacity: 0; margin-top: 100px; }\n  to   { opacity: 1; margin-top: 0; }\n  }\n  \n  /* END Animate */", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"AAAA;CACC,cAAc;AACf;;AAEA;CACC,WAAW;CACX,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA,WAAW;AACX;CACC,WAAW;CACX,YAAY;CACZ,uBAAuB;CACvB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,gCAAgC;EAC/B;EACA;CACD,wBAAwB;CACxB,eAAe;CACf,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;EAClB;EACA;CACD,aAAa;CACb,uBAAuB;CACvB,oBAAoB;;CAEpB,gBAAgB;CAChB,wBAAuB;SAAvB,uBAAuB;EACtB;EACA;CACD,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,yBAAyB;CACzB,qBAAqB;CACrB,oCAA4B;CAA5B,4BAA4B;EAC3B;EACA;CACD,WAAW;EACV;;;EAGA,2BAA2B;;AAE7B;;;;;;;CAOC;;AAED;IACI,kEAAkE;IAClE,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;IACV,SAAS;EACX;;EAEA,cAAc;EACd;IACE,qBAAqB;IACrB,eAAe;EACjB;EACA;IACE,cAAc;EAChB;EACA;EACA,0BAA0B;EAC1B;EACA;IACE,cAAc;IACd,WAAW;IACX,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,wBAAuB;YAAvB,uBAAuB;EACzB;EACA;EACA,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX;EACA;IACE,UAAU;IACV,YAAY;IACZ,yBAAyB;EAC3B;;EAEA;IACE,uBAAuB;IACvB,oBAAoB;IACpB,4BAA4B;IAC5B,8BAA8B;EAChC;;;EAGA,2BAA2B;EAC3B;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,4DAA4D;IAC5D,oDAAoD;IACpD,iDAAiD;EACnD;;EAEA,eAAe;EACf;EACA,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB;mGACiG;EACjG;EACA;EACA,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB;kGACgG;EAChG;EACA;EACA,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB;oGACkG;EAClG;EACA;EACA,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB;gGAC8F;EAC9F;EACA;EACA,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB;qGACmG;EACnG;;EAEA,gBAAgB;EAChB;EACA,eAAe;EACf,mBAAmB;EACnB,qCAAqC;EACrC,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB;EACA;EACA,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB;EACA;EACA,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB;EACA;EACA,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB;EACA;EACA,eAAe;EACf,mBAAmB;EACnB,qCAAqC;EACrC,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB;EACA;EACA,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB;EACA;EACA,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB;;EAEA,YAAY;EACZ;IACE,eAAe;IACf,gBAAgB;IAChB,YAAY;EACd;EACA;EACA,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,WAAW;EACb;EACA;EACA,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB;EACA;EACA,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB;EACA;IACE,mBAAmB;EACrB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB;EACA;IACE,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;EACzB;EACA;EACA,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB;EACA;IACE,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;EAClB;EACA;EACA,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB;EACA;IACE,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,eAAe;IACf,iBAAiB;EACnB;;EAEA,sBAAsB;EACtB;EACA;IACE,mBAAmB;IACnB,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,mBAAmB;IACnB,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;MACI,eAAe;EACnB;EACA;QACM,eAAe;QACf,iBAAiB;IACrB;EACF;EACA;EACA;IACE,gBAAgB;EAClB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;MACI,eAAe;EACnB;EACA;QACM,eAAe;QACf,iBAAiB;IACrB;EACF;;;EAGA,gBAAgB;EAChB;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;;;EAGA;IACE,sBAAsB;EACxB;EACA;IACE,YAAY;EACd;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,sCAAsC;EACxC;;EAEA,uCAAuC;EACvC;IACE,WAAW;EACb;;;EAGA,gBAAgB;EAChB;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;EACf;EACA;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;EACA,gBAAgB;EAChB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;EACpB;EACA;EACA,mBAAmB;EACnB;EACA;EACA,mBAAmB;EACnB;EACA;EACA,mBAAmB;EACnB;EACA;EACA,mBAAmB;EACnB;EACA;EACA,mBAAmB;EACnB;EACA;EACA,mBAAmB;EACnB;EACA;EACA,oBAAoB;EACpB;EACA;EACA,oBAAoB;EACpB;EACA;IACE,gBAAgB;EAClB;;;EAGA,WAAW;EACX;IACE,4BAA4B;EAC9B;EACA;IACE,aAAa;EACf,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;EACtB;EACA;IACE,aAAa;EACf,uBAAuB;EACvB,mBAAmB;EACnB;EACA;EACA,WAAW;EACX,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB;EACA;IACE,sBAAsB;IACtB,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,wBAAwB;EAC1B;EACA;IACE,YAAY;EACd;EACA;IACE,6BAA6B;EAC/B;EACA;EACA,wBAAwB;EACxB,iBAAiB;EACjB,eAAe;EACf;EACA;IACE,wBAAwB;EAC1B,iBAAiB;EACjB,eAAe;EACf;EACA;IACE,yBAAyB;EAC3B,iBAAiB;EACjB,mBAAmB;IACjB,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;EAC3B;EACA;IACE,WAAW;EACb;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;EACrB;EACA;EACA,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,kBAAkB;EACpB;EACA;IACE;QACI,mBAAmB;QACnB,kBAAkB;QAClB,wBAAwB;IAC5B;IACA;QACI,eAAe;QACf,WAAW;IACf;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;QACZ,iBAAiB;IACrB;EACF;;EAEA,wBAAwB;EACxB;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,8BAA8B;EAChC;;;EAGA;IACE,WAAW;IACX,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,WAAW;EACb;EACA;IACE,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,cAAc;EAChB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,WAAW;IACX,yBAAyB;IACzB,cAAc;EAChB;;EAEA;EACA,WAAW;EACX,aAAa;EACb,cAAc;EACd;EACA;EACA,WAAW;EACX,kBAAkB;EAClB;EACA;EACA,2BAA2B;EAC3B;EACA;EACA,gCAAgC;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;EACA,qCAAqC;EACrC;EACA;EACA,0CAA0C;EAC1C;EACA;EACA,+CAA+C;EAC/C;EACA;EACA,oDAAoD;EACpD;EACA;IACE,WAAW;EACb;EACA;EACA,aAAa;EACb;EACA;EACA,cAAc;EACd;EACA;EACA,cAAc;EACd;EACA;EACA,cAAc;EACd;EACA;EACA,cAAc;EACd;EACA;EACA,cAAc;EACd;EACA;EACA,cAAc;EACd;EACA;EACA,cAAc;EACd;EACA;EACA,cAAc;EACd;EACA;EACA,cAAc;EACd;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;EACxB;;EAEA;IACE;QACI,gCAAgC;IACpC;EACF;EACA;IACE;QACI,2BAA2B;IAC/B;EACF;EACA;IACE;QACI,2BAA2B;IAC/B;EACF;;EAEA;IACE,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,SAAO;IACP,cAAc;EAChB;EACA;IACE,WAAW;IACX,eAAe;EACjB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;EAC3B;;EAEA;IACE;QACI,sBAAsB;IAC1B;IACA;QACI,SAAO;QACP,eAAe;IACnB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,gBAAgB;QAChB,kBAAkB;IACtB;EACF;EACA;IACE;QACI,sBAAsB;IAC1B;IACA;QACI,SAAO;QACP,eAAe;IACnB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,kBAAkB;QAClB,qBAAqB;IACzB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;EACF;EACA;IACE;QACI,sBAAsB;IAC1B;IACA;QACI,SAAO;QACP,eAAe;IACnB;KACC;QACG,gBAAgB;QAChB,mBAAmB;IACvB;EACF;;EAEA,qBAAqB;EACrB;IACE,wBAAwB;IACxB,kBAAkB;IAClB,aAAa;EACf,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB;EACA;IACE,8BAA8B;IAC9B,yBAAyB;IACzB,yBAAyB;IACzB,iBAAiB;IACjB,aAAa;EACf,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB;EACA;IACE;QACI,uBAAuB;QACvB,wBAAwB;IAC5B;EACF;EACA;IACE;QACI,wBAAwB;QACxB,aAAa;IACjB;EACF;EACA;IACE;QACI,uBAAuB;QACvB,wBAAwB;IAC5B;EACF;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;EACrB;EACA;IACE;QACI,sBAAsB;QACtB,uBAAuB;QACvB,uBAAuB;IAC3B;IACA;QACI,mBAAmB;IACvB;EACF;;;;EAIA,WAAW;EACX;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX;EACF;EACA;IACE;QACI;IACJ;EACF;EACA;IACE;QACI;IACJ;EACF;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,iBAAiB;EACnB;;EAEA,aAAa;EACb;IACE,WAAW;EACb,aAAa;EACb,cAAc;EACd,0CAA0C;EAC1C;EACA;IACE,qCAAqC;EACvC;EACA;IACE;QACI,gCAAgC;IACpC;IACA;QACI,2BAA2B;IAC/B;IACA;QACI,WAAW;QACX,eAAe;IACnB;EACF;EACA;IACE;QACI,2BAA2B;IAC/B;EACF;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;EACf;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;;;EAGA,eAAe;EACf;IACE,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;IACf,oCAA4B;IAA5B,4BAA4B;EAC9B;EACA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;IACf,2BAA2B;EAC7B;EACA;IACE,aAAa;IACb,WAAW;EACb;EACA;IACE,YAAY;IACZ,UAAU;EACZ;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,sBAAsB;EACxB;EACA;IACE,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;EAClB;EACA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,iBAAiB;IACjB,6BAA6B;IAC7B,WAAW;IACX,oCAA4B;IAA5B,4BAA4B;EAC9B;EACA;IACE,YAAY;EACd;;EAEA;IACE;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,sBAAsB;IAC1B;IACA;QACI,aAAa;QACb,WAAW;IACf;IACA;QACI,uBAAuB;QACvB,WAAW;QACX,YAAY;QACZ,cAAc;IAClB;EACF;EACA;IACE;QACI,eAAe;IACnB;IACA;QACI,uBAAuB;IAC3B;EACF;;EAEA;EACA,g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","file":"style.css","sourcesContent":["a {\n\tcolor: #ff1456;\n}\n\n.main {\n\twidth: 100%;\n\tmax-width: 100vw;\n\toverflow: hidden;\n}\n\n/* Header */\n.mx-gn {\n\twidth: 100%;\n\theight: 50px;\n\tbackground-color: white;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-bottom: 1px solid #e6e6e6;\n  }\n  .mx-gn-content {\n\twidth: calc(100% - 50px);\n\tpadding: 0 25px;\n\tmax-width: 1024px;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n  }\n  .mx-gn-list {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items:  center;\n  \n\tlist-style: none;\n\tpadding-inline-start: 0;\n  }\n  .mx-gn-link {\n\theight: 100%;\n\tpadding: 0 15px;\n\tfont-size: 13px;\n\tfont-weight: 500;\n\tcolor: black;\n\ttext-transform: uppercase;\n\ttext-decoration: none;\n\ttransition: 0.2s ease-in-out;\n  }\n  .mx-gn-link:hover {\n\tcolor: #888;\n  }\n\n\n  /* global.css boilerplate */\n\n/* \n\nAuthor: Tristan Brewster\nLicense: MIT (no attribution required)\n\nHappy coding!\n\n*/\n\nhtml, body {\n    font-family: \"Inter\", 'Roboto', 'Open Sans', system-ui, sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    color: #111;\n    line-height: 1.125;\n    background-color: white;\n    padding: 0;\n    margin: 0;\n  }\n  \n  /* normalize */\n  a {\n    text-decoration: none;\n    cursor: pointer;\n  }\n  .link {\n    color: #0966ca;\n  }\n  .link:hover {\n  text-decoration: underline;\n  }\n  .link.large {\n    margin: 10px 0;\n    color: #07f;\n    font-size: 24px;\n    font-weight: 600;\n  }\n  ul {\n    list-style: none;\n    padding-inline-start: 0;\n  }\n  blockquote {\n  font-size: 16px;\n  line-height: 24px;\n  color: #333;\n  }\n  blockquote:before {\n    width: 2px;\n    height: 100%;\n    background-color: #d1d5da;\n  }\n  \n  .hide {\n    display: none!important;\n    opacity: 0!important;\n    visibility: hidden!important;\n    pointer-events: none!important;\n  }\n  \n  \n  /* colors and backgrounds */\n  .bg-gray {\n    background-color: #fafafa;\n  }\n  .bg-gray-1 {\n    background-color: #f7f7f7;\n  }\n  .bg-gray-2 {\n    background-color: #f1f1f4;\n  }\n  \n  .bg-111 {\n    background-color: #111;\n  }\n  \n  .bg-blue {\n    background-color: #07f;\n  }\n  \n  .bg-blur {\n    -webkit-backdrop-filter: saturate(180%) blur(20px)!important;\n    backdrop-filter: saturate(180%) blur(20px)!important;\n    background-color: rgba(240,240,240,0.8)!important;\n  }\n  \n  /* font faces */\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Regular.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Regular.woff?v=3.11\") format(\"woff\");\n  }\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fiveatoms.com/new/assets/fonts/inter/Inter-Medium.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Medium.woff?v=3.11\") format(\"woff\");\n  }\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-SemiBold.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-SemiBold.woff?v=3.11\") format(\"woff\");\n  }\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Bold.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-Bold.woff?v=3.11\") format(\"woff\");\n  }\n  @font-face {\n  font-family: 'Inter';\n  font-style:  normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-ExtraBold.woff2?v=3.11\") format(\"woff2\"),\n       url(\"https://fiveatoms.com/new/assets/fonts/inter/Inter-ExtraBold.woff?v=3.11\") format(\"woff\");\n  }\n  \n  /* text styles */\n  h1, .h1 {\n  margin-top: 0px;\n  margin-bottom: 25px;\n  font-family: Inter, Arial, sans-serif;\n  font-size: 48px;\n  line-height: 57px;\n  font-weight: 500;\n  }\n  h2, .h2 {\n  margin-top: 0px;\n  margin-bottom: 25px;\n  font-size: 40px;\n  line-height: 42px;\n  font-weight: 500;\n  }\n  h3, .h3 {\n  margin-top: 0px;\n  margin-bottom: 15px;\n  font-size: 32px;\n  line-height: 38px;\n  font-weight: 500;\n  }\n  h4, .h4 {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: 500;\n  }\n  h5, .h5 {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  font-family: Inter, Arial, sans-serif;\n  font-size: 24px;\n  line-height: 30px;\n  font-weight: 500;\n  }\n  h6, .h6 {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  line-height: 26px;\n  font-weight: 500;\n  }\n  p, .p {\n  margin-top: 0;\n  margin-bottom: 15px;\n  color: #333;\n  font-size: 16px;\n  line-height: 24px;\n  }\n  \n  /* special */\n  p.semi-large {\n    font-size: 18px;\n    line-height: 1.5;\n    color: black;\n  }\n  p.large, .p.large {\n  color: #888;\n  font-size: 22px;\n  line-height: 29px;\n  font-weight: 400;\n  }\n  p.regular {\n    font-size: 24px;\n    line-height: 1.3;\n    color: #333;\n  }\n  .gigantic-heading {\n  margin-bottom: 30px;\n  font-size: 120px;\n  line-height: 120px;\n  font-weight: 500;\n  }\n  .huge-heading {\n  margin-bottom: 35px;\n  color: #111;\n  font-size: 80px;\n  line-height: 1.125;\n  font-weight: 600;\n  }\n  .large-heading {\n    margin-bottom: 25px;\n  color: #111;\n  font-size: 64px;\n  line-height: 1.125;\n  font-weight: 600;\n  }\n  .callout {\n    margin-bottom: 15px;\n    color: #111;\n    font-size: 32px;\n    line-height: 1.125;\n    font-weight: 500;\n    letter-spacing: 0.004em;\n  }\n  .sub-heading {\n  margin-bottom: 15px;\n  font-size: 19px;\n  line-height: 1.2;\n  font-weight: 500;\n  }\n  .sub-heading.large {\n    margin-bottom: 20px;\n    font-size: 30px;\n    line-height: 1.125;\n    font-weight: 500;\n  }\n  .eyebrow {\n  margin-bottom: 16px;\n  color: #000;\n  font-size: 14px;\n  line-height: 14px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  }\n  .eyebrow-alt {\n    color: rgb(130, 130, 130);\n    font-size: 14px;\n    font-weight: 700;\n    letter-spacing: 2px;\n    line-height: 20px;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n  }\n  .caption {\n    color: #333;\n    font-size: 14px;\n    line-height: 20px;\n  }\n  \n  /* responsive sizing */\n  @media only screen and (max-width: 990px) {\n  h1, .h1 {\n    margin-bottom: 15px;\n    font-size: 40px;\n    line-height: 42px;\n  }\n  h2, .h2 {\n    margin-bottom: 15px;\n    font-size: 32px;\n    line-height: 38px;\n  }\n  h3, .h3 {\n    font-size: 28px;\n    line-height: 32px;\n  }\n  h4, .h4 {\n    font-size: 24px;\n    line-height: 30px;\n  }\n  h5, .h5 {\n    font-size: 20px;\n  }\n  .gigantic-heading {\n    font-size: 80px;\n    line-height: 95px;\n  }\n  .huge-heading {\n    font-size: 70px;\n    line-height: 70px;\n  }\n  .large-heading {\n      font-size: 54px;\n  }\n  .callout {\n        font-size: 28px;\n        line-height: 1.14;\n    }\n  }\n  @media only screen and (max-width: 770px) {\n  h1, .h1 {\n    font-weight: 400;\n  }\n  h5, .h5 {\n    line-height: 26px;\n  }\n  .gigantic-heading {\n    font-size: 40px;\n    line-height: 50px;\n  }\n  .huge-heading {\n    font-size: 60px;\n    line-height: 60px;\n  }\n  .large-heading {\n      font-size: 50px;\n  }\n  .callout {\n        font-size: 24px;\n        line-height: 1.16;\n    }\n  }\n  \n  \n  /* text colors */\n  .tc-9 {\n    color: #999;\n  }\n  .tc-3 {\n    color: #333;\n  }\n  \n  \n  .tc-semi {\n    color: rgba(0,0,0,0.6);\n  }\n  .tc-white {\n    color: white;\n  }\n  .tc-semi-white {\n    color: rgba(255,255,255,0.6);\n  }\n  .tc-semi-white.darker {\n    color: rgba(255,255,255,0.8)!important;\n  }\n  \n  /* styling only <b> elements as child */\n  .tc-b-c b {\n    color: #ccc;\n  }\n  \n  \n  /* = Spacing = */\n  .no-space-bottom {\n    margin-bottom: 0;\n  }\n  .no-space-top {\n    margin-top: 0;\n  }\n  .space-top-tiny {\n    margin-top: 5px;\n  }\n  .space-top-very-small {\n    margin-top: 10px;\n  }\n  .space-top-small {\n    margin-top: 20px;\n  }\n  .space-top {\n    margin-top: 30px;\n  }\n  .space-top-semi-large {\n  margin-top: 45px;\n  }\n  .space-top-large {\n    margin-top: 60px;\n  }\n  .space-top-very-large {\n    margin-top: 90px;\n  }\n  .space-top-huge {\n    margin-top: 120px;\n  }\n  .space-top-gigantic {\n    margin-top: 150px;\n  }\n  .space-bottom-tiny {\n    margin-bottom: 5px;\n  }\n  .space-bottom-very-small {\n  margin-bottom: 10px;\n  }\n  .space-bottom-small {\n  margin-bottom: 20px;\n  }\n  .space-bottom {\n  margin-bottom: 30px;\n  }\n  .space-bottom-semi-large {\n  margin-bottom: 45px;\n  }\n  .space-bottom-large {\n  margin-bottom: 60px;\n  }\n  .space-bottom-very-large {\n  margin-bottom: 90px;\n  }\n  .space-bottom-huge {\n  margin-bottom: 120px;\n  }\n  .space-bottom-gigantic {\n  margin-bottom: 150px;\n  }\n  .space-left-tiny {\n    margin-left: 5px;\n  }\n  \n  \n  /* layout */\n  .relative {\n    position: relative!important;\n  }\n  .container, .container-large, .container-very-large, .container-block, .text, .wrapper, .column {\n    display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  }\n  .row {\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  }\n  .section {\n  width: 100%;\n  padding: 7% 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  z-index: 2;\n  position: relative;\n  }\n  .section.full {\n    box-sizing: border-box;\n    min-height: 100vh;\n  }\n  .section.padding-very-small {\n    padding: 20px;\n    width: calc(100% - 40px);\n  }\n  .section.bg-111, .section.bg-blue {\n    color: white;\n  }\n  .section.border-top {\n    border-top: 1px solid #e6e6e6;\n  }\n  .container {\n  width: calc(100% - 44px);\n  max-width: 1024px;\n  padding: 0 22px;\n  }\n  .container-large {\n    width: calc(100% - 44px);\n  max-width: 1296px;\n  padding: 0 22px;\n  }\n  .container-very-large {\n    width: calc(100% - 160px);\n  max-width: 1440px;\n  padding-right: 80px;\n    padding-left: 80px;\n  }\n  .container-block {\n    box-sizing: border-box;\n    width: calc(100% - 100px);\n    max-width: 1024px;\n    padding: 80px 50px;\n    background-color: #f7f7f7;\n  }\n  .wrapper {\n    width: 100%;\n  }\n  .wrapper.space-between {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n  }\n  .text {\n  width: auto;\n  max-width: 550px;\n  overflow: hidden;\n  }\n  .text.large {\n    max-width: 630px;\n  }\n  .text.very-large {\n    max-width: 700px;\n  }\n  .text.align-center {\n    text-align: center;\n  }\n  @media only screen and (max-width: 767px) {\n    .container-very-large {\n        padding-right: 20px;\n        padding-left: 20px;\n        width: calc(100% - 40px);\n    }\n    .section.padding-very-small {\n        padding: 20px 0;\n        width: 100%;\n    }\n    .section {\n        padding: 65px 0;\n    }\n    .section.full {\n        height: auto;\n        min-height: 100vh;\n    }\n  }\n  \n  /* flex customizations */\n  .l-horz {\n    flex-direction: row;\n  }\n  .align-center {\n    align-items: center;\n  }\n  .space-between {\n    justify-content: space-between;\n  }\n  \n  \n  .caption-block {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .caption-block p {\n    font-size: 14px;\n    color: #111;\n  }\n  .divider {\n    width: 100%;\n    height: 1px;\n    background-color: #e6e6e6;\n    margin: 40px 0;\n  }\n  .divider.dark {\n    background-color: #333;\n  }\n  .text-divider {\n    width: 32px;\n    background-color: #d1d5da;\n    margin: 15px 0;\n  }\n  \n  .grid {\n  width: 100%;\n  display: grid;\n  grid-gap: 20px;\n  }\n  .grid-overflow {\n  width: 100%;\n  overflow-x: scroll;\n  }\n  .grid-1 {\n  grid-template-columns: auto;\n  }\n  .grid-2 {\n  grid-template-columns: auto auto;\n  }\n  .grid-2-force {\n    grid-template-columns: 50% 50%;\n  }\n  .grid-3 {\n  grid-template-columns: auto auto auto;\n  }\n  .grid-4 {\n  grid-template-columns: auto auto auto auto;\n  }\n  .grid-5 {\n  grid-template-columns: auto auto auto auto auto;\n  }\n  .grid-6 {\n  grid-template-columns: auto auto auto auto auto auto;\n  }\n  .gap-no {\n    grid-gap: 0;\n  }\n  .gap-1 {\n  grid-gap: 1px;\n  }\n  .gap-10 {\n  grid-gap: 10px;\n  }\n  .gap-20 {\n  grid-gap: 20px;\n  }\n  .gap-30 {\n  grid-gap: 30px;\n  }\n  .gap-40 {\n  grid-gap: 40px;\n  }\n  .gap-50 {\n  grid-gap: 50px;\n  }\n  .gap-60 {\n  grid-gap: 60px;\n  }\n  .gap-70 {\n  grid-gap: 70px;\n  }\n  .gap-80 {\n  grid-gap: 80px;\n  }\n  .gap-90 {\n  grid-gap: 90px;\n  }\n  .grid-block {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  \n  @media only screen and (max-width: 992px) {\n    .grid.break-main {\n        grid-template-columns: auto auto;\n    }\n  }\n  @media only screen and (max-width: 660px) {\n    .grid.break-main {\n        grid-template-columns: auto;\n    }\n  }\n  @media only screen and (max-width: 770px) {\n    .grid.break-medium {\n        grid-template-columns: auto;\n    }\n  }\n  \n  .columns {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .columns .column {\n    flex: 1;\n    max-width: 50%;\n  }\n  .column.full {\n    width: 100%;\n    max-width: none;\n  }\n  .columns .column.text {\n    padding-right: 80px;\n  }\n  .column-image {\n    width: 100%;\n    height: 100%;\n  }\n  .feature-column {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    min-height: 750px;\n    padding: 50px 13%;\n    max-width: 630px;\n    background-color: #fbfbfb;\n  }\n  \n  @media only screen and (max-width: 992px) {\n    .columns.break-main {\n        flex-direction: column;\n    }\n    .columns.break-main .column {\n        flex: 1;\n        max-width: none;\n    }\n    .columns.break-main .column.text {\n        padding-right: 0;\n        margin-bottom: 50px;\n    }\n    .feature-column {\n        min-height: auto;\n        padding: 50px 30px;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .columns.break-medium {\n        flex-direction: column;\n    }\n    .columns.break-medium .column {\n        flex: 1;\n        max-width: none;\n    }\n    .columns.break-medium .column.text {\n        padding-right: 0;\n        margin-bottom: 50px;\n    }\n    .feature-column {\n        padding-top: 100px;\n        padding-bottom: 100px;\n    }\n    .column.full.img {\n        height: 500px;\n    }\n    .column-image {\n        height: 500px;\n    }\n  }\n  @media only screen and (max-width: 480px) {\n    .columns.break-small {\n        flex-direction: column;\n    }\n    .columns.break-small .column {\n        flex: 1;\n        max-width: none;\n    }\n     .columns.break-small .column.text {\n        padding-right: 0;\n        margin-bottom: 50px;\n    }\n  }\n  \n  /* specific layouts */\n  .section-block {\n    width: calc(100% - 80px);\n    padding: 20px 40px;\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  }\n  .section-block-container {\n    padding: 150px 80px 120px 80px;\n    background-color: #fafafa;\n    width: calc(100% - 160px);\n    max-width: 1440px;\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  }\n  @media only screen and (max-width: 990px) {\n    .section-block-container {\n        padding: 50px 30px 70px;\n        width: calc(100% - 60px);\n    }\n  }\n  @media only screen and (max-width: 570px) {\n    .section-block {\n        width: calc(100% - 40px);\n        padding: 20px;\n    }\n  }\n  @media only screen and (max-width: 450px) {\n    .section-block-container {\n        padding: 50px 10px 70px;\n        width: calc(100% - 20px);\n    }\n  }\n  \n  .feature-text-block {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n  }\n  @media only screen and (max-width: 770px) {\n    .feature-text-block {\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n    }\n    .feature-text-block .text {\n        margin-bottom: 60px;\n    }\n  }\n  \n  \n  \n  /* images */\n  .img.full {\n    width: 100%;\n  }\n  .image.full {\n    width: 100%;\n    height: 680px\n  }\n  @media only screen and (max-width: 770px) {\n    .image.full {\n        height: 480px\n    }\n  }\n  @media only screen and (max-width: 570px) {\n    .image.full {\n        height: 380px\n    }\n  }\n  \n  .image-caption {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    text-align: center;\n    color: #777;\n    font-size: 14px;\n    line-height: 20px;\n  }\n  \n  /* features */\n  .feature-blocks {\n    width: 100%;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: auto auto auto auto;\n  }\n  .feature-blocks.c-3 {\n    grid-template-columns: auto auto auto;\n  }\n  @media only screen and (max-width: 850px) {\n    .feature-blocks {\n        grid-template-columns: auto auto;\n    }\n    .feature-blocks.c-3 {\n        grid-template-columns: auto;\n    }\n    .feature-blocks .feature-block.small {\n        width: 100%;\n        max-width: none;\n    }\n  }\n  @media only screen and (max-width: 700px) {\n    .feature-blocks {\n        grid-template-columns: auto;\n    }\n  }\n  .feature-block {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 10px;\n  }\n  .feature-block.small {\n    max-width: 275px;\n  }\n  .caption.feature-caption {\n    max-width: 200px;\n  }\n  \n  \n  /* blog cards */\n  .card {\n    max-width: 350px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 5px;\n    overflow: hidden;\n    border: 1px solid #e6e6e6;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n  }\n  .card:hover {\n    transform: translateY(-10px);\n  }\n  .card.no-max-w{\n    max-width: none;\n  }\n  .card.large {\n    max-width: none;\n    flex-direction: row-reverse;\n  }\n  .card .card-image {\n    height: 185px;\n    width: 100%;\n  }\n  .card.large .card-image {\n    height: 100%;\n    width: 60%;\n  }\n  .card-content {\n    padding: 30px 30px 25px;\n  }\n  .card.large .card-content {\n    padding: 30px 30px 25px;\n    padding-right: 40px;\n    width: calc(40% - 40px);\n    height: calc(100% - 55px);\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .card-title {\n    color: rgb(38, 38, 38);\n    font-size: 22px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    text-align: left;\n  }\n  .card-content .card-text {\n    color: rgb(38, 38, 38);\n    margin-bottom: 25px;\n  }\n  .card-link {\n    width: 100%;\n    padding-top: 20px;\n    border-top: 1px solid #e6e6e6;\n    color: #07f;\n    transition: 0.3s ease-in-out;\n  }\n  .card-link:hover {\n    opacity: 0.7;\n  }\n  \n  @media only screen and (max-width: 992px) {\n    .card {\n        max-width: none;\n    }\n    .card.large {\n        max-width: none;\n        flex-direction: column;\n    }\n    .card.large .card-image {\n        height: 185px;\n        width: 100%;\n    }\n    .card.large .card-content {\n        padding: 30px 30px 25px;\n        width: auto;\n        height: auto;\n        display: block;\n    }\n  }\n  @media only screen and (max-width: 660px) {\n    .card, .card.large {\n        max-width: 100%;\n    }\n    .card-image {\n        height: 300px!important;\n    }\n  }\n  \n  .mx-gn-menu-button[aria-expanded='true'] .mx-gn-menu-button-bar.top {\n  transform: translateY(4px) rotate(45deg);\n  }\n  .mx-gn-menu-button[aria-expanded='true'] .mx-gn-menu-button-bar.bottom {\n  transform: translateY(-4px) rotate(-45deg);\n  }\n  .mx-gn-menu-button-bars {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  }\n  .mx-gn-menu-button-bar {\n  width: 15px;\n  height: 1px;\n  background-color: black;\n  transition: 0.2s ease-in-out;\n  }\n  .mx-gn-menu-button-bar.top {\n  transform: translateY(0) rotate(0);\n  }\n  .mx-gn-menu-button-bar.bottom {\n  margin-top: 7px;\n  transform: translateY(0) rotate(0);\n  }\n  \n  .mx-globalnav.dark .mx-gn-menu-button-bar {\n    background-color: white;\n  }\n  \n  .mobile-only {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n  }\n  @media only screen and (max-width: 770px) {\n  .desktop-only, .mx-gn-list-item {\n    display: none;\n    visibility: hidden;\n    pointer-events: none;\n  }\n  .mobile-only, .mx-gn-list-item.always {\n    display: block;\n    visibility: visible;\n    pointer-events: auto;\n  }\n  }\n  .mx-gn-item {\n  height: 44px;\n  }\n  .mx-gn-mobile-menu {\n    padding: 30px 22px;\n  width: calc(100vw - 44px);\n  height: 100vh;\n    position: fixed;\n  margin: 0;\n  top: 45px;\n  left: 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  overflow-y: scroll;\n  background-color: white;\n  transition: 0.3s ease-in-out;\n  \n  visibility: hidden;\n  pointer-events: none;\n  opacity: 0;\n  transform: translate(-100px, -100px);\n  }\n  .mx-gn-mobile-menu-button[aria-expanded='true'] .mx-gn-menu-button-bar.top {\n  transform: translateY(4px) rotate(45deg);\n  }\n  .mx-gn-mobile-menu-button[aria-expanded='true'] .mx-gn-menu-button-bar.bottom {\n  transform: translateY(-4px) rotate(-45deg);\n  }\n  .mx-gn-mobile-menu-button[aria-expanded='true']+.mx-gn-mobile-menu {\n  /*display: flex;*/\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  overflow: hidden;\n  z-index: 999;\n  transform: translate(0,0);\n  }\n  .mx-gn-mobile-menu-button[aria-expanded='true']+.mx-gn-mobile-menu.bg-blur {\n    top: 44px;\n  }\n  .mx-gn-mobile-list {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 30px;\n  }\n  .mx-gn-mobile-list:last-child {\n  margin-bottom: 0;\n  }\n  .mx-gn-mobile-list li {\n  width: 100%;\n  }\n  .mx-gn-mobile-list-item-category {\n  margin-bottom: 10px;\n  }\n  .mx-gn-mobile-list-item-category span {\n  color: #666;\n  }\n  .mx-gn-mobile-list li a {\n  width: 100%;\n  display: flex;\n  color: black;\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 600;\n  padding: 10px 0px;\n  border-bottom: 1px solid #e6e6e6;\n  transition: 0.2s ease-in-out;\n  }\n  .mx-gn-mobile-list li a:hover {\n  opacity: 0.7;\n  }\n  \n  /* mx-footer */\n  .mx-footer {\n    width: calc(100% - 44px);\n    padding: 15px 22px;\n    font-size: 14px;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-top: 1px solid #f1f1f1;\n  }\n  .mx-footer span {\n    color: #5a5a5a;\n  }\n  .mx-social-container ul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n  }\n  .mx-social-link {\n    padding: 0 10px;\n    height: calc(100% - 20px);\n    color: #5a5a5a;\n    cursor: pointer;\n  }\n  .mx-social-link img {\n    transition: 0.2s ease-in-out;\n  }\n  .mx-social-link:hover > img {\n    transform: translateY(-2px);\n  }\n  .mx-social-link img {\n    width: 20px;\n  }\n  @media only screen and (max-width: 600px) {\n    .mx-footer {\n        justify-content: center;\n        flex-direction: column;\n    }\n    .mx-footer span {\n        margin-bottom: 10px;\n    }\n  }\n  .mx-social-menu {\n    list-style: none;\n  padding-inline-start: 0;\n  padding: 0;\n  margin: 0;\n    position: absolute;\n  display: flex;\n  visibility: visible;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  top: 40px;\n  right: 0;\n  width: 7.5rem;\n  background-color: white;\n  overflow: hidden;\n  border-radius: 5px;\n  z-index: 999999999999;\n  box-shadow: 0 0 15px rgba(0,0,0,.15),0 0 1px 1px rgba(0,0,0,.1);\n  \n  display: none;\n  visibility: hidden;\n  opacity: 0;\n  pointer-events: none;\n  }\n  .mx-footer .mx-social-menu {\n    bottom: 60px!important;\n    right: 25px!important;\n    top: auto!important;\n  }\n  .mx-social-link-menu-button {\n    border-radius: 3px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px 10px;\n    transition: 0.2s ease-in-out;\n  }\n  .mx-social-link-menu-button:hover {\n    background-color: #f7f7f7;\n  }\n  .mx-social-link-menu-button:hover > img {\n    transform: translateY(0);\n  }\n  .mx-social-link-menu-button.white:hover {\n    background-color: #333;\n  }\n  .mx-social-link-menu-button[aria-expanded='true'] {\n    background-color: #eee;\n  }\n  .mx-social-link-menu-button.white[aria-expanded='true'] {\n    background-color: #222;\n  }\n  .mx-social-link-menu-button[aria-expanded='true']+.mx-social-menu {\n    display: flex;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  }\n  .mx-social-menu li {\n    width: 100%;\n  }\n  .mx-social-menu-link {\n    width: calc(100% - 2rem);\n  border: none;\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 1.125rem;\n  color: #000;\n  padding: 0 1rem;\n  cursor: pointer;\n  transition: 0.1s ease-in-out;\n  }\n  .mx-social-menu-link:hover {\n    background-color: #f7f7f7;\n  }\n  \n  /* mx-btn */\n  .mx-btn {\n  padding: 10px 16px;\n  border-radius: 6px;\n  background-color: #07f;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.19);\n  color: #fff;\n  font-weight: 500;\n  transition: 0.2s ease-in-out;\n  }\n  .mx-btn:hover {\n  background-color: #3452ff;\n  }\n  \n  /* size variations */\n  .mx-btn.small {\n  padding: 7px 10px;\n  border-radius: 4px;\n  }\n  .mx-btn.large {\n  padding: 15px 20px;\n  border-radius: 4px;\n  }\n  \n  /* color variations */\n  .mx-btn.white {\n  background-color: white;\n  color: black;\n  }\n  .mx-btn.white:hover {\n  color: #3452ff;\n  }\n  .mx-btn.pink {\n  background-color: #ff1456;\n  }\n  .mx-btn.pink:hover {\n  background-color: #d2003b;\n  }\n  \n  .gx-btn {\n    display: inline-block;\n    padding: 16px 24px;\n    font-size: 14px;\n    font-weight: 500;\n    color: white;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-color: #1074e7;\n    border-radius: 3px;\n    transition: .2s ease-in-out;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  .gx-btn:hover {\n    background-color: #0366d6;\n  }\n  \n  /* special */\n  .underline-link {\n    margin-top: 15px;\n  border-bottom: 1px solid #ddd;\n  position: relative;\n  color: black;\n  padding-bottom: 4px;\n  transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  }\n  .underline-link.white {\n    border-color: #555;\n    color: white;\n  }\n  .underline-link:before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 1px;\n  background-color: black;\n  position: absolute;\n  left: 0;\n  bottom: -1px;\n  opacity: 0;\n  transform-origin: left; \n  transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  }\n  .underline-link:hover:before {\n  width: 100%;\n  opacity: 1;\n  }\n  .underline-link.white:before {\n    background-color: white;\n  }\n  .move-link {\n    height: 25px;\n    font-size: 16px;\n    color: #07f;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n  }\n  .move-link:hover {\n    transform: translateY(-3px);\n  }\n  \n  \n  /* form */\n  .form {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .mx-input {\n  height: 42px;\n  width: 100%;\n  max-width: 325px;\n  margin-bottom: 10px;\n  color: #494949;\n  font-size: 15px;\n  line-height: 1.29412;\n  font-weight: 400;\n  letter-spacing: -.021em;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 53px 0 15px;\n  border: 1px solid #d6d6d6;\n  border-radius: 6px;\n  text-align: left;\n  outline: none;\n  box-shadow: none;\n  z-index: 1;\n  }\n  .mx-input:focus {\n  border-color: #07f;\n  outline: none;\n  z-index: 2;\n  }\n  textarea.mx-input {\n    max-width: none;\n  height: auto;\n  padding: 10px;\n  }\n  .form.full .mx-input {\n    max-width: none;\n  }\n  label {\n    color: #333;\n    font-size: 14px;\n    line-height: 20px;\n    margin-bottom: 3px;\n  }\n  \n  input.mx-btn {\n    width: 100%;\n    border: none;\n    outline: none;\n    border-radius: 4px;\n  }\n  \n  /* mx-tag */\n  .mx-tag {\n  padding: 3px 7px;\n  border-radius: .9375rem;\n  background-color: #d0e2ff;\n  color: #0043ce;\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  }\n  .mx-tag:last-child {\n    margin-right: 0;\n  }\n  .mx-tag.red {\n  background-color: #ffd7d9;\n  color: #a2191f!important;\n  }\n  .mx-tag.magenta {\n  background-color: #ffd6e8;\n  color: #9f1853!important;\n  }\n  .mx-tag.purple {\n  background-color: #e8daff;\n  color: #6929c4!important;\n  }\n  .mx-tag.cyan {\n  background-color: #bae6ff;\n  color: #00539a!important;\n  }\n  .mx-tag.teal {\n  background-color: #9ef0f0;\n  color: #005d5d!important;\n  }\n  .mx-tag.green {\n  background-color: #a7f0ba;\n  color: #0e6027!important;\n  }\n  .mx-tag.gray {\n  background-color: #e0e0e0;\n  color: #161616!important;\n  }\n  .mx-tag.cool-gray {\n  background-color: #dde1e6;\n  color: #121619!important;\n  }\n  .mx-tag.warm-gray {\n  background-color: #e5e0df;\n  color: #171414!important;\n  }\n  \n  \n  /* Animate */\n  \n  .fadein {\n  -webkit-animation: fadein 1s;\n  animation: fadein 1s;\n  }\n  .fadeout {\n  -webkit-animation: fadeout 1s;\n  animation: fadeout 1s;\n  }\n  .fadeup {\n  -webkit-animation: fadeup 1s;\n  animation: fadeup 1s;\n  }\n  \n  \n  @keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n  }\n  @-webkit-keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n  }\n  @keyframes fadeout {\n  from { opacity: 1; }\n  to   { opacity: 0; }\n  }\n  @-webkit-keyframes fadeout {\n  from { opacity: 1; }\n  to   { opacity: 0; }\n  }\n  @keyframes fadeup {\n  from { opacity: 0; margin-top: 100px; }\n  to   { opacity: 1; margin-top: 0; }\n  }\n  @-webkit-keyframes fadeup {\n  from { opacity: 0; margin-top: 100px; }\n  to   { opacity: 1; margin-top: 0; }\n  }\n  \n  /* END Animate */"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/andromeda/files/code/git/fiveatoms/fiveatoms-blog/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // This default export is required in a new `pages/_app.js` file.

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
}

/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./","static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map