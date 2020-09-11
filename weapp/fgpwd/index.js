"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    uid: '',
    b64s: '',
    bid: '',
    captcha: '',
    second: 5
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
    rePage: function rePage() {
      wx.redirectTo({
        url: "./index"
      });
    },
    fgPwd: function fgPwd() {
      var _this = this;

      // 忘记密码
      _toast["default"].loading({
        message: '正在提交请求...',
        forbidClick: true,
        mask: true,
        duration: 0
      });

      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/newforget?uid=' + this.uid + '&CaptchaId=' + this.bid + '&Captcha=' + this.captcha,
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          _toast["default"].clear(); // console.log(res)


          if (res.data.code == 201) {
            var toast = _toast["default"].loading({
              duration: 0,
              // 持续展示 toast
              forbidClick: true,
              mask: true,
              message: '重置密码邮件已发送，请检查mysise邮箱',
              loadingType: 'spinner'
            });

            var timer = setInterval(function () {
              if (_this.second) {
                _this.second--;
                toast.setData({
                  message: "\u91CD\u7F6E\u5BC6\u7801\u90AE\u4EF6\u5DF2\u53D1\u9001\uFF0C\u8BF7\u68C0\u67E5mysise\u90AE\u7BB1( ".concat(_this.second, " )")
                });
              } else {
                clearInterval(timer);

                _toast["default"].clear();

                wx.reLaunch({
                  url: '../login/index'
                });
              }
            }, 1000);
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
    var _this2 = this;

    wx.request({
      url: this.$app.$options.globalData.urlRequest + '/api/other/getcaptcha',
      method: 'GET',
      success: function success(res) {
        if (res.statusCode == 200) {
          _this2.b64s = res.data.data.b64s;
          _this2.bid = res.data.data.id;
        }
      }
    });
  }
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-toast":{"path":"./../components/vant/toast/index"}},"on":{"15-0":["blur"],"15-1":["blur"],"15-2":["tap"],"15-3":["tap"],"15-4":["tap"]}}, handlers: {'15-0': {"blur": function proxy () {
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
        _vm.rePage($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bkLogin($event);
      })();
    
  }},'15-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.fgPwd($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-toast":{"path":"./../components/vant/toast/index"}},"on":{"15-0":["blur"],"15-1":["blur"],"15-2":["tap"],"15-3":["tap"],"15-4":["tap"]}}, handlers: {'15-0': {"blur": function proxy () {
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
        _vm.rePage($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bkLogin($event);
      })();
    
  }},'15-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.fgPwd($event);
      })();
    
  }}}, models: {}, refs: undefined });