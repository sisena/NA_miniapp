"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

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
          console.log('DELETE SUCCESS');
          wx.redirectTo({
            url: './index'
          });
        },
        fail: function fail(res) {
          console.log('DELETE FAIL');
        }
      });
    },
    ticketChange: function ticketChange(e) {
      // 更新报修单
      // console.log(e)
      this.ticketid = e;
      wx.redirectTo({
        url: '../ticketschange/index?ticketid=' + this.ticketid
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    // 加载报修单
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
          } else {
            _this.showtickets = '无报修单';
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
}, {info: {"components":{"van-button":{"path":"./../components/vant/button/index"},"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"12-73":["change"],"12-74":["tap"],"12-75":["tap"]}}, handlers: {'12-73': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'12-74': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketDel(item.id);
      })();
    
  }},'12-75': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketChange(item.id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-button":{"path":"./../components/vant/button/index"},"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-divider":{"path":"./../components/vant/divider/index"}},"on":{"12-73":["change"],"12-74":["tap"],"12-75":["tap"]}}, handlers: {'12-73': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'12-74': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketDel(item.id);
      })();
    
  }},'12-75': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketChange(item.id);
      })();
    
  }}}, models: {}, refs: undefined });