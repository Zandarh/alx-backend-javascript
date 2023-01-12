export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must b a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new TypeError('must be an array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(theName) {
    if (typeof theName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = theName;
  }

  get length() {
    return this._length;
  }

  set length(theLength) {
    if (typeof theLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = theLength;
  }

  get students() {
    return this._students;
  }

  set students(theStudents) {
    if (!Array.isArray(theStudents)) {
      throw new TypeError('must be an array');
    }
    this._students = theStudents;
  }
}
