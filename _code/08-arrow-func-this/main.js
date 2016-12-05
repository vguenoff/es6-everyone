const box = document.querySelector('.box');

box.addEventListener('click', function() {
    let first = 'opening',
        second = 'open';

    // reverse if closing    
    if (this.classList.contains(first)) [first, second] = [second, first];
    
    // animation
    this.classList.toggle(first);
    // when used inside a regular function the value of this is inherited 
    setTimeout(() => {
        this.classList.toggle(second);
    }, 500);
});