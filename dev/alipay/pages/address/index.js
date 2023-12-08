"use strict";
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/address/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/address/index.tsx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/address/index.tsx ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-alipay/dist/components-react.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/index */ "./src/store/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/reducers */ "./src/store/reducers/index.ts");
/* harmony import */ var _lib_GPS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/GPS */ "./src/lib/GPS.js");
/* harmony import */ var _utils_locationUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/locationUtil */ "./src/utils/locationUtil.ts");
/* harmony import */ var _CityList_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CityList/index */ "./src/pages/address/CityList/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);




















var ps2 = "请输入城市中文名或拼音";
var Address = /*#__PURE__*/function (_Component) {
  (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Address, _Component);
  var _super = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Address);
  function Address(props) {
    var _this;
    (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Address);
    _this = _super.call(this, props);
    (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "regionChangeTime", 0);
    //点击左上角城市名字事件
    (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "handlerCityView", /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee() {
      var list;
      return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!_this.state.cityListShow) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            list = _this.state.cityList;
            if (!(list.length <= 0)) {
              _context.next = 6;
              break;
            }
            _context.next = 6;
            return _this.getAllCityList();
          case 6:
            _this.setState({
              cityListShow: true,
              placeStr: ps2,
              content: '' //置空textarea
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    _this.state = {
      content: '',
      placeStr: "您在哪上车",
      selectCity: {
        name: '',
        //选中的城市name
        realName: '',
        //n如果开通城市是三级，则name是三级的父级城市名字，realName是三级的名字
        id: '',
        //选中的城市id
        latitude: 0,
        longitude: 0
      },
      cityListShow: false,
      remmendList: [],
      cityList: [],
      calloutAddress: ''
    };
    return _this;
  }
  (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__["default"])(Address, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee2() {
        var startAddress;
        return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              startAddress = _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].getState().globalData.startAddress;
              if (!(startAddress.latitude && startAddress.longitude)) {
                _context2.next = 5;
                break;
              }
              _context2.next = 4;
              return this.getAllCityList();
            case 4:
              this.mapChanged(startAddress);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "mapChanged",
    value: function () {
      var _mapChanged = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee3(e) {
        return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              console.log('aaaaaaaaaaaa');
              console.log(e);
              _context3.next = 4;
              return this.locToCityInfo(e);
            case 4:
              this.getRecommendStart(e);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function mapChanged(_x) {
        return _mapChanged.apply(this, arguments);
      }
      return mapChanged;
    }()
  }, {
    key: "locToCityInfo",
    value: function () {
      var _locToCityInfo = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee4(coord) {
        var info, loc, selectCity;
        return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _utils_locationUtil__WEBPACK_IMPORTED_MODULE_5__["default"].getBDAddressMsg(coord.latitude, coord.longitude);
            case 2:
              info = _context4.sent;
              if (info) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");
            case 5:
              loc = info.loc;
              selectCity = {
                name: loc.cityName,
                //这个是展示的名字，二级城市的名字
                latitude: coord.latitude,
                longitude: coord.longitude
              };
              this.setState({
                selectCity: selectCity,
                calloutAddress: loc.name
              });
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function locToCityInfo(_x2) {
        return _locToCityInfo.apply(this, arguments);
      }
      return locToCityInfo;
    }() //推荐出发地
  }, {
    key: "getRecommendStart",
    value: function () {
      var _getRecommendStart = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee5(e) {
        var res;
        return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              res = _utils_locationUtil__WEBPACK_IMPORTED_MODULE_5__["default"].mGetNearbypois(e);
              this.setState({
                remmendList: res
              });
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getRecommendStart(_x3) {
        return _getRecommendStart.apply(this, arguments);
      }
      return getRecommendStart;
    }()
  }, {
    key: "selectedAddress",
    value: function () {
      var _selectedAddress = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee6(address) {
        var info, startAddress;
        return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _utils_locationUtil__WEBPACK_IMPORTED_MODULE_5__["default"].getBDAddressMsg(address.lat || address.latitude, address.lng || address.longitude, true);
            case 2:
              info = _context6.sent;
              startAddress = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__["default"])((0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, info.loc), {}, {
                cityId: info.cityId
              });
              _context6.next = 6;
              return _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch((0,_store_reducers__WEBPACK_IMPORTED_MODULE_3__.updateGlobalData)({
                startAddress: startAddress
              }));
            case 6:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().eventCenter.trigger('selectStartAddress', info);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateBack();
            case 8:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function selectedAddress(_x4) {
        return _selectedAddress.apply(this, arguments);
      }
      return selectedAddress;
    }() //选中地图下面的推荐地址
  }, {
    key: "remmendItemAction",
    value: function remmendItemAction(e) {
      var remend = e.currentTarget.dataset.remend;
      this.selectedAddress(remend);
    }
    //从城市列表里选择了城市
  }, {
    key: "handlerSelectCity",
    value: function handlerSelectCity(e) {
      var selectCity = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__["default"])((0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_16__["default"])({}, this.state.selectCity), {}, {
        name: e.name,
        id: e.cityId
      });
      this.setState({
        selectCity: selectCity,
        cityListShow: false,
        placeStr: "您在哪上车",
        content: '' //置空textarea
      });
      var coord = _lib_GPS__WEBPACK_IMPORTED_MODULE_4__.GPS.bd_decrypt(e.lat, e.lng);
      this.mapChanged({
        latitude: coord.lat,
        longitude: coord.lon,
        name: e.name
      });
    }
  }, {
    key: "getAllCityList",
    value: function () {
      var _getAllCityList = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])( /*#__PURE__*/(0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee7() {
        return (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(this.state.cityList.length > 0)) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              this.setState({
                cityList: [{
                  cities: [{
                    name: "北京市",
                    lat: 39.910501,
                    lng: 116.413772
                  }, {
                    name: "上海市",
                    lat: 31.237661,
                    lng: 121.479176
                  }, {
                    name: "杭州市",
                    lat: 30.293395,
                    lng: 120.160105
                  }, {
                    name: "成都市",
                    lat: 30.665531,
                    lng: 104.072215
                  }],
                  name: '热门城市'
                }]
              });
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getAllCityList() {
        return _getAllCityList.apply(this, arguments);
      }
      return getAllCityList;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        content = _this$state.content,
        placeStr = _this$state.placeStr,
        selectCity = _this$state.selectCity,
        cityListShow = _this$state.cityListShow,
        remmendList = _this$state.remmendList,
        cityList = _this$state.cityList,
        calloutAddress = _this$state.calloutAddress;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
          className: "address_inputBg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: "address_city_select",
            onTap: this.handlerCityView,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
              className: "address_city_name",
              children: selectCity.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
              className: "address_city_arrow",
              src: __webpack_require__(/*! ../../res/nav_icon_unfold.png */ "./src/res/nav_icon_unfold.png")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
            className: "address_line",
            children: "|"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Textarea, {
            className:  true ? 'address_input address_special_input_alipay' : 0,
            value: content,
            confirmType: "done",
            placeholderClass: "placeholder_class",
            placeholder: placeStr,
            maxlength: 20,
            onInput: this.textareaInputChaned
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
          className: "address_mapBg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Map, {
            id: "map",
            scale: 14,
            style: {
              width: '100%',
              height: '100%'
            },
            latitude: selectCity.latitude,
            longitude: selectCity.longitude
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
            className: "address_iconCenter",
            src: __webpack_require__(/*! ../../res/center-location.png */ "./src/res/center-location.png")
          }), calloutAddress && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: "address_callout",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
              className: "address_callout_center",
              children: calloutAddress
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
              className: "address_arrow_down"
            })]
          })]
        }), !cityListShow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
          className: "address_remmendBg",
          children: remmendList.map(function (el, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
              className: "address_remItem",
              "data-remend": el,
              onTap: _this2.remmendItemAction.bind(_this2),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
                className: "address_remName",
                children: el.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
                className: "address_remDetail",
                children: el.address || el.addressDetail
              })]
            }, el.lat + index);
          })
        }),
        // 支付宝小程序来回切换map的时候会有问题，所以就一直显示，不能隐藏，只能把citylist定位absolute
        cityListShow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
          className: "cityList_bg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CityList_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
            selectCity: selectCity,
            cityList: cityList,
            selectedCityAction: this.handlerSelectCity.bind(this)
          })
        })]
      });
    }
  }]);
  return Address;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
