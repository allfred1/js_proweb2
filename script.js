const userAge = parseInt(prompt("Введите ваш возраст"));



if (userAge >= 0 && userAge < 18) {
    alert("Вы еще молоды");
} else if (userAge >= 18 && userAge < 50) {
    alert("Вам нужно работать");
} else if (userAge >= 50 && userAge < 59) {
    alert("Вам скоро на пенсию");
} else if (userAge >= 59 && userAge < 100) {
    alert("Вы пенсионер");
} else {
    alert("Error")
}


const Time = parseInt(prompt("ВВедите время"));



switch (true) {
    case (Time >= 0 && Time < 6):
        alert("2 часа ночи");
        break;
    case (Time >= 7 && Time < 10):
        alert("10 часов утра");
        break;
    case (Time >= 11 && Time < 17):
        alert("3 часа дня");
        break;
    case (Time >= 18 && Time < 23):
        alert("9 часов вечера");
        break;
    default:
        alert("Error");
        break;
}


const a = parseInt(prompt("Введите число a"));
const b = parseInt(prompt("Введите число b"));
const c = parseInt(prompt("Введите число c"));
let min = Math.min(a, b, c);
let max = Math.max(a, b, c);
let middle;


if (a !== min && a !== max) {
    middle = a;
} else if (b !== min && b !== max) {
    middle = b; 
} else {
    middle = c;
}

alert(middle);
  