export default function getStudentsByLocation(students, city) {
// filtre the studen by city
		return students.filter((student) => student.location === city);
}
