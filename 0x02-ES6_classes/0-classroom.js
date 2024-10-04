#!/usr/bin/env node

/**
 * dipiction of a class room
 */
export default class ClassRoom
{
	/**
	 * make a new @see {@link ClassRoom}.
	 * @para {Number} maxStudentsSize - The highest quantity of
	 * pupils allowed in the course
	 */
	constructor(maxStudentsSize)
	{
		this._maxStudentsSize = maxStudentsSize;
	}
}
