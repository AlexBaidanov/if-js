class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }
  get course() {
    const currentYear = 2023;
    return currentYear - this.admissionYear;
  }
}

class Students {
  constructor(students) {
    this.students = students.map(
      (student) =>
        new Student(
          student.firstName,
          student.lastName,
          student.admissionYear,
          student.courseName,
        ),
    );
  }
  getInfo() {
    return this.students
      .sort((a, b) => a.course - b.course)
      .map(
        (student) =>
          `${student.fullName} - ${student.courseName}, ${student.course} курс`,
      );
  }
}

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

const students = new Students(studentsData);
console.log(students.getInfo());
