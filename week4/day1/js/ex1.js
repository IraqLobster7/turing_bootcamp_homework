// Упражнение 1 Реализуйте класс Employee. У класса должны иметься следующие свойства: name, age, salaryPerHour, hours. Также должен быть метод getSalary, возвращающий текущую зарплату в зависимости от отработанных часов. Используйте этот класс для создания двух рабочих и выведите зарплату каждого из них
class Employee {
    name = "Рабочий";
    age = "Возраст";
    salaryPerHour = 100;
    hours = 24;

    getSalary() {
        return this.hours * this.salaryPerHour;
    };
}
let workerOne = new Employee();
workerOne.name = "Ivan";
workerOne.age = 21;
workerOne.salaryPerHour = 254;
workerOne.hours = 120;
let workerTwo = new Employee();
workerTwo.name = "Alex";
workerTwo.age = 51;
workerTwo.salaryPerHour = 654;
workerTwo.hours = 20;

console.log(workerOne.getSalary());
console.log(workerTwo.getSalary());
// Упражнение 2  Опишите все свойства класса из предыдущего упражнения как приватные, а для доступа к ним реализуйте геттеры и сеттеры
class EmployeeTwo {
    _name = "Рабочий";
    _age = "Возраст";
    _salaryPerHour = 100;
    _hours = 24;
    set name(value) {
        if (value.length < 4) throw new Error("Слишком короткое имя");
        this._name = value;
    }

    get name() {
        return this._name;
    }
    set age(value) {
        if (value < 18) throw new Error("Несовершеннолетний");
        this._age = value;
    }

    get age() {
        return this._age;
    }
    set salaryPerHour(value) {
        this._salaryPerHour = value;
    }

    get salaryPerHour() {
        if (value < 0) throw new Error("Отрицательное значение");
        return this._salaryPerHour;
    }
    set hours(value) {
        if (value < 0) throw new Error("Отрицательное значение");
        this._hours = value;
    }

    get hours() {
        return this._hours;
    }
    getSalary() {
        return this.hours * this.salaryPerHour;
    };
}
let workerExTwo = new EmployeeTwo;
// workerExTwo.age = 16; //бросит ошибку в консоль что несовершеннолетний

workerExTwo.name = "Василий";
console.log(workerExTwo.name);
// Упражнение 3 Реализуйте класс, который валидирует числа и имеет набор методов для проверки следующего а) Является ли число чётным b) Является ли число целым или числом с плавающей точкой c) Является ли число положительным или отрицательным
class ValidNumber {
    _number = 0;

    set number(value) {
        if (typeof(value) !== "number") throw new Error("Введено не число");
        this._number = value;
    }

    get number() {
        return this._number;
    }
    even() {
        if (this._number % 2) {
            return "Число нечетное";
        } else {
            return "Число четное";
        }
    }

    entire() {
        if ((this._number ^ 0) === this._number) {
            return "Число целое";
        } else {
            return "Число не целое";
        }
    }

    sign() {
        if (this._number < 0) {
            return "Число отрицательно";
        } else if (this._number > 0) {
            return "Число положительное";
        } else {
            return "0 не положительное и не отрицательно число"
        }
    }
}

let testNumberOne = new ValidNumber;
// testNumberOne.number = 'asfdsgf'; //вернет ошибку так как тип string
testNumberOne.number = -20;

// Упражнение 4 Реализуйте класс, который принимает на вход некоторую строку и имеет следующий набор методов: a) Делает все первые буквы слов заглавными b) Делает все первые буквы слов маленькими c) Возвращает количество символов в строке, не являющихся пробельными
class SomeString {
    _string = '';

    set string(value) {
        if (typeof(value) !== "string") throw new Error("Введена не строка");
        this._string = value;
    }

    get string() {
        return this._string;
    }

    uppercase() {
        let arr = this._string.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let result = arr.join(" ");
        return result;
    }
    lowercase() {
        let arr = this._string.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1);
        }
        let result = arr.join(" ");
        return result;
    }
    calc() {
        let arr = this._string.split(" ");
        let newStr = arr.join("");
        return newStr.length;
    }
}

let testString = new SomeString;
testString.string = "lorem  lorem Lorem";

// Упражнение 5 Наследуйте от класса Employee новый класс AccountingEmployee обладающий методом work, который выводит в консоль сообщение о том, что рабочий приступил к выполнению обязанностей. Создайте объект этого класса и используйте его метод
class AccountingEmployee extends EmployeeTwo {
    work() {
        return "Приступил к работе";
    }
}

let testWorkerExFive = new AccountingEmployee;
console.log(testWorkerExFive.work());

// Упражнение 6 Реализуйте класс для работы с элементами DOM, который принимает в конструктор селектор и обладает следующими методами, которые можно вызывать по цепочке: a) Изменение текстового содержимого узла b) Изменение html содержимого узла c) Добавление нового узла в качестве потомка d) Добавление к началу текстового содержимого узла строки e) Добавление к концу текстового содержимого узла строки f) Изменение атрибутов элемента g) Удаление самого элемента h) Получение потомка узла посредством селектора

class DomClass {

    constructor(selector) {
        this.selector = document.querySelector(selector);
    }

    changeText(test) {
        this.selector.textContent = test;
        return this;
    }

    changeHTML(html) {
        this.selector.outerHTML = html;
        return this;
    }

    newChild(child) {
        let elem = document.createElement(child);
        elem.innerHTML = "test newChild";
        this.selector.appendChild(elem);
        return this;
    }

    newStringStart(string) {
        let tmpStr = this.selector.innerHTML;
        tmpStr = string + tmpStr;
        this.selector.innerHTML = tmpStr;
        return this;
    }

    newStringEnd(string) {
        let tmpStr = this.selector.innerHTML;
        tmpStr = tmpStr + string;
        this.selector.innerHTML = tmpStr;
        return this;
    }

    chengeAttr(attr, val) {
        this.selector.setAttribute(attr, val);
        return this;
    }

    deleteItem() {
        this.selector.parentNode.removeChild(this.selector);
        return this;
    }

    getChild(child) {
        let arrChild = this.selector.childNodes;
        for (let i = 0; i < arrChild.length; ++i) {
            if (i == child) {
                console.log(arrChild[i]);
                return arrChild[i];
            }
        }
    }
}

let testSelOne = new DomClass('.test_one');


// testSelOne.changeText('test test test');
// testSelOne.changeHTML('<div class="test_one">some text from ChangeHTML</div>')
testSelOne.newChild('p').newStringEnd("asdfgfsd").newStringStart("afgsfhskfajsdlk").chengeAttr("rel", "#");
// testSelOne.deleteItem();
testSelOne.getChild(5);