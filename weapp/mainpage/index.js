"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

var _dialog = _interopRequireDefault(require('./../components/vant/dialog/dialog.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    swiperData: [{
      pic: 'https://cdn.jsdelivr.net/gh/tydaytygx/NA/output2.png'
    }, {
      pic: 'https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/page-head-img/page20.jpg'
    }, {
      pic: 'https://cdn.jsdelivr.net/gh/tydaytygx/NA/NA%E5%9B%BE%E6%A0%87%E8%93%9D%E8%89%B2%E7%89%88.png'
    }],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    title: '',
    text: '',
    news1: '',
    news2: ''
  },
  methods: {
    showSupport: function showSupport(e) {
      _dialog["default"].alert({
        title: '截图保存二维码后扫描'
      }).then(function () {// on close
      });
    }
  },
  onLoad: function onLoad(e) {
    var _this = this;

    // 拿到公告
    var _jwt = wx.getStorageSync('jwt');

    if (_jwt) {
      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ann/getann',
        method: 'GET',
        data: {
          jwt: this.jwt
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            _this.news1 = res.data[res.data.length - 1].title + '=>' + res.data[res.data.length - 1].text;
            _this.news2 = res.data[res.data.length - 2].title + '=>' + res.data[res.data.length - 2].text;
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
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-dialog":{"path":"./../components/vant/dialog/index"},"van-notice-bar":{"path":"./../components/vant/notice-bar/index"}},"on":{"6-0":["tap"]}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.showSupport($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-dialog":{"path":"./../components/vant/dialog/index"},"van-notice-bar":{"path":"./../components/vant/notice-bar/index"}},"on":{"6-0":["tap"]}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.showSupport($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-grid-item":{"path":"./../components/vant/grid-item/index"},"van-grid":{"path":"./../components/vant/grid/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-dialog":{"path":"./../components/vant/dialog/index"},"van-notice-bar":{"path":"./../components/vant/notice-bar/index"}},"on":{"6-0":["tap"]}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.showSupport($event);
      })();
    
  }}}, models: {}, refs: undefined });