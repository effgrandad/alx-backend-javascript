#!/usr/bin/env node



import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('No counterfeit here! You could be arrrested!');
    }
    this._amount = amount;
    this._currency = currency;
  }

  //get that cash
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  //setter for objects

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('No counterfeit here!');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and Conversion rates should be numbers');
    }
    return (amount * conversionRate);
  }
}
