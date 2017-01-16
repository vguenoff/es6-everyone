const box = document.querySelector('.box');
box.addEventListener('click', function() {
  let first = 'opening';
  let second = 'open';
  // change the animation already already opened
  if (this.classList.contains(first)) 
    [first, second] = [second, first];
  
  // console.log(this);
  this.classList.toggle(first);
  setTimeout(() => {
    // console.log(this);
    this.classList.toggle(second);
  }, 500);
  
});