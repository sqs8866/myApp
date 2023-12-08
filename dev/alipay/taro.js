"use strict";
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["taro"],{

/***/ "./node_modules/@tarojs/plugin-platform-alipay/dist/components-react.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/plugin-platform-alipay/dist/components-react.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": function() { return /* binding */ Image; },
/* harmony export */   "Map": function() { return /* binding */ Map; },
/* harmony export */   "ScrollView": function() { return /* binding */ ScrollView; },
/* harmony export */   "Text": function() { return /* binding */ Text; },
/* harmony export */   "Textarea": function() { return /* binding */ Textarea; },
/* harmony export */   "View": function() { return /* binding */ View; }
/* harmony export */ });
/* unused harmony exports Ad, ArCamera, Audio, Block, Button, Camera, Canvas, Checkbox, CheckboxGroup, ContactButton, CoverImage, CoverView, CustomWrapper, Form, Icon, Input, Label, LifeFollow, Lifestyle, LivePlayer, Lottie, MovableArea, MovableView, NativeSlot, Navigator, PageContainer, Picker, PickerView, PickerViewColumn, Progress, Radio, RadioGroup, RichText, ShareElement, Slider, Slot, Swiper, SwiperItem, Switch, Video, WebView */
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MovableArea = 'movable-area';
var MovableView = 'movable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var Video = 'video';
var Canvas = 'canvas';
var Ad = 'ad';
var WebView = 'web-view';
var Block = 'block';
var Map = 'map';
var Slot = 'slot';
var NativeSlot = 'native-slot';
var CustomWrapper = 'custom-wrapper';

// For React.createElement's type
var Lottie = 'lottie';
var Lifestyle = 'lifestyle';
var LifeFollow = 'life-follow';
var ContactButton = 'contact-button';
var ArCamera = 'ar-camera';
var PageContainer = 'page-container';
var ShareElement = 'share-element';


/***/ }),

/***/ "./node_modules/@tarojs/plugin-platform-alipay/dist/runtime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tarojs/plugin-platform-alipay/dist/runtime.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/shared */ "webpack/container/remote/@tarojs/shared");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__);

