"use strict";

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'radio-group',
    type: 'ancestor',
    current: 'radio'
  },
  classes: ['icon-class', 'label-class'],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: String,
    labelPosition: {
      type: String,
      value: 'right'
    },
    labelDisabled: Boolean,
    shape: {
      type: String,
      value: 'round'
    },
    iconSize: {
      type: null,
      value: 20
    }
  },
  methods: {
    emitChange: function emitChange(value) {
      var instance = this.parent || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
    },
    onChange: function onChange() {
      if (!this.data.disabled) {
        this.emitChange(this.data.name);
      }
    },
    onClickLabel: function onClickLabel() {
      var _this$data = this.data,
          disabled = _this$data.disabled,
          labelDisabled = _this$data.labelDisabled,
          name = _this$data.name;

      if (!disabled && !labelDisabled) {
        this.emitChange(name);
      }
    }
  }
});