"use strict";
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_locationUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/locationUtil */ "./src/utils/locationUtil.ts");
/* harmony import */ var _MapController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapController */ "./src/pages/index/MapController/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);













var Index = /*#__PURE__*/function (_Component) {
  (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);
  var _super = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Index);
  function Index(props) {
    var _this;
    (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Index);
    _this = _super.call(this, props);
    (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "mapControllerRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef());
    _this.state = {};
    return _this;
  }
  (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Index, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee() {
        return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getNowLocation();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "getNowLocation",
    value: function () {
      var _getNowLocation = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee2() {
        var position;
        return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _utils_locationUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentPosition();
            case 2:
              position = _context2.sent;
              console.log('zzzzzz', position);
              if (this.mapControllerRef.current) {
                this.mapControllerRef.current.startAddressChanged(position);
              }
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getNowLocation() {
        return _getNowLocation.apply(this, arguments);
      }
      return getNowLocation;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_MapController__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: this.mapControllerRef
      });
    }
  }]);
  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/index/MapController/index.tsx":
/*!*************************************************!*\
  !*** ./src/pages/index/MapController/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MapController; }
/* harmony export */ });
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-alipay/dist/components-react.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/index */ "./src/store/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/reducers */ "./src/store/reducers/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);















var MapController = /*#__PURE__*/function (_Component) {
  (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapController, _Component);
  var _super = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(MapController);
  function MapController(props) {
    var _this;
    (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, MapController);
    _this = _super.call(this, props);
    _this.state = {
      mapInfo: {
        latitude: 39.908823,
        longitude: 116.39747
      },
      calloutAddress: '正在获取您的位置...'
    };
    return _this;
  }
  (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(MapController, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //从选择地址页面选择了出发地
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().eventCenter.on('selectStartAddress', this.startAddressChanged.bind(this));
    }

    // eslint-disable-next-line react/sort-comp
  }, {
    key: "startAddressChanged",
    value: function () {
      var _startAddressChanged = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee(pos) {
        var loc, cityId, startAddress;
        return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(pos && pos.loc)) {
                _context.next = 6;
                break;
              }
              loc = pos.loc, cityId = pos.cityId;
              this.setState({
                mapInfo: loc,
                calloutAddress: loc.name
              });
              startAddress = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, loc), {}, {
                cityId: cityId
              });
              _context.next = 6;
              return _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch((0,_store_reducers__WEBPACK_IMPORTED_MODULE_3__.updateGlobalData)({
                startAddress: startAddress
              }));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function startAddressChanged(_x) {
        return _startAddressChanged.apply(this, arguments);
      }
      return startAddressChanged;
    }()
  }, {
    key: "skipStartAddress",
    value: function skipStartAddress() {
      var url = '/pages/address/index?locTip=start';
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
        url: url
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        mapInfo = _this$state.mapInfo,
        calloutAddress = _this$state.calloutAddress;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Map, {
          id: "map",
          style: {
            width: '100%',
            height: '100vh'
          },
          scale: 14,
          latitude: mapInfo.latitude,
          longitude: mapInfo.longitude,
          showLocation: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "index-icon-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
            className: "index-icon-img",
            src: __webpack_require__(/*! ../../../res/center-location.png */ "./src/res/center-location.png")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "index-callout",
          onClick: this.skipStartAddress.bind(this),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "index-callout-center",
            children: calloutAddress
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
            className: "index-arrow-right",
            src: __webpack_require__(/*! ../../../res/map-arrow2.png */ "./src/res/map-arrow2.png")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "index-arrow-down"
          })]
        })]
      });
    }
  }]);
  return MapController;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);


/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/res/map-arrow2.png":
/*!********************************!*\
  !*** ./src/res/map-arrow2.png ***!
  \********************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAK9JREFUWAntlsEJhDAQRWWvFqGdpBybWbAJ+3DtYe9ahOeNb8CBgBhPG5flD3wmZAJ5PCJYVSoZkAEZuDYQY6zJ0/r16S+fAOJBXsRqIj8B1QHyMSJKUKePADsydWonHchUaiO3lqmcnXSGqZ54Dems+BqKQNadZqG3xSH8Qi4PxGFm1o3PincuD0QwB/Myc1Cyb8hMxoz9Mb6J1Uzu+7Qd0iDIaN331GVABmTgXwxss5VoFnaBpT8AAAAASUVORK5CYII=";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map