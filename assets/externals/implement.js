/**
 * From: https://github.com/Jahans3/Implement.js
 * Made some small modification,the original can be downloaded from github or:
 * https://www.npmjs.com/package/implement-js with npm i implement-js 
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define("implement", [], factory);
  } else if (typeof exports === 'object') {
    exports["implement"] = factory();
  } else {
    root["implement"] = factory();
  }
})(this, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
    }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
      /******/
    });
        /******/
      }
      /******/
    };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
    };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
    /******/
  })
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var IMPLEMENT_TYPES = exports.IMPLEMENT_TYPES = {
        INTERFACE: '__IMPLEMENT_INTERFACE__',
        NAME: '__IMPLEMENT_INTERFACE_NAME__',
        OPTIONS: '__IMPLEMENT_INTERFACE_OPTIONS__',
        TYPE: '__IMPLEMENT_TYPE_OBJECT__'
      };

      var IMPLEMENT_TYPES_LIST = exports.IMPLEMENT_TYPES_LIST = function () {
        var implementTypesList = [];

        for (var type in IMPLEMENT_TYPES) {
          implementTypesList.push(IMPLEMENT_TYPES[type]);
        }

        return implementTypesList;
      }();

      var VALID_TYPES = exports.VALID_TYPES = {
        NUMBER: 'number',
        OBJECT: 'object',
        STRING: 'string',
        SYMBOL: 'symbol',
        FUNC: 'function',
        BOOL: 'boolean',
        ARRAY: 'array',
        ANY: 'any'
      };

      var VALID_TYPES_LIST = exports.VALID_TYPES_LIST = function () {
        var validTypesList = [];

        for (var type in VALID_TYPES) {
          if (VALID_TYPES.hasOwnProperty(type)) {
            validTypesList.push(VALID_TYPES[type]);
          }
        }

        return validTypesList;
      }();

      var UUID_PATTERN = exports.UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

      /***/
    }),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EmptyArray = exports.InvalidShape = exports.InvalidShapeArray = exports.InvalidType = exports.InvalidInterface = exports.EmptyInterface = exports.InvalidTypeImplementation = exports.InvalidArrayElement = exports.UnexpectedPropertyFound = exports.TrimAlert = exports.TrimArrayElementAlert = exports.InterfaceNotImplemented = exports.InvalidExtendedInterface = undefined;

      var _factory = __webpack_require__(5);

      var _factory2 = _interopRequireDefault(_factory);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var InvalidExtendedInterface = exports.InvalidExtendedInterface = new _factory2.default({
        message: function message() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            interfaceName = _ref.interfaceName;

          return '\n    Interface(): \'' + interfaceName + '\' attempted to extended invalid Interface().\n  ';
        }
      });

      var InterfaceNotImplemented = exports.InterfaceNotImplemented = new _factory2.default({
        message: function message() {
          var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            interfaceName = _ref2.interfaceName,
            properties = _ref2.properties;

          return '\n    Interface(): \'' + interfaceName + '\' not implemented.\n    Failed to implement the following properties: ' + properties + '.\n  ';
        }
      });

      var TrimArrayElementAlert = exports.TrimArrayElementAlert = new _factory2.default({
        message: function message() {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            element = _ref3.element,
            property = _ref3.property,
            interfaceName = _ref3.interfaceName;

          return '\n    Trimming element: ' + element + ' from array property: \'' + property + '\' on Interface(): \'' + interfaceName + '\'.\n  ';
        }
      });

      var TrimAlert = exports.TrimAlert = new _factory2.default({
        message: function message() {
          var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            property = _ref4.property,
            interfaceName = _ref4.interfaceName;

          return '\n    Trimming property: \'' + property + '\' from Interface(): \'' + interfaceName + '\'.\n  ';
        }
      });

      var UnexpectedPropertyFound = exports.UnexpectedPropertyFound = new _factory2.default({
        message: function message() {
          var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            property = _ref5.property,
            interfaceName = _ref5.interfaceName;

          return '\n    Unexpected property: \'' + property + '\' found on Interface(): \'' + interfaceName + '\'.\n  ';
        }
      });

      var InvalidArrayElement = exports.InvalidArrayElement = new _factory2.default({
        message: function message() {
          var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            interfaceName = _ref6.interfaceName,
            property = _ref6.property;

          return '\n    Failed to implement Interface(): \'' + interfaceName + '\'.\n    Invalid array element given to property: \'' + property + '\'.\n    Strict mode was enabled and element was not a valid type() or failed to implement an Interface().\n  ';
        }
      });

      var InvalidTypeImplementation = exports.InvalidTypeImplementation = new _factory2.default({
        message: function message() {
          var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            interfaceName = _ref7.interfaceName,
            type = _ref7.type,
            property = _ref7.property,
            expectedType = _ref7.expectedType;

          return '\n    Failed to implement Interface(): \'' + interfaceName + '\'.\n    Invalid type(): \'' + type + '\' given to property: \'' + property + '\', expected type(): \'' + expectedType + '\'.\n  ';
        }
      });

      var EmptyInterface = exports.EmptyInterface = new _factory2.default({
        message: 'Empty object given to Interface(), my be an object containing only valid type() objects'
      });

      var InvalidInterface = exports.InvalidInterface = new _factory2.default({
        message: 'Invalid object given as Interface() property, must be a valid type() object.'
      });

      var InvalidType = exports.InvalidType = new _factory2.default({
        message: function message() {
          var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            type = _ref8.type;

          return '\n    Invalid type: \'' + type + '\' passed to type().\n    Must be one of \'number\', \'object\', \'string\', \'symbol\', \'function\', \'boolean\', or \'array\'.\n  ';
        }
      });

      var InvalidShapeArray = exports.InvalidShapeArray = new _factory2.default({
        message: '\n    Shape is not an array or an invalid was element given as a shape.\n    Elements must be a valid type() or Interface().\n  '
      });

      var InvalidShape = exports.InvalidShape = new _factory2.default({
        message: 'Invalid object given as a type() shape, must be a valid Interface().'
      });

      var EmptyArray = exports.EmptyArray = new _factory2.default({
        message: function message() {
          var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            interfaceName = _ref9.interfaceName,
            property = _ref9.property;

          return '\n    Failed to implement Interface(): \'' + interfaceName + '\'.\n    Empty array given to type() array with strict mode enabled.\n    Property: \'' + property + '\' array should contain at least one element, instead empty array was found.\n  ';
        }
      });

      /***/
    }),
