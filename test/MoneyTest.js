/* global money*/

var assert = require('assert').strict;
require('../src/Money');

var propertyOfCurrency = function propertyOfCurrency(actual) {
	return {
		shouldBe: function shouldBe(expected) {
			assert.equal(actual, expected);
		}
	};
};

var symbolOfCurrency = function symbolOfCurrency(currencyConstructor) {
	return propertyOfCurrency(new currencyConstructor().getCurrencySymbol());
};

var valueOfCurrency = function valueOfCurrency(currencyConstructor, value) {
	return propertyOfCurrency(new currencyConstructor(value).getValue());
};

describe('Money', () => {

	describe('currency symbol', () => {
		it('Euros should return EUR as currency symbol', () => {
			symbolOfCurrency(money.Euros).shouldBe('EUR');
		});

		it('Francs should return SFR as currency symbol', () => {
			symbolOfCurrency(money.Francs).shouldBe('SFR');
		});
	});

	describe('value', () => {
		it('Euros should return its value', () => {
			valueOfCurrency(money.Euros, 6).shouldBe(6);
		});

		it('Francs should return its value', () => {
			valueOfCurrency(money.Francs, 4.5).shouldBe(4.5);
		});
	});

	describe('addition', () => {
		it('evaluating th addition of Euros returns their value', () => {
			var fiveEuros = new money.Euros(5);
			var sixEuros = new money.Euros(6);
			var sum = fiveEuros.plus(sixEuros);
			assert.equal(sum.getValue(), 11);
		});

		it('evaluating th addition of Francs returns their value', () => {
			var twoFrancs = new money.Francs(2);
			var tenFrancs = new money.Francs(10);
			var sum = twoFrancs.plus(tenFrancs);
			assert.equal(sum.getValue(), 12);
		});
	});
});  