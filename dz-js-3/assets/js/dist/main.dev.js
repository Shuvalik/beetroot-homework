"use strict";

function age(el) {
  var age = parseInt(document.getElementById('age').value);

  if (age >= 0 && age <= 11) {
    el.previousElementSibling.innerText = 'Ви дитина';
  } else {
    if (age >= 12 && age <= 17) {
      el.previousElementSibling.innerText = 'Ви підліток';
    } else {
      if (age >= 18 && age <= 59) {
        el.previousElementSibling.innerText = 'Ви дорослий';
      } else {
        if (age >= 60 && age <= 120) {
          el.previousElementSibling.innerText = 'Ви пенсіонер';
        } else {
          el.previousElementSibling.innerText = 'Вкажіть корректно свій вік';
        }
      }
    }
  }
}

function spetionaleSymbol(el) {
  var number = document.getElementById('number').valueAsNumber;

  switch (number) {
    case 1:
      el.previousElementSibling.innerText = '!';
      break;

    case 2:
      el.previousElementSibling.innerText = '@';
      break;

    case 3:
      el.previousElementSibling.innerText = '#';
      break;

    case 4:
      el.previousElementSibling.innerText = '$';
      break;

    case 5:
      el.previousElementSibling.innerText = '%';
      break;

    case 6:
      el.previousElementSibling.innerText = '^';
      break;

    case 7:
      el.previousElementSibling.innerText = '&';
      break;

    case 8:
      el.previousElementSibling.innerText = '*';
      break;

    case 9:
      el.previousElementSibling.innerText = '(';
      break;

    case 0:
      el.previousElementSibling.innerText = ')';
      break;

    default:
      el.previousElementSibling.innerText = 'Вкажіть число від 0 до 9';
  }
}

