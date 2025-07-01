// const date = new Date()
// const newDate = date.setFullYear(2025, 6, 10)
// console.log(newDate);


// const date = new Date();

// // формат виведення
// const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
// };

// const localDate = date.toLocaleString('Uk-uk', options);

// console.log(localDate);






// const nextSaturday = new Date('2025-06-14T12:00:00Z');
// console.log(nextSaturday.getDate());

// function holidays(date) {
//     date.getDay();

//     if (day === 0 || day === 6) {
//         console.log('Holiday');
//     }
//     else {
//         console.log('workday');
//     }
//     console.log(day);
// }
// holidays(new Date('2025-06-14T12:00:00Z'))


// function daysUntilEndOfYear() {
//     const currentData = moment();
//     const dataEndOfYear = moment().endOf('year')
//     const difernceDate = dataEndOfYear.diff(currentData, 'days')
//     return difernceDate
// }
// // console.log(daysUntilEndOfYear())
// // daysUntilEndOfYear()

// const customDate = moment("2025-12-30")
// const dataEndOfYear = moment().endOf('year')
// const diffDate = dataEndOfYear.diff(customDate, "days")
// console.log(diffDate)


// Створи функцію checkBirthday(year, month, day), яка приймає рік, місяць(від 1 до 12) та день народження.Функція повинна перевірити, чи день народження вже відбувся в поточному році.

// function checkBirthday(year, month, day) {
//     const currentDate = moment();
//     const birthdayThisYear = moment([currentDate.year(), month - 1, day]);
//     const result = birthdayThisYear.isBefore(currentDate)
//     return result

// }
// // checkBirthday()
// console.log(checkBirthday(2025, 5, 12));

function getDateDifference(first, second) {
    const date = new Date(first);
    const dateSecond = new Date(second)
    console.log(date);

    const dateDay = date.getDay();
    console.log(dateDay);

    // const result = secondDate.diff(firsrtDate, 'days')
    // return result
}
console.log(getDateDifference('2025-12-30'));