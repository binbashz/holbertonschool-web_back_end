export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(nuevoAmount) {
    if (typeof nuevoAmount !== 'number') throw TypeError('Amount must be a number');
    this._amount = nuevoAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(nuevaCurrency) {
    this._currency = nuevaCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
