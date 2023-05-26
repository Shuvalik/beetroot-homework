"use strict";

function revert() {
  var number = +prompt('Enter number');
  var result = 0; //12345 => 51234;

  if (number >= 10000 && number <= 99999) {
    result = number % 10 * 10000 + Math.trunc(number / 10);
    alert(result);
  } else {
    alert('Please enter number between 10000 and 99999');
  }
}

function kl2ml() {
  var number = +prompt('Enter km');
  var k = 0.621371;
  var result = 0;

  if (number) {
    result = number * k;
    alert("in ".concat(number, "km - ").concat(result, "ml"));
  } else {
    alert('Please enter number');
  }
}

if ("0") {
  alert("Hello World");
}