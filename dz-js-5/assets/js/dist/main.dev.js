"use strict";

var Car = {
  manufacturer: 'Chrysler',
  model: 'Voyager',
  year: 2004,
  average_speed: 85,
  fuel_tank: 60,
  fuel_consumption: 5.5,
  drivers: ['Елена'],
  output_info: function output_info() {
    var text = "\u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A: ".concat(this.manufacturer, "; \n      \u043C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, "; \n      \u0440\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443: ").concat(this.year, "\u0440\u0456\u043A; \n      \u0441\u0435\u0440\u0435\u0434\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ").concat(this.average_speed, "\u043A\u043C/\u0433\u043E\u0434;\n       \u043E\u0431\u0441\u044F\u0433 \u043F\u0430\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0431\u0430\u043A\u0443: ").concat(this.fuel_tank, "\u043B\u0456\u0442\u0440\u0456\u0432; \n       \u0441\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u0438\u0432\u0430 \u043D\u0430 100 \u043A\u043C.: ").concat(this.fuel_consumption, "\u043B\u0456\u0442\u0440\u0456\u0432; \n       \u0432\u043E\u0434\u0456\u0457: ").concat(this.drivers, ".");
    return text;
  },
  add_driver: function add_driver(driver) {
    return this.drivers.push(driver);
  },
  check_driver: function check_driver(driver) {
    for (var i = 0; i <= this.drivers.length; i++) {
      if (driver == this.drivers[i]) {
        return true;
      }

      ;
    }

    return false;
  },
  travel: function travel(distance) {
    var time = Math.ceil(distance / this.average_speed);
    var fluel = Math.ceil(time * this.fuel_consumption);
    var stopTime = Math.ceil(time / 4);
    time % 4 == 0 ? time += stopTime - 1 : time += stopTime;
    return {
      time: time,
      fluel: fluel
    };
  }
};
document.getElementById('carInfo').innerText = Car.output_info();

function addDriver() {
  var newDriver = prompt('Введить ім’я водія.');
  Car.add_driver(newDriver);
  document.getElementById('carInfo').innerText = Car.output_info();
}

function checkDriver() {
  var driver = prompt('Введить ім’я водія.');

  if (Car.check_driver(driver)) {
    alert('Такій водій є в перечні водіїв');
  } else {
    alert('Такого водія немає в перечні водіїв');
  }
}

function checkTimeFuel() {
  var distance = parseInt(prompt('Введить відстань'));

  if (!isNaN(distance)) {
    var result = Car.travel(distance);
    alert("\u0412\u0430\u0448 \u0447\u0430\u0441 \u0443 \u043F\u043E\u0434\u043E\u0440\u043E\u0436\u0456 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ".concat(result.time, "\u0447. \u0456 \u0432\u0438 \u0432\u0438\u0442\u0440\u0430\u0442\u0435\u0442\u0435 ").concat(result.fluel, "\u043B\u0456\u0442\u0440\u0456\u0432 \u043F\u0430\u043B\u0438\u0432\u0430"));
  }
}

function correctNumber(n) {
  if (n < 10) {
    n = "0".concat(n);
  }

  return n;
}

function countHours(newHours, currentHours) {
  newHours += currentHours;

  if (newHours >= 24) {
    var count = parseInt(newHours / 24);
    currentHours = newHours - count * 24;
  } else {
    currentHours = newHours;
  }

  return currentHours;
}

function countMinutes(newMinutes, currentMinutes) {
  newMinutes += currentMinutes;

  if (newMinutes >= 60) {
    var newHours = parseInt(newMinutes / 60);
    currentMinutes = newMinutes - newHours * 60;
    Godynyk.hour = countHours(newHours, Godynyk.hour);
  } else {
    currentMinutes = newMinutes;
  }

  return currentMinutes;
} //const date = new Date();


var Godynyk = {
  //hour: correctNumber(date.getHours()),
  //minute: correctNumber(date.getMinutes()),
  //second: correctNumber(date.getSeconds()),
  hour: 18,
  minute: 9,
  second: 2,
  output_time: function output_time() {
    return "".concat(correctNumber(this.hour), ":").concat(correctNumber(this.minute), ":").concat(correctNumber(this.second));
  },
  add_second: function add_second(second) {
    var newSecond = this.second + second;

    if (newSecond >= 60) {
      var newMinutes = parseInt(newSecond / 60);
      this.second = newSecond - newMinutes * 60;
      this.minute = countMinutes(newMinutes, this.minute);
    } else {
      this.second = newSecond;
    }

    return "".concat(correctNumber(this.hour), ":").concat(correctNumber(this.minute), ":").concat(correctNumber(this.second));
  },
  add_hour: function add_hour(hour) {
    this.hour = countHours(hour, this.hour);
    return "".concat(correctNumber(this.hour), ":").concat(correctNumber(this.minute), ":").concat(correctNumber(this.second));
  },
  add_minute: function add_minute(minute) {
    this.minute = countMinutes(minute, this.minute);
    return "".concat(correctNumber(this.hour), ":").concat(correctNumber(this.minute), ":").concat(correctNumber(this.second));
  }
};
document.getElementById('time').innerText = Godynyk.output_time();

function addSecond() {
  var second = parseInt(prompt('Введить секунди'));
  document.getElementById('time').innerText = Godynyk.add_second(second);
}

function addHour() {
  var hours = parseInt(prompt('Введить години'));
  document.getElementById('time').innerText = Godynyk.add_hour(hours);
}

function addMinute() {
  var minutes = parseInt(prompt('Введить хвилини'));
  document.getElementById('time').innerText = Godynyk.add_minute(minutes);
}

var drib = {
  topSide: 2,
  bottomSide: 7
};
var operationDrip = {
  add: function add(drib1, drib2) {
    var result;

    if (drib1.bottomSide !== drib2.bottomSide) {
      result = this.commonDenominator(drib1, drib2);
    }

    return {
      topSide: result.drib1_changed.topSide + result.drib2_changed.topSide,
      bottomSide: result.drib1_changed.bottomSide
    };
  },
  minus: function minus(drib1, drib2) {
    var result;

    if (drib1.bottomSide !== drib2.bottomSide) {
      result = this.commonDenominator(drib1, drib2);
    }

    return {
      topSide: result.drib1_changed.topSide - result.drib2_changed.topSide,
      bottomSide: result.drib1_changed.bottomSide
    };
  },
  multiplication: function multiplication(drib1, drib2) {
    return {
      topSide: drib1.topSide * drib2.topSide,
      bottomSide: drib1.bottomSide * drib2.bottomSide
    };
  },
  division: function division(drib1, drib2) {
    return {
      topSide: drib1.topSide * drib2.bottomSide,
      bottomSide: drib1.bottomSide * drib2.topSide
    };
  },
  cut: function cut(drib) {
    var max, min;

    if (drib.topSide > drib.bottomSide) {
      min = drib.bottomSide;
    } else {
      min = drib.topSide;
    }

    ;

    for (var i = min; i >= 1; i--) {
      if (drib.topSide % i == 0 && drib.bottomSide % i == 0) {
        return {
          topSide: drib.topSide / i,
          bottomSide: drib.bottomSide / i
        };
      }
    }
  },
  commonDenominator: function commonDenominator(drib1, drib2) {
    var drib1_changed = {
      topSide: drib1.topSide * drib2.bottomSide,
      bottomSide: drib1.bottomSide * drib2.bottomSide
    };
    var drib2_changed = {
      topSide: drib2.topSide * drib1.bottomSide,
      bottomSide: drib2.bottomSide * drib1.bottomSide
    };
    return {
      drib1_changed: drib1_changed,
      drib2_changed: drib2_changed
    };
  }
};

function add() {
  var drib1 = {
    topSide: parseInt(prompt('Введить чисельник дробі 1')),
    bottomSide: parseInt(prompt('Введить знаменник дробі 1'))
  };
  var drib2 = {
    topSide: parseInt(prompt('Введить чисельник дробі 2')),
    bottomSide: parseInt(prompt('Введить знаменник дробі 2'))
  };
  var result = operationDrip.add(drib1, drib2);
  result = operationDrip.cut(result);
  document.getElementById('result').innerText = "".concat(drib1.topSide, "/").concat(drib1.bottomSide, " + ").concat(drib2.topSide, "/").concat(drib2.bottomSide, " = ").concat(result.topSide, "/").concat(result.bottomSide);
}

function minus() {
  var drib1 = {
    topSide: parseInt(prompt('Введить чисельник дробі 1')),
    bottomSide: parseInt(prompt('Введить знаменник дробі 1'))
  };
  var drib2 = {
    topSide: parseInt(prompt('Введить чисельник дробі 2')),
    bottomSide: parseInt(prompt('Введить знаменник дробі 2'))
  };
  var result = operationDrip.minus(drib1, drib2);
  result = operationDrip.cut(result);
  document.getElementById('result').innerText = "".concat(drib1.topSide, "/").concat(drib1.bottomSide, " - ").concat(drib2.topSide, "/").concat(drib2.bottomSide, " = ").concat(result.topSide, "/").concat(result.bottomSide);
}

function multiplication() {
  var drib1 = {
    topSide: parseInt(prompt('Введить чисельник дробі 1')),
    bottomSide: parseInt(prompt('Введить знаменник дробі 1'))
  };
  var drib2 = {
    topSide: parseInt(prompt('Введить чисельник дробі 2')),
    bottomSide: parseInt(prompt('Введить знаменник дробі 2'))
  };
  var result = operationDrip.multiplication(drib1, drib2);
  result = operationDrip.cut(result);
  document.getElementById('result').innerText = "".concat(drib1.topSide, "/").concat(drib1.bottomSide, " * ").concat(drib2.topSide, "/").concat(drib2.bottomSide, " = ").concat(result.topSide, "/").concat(result.bottomSide);
}

function division() {
  var drib1 = {
    topSide: parseInt(prompt('Введить чисельник дробі 1')),
    bottomSide: parseInt(prompt('Введить знаменник дробі 1'))
  };
  var drib2 = {
    topSide: parseInt(prompt('Введить чисельник дробі 2')),
    bottomSide: parseInt(prompt('Введить знаменник дробі 2'))
  };
  var result = operationDrip.division(drib1, drib2);
  result = operationDrip.cut(result);
  document.getElementById('result').innerText = "".concat(drib1.topSide, "/").concat(drib1.bottomSide, " : ").concat(drib2.topSide, "/").concat(drib2.bottomSide, " = ").concat(result.topSide, "/").concat(result.bottomSide);
}

function cut() {
  var drib1 = {
    topSide: parseInt(prompt('Введить чисельник дробі 1')),
    bottomSide: parseInt(prompt('Введить знаменник дробі 1'))
  };
  var result = operationDrip.cut(drib1);
  document.getElementById('result').innerText = "".concat(drib1.topSide, "/").concat(drib1.bottomSide, " = ").concat(result.topSide, "/").concat(result.bottomSide);
}