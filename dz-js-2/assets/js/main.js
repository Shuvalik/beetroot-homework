
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