const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    const data = await readFile(process.argv[2], 'utf8');

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    const totalStudents = lines.length - 1;

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
    const response = [];
    response.push('This is the list of our students');
    response.push(`Number of students: ${totalStudents}`);
    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const count = studentsByField[field];
        const firstNames = firstNamesByField[field].join(', ');
        response.push(`Number of students in ${field}: ${count}. List: ${firstNames}`);
      }
    }

    res.send(`${response.join('\n')}\n`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error\n');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;i
