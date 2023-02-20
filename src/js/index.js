//UI logic

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from './CurrencyRates.js';
import SelectedConversionRates from './Conversion.js';

function getRates() {
  Currency.getExchangeRates()
    .then(function (response) {
      if (response.result) {
        getAllCurrencyRates(response.conversion_rates);
        return response.conversion_rates;
      } else {
        printError(response);
      }
    });
}

function getAllCurrencyRates(response) {
  console.log(response.USD);
  const USDRadioInput = document.getElementById("input-USD");
  const USDRadioOutput = document.getElementById("output-USD");
  const AUDRadioInput = document.getElementById("input-AUD");
  const AUDRadioOutput = document.getElementById("output-AUD");
  const BRLRadioInput = document.getElementById("input-BRL");
  const BRLRadioOutput = document.getElementById("output-BRL");
  const CADRadioInput = document.getElementById("input-CAD");
  const CADRadioOutput = document.getElementById("output-CAD");
  const CNYRadioInput = document.getElementById("input-CNY");
  const CNYRadioOutput = document.getElementById("output-CNY");
  const JPYRadioInput = document.getElementById("input-JPY");
  const JPYRadioOutput = document.getElementById("output-JPY");
  const KRWRadioInput = document.getElementById("input-KRW");
  const KRWRadioOutput = document.getElementById("output-KRW");
  const MXNRadioInput = document.getElementById("input-MXN");
  const MXNRadioOutput = document.getElementById("output-MXN");
  const RUBRadioInput = document.getElementById("input-RUB");
  const RUBRadioOutput = document.getElementById("output-RUB");
  const INRRadioInput = document.getElementById("input-INR");
  const INRRadioOutput = document.getElementById("output-INR");
  USDRadioInput.setAttribute("value", response.USD.toString());
  USDRadioOutput.setAttribute("value", response.USD.toString());
  AUDRadioInput.setAttribute("value", response.AUD.toString());
  AUDRadioOutput.setAttribute("value", response.AUD.toString());
  BRLRadioInput.setAttribute("value", response.BRL.toString());
  BRLRadioOutput.setAttribute("value", response.BRL.toString());
  CADRadioInput.setAttribute("value", response.CAD.toString());
  CADRadioOutput.setAttribute("value", response.CAD.toString());
  CNYRadioInput.setAttribute("value", response.CNY.toString());
  CNYRadioOutput.setAttribute("value", response.CNY.toString());
  JPYRadioInput.setAttribute("value", response.JPY.toString());
  JPYRadioOutput.setAttribute("value", response.JPY.toString());
  KRWRadioInput.setAttribute("value", response.KRW.toString());
  KRWRadioOutput.setAttribute("value", response.KRW.toString());
  MXNRadioInput.setAttribute("value", response.MXN.toString());
  MXNRadioOutput.setAttribute("value", response.MXN.toString());
  RUBRadioInput.setAttribute("value", response.RUB.toString());
  RUBRadioOutput.setAttribute("value", response.RUB.toString());
  INRRadioInput.setAttribute("value", response.INR.toString());
  INRRadioOutput.setAttribute("value", response.INR.toString());
}

function printError() {
  alert('something went wrong');
}


window.addEventListener("load", function () {
  const outputButton = document.querySelector('#get-output');
  getRates();
  outputButton.onclick = (event) => {
    event.preventDefault();
    let numberInput = document.querySelector('#number-input').value;
    console.log(numberInput);
    let startingCurrency = document.querySelector('input[name="input"]:checked').value;
    let resultingCurrency = document.querySelector('input[name="output"]:checked').value;
    let currencies = new SelectedConversionRates(startingCurrency, resultingCurrency);
    document.querySelector('#results').innerText = currencies.convert(numberInput);
  }
});

