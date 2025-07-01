const url = 'https://pixabay.com/api/?key=51134320-235ba8a824ad98fd1151e53b3&category=nature';

function makeRequest(url) {
    return fetch(url).then((value) => value.json()).then((value) => console.log(value))
}

makeRequest(url)

const photoList = document.querySelector('photo-list');

function renderData(arr) {
    fetch
};