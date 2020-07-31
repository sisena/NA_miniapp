"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    activeIndex: Number
  },
  data: {
    list: ['../mainpage/index', '../userinfo/index']
  },
  methods: {
    onChange: function onChange(e) {
      console.log(e.$wx);
    },
    onClick: function onClick(e) {
      var url = this.list[e.$wx.detail];
      wx.switchTab({
        url: url
      });
    }
  }
}, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./vant/tabbar/index"},"van-tabbar-item":{"path":"./vant/tabbar-item/index"}},"on":{"27-0":["change"]}}, handlers: {'27-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClick($event);
      })();
    
  }}}, models: {}, refs: undefined });