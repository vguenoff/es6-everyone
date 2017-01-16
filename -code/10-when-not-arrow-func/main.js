// when you rally need 'this'
const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
  console.log(this);
  this.classList.toggle('on');
});

// when you need a method to bind to an object
const person = {
  points: 23,
  score() {
    console.log(this);
    this.points++;
  }
};

console.log(person.points);
person.score();
console.log(person.points);

// when you need to add a prototype method
class Car {
  constructor(make, color) {
    this.make = make;
    this.color = color;
  }
}

const beemer = new Car('bmw', 'blue');
const subie = new Car('subaru', 'white');

Car.prototype.summerize = function() {
  console.log(this);
  return `This car is ${this.make} in the color ${this.color}.`;
};

console.log(beemer.summerize());
console.log(subie.summerize());

// when you need arguments object
const orderChildren = function() {
  console.log(arguments);
  const children = Array.from(arguments);
  return children.map((child, i) => {
    return `${child} was chlid #${i + 1}`;
  });
};

console.log(
  orderChildren('jill', 'wes', 'jenna')
);