/* harmony default export */ __webpack_exports__["default"] = (Address);

/***/ }),

/***/ "./src/pages/address/CityList/index.tsx":
/*!**********************************************!*\
  !*** ./src/pages/address/CityList/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CityListView; }
/* harmony export */ });
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-alipay/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);









var CityListView = /*#__PURE__*/function (_Component) {
  (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CityListView, _Component);
  var _super = (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(CityListView);
  function CityListView(props) {
    var _this;
    (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CityListView);
    _this = _super.call(this, props);
    _this.state = {
      height: 600,
      scrollTopId: '' //城市列表，控制滑动到哪个字母
    };
    return _this;
  }
  (0,D_aWork_daijiayun_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(CityListView, [{
    key: "handlerSelectCity",
    value: function handlerSelectCity(e) {
      var city = e.currentTarget.dataset.city;
      this.props.selectedCityAction(city);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        selectCity = _this$props.selectCity,
        cityList = _this$props.cityList;
      var _this$state = this.state,
        height = _this$state.height,
        scrollTopId = _this$state.scrollTopId;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "city_list_item",
          children: ["\u5F53\u524D\u5B9A\u4F4D\u57CE\u5E02\uFF1A", selectCity.name]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.ScrollView, {
          className: "city_list",
          scrollY: true,
          scrollIntoView: scrollTopId,
          style: {
            height: "".concat(height, "px")
          },
          children: cityList.map(function (el, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
              className: "city",
              id: index == 0 ? 'one' : el.name,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
                className: "city_list_item city_title",
                children: el.name
              }), el.cities.map(function (city) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
                  catchMove: true,
                  className: "city_list_item",
                  "data-city": city,
                  onTap: _this2.handlerSelectCity.bind(_this2),
                  children: city.name
                }, city.cityId);
              })]
            }, el.name);
          })
        })]
      });
    }
  }]);
  return CityListView;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/address/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/address/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/address/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/address/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/res/nav_icon_unfold.png":
/*!*************************************!*\
  !*** ./src/res/nav_icon_unfold.png ***!
  \*************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAACXl5mWl5luI2lqAAAAAnRSTlMAgJsrThgAAAAxSURBVAjXY6AUZK1atRJISa1atQRIsa1aNQFIMa5a5QCWBEqBJIFSIEmgFEjSgQxrAIyDCqGFkBn+AAAAAElFTkSuQmCC";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/address/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map