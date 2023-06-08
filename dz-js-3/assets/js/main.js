
function age(el) {
   let age = parseInt(document.getElementById('age').value);
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
   let number = document.getElementById('number').valueAsNumber;
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
   let num1 = document.getElementById('number1').valueAsNumber;
   let num2 = document.getElementById('number2').valueAsNumber;
   let i, rez = 0;
   if (num1 > num2) {
      i = num2;
      while ( i < num1) {
         i++;
         rez += i;
      }
      el.previousElementSibling.innerText =  `Cума всіх чисел між ${num1} і ${num2} дорівнює ${rez}`;
   } else {
      if (num1 < num2) {
         i = num1;
         while ( i < num2) {
            i++;
            rez += i;
         }
         el.previousElementSibling.innerText =  `Cума всіх чисел між ${num1} і ${num2} дорівнює ${rez}`;
      } else { el.previousElementSibling.innerText =  `Cума всіх чисел між ${num1} і ${num2} дорівнює 0`; }
   }
}
function spilnyDilnyk(el) {
   let num1 = document.getElementById('number11').valueAsNumber;
   let num2 = document.getElementById('number22').valueAsNumber;
   let i;
   num1 <= num2 ? i = num1 : i = num2;
   while (i >= 0) {
      if ((num1 % i === 0 && num2 % i === 0)) {
         el.previousElementSibling.innerText =  `Найбільший спільний дільник чисел ${num1} і ${num2} є число ${i}`;
         return;
      }
      i--;
   }
}
function dilnyk(el) {
   let num = document.getElementById('number3').valueAsNumber;
   let rez = '';
   for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) { rez = rez + i + ', '}
   };
   el.previousElementSibling.innerText =  `Дільниками числа ${num} є ${rez}${num}`;
}
//12321
function palidrom(el) {
   let num = document.getElementById('number4').valueAsNumber;
   if (num && String(num).length === 5) {
      if ((Math.trunc(num / 10000) === num % 10) && (Math.trunc(num / 1000) % 10) === Math.trunc((num % 100) / 10)) {
         el.previousElementSibling.innerText = 'Ваше число є паліндромом';
      } else {
         el.previousElementSibling.innerText = 'Ваше число не є паліндромом';
      }
   } else {
      el.previousElementSibling.innerText = 'Вкажіть корректно п’ятирозрядне число';
   }
}
function sale(el) {
   let sum = document.getElementById('summa').valueAsNumber;
   if (sum >= 200 && sum < 300) {
      el.previousElementSibling.innerText = `Ваша сума зі знижкою дорівнює ${sum - sum * 0.03}`;
   } else {
      if (sum >= 300 && sum < 500) {
         el.previousElementSibling.innerText = `Ваша сума зі знижкою дорівнює ${sum - sum * 0.05}`;
      } else {
         el.previousElementSibling.innerText = `Ваша сума зі знижкою дорівнює ${sum - sum * 0.07}`;
      }
   }
}
function statistic(el) { 
   let plus = 0, minus = 0, zero = 0, even = 0, odd = 0;
   for (let i = 1; i <= 10; i++) {
      let currentNum = parseInt(prompt('Enter number'));
      if (!(isNaN(currentNum))) {
         if (Math.sign(currentNum) === 1) {
            plus++;
         } else {
            (Math.sign(currentNum) === -1) ? minus++ : zero++;
         }
         (currentNum % 2 === 0) ? even++ : odd++;
      }
   }
   el.previousElementSibling.innerHTML = `<p>Ви ввели такі числа:</p><ul>
      <li><b>Додатніх: </b>${plus}</li>
      <li><b>Від’ємні: </b>${minus}</li>
      <li><b>Нулів: </b>${zero}</li>
      <li><b>Парні: </b>${even}</li>
      <li><b>Непарні: </b>${odd}</li>
   </ul>`;
}
function dayWeek() {
   let date = new Date;
   let day = date.getDay();
   let currentDay = '';
   do {
      switch (day) {
         case 0 :
            currentDay = 'неділя';
            break;
         case 1 :
            currentDay = 'понеділок';
            break;
         case 2 :
            currentDay = 'вівторок';
            break;
         case 3 :
            currentDay = 'середа';
            break;
         case 4 :
            currentDay = 'четверг';
            break;
         case 5 :
            currentDay = "п'ятниця";
            break;
         case 6 :
            currentDay = 'субота';
            break;

      }
      (day < 6) ? day++ : day = 0;
   } while (confirm(`Зараз ${currentDay}. Хочеш побачити наступний день?`))
}
/*
function guessNumber(el) {
   let start = 1,
      end = 100,
      middle = 50;
      alert("загадайте число від 0 до 100");
   do {
      let sign = prompt(`Ваше число <, > або = ${middle}(введіть відповідний символ)`);
      switch (sign) {
         case '<':;
            end = middle;
            middle = Math.round(middle / 2)
            break;
         case '>':
            start = middle;
            middle = Math.round((end + start) / 2);
            break;
         case '=':
            el.previousElementSibling.innerText = `Ваше число загаданне число ${middle}`;
            break
         default:
            el.previousElementSibling.innerText = 'Ваше коректно відповідний символ';
      }
   } while ();
}*/
let scores = [1, 2]
scores.push( 77, 76, 89 );
let l = scores.unshift();
console.log(l);