//Упражнение 1 Создайте кнопку счётчик-кликов.
let clicks = 0;

function count() {
    clicks += 1;
    document.getElementById("display").innerHTML = clicks;
}
//Упражнение 2 Напишите “длинную страницу”, которая отображает на экране текущую длину прокрутки
function scrollShow() {
    let scroll = window.pageYOffset;
    return document.getElementById('stick').innerHTML = scroll + " px";
}

setInterval(scrollShow, 1);

//Упражнение 3 Дата таблица с числами. По нажатию на ячейку в неё должен заноситься квадрат числа, которое она содержит
document.getElementById('numbers').addEventListener('click', event => {
    if (event.target.className === 'numb') {
        let number = event.target;
        let square = number.innerHTML * number.innerHTML;
        number.innerHTML = square;
    }
});

//Упражнение 4 Сделайте таблицу 5x5. Используя делегирование событий окрашивать красным цветом фон той ячейки, над которой в данный момент зависает курсор
numbers.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'red';
};
numbers.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
};

//Упражнение 5 Сделать простейшую валидацию: создать инпут, при расфокусе которого будет проверяться соответствие value input’а какой-либо строке

document.getElementById('blur').addEventListener('focus', event => {
    let target = event.target;
    target.style.width = '300px';
});
document.getElementById('blur').addEventListener('blur', event => {
    if (event.target.innerHTML === document.getElementById('stick').innerHTML) {
        document.getElementById('test_blur').innerHTML = "все верно";
    } else {
        document.getElementById('test_blur').innerHTML = "Ошибочка вышла";
    }
});

//Упражнение 6 Реализовать делегирование события фокус от элемента формы к инпутам: при фокусе граница инпута должна менять цвет и ширину
form.addEventListener("focusin", event => {
    let target = event.target;
    target.style.border = '3px red solid';
});
form.addEventListener("focusout", event => {
    let target = event.target;
    target.style.border = '';
});

//Упражнение 7 Создайте кнопку, которая удаляет себя со страницы по нажатию на неё
document.getElementById('delete').addEventListener('click', event => {
    event.target.parentNode.removeChild(event.target);
});

//Упражнение 8 Создайте список ol с несколькими элементами li. По нажатию на каждый элемент списка этот элемент должен удаляться
document.getElementById('arr').addEventListener('click', event => {
    if (event.target.className === 'arr_item') { //чтобы ol не удалить
        event.target.parentNode.removeChild(event.target);
    }
});