/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      newGrades.map((grade) => {
        if (grade.studentId === student.id) {
          student.grade = grade.grade;
        }

        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
