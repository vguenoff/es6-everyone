const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

// for (const cut of cuts) {
//   console.log(cut);
// }

// for (const cut of cuts.entries()) {
//   console.log(cut);
// }

for (const [i, cut] of cuts.entries()) {
  console.log(`${cut} is the ${i + 1} item.`);
}

function addNumbers() {
  // console.log([1, 2, 3]);
  // console.log(arguments);
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  console.log(total);
  return total;
}

addNumbers(12, 7, 2, 3, 324, 54, 6456, 86, 8, 12, 3);

const name = 'Wes Bos';
for (const char of name) {
  console.log(char);
}

// // // 
const ps = document.querySelectorAll('p');
console.log(ps);
for (const paragraph of ps) {
  paragraph.addEventListener('click', function() {
    console.log(this.textContent);
  });
}