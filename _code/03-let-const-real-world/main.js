{
    const name = 'Vassil';
    console.log(name);
}

// let creates block scope so the output is different then the var
for (let i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function() {
        console.log(`the number is ${i}`);
    }, 1000);
}