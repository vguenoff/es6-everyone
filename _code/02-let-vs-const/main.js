const key = 'abc123';
let points = 50;
let winner = false;

// let points = 60; error
if(points > 40) {
    console.log('it ran1');
    winner = true;
}

points = 60;
console.log(points);

// key = 'abc123'; // error

const person = {
    name: 'Vassil',
    age: '30'
};
console.log(person);
person.age++;

console.log(person);