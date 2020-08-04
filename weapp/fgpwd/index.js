"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    uid: '',
    b64s: '',
    bid: '',
    captcha: ''
  },
  methods: {
    uidGet: function uidGet(e) {
      // 拿到用户的账号
      this.uid = e.$wx.detail.value;
    },
    bidGet: function bidGet(e) {
      // 拿到验证码
      this.captcha = e.$wx.detail.value;
    },
    bkLogin: function bkLogin() {
      wx.redirectTo({
        url: "../login/index"
      });
    },
    fgPwd: function fgPwd() {
      // 登陆
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/newforget?uid=' + this.uid + '&CaptchaId=' + this.bid + '&Captcha=' + this.captcha,
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res);

          if (res.data.code == 201) {
            (0, _toast["default"])('重置密码邮件已发送，请检查mysise邮箱');
          } else {
            (0, _toast["default"])('请检查学号/验证码是否输入正确');
            console.log('LOGIN FAIL1');
          }
        },
        fail: function fail(res) {
          console.log('REQUEST FAIL');
        }
      });
    }
  },
  onLoad: function onLoad(e) {
    var _this = this;

    wx.request({
      url: this.$app.$options.globalData.urlRequest + '/api/other/getcaptcha',
      method: 'GET',
      success: function success(res) {
        if (res.statusCode == 200) {
          _this.b64s = res.data.data.b64s;
          _this.bid = res.data.data.id;
        }
      }
    });
  }
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-grid":{"path":"./../components/vant/grid/index"},"van-button":{"path":"./../components/vant/button/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"15-0":["blur"],"15-1":["blur"],"15-2":["tap"],"15-3":["tap"]}}, handlers: {'15-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'15-1': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bidGet($event);
      })();
    
  }},'15-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bkLogin($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.fgPwd($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-grid":{"path":"./../components/vant/grid/index"},"van-button":{"path":"./../components/vant/button/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"15-0":["blur"],"15-1":["blur"],"15-2":["tap"],"15-3":["tap"]}}, handlers: {'15-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'15-1': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bidGet($event);
      })();
    
  }},'15-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bkLogin($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.fgPwd($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-grid":{"path":"./../components/vant/grid/index"},"van-button":{"path":"./../components/vant/button/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"15-0":["blur"],"15-1":["blur"],"15-2":["tap"],"15-3":["tap"]}}, handlers: {'15-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'15-1': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bidGet($event);
      })();
    
  }},'15-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bkLogin($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.fgPwd($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-grid":{"path":"./../components/vant/grid/index"},"van-button":{"path":"./../components/vant/button/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"15-0":["blur"],"15-1":["blur"],"15-2":["tap"],"15-3":["tap"]}}, handlers: {'15-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'15-1': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bidGet($event);
      })();
    
  }},'15-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bkLogin($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.fgPwd($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-grid":{"path":"./../components/vant/grid/index"},"van-button":{"path":"./../components/vant/button/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"15-0":["blur"],"15-1":["blur"],"15-2":["tap"],"15-3":["tap"]}}, handlers: {'15-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'15-1': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bidGet($event);
      })();
    
  }},'15-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bkLogin($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.fgPwd($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-grid":{"path":"./../components/vant/grid/index"},"van-button":{"path":"./../components/vant/button/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"15-0":["blur"],"15-1":["blur"],"15-2":["tap"],"15-3":["tap"]}}, handlers: {'15-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'15-1': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bidGet($event);
      })();
    
  }},'15-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bkLogin($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.fgPwd($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-grid":{"path":"./../components/vant/grid/index"},"van-button":{"path":"./../components/vant/button/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"15-0":["blur"],"15-1":["blur"],"15-2":["tap"],"15-3":["tap"]}}, handlers: {'15-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'15-1': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bidGet($event);
      })();
    
  }},'15-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bkLogin($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.fgPwd($event);
      })();
    
  }}}, models: {}, refs: undefined });