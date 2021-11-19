// Упражнениe 1 Создайте объект вида { a: 1, b: 2, c: 3 }. Напишите функцию, которая выводит в консоль ключи и значения объекта в формате “${key - value}”
let exOneObj = {
    a: 1,
    b: 2,
    c: 3,
}

function show(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log("${" + key + " - " + value + "}");
    }
}

show(exOneObj);

// Упражнениe 2 Реализуйте функцию, которая принимает объект и выводит на экран все собственные свойства объекта
function showProp(obj) {
    return Object.getOwnPropertyNames(obj);
}

console.log(showProp(exOneObj));

// Упражнениe 3 Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.

let arrExTheeFirst = [1, 2, 3, 5, , 74, 46, 214, 231];
let arrExTheeSec = ["1afs", "qf", 12, 24134, 436];
let arrExTheeThree = [true, false, 123, "fdas", "arets", 124];

let colMapExThree = new Map();

function setKeys(...args) {
    for (i = 0; i < args.length; i++) {
        colMapExThree.set(args[i], "some text");

    }
    console.log(Array.from(colMapExThree.entries()));
}

setKeys(arrExTheeFirst, arrExTheeSec, arrExTheeThree);


// Упражнениe 4 Пусть дана коллекция Map. С помощью метода keys получите массив ее ключей и переберите его циклом for-of.
let arrExFour = Array.from(colMapExThree.keys());
for (const iterator of arrExFour) {
    console.log(iterator);

}
// Упражнениe 5 Создайте пустую коллекцию Set. С помощью метода add добавьте в нее элементы со значениями 1, 2 и 3.

let colSetExFive = new Set();

colSetExFive.add(1)
colSetExFive.add(2)
colSetExFive.add(3)
console.log(colSetExFive);


// Упражнениe 6 Создайте коллекцию Set с начальными значениями 1,2,3. С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
console.log(colSetExFive.has(3));
console.log(colSetExFive.has(4));

// Упражнениe 7 Пусть дан массив. С помощью Set получите этот же массив, но без дублирующихся элементов

let arrExSeven = [1, 4, 5, 2, 1, 2, 6, 867, 1, 2, 325, 64];

let setExSeven = [...new Set(arrExSeven)];
console.log(setExSeven);


// Упражнениe 8 Создайте объект Map в который запишите названия дней недели на русском языке в качестве значений и соответствующие им названия дней недели на английском в качестве ключей

const en = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const ru = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

let colMapExEight = new Map();

function setExEight(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            colMapExEight.set(b[i], a[i]);
        }
    }
    console.log(Array.from(colMapExEight.entries()));
}

setExEight(ru, en);