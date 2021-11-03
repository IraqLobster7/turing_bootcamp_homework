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