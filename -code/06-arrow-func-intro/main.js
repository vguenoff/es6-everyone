const names = ['wes', 'kait', 'lux'];

// const fullNames = names.map(function(name){
//   return `${name} bos`;
// });

const fullNames = names.map(name => `${name} bos`);
console.log(fullNames);

const sayMyName = name => console.log(`Hello ${name}!`);
sayMyName('Wes');