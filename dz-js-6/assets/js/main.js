let CART = [
   {
      id: 1234,
      name: 'Milk',
      price: 30.00,
      qty: 2,
      total: 60.00,
      isBuy: false
   },
   {
      id: 2345,
      name: 'Apple',
      price: 10.25,
      qty: 3,
      total: 30.75,
      isBuy: false
   }
];

function addToCart() {
   const name = document.getElementById("prod_name").value;
   const qty = document.getElementById("prod_qty").valueAsNumber;
   const price = document.getElementById("prod_price").valueAsNumber;
   function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }
   if (name === '' || isNaN(price) || isNaN(qty)) {
      toast.danger("Enter product info");
      return ;
   };
   const ind = CART.findIndex(el => el.name === name);
   if (ind !== -1) {
      CART[ind].qty += qty;
      CART[ind].total = CART[ind].qty * CART[ind].price;
      CART[ind].isBuy = false;
   } else {

      CART.push(
         {
            id: getRandomIntInclusive(1000, 9999),
            name,
            qty,
            price,
            total: qty * price,
            isBuy: false
         }
      );
   }
   document.getElementById("prod_name").value = '';
   document.getElementById("prod_qty").value = '1';
   document.getElementById("prod_price").value = '';
   toast.success('Successfuly added to cart');
   viewCartList();
}
function removeProduct(_elm) {
   if (confirm("Delete product?")) {
      const id = +_elm.closest('tr').dataset.id;
      const index = CART.findIndex((product) => product.id === id);
      CART.splice(index, 1);
      _elm.closest('tr').remove();
      toast.success('Product removed');
      showTotal();
   }
}
function buyProduct(_elm) {
   const tr = _elm.closest('tr');
   const id = +tr.dataset.id;
   const index = CART.findIndex((product) => product.id === id);
   console.log(index, id);
   CART[index].isBuy = true;
   tr.children[1].innerHTML = '<span class="badge bg-success">Buyed</span>';
   tr.children[tr.children.length - 1].innerText = '';
   tr.querySelector('button[data-change="+1"]').setAttribute("disabled", "");
   tr.querySelector('button[data-change="-1"]').setAttribute("disabled", "");
   toast.info('Product is bought');
   //viewCartList();
   showTotal();
}
function changeProductQTY(_elm) {
   const operator = _elm.dataset.change;
   const tr = _elm.closest('tr');
   const id = +tr.dataset.id;
   const index = CART.findIndex((product) => product.id === id);
   CART[index].qty = CART[index].qty + parseInt(operator);
   if (CART[index].qty === 0) {
      const removeBtn = tr.querySelector('.btn-danger');
      removeProduct(removeBtn);
      return
   }
   CART[index].total = CART[index].qty * CART[index].price;
   CART[index].isBuy = false;
   tr.querySelector('.form-control').value = CART[index].qty;
   tr.querySelector('.total').innerText = CART[index].total.toFixed(2);
   //viewCartList();
   showTotal();
}
function viewCartList() {
   let tBody = '';
   CART.forEach(function(product) {
       tBody += cartListRow(product);
   });
   document.getElementById("cart_tbody").innerHTML = tBody;
   showTotal();
}
function showTotal() {
   const totals = calcTotal();
   document.getElementById("cartTotal").innerHTML  = (totals.totalSum).toFixed(2);
   document.getElementById("bought").innerHTML  = (totals.bought).toFixed(2);
   document.getElementById("notBought").innerHTML  = (totals.notBought).toFixed(2);
}
function cartListRow(product) {
   let badge = product.isBuy ? `<span class="badge bg-success">Buyed</span>` : 
                               `<span class="badge bg-danger">Not Buyed</span>` 
      return `
      <tr data-id="${product.id}">
         <td>${product.name}</td>
         <td>${badge}</td>
         <td>
            <div class="input-group mb-3">
               <button class="btn btn-outline-secondary" type="button" onclick="changeProductQTY(this)" data-change="+1">+</button>
               <input type="number" value="${product.qty}" readonly class="form-control" placeholder="" aria-label="Example text with two button addons">
               <button class="btn btn-outline-secondary" type="button" onclick="changeProductQTY(this)" data-change="-1">-</button>
            </div>
         
         </td>
         <td>${product.price.toFixed(2)}</td>
         <td class="total">${product.total.toFixed(2)}</td>
         <td>
         ${!product.isBuy ? '<button type="button" class="btn btn-warning" onclick="buyProduct(this)">Buy</button>' : ''}
         
         ${!product.isBuy ? '<button type="button" class="btn btn-danger" onclick="removeProduct(this)">Delete</button>' : ''}
         </td>
      </tr>
      `
}
function calcTotal() {
   //return CART.reduce((acc, val)=> acc + val.total, 0)
   let bought = 0, notBought = 0, totalSum = 0;
   CART.forEach(function(product) {
      (product.isBuy) ? bought += product.total : notBought += product.total;
   })
   totalSum = bought + notBought;
   return {bought, notBought, totalSum};
}
viewCartList();