// top level
const person = {
  first: 'Wes',
  last: 'Bos',
  country: 'Canaday',
  city: 'Hamilton',
  twitter: '@wesbos'
};

// destructing
const { first, last, twitter } = person;
console.log(first, last, twitter);

// nested
const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer'
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};

// destructing nested data
const { twitter: tweet, facebook: fb } = wes.links.social;
console.log(`twitter: ${tweet} / facebook: ${fb}`);

// defaults 
const settings = {left: 300, color: 'black'}; // right, fontSize
const { left = 100, right = 100, color = 'blue', fontSize = 25 } = settings;
console.log(left, right, color, fontSize);

// Object destructing with variable renaming & default values
const { w: width = 400, h: height = 500 } = { w: 800 };
console.log('w', width, 'h', height);