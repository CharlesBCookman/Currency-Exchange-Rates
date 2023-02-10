//UI logic

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './CurrencyRates.js';

function getRates() {
  Currency.getExchangeRates()
    .then(function (response) {
      if (response.result) {
        conversionRatesAll(response.conversion_rates);
      } else {
        printError(response);
      }
    });
}

function conversionRatesAll(response) {

  }

function getCurrenciesgit (firstCurrency, secondCurrency)

function printError() {
  alert('something went wrong');
}

function handleFormSubmission() {
  getRates();
}

window.addEventListener("load", function () {
  if (window.location.href.match('top5.html') != null) {
    handleFormSubmission();

  }

});

