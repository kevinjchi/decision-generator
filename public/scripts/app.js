'use strict';

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = _react2.default.createElement(
  'p',
  null,
  'testing jsx'
); // import './utils.js'
// import validator from 'validator'

_reactDom2.default.render(template, document.getElementById('app'));

console.log('app.js is running');

console.log((0, _utils.square)(4));
console.log((0, _utils.add)(15, 1));
console.log((0, _utils.sub)(15, 1));

console.log((0, _utils2.default)(115, 1));
