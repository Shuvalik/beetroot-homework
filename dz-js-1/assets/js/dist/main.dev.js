"use strict";

//valid variable
var name = 'Elena';
var userName = 'Elena';
var firsName = 'Elena'; //camelCase

var current_Name = 'Elena'; //snack_case
// invalid variable

/*let n/* = 'Elena';
let n123 = 'Elena';
let 0terw = 'Elena';*/

function hello() {
  var user = prompt('Введить ваше ім’я');

  if (user) {
    document.getElementById('hello').innerText = "\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(user, "!");
  }
}

;
hello();

function age(el) {
  var userAge = parseInt(prompt('Введить ваше рік народження'));
  var date = new Date();
  var currentYear = date.getFullYear();
  var resultAges = currentYear - userAge;

  if (!isNaN(userAge) && userAge && resultAges > 0 && resultAges < 120) {
    el.previousElementSibling.innerText = "\u0412\u0430\u0448 \u0432\u0456\u043A - ".concat(resultAges);
  } else {
    el.previousElementSibling.innerText = "\u0412\u0432\u0435\u0434\u0438\u0442\u044C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0430\u0448 \u0440\u0456\u043A \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F";
  }

  ;
}

;

function perimetr(el) {
  var number = parseInt(prompt('Введить довжину сторони квадратa'));

  if (!isNaN(number) && number && Math.sign(number) !== -1) {
    el.previousElementSibling.innerText = "\u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442a - ".concat(number * 4);
  } else {
    el.previousElementSibling.innerText = "\u0412\u0432\u0435\u0434\u0438\u0442\u044C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u0432\u0430\u0434\u0440\u0430\u0442a";
  }
}

function ploshaKola(el) {
  var number = parseInt(prompt('Введить радіус кола'));

  if (!isNaN(number) && number && Math.sign(number) !== -1) {
    el.previousElementSibling.innerText = "\u043F\u043B\u043E\u0449a \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 - ".concat(Math.PI * Math.pow(number, 2));
  } else {
    el.previousElementSibling.innerText = "\u0412\u0432\u0435\u0434\u0438\u0442\u044C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0440\u0430\u0434\u0456\u0443\u0441 \u043A\u043E\u043B\u0430";
  }
}

function speedUser(el) {
  var lengthBetweenSities = parseInt(prompt('Введить відстань в кілометрах між двома містами(тільки число)'));

  if (!isNaN(lengthBetweenSities) && lengthBetweenSities && Math.sign(lengthBetweenSities) !== -1) {
    var timeDirections = parseInt(prompt('Введить за скільки годин ви хочете дістатися до іншого міста(тільки число)'));

    if (!isNaN(timeDirections) && timeDirections && Math.sign(timeDirections) !== -1) {
      el.previousElementSibling.innerText = "\u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044C \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(lengthBetweenSities / timeDirections, " \u043A\u043C/\u0433\u043E\u0434.");
    } else {
      el.previousElementSibling.innerText = "\u0412\u0432\u0435\u0434\u0438\u0442\u044C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0437\u0430 \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0433\u043E\u0434\u0438\u043D \u0432\u0438 \u0445\u043E\u0447\u0435\u0442\u0435 \u0434\u0456\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u0456\u043D\u0448\u043E\u0433\u043E \u043C\u0456\u0441\u0442\u0430";
    }
  } else {
    el.previousElementSibling.innerText = "\u0412\u0432\u0435\u0434\u0438\u0442\u044C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u044C \u0432 \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0430\u0445 \u043C\u0456\u0436 \u0434\u0432\u043E\u043C\u0430 \u043C\u0456\u0441\u0442\u0430\u043C\u0438";
  }
}

function convertor(el) {
  var curs = 37;
  var number = parseInt(prompt('Введить долари(тільки число)'));

  if (!isNaN(number) && number && Math.sign(number) !== -1) {
    el.previousElementSibling.innerText = "".concat(number, "$ - ").concat(number * curs, "UAH");
  } else {
    el.previousElementSibling.innerText = "\u0412\u0432\u0435\u0434\u0438\u0442\u044C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0434\u043E\u043B\u0430\u0440\u0438";
  }
}