function add(el) {
  var num1 = document.getElementById('number1').valueAsNumber;
  var num2 = document.getElementById('number2').valueAsNumber;
  var i,
      rez = 0;

  if (num1 > num2) {
    i = num2;

    while (i < num1) {
      i++;
      rez += i;
    }

    el.previousElementSibling.innerText = "C\u0443\u043C\u0430 \u0432\u0441\u0456\u0445 \u0447\u0438\u0441\u0435\u043B \u043C\u0456\u0436 ".concat(num1, " \u0456 ").concat(num2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(rez);
  } else {
    if (num1 < num2) {
      i = num1;

      while (i < num2) {
        i++;
        rez += i;
      }

      el.previousElementSibling.innerText = "C\u0443\u043C\u0430 \u0432\u0441\u0456\u0445 \u0447\u0438\u0441\u0435\u043B \u043C\u0456\u0436 ".concat(num1, " \u0456 ").concat(num2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(rez);
    } else {
      el.previousElementSibling.innerText = "C\u0443\u043C\u0430 \u0432\u0441\u0456\u0445 \u0447\u0438\u0441\u0435\u043B \u043C\u0456\u0436 ".concat(num1, " \u0456 ").concat(num2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 0");
    }
  }
}

function spilnyDilnyk(el) {
  var num1 = document.getElementById('number11').valueAsNumber;
  var num2 = document.getElementById('number22').valueAsNumber;
  var i;
  num1 <= num2 ? i = num1 : i = num2;

  while (i >= 0) {
    if (num1 % i === 0 && num2 % i === 0) {
      el.previousElementSibling.innerText = "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0447\u0438\u0441\u0435\u043B ".concat(num1, " \u0456 ").concat(num2, " \u0454 \u0447\u0438\u0441\u043B\u043E ").concat(i);
      return;
    }

    i--;
  }
}

function dilnyk(el) {
  var num = document.getElementById('number3').valueAsNumber;
  var rez = '';

  for (var i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      rez = rez + i + ', ';
    }
  }

  ;
  el.previousElementSibling.innerText = "\u0414\u0456\u043B\u044C\u043D\u0438\u043A\u0430\u043C\u0438 \u0447\u0438\u0441\u043B\u0430 ".concat(num, " \u0454 ").concat(rez).concat(num);
} //12321


function palidrom(el) {
  var num = document.getElementById('number4').valueAsNumber;

  if (num && String(num).length === 5) {
    if (Math.trunc(num / 10000) === num % 10 && Math.trunc(num / 1000) % 10 === Math.trunc(num % 100 / 10)) {
      el.previousElementSibling.innerText = 'Ваше число є паліндромом';
    } else {
      el.previousElementSibling.innerText = 'Ваше число не є паліндромом';
    }
  } else {
    el.previousElementSibling.innerText = 'Вкажіть корректно п’ятирозрядне число';
  }
}

function sale(el) {
  var sum = document.getElementById('summa').valueAsNumber;

  if (sum >= 200 && sum < 300) {
    el.previousElementSibling.innerText = "\u0412\u0430\u0448\u0430 \u0441\u0443\u043C\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(sum - sum * 0.03);
  } else {
    if (sum >= 300 && sum < 500) {
      el.previousElementSibling.innerText = "\u0412\u0430\u0448\u0430 \u0441\u0443\u043C\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(sum - sum * 0.05);
    } else {
      el.previousElementSibling.innerText = "\u0412\u0430\u0448\u0430 \u0441\u0443\u043C\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(sum - sum * 0.07);
    }
  }
}

function statistic(el) {
  var plus = 0,
      minus = 0,
      zero = 0,
      even = 0,
      odd = 0;

  for (var i = 1; i <= 10; i++) {
    var currentNum = parseInt(prompt('Enter number'));

    if (!isNaN(currentNum)) {
      if (Math.sign(currentNum) === 1) {
        plus++;
      } else {
        Math.sign(currentNum) === -1 ? minus++ : zero++;
      }

      currentNum % 2 === 0 ? even++ : odd++;
    }
  }

  el.previousElementSibling.innerHTML = "<p>\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u0442\u0430\u043A\u0456 \u0447\u0438\u0441\u043B\u0430:</p><ul>\n      <li><b>\u0414\u043E\u0434\u0430\u0442\u043D\u0456\u0445: </b>".concat(plus, "</li>\n      <li><b>\u0412\u0456\u0434\u2019\u0454\u043C\u043D\u0456: </b>").concat(minus, "</li>\n      <li><b>\u041D\u0443\u043B\u0456\u0432: </b>").concat(zero, "</li>\n      <li><b>\u041F\u0430\u0440\u043D\u0456: </b>").concat(even, "</li>\n      <li><b>\u041D\u0435\u043F\u0430\u0440\u043D\u0456: </b>").concat(odd, "</li>\n   </ul>");
}

function dayWeek() {
  var date = new Date();
  var day = date.getDay();
  var currentDay = '';

  do {
    switch (day) {
      case 0:
        currentDay = 'неділя';
        break;

      case 1:
        currentDay = 'понеділок';
        break;

      case 2:
        currentDay = 'вівторок';
        break;

      case 3:
        currentDay = 'середа';
        break;

      case 4:
        currentDay = 'четверг';
        break;

      case 5:
        currentDay = "п'ятниця";
        break;

      case 6:
        currentDay = 'субота';
        break;
    }

    day < 6 ? day++ : day = 0;
  } while (confirm("\u0417\u0430\u0440\u0430\u0437 ".concat(currentDay, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?")));
}

function guessNumber(el) {
  var start = 0,
      end = 100,
      middle = 50,
      sign = '';
  alert("загадайте число від 0 до 100");

  do {
    middle = Math.round((end + start) / 2);
    sign = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E <, > \u0430\u0431\u043E = ".concat(middle, "(\u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0439 \u0441\u0438\u043C\u0432\u043E\u043B)"));

    switch (sign) {
      case '<':
        ;
        end = middle;
        break;

      case '>':
        start = middle;
        break;
    }
  } while (sign !== '=');

  el.previousElementSibling.innerText = "\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0437\u0430\u0433\u0430\u0434\u0430\u043D\u043D\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(middle);
}

function showTable(el) {
  var outputHTML = '<table><tbody>';

  for (var i = 2; i <= 9; i++) {
    outputHTML += '<tr>';

    for (var j = 1; j <= 10; j++) {
      outputHTML += "<td>".concat(i * j, "</td>");
    }

    ;
    outputHTML += '</tr>';
  }

  ;
  outputHTML += '</tbody></table>';
  el.previousElementSibling.innerHTML = outputHTML;
}

function showNextDay(el) {
  var day = parseInt(prompt('Enter day'));
  var month = parseInt(prompt('Enter month'));
  var year = parseInt(prompt('Enter year')); // 10.02.2019 => 11.02.2019
  // 31.12.2019 => 01.01.2020
  // 28.02.2020 => 29.02.2020; 
  //28.02.2021 => 01.03.2021;

  var newDay = day + 1;
  var newMonth = month;
  var newYear = year;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (newDay == 32) {
        newDay = 1;
        newMonth++;
      }

      ;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (newDay == 31) {
        newDay = 1;
        newMonth++;
      }

      ;
      break;

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        if (newDay == 30) {
          newDay = 1;
          newMonth++;
        }
      } else {
        if (newDay == 29) {
          newDay = 1;
          newMonth++;
        }
      }

      ;
      break;
  }

  if (newMonth == 13) {
    newMonth = 1;
    newYear++;
  }

  var addZero = function addZero(num) {
    return num < 10 ? '0' + num : '' + num;
  };

  if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
    el.previousElementSibling.innerText = "next date: ".concat(addZero(newDay), "/").concat(addZero(newMonth), "/").concat(newYear);
  } else {
    el.previousElementSibling.innerText = 'Enter correct data';
  }
}