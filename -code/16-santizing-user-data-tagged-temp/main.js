/*global DOMPurify*/
function sanitize(strings, ...values) {
    const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''}`, '');
    return DOMPurify.sanitize(dirty);
}

const first = 'Vassil';
const aboutMe = sanitize`I love do do evil <img src='http://a1.mzstatic.com/nz/r30/Purple18/v4/f8/88/fe/f888fe41-6172-8a40-b68b-00fc6df5daf9/icon100x100.jpeg' onload='alert("you got hacked");'>`;

const html = `
    <h3>${first}</h3>
    <p>${aboutMe}</p>
`;

const bio = document.querySelector('.bio');
bio.innerHTML = html;