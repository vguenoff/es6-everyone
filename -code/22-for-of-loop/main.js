const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

// for (let i = 0; i < cuts.length; i++) {
//   console.log(cuts[i]);
// }

// cuts.forEach(cut => {
//   console.log(cut);
//   if (cut === 'Brisket') {
//     break; // error with break and continue
//   } 
// });

// for (const index in cuts) {
//   console.log(cuts[index]);
// }

for (const cut of cuts) {
  if (cut === 'Brisket') {
    continue; 
  } 
  console.log(cut);
}
