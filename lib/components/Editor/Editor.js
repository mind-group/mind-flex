'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _brace = require('brace');

var _brace2 = _interopRequireDefault(_brace);

require('brace/ext/language_tools');

require('brace/mode/jsx');

require('brace/mode/html');

require('brace/theme/tomorrow');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAce = require('react-ace');

var _reactAce2 = _interopRequireDefault(_reactAce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-next-line


var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor() {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));
  }

  _createClass(Editor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          mode = _props.mode,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['id', 'mode', 'value']);

      return _react2.default.createElement(_reactAce2.default, _extends({
        name: id,
        mode: mode,
        theme: 'tomorrow',
        width: '100%',
        height: '100px',
        value: value,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        editorProps: { $blockScrolling: Infinity },
        highlightActiveLine: false,
        maxLines: Infinity,
        showGutter: false,
        showPrintMargin: false,
        tabSize: 2
      }, rest));
    }
  }]);

  return Editor;
}(_react2.default.Component);

Editor.propTypes = {
  id: _propTypes2.default.string.isRequired,
  mode: _propTypes2.default.oneOf(['html', 'jsx']),
  value: _propTypes2.default.string.isRequired
};
Editor.defaultProps = {
  mode: 'jsx'
};
exports.default = Editor;