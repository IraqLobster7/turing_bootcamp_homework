// Упражнение 1 Добавьте на страницу элемент div, установите ему класс container. Найдите этот элемент в DOM по классу как посредством getElementsByClassName. так и с помощью querySelector. Повторите тот же процесс но установив другой элемент div с атрибутом id равным main_containter

document.querySelector("container");
document.getElementsByClassName("container");

document.querySelector("main_containter");
document.getElementsByClassName("main_containter");

// Упражнение 2 Создать div и стилизовать его динамически в js коде. Для этого:
// a) Используйте свойство className
// b) Используйте свойство classList
// c)Установив id элемента

let elem = document.getElementsByClassName("container")[0].setAttribute("style", "width:700px;height:500px;color:red;")


let elemSecond = document.querySelector("div");
let classNames = elemSecond.classList;

classNames.add("styleClass");
elemSecond.id = "customId";

// Упражнение 3 Создайте div с заданной шириной и измените ему стили используя свойство style. Чем этот способ отличается от стилизации с помощью установки классов и id?
let elemExThree = document.getElementsByClassName("main_containter")[0].setAttribute("style", "width:100px;height:100px;background-color:pink;");
//  как я понимаю свойства стиля прописываются в html через style и они приоритетны перед тем что указано в файле css. а через id и установку класса мы будем использовать стили указанные в css файле.

// Упражнение 4 Создайте список из 10 элементов и в JavaScript коде измените стиль каждого второго элемента таким образом, чтобы текст элемента стал жирным, а цвет фона серым

let myList = document.querySelectorAll("li");
for (const key in myList) {

    if (key % 2) {
        myList[key].setAttribute("style", "font-weight: bold; background:grey; margin: 10px;")
    }
}

// Упражнение 5 Реализуйте функцию, которая в качестве параметра принимает id инпута и возвращает значение в этом input’е
function inp(i) {
    console.log(document.getElementById(i).value);
}
inp("exFive");

// Упражнение 6 Реализуйте функцию, которая делает input с переданным в неё классом неактивным

function inpSix(c) {
    document.getElementsByClassName(c)[0].setAttribute("disabled", "true");
}
inpSix("exSix");
// Упражнение 7 Добавьте элементу div в качестве потомков два элемента span с произвольным текстовым содержимым
let exSeven = document.getElementsByClassName("exSeven");
console.log(exSeven);
for (i = 0; i < 2; i++) {
    exSeven[0].insertAdjacentHTML("beforeEnd", "<span>some text</span><br>");
}
// Упражнение 8 Реализуйте функцию, которая в качестве параметров принимает id элемента и строку, которую устанавливает в качестве текста в этом элементе. Для реализации используйте:
// a) Свойство элемента textContent

function contentExEight(i, str) {
    return document.getElementById(i).textContent = str;
}
// b) Свойство элемента innerHTML

function innerExEight(i, str) {
    return document.getElementById(i).innerHTML = str;
}

innerExEight("exEight_two", "какой-то текст");
contentExEight("exEight_three", "текст в третьем диве");
// Упражнение 9 Дан элемент. Найдите его первого потомка и сделайте его текст красного цвета.
document.getElementById("exNine").firstElementChild.style.color = "red";

// Упражнение 10 Дано три элемента. Найдите для первого элемента соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!!!'.
document.getElementById("child_first").nextElementSibling.nextElementSibling.insertAdjacentHTML("beforeEnd", "!!!")