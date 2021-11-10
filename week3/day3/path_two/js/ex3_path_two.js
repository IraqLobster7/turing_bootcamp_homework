// // Упражнениe 1 Создайте объект вида { a: ‘a’, b: ‘b’, c: ‘c’ }. Выведите на экран значение в поле a двумя способами: через квадратные скобки и как свойство объекта

// let exOneObj = {
//     a: "a",
//     b: "b",
//     c: "c",
// }

// console.log(exOneObj.a);
// console.log(exOneObj["a"]);

// //Упражнение 2 Создайте объект вида { a: 2, b: “Coding” }. Создайте копию этого объекта посредством
// // Метода Object.assign,
// // Spread-оператора

// let exTwoObj = {
//     a: 2,
//     b: "Coding"
// }

// let exTwoObjFirstClone = Object.assign({}, exTwoObj);
// let exTwoObjSecondClone = {...exTwoObj };
// console.log(exTwoObjFirstClone);
// console.log(exTwoObjSecondClone);

// // Упражнение 3 Создайте объект вида { a: 4 }. Добавьте ему поле b содержащее число 5 и удалите поле a. На каждом этапе проверяйте наличие полей в объекте. Результаты выводите в консоль

// let exThreeObj = {
//     a: 4,
// }

// exThreeObj["b"] = 10;

// function check(obj) {
//     for (const key in obj) {
//         let keys = key in obj;
//         console.log(key + " " + keys);
//     }
// }

// check(exThreeObj);
// delete exThreeObj.a;
// check(exThreeObj);
// console.log(exThreeObj);

// // Упражнение 4 Создайте пустой объект и добавьте ему поля name и lastName со значениями “Иван” и “Иванов” соответственно. Также добавьте поле salary и запишите туда любое число. Переберите свойства объекта и выведите их в консоль с помощью цикла for (... in …).
// let exFourObj = {};

// function addFields() {
//     for (let i = 0; i < arguments.length; i += 2) {
//         exFourObj[arguments[i]] = arguments[i + 1];
//     }
//     return exFourObj;
// }

// function showObj(obj) {
//     for (const key in obj) {
//         console.log(key + " => " + obj[key]);
//     }
// }

// showObj(addFields("name", "Иван", "lastName", "Иванов", "salary", 123409));

// // Упражнение 5 Создайте массив чисел от 0 до 10 и выведите его в консоль двумя разными способами: посредством цикла for..in и цикла for..of

// let exFiveObj = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (const key in exFiveObj) {
//     console.log(exFiveObj[key]);
// }

// for (const value of exFiveObj) {
//     console.log(value);

// }

// // Упражнение 6 Реализуйте функцию-конструктор, создающую объект Animal с полями name и kind

// function Animal() {
//     Animal.prototype.name = "Тигр";
//     Animal.prototype.kind = "кошачьи";
// };
// tiger = new Animal();

// // Упражнение 7 Реализуйте функцию сортирующую символы в строке и возвращающую отсортированную строку.

// function sortAlphabet(str) {
//     return str.split('').sort().join('');
// }

// console.log(sortAlphabet("шалаш"));

// //Упражнение 8 Реализуйте функцию, которая сортирует передаваемый в неё массив чисел

// function sortNum(arr) {
//     return arr.sort((a, b) => a - b);
// }

// console.log(sortNum([1, 423, 43, 23, -10, 0, 23]));

// // Упражнение 9 Реализуйте функцию, которая находит и возвращает индекс элемента в массиве

// function findInd(arr, num) {
//     for (const key in arr) {
//         if (arr[key] == num) {
//             return key;
//         }
//     }
// }

// console.log(findInd([1, 3, 45, 45, 23, 746, 213, 325, 77, 3, 4, 74, 32, 43], 746));

// Упражнение 10 Создайте двумерный массив чисел, заполните его случайными числами от 0 до 10 и выведите его в консоль в виде таблицы

let arrExTen = [];

for (i = 0; i < 2; i++) {
    arrExTen[i] = [];
    for (j = 0; j < 10; j++) {
        let a = Math.round(Math.random() * 10);
        arrExTen[i].push(a);
    }
    arrExTen.push(arrExTen[i]);
    console.log(arrExTen[i]);
}

