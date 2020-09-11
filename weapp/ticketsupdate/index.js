"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    activeNames: [''],
    datas: {},
    ticketid: '',
    getTime: '',
    showtickets: ''
  },
  methods: {
    onChange: function onChange(event) {
      // 打开下拉
      console.log(event);
      this.activeNames = event.$wx.detail; // this.ticketid=event.$wx.detail[1]
    },
    ticketDel: function ticketDel(e) {
      // 删单
      _toast["default"].loading({
        message: '删除保修单中...',
        forbidClick: true,
        mask: true,
        duration: 0
      });

      this.ticketid = e;

      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/cancelticket?ticketid=' + this.ticketid,
        method: 'DELETE',
        data: {
          jwt: this.jwt,
          ticketid: this.ticketid
        },
        header: {
          // 不带jwt过不了验证
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          // console.log('DELETE SUCCESS')
          _toast["default"].clear();

          wx.redirectTo({
            url: './index'
          });
        },
        fail: function fail(res) {
          (0, _toast["default"])('删除失败'); // console.log('DELETE FAIL')
        }
      });
    },
    ticketChange: function ticketChange(e) {
      // 更新报修单
      // console.log(e)
      _toast["default"].loading({
        message: '正在跳转至指定报修单...',
        forbidClick: true,
        mask: true,
        duration: 0
      });

      this.ticketid = e;
      wx.redirectTo({
        url: '../ticketschange/index?ticketid=' + this.ticketid
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    // 加载报修单
    _toast["default"].loading({
      message: '报修单祈祷中...',
      forbidClick: true,
      mask: true,
      duration: 0
    });

    this.getTime = wx.getStorageSync("time");

    var _jwt = wx.getStorageSync('jwt');

    if (_jwt) {
      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/getmyunfixticket',
        method: 'GET',
        data: {
          jwt: this.jwt
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
            _this.showtickets = '无报修单';

            _toast["default"].clear();
          }
        },
        fail: function fail(res) {
          // console.log(res)
          (0, _toast["default"])('加载失败');
        }
      });
    } else {
      wx.redirectTo({
        url: '../login/index'
      });
    }
  }
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"}},"on":{"12-0":["change"],"12-1":["tap"],"12-2":["tap"]}}, handlers: {'12-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'12-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketDel(item.id);
      })();
    
  }},'12-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketChange(item.id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"}},"on":{"12-0":["change"],"12-1":["tap"],"12-2":["tap"]}}, handlers: {'12-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'12-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketDel(item.id);
      })();
    
  }},'12-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketChange(item.id);
      })();
    
  }}}, models: {}, refs: undefined });