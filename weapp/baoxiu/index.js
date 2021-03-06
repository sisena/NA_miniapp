"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

var _dialog = _interopRequireDefault(require('./../components/vant/dialog/dialog.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    test: '',
    name: '',
    phone: '',
    checked: false,
    daistatus: '否',
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
    timetag: '上门时间',
    title: '',
    message: '',
    uid: '',
    quick: [],
    quicktime: [],
    list: ["上不了网", "更换水晶头", "网络卡顿"],
    activeNames: [],
    oriname: '',
    schedule: '',
    titleAll: '',
    messageAll: ''
  },
  methods: {
    nameGet: function nameGet(e) {
      // 拿用户的名字
      this.name = e.$wx.detail;
    },
    uidGet: function uidGet(e) {
      // 拿用户的学号
      this.uid = e.$wx.detail;
    },
    onCheck: function onCheck() {
      // 是用户的否代报修的状态
      this.checked = !this.checked;

      if (this.checked == true) {
        this.name = this.name + '[代]';
      } else {
        this.name = this.oriname;
      }
    },
    dormitoryGet: function dormitoryGet(e) {
      // 拿用户的宿舍
      this.dormitory = e.$wx.detail;
    },
    phoneGet: function phoneGet(e) {
      // 拿用户的手机
      this.phone = e.$wx.detail;
    },
    timeDrop: function timeDrop(e) {
      // 展示报修时间的下拉
      if (e) {
        this.tickettime = e.$wx.detail;
      }
    },
    timeGet: function timeGet(e) {
      // 拿用户的报修时间
      this.time = e.$wx.detail;
      this.quicktime = e.$wx.detail;

      for (var i = 0; i < 6; i++) {
        if (this.time == this.option1[i].value) {
          this.timetag = this.option1[i].text;
        }
      }

      this.tickettime = false;
    },
    quickGet: function quickGet(e) {
      // 快速选择标题
      this.quick = e.$wx.detail;
      this.title = this.quick;
      this.activeNames = false;
      console.log(this.quick);
    },
    downDrop: function downDrop(e) {
      // 展示快速选择的下拉
      if (e) {
        this.activeNames = e.$wx.detail;
      }
    },
    noop: function noop() {},
    // 摆设
    messageGet: function messageGet(e) {
      // 拿用户的报修详情
      this.message = e.$wx.detail;
    },
    titleGet: function titleGet(e) {
      // 拿用户的报修标题
      this.title = e.$wx.detail;
    },
    onSubmit: function onSubmit(e) {
      // 提交按钮
      console.log(e);

      var _jwt = wx.getStorageSync('jwt');

      var jwt = JSON.parse(_jwt);

      if (this.name && this.dormitory && this.phone && this.time && this.title) {
        _toast["default"].loading({
          message: 'wait...',
          forbidClick: true,
          mask: true,
          duration: 0
        }); // 确认所有空都填写完毕


        wx.request({
          url: this.$app.$options.globalData.urlRequest + '/api/v1/ticket/createticket',
          method: 'POST',
          data: {
            jwt: this.jwt,
            schedule: this.time,
            description: this.message,
            destination: this.dormitory,
            name: this.name,
            phone: this.phone,
            title: this.title
          },
          header: {
            // 不携带jwt会导致无法正常验证
            'Authorization': "Bearer ".concat(jwt)
          },
          success: function success(res) {
            // wx.requestSubscribeMessage({
            //   tmplIds: ['uoueIiQtZbZecn2zumz1_wbmnBUw6obaePtF-hxebKg'],
            //   success (res) {
            //     // console.log(res)
            //   },
            //   fail (res) {
            //     // console.log(res)
            //   },
            // })
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
        (0, _toast["default"])('请确认是否填写完所有信息');
      }
    }
  },
  computed: {
    daistatus: function daistatus() {
      if (this.checked) {
        return this.daistatus = '是';
      } else {
        return this.daistatus = '否';
      }
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    // 判断用户是否登陆，没有登陆就跳转login指引登陆
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
        url: this.$app.$options.globalData.urlRequest + '/api/v1/user/getmyinfo',
        method: 'GET',
        data: {
          jwt: this.jwt
        },
        header: {
          // 不携带jwt会导致无法正常验证
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            _this.name = res.data.data.name;
            _this.oriname = res.data.data.name;
            _this.uid = res.data.data.uid;
            _this.dormitory = res.data.data.Address;

            _toast["default"].clear();
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
        url: this.$app.$options.globalData.urlRequest + '/api/v1/schedule/getavailschedules',
        method: 'GET',
        data: {
          jwt: this.jwt
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          // console.log(res.data[1].data[0].description)
          if (res.data.data[0].description == "当前为假期暂不开放") {
            console.log(res);
            wx.redirectTo({
              url: '../mainpage/index'
            });
          }
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

    _dialog["default"].alert({
      title: '提示',
      message: '水管、灯泡、空调、水龙头等宿舍问题请自行前往 <导航网-安全报修-宿舍设施报修> 进行报修，该小程序只提供网络故障报修，非网络故障报修会直接取消，望周知',
      theme: 'round-button',
      transition: 'none',
      asyncClose: true
    }).then(function () {
      // on close
      // 为了防止原生组件覆盖，等到弹窗消失之后再加载
      _dialog["default"].close();

      setTimeout(function () {
        _this.titleAll = '请描述你的问题或从上方快速选择', _this.messageAll = '请描述你的问题(可选填)';
      }, 200);
    });
  },
  onShow: function onShow() {}
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-dropdown-item":{"path":"./../components/vant/dropdown-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-dropdown-menu":{"path":"./../components/vant/dropdown-menu/index"},"van-field":{"path":"./../components/vant/field/index"},"van-switch":{"path":"./../components/vant/switch/index"},"van-dialog":{"path":"./../components/vant/dialog/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-panel":{"path":"./../components/vant/panel/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-submit-bar":{"path":"./../components/vant/submit-bar/index"},"van-checkbox":{"path":"./../components/vant/checkbox/index"},"van-checkbox-group":{"path":"./../components/vant/checkbox-group/index"},"van-radio-group":{"path":"./../components/vant/radio-group/index"},"van-radio":{"path":"./../components/vant/radio/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"}},"on":{"9-0":["change"],"9-1":["input"],"9-2":["input"],"9-3":["input"],"9-4":["change"],"9-5":["change"],"9-6":["tap"],"9-7":["input"],"9-8":["change"],"9-9":["change"],"9-10":["tap"],"9-11":["input"],"9-12":["input"],"9-13":["submit"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCheck($event);
      })();
    
  }},'9-1': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.nameGet($event);
      })();
    
  }},'9-2': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'9-3': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.dormitoryGet($event);
      })();
    
  }},'9-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeDrop($event);
      })();
    
  }},'9-5': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeGet($event);
      })();
    
  }},'9-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'9-7': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.phoneGet($event);
      })();
    
  }},'9-8': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.downDrop($event);
      })();
    
  }},'9-9': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.quickGet($event);
      })();
    
  }},'9-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'9-11': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleGet($event);
      })();
    
  }},'9-12': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.messageGet($event);
      })();
    
  }},'9-13': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubmit($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-dropdown-item":{"path":"./../components/vant/dropdown-item/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-dropdown-menu":{"path":"./../components/vant/dropdown-menu/index"},"van-field":{"path":"./../components/vant/field/index"},"van-switch":{"path":"./../components/vant/switch/index"},"van-dialog":{"path":"./../components/vant/dialog/index"},"van-row":{"path":"./../components/vant/row/index"},"van-col":{"path":"./../components/vant/col/index"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-panel":{"path":"./../components/vant/panel/index"},"van-cell":{"path":"./../components/vant/cell/index"},"van-submit-bar":{"path":"./../components/vant/submit-bar/index"},"van-checkbox":{"path":"./../components/vant/checkbox/index"},"van-checkbox-group":{"path":"./../components/vant/checkbox-group/index"},"van-radio-group":{"path":"./../components/vant/radio-group/index"},"van-radio":{"path":"./../components/vant/radio/index"},"van-collapse":{"path":"./../components/vant/collapse/index"},"van-collapse-item":{"path":"./../components/vant/collapse-item/index"}},"on":{"9-0":["change"],"9-1":["input"],"9-2":["input"],"9-3":["input"],"9-4":["change"],"9-5":["change"],"9-6":["tap"],"9-7":["input"],"9-8":["change"],"9-9":["change"],"9-10":["tap"],"9-11":["input"],"9-12":["input"],"9-13":["submit"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCheck($event);
      })();
    
  }},'9-1': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.nameGet($event);
      })();
    
  }},'9-2': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uidGet($event);
      })();
    
  }},'9-3': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.dormitoryGet($event);
      })();
    
  }},'9-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeDrop($event);
      })();
    
  }},'9-5': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.timeGet($event);
      })();
    
  }},'9-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'9-7': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.phoneGet($event);
      })();
    
  }},'9-8': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.downDrop($event);
      })();
    
  }},'9-9': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.quickGet($event);
      })();
    
  }},'9-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.noop($event);
      })();
    
  }},'9-11': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.titleGet($event);
      })();
    
  }},'9-12': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.messageGet($event);
      })();
    
  }},'9-13': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubmit($event);
      })();
    
  }}}, models: {}, refs: undefined });