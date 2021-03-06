"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    activeNames: [''],
    datas: [{}],
    datassave: [{}],
    showtickets: ''
  },
  methods: {
    onChange: function onChange(event) {
      // 展开详情
      this.activeNames = event.$wx.detail;
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    _toast["default"].loading({
      message: '报修单祈祷中...',
      forbidClick: true,
      mask: true,
      duration: 0
    });

    var _jwt = wx.getStorageSync('jwt');

    if (_jwt) {
      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/getmyhistory',
        method: 'GET',
        data: {
          jwt: this.jwt,
          current: 1,
          pageSize: 100
        },
        header: {
          // 不带上jwt依然过不了验证
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          // console.log(res)
          if (res.data.data[0]) {
            for (var i = 0, j = 0; i < res.data.data.length; i++) {
              _this.datassave[j] = res.data.data[i];
              j++;
            }

            _this.datas = _this.datassave; // console.log(this.datas)

            _toast["default"].clear();
          } else {
            _this.showtickets = '无报修单';

            _toast["default"].clear();
          }
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    } else {
      wx.redirectTo({
        url: '../login/index'
      });
    }
  }
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"}},"on":{"11-0":["change"]}}, handlers: {'11-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"}},"on":{"11-0":["change"]}}, handlers: {'11-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }}}, models: {}, refs: undefined });