// array form

// const people = Array.from(document.querySelectorAll('.people p'));
//
// console.log(people);
// const names = people.map(person => person.textContent);
// console.log(names);
//

const people = document.querySelectorAll('.people p');
// second argument - map function
const peopleArray = Array.from(people, person => person.textContent);
console.log(peopleArray);

function sumAll() {
  console.log(arguments);
  const nums = Array.from(arguments);
  return nums.reduce((prev, next) => prev + next, 0);
}

console.log(`The sum of all arguments is ${sumAll(1, 2, 34, 4, 5, 6, 6, 6, 7, 78)}.`);

// array of
const ages = Array.of(1, 2, 33, 46, 7, 78, 5);
console.log(ages);