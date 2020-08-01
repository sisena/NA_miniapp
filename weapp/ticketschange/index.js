"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

var _data;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  data: (_data = {
    test: '',
    name: '',
    phone: '',
    // checked: false ,
    // daistatus: '否',
    dormitory: '',
    tickettime: [],
    option1: [{
      text: '',
      value: ''
    }, {
      text: '',
      value: ''
    }, {
      text: '',
      value: ''
    }, {
      text: '',
      value: ''
    }, {
      text: '',
      value: ''
    }, {
      text: '',
      value: ''
    }],
    time: '',
    quick: [],
    quicktime: [],
    timetag: '修改报修时间',
    title: '',
    message: '',
    ticketid: ''
  }, _defineProperty(_data, "name", ''), _defineProperty(_data, "uid", ''), _defineProperty(_data, "schedule", ''), _data),
  methods: {
    dormitoryGet: function dormitoryGet(e) {
      // 拿用户的宿舍
      this.dormitory = e.$wx.detail;
    },
    phoneGet: function phoneGet(e) {
      // 拿用户的手机号
      this.phone = e.$wx.detail;
    },
    timeDrop: function timeDrop(e) {
      // 展示报修时间的下拉
      if (e) {
        this.tickettime = e.$wx.detail;
      }
    },
    timeGet: function timeGet(e) {
      // 获得用户选择的报修时间
      this.time = e.$wx.detail;
      this.quicktime = e.$wx.detail;

      for (var i = 0; i < 6; i++) {
        if (this.time == this.option1[i].value) {
          this.timetag = this.option1[i].text;
        }
      }

      this.tickettime = false;
    },
    noop: function noop() {},
    // 摆设
    messageGet: function messageGet(e) {
      // 拿用户的报修详情
      this.message = e.$wx.detail;
    },
    titleGet: function titleGet(e) {
      // 拿用户的报修标题
      console.log(e);
      this.title = e.$wx.detail;
    },
    onSubmit: function onSubmit(e) {
      // 提交
      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);

      if (this.dormitory && this.phone && this.time && this.title && this.message) {
        wx.request({
          url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/ticketupdate',
          method: 'PUT',
          data: {
            jwt: this.jwt,
            schedule: this.time,
            description: this.message,
            destination: this.dormitory,
            phone: this.phone,
            title: this.title,
            name: this.name,
            id: this.ticketid
          },
          header: {
            // 依然是不携带jwt就无法验证
            'Authorization': "Bearer ".concat(jwt)
          },
          success: function success(res) {
            wx.redirectTo({
              url: '../ticketsupdate/index'
            });
            console.log('YES');
          },
          fail: function fail(res) {
            console.log('FAIL');
          }
        });
      } else {
        console.log(this.dormitory);
        console.log(this.phone);
        console.log(this.time);
        console.log(this.title);
        (0, _toast["default"])('请确认是否填写完所有信息');
      }
    }
  },
  computed: {},
  onLoad: function onLoad(e) {
    var _this = this;

    // 拿到对应订单的消息
    var _jwt = wx.getStorageSync('jwt');

    if (_jwt) {
      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/ticketdetail?ticketid=' + this.ticketid,
        method: 'GET',
        data: {
          ticketid: e.ticketid,
          jwt: this.jwt
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            _this.dormitory = res.data.data.destination;
            _this.phone = res.data.data.phone;
            _this.message = res.data.data.description;
            _this.title = res.data.data.title;
            _this.name = res.data.data.name;
            _this.uid = res.data.data.owner;
            _this.ticketid = e.ticketid;
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
      wx.request({
        // 从后台拿允许的报修时间
        url: this.$app.$options.globalData.urlRequest + '/api/v1/schedule/getavailschedules',
        method: 'GET',
        data: {
          jwt: this.jwt
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          for (var i = 0, j = 0; i < res.data.data.length; i++, j++) {
            _this.option1[j].text = res.data.data[i].description;
            _this.option1[j].value = res.data.data[i].id;
          }
        }
      });
    } else {
      wx.redirectTo({
        url: '../login/index'
      });
    }
  }
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-icon":{"path":"./../components/vant/icon/index"},"van-dropdown-menu":{"path":"./../components/vant/dropdown-menu/index"},"van-field":{"path":"./../components/vant/field/index"},"van-dropdown-item":{"path":"./../components/vant/dropdown-item/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-submit-bar":{"path":"./../components/vant/submit-bar/index"},"van-checkbox":{"path":"./../components/vant/checkbox/index"},"van-checkbox-group":{"path":"./../components/vant/checkbox-group/index"},"van-radio":{"path":"./../components/vant/radio/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"},"van-radio-group":{"path":"./../components/vant/radio-group/index"}},"on":{"13-0":["input"],"13-1":["change"],"13-2":["change"],"13-3":["tap"],"13-4":["input"],"13-5":["input"],"13-6":["input"],"13-7":["submit"]}}, handlers: {'13-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.dormitoryGet($event);
      })();
    
  }},'13-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeDrop($event);
      })();
    
  }},'13-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeGet($event);
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'13-4': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.phoneGet($event);
      })();
    
  }},'13-5': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleGet($event);
      })();
    
  }},'13-6': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.messageGet($event);
      })();
    
  }},'13-7': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubmit($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-icon":{"path":"./../components/vant/icon/index"},"van-dropdown-menu":{"path":"./../components/vant/dropdown-menu/index"},"van-field":{"path":"./../components/vant/field/index"},"van-dropdown-item":{"path":"./../components/vant/dropdown-item/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-submit-bar":{"path":"./../components/vant/submit-bar/index"},"van-checkbox":{"path":"./../components/vant/checkbox/index"},"van-checkbox-group":{"path":"./../components/vant/checkbox-group/index"},"van-radio":{"path":"./../components/vant/radio/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"},"van-radio-group":{"path":"./../components/vant/radio-group/index"}},"on":{"13-0":["input"],"13-1":["change"],"13-2":["change"],"13-3":["tap"],"13-4":["input"],"13-5":["input"],"13-6":["input"],"13-7":["submit"]}}, handlers: {'13-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.dormitoryGet($event);
      })();
    
  }},'13-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeDrop($event);
      })();
    
  }},'13-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeGet($event);
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'13-4': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.phoneGet($event);
      })();
    
  }},'13-5': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleGet($event);
      })();
    
  }},'13-6': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.messageGet($event);
      })();
    
  }},'13-7': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubmit($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-icon":{"path":"./../components/vant/icon/index"},"van-dropdown-menu":{"path":"./../components/vant/dropdown-menu/index"},"van-field":{"path":"./../components/vant/field/index"},"van-dropdown-item":{"path":"./../components/vant/dropdown-item/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-submit-bar":{"path":"./../components/vant/submit-bar/index"},"van-checkbox":{"path":"./../components/vant/checkbox/index"},"van-checkbox-group":{"path":"./../components/vant/checkbox-group/index"},"van-radio":{"path":"./../components/vant/radio/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"},"van-radio-group":{"path":"./../components/vant/radio-group/index"}},"on":{"13-0":["input"],"13-1":["change"],"13-2":["change"],"13-3":["tap"],"13-4":["input"],"13-5":["input"],"13-6":["input"],"13-7":["submit"]}}, handlers: {'13-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.dormitoryGet($event);
      })();
    
  }},'13-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeDrop($event);
      })();
    
  }},'13-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeGet($event);
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'13-4': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.phoneGet($event);
      })();
    
  }},'13-5': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleGet($event);
      })();
    
  }},'13-6': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.messageGet($event);
      })();
    
  }},'13-7': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubmit($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-icon":{"path":"./../components/vant/icon/index"},"van-dropdown-menu":{"path":"./../components/vant/dropdown-menu/index"},"van-field":{"path":"./../components/vant/field/index"},"van-dropdown-item":{"path":"./../components/vant/dropdown-item/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-submit-bar":{"path":"./../components/vant/submit-bar/index"},"van-checkbox":{"path":"./../components/vant/checkbox/index"},"van-checkbox-group":{"path":"./../components/vant/checkbox-group/index"},"van-radio":{"path":"./../components/vant/radio/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"},"van-radio-group":{"path":"./../components/vant/radio-group/index"}},"on":{"13-0":["input"],"13-1":["change"],"13-2":["change"],"13-3":["tap"],"13-4":["input"],"13-5":["input"],"13-6":["input"],"13-7":["submit"]}}, handlers: {'13-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.dormitoryGet($event);
      })();
    
  }},'13-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeDrop($event);
      })();
    
  }},'13-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeGet($event);
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'13-4': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.phoneGet($event);
      })();
    
  }},'13-5': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleGet($event);
      })();
    
  }},'13-6': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.messageGet($event);
      })();
    
  }},'13-7': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubmit($event);
      })();
    
  }}}, models: {}, refs: undefined });