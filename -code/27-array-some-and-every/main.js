const ages = [32, 15, 19, 12];

// is there at least one adult in the group
const adultPresent = ages.some(age => age > 18);
console.log(adultPresent);

// is everyone old enough to drink
const allOldEnough = ages.every(age => age >= 19);
console.log(allOldEnough);