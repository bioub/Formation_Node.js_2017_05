// Module CommonJS
const calc = require('./calculette');
const assert = require('assert');

assert.equal(calc.addition(1, 2), 3);
