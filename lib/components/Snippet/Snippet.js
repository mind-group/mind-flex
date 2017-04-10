'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Editor = require('../Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Snippet = function (_React$Component) {
  _inherits(Snippet, _React$Component);

  function Snippet() {
    _classCallCheck(this, Snippet);

    return _possibleConstructorReturn(this, (Snippet.__proto__ || Object.getPrototypeOf(Snippet)).apply(this, arguments));
  }

  _createClass(Snippet, [{
    key: 'getCode',
    value: function getCode() {
      var path = this.props.path;

      return require('!raw-loader!../../examples/' + path);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          description = _props.description,
          name = _props.name,
          path = _props.path,
          theme = _props.theme;


      return _react2.default.createElement(
        _semanticUiReact.Segment,
        { style: { width: 600 } },
        _react2.default.createElement(
          _Flex2.default,
          { nowrap: true, style: { border: '1 solid #ffff' } },
          _react2.default.createElement(
            'div',
            { style: { width: '50%', padding: 10 } },
            _react2.default.createElement(
              _Flex2.default,
              { center: true, middle: true, style: { height: 200 } },
              require('../../examples/' + path).default({ theme: theme })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { width: '50%', padding: 10 } },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'strong',
                null,
                name
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              description
            )
          )
        ),
        _react2.default.createElement(
          _Flex2.default,
          null,
          _react2.default.createElement(_Editor2.default, {
            id: name,
            value: this.getCode()
          })
        )
      );
    }
  }]);

  return Snippet;
}(_react2.default.Component);

Snippet.propTypes = {
  description: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  path: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.object.isRequired
};
exports.default = Snippet;