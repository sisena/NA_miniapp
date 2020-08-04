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
      this.activeNames = event.$wx.detail;
      this.ticketid = event.$wx.detail[1];
    },
    ticketDel: function ticketDel(e) {
      // 删单
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
    ticketChange: function ticketChange() {
      // 更新报修单
      wx.redirectTo({
        url: '../ticketschange/index?ticketid=' + this.ticketid
      });
    }
  },
  onLoad: function onLoad() {
    // 加载未修单
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
          //   if(res.data.data[0]){
          //     console.log(res.data.data)
          //     this.datas=res.data.data
          //   }else{
          //     this.showtickets='无报修单'
          //   }
          console.log(res);
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
}, {info: {"components":{"van-button":{"path":"./../components/vant/button/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"},"ttabbar":{"path":"./../components/tabbar"}},"on":{"16-12":["change"],"16-13":["tap"],"16-14":["tap"]}}, handlers: {'16-12': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'16-13': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.ticketDel($event);
      })();
    
  }},'16-14': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.ticketChange($event);
      })();
    
  }}}, models: {}, refs: undefined });