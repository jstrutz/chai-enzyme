'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tagName;
function tagName(_ref) {
  var wrapper = _ref.wrapper,
      markup = _ref.markup,
      arg1 = _ref.arg1,
      sig = _ref.sig;

  var actual = wrapper.tagName();

  this.assert(actual === arg1, function () {
    return 'expected ' + sig + ' to have a #{exp} tag name, but it has #{act} ' + markup();
  }, function () {
    return 'expected ' + sig + ' not to have a #{exp} tag name, but it has #{act} ' + markup();
  }, arg1, actual);
}