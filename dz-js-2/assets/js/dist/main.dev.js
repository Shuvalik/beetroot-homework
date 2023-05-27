"use strict";

function add(el) {
  var variable1 = 0.1;
  var variable2 = 0.2;
  el.previousElementSibling.innerText = (variable1 + variable2).toFixed(1);
}

function add2(el) {
  var variable1 = "1";
  var variable2 = 2;
  el.previousElementSibling.innerText = +variable1 + variable2;
}

function countFiles(el) {
  var sizeFile = 820;
  var freMemory = parseInt(document.getElementById('fleshcard').value);
  var result = Math.trunc(freMemory * 1024 / sizeFile);

  if (!isNaN(freMemory) && freMemory) {
    el.previousElementSibling.innerText = "\u041D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443 \u043E\u0431\u0441\u044F\u0433\u043E\u043C ".concat(freMemory, " \u0413\u0431 \u043F\u043E\u043C\u0456\u0441\u0442\u0438\u0446\u044F ").concat(result, " \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0432 820 \u041C\u0431");
  } else {
    el.previousElementSibling.innerText = "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u043E\u0431\u0441\u044F\u0433 \u0444\u043B\u0435\u0448\u043A\u0438 \u0432 \u0413\u0431(\u0442\u0456\u043B\u044C\u043A\u0438 \u0447\u0438\u0441\u043B\u043E)";
  }
}

function bayChockolate(el) {
  var ourCash = parseInt(document.getElementById('cash').value);
  var costChockolate = parseInt(document.getElementById('costChockolate').value);
  var result = Math.trunc(ourCash / costChockolate);

  if (!isNaN(ourCash) && ourCash && !isNaN(costChockolate) && costChockolate) {
    el.previousElementSibling.innerText = "\u0412\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 ".concat(result, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0438");
  } else {
    el.previousElementSibling.innerText = "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0441\u0443\u043C\u0443 \u0433\u0440\u043E\u0448\u0435\u0439 \u0432 \u0433\u0430\u043C\u0430\u043D\u0446\u0456 \u0456 \u0446\u0456\u043D\u0443 \u043E\u0434\u043D\u0456\u0454\u0457 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0438(\u0442\u0456\u043B\u044C\u043A\u0438 \u0447\u0438\u0441\u043B\u043E) \u0442\u0430 ";
  }
}