/* 2 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _implement = __webpack_require__(3);

      Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_implement).default;
        }
      });

      var _Interface = __webpack_require__(11);

      Object.defineProperty(exports, 'Interface', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Interface).default;
        }
      });

      var _type = __webpack_require__(17);

      Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_type).default;
        }
      });

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /***/
    }),
/* 3 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _implement = __webpack_require__(4);

      Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_implement).default;
        }
      });
      Object.defineProperty(exports, 'implementType', {
        enumerable: true,
        get: function get() {
          return _implement.implementType;
        }
      });
      Object.defineProperty(exports, 'implementTypedArray', {
        enumerable: true,
        get: function get() {
          return _implement.implementTypedArray;
        }
      });
      Object.defineProperty(exports, 'trimProperty', {
        enumerable: true,
        get: function get() {
          return _implement.trimProperty;
        }
      });
      Object.defineProperty(exports, 'getType', {
        enumerable: true,
        get: function get() {
          return _implement.getType;
        }
      });
      Object.defineProperty(exports, 'filterFalseyMutable', {
        enumerable: true,
        get: function get() {
          return _implement.filterFalseyMutable;
        }
      });
      Object.defineProperty(exports, 'trimArrayElement', {
        enumerable: true,
        get: function get() {
          return _implement.trimArrayElement;
        }
      });

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /***/
    }),
