const details = ['Wes Bos', 123, 'wesbos.com'];
const [name, id, website] = details; 
console.log(name, id, website);

const data = 'Bascketball, Sports, 90210, 23';
const [itemName, category, sku, inventory] = data.split(',');
console.log(itemName, category, sku, inventory);

const team = ['Wes', 'HArry', 'Sarah', 'Keegen', 'Riker'];
const [captain, assistent, ...players] = team;
console.log(captain, assistent, players);