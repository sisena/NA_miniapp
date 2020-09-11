"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  data: _defineProperty({
    activeNames: [''],
    datas: {},
    ticketid: '',
    getTime: '',
    showtickets: ''
  }, "ticketid", ''),
  methods: {
    onChange: function onChange(event) {
      // 打开下拉
      console.log(event);
      this.activeNames = event.$wx.detail; // this.ticketid=event.$wx.detail[1]
    },
    ticketGet: function ticketGet(e) {
      // 接单！
      // wx.redirectTo({
      //   url: '../ticketschange/index?ticketid='+this.ticketid
      // })
      _toast["default"].loading({
        message: '接单中...',
        forbidClick: true,
        mask: true,
        duration: 0
      });

      this.ticketid = e;

      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/acceptticket?ticketid=' + this.ticketid,
        method: 'PUT',
        data: {
          jwt: this.jwt,
          ticketid: this.ticketid
        },
        header: {
          // 不带jwt过不了验证
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          wx.redirectTo({
            url: './index'
          });
        },
        fail: function fail(res) {
          console.log('怎么接不了单？');
        }
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    // 加载未修单
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
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/getuncompletetickets',
        method: 'GET',
        data: {
          jwt: this.jwt,
          current: 1,
          pageSize: 100
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          if (res.data.data[0]) {
            console.log(res.data.data);
            _this.datas = res.data.data;

            _toast["default"].clear();
          } else {
            _this.showtickets = '无未修单';

            _toast["default"].clear();
          } // console.log(res)

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
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"}},"on":{"16-0":["change"],"16-1":["tap"]}}, handlers: {'16-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'16-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketGet(item.id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"}},"on":{"16-0":["change"],"16-1":["tap"]}}, handlers: {'16-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'16-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketGet(item.id);
      })();
    
  }}}, models: {}, refs: undefined });