//UI logic

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './CurrencyRates.js';

function getRates() {
  Currency.getExchangeRates()
    .then(function (response) {
      if (response.result) {
        getAllCurrencyRates(response.conversion_rates);
      } else {
        printError(response);
      }
    });
}

function getAllCurrencyRates(response) {
  Object.entries(response).forEach(entry => {
    const [key, value] = entry;
    console.log(key, value);
  });
}

// function convertCurrencies(quantity, firstCurrency, secondCurrency){
//   let currencyRates = getRates();
//   let startingCurrencyRate = currencyRates[firstCurrency];
//   let resultingCurrencyRate = currencyRates[secondCurrency];
//   let resultingValue = quantity * startingCurrencyRate / resultingCurrencyRate;
//   return resultingValue;
// }

function printError() {
  alert('something went wrong');
}


window.addEventListener("load", function () {
  getRates();
});

