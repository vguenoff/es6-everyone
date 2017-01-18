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
document.body.innerHTML = markup;
document.body.innerHTML += '<p>+++++++++++++++++++++++++++++++</p>';

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
document.body.innerHTML += dogsMarkup;
document.body.innerHTML += '<p>+++++++++++++++++++++++++++++++</p>';

// beer
const song = {
  name: 'Dying to live',
  artist: 'Tupac',
  feturing: 'Biggie Smalls'
};

const songMarkup = `
  <p>
    ${song.name} - ${song.artist}
    ${song.feturing ? `(Featuring ${song.feturing})` : ''}
  </p>
`;
document.body.innerHTML += songMarkup;
document.body.innerHTML += '<p>+++++++++++++++++++++++++++++++</p>';

// beer
const beer = {
  name: 'Belgian Wit',
  brewery: 'Steam Whistle Brewary',
  keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};

function renderKeywords(keywords) {
  return `
    <ul>
      ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
    </ul>
  `;
}

const beerMarkup = `
  <div class="beer">
    <h2>${beer.name}</h2>
    <p class="brewery">${beer.brewery}</p>
    ${renderKeywords(beer.keywords)}
  </div>
`;
document.body.innerHTML += beerMarkup;
document.body.innerHTML += '<p>+++++++++++++++++++++++++++++++</p>';
