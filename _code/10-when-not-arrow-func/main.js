// when you rally need this
const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle('on');
});

// when you need a method to bind to an objet
const person = {
    points: 23,
    score() {
        this.points++;       
        console.log(this);
    }
};

person.score();
person.score();
person.score();

// when you need to add a prototype method
class Car {
    constructor(make, color) {
        this.make = make;
        this.color = color;
    }
}

const beemer = new Car('bmw', 'blue');
const subie = new Car('subaru', 'white');

Car.prototype.summarize = function() {
    return `This car is ${this.make} in the color ${this.color}.`;
};

console.log(beemer.summarize());
console.log(subie.summarize());

// when you need arguments object
const orderChildren = function() {
    const children = Array.from(arguments);
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    });
};

console.log(orderChildren('Jach', 'Jill', 'Jhon'));