/* 4 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.implementType = exports.implementTypedArray = exports.getType = exports.trimProperty = exports.trimArrayElement = exports.filterFalseyMutable = exports.shallowMatchKeys = exports.renameProperty = undefined;

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      exports.default = implement;

      var _constants = __webpack_require__(0);

      var _errors = __webpack_require__(1);

      var errors = _interopRequireWildcard(_errors);

      function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

      var renameProperty = exports.renameProperty = function renameProperty(_ref) {
        var Interface = _ref.Interface,
          property = _ref.property,
          newName = _ref.newName;

        var propertyValue = Interface[property];

        Interface[property] = undefined;
        Interface[newName] = propertyValue;

        return newName;
      };

      var shallowMatchKeys = exports.shallowMatchKeys = function shallowMatchKeys(_ref2) {
        var Interface = _ref2.Interface,
          object = _ref2.object,
          _ref2$warn = _ref2.warn,
          warn = _ref2$warn === undefined ? true : _ref2$warn,
          _ref2$error = _ref2.error,
          error = _ref2$error === undefined ? false : _ref2$error;

        var interfaceKeys = Object.keys(Interface);
        var objectKeys = Object.keys(object);
        var propertiesNotImplemented = [];

        errors.InterfaceNotImplemented.options = { warn: warn, error: error };

        interfaceKeys.map(function (key) {
          if (!objectKeys.includes(key) && !_constants.IMPLEMENT_TYPES_LIST.includes(key)) {
            propertiesNotImplemented.push(key);
          }
        });

        if (propertiesNotImplemented.length) {
          var interfaceName = Interface[_constants.IMPLEMENT_TYPES.NAME];
          var errorDetails = { interfaceName: interfaceName, properties: JSON.stringify(propertiesNotImplemented) };

          errors.InterfaceNotImplemented.warn(errorDetails);
          errors.InterfaceNotImplemented.throw(errorDetails);
        }
      };

      var filterFalseyMutable = exports.filterFalseyMutable = function filterFalseyMutable(_ref3) {
        var _ref3$array = _ref3.array,
          array = _ref3$array === undefined ? [] : _ref3$array;

        array.forEach(function (el, i) {
          if (!el) array.splice(i, 1);
        });
      };

      var trimArrayElement = exports.trimArrayElement = function trimArrayElement(_ref4) {
        var _ref4$array = _ref4.array,
          array = _ref4$array === undefined ? [] : _ref4$array,
          index = _ref4.index,
          element = _ref4.element,
          property = _ref4.property,
          interfaceName = _ref4.interfaceName,
          _ref4$warn = _ref4.warn,
          warn = _ref4$warn === undefined ? true : _ref4$warn;

        errors.TrimArrayElementAlert.options = { warn: warn };
        errors.TrimArrayElementAlert.warn({ element: element, property: property, interfaceName: interfaceName });

        array[index] = undefined;

        filterFalseyMutable({ array: array });
      };

      var trimProperty = exports.trimProperty = function trimProperty(_ref5) {
        var object = _ref5.object,
          property = _ref5.property,
          interfaceName = _ref5.interfaceName,
          _ref5$warn = _ref5.warn,
          warn = _ref5$warn === undefined ? true : _ref5$warn;

        errors.TrimAlert.options = { warn: warn };
        errors.TrimAlert.warn({ property: property, interfaceName: interfaceName });

        delete object[property];
      };

      var getType = exports.getType = function getType(property) {
        if (Array.isArray(property)) return _constants.VALID_TYPES.ARRAY;

        return typeof property === 'undefined' ? 'undefined' : _typeof(property);
      };

      var implementTypedArray = exports.implementTypedArray = function implementTypedArray(_ref6) {
        var _ref6$object = _ref6.object,
          object = _ref6$object === undefined ? {} : _ref6$object,
          _ref6$typedArray = _ref6.typedArray,
          typedArray = _ref6$typedArray === undefined ? [] : _ref6$typedArray,
          Interface = _ref6.Interface,
          property = _ref6.property;
        var _Interface$IMPLEMENT_ = Interface[_constants.IMPLEMENT_TYPES.OPTIONS];
        _Interface$IMPLEMENT_ = _Interface$IMPLEMENT_ === undefined ? {} : _Interface$IMPLEMENT_;
        var _Interface$IMPLEMENT_2 = _Interface$IMPLEMENT_.warn,
          warn = _Interface$IMPLEMENT_2 === undefined ? true : _Interface$IMPLEMENT_2,
          _Interface$IMPLEMENT_3 = _Interface$IMPLEMENT_.error,
          error = _Interface$IMPLEMENT_3 === undefined ? false : _Interface$IMPLEMENT_3,
          _Interface$IMPLEMENT_4 = _Interface$IMPLEMENT_.strict,
          strict = _Interface$IMPLEMENT_4 === undefined ? false : _Interface$IMPLEMENT_4,
          _Interface$IMPLEMENT_5 = _Interface$IMPLEMENT_.trim,
          trim = _Interface$IMPLEMENT_5 === undefined ? false : _Interface$IMPLEMENT_5,
          interfaceName = Interface[_constants.IMPLEMENT_TYPES.NAME];
        var _object$property = object[property],
          array = _object$property === undefined ? object : _object$property;

        var anyType = typedArray.find(function (item) {
          return item.type === _constants.VALID_TYPES.ANY;
        });

        errors.InvalidArrayElement.options = { warn: warn, error: error };
        errors.EmptyArray.options = { warn: warn, error: error };

        if (strict && typedArray.length && !array.length && !anyType) {
          var errorDetails = { interfaceName: interfaceName, property: property };

          errors.EmptyArray.warn(errorDetails);
          errors.EmptyArray.throw(errorDetails);
        }

        array.map(function (el, i) {
          var type = getType(el);
          var validTypes = typedArray.filter(function (item) {
            return item.type === type;
          });

          if (!anyType && !validTypes.length && (trim || strict)) {
            var _errorDetails = { interfaceName: interfaceName, property: property };

            !trim && errors.InvalidArrayElement.warn(_errorDetails);
            !trim && errors.InvalidArrayElement.throw(_errorDetails);

            if (trim) {
              trimArrayElement({ array: array, index: i, element: el, property: property, interfaceName: interfaceName, warn: warn });
            }

            return;
          }

          validTypes.map(function (validType) {
            var _validType$Interface = validType.Interface,
              TypeInterface = _validType$Interface === undefined ? false : _validType$Interface;


            if (TypeInterface) {
              implement(TypeInterface)(el);
            } else if (validType === _constants.VALID_TYPES.ARRAY) {
              implementTypedArray({ object: el, typedArray: validType, Interface: Interface });
            } else {
              implementType({ arrayValue: el, Interface: Interface, arrayType: validType });
            }
          });
        });
      };

      var implementType = exports.implementType = function implementType(_ref7) {
        var _ref7$object = _ref7.object,
          object = _ref7$object === undefined ? {} : _ref7$object,
          _ref7$property = _ref7.property,
          property = _ref7$property === undefined ? {} : _ref7$property,
          _ref7$Interface = _ref7.Interface,
          Interface = _ref7$Interface === undefined ? {} : _ref7$Interface,
          _ref7$arrayType = _ref7.arrayType,
          arrayType = _ref7$arrayType === undefined ? {} : _ref7$arrayType,
          _ref7$arrayValue = _ref7.arrayValue,
          arrayValue = _ref7$arrayValue === undefined ? {} : _ref7$arrayValue;
        var _Interface$property = Interface[property];
        _Interface$property = _Interface$property === undefined ? arrayType : _Interface$property;
        var expectedType = _Interface$property.type,
          typedArray = _Interface$property.array,
          interfaceName = Interface[_constants.IMPLEMENT_TYPES.NAME],
          _Interface$IMPLEMENT_6 = Interface[_constants.IMPLEMENT_TYPES.OPTIONS],
          _Interface$IMPLEMENT_7 = _Interface$IMPLEMENT_6.warn,
          warn = _Interface$IMPLEMENT_7 === undefined ? true : _Interface$IMPLEMENT_7,
          _Interface$IMPLEMENT_8 = _Interface$IMPLEMENT_6.error,
          error = _Interface$IMPLEMENT_8 === undefined ? false : _Interface$IMPLEMENT_8,
          _Interface$IMPLEMENT_9 = _Interface$IMPLEMENT_6.trim,
          trim = _Interface$IMPLEMENT_9 === undefined ? false : _Interface$IMPLEMENT_9;
        var _object$property2 = object[property],
          propertyValue = _object$property2 === undefined ? arrayValue : _object$property2;

        var type = getType(propertyValue);

        errors.InvalidTypeImplementation.options = { warn: warn, error: error };

        if (type !== expectedType && expectedType !== _constants.VALID_TYPES.ANY) {
          var errorDetails = { property: property, interfaceName: interfaceName, type: type, expectedType: expectedType };

          errors.InvalidTypeImplementation.warn(errorDetails);
          errors.InvalidTypeImplementation.throw(errorDetails);

          trim && trimProperty({ object: object, property: property, interfaceName: interfaceName, warn: warn });
        }

        if (type === _constants.VALID_TYPES.ARRAY) {
          implementTypedArray({ object: object, typedArray: typedArray, Interface: Interface, property: property });
        }
      };

      function implement(Interface) {
        return function (object) {
          var _Interface$IMPLEMENT_10 = Interface[_constants.IMPLEMENT_TYPES.OPTIONS],
            _Interface$IMPLEMENT_11 = _Interface$IMPLEMENT_10.error,
            error = _Interface$IMPLEMENT_11 === undefined ? false : _Interface$IMPLEMENT_11,
            _Interface$IMPLEMENT_12 = _Interface$IMPLEMENT_10.warn,
            warn = _Interface$IMPLEMENT_12 === undefined ? true : _Interface$IMPLEMENT_12,
            _Interface$IMPLEMENT_13 = _Interface$IMPLEMENT_10.strict,
            strict = _Interface$IMPLEMENT_13 === undefined ? false : _Interface$IMPLEMENT_13,
            _Interface$IMPLEMENT_14 = _Interface$IMPLEMENT_10.trim,
            trim = _Interface$IMPLEMENT_14 === undefined ? false : _Interface$IMPLEMENT_14,
            _Interface$IMPLEMENT_15 = _Interface$IMPLEMENT_10.rename,
            rename = _Interface$IMPLEMENT_15 === undefined ? {} : _Interface$IMPLEMENT_15;


          errors.UnexpectedPropertyFound.options = { warn: warn, error: error };

          shallowMatchKeys({ object: object, Interface: Interface, warn: warn, error: error });

          for (var property in object) {
            if (object.hasOwnProperty(property)) {
              var _Interface$property2 = Interface[property],
                interfaceProp = _Interface$property2 === undefined ? {} : _Interface$property2;

              var newName = rename[property];
              var typedArray = interfaceProp.array,
                NestedInterface = interfaceProp.Interface,
                interfaceType = interfaceProp[_constants.IMPLEMENT_TYPES.TYPE],
                interfaceName = interfaceProp[_constants.IMPLEMENT_TYPES.NAME];


              if (newName) {
                property = renameProperty({ Interface: Interface, property: property, newName: newName });
              }

              if (!Object.keys(interfaceProp).length) {
                if (strict && !trim) {
                  var errorDetails = { interfaceName: interfaceName, property: property };

                  errors.UnexpectedPropertyFound.warn(errorDetails);
                  errors.UnexpectedPropertyFound.throw(errorDetails);
                } else if (trim) {
                  trimProperty({ object: object, property: property, interfaceName: interfaceName, warn: warn });
                }
              }

              if (interfaceType && !NestedInterface) {
                implementType({ object: object, property: property, Interface: Interface, typedArray: typedArray });
              } else if (NestedInterface) {
                implement(NestedInterface)(object[property]);
              }
            }
          }

          return object;
        };
      }

      /***/
    }),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _index = __webpack_require__(6);

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      var ErrorFactory = function () {
        function ErrorFactory(_ref) {
          var message = _ref.message;

          _classCallCheck(this, ErrorFactory);

          this.message = message;
          this._shouldWarn = true;
          this._shouldThrow = false;
        }

        _createClass(ErrorFactory, [{
          key: 'warn',
          value: function warn() {
            (0, _index.warning)(!this.shouldWarn, this.message.apply(this, arguments));
          }
        }, {
          key: 'throw',
          value: function _throw() {
            (0, _index.invariant)(!this.shouldThrow, this.message.apply(this, arguments));
          }
        }, {
          key: 'options',
          set: function set(_ref2) {
            var warn = _ref2.warn,
              error = _ref2.error;

            this._shouldWarn = warn;
            this._shouldThrow = error;
          }
        }, {
          key: 'shouldWarn',
          get: function get() {
            return this._shouldWarn;
          }
        }, {
          key: 'shouldThrow',
          get: function get() {
            return this._shouldThrow;
          }
        }, {
          key: 'message',
          get: function get() {
            return this._message;
          },
          set: function set(message) {
            var messageType = typeof message === 'undefined' ? 'undefined' : _typeof(message);

            if (messageType === 'string') {
              this._message = function () {
                return message;
              };
            } else if (messageType === 'function' && typeof message() === 'string') {
              this._message = message;
            } else {
              ErrorFactory._error(messageType);
            }
          }
        }], [{
          key: '_error',
          value: function _error() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            (0, _index.invariant)(false, 'Implements: ErrorFactory: message arg must be string or function that returns a string, instead got: \'' + type + '\'');
          }
        }]);

        return ErrorFactory;
      }();

      exports.default = ErrorFactory;

      /***/
    }),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _warning = __webpack_require__(7);

      Object.defineProperty(exports, 'warning', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_warning).default;
        }
      });

      var _invariant = __webpack_require__(9);

      Object.defineProperty(exports, 'invariant', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_invariant).default;
        }
      });

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /***/
    }),
