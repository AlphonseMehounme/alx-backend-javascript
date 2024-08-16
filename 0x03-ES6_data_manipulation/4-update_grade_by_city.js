export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  const gradedStudents = cityStudents.map((student) => {
    const theGrade = newGrades.filter((studentGrad) => studentGrad.studentId === student.id);
    const newStudents = student;
    if (theGrade.length === 0) {
      newStudents.grade = 'N/A';
    } else {
      newStudents.grade = theGrade[0].grade;
    }
    return newStudents;
  });
  return gradedStudents;
}
