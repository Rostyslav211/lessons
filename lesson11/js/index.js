// // function timer(start) {

// //     let currentNumber = start

// //     function tick() {

// //         console.log(currentNumber)

// //         if (currentNumber > 0) {
// //             currentNumber -= 1;
// //             setTimeout(tick, 1000)
// //         }
// //         else {
// //             // span.textContent = 'time`s up' 
// //             console.log('time`s up')
// //         }
// //         // console.log(currentNumber);

// //     };
// //     tick()
// // };
// // timer(10)



// const btn = document.querySelector('button');
// const span = document.querySelector('span');

// let currentTimer = null;

// function timer(start) {

//     if (currentTimer !== null) {

//         clearTimeout(currentTimer)
//         currentTimer = null;
//     };

//     let counter = start;

//     function tick() {

//         span.textContent = counter;

//         if (counter > 0) {
//             counter -= 1;
//             currentTimer = setTimeout(tick, 1000);
//             // console.log(currentTimer);
//         }

//         else {
//             span.textContent = 'start';
//             currentTimer = null;
//         };
//     }
//     tick()
// };
// btn.addEventListener('click', () => {
//     timer(10)
// })


const input = document.getElementById('input');
const btn = document.getElementById('btn');
const message = document.getElementById('message');
const span = document.getElementById('span');

function timer(start) {
    const number = Math.round(Math.random() * (10 - 1) + 1);
    console.log(number);

    const userGuess = Number(input.value);

    console.log(userGuess);

    if (userGuess === number) {
        message.textContent = 'Правильно!'
    } else if (userGuess > number) {
        message.textContent = 'занадто багато'
    } else {
        message.textContent = 'занадто мало'
    }

    btn.addEventListener('click', () => {
        console.log(userGuess);
    })

}
timer()

