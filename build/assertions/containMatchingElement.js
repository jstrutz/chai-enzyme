'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = containMatchingElement;

var _reactElementToJsxString = require('react-element-to-jsx-string');

var _reactElementToJsxString2 = _interopRequireDefault(_reactElementToJsxString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function containMatchingElement(_ref) {
  var wrapper = _ref.wrapper,
      markup = _ref.markup,
      arg1 = _ref.arg1,
      sig = _ref.sig;

  var arg1JSXString = (0, _reactElementToJsxString2.default)(arg1);

  this.assert(wrapper.wrapper.containsMatchingElement(arg1), function () {
    return 'expected ' + sig + ' to contain matching ' + arg1JSXString + markup();
  }, function () {
    return 'expected ' + sig + ' not to contain matching ' + arg1JSXString + markup();
  }, arg1);
}