// // Select all the list items on the page and convert to array
// const list = Array.from(document.querySelectorAll('[data-time]'));
// // Filter for only the elements that contain the word 'flexbox'
// const flexList = list.filter(li => li.textContent.toLowerCase().includes('flexbox'));
// // map down to a list of time strings
// const flexTime = flexList.map(li => li.attributes['data-time'].value);
// // function to convert minutes to seconds
// const minToSecs = li => Number(li.slice(0, li.indexOf(':'))) * 60 + Number(li.slice(li.indexOf(':') + 1));
// // map to an array of seconds
// const flexTimeSec = flexTime.map(li => minToSecs(li));
// // reduce to get total
// const totalflexTimeSec = flexTimeSec.reduce((total, num) => total + num);
// console.log(`${totalflexTimeSec} sec`);
// // 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!

// Select all the list items on the page and convert to array
const list = Array.from(document.querySelectorAll('[data-time]'));
// Filter for only the elements that contain the word 'flexbox'
const filtered = list
  .filter(li => li.textContent.includes('Flexbox'))
  // map down to a list of time strings
  .map(li => li.dataset.time)
  // map to an array of seconds
  .map(timeCode => {
    const parts = timeCode.split(':').map(part => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // reduce to get total
  .reduce((runningTotal, seconds) => runningTotal + seconds, 0);
  
console.log(filtered);
