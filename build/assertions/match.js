'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = match;
function match(_ref) {
  var wrapper = _ref.wrapper,
      markup = _ref.markup,
      arg1 = _ref.arg1,
      sig = _ref.sig;

  this.assert(wrapper.is(arg1), function () {
    return 'expected ' + sig + ' to match #{exp} ' + markup();
  }, function () {
    return 'expected ' + sig + ' not to match #{exp} ' + markup();
  }, arg1);
}