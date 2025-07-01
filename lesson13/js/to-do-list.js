const list = document.querySelector('.list');
const btn = document.querySelector('.btn');

function getData(url) {
    fetch(url).then((value) => value.json()).then((value) => renderData(value))
}

function renderData(arr) {
    const markup = arr.map((el) => `<li>${el.title}</li>`).join('');
    list.innerHTML = markup;
};

btn.addEventListener('click', () => {
    getData('https://jsonplaceholder.typicode.com/todos')
})