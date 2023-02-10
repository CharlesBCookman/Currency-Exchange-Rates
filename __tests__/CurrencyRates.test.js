import {Currency} from './../src/Template.js';

describe('Currency is a constructor grabbing currency exchange rate info from ExchangeRateAPI', () => {

  test('should get an object and supply a result of success', () => {
  let getCurrencyObject= Currency.getExchangeRates()
    expect(getCurrencyObject.result).toEqual("success");
  });
});
