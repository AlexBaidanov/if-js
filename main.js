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
