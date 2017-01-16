function highlight(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
        str += `${string} <span contenteditable class='hl'>${values[i] || ''}</span>`;
    });
    return str;
}

const name = 'Snickers';
const age = 100;


const sentence = highlight`My dog name is ${name} and he is ${age} old.`;
document.body.innerHTML = sentence;

