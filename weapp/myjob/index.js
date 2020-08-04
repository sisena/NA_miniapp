"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

var _dialog = _interopRequireDefault(require('./../components/vant/dialog/dialog.js'));

var _data;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  data: (_data = {
    activeNames: [''],
    datas: {},
    dispaly: 'None',
    ticketid: '',
    getTime: '',
    showtickets: '',
    reply: ''
  }, _defineProperty(_data, "ticketid", ''), _defineProperty(_data, "list", ["您的问题已经处理完成，感谢您对NA的支持，祝您生活愉快！O(∩_∩)O", "您好，此问题不在我们服务范围之内，感谢您使用报修网，祝您生活愉快！", "您好，网管已上门维修，由于宿舍无人，请您重新报修"]), _defineProperty(_data, "pickerNames", []), _defineProperty(_data, "quick", []), _defineProperty(_data, "showdialog", false), _defineProperty(_data, "reply", ''), _data),
  methods: {
    onChange: function onChange(event) {
      // 打开下拉
      console.log(event);
      this.activeNames = event.$wx.detail; //   this.ticketid=event.$wx.detail[1]
    },
    ticketReply: function ticketReply(e) {
      this.ticketid = e;
      this.showdialog = true;
    },
    replyGet: function replyGet(e) {
      // 拿用户的报修详情
      this.reply = e.$wx.detail;
    },
    ticketComplete: function ticketComplete() {
      // console.log(this.reply)
      // console.log(this.ticketid)
      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/finishticket',
        method: 'PUT',
        data: {
          jwt: this.jwt,
          id: this.ticketid,
          reply: this.reply
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          // console.log('yes')
          wx.redirectTo({
            url: './index'
          });
        },
        fail: function fail(res) {
          console.log(url);
          console.log('居然还能消单失败...?');
        }
      });
      this.reply = '';
      this.showdialog = false;
      this.quick = '';
    },
    dialogOff: function dialogOff() {
      this.showdialog = false;
    },
    downDrop: function downDrop(e) {
      // 展示快速选择的下拉
      if (e) {
        this.pickerNames = e.$wx.detail;
      }
    },
    quickGet: function quickGet(e) {
      // 快速选择标题
      this.quick = e.$wx.detail;
      this.reply = this.quick;
      this.pickerNames = false;
      console.log(this.quick);
    },
    noop: function noop() {},
    // 摆设
    ticketReturn: function ticketReturn(e) {
      this.ticketid = e;

      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/abortticket?ticketid=' + this.ticketid,
        method: 'DELETE',
        data: {
          jwt: this.jwt,
          ticketid: this.ticketid
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          wx.redirectTo({
            url: './index'
          });
        },
        fail: function fail(res) {
          console.log('退不掉，还有这种事？');
        }
      });
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    // 加载未修单
    var _jwt = wx.getStorageSync('jwt');

    if (_jwt) {
      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/getmywork',
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
          console.log(res);

          if (res.data.data[0]) {
            console.log(res.data.data);
            _this.datas = res.data.data;
          } else {
            _this.showtickets = '无未修单';
          }

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
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-button":{"path":"./../components/vant/button/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"van-col":{"path":"./../components/vant/col/index"},"van-row":{"path":"./../components/vant/row/index"},"van-dialog":{"path":"./../components/vant/dialog/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-field":{"path":"./../components/vant/field/index"},"van-radio":{"path":"./../components/vant/radio/index"},"van-dropdown-menu":{"path":"./../components/vant/dropdown-menu/index"},"van-dropdown-item":{"path":"./../components/vant/dropdown-item/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"},"van-radio-group":{"path":"./../components/vant/radio-group/index"},"ttabbar":{"path":"./../components/tabbar"}},"on":{"72-258":["cancel","confirm"],"72-260":["change"],"72-261":["change"],"72-262":["tap"],"72-263":["input"],"72-264":["change"],"72-265":["tap"],"72-266":["tap"]}}, handlers: {'72-258': {"cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.dialogOff($event);
      })();
    
  }, "confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.ticketComplete($event);
      })();
    
  }},'72-260': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.downDrop($event);
      })();
    
  }},'72-261': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.quickGet($event);
      })();
    
  }},'72-262': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'72-263': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.replyGet($event);
      })();
    
  }},'72-264': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'72-265': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketReturn(item.id);
      })();
    
  }},'72-266': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketReply(item.id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-button":{"path":"./../components/vant/button/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"van-col":{"path":"./../components/vant/col/index"},"van-row":{"path":"./../components/vant/row/index"},"van-dialog":{"path":"./../components/vant/dialog/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-field":{"path":"./../components/vant/field/index"},"van-radio":{"path":"./../components/vant/radio/index"},"van-dropdown-menu":{"path":"./../components/vant/dropdown-menu/index"},"van-dropdown-item":{"path":"./../components/vant/dropdown-item/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"},"van-radio-group":{"path":"./../components/vant/radio-group/index"},"ttabbar":{"path":"./../components/tabbar"}},"on":{"72-258":["cancel","confirm"],"72-260":["change"],"72-261":["change"],"72-262":["tap"],"72-263":["input"],"72-264":["change"],"72-265":["tap"],"72-266":["tap"]}}, handlers: {'72-258': {"cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.dialogOff($event);
      })();
    
  }, "confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.ticketComplete($event);
      })();
    
  }},'72-260': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.downDrop($event);
      })();
    
  }},'72-261': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.quickGet($event);
      })();
    
  }},'72-262': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'72-263': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.replyGet($event);
      })();
    
  }},'72-264': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'72-265': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketReturn(item.id);
      })();
    
  }},'72-266': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.ticketReply(item.id);
      })();
    
  }}}, models: {}, refs: undefined });