const apple = {
  color: 'red',
  size: 'medium',
  weight: 50,
  sugar: 10
};

// for (const prop of apple) {
//   console.log(prop);
// }

// for (const prop of apple.entries()) {
//   console.log(prop);
// }

for (const prop of Object.keys(apple)) {
  console.log(prop, apple[prop]);
}
console.log('\\\\\\\\\\\\\\\\\\');
for (const prop in apple) {
  console.log(prop, apple[prop]);
}



