// function makeRequest(url) {
//     fetch(url).then((value) => value.json()).then((value) => renderData(value))

// }


// const list = document.getElementById('list');
// const btn = document.getElementById('btn');

// function renderData(arr) {
//     const markUp = arr.map(el => `<li>${el.username} <li>`).join('')
//     list.innerHTML = markUp
// }
// btn.addEventListener('click', () => {
//     makeRequest('https://jsonplaceholder.typicode.com/users')
// })

const list = document.getElementById('list');
const btn = document.getElementById('btn');
const input = document.querySelector('input')

function searchUserName() {
    const inputValue = input.value.toLocaleLowerCase();
    const filterUserNames = makeRequest().filter((el) => el.toLocaleLowerCase().includes(inputValue));
    const markup1 = filterUserNames.map((el) => `<li>${el.searchUsername} </li>`)
    document.querySelector('ul').innerHTML = markup1
}

input.addEventListener('input', _.debounce(() => {

    searchUserName()
}, 2000))