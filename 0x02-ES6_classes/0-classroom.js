#!/usr/bin/env node

//eslint-disable no-underscore-dangle

/**
 * dipiction of a class room
 *
 * make a new @see {@link ClassRoom}.
 * @para {Number} maxStudentsSize - The highest quantity of
 * pupils allowed in the course
 */
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
