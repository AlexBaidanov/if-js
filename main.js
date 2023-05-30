let user = 'John Doe';
console.log(user);

const student = 'Alex';
console.log(student);

user = student;
console.log(user);

console.log('-----');

let test;
test = 1;
console.log(test);
test++;
console.log(test);
test += '1';
console.log(test);
test--;
console.log(test);
test = true;
console.log(test);

console.log('-----');

const mass = [2, 3, 5, 8];

let result = 1;
for (let i = 0; i < mass.length; i++) {
  result = result * mass[i];
}
console.log(result);

console.log('-----');

const arr = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5 && arr[i] < 10) {
    console.log(arr[i]);
  }
}

console.log('-----');

const massarr = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < massarr.length; i++) {
  if (massarr[i] % 2 === 0) {
    console.log(massarr[i]);
  }
}
