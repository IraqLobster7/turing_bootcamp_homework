// Упражнениe 1
let firstName = "Иван";
let lastName = "Иванов";

function showMessage(a, b) {
    alert("Привет " + a + " " + b);
}

showMessage(firstName, lastName);

// Упражнениe 2

let firstNum = prompt();
let secNum = prompt();

function compare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

alert(compare(firstNum, secNum));

// Упражнение 3

let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multi = (a, b) => a * b;

// Упражнение 4

const nameAlert = (name = "name") => { alert('Привет ' + name) };

nameAlert();

// Упражнение 5   формула Fn = Fn-1 + Fn-2.
function fibo(x) {
    return x <= 1 ? x : fibo(x - 1) + fibo(x - 2);
}

alert(fibo(11));

// Упражнение 6

function fiboNormal(d) {
    let x = 1; //первое число в последовательности
    let y = 1; //второе число в последовательности
    for (i = 3; i <= d; i++) { //цикл для вычесления позиции в последовательности Фибоначчи. если указать 2 то цикл запуститься 1 раз цикл не запустится
        let z = x + y; // третье число в последовательности 
        x = y; // меняем первое на второе
        y = z; // меняем второе на третье, дает возможность сократить вычесления и поиск искомого числа
    }
    return y; //возвращаем нужное число. каждый раз меняя значения мы существенно сокращаем поиск. рекурсия повесила страницу при поиске большого числа(
}

alert(fiboNormal(256));