/* 7 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _warning = __webpack_require__(8);

      var _warning2 = _interopRequireDefault(_warning);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = function () {
        if (undefined === 'production') return;

        return _warning2.default.apply(undefined, arguments);
      };

      /***/
    }),
/* 8 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      /**
       * Copyright 2014-2015, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       */



      /**
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var warning = function () { };

      if (undefined !== 'production') {
        warning = function (condition, format, args) {
          var len = arguments.length;
          args = new Array(len > 2 ? len - 2 : 0);
          for (var key = 2; key < len; key++) {
            args[key - 2] = arguments[key];
          }
          if (format === undefined) {
            throw new Error(
              '`warning(condition, format, ...args)` requires a warning ' +
              'message argument'
            );
          }

          if (format.length < 10 || (/^[s\W]*$/).test(format)) {
            throw new Error(
              'The warning format should be able to uniquely identify this ' +
              'warning. Please, use a more descriptive format than: ' + format
            );
          }

          if (!condition) {
            var argIndex = 0;
            var message = 'Warning: ' +
              format.replace(/%s/g, function () {
                return args[argIndex++];
              });
            if (typeof console !== 'undefined') {
              // console.warn(message);
            }
            try {
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) { }
          }
        };
      }

      module.exports = warning;


      /***/
    }),
