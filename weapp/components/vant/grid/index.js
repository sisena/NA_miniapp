"use strict";

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
  relation: {
    name: 'grid-item',
    type: 'descendant',
    current: 'grid'
  },
  props: {
    square: {
      type: Boolean,
      observer: 'updateChildren'
    },
    gutter: {
      type: [Number, String],
      value: 0,
      observer: 'updateChildren'
    },
    clickable: {
      type: Boolean,
      observer: 'updateChildren'
    },
    columnNum: {
      type: Number,
      value: 4,
      observer: 'updateChildren'
    },
    center: {
      type: Boolean,
      value: true,
      observer: 'updateChildren'
    },
    border: {
      type: Boolean,
      value: true,
      observer: 'updateChildren'
    }
  },
  data: {
    viewStyle: ''
  },
  created: function created() {
    var gutter = this.data.gutter;

    if (gutter) {
      this.setData({
        viewStyle: "padding-left: ".concat((0, _utils.addUnit)(gutter))
      });
    }
  },
  methods: {
    updateChildren: function updateChildren() {
      this.children.forEach(function (child) {
        child.updateStyle();
      });
    }
  }
});