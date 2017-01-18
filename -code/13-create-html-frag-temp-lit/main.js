// person
const person = {
  name: 'Wes',
  job: 'Web Developer',
  city: 'Hamilton',
  bio: 'Wes is really cool guy who likes to teach web development'
};

const markup = `
  <div class="person">
    <h2>
      ${person.name}
      <span class="job">${person.job}</span>
    </h2>
    <p class="location">${person.city}</p>
    <p class="bio">${person.bio}</p>
  </div>  
`;
console.log(markup);
document.body.innerHTML = markup;
document.body.innerHTML += '+++++++++++++++++++++++++++++++';

// dogs
const dogs = [
  {name: 'Snickers', age: 2},
  {name: 'Hugo', age: 8},
  {name: 'Sunny', age: 1}
];

const dogsMarkup = `
  <ul class="dogs">
    ${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7} years</li>`).join('')}
  </ul>
`;
console.log(dogsMarkup);
document.body.innerHTML += dogsMarkup;
document.body.innerHTML += '+++++++++++++++++++++++++++++++';