/* 9 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _invariant = __webpack_require__(10);

      var _invariant2 = _interopRequireDefault(_invariant);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = function () {
        if (undefined === 'production') return;

        return _invariant2.default.apply(undefined, arguments);
      };

      /***/
    }),
/* 10 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      /**
       * Copyright 2013-2015, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       */



      /**
       * Use invariant() to assert state which your program assumes to be true.
       *
       * Provide sprintf-style format (only %s is supported) and arguments
       * to provide information about what broke and what you were
       * expecting.
       *
       * The invariant message will be stripped in production, but the invariant
       * will remain to ensure logic does not differ in production.
       */

      var invariant = function (condition, format, a, b, c, d, e, f) {
        if (undefined !== 'production') {
          if (format === undefined) {
            throw new Error('invariant requires an error message argument');
          }
        }

        if (!condition) {
          var error;
          if (format === undefined) {
            error = new Error(
              'Minified exception occurred; use the non-minified dev environment ' +
              'for the full error message and additional helpful warnings.'
            );
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
              format.replace(/%s/g, function () { return args[argIndex++]; })
            );
            error.name = 'Invariant Violation';
          }

          error.framesToPop = 1; // we don't care about invariant's own frame
          throw error;
        }
      };

      module.exports = invariant;


      /***/
    }),
