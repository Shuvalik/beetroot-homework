"use strict";

/*

function functionName() {};
(function () {
});
(item) => item * 2;
 */
function showArgument(arg1, arg2, arg3) {
  alert(showArgument.length);
}

function comparison(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else {
    if (num1 < num2) {
      return -1;
    } else {
      return 0;
    }

    ;
  }
}

function onFunction(el) {
  el.previousElementSibling.innerText = comparison(document.getElementById('number1').value, document.getElementById('number2').value);
}

function factorial(el) {
  var number = parseInt(document.getElementById('number11').value);
  var factorial = 1;

  for (var i = 2; i <= number; i++) {
    factorial *= i;
  }

  ;
  el.previousElementSibling.innerText = factorial;
}

function createNUMBER(el) {
  var num1 = parseInt(document.getElementById('number111').value);
  var num2 = parseInt(document.getElementById('number222').value);
  var num3 = parseInt(document.getElementById('number333').value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    el.previousElementSibling.innerText = 'Вкажіть корректно цифри';
  } else {
    el.previousElementSibling.innerText = num1 * 100 + num2 * 10 + num3;
  }
}

function square(side1, side2) {
  if (arguments.length === 2) {
    return side1 * side2;
  } else {
    return side1 * side1;
  }

  ;
}

;

function onFunction2(el) {
  var side1 = parseInt(document.getElementById('number1111').value);
  var side2 = parseInt(document.getElementById('number2222').value);

  if (isNaN(side1) && isNaN(side2)) {
    el.previousElementSibling.innerText = 'Вкажіть корректно довжину і ширину прямокутника';
  } else if (isNaN(side1)) {
    el.previousElementSibling.innerText = square(side2);
  } else if (isNaN(side2)) {
    el.previousElementSibling.innerText = square(side1);
  } else {
    el.previousElementSibling.innerText = square(side1, side2);
  }

  ;
}

function doskonale(number) {
  var dilnikySum = 1;

  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      dilnikySum += i;
    }

    ;
  }

  if (dilnikySum == number) {
    return true;
  } else {
    return false;
  }

  ;
}

function checkNumber(el) {
  var number = parseInt(document.getElementById('number11111').value);

  if (doskonale(number)) {
    el.previousElementSibling.innerText = 'досконалe число';
  } else {
    el.previousElementSibling.innerText = 'нe досконалe число';
  }

  ;
}

function findNumber(el) {
  var min = parseInt(document.getElementById('number111111').value);
  var max = parseInt(document.getElementById('number222222').value);

  if (min > max || isNaN(min) || isNaN(max)) {
    el.previousElementSibling.innerText = 'Вкажить корректно діапазон';
    return;
  }

  var outputString = '';

  for (var i = min; i <= max; i++) {
    if (doskonale(i)) {
      outputString += "".concat(i, ", ");
    }
  }

  outputString == '' ? el.previousElementSibling.innerText = 'У вказаному диапозоні немає досконалих чісел' : el.previousElementSibling.innerText = "\u0423 \u0432\u043A\u0430\u0437\u0430\u043D\u043E\u043C\u0443 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0456 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0456 \u0447\u0438\u0441\u043B\u0430 ".concat(outputString.substring(0, outputString.length - 2));
}