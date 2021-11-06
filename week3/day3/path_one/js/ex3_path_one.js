// Упражнениe 1

let a = 0;

while (a < 10) {
    a++;
}

do {
    a++
} while (a < 10);

for (a; a <= 10; a++) {}
// Упражнениe 2 Написать цикл, которой будет продолжать итерации пока пользователь не введёт строку “Завершить”. Для ввода используйте функцию prompt.
let exTwoСount = 0;
let exTwo = prompt("Нажми ок для старта");
while (exTwo != "Завершить") {
    exTwoСount++;
    exTwo = prompt("Завершить для окончания. Продолжить любой символ");

}
console.log(exTwoСount);
// Упражнениe 3 С помощью цикла for выведите все нечётные числа в интервале от 0 до 20
for (i = 0; i <= 20; i++) {
    if (i % 2) {
        console.log(i);
    }
}

// Упражнениe 4 Перепишите код из упражнения 1.1.10 таким образом, чтобы вместо группы условных инструкций использовался switch

let numExFour = parseInt(prompt("Введите число"));

while (isNaN(numExFour)) {
    numExFour = parseInt(prompt("Нужно писать число"));
}

switch (numExFour % 2) {
    case 0:
        console.log("Число чётное");
        break;
    case NaN:
        console.log("Вы ввели не число");
        break;
    default:
        console.log("Число не чётное");
        break;
}


// Упражнениe 5 Поменяйте две переменные местами (это можно сделать воспользовавшись дополнительной переменной)
let first = 1;
let second = 77;
let enemy = first;
first = second;
second = enemy;
// Упражнениe 6 Преобразуйте число 143.2343 к строке с точностью до 2 знака после запятой
let number = 143.2343;
number = parseFloat(number).toFixed(2)
number = String(number);
console.log(typeof(number));

// Упражнениe 7 Округлите число 42.2654 до 1 знака после запятой
let numExSeven = 42.2654;
console.log(parseFloat(numExSeven).toFixed(1));

// Упражнениe 8 Найдите индекс первого вхождения строки “JavaScript” в строку “I learn JavaScript”

let strExEight = "I learn JavaScript";
console.log(strExEight.indexOf("JavaScript"));
// Упражнениe 9 Реализуйте функцию, которая возвращает функцию, выводящую количество собственных вызовов
let countCall = 0;

function count() {
    return ++countCall;
}

function call() {
    return count();
}

console.log(call());
console.log(call());
console.log(call());
// Упражнениe 10 Реализуйте функцию, которая выводит свой текущий контекст в консоль. Вызовите её посредством call c разными значениями 

let names = {
    mergeName: function() {
        return this.a + " " + this.b;
    }
}

let user1 = {
    a: "Ivan",
    b: "Ivanov",
}

let user2 = {
    a: "Egor",
    b: "Egorov"
}
let user3 = {
    a: "Max",
    b: "Maximov"
}
console.log(names.mergeName.call(user2));
console.log(names.mergeName.call(user3));
console.log(names.mergeName.call(user1));
// Упражнениe 11 Функция squarePow принимает 2 параметра: число и анонимную функцию, которая возводит число в квадрат. Возведите число в 4-тую степень с помощью squarePow.
function squarePow(numb, func) {
    return (func(numb));
}

console.log(squarePow(2, function(numb) {
    return numb * numb;
}) + squarePow(2, function(numb) {
    return numb * numb;
}) + squarePow(2, function(numb) {
    return numb * numb;
}) + squarePow(2, function(numb) {
    return numb * numb;
}));





// Упражнениe 12 Реализуйте функцию curry (каррирование)

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(sum(2)(3)(21));