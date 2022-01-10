// Упражнение 1 Выведите на странице часы
let time = document.querySelector('#time');
setInterval(() => time.innerHTML = new Date(), 1000);
// Упражнение 2 Выведите на странице данные о количестве секунд, оставшихся до конца дня. Данные должны обновляться динамически

function secondsToEnd() {
    let timeEx2 = new Date();
    let hours = timeEx2.getHours();
    let minutes = timeEx2.getMinutes();
    let seconds = timeEx2.getSeconds();
    let timeNow = (hours * 60 + minutes) * 60 + seconds;
    let secInDay = 86400;
    let result = secInDay - timeNow;
    return result;
}

let timeToEnd = document.querySelector('#time_to_end');
setInterval(() => timeToEnd.innerHTML = secondsToEnd(), 1000);

// Упражнение 3 Выведите на странице инпут и кнопку. В инпут вводится число. По нажатию на кнопку запускается таймер с количеством секунд, равным числу, введенному пользователем

let start = 0;

function timerPoint() {
    const startPoint = parseInt(document.querySelector('#number').value) + 1;
    start = startPoint;
    startTime();
}


function startTime() {
    start--;
    if (start < 0) {
        clearTimeout(start);
    } else {
        setTimeout(startTime, 1000);
        document.querySelector('#timer').innerHTML = start;
    }
};

document.querySelector('#timer').innerHTML = start;

// Упражнение 4 Реализуйте функцию, которая возвращает случайное число в диапазоне от первого переданного в неё параметра до второго
function minMax(min, max) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
}

// Упражнение 5 Создайте промис, который успешно выполнится через 3 секунды
const randomNumber = minMax(55, 345);
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(console.log(`случайное число: ${randomNumber}`));
    }, 3000);
});
// Упражнение 6 Создайте промис, который завершится с ошибкой через 3 секунды
const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error(randomNumber));
    }, 3000);
});

// Упражнение 7 Реализуйте функцию, возвращающую промис, в котором генерируется случайное число. Если это число оказывается больше 10 то промис должен завершиться с ошибкой.
function getPromise(min, max) {

    return new Promise(function(resolve, reject) {
        let newRandom = min - 0.5 + Math.random() * (max - min + 1);
        if (newRandom <= 10) {
            let result = `Успешно, случайное число: ${newRandom}`;
            resolve(result);
        } else {
            reject(new Error(newRandom));
        };
    });
}

getPromise(0, 20);
// Упражнение 8 Используя методы catch и then обработайте результаты вызова функции из упражнения 7
getPromise(10, 25).catch(alert);

getPromise(4, 25).then(
    result => {
        alert("Выполнено: " + result);
    },
    error => {
        alert("Отказано: " + error);
    }
);
// // Упражнение 9 Реализуйте двефункции, которые посредством промисов можно вызывать по цепочке: первая на вход принимает массив чисел, и возвращает массив всех чётных чисел; вторая принимает на вход массив чисел и возвращает их сумму. Обработайте результаты вызовов посредством метода catch

// Упражнение 10 Используя синтаксис async/await измените вид того, как вызываются функции из упражнения 9

// Упражнение 11 Создайте промис, который завершится с ошибкой. Обработайте эту ошибку в блоке catch

// Упражнение 12 Реализуйте функцию, возвращающую массив промисов, каждый из которых завершается на 1 секунду позже остальных и резолвится со значением его задержки в секундах. Получите результаты a)Первого выполненного промиса (Promise.race) b)Всех промисов, которые выполнятся (Promise.all)