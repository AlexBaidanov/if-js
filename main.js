class User {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(User);

class Student extends User {
  constructor({ admissionYear, courseName, ...props }) {
    super(...props);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }
  course() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.admissionYear;
  }
}

console.log(Student);
