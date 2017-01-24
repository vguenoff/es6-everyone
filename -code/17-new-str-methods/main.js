const cource = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825422631RT0001';

const make = 'BMW';
const model = 'x5';
const color = 'Royal Blue';

// .startsWith
console.log(
  cource.startsWith('RFB'),
  flightNumber.startsWith('AC', 3)
);

// .endsWith
console.log(
  flightNumber.endsWith('jz'),
  accountNumber.endsWith('RT', 11)
);

// .includes
console.log(
  flightNumber.includes('AC')
);

// .repeat
console.log('lama '.repeat(100));

function leftPad(str, length = 20) {
  return `-> ${' '.repeat(length - str.length)}${str}`;
}

console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(color));