// Упражнениe 11 Создайте двумерный массив с двумя ключами: en и ru. Пусть первый массив содержит названия месяцев на английском, а второй - на русском. Напишите функцию, которая по языку и числу месяца возвращает его название

let arrExEleven = {
    RU: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
    EN: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}

function month(leng, num) {
    for (const key in arrExEleven) {
        if (key == leng) {
            for (const j in arrExEleven[key]) {
                if (j == num - 1) {
                    return arrExEleven[key][j];
                }
            }
        }
    }
}

console.log(month("EN", 9));

// Упражнениe 12 Реализуйте функцию, которая позволяет полностью клонировать объект

function clone(a) {
    let b = JSON.parse(JSON.stringify(a));
    return b;
}

let user1 = {
    a: "Ivan",
    b: "Ivanov",
}

let x = clone(user1);
console.log(x);

// Упражнениe 13 Напишите функцию в одну строчку, которая вычисляет сумму всех чисел в массиве
let sumAllNum = [1, 2, 3, 4, 5].reduce((a, b) => a + b, 0);
console.log(sumAllNum);

//Упражнение 14 Реализуйте функцию, которая создаёт новый объект с заданным набором полей и с другим объектом в качестве прототипа

//Упражнение 15 Реализуйте функцию, которая объединяет все массивы, являющиеся частью другого массива в один массив

//Упражнение 16 Что вернут следующие выражения:
// [] + [] перевод 2х массивов в строку
// [10] + [1] конкатенация
// [] - [] = 0 
// +[] = 0
// +{} = Nan type number
// {} + {} string
// {} - {} = Nan type number
// !{} false
// [] == [] false
// {} === {} false
// Проверьте свои догадки

//Упражнение 17 Используя деструктурирующее присваивание создать на основе объекта { firstName: “Иван”, lastName: “Иванов”,  years: 25 } переменные с названиями name и age, в который записать данные из полей firstName и years
let objExSeventeen = {
    firstName: "Иван",
    lastName: "Иванов",
    years: 25,
}

let nameOb = objExSeventeen.firstName;
let age = objExSeventeen.years;
console.log(nameOb + " " + age);

//Упражнение 18 Создайте массив со списком строк “Понедельник”, “Вторник”, ”Среда”. С помощью деструктурирующего присваивания вынесите эти названия в отдельные переменные
let attExEighTeen = ["Понедельник", "Вторник", "Среда"];

let [mond, tues, wedn] = attExEighTeen;
console.log(mond + " " + tues + " " + wedn);

//Упражнение 19 Поменяйте две переменные с помощью деструктуризации массивов
let attExNineTeenFirst = ["Понедельник", "Вторник", "Среда"];
let attExNineTeenSec = ["Monday", "Tuesday", "Wednesday"];

[attExNineTeenFirst[0], attExNineTeenSec[0]] = [attExNineTeenSec[0], attExNineTeenFirst[0]];

console.log(attExNineTeenSec);
console.log(attExNineTeenFirst);

//Упражнение 20 Отсортируйте массив чисел по возрастанию используя метод sort
function sortNumExTwenty(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortNumExTwenty([1, 643, -23, 235, 64, 0, -23, -436, 3, 124, 36]));
//Упражнение 21 Напишите функцию добавления в массив нового элемента по индексу предыдущего элемента.

let exTwenOneArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function replace(index, varible) {
    exTwenOneArr.splice(index, 0, varible);
    console.log(exTwenOneArr);
}
replace(4, "test");

//Упражнение 22 Напишите функции, реализующие поверхностное клонирование массива и объекта
function copy(objec) {
    let newobj = {...objec };
    return newobj;
}

// console.log(exTwenOneArr);
console.log(copy(exTwenOneArr));
//Упражнение 23 Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
let exArrTwThOne = ['a', 'b', 'c'];
let exArrTwThTwo = [1, 2, 3];
let exArrTwThUnion = exArrTwThOne.concat(exArrTwThTwo);
console.log(exArrTwThUnion);