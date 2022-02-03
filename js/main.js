// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let min = +prompt('Enter Number 0-59');

if (min <= 15 && min > 0) {
    console.log("1 чверть години");
} else if (min > 15 && min <= 30) {
    console.log("2 чверть години");
} else if (min > 30 && min <= 45) {
    console.log("3 чверть години");
} else if (min > 45 && min <=60) {
    console.log("4 чверть години");
} else if (min < 0) {
    console.log("Enter positiv number");
} else {
    console.log("Це не число, або не у тому діапазоні...");
};
// =========================================================================================

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
//   місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введіть поточне число місяця 1-31');

if (day > 0 && day <= 10) {
    console.log('Перша половина декади місяця');
} else if (day > 10 && day <=20) {
    console.log('Друга половина декади місяця');
} else if (day > 20 && day <=31) {
    console.log('Третя половина декади місяця');
} else if (day < 0 || day >= 32) {
    console.log('Число Не може бути відємним, або більше 31');
};
// ===========================================================================================

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = prompt('Enter true or false');

if (test == 'true') {
    console.log('Вірно');
} else if (test == 'false') {
    console.log('Не вірно');
};

//   - з коротким записом(тернаркою)

let test2 = test == 'true' ? 'true' : 'false';
console.log('test2 = ', test2);

// ============================================================================================

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Enter Number');
// let a = 1; // -> Вірно
// let a = 0; // -> Не правильно
let a = -3; //   -> Вірно

if (a === 0) {
    console.log('Не правильно');
} else {
    console.log('Вірно');
};

// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let todo = +prompt('Введіть порядковий номер дня тижня');

let div = document.createElement('DIV');
div.className = 'active';
document.body.append(div);


switch (todo) {
    case 1:
        div.innerHTML = 'Monday, Study in OKTEN on 20.00';
        break;
    case 2:
        div.innerHTML = 'Tuesday, to do Home and Class Work on the curs of OKTEN';
        break;
    case 3:
        div.innerHTML = 'Wednesday, Study in OKTEN on 20.00';
        break;
    case 4:
        div.innerHTML = 'Thursday, to do Home and Class Work on the curs of OKTEN';
        break;
    case 5:
        div.innerHTML = 'Friday, Study in OKTEN on 20.00';
        break;
    case 6:
        div.innerHTML = 'Saturday, study English language in OKTEN curs on 15.30';
        break;
    case 7:
        div.innerHTML = 'Sunday, self-study';
        break;
    default :
        div.innerHTML = 'У тижні 7 днів, тож число має бути від 1 до 7!';
        break;
};
// =======================================================================================

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = +prompt('Введіть рік для перевірки чи високoсний він');
// let year = 2022;

if (year % 4 === 0) {
    console.log('Цей рік є високосний');
} else {
    console.log('Цей рік не є високосний');
};
// ======================================================================================

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

if (true) {
    let js = prompt('Яка офіціальна назва "JS"');
    if(js === 'ECMAScript') {
        console.log('Вірно');
    } else {
        console.log('Не знаєте? ECMAScript');
    };
};
// ========================================================================================