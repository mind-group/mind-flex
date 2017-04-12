'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Flex = require('components/Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var theme = _ref.theme;
  return _react2.default.createElement(
    'div',
    { className: theme.container },
    _react2.default.createElement(
      _Flex2.default,
      { nowrap: true },
      _react2.default.createElement(
        'div',
        { className: theme.box },
        '1'
      ),
      _react2.default.createElement(
        'div',
        { className: theme.box },
        '2'
      ),
      _react2.default.createElement(
        'div',
        { className: theme.box },
        '3'
      ),
      _react2.default.createElement(
        'div',
        { className: theme.box },
        '4'
      ),
      _react2.default.createElement(
        'div',
        { className: theme.box },
        '5'
      )
    )
  );
};