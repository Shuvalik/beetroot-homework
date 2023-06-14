"use strict";

var CART = [{
  name: 'Milk',
  price: 30.00,
  qty: 2,
  total: 60.00,
  isBuy: false
}, {
  name: 'Apple',
  price: 10.25,
  qty: 3,
  total: 30.75,
  isBuy: false
}];

function addToCart() {
  var name = document.getElementById("prod_name").value;
  var qty = document.getElementById("prod_qty").valueAsNumber;
  var price = document.getElementById("prod_price").valueAsNumber;

  if (name === '' || isNaN(price) || isNaN(qty)) {
    toast.danger("Enter product info");
    return;
  }

  ;
  var ind = CART.findIndex(function (el) {
    return el.name === name;
  });

  if (ind !== -1) {
    CART[ind].qty += qty;
    CART[ind].total = CART[ind].qty * CART[ind].price;
    CART[ind].isBuy = false;
  } else {
    CART.push({
      name: name,
      qty: qty,
      price: price,
      total: qty * price,
      isBuy: false
    });
  }

  document.getElementById("prod_name").value = '';
  document.getElementById("prod_qty").value = '1';
  document.getElementById("prod_price").value = '';
  toast.success('Successfuly added to cart');
  viewCartList();
}

function removeProduct(_elm) {
  if (confirm("Delete product?")) {
    var index = _elm.closest('tr').dataset.index;

    CART.splice(index, 1);

    _elm.closest('tr').remove();
  }
}

function buyProduct(_elm) {
  var tr = _elm.closest('tr');

  var index = tr.dataset.index; // todo

  CART[index].isBuy = true;
  toast.info('Product is bought');
  viewCartList();
}

function changeProductQTY(index, operator) {
  CART[index].qty = CART[index].qty + parseInt(operator);

  if (CART[index].qty === 0) {
    removeProduct(index);
    return;
  }

  CART[index].total = CART[index].qty * CART[index].price;
  CART[index].isBuy = false;
  viewCartList();
}

function viewCartList() {
  var tBody = '';
  CART.forEach(function (product, index) {
    var badge = product.isBuy ? "<span class=\"badge bg-success\">Buyed</span>" : "<span class=\"badge bg-danger\">Buyed</span>";
    tBody += "\n      <tr data-index=\"".concat(index, "\">\n         <td>").concat(product.name, "</td>\n         <td>").concat(badge, "</td>\n         <td>\n            <div class=\"input-group mb-3\">\n               <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQTY(").concat(index, ", +1)\">+</button>\n               <input type=\"number\" value=\"").concat(product.qty, "\" readonly class=\"form-control\" placeholder=\"\" aria-label=\"Example text with two button addons\">\n               <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQTY(").concat(index, ", -1)\">-</button>\n            </div>\n         \n         </td>\n         <td>").concat(product.price.toFixed(2), "</td>\n         <td>").concat(product.total.toFixed(2), "</td>\n         <td>\n         ").concat(!product.isBuy ? '<button type="button" class="btn btn-warning" onclick="buyProduct(this)">Buy</button>' : '', "\n         \n         ").concat(!product.isBuy ? '<button type="button" class="btn btn-danger" onclick="removeProduct(this)">Delete</button>' : '', "\n         </td>\n      </tr>\n      ");
  });
  var totals = calcTotal();
  document.getElementById("cart_tbody").innerHTML = tBody;
  document.getElementById("cartTotal").innerHTML = totals.totalSum.toFixed(2);
  document.getElementById("bought").innerHTML = totals.bought.toFixed(2);
  document.getElementById("notBought").innerHTML = totals.notBought.toFixed(2);
}

function calcTotal() {
  //return CART.reduce((acc, val)=> acc + val.total, 0)
  var bought = 0,
      notBought = 0,
      totalSum = 0;
  CART.forEach(function (product) {
    product.isBuy ? bought += product.total : notBought += product.total;
  });
  totalSum = bought + notBought;
  return {
    bought: bought,
    notBought: notBought,
    totalSum: totalSum
  };
}

viewCartList();