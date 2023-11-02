function studentGrades(input) {
  const students = new Map();

  for (const line of input) {
    const [name, ...grades] = line.split(' ');
    const studentName = name;

    if (!students.has(studentName)) {
      students.set(studentName, []);
    }

    students.get(studentName).push(...grades.map(Number));
  }

  const sortedStudents = Array.from(students).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, grades] of sortedStudents) {
    const averageGrade = (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);
    console.log(`${name}: ${averageGrade}`);
  }
}

const input = [
  'Lilly 4 6 6 5',
  'Tim 5 6',
  'Tammy 2 4 3',
  'Tim 6 6'
];

studentGrades(input);
