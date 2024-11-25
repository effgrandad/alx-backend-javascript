const fs = require('fs');

/**
 * counts the students in CSV daya file
 * @para {str} dataPath oath to the CSV data file.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    /*count the database file asynchronously*/
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

        const totalStudents = lines.length - 1;

        /*Initialize objects to store counts and first names*/
        const studentsByField = {};
        const firstNamesByField = {};

        /* eslint-disable no-plusplus */
        for (let i = 1; i < lines.length; i++) {
          const fields = lines[i].split(',');
          const field = fields[3].trim();
          const firstName = fields[0].trim();

          studentsByField[field] = (studentsByField[field] || 0) + 1;

          firstNamesByField[field] = (firstNamesByField[field] || []).concat(firstName);
        }

        console.log(`Number of students: ${totalStudents}`);
        for (const field in studentsByField) {
          if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
            const count = studentsByField[field];
            const firstNames = firstNamesByField[field].join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${firstNames}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