/* 11 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Interface = __webpack_require__(12);

      Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Interface).default;
        }
      });

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /***/
    }),
/* 12 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.extend = undefined;

      var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

      exports.default = Interface;

      var _v = __webpack_require__(13);

      var _v2 = _interopRequireDefault(_v);

      var _constants = __webpack_require__(0);

      var _errors = __webpack_require__(1);

      var errors = _interopRequireWildcard(_errors);

      function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var extend = exports.extend = function extend(_ref) {
        var _ref$Interface = _ref.Interface,
          Interface = _ref$Interface === undefined ? {} : _ref$Interface,
          _ref$ExtendedInterfac = _ref.ExtendedInterface,
          ExtendedInterface = _ref$ExtendedInterfac === undefined ? {} : _ref$ExtendedInterfac,
          interfaceName = _ref.interfaceName;

        errors.InvalidExtendedInterface.options = { error: true };

        if (!ExtendedInterface[_constants.IMPLEMENT_TYPES.INTERFACE]) {
          var errorDetails = { interfaceName: interfaceName };
          errors.InvalidExtendedInterface.throw(errorDetails);
        }

        var NextInterface = _extends({}, ExtendedInterface, Interface);

        delete NextInterface[_constants.IMPLEMENT_TYPES.NAME];
        delete NextInterface[_constants.IMPLEMENT_TYPES.INTERFACE];
        delete NextInterface[_constants.IMPLEMENT_TYPES.OPTIONS];

        return NextInterface;
      };

      function Interface() {
        var interfaceName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _v2.default)();

        return function () {
          var Interface = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$strict = _ref2.strict,
            strict = _ref2$strict === undefined ? false : _ref2$strict,
            _ref2$error = _ref2.error,
            error = _ref2$error === undefined ? false : _ref2$error,
            _ref2$warn = _ref2.warn,
            warn = _ref2$warn === undefined ? true : _ref2$warn,
            _ref2$trim = _ref2.trim,
            trim = _ref2$trim === undefined ? false : _ref2$trim,
            ExtendedInterface = _ref2.extend,
            _ref2$rename = _ref2.rename,
            rename = _ref2$rename === undefined ? {} : _ref2$rename;

          errors.EmptyInterface.options = { error: true };
          errors.InvalidInterface.options = { error: true };

          if (!Object.keys(Interface).length) {
            errors.EmptyInterface.throw();
          }

          if (ExtendedInterface) {
            Interface = extend({ Interface: Interface, ExtendedInterface: ExtendedInterface, interfaceName: interfaceName });
          }

          for (var property in Interface) {
            if (Interface.hasOwnProperty(property)) {
              var _Interface = Interface,
                _Interface$property = _Interface[property];
              _Interface$property = _Interface$property === undefined ? {} : _Interface$property;
              var _Interface$property$I = _Interface$property[_constants.IMPLEMENT_TYPES.TYPE],
                isType = _Interface$property$I === undefined ? false : _Interface$property$I;

              // Only allow valid type objects as Interface properties

              if (!isType) {
                errors.InvalidInterface.throw();
              }
            }
          }

          Interface[_constants.IMPLEMENT_TYPES.INTERFACE] = true;
          Interface[_constants.IMPLEMENT_TYPES.OPTIONS] = { strict: strict, error: error, warn: warn, trim: trim, rename: rename };
          Interface[_constants.IMPLEMENT_TYPES.NAME] = interfaceName;

          return Interface;
        };
      }

      /***/
    }),
