'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Flex = require('./Flex.css');

var _Flex2 = _interopRequireDefault(_Flex);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flex = function (_React$Component) {
  _inherits(Flex, _React$Component);

  function Flex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Flex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Flex.__proto__ || Object.getPrototypeOf(Flex)).call.apply(_ref, [this].concat(args))), _this), _this.classNames = function (classList) {
      var _this$props = _this.props,
          className = _this$props.className,
          fluid = _this$props.fluid,
          page = _this$props.page;

      return _classnames2.default.apply(undefined, _toConsumableArray(classList).concat([className, fluid && _Flex2.default.fluid, page && _Flex2.default.page]));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Flex, [{
    key: 'renderMiddle',
    value: function renderMiddle() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;


      return _react2.default.createElement(
        'div',
        {
          className: this.classNames([_Flex2.default.middle]),
          style: style
        },
        _react2.default.createElement(
          'div',
          null,
          children
        )
      );
    }
  }, {
    key: 'renderCenterMidlle',
    value: function renderCenterMidlle() {
      var _props2 = this.props,
          children = _props2.children,
          style = _props2.style;


      return _react2.default.createElement(
        'div',
        {
          className: this.classNames([_Flex2.default.middle]),
          style: style
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            Flex,
            { center: true },
            children
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          center = _props3.center,
          column = _props3.column,
          middle = _props3.middle,
          nowrap = _props3.nowrap,
          reverse = _props3.reverse,
          style = _props3.style,
          wrap = _props3.wrap;


      if (center && middle) return this.renderCenterMidlle();
      if (middle) return this.renderMiddle();

      var klass = center ? _Flex2.default.center : column && reverse ? _Flex2.default.columnReverse : column ? _Flex2.default.column : nowrap ? _Flex2.default.nowrap : reverse ? _Flex2.default.reverse : wrap ? _Flex2.default.wrap : _Flex2.default.default;

      return _react2.default.createElement(
        'div',
        {
          className: this.classNames([klass]),
          style: style
        },
        this.props.children
      );
    }
  }]);

  return Flex;
}(_react2.default.Component);

Flex.propTypes = {
  center: _propTypes2.default.bool,
  column: _propTypes2.default.bool,
  fluid: _propTypes2.default.bool,
  middle: _propTypes2.default.bool,
  nowrap: _propTypes2.default.bool,
  page: _propTypes2.default.bool,
  wrap: _propTypes2.default.bool
};
exports.default = (0, _withStyles2.default)(_Flex2.default)(Flex);