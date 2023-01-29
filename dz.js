// задание 1
let password = 'пароль';
let checkPassword = prompt('введите пароль');
if (password == checkPassword) {
    console.log ('пароль введен верно');
} else {
    console.log ('пароль введен неверно')
}

// задание 2
let c = 4;
if (c > 0 && c < 10) {
    console.log ('верно');
} else {
    console.log('неверно');
}

c = 0;
if (c > 0 && c < 10) {
    console.log ('верно');
} else {
    console.log('неверно');
}

c = 10;
if (c > 0 && c < 10) {
    console.log ('верно');
} else {
    console.log('неверно');
}

c = -3;
if (c > 0 && c < 10) {
    console.log ('верно');
} else {
    console.log('неверно');
}

c = 2;
if (c > 0 && c < 10) {
    console.log ('верно');
} else {
    console.log('неверно');
}

// задание 3
let d = 2;
let e = 555;
if (d > 100 || e > 100) {
    console.log('верно');
} else {
    console.log('неверно');
}

// задание 4 
let a = 2;
let b = 3;
alert(a + b);

// задание 5 
let monthNumber = 12;
switch (monthNumber) {
    case 1 : case 2 : case 12 :
        console.log('зима');
    break;

    case 3 : case 4 : case 5 :
        console.log('весна');
    break;

    case 6 : case 7 : case 8 :
        console.log('лето');
    break; 
    
    case 9 : case 10 : case 11 :
        console.log('осень');
    break;
    
    default:
        console.log('такого месяца нет!');
    break;
}

// задание 7
let parityCheck = prompt('пожалуйста, введите любое число');
if (!isNaN(parityCheck)) {
    if (parityCheck % 2 == 0) {
        console.log('число четное');
    } else {
        console.log('число нечетное');
    }
} else {
    console.log(NaN);
}

// задание 8
let clientOS = 0;
if (clientOS === 0) {
    console.log('Установите версию приложения для Android');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для iOS');
}

/* доп вариант выполнения
let clientOS = true;
if (clientOS === true) {
    console.log('Android')
} else if (clientOS === false) {
    console.log('iOS');
}
*/

// задание 9
let deviceYear = 2015;
if (clientOS === 0 && deviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android');
} else if (clientOS === 1 && deviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS');
}

