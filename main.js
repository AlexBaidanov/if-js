const pali = 'шалаш';
console.log(pali);

const palindrome = function (pali) {
  if (
    pali[0] === pali[pali.length - 1] &&
    pali[1] === pali[pali.length - 2] &&
    pali[2] === pali[pali.length - 3]
  ) {
    return 'true';
  }
  return 'false';
};
console.log(palindrome(pali));

console.log('-----');

const min = function (a, b) {
  if (a <= b) {
    return a;
  }
  return b;
};
console.log(min(5, 25));

console.log('-----');

const max = function (a, b) {
  if (a >= b) {
    return a;
  }
  return b;
};
console.log(max(5, 25));

console.log('-----');

const arr = [10, 25, 30, 45, 50, 65, 70, 85, 90, 1];
console.log(arr);
const change = function (numb) {
  const replase = `${numb}`;
  if (replase.includes('0')) {
    return `${numb}`.replaceAll('0', 'zero');
  }
  return numb;
};
console.log(arr.map(change).join(', '));