var needPromiseApis = new Set(['addCardAuth', 'getOpenUserInfo', 'chooseAlipayContact', 'chooseCity', 'chooseContact', 'choosePhoneContact', 'datePicker', 'getAddress', 'getAuthCode', 'getPhoneNumber', 'getRunData', 'getRunScene', 'getServerTime', 'getTitleColor', 'rsa', 'paySignCenter', 'tradePay', 'isCollected', 'multiLevelSelect', 'onLocatedComplete', 'optionsSelect', 'prompt', 'regionPicker', 'setLocatedCity', 'showAuthGuide', 'textRiskIdentification', 'vibrate', 'watchShake', 'connectBLEDevice', 'disconnectBLEDevice', 'makeBluetoothPair', 'writeBLECharacteristicValue', 'readBLECharacteristicValue', 'notifyBLECharacteristicValueChange', 'getBLEDeviceServices', 'getBLEDeviceCharacteristics', 'openBluetoothAdapter', 'closeBluetoothAdapter', 'getBluetoothAdapterState', 'startBluetoothDevicesDiscovery', 'stopBluetoothDevicesDiscovery', 'getBluetoothDevices', 'getConnectedBluetoothDevices']);
var apiDiff = {
  login: {
    alias: 'getAuthCode',
    options: {
      set: [{
        key: 'scopes',
        value: 'auth_base'
      }]
    }
  },
  showActionSheet: {
    options: {
      change: [{
        old: 'itemList',
        new: 'items'
      }]
    }
  },
  showToast: {
    options: {
      change: [{
        old: 'title',
        new: 'content'
      }, {
        old: 'icon',
        new: 'type'
      }],
      set: [{
        key: 'type',
        value: function value(options) {
          if (options.type === 'error') {
            return 'fail';
          }
          return options.type;
        }
      }]
    }
  },
  showLoading: {
    options: {
      change: [{
        old: 'title',
        new: 'content'
      }]
    }
  },
  setNavigationBarTitle: {
    alias: 'setNavigationBar'
  },
  setNavigationBarColor: {
    alias: 'setNavigationBar'
  },
  saveImageToPhotosAlbum: {
    alias: 'saveImage',
    options: {
      change: [{
        old: 'filePath',
        new: 'url'
      }]
    }
  },
  previewImage: {
    options: {
      set: [{
        key: 'current',
        value: function value(options) {
          return options.urls.indexOf(options.current || options.urls[0]);
        }
      }]
    }
  },
  getFileInfo: {
    options: {
      change: [{
        old: 'filePath',
        new: 'apFilePath'
      }]
    }
  },
  getSavedFileInfo: {
    options: {
      change: [{
        old: 'filePath',
        new: 'apFilePath'
      }]
    }
  },
  removeSavedFile: {
    options: {
      change: [{
        old: 'filePath',
        new: 'apFilePath'
      }]
    }
  },
  saveFile: {
    options: {
      change: [{
        old: 'tempFilePath',
        new: 'apFilePath'
      }]
    }
  },
  openLocation: {
    options: {
      set: [{
        key: 'latitude',
        value: function value(options) {
          return String(options.latitude);
        }
      }, {
        key: 'longitude',
        value: function value(options) {
          return String(options.longitude);
        }
      }]
    }
  },
  uploadFile: {
    options: {
      change: [{
        old: 'name',
        new: 'fileName'
      }]
    }
  },
  getClipboardData: {
    alias: 'getClipboard'
  },
  setClipboardData: {
    alias: 'setClipboard',
    options: {
      change: [{
        old: 'data',
        new: 'text'
      }]
    }
  },
  makePhoneCall: {
    options: {
      change: [{
        old: 'phoneNumber',
        new: 'number'
      }]
    }
  },
  scanCode: {
    alias: 'scan',
    options: {
      change: [{
        old: 'onlyFromCamera',
        new: 'hideAlbum'
      }],
      set: [{
        key: 'type',
        value: function value(options) {
          return options.scanType && options.scanType[0].slice(0, -4) || 'qr';
        }
      }]
    }
  },
  setScreenBrightness: {
    options: {
      change: [{
        old: 'value',
        new: 'brightness'
      }]
    }
  },
  onBLEConnectionStateChange: {
    alias: 'onBLEConnectionStateChanged'
  },
  offBLEConnectionStateChange: {
    alias: 'offBLEConnectionStateChanged'
  },
  createBLEConnection: {
    alias: 'connectBLEDevice'
  },
  closeBLEConnection: {
    alias: 'disconnectBLEDevice'
  }
};
/**
 * 抹平API返回值的差异
 * key 为 alipay小程序中的api名称
 */
