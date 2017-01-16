const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));
console.table(win);

const ages = [12, 35, 46, 56, 66 , 67, 100];
const old = ages.filter(age => age >= 60);
console.log(old);