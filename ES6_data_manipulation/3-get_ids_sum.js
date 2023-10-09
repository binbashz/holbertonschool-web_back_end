// import the getListStudents function to get the list of students
// Define the getStudentIdsSum function that calculates the sum of student IDs
exprot defaul function getStudentIdsSum(students) {
  // Use the reduce method to iterate through the array of students and accumulate the sum
  const total = students.reduce((sumar, student) => sumar + student.id, 0);
  // Return the final accumulated sum
  return total;
}
