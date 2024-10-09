export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/**
 * Create two students, and create an array named studentsList
 * containing the two variables
 */

const student1: Student = {
  firstName: 'Lebogang',
  lastName: 'Mojapelo',
  age: 25,
  location: 'Polokwane',
};

const student2: Student = {
  firstName: 'Mpho',
  lastName: 'MOlatjane',
  age: 29,
  location: 'Pretoria',
};

const studentsList: Array<Student> = [
  student1,
  student2,
];


/**
 * Create a table using Vanilla Javascript, then add a new row to the table
 * for each element in the array
 * 
 * The location and the student's first name should appear in each row
 */

export const renderTable = (studentsList: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
