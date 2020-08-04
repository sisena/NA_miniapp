"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

var _data;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  data: (_data = {
    created_at: '',
    updated_at: '',
    staff: '',
    schedulesid: '',
    reply: '',
    showtickets: '',
    checked: true,
    datas: {},
    schedules: {},
    description: '',
    destination: '',
    id: '',
    name: '',
    owner: '',
    phone: ''
  }, _defineProperty(_data, "reply", ''), _defineProperty(_data, "schedule", ''), _defineProperty(_data, "staff", ''), _defineProperty(_data, "status", ''), _defineProperty(_data, "title", ''), _defineProperty(_data, "type", ''), _data),
  onLoad: function onLoad() {
    var _this = this;

    var _jwt = wx.getStorageSync('jwt');

    var jwt = JSON.parse(_jwt);
    wx.request({
      url: 'http://localhost/api/v1/ticket/getalltickets',
      method: 'GET',
      data: {
        jwt: this.jwt
      },
      header: {
        'Authorization': "Bearer ".concat(jwt)
      },
      success: function success(res) {
        console.log(res);

        if (res.data[0]) {
          // this.showtickets=''
          // console.log(res)
          // wx.setStorageSync('datas',res.data)
          // wx.setStorageSync('name', res.data[0].name);
          // this.name=wx.getStorageSync('name')
          // console.log(this.name)
          // console.log(res.data.length)
          // console.log(wx.getStorageSync('name'))
          // this.datas=wx.getStorageSync('datas')
          // console.log(wx.getStorageSync('datas')[0])
          _this.datas = res.data;
        } else {
          _this.datas = '';
          _this.schedulesid = '';
          _this.showtickets = '无订单';
        }
      },
      fail: function fail(res) {
        console.log(res);
      }
    });
  },
  methods: {
    getalltickets: function getalltickets() {
      var _this2 = this;

      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);
      wx.request({
        url: 'http://localhost/api/v1/ticket/getalltickets',
        method: 'GET',
        data: {
          jwt: this.jwt
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          if (res.data[0]) {
            ;
            _this2.showtickets = '';
            wx.setStorageSync('datas', res.data);
            wx.setStorageSync('name', res.data[0].name);
            _this2.name = wx.getStorageSync('name');
            _this2.datas = wx.getStorageSync('datas');
          } else {
            _this2.datas = '';
            _this2.schedulesid = '';
            _this2.showtickets = '无订单';
          }
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    },
    getcompletetickets: function getcompletetickets() {
      var _this3 = this;

      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);
      console.log('fail');
      wx.request({
        url: 'http://localhost/api/v1/ticket/getcompletetickets',
        method: 'GET',
        data: {},
        header: {
          'content-type': 'application/json',
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          console.log(res);

          if (res.data[0]) {
            // this.showtickets=''
            // wx.setStorageSync('datas',res.data)
            // wx.setStorageSync('name', res.data[0].name);
            // this.name=wx.getStorageSync('name')
            // this.datas=wx.getStorageSync('datas')
            _this3.datas = res.data;
          } else {
            _this3.datas = '';
            _this3.schedulesid = '';
            _this3.showtickets = '无订单';
          }
        },
        fail: function fail(res) {
          console.log('fail');
          console.log(res);
        }
      });
    },
    getfixingtickets: function getfixingtickets() {
      var _this4 = this;

      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);
      wx.request({
        url: 'http://localhost/api/v1/ticket/getfixingtickets',
        method: 'GET',
        data: {
          jwt: this.jwt
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          if (res.data[0]) {
            // this.showtickets=''
            // wx.setStorageSync('datas',res.data)
            // wx.setStorageSync('name', res.data[0].name);
            // this.name=wx.getStorageSync('name')
            // this.datas=wx.getStorageSync('datas')
            _this4.datas = res.data;
          } else {
            _this4.datas = '';
            _this4.schedulesid = '';
            _this4.showtickets = '无订单';
          }
        },
        fail: function fail(res) {
          console.log('fail');
          console.log(res);
        }
      });
    },
    getuncompletetickets: function getuncompletetickets() {
      var _this5 = this;

      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);
      wx.request({
        url: 'http://localhost/api/v1/ticket/getuncompletetickets',
        method: 'GET',
        data: {
          jwt: this.jwt
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          if (res.data[0]) {
            // this.showtickets=''
            // wx.setStorageSync('datas',res.data)
            // wx.setStorageSync('name', res.data[0].name);
            // this.name=wx.getStorageSync('name')
            // this.datas=wx.getStorageSync('datas')
            _this5.datas = res.data;
          } else {
            _this5.datas = '';
            _this5.schedulesid = '';
            _this5.showtickets = '无订单';
          }
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    }
  }
}, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"},"van-grid":{"path":"./vant/grid/index"},"van-button":{"path":"./vant/button/index"},"van-icon":{"path":"./vant/icon/index"},"van-grid-item":{"path":"./vant/grid-item/index"},"van-dropdown-menu":{"path":"./vant/dropdown-menu/index"},"van-dropdown-item":{"path":"./vant/dropdown-item/index"},"van-field":{"path":"./vant/field/index"},"van-switch":{"path":"./vant/switch/index"},"ttabbar":{"path":"tabbar"}},"on":{"8-0":["tap"],"8-1":["tap"],"8-2":["tap"],"8-3":["tap"],"8-4":["change"]}}, handlers: {'8-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getalltickets($event);
      })();
    
  }},'8-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getcompletetickets($event);
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getfixingtickets($event);
      })();
    
  }},'8-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuncompletetickets($event);
      })();
    
  }},'8-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"},"van-grid":{"path":"./vant/grid/index"},"van-button":{"path":"./vant/button/index"},"van-icon":{"path":"./vant/icon/index"},"van-grid-item":{"path":"./vant/grid-item/index"},"van-dropdown-menu":{"path":"./vant/dropdown-menu/index"},"van-dropdown-item":{"path":"./vant/dropdown-item/index"},"van-field":{"path":"./vant/field/index"},"van-switch":{"path":"./vant/switch/index"},"ttabbar":{"path":"tabbar"}},"on":{"8-0":["tap"],"8-1":["tap"],"8-2":["tap"],"8-3":["tap"],"8-4":["change"]}}, handlers: {'8-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getalltickets($event);
      })();
    
  }},'8-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getcompletetickets($event);
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getfixingtickets($event);
      })();
    
  }},'8-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuncompletetickets($event);
      })();
    
  }},'8-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"},"van-grid":{"path":"./vant/grid/index"},"van-button":{"path":"./vant/button/index"},"van-icon":{"path":"./vant/icon/index"},"van-grid-item":{"path":"./vant/grid-item/index"},"van-dropdown-menu":{"path":"./vant/dropdown-menu/index"},"van-dropdown-item":{"path":"./vant/dropdown-item/index"},"van-field":{"path":"./vant/field/index"},"van-switch":{"path":"./vant/switch/index"},"ttabbar":{"path":"tabbar"}},"on":{"8-0":["tap"],"8-1":["tap"],"8-2":["tap"],"8-3":["tap"],"8-4":["change"]}}, handlers: {'8-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getalltickets($event);
      })();
    
  }},'8-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getcompletetickets($event);
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getfixingtickets($event);
      })();
    
  }},'8-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuncompletetickets($event);
      })();
    
  }},'8-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"},"van-grid":{"path":"./vant/grid/index"},"van-button":{"path":"./vant/button/index"},"van-icon":{"path":"./vant/icon/index"},"van-grid-item":{"path":"./vant/grid-item/index"},"van-dropdown-menu":{"path":"./vant/dropdown-menu/index"},"van-dropdown-item":{"path":"./vant/dropdown-item/index"},"van-field":{"path":"./vant/field/index"},"van-switch":{"path":"./vant/switch/index"},"ttabbar":{"path":"tabbar"}},"on":{"8-0":["tap"],"8-1":["tap"],"8-2":["tap"],"8-3":["tap"],"8-4":["change"]}}, handlers: {'8-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getalltickets($event);
      })();
    
  }},'8-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getcompletetickets($event);
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getfixingtickets($event);
      })();
    
  }},'8-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuncompletetickets($event);
      })();
    
  }},'8-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"},"van-grid":{"path":"./vant/grid/index"},"van-button":{"path":"./vant/button/index"},"van-icon":{"path":"./vant/icon/index"},"van-grid-item":{"path":"./vant/grid-item/index"},"van-dropdown-menu":{"path":"./vant/dropdown-menu/index"},"van-dropdown-item":{"path":"./vant/dropdown-item/index"},"van-field":{"path":"./vant/field/index"},"van-switch":{"path":"./vant/switch/index"},"ttabbar":{"path":"tabbar"}},"on":{"8-0":["tap"],"8-1":["tap"],"8-2":["tap"],"8-3":["tap"],"8-4":["change"]}}, handlers: {'8-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getalltickets($event);
      })();
    
  }},'8-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getcompletetickets($event);
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getfixingtickets($event);
      })();
    
  }},'8-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuncompletetickets($event);
      })();
    
  }},'8-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"},"van-grid":{"path":"./vant/grid/index"},"van-button":{"path":"./vant/button/index"},"van-icon":{"path":"./vant/icon/index"},"van-grid-item":{"path":"./vant/grid-item/index"},"van-dropdown-menu":{"path":"./vant/dropdown-menu/index"},"van-dropdown-item":{"path":"./vant/dropdown-item/index"},"van-field":{"path":"./vant/field/index"},"van-switch":{"path":"./vant/switch/index"},"ttabbar":{"path":"tabbar"}},"on":{"8-0":["tap"],"8-1":["tap"],"8-2":["tap"],"8-3":["tap"],"8-4":["change"]}}, handlers: {'8-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getalltickets($event);
      })();
    
  }},'8-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getcompletetickets($event);
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getfixingtickets($event);
      })();
    
  }},'8-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuncompletetickets($event);
      })();
    
  }},'8-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }}}, models: {}, refs: undefined });