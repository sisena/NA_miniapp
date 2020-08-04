"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    uid: '',
    password: ''
  },
  methods: {
    uidGet: function uidGet(e) {
      // 拿到用户的账号
      this.uid = e.$wx.detail.value;
    },
    pwdGet: function pwdGet(e) {
      // 拿到用户的密码
      this.password = e.$wx.detail.value;
    },
    pwdGo: function pwdGo() {
      wx.redirectTo({
        url: "../fgpwd/index"
      });
    },
    loginIn: function loginIn() {
      // 登陆
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/login',
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        data: {
          uid: this.uid,
          password: this.password
        },
        success: function success(res) {
          if (res.data.code == 200) {
            console.log('LOGIN YES');

            var _token = JSON.stringify(res.data.token);

            wx.setStorageSync('jwt', _token);
            wx.reLaunch({
              url: '../userinfo/index'
            });
          } else {
            (0, _toast["default"])('账户或密码错误，请重新输入');
            console.log('LOGIN FAIL1');
          }
        },
        fail: function fail(res) {
          console.log('REQUEST FAIL');
        }
      });
    }
  },
  onLoad: function onLoad() {
    // 把左上角的返回按钮藏起来了
    wx.hideHomeButton();
  }
}, {info: {"components":{"van-button":{"path":"./../components/vant/button/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-divider":{"path":"./../components/vant/divider/index"},"ttabbar":{"path":"./../components/tabbar"}},"on":{"7-16":["blur"],"7-17":["blur"],"7-18":["tap"],"7-19":["tap"]}}, handlers: {'7-16': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'7-17': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pwdGet($event);
      })();
    
  }},'7-18': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pwdGo($event);
      })();
    
  }},'7-19': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginIn($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-button":{"path":"./../components/vant/button/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-divider":{"path":"./../components/vant/divider/index"},"ttabbar":{"path":"./../components/tabbar"}},"on":{"7-16":["blur"],"7-17":["blur"],"7-18":["tap"],"7-19":["tap"]}}, handlers: {'7-16': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'7-17': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pwdGet($event);
      })();
    
  }},'7-18': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pwdGo($event);
      })();
    
  }},'7-19': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginIn($event);
      })();
    
  }}}, models: {}, refs: undefined });