{
  const name = 'wes';
  console.log(name);
}

for(var i = 0; i < 10; i++)
  setTimeout(function() {
    console.log('The number is', i);
  }, 100);

for(let i = 0; i < 10; i++)
  setTimeout(function() {
    console.log('The number is', i);
  }, 100);