/* 13 */
/***/ (function (module, exports, __webpack_require__) {

      var rng = __webpack_require__(14);
      var bytesToUuid = __webpack_require__(16);

      // **`v1()` - Generate time-based UUID**
      //
      // Inspired by https://github.com/LiosK/UUID.js
      // and http://docs.python.org/library/uuid.html

      // random #'s we need to init node and clockseq
      var _seedBytes = rng();

      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      var _nodeId = [
        _seedBytes[0] | 0x01,
        _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
      ];

      // Per 4.2.2, randomize (14 bit) clockseq
      var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

      // Previous uuid creation time
      var _lastMSecs = 0, _lastNSecs = 0;

      // See https://github.com/broofa/node-uuid for API details
      function v1(options, buf, offset) {
        var i = buf && offset || 0;
        var b = buf || [];

        options = options || {};

        var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

        // UUID timestamps are 100 nano-second units since the Gregorian epoch,
        // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
        // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
        // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
        var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

        // Per 4.2.1.2, use count of uuid's generated during the current clock
        // cycle to simulate higher resolution clock
        var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

        // Time since last uuid creation (in msecs)
        var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs) / 10000;

        // Per 4.2.1.2, Bump clockseq on clock regression
        if (dt < 0 && options.clockseq === undefined) {
          clockseq = clockseq + 1 & 0x3fff;
        }

        // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
        // time interval
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
          nsecs = 0;
        }

        // Per 4.2.1.2 Throw error if too many uuids are requested
        if (nsecs >= 10000) {
          throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
        }

        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;

        // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
        msecs += 12219292800000;

        // `time_low`
        var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
        b[i++] = tl >>> 24 & 0xff;
        b[i++] = tl >>> 16 & 0xff;
        b[i++] = tl >>> 8 & 0xff;
        b[i++] = tl & 0xff;

        // `time_mid`
        var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
        b[i++] = tmh >>> 8 & 0xff;
        b[i++] = tmh & 0xff;

        // `time_high_and_version`
        b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
        b[i++] = tmh >>> 16 & 0xff;

        // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
        b[i++] = clockseq >>> 8 | 0x80;

        // `clock_seq_low`
        b[i++] = clockseq & 0xff;

        // `node`
        var node = options.node || _nodeId;
        for (var n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }

        return buf ? buf : bytesToUuid(b);
      }

      module.exports = v1;


      /***/
    }),
