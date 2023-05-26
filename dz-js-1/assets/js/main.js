//valid variable
let name = 'Elena';
let userName = 'Elena';
let firsName = 'Elena'; //camelCase
let current_Name = 'Elena'; //snack_case
// invalid variable
/*let n/* = 'Elena';
let n123 = 'Elena';
let 0terw = 'Elena';*/
function hello() {
    let user = prompt('Введить ваше ім’я');
    if (user) {
document.getElementById('hello').innerText = `Привіт, ${user}!`
    }
};
hello();

function age(el) {
   let userAge = +prompt('Введить ваше рік народження');
   const date = new Date;
   const currentYear = date.getFullYear();
   let resultAges = currentYear - userAge;
   if (!isNaN(userAge) && userAge && resultAges > 0 && resultAges < 120) {
      el.previousElementSibling.innerText = `Ваш вік - ${resultAges}`;
    } else {
        el.previousElementSibling.innerText = `Введить корректно ваш рік народження`;
    };
};
function perimetr (el) {
   let number = +prompt('Введить довжину сторони квадратa');
   if (!isNaN(number) && number && (Math.sign(number) !== -1)) {
      el.previousElementSibling.innerText = `периметр квадратa - ${number * 4}`;
   } else {
      el.previousElementSibling.innerText = `Введить корректно довжину сторони квадратa`;
   }
}
function ploshaKola(el) {
   let number = +prompt('Введить радіус кола');
   if (!isNaN(number) && number && (Math.sign(number) !== -1)) {
      el.previousElementSibling.innerText = `площa окружності - ${Math.PI * Math.pow(number, 2)}`;
   } else {
      el.previousElementSibling.innerText = `Введить корректно радіус кола`;
   }
}
function speedUser(el) {
   let lengthBetweenSities = +prompt('Введить відстань в кілометрах між двома містами(тільки число)');
   if (!isNaN(lengthBetweenSities) && lengthBetweenSities && (Math.sign(lengthBetweenSities) !== -1)) {
      let timeDirections =  +prompt('Введить за скільки годин ви хочете дістатися до іншого міста(тільки число)');
      if (!isNaN(timeDirections) && timeDirections && (Math.sign(timeDirections) !== -1)) {
         el.previousElementSibling.innerText = `Вам необхідно рухатись зі швидкістю ${lengthBetweenSities / timeDirections} км/год.`;
      } else {
         el.previousElementSibling.innerText = `Введить корректно за скільки годин ви хочете дістатися до іншого міста`;
      }
   } else {
      el.previousElementSibling.innerText = `Введить корректно відстань в кілометрах між двома містами`;
   }
}
 function convertor(el) {
   const curs = 37;
   let number = +prompt('Введить долари(тільки число)');
   if (!isNaN(number) && number && (Math.sign(number) !== -1)) {
      el.previousElementSibling.innerText = `${number}$ - ${number * curs}UAH`;
   } else {
      el.previousElementSibling.innerText = `Введить корректно долари`;
   }
 }