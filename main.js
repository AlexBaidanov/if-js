export function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(2)(5));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

let i1 = -1;
let i2 = -1;
let i3 = -1;

export const colors = [
  'magenta',
  'cyan',
  'firebrick',
  'springgreen',
  'skyblue',
];

const textCol1 = () => {
  i1++;
  if (i1 > 4) i1 = 0;

  text1.style.color = colors[i1];
};
const textCol2 = () => {
  i2++;
  if (i2 > 4) i2 = 0;

  text2.style.color = colors[i2];
};
const textCol3 = () => {
  i3++;
  if (i3 > 4) i3 = 0;

  text3.style.color = colors[i3];
};

document.addEventListener('DOMContentLoaded', () => {
  text1.addEventListener('click', () => {
    textCol1();
  });
  text2.addEventListener('click', () => {
    textCol2();
  });
  text3.addEventListener('click', () => {
    textCol3();
  });
});

function replacer(match, year, month, date) {
  return [date, month, year].join('.');
}

const date = '1920-04-20';
console.log(date);

const newDate = date.replace(/(\d{4})\D(\d{1,2})\D(\d{1,2})/g, replacer);
console.log(newDate);

console.log('..............');
