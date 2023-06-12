
let Car = {
   manufacturer: 'Chrysler',
   model: 'Voyager',
   year: 2004,
   average_speed: 85,
   fuel_tank: 60,
   fuel_consumption: 5.5,
   drivers: ['Елена'],
   output_info: function() {
      let text = `виробник: ${this.manufacturer}; 
      модель: ${this.model}; 
      рік випуску: ${this.year}рік; 
      середня швидкість: ${this.average_speed}км/год;
       обсяг паливного баку: ${this.fuel_tank}літрів; 
       середня витрата палива на 100 км.: ${this.fuel_consumption}літрів; 
       водії: ${this.drivers}.`;
       return text;

   },
   add_driver: function(driver) {
      return this.drivers.push(driver);
   },
   check_driver: function(driver) {
      for (let i = 0; i <= this.drivers.length; i++) {
         if (driver == this.drivers[i]) {return true};
      }
      return false;
   },
   travel: function(distance) {
      let time = Math.ceil(distance / this.average_speed);
      let fluel = Math.ceil(time * this.fuel_consumption);
      let stopTime = Math.ceil(time / 4);
      (time % 4 == 0) ? time += stopTime - 1 : time += stopTime;
      return {
         time,
         fluel
      }
   }
};
document.getElementById('carInfo').innerText = Car.output_info();

function addDriver() {
   let newDriver = prompt('Введить ім’я водія.')
   Car.add_driver(newDriver);
   document.getElementById('carInfo').innerText = Car.output_info();
}
function checkDriver() {
   const driver = prompt('Введить ім’я водія.');
   if (Car.check_driver(driver)) {
      alert('Такій водій є в перечні водіїв')
   } else {
      alert('Такого водія немає в перечні водіїв')
   }
}
function checkTimeFuel() {
   const distance = parseInt(prompt('Введить відстань'));
   if (!isNaN(distance)) {
      const result = Car.travel(distance);
      alert(`Ваш час у подорожі становить ${result.time}ч. і ви витратете ${result.fluel}літрів палива`);
   }
   
}
function correctNumber(n) {
  if (n < 10) {
    n = `0${n}`;
  }
  return n;
}
function countHours(newHours, currentHours) {
      newHours += currentHours;
      if (newHours >= 24) {
         let count = parseInt(newHours / 24);
         currentHours = newHours - count * 24;
      } else {
         currentHours = newHours;
      }
      return currentHours
}
function countMinutes(newMinutes, currentMinutes) {
      newMinutes += currentMinutes;
      if (newMinutes >= 60) {
         let newHours = parseInt(newMinutes / 60);
         currentMinutes = newMinutes - newHours * 60;
         
         Godynyk.hour = countHours(newHours, Godynyk.hour);
      } else {
         currentMinutes = newMinutes;
      }
      return currentMinutes
}
//const date = new Date();
let Godynyk = {
   //hour: correctNumber(date.getHours()),
   //minute: correctNumber(date.getMinutes()),
   //second: correctNumber(date.getSeconds()),
   hour: 18,
   minute: 9,
   second: 2,
   output_time: function() {
      return `${correctNumber(this.hour)}:${correctNumber(this.minute)}:${correctNumber(this.second)}`;
   },
   add_second: function(second) {
      let newSecond = this.second + second;
      if (newSecond >= 60) {
         let newMinutes = parseInt(newSecond / 60);
         this.second = newSecond - newMinutes * 60;
         this.minute = countMinutes(newMinutes, this.minute);
      } else {
         this.second = newSecond;
      }
      return `${correctNumber(this.hour)}:${correctNumber(this.minute)}:${correctNumber(this.second)}`;
   },
   add_hour: function(hour) {
      this.hour = countHours(hour, this.hour);
      return `${correctNumber(this.hour)}:${correctNumber(this.minute)}:${correctNumber(this.second)}`;
   },
   add_minute: function(minute) {
      this.minute = countMinutes(minute, this.minute);
      return `${correctNumber(this.hour)}:${correctNumber(this.minute)}:${correctNumber(this.second)}`;
   }
}
document.getElementById('time').innerText = Godynyk.output_time();
function addSecond() {
   let second = parseInt(prompt('Введить секунди'));
   document.getElementById('time').innerText = Godynyk.add_second(second);
}
function addHour() {
   let hours = parseInt(prompt('Введить години'));
   document.getElementById('time').innerText = Godynyk.add_hour(hours);
}
function addMinute() {
   let minutes = parseInt(prompt('Введить хвилини'));
   document.getElementById('time').innerText = Godynyk.add_minute(minutes);
}