var asyncResultApiDiff = {
  getScreenBrightness: {
    res: {
      set: [{
        key: 'value',
        value: function value(res) {
          return res.brightness;
        }
      }],
      remove: ['brightness']
    }
  },
  scan: {
    res: {
      set: [{
        key: 'result',
        value: function value(res) {
          return res.code;
        }
      }]
    }
  },
  getClipboard: {
    res: {
      set: [{
        key: 'data',
        value: function value(res) {
          return res.text;
        }
      }]
    }
  },
  chooseImage: {
    res: {
      set: [{
        key: 'tempFilePaths',
        value: function value(res) {
          return res.apFilePaths;
        }
      }]
    }
  },
  downloadFile: {
    res: {
      set: [{
        key: 'tempFilePath',
        value: function value(res) {
          return res.apFilePath;
        }
      }]
    }
  },
  getAuthCode: {
    res: {
      set: [{
        key: 'code',
        value: function value(res) {
          return res.authCode;
        }
      }]
    }
  },
  getExtConfig: {
    res: {
      set: [{
        key: 'extConfig',
        value: function value(res) {
          return res.data;
        }
      }]
    }
  },
  saveFile: {
    res: {
      set: [{
        key: 'savedFilePath',
        value: function value(res) {
          return res.apFilePath;
        }
      }]
    }
  },
  getBLEDeviceServices: {
    res: {
      set: [{
        key: 'services',
        value: function value(res) {
          return res.services.map(function (item) {
            return {
              uuid: item.serviceId,
              isPrimary: item.isPrimary
            };
          });
        }
      }]
    }
  }
};
function request(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      url: options
    };
  }
  var defaultHeaders = {
    'content-type': 'application/json'
  };
  options.headers = defaultHeaders;
  if (options.header) {
    for (var k in options.header) {
      var lowerK = k.toLocaleLowerCase();
      options.headers[lowerK] = options.header[k];
    }
    delete options.header;
  }
  var originSuccess = options.success;
  var originFail = options.fail;
  var originComplete = options.complete;
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options.success = function (res) {
      res.statusCode = res.status;
      delete res.status;
      res.header = res.headers;
      delete res.headers;
      originSuccess && originSuccess(res);
      resolve(res);
    };
    options.fail = function (res) {
      originFail && originFail(res);
      reject(res);
    };
    options.complete = function (res) {
      originComplete && originComplete(res);
    };
    // 改为实时获取原生API，防止用户修改原生API后无法同步
    var nativeRequest = my.canIUse('request') ? my.request : my.httpRequest;
    requestTask = nativeRequest(options);
  });
  p.abort = function (cb) {
    cb && cb();
    if (requestTask) {
      requestTask.abort();
    }
    return p;
  };
  return p;
}
function handleSyncApis(key, global, args) {
  if (key === 'getStorageSync') {
    var arg1 = args[0];
    if (arg1 != null) {
      var res = global[key]({
        key: arg1
      });
      // 支付宝小程序遗留bug：值可能在data或APDataStorage字段下
      var data = null;
      if (res.hasOwnProperty('data')) {
        data = res.data;
      } else if (res.hasOwnProperty('APDataStorage')) {
        data = res.APDataStorage;
      }
      return data === null ? '' : data;
    }
    return console.error('getStorageSync 传入参数错误');
  }
  if (key === 'setStorageSync') {
    var _arg = args[0];
    var arg2 = args[1];
    if (_arg != null) {
      return global[key]({
        key: _arg,
        data: arg2
      });
    }
    return console.error('setStorageSync 传入参数错误');
  }
  if (key === 'removeStorageSync') {
    var _arg2 = args[0];
    if (_arg2 != null) {
      return global[key]({
        key: _arg2
      });
    }
    return console.error('removeStorageSync 传入参数错误');
  }
  if (key === 'createSelectorQuery') {
    var query = global[key]();
    query.in = function () {
      return query;
    };
    return query;
  }
  return global[key].apply(global, args);
}
function transformMeta(api, options) {
  var apiAlias = api;
  if (api === 'showModal') {
    options.cancelButtonText = options.cancelText || '取消';
    options.confirmButtonText = options.confirmText || '确定';
    apiAlias = 'confirm';
    if (options.showCancel === false) {
      options.buttonText = options.confirmText || '确定';
      apiAlias = 'alert';
    }
  } else {
    Object.keys(apiDiff).forEach(function (item) {
      var apiItem = apiDiff[item];
      if (api === item) {
        if (apiItem.alias) {
          apiAlias = apiItem.alias;
        }
        if (apiItem.options) {
          var change = apiItem.options.change;
          var set = apiItem.options.set;
          if (change) {
            change.forEach(function (changeItem) {
              options[changeItem.new] = options[changeItem.old];
            });
          }
          if (set) {
            set.forEach(function (setItem) {
              options[setItem.key] = typeof setItem.value === 'function' ? setItem.value(options) : setItem.value;
            });
          }
        }
      }
    });
  }
  return {
    key: apiAlias,
    options: options
  };
}
function modifyApis(apis) {
  Object.keys(apiDiff).map(function (key) {
    apis.add(key);
    var platformKey = apiDiff[key].alias;
    platformKey && apis.delete(platformKey);
  });
  apis.add('showModal');
  apis.delete('confirm');
  apis.delete('alert');
}
function modifyAsyncResult(key, res) {
  if (key === 'connectSocket') {
    res.onClose = function (cb) {
      my.onSocketClose(cb);
    };
    res.onError = function (cb) {
      my.onSocketError(cb);
    };
    res.onMessage = function (cb) {
      my.onSocketMessage(cb);
    };
    res.onOpen = function (cb) {
      my.onSocketOpen(cb);
    };
    res.send = function (opt) {
      my.sendSocketMessage(opt);
    };
    res.close = function () {
      my.closeSocket();
    };
  }
  Object.keys(asyncResultApiDiff).forEach(function (apiKey) {
    var apiItem = asyncResultApiDiff[apiKey];
    if (key !== apiKey) {
      return;
    }
    if (!apiItem.res) {
      return;
    }
    var set = apiItem.res.set;
    var remove = apiItem.res.remove;
    if (set) {
      set.forEach(function (setItem) {
        res[setItem.key] = typeof setItem.value === 'function' ? setItem.value(res) : setItem.value;
      });
    }
    if (remove) {
      remove.forEach(function (removeItem) {
        delete res[removeItem];
      });
    }
  });
}
function initNativeApi(taro) {
  (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.processApis)(taro, my, {
    needPromiseApis: needPromiseApis,
    handleSyncApis: handleSyncApis,
    transformMeta: transformMeta,
    modifyApis: modifyApis,
    modifyAsyncResult: modifyAsyncResult,
    request: request
  });
}
var components = {
  // ======== 调整属性 ========
  View: {
    'disable-scroll': 'false',
    hidden: 'false',
    bindAppear: '',
    bindDisappear: '',
    bindFirstAppear: ''
  },
  Text: {
    'number-of-lines': ''
  },
  Map: {
    skew: '0',
    rotate: '0',
    polygons: '[]',
    'include-padding': '',
    'ground-overlays': '[]',
    'tile-overlay': '',
    'custom-map-style': '',
    panels: '[]',
    setting: '{}',
    optimize: 'false',
    'show-compass': 'false',
    'show-scale': 'false',
    'enable-overlooking': 'false',
    'enable-zoom': 'true',
    'enable-scroll': 'true',
    'enable-rotate': 'false',
    'enable-traffic': 'false',
    'enable-poi': 'true',
    'enable-building': 'true',
    'enable-satellite': 'false',
    bindRegionChange: '',
    bindPanelTap: '',
    bindInitComplete: ''
  },
  Button: {
    scope: '',
    'public-id': '',
    bindGetAuthorize: '',
    bindError: '',
    bindGetUserInfo: '',
    bindGetPhoneNumber: '',
    bindFollowLifestyle: ''
  },
  Checkbox: {
    bindChange: ''
  },
  Input: {
    'always-system': 'false',
    'random-number': 'false',
    controlled: 'false',
    enableNative: 'true',
    name: ''
  },
  Slider: {
    'track-size': '4',
    'handle-size': '22',
    'handle-color': (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('#ffffff')
  },
  Switch: {
    controlled: 'false'
  },
  Textarea: {
    'show-count': 'true',
    controlled: 'false',
    enableNative: 'false'
  },
  MovableView: {
    bindChangeEnd: ''
  },
  ScrollView: {
    'scroll-animation-duration': '',
    'trap-scroll': 'false'
  },
  Swiper: {
    'active-class': '',
    'changing-class': '',
    acceleration: 'false',
    'disable-programmatic-animation': 'false',
    'disable-touch': 'false',
    bindAnimationEnd: ''
  },
  Image: {
    'default-source': ''
  },
  Camera: {
    mode: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('normal'),
    'output-dimension': (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('720P'),
    'frame-size': (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('medium'),
    bindScanCode: '',
    bindReady: ''
  },
  Canvas: {
    type: '',
    width: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('300px'),
    height: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('225px'),
    bindReady: ''
  },
  Video: {
    'poster-size': (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('contain'),
    'mobilenet-hint-type': '1',
    enableNative: 'true',
    bindLoading: '',
    bindUserAction: '',
    bindStop: '',
    bindRenderStart: ''
  },
  // ======== 额外组件 ========
  Lottie: {
    autoplay: 'false',
    path: '',
    speed: '1.0',
    'repeat-count': '0',
    'auto-reverse': 'false',
    'assets-path': '',
    placeholder: '',
    djangoId: '',
    md5: '',
    optimize: 'false',
    bindDataReady: '',
    bindDataFailed: '',
    bindAnimationStart: '',
    bindAnimationEnd: '',
    bindAnimationRepeat: '',
    bindAnimationCancel: '',
    bindDataLoadReady: ''
  },
  Lifestyle: {
    'public-id': '',
    memo: '',
    bindFollow: ''
  },
  LifeFollow: {
    sceneId: '',
    checkFollow: '',
    bindCheckFollow: '',
    bindClose: ''
  },
  ContactButton: {
    'tnt-inst-id': '',
    scene: '',
    size: '25',
    color: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('#00A3FF'),
    icon: '',
    'alipay-card-no': '',
    'ext-info': ''
  },
  ArCamera: {
    devicePosition: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('back'),
    marker: '',
    mode: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('imageTracking'),
    useCapturedImage: 'false',
    bindInit: '',
    bindStop: '',
    bindError: '',
    bindARFrame: ''
  },
  PageContainer: {
    show: 'false',
    duration: '300',
    'z-index': '100',
    overlay: 'true',
    position: (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('bottom'),
    round: 'false',
    'close-on-slide-down': 'false',
    'overlay-style': '',
    'custom-style': '',
    bindBeforeEnter: '',
    bindEnter: '',
    bindEnterCancelled: '',
    bindAfterEnter: '',
    bindBeforeLeave: '',
    bindLeave: '',
    bindLeaveCancelled: '',
    bindAfterLeave: '',
    bindClickOverlay: ''
  },
  ShareElement: {
    name: '',
    transform: 'false',
    duration: '300',
    'easing-function': (0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.singleQuote)('ease-out')
  }
};
var BUBBLE_EVENTS = new Set(['touchStart', 'touchMove', 'touchEnd', 'touchCancel', 'tap', 'longTap']);
var hostConfig = {
  initNativeApi: initNativeApi,
  getMiniLifecycle: function getMiniLifecycle(config) {
    config.component[0] = 'didMount';
    config.component[1] = 'didUnmount';
    return config;
  },
  getEventCenter: function getEventCenter(Events) {
    if (!my.taroEventCenter) {
      my.taroEventCenter = new Events();
    }
    return my.taroEventCenter;
  },
  modifyTaroEvent: function modifyTaroEvent(event, node) {
    if (node.tagName === 'SWIPER' && event.type === 'animationend') {
      event.type = 'animationfinish';
    }
  },
  isBubbleEvents: function isBubbleEvents(eventName) {
    return BUBBLE_EVENTS.has(eventName);
  }
};

// 支付宝真机只有 navigator.swuserAgent
var _navigator = navigator,
  userAgent = _navigator.userAgent;
Object.defineProperty(navigator, 'userAgent', {
  configurable: true,
  enumerable: true,
  get: function get() {
    return userAgent || navigator.swuserAgent || '';
  }
});
(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.mergeReconciler)(hostConfig);
(0,_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__.mergeInternalComponents)(components);

/***/ }),

/***/ "./node_modules/@tarojs/webpack5-runner/dist/template/custom-wrapper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/webpack5-runner/dist/template/custom-wrapper.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
/* eslint-disable no-undef */
var runtime_1 = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
// @ts-ignore
Component((0, runtime_1.createRecursiveComponentConfig)('custom-wrapper'));

/***/ })

}]);
//# sourceMappingURL=taro.js.map