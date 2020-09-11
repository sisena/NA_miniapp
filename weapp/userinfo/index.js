"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

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
      // wx.removeStorage({
      //   key: '_jwt',
      //   success (res) {
      //      wx.removeStorage({
      //        key: 'jwt',
      //        success (res) {
      //           wx.removeStorage({
      //             key: 'jwtDecode',
      //             success (res) {
      //               wx.redirectTo({
      //                 url: '../login/index'
      //               })
      //             }
      //           })
      //        }
      //      })
      //   }
      // })
      wx.clearStorage({
        success: function success(e) {
          wx.redirectTo({
            url: '../login/index'
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

            if (res.data.data.nickname) {
              _this.nickname = res.data.data.nickname;
            } else {
              _this.nickname = '无';
            }
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
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"10-0":["contact"],"10-1":["tap"]}}, handlers: {'10-0': {"contact": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleContact($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.logOut($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-field":{"path":"./../components/vant/field/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"10-0":["contact"],"10-1":["tap"]}}, handlers: {'10-0': {"contact": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleContact($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.logOut($event);
      })();
    
  }}}, models: {}, refs: undefined });