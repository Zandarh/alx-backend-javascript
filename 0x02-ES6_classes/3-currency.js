export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(theCode) {
    this._code = theCode;
  }

  get name() {
    return this._name;
  }

  set name(theName) {
    this._name = theName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
