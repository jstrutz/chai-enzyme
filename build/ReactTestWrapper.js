'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactCompat = require('enzyme/build/react-compat');

var _TestWrapper2 = require('./TestWrapper');

var _TestWrapper3 = _interopRequireDefault(_TestWrapper2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTestWrapper = function (_TestWrapper) {
  _inherits(ReactTestWrapper, _TestWrapper);

  function ReactTestWrapper(wrapper) {
    _classCallCheck(this, ReactTestWrapper);

    var _this = _possibleConstructorReturn(this, (ReactTestWrapper.__proto__ || Object.getPrototypeOf(ReactTestWrapper)).call(this));

    _this.wrapper = wrapper;
    return _this;
  }

  _createClass(ReactTestWrapper, [{
    key: 'inspect',
    value: function inspect() {
      var name = this.wrapper.root.node.constructor.displayName || this.wrapper.root.node.constructor.name || '???';

      if (this.wrapper.root === this.wrapper) {
        return '<' + name + ' />';
      }

      return 'the node in <' + name + ' />';
    }
  }, {
    key: 'attr',
    value: function attr(name) {
      if (this.el.hasAttribute(name)) {
        return this.el.getAttribute(name) || '';
      }
    }
  }, {
    key: 'html',
    value: function html() {
      return this.el.outerHTML.replace(/\sdata-reactid+="[^"]+"/g, '');
    }
  }, {
    key: 'style',
    value: function style(name) {
      return this.el.style[name] || undefined;
    }
  }, {
    key: 'tagName',
    value: function tagName() {
      return this.el.tagName.toLowerCase();
    }
  }, {
    key: 'data',
    value: function data(name) {
      return this.attr('data-' + name);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(name) {
      var classes = this.classNames().split(' ');
      return classes.indexOf(name) !== -1;
    }
  }, {
    key: 'classNames',
    value: function classNames() {
      return this.el.className;
    }
  }, {
    key: 'id',
    value: function id() {
      return this.el.id;
    }
  }, {
    key: 'value',
    value: function value() {
      return this.el.value;
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.el.checked;
    }
  }, {
    key: 'isSelected',
    value: function isSelected() {
      return this.el.selected;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.el.disabled;
    }
  }, {
    key: 'is',
    value: function is(selector) {
      return this.wrapper.is(selector);
    }
  }, {
    key: 'hasNode',
    value: function hasNode(node) {
      return this.wrapper.contains(node);
    }
  }, {
    key: 'hasRef',
    value: function hasRef(ref) {
      return !!this.wrapper.instance().refs[ref];
    }
  }, {
    key: 'type',
    value: function type() {
      return this.wrapper.type();
    }
  }, {
    key: 'el',
    get: function get() {
      if (!this.__el) {
        this.__el = this.wrapper.single(function (n) {
          return (0, _reactCompat.findDOMNode)(n);
        });
      }

      return this.__el;
    }
  }]);

  return ReactTestWrapper;
}(_TestWrapper3.default);

exports.default = ReactTestWrapper;