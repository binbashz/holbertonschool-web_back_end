function getListStudentIds(studentList) {
  // Verifica si studentList es un array
  if (!Array.isArray(studentList)) {
    return [];
  }

  // Usa map() para extraer los IDs y crear un nuevo array
  const idList = studentList.map((student) => student.id);

  return idList;
}
export default getListStudentIds;