let drib = {
   topSide: 2,
   bottomSide: 7
}
let operationDrip = {
   add: function(drib1, drib2) {
      let result;
      if (drib1.bottomSide !== drib2.bottomSide) {
         result = this.commonDenominator(drib1, drib2);
      }
      return {
         topSide: result.drib1_changed.topSide + result.drib2_changed.topSide,
         bottomSide: result.drib1_changed.bottomSide
      }
   },
   minus: function(drib1, drib2) {
      let result;
      if (drib1.bottomSide !== drib2.bottomSide) {
         result = this.commonDenominator(drib1, drib2);
      }
      return {
         topSide: result.drib1_changed.topSide - result.drib2_changed.topSide,
         bottomSide: result.drib1_changed.bottomSide
      }
   },
   multiplication: function(drib1, drib2) {
      return {
         topSide: drib1.topSide * drib2.topSide,
         bottomSide: drib1.bottomSide * drib2.bottomSide
      }
   },
   division: function(drib1, drib2) {
      return {
         topSide: drib1.topSide * drib2.bottomSide,
         bottomSide: drib1.bottomSide * drib2.topSide
      }
   },
   cut: function(drib) {
      let max, min;
      if (drib.topSide > drib.bottomSide) {
         min = drib.bottomSide
         } else {
             min = drib.topSide
            };
            
          for (let i = min; i >= 1; i--) {
               if (drib.topSide % i == 0 && drib.bottomSide % i == 0) {
                  return {
                     topSide: drib.topSide / i,
                     bottomSide: drib.bottomSide / i
                  }
               }
            }
      
   },
   commonDenominator: function(drib1, drib2) {
      let drib1_changed = {
         topSide: drib1.topSide * drib2.bottomSide,
         bottomSide: drib1.bottomSide * drib2.bottomSide
      };
      let drib2_changed = {
         topSide: drib2.topSide * drib1.bottomSide,
         bottomSide: drib2.bottomSide * drib1.bottomSide
      };
      return {
         drib1_changed,
         drib2_changed
      }
   }
}
function add() {
   let drib1 = {
      topSide: parseInt(prompt('Введить чисельник дробі 1')),
      bottomSide: parseInt(prompt('Введить знаменник дробі 1')),
   };
   let drib2 = {
      topSide: parseInt(prompt('Введить чисельник дробі 2')),
      bottomSide: parseInt(prompt('Введить знаменник дробі 2')),
   }
   let result = operationDrip.add(drib1, drib2);
   result = operationDrip.cut(result);
   document.getElementById('result').innerText = `${drib1.topSide}/${drib1.bottomSide} + ${drib2.topSide}/${drib2.bottomSide} = ${result.topSide}/${result.bottomSide}`;
}
function minus() {
   let drib1 = {
      topSide: parseInt(prompt('Введить чисельник дробі 1')),
      bottomSide: parseInt(prompt('Введить знаменник дробі 1')),
   };
   let drib2 = {
      topSide: parseInt(prompt('Введить чисельник дробі 2')),
      bottomSide: parseInt(prompt('Введить знаменник дробі 2')),
   }
   let result = operationDrip.minus(drib1, drib2);
   result = operationDrip.cut(result);
   document.getElementById('result').innerText = `${drib1.topSide}/${drib1.bottomSide} - ${drib2.topSide}/${drib2.bottomSide} = ${result.topSide}/${result.bottomSide}`;
}
function multiplication() {
   let drib1 = {
      topSide: parseInt(prompt('Введить чисельник дробі 1')),
      bottomSide: parseInt(prompt('Введить знаменник дробі 1')),
   };
   let drib2 = {
      topSide: parseInt(prompt('Введить чисельник дробі 2')),
      bottomSide: parseInt(prompt('Введить знаменник дробі 2')),
   }
   let result = operationDrip.multiplication(drib1, drib2);
   
   result = operationDrip.cut(result);
   document.getElementById('result').innerText = `${drib1.topSide}/${drib1.bottomSide} * ${drib2.topSide}/${drib2.bottomSide} = ${result.topSide}/${result.bottomSide}`;
}
function division() {
   let drib1 = {
      topSide: parseInt(prompt('Введить чисельник дробі 1')),
      bottomSide: parseInt(prompt('Введить знаменник дробі 1')),
   };
   let drib2 = {
      topSide: parseInt(prompt('Введить чисельник дробі 2')),
      bottomSide: parseInt(prompt('Введить знаменник дробі 2')),
   }
   let result = operationDrip.division(drib1, drib2);
   result = operationDrip.cut(result);
   document.getElementById('result').innerText = `${drib1.topSide}/${drib1.bottomSide} : ${drib2.topSide}/${drib2.bottomSide} = ${result.topSide}/${result.bottomSide}`;
}
function cut() {
   let drib1 = {
      topSide: parseInt(prompt('Введить чисельник дробі 1')),
      bottomSide: parseInt(prompt('Введить знаменник дробі 1')),
   };
   let result = operationDrip.cut(drib1);
   document.getElementById('result').innerText = `${drib1.topSide}/${drib1.bottomSide} = ${result.topSide}/${result.bottomSide}`;
}



