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
            wx.switchTab({
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
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-toast":{"path":"./../components/vant/toast/index"}},"on":{"7-0":["blur"],"7-1":["blur"],"7-2":["tap"]}}, handlers: {'7-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'7-1': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.pwdGet($event);
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginIn($event);
      })();
    
  }}}, models: {}, refs: undefined });