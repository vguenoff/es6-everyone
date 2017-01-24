let isRing = 'Hulk Hogan';
let onSide = 'The Rock';
console.log(`isRing - ${isRing} / onSide - ${onSide}`);

[isRing, onSide] = [onSide, isRing];
console.log(`isRing - ${isRing} / onSide - ${onSide}`);
