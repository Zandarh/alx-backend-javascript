export default function getListStudents() {
  const studentArray = [];

  studentArray.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  studentArray.push({ id: 2, firstName: 'James', location: 'Columbia' });
  studentArray.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });

  return studentArray;
}
