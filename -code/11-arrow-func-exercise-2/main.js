// Given this array: `[3, 62, 234, 7, 23, 74, 23, 76, 92]`, use the array filter method and an arrow function to create an array of the numbers grater then `70`

const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]
  .filter(num => num > 70);

const large = numbers.filter(num => num > 70);
console.log(large);
