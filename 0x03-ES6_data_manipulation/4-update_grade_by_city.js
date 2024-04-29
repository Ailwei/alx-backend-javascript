/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */

export default function upateStudentGradeByCity(students, city, newGrades) {
	return students
	.filter(student => student.location === city)
	.map(student => {
		const gradeObj = newGrades.find(grade => grade.studentId  === student.id);
		const grade = gradeObj ? gradeObj.grade : 'N/A';
		return { ...student, grade };
	});
}
