// Module CommonJS
const calc = require('../calculette');
const assert = require('assert');
const expect = require('chai').expect;

describe('Tests Calculette', () => {

    describe('Tests addition', () => {

        it('addition(1, 2) devrait faire 3', () => {
            assert.equal(calc.addition(1, 2), 3);
        });

    });

    describe('Tests multiplication', () => {

        it('multiplication(2, 3) devrait faire 6', () => {
            expect(calc.multiplication(2, 3)).to.equal(5, '2 * 3 = 6');
        });

    });

});

