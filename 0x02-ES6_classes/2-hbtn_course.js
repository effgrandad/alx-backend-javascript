#!/usr/bin/env node

/**
 * dipiction of Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Generates a new @see {@link HolbertonCourse}.
   *
   * @para {String} name - name of the course.
   * @para {Number} length - duration of the course (in months).
   * @para {String[]} students - names of students in the course.
   */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (!Number.isInteger(length)) {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._name = name,
    this._length = length;
    this._students = students;
  }

  /* define the getters for the class */
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newlength) {
    if (typeof newlength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newlength;
  }

  set students(studArray) {
    if (!Array.isArray(studArray)) {
      throw new TypeError('Students must be an array');
    }
    this._students = studArray;
  }
}
