// Select all the list items on the page and convert to array
const list = document.getElementsByTagName('li');
const listArray = Object.keys(list).map(li => list[li]);
console.log(list);
console.log(listArray);

// Filter for only the elements that contain the word 'flexbox'
const flexList = listArray.filter(listItem => listItem.innerText.includes('Flexbox'));
console.log(flexList);

// map down to a list of time strings
const listOfTimeStrings = flexList.map(li => li.attributes[0].value);
console.log(listOfTimeStrings);

// function to convert minutes to seconds
const convertMinToSec = str => {
    return Number(str.substr(0, str.indexOf(':')) * 60 
        + Number(str.substr(str.indexOf(':') + 1, str.length)));   
};

// map to an array of seconds
const arrOfSec = listOfTimeStrings.map(time => convertMinToSec(time));
console.log(arrOfSec);

// reduce to get total
let totalSec = 0; 
for(let sec of arrOfSec) totalSec += sec;
console.log(totalSec);

const total = `${parseInt(totalSec / 60)}:${parseInt(totalSec % 60)}` ;
console.log(total);

// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!
