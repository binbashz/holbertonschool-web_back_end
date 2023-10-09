export default function updateStudentGradeByCity(students, city, newGrades) {
  // Use filter to select students belonging to the specified city
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find a matching grade object for the student by studentId
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      // Create a new student object with updated grade
      return {
        ...student,             // Spread the existing student properties
        grade: newGrade ? newGrade.grade : 'N/A', // Update the grade based on newGrades or set to 'N/A' if not found
      };
    });
}

