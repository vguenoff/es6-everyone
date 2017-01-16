// person
const person = {
    name: 'Wes',
    job: 'Web Developer',
    city: 'Hamilton',
    bio: 'Wes is really cool guy who likes to teach web development'
};

const personMarkup = `
    <div class="person">
        <h2>
            ${person.name}
            <span class="job">${person.job}</span>
        </h2>
        <p class="location">${person.city}</p>
        <p class="bio">${person.bio}</p>
    </div>
`;

// add the person markup
document.body.innerHTML = personMarkup;

// dogs
const dogs = [
    {name: 'Snickers', age: 2},
    {name: 'Hugo', age: 8},
    {name: 'Sunny', age: 1}
];

const dogsMarkup = `
    <ul class="dogs">
        ${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7} dog years old.</li>`).join('')}
    </ul>
`;

// add the dog markup
document.body.innerHTML += '+++++++++++++++++++++++++++';
document.body.innerHTML += dogsMarkup;

// song
const song = {
    name: 'Dying to live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls'
};

const songMarkup = `
    <div class="song">
        <p>
            ${song.name} - ${song.artist}
            ${song.featuring ? `(featuring ${song.featuring})` : ''}
        </p>
    </div>
`;

// add the song markup
document.body.innerHTML += '+++++++++++++++++++++++++++';
document.body.innerHTML += songMarkup;

// beer
const beer = {
    name: 'Belgian Wit',
    brewery: 'Steam Whistle Brewery',
    keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};

const renderKeywords = keywords => {
    return `
        <ul>
            ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
        </ul>
    `;
};

const beerMarkup = `
    <div class="beer">
        <h2>${beer.name}</h2>
        <p class="brewery">${beer.brewery}</p>
        ${renderKeywords(beer.keywords)}
    </div>

`;
// <p>${beer.name} is ${beer.keywords.map(keyword => `${keyword}`).join(', ')} beer.</p>

// add the beer markup
document.body.innerHTML += '+++++++++++++++++++++++++++';
document.body.innerHTML += beerMarkup;