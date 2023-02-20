export default class SelectedConversionRates{
  constructor(startingCurrency, resultingCurrency) {
    this.startingCurrency = startingCurrency;
    this.resultingCurrency = resultingCurrency;
  }
  convert(input){
    if (this.resultingCurrency === null || this.startingCurrency === null) {
      return "this currency is not able to be read, pleae select a valid currency"
    } else {
    let result = input / this.startingCurrency * this.resultingCurrency;
    return result;
    }
  }
}