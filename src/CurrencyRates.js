//Business Logic

export default class Currency {
  static getExchangeRates() {

    return fetch(`https://v6.exchangerate-api.com/v6/57add13920ab87b9e1d0b539/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}