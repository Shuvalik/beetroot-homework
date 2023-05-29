
function add(el) {
   const variable1 = 0.1;
   const variable2 = 0.2;
   el.previousElementSibling.innerText = (variable1 + variable2).toFixed(1);
}
function add2(el) {
   const variable1 = "1";
   const variable2 = 2;
   el.previousElementSibling.innerText = +variable1 + variable2;
}
function countFiles(el) {
   const sizeFile = 820;
   let freMemory = parseInt(document.getElementById('fleshcard').value);
   let result = Math.trunc((freMemory * 1024) / sizeFile);
   if (!isNaN(freMemory) && freMemory) {
      el.previousElementSibling.innerText = `На флешку обсягом ${freMemory} Гб помістиця ${result} файлів розміром в 820 Мб`;
   } else {
      el.previousElementSibling.innerText = `Вкажіть корректно обсяг флешки в Гб(тільки число)`;
   }
}
function bayChockolate(el) {
   let ourCash = parseInt(document.getElementById('cash').value);
   let costChockolate = parseInt(document.getElementById('costChockolate').value);
   let result = Math.trunc(ourCash / costChockolate);
   if (!isNaN(ourCash) && ourCash && !isNaN(costChockolate) && costChockolate) {
      el.previousElementSibling.innerText = `Ви зможете придбати ${result} шоколадки`;
   } else {
      el.previousElementSibling.innerText = `Вкажіть корректно суму грошей в гаманці і ціну однієї шоколадки(тільки число) та `;
   }
}
function revertNumber(el) {
   let number = parseInt(document.getElementById('inputNumber').value);
   if (number && String(number).length === 3) {
      let result = (number % 10) * 100 + (Math.trunc(number / 10) % 10) * 10 + Math.trunc(number / 100);
      el.previousElementSibling.innerText = result;
   } else {
      el.previousElementSibling.innerText = 'Вкажіть корректно тризначне число';
   }
}
function bank(el) {
   const vidsotok = 0.05;
   let deposut = parseInt(document.getElementById('deposut').value);
   if (deposut) {
      el.previousElementSibling.innerText = `Ваші відсотки за 2 місяці будуть складати ${(deposut * vidsotok) / 12}`;
   } else {
      el.previousElementSibling.innerText = 'Вкажіть суму вкладу';
   }
}
/*
 2 && 0 && 3 = 0 або false

 2 || 0 || 3 = 2 або  true

2 && 0 || 3 = 3 або true

*/