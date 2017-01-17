// Select all the list items on the page and convert to array
const list = Array.from(document.querySelectorAll('li'));
// Filter for only the elements that contain the word 'flexbox'
const flexList = list.filter(li => li.innerText.toLowerCase().includes('flexbox'));
// map down to a list of time strings
console.log(flexList[0].attributes['data-time'].value);
const flexTime = flexList.map(i => flexList[i].attributes['data-time'].value);
console.log(flexTime);
// function to convert minutes to seconds

// map to an array of seconds

// reduce to get total

// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!
