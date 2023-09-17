export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // this method return a new object of the same class
  cloneCar() {
    return new this.constructor();
  }
}
