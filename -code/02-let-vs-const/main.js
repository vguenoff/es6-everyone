// const key = 'abc123';
let points = 50;
let winner = false;

// let points = 60; error

if(points > 40) {
  console.log('it ran');
  let winner = true;
  console.log('winner', winner); 
}
console.log('winner', winner); 

const person = {
  name: 'Wes',
  age: 28
};
console.log(person);

person.age = 29;
console.log(person);

const wes = Object.freeze(person);
wes.age = 30;
console.log(wes);
