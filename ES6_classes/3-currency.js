export default class Currency {
	constructor(code, name) {
	if (typeof code !== 'string') throw TypeError('Code must be  string');
	if (typeof name !== 'string') throw TypeError('Name must be  string');
	this._code = code;
	this._name = name;
	}
  
	get code() {
	return this._code;
	}
  
	set code(nuevoCode) {
	if (typeof nuevoCode !== 'string') throw TypeError('Code must be a string');
	this._code = nuevoCode;
	}
  
	get name() {
	return this._name;
	}
  
	set name(nuevoName) {
	if (typeof nuevoName !== 'string') throw TypeError('Name must be a string');
	this._name = nuevoName;
	}
  
	displayFullCurrency() {
	return `${this.name} (${this.code})`;
	}
		}