/* 14 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (global) {// Unique ID creation requires a high quality random # generator.  In the
        // browser this is a little complicated due to unknown quality of Math.random()
        // and inconsistent support for the `crypto` API.  We do the best we can via
        // feature-detection
        var rng;

        var crypto = global.crypto || global.msCrypto; // for IE 11
        if (crypto && crypto.getRandomValues) {
          // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
          var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
          rng = function whatwgRNG() {
            crypto.getRandomValues(rnds8);
            return rnds8;
          };
        }

        if (!rng) {
          // Math.random()-based (RNG)
          //
          // If all else fails, use Math.random().  It's fast, but is of unspecified
          // quality.
          var rnds = new Array(16);
          rng = function () {
            for (var i = 0, r; i < 16; i++) {
              if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
              rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
            }

            return rnds;
          };
        }

        module.exports = rng;

        /* WEBPACK VAR INJECTION */
      }.call(exports, __webpack_require__(15)))

      /***/
    }),
/* 15 */
/***/ (function (module, exports) {

      var g;

      // This works in non-strict mode
      g = (function () {
        return this;
      })();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object")
          g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;


      /***/
    }),
/* 16 */
/***/ (function (module, exports) {

      /**
       * Convert array of 16 byte values to UUID string format of the form:
       * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
       */
      var byteToHex = [];
      for (var i = 0; i < 256; ++i) {
        byteToHex[i] = (i + 0x100).toString(16).substr(1);
      }

      function bytesToUuid(buf, offset) {
        var i = offset || 0;
        var bth = byteToHex;
        return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
      }

      module.exports = bytesToUuid;


      /***/
    }),
/* 17 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _type = __webpack_require__(18);

      Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_type).default;
        }
      });
      Object.defineProperty(exports, 'isValidType', {
        enumerable: true,
        get: function get() {
          return _type.isValidType;
        }
      });
      Object.defineProperty(exports, 'typeObject', {
        enumerable: true,
        get: function get() {
          return _type.typeObject;
        }
      });

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /***/
    }),
/* 18 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.typeObject = exports.isValidType = undefined;
      exports.default = type;

      var _constants = __webpack_require__(0);

      var _errors = __webpack_require__(1);

      var errors = _interopRequireWildcard(_errors);

      function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

      function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

      var isValidType = exports.isValidType = function isValidType(_ref) {
        var type = _ref.type;

        var validType = _constants.VALID_TYPES_LIST.find(function (t) {
          return t === type;
        });

        if (validType) {
          return validType;
        }

        return false;
      };

      var typeObject = exports.typeObject = function typeObject(_ref2) {
        var type = _ref2.type,
          _ref2$array = _ref2.array,
          array = _ref2$array === undefined ? false : _ref2$array,
          _ref2$shape = _ref2.shape,
          Interface = _ref2$shape === undefined ? false : _ref2$shape;
        return _defineProperty({
          type: type,
          array: array,
          Interface: Interface
        }, _constants.IMPLEMENT_TYPES.TYPE, true);
      };

      function type(type, shape) {
        var validType = isValidType({ type: type });

        errors.InvalidType.options = { error: true };
        errors.InvalidShapeArray.options = { error: true };
        errors.InvalidShape.options = { error: true };

        if (!validType) {
          return errors.InvalidType.throw({ type: type });
        }

        if (validType && !shape) {
          return typeObject({ type: type });
        }

        if (validType === 'array') {
          var shapeIsArray = Array.isArray(shape);
          var invalidArrayElement = shape.find && !shape.find(function (t) {
            return t[_constants.IMPLEMENT_TYPES.TYPE];
          });

          if (!shapeIsArray || invalidArrayElement) {
            errors.InvalidShapeArray.throw();
          }

          return typeObject({ type: type, array: shape });
        }

        if (validType === 'object') {
          var isInterface = shape[_constants.IMPLEMENT_TYPES.INTERFACE];

          if (!isInterface) {
            errors.InvalidShape.throw();
          }

          return typeObject({ type: type, shape: shape });
        }
      }

      /***/
    })
/******/]);
});
