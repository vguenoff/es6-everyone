const dict = {
  HTML: 'Hyper Text Markup Language',
  CSS: 'Cascading Style Sheets',
  JS: 'JavaScript'
};

function addAbbreviation(strings, ...values) {
  const abbreviated = values.map(value => {
    if(dict[value]) {
      return `<abbr title="${dict[value]}">${value}</abbr>`;
    }
    return value;
  });

  return strings.reduce((sentence, string, i) => {
    return `${sentence}${string}${abbreviated[i] || ''}`;
  }, '');
}


const first = 'Wes';
const last = 'Bos';

const sentence = addAbbreviation`Hello my name is ${first} ${last} and I love to code ${'HTML'}, ${'CSS'}, ${'JS'}.`;

const bio = document.querySelector('.bio');
const p = document.createElement('p');
p.innerHTML = sentence;
bio.appendChild(p);

