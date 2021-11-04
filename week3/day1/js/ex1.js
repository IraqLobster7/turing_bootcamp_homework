// Упражнение 1
let forAlert = "Переменная";
alert(forAlert);

// Упражнение 2
let forPromtAlert = prompt("введите ваш текст оповещения");
alert(forPromtAlert);

// Упражнение 3
let numExThree = 3; //любое число кроме 0 = true
let strExThree = ""; //пустая строка = false
console.log(Boolean(numExThree));
console.log(Boolean(strExThree));

// Упражнение 4
let numOne = prompt("введите первое число");
let numTwo = prompt("второе число");
let numSum = Number.parseInt(numOne) + Number.parseInt(numTwo);
let numResidue = Number.parseInt(numOne) % Number.parseInt(numTwo);
alert("Сумма введенных чисел: " + numSum);
// Упражнение 5
alert("Остаток от деления введенных чисел: " + numResidue);

// Упражнение 6
let x = 3;

//инкремент и декримент изменяют значение переменной. Префиксная нотация сначала меняет переменную потом возвращает значение. Постфиксная сначала возвращает значение потом меняет переменную. В примере ниже видно что при первом варианте выводится переменная x увеличенная на 1, во втором варианте возвращается переменная x не увеличенная и только после происходит увелечение на 1.
console.log(++x);
console.log(x);
console.log(x++);
console.log(x);

// Упражнение 7

let numEvenNotEven = prompt("введите число для проверки");


if (Number.parseInt(numEvenNotEven) % 2 === 0) {
    alert("Число четное");
} else {
    alert("число не четное");
}

//Упражнение 8

// Не строгое стравнивает только значение. 1 == "1" будет true 0 == false будет true.
// Строгое стравнивает тип 1==="1" будет false 0 === false будет false

//Упражнение 9
let arrEx = { a: 1 };

<<<<<<< Updated upstream
console.log(11);
console.log("Hello");
console.log(arrEx);
console.log(null);
console.log(false);
=======
console.log(typeof(11));
console.log(typeof("Hello"));
console.log(typeof(arrEx));
console.log(typeof(null));
console.log(typeof(false));
>>>>>>> Stashed changes

//Упражнение 10

const A = 201 % 2 ? alert("A нечётное") : alert("A чётное");

//Упражнение 11

let userLog = "LogTest";
let userPass = "qwerty";

let log = prompt("Введите логин ");
let pass = prompt("Введите пароль ");

if (log !== userLog && pass !== userPass) { //можно было не писать, но в задаче нужно и то и то
    alert("Все неверное");
} else if (log !== userLog || pass !== userPass) {
    alert("Логин или пароль не верны");
} else {
    alert("Вы успешно вошли в систему " + userLog);
}

// Упражнение 11

let aBol = '30';
<<<<<<< Updated upstream
alert(!aBol);
=======
alert(!!aBol);
>>>>>>> Stashed changes
