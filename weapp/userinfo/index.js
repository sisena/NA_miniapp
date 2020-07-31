"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    email: '',
    gengder: '',
    name: '',
    isna: '',
    nickname: '',
    addres: '',
    uid: '',
    type: ''
  },
  methods: {
    logOut: function logOut() {
      wx.removeStorage({
        key: '_jwt',
        success: function success(res) {
          wx.removeStorage({
            key: 'jwt',
            success: function success(res) {
              wx.redirectTo({
                url: '../login/index'
              });
            }
          });
        }
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    // 判断有没有登陆，没有登陆就弹去登陆界面
    wx.hideHomeButton();

    if (wx.getStorageSync('jwt')) {
      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/user/getmyinfo',
        method: 'GET',
        data: {
          jwt: this.jwt
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            console.log(res); // console.log(jwt)

            _this.name = res.data.data.name;
            _this.uid = res.data.data.uid;
            _this.email = res.data.data.email;
            _this.addres = res.data.data.Address;
            _this.nickname = res.data.data.nickname;
          } else {
            wx.redirectTo({
              url: '../login/index'
            });
          }
        },
        fail: function fail(res) {
          console.log('Timeout');
        }
      });
    } else {
      wx.redirectTo({
        url: '../login/index'
      });
    }
  }
}, {info: {"components":{"van-grid":{"path":"./../components/vant/grid/index"},"van-button":{"path":"./../components/vant/button/index"},"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"ttabbar":{"path":"./../components/tabbar"}},"on":{"10-1":["tap"]}}, handlers: {'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.logOut($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../components/vant/grid/index"},"van-button":{"path":"./../components/vant/button/index"},"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"ttabbar":{"path":"./../components/tabbar"}},"on":{"10-1":["tap"]}}, handlers: {'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.logOut($event);
      })();
    
  }}}, models: {}, refs: undefined });