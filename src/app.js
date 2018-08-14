// import './utils.js'
// import validator from 'validator'
import defaultsub, { square, add, sub } from './utils.js';
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>testing jsx</p>;
ReactDOM.render(template, document.getElementById('app'))


console.log('app.js is running');

console.log(square(4));
console.log(add(15, 1));
console.log(sub(15,1));

console.log(defaultsub(115,1));

