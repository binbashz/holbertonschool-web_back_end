export default function getStudentIdsSum(students) {
  // Use the reduce method to iterate through the array of students and accumulate the sum
  const total = students.reduce((sumar, student) => sumar + student.id, 0);
  // Return the final accumulated sum
  return total;
}
