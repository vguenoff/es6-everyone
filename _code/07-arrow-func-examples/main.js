const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));

console.table(win);
console.log(win);

const ages = [12, 23, 4, 77, 34, 33, 11, 5, 66, 34, 78, 99];
const old = ages.filter(age => age >= 60);

console.log(old);
