let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  alert(product + " added to cart!");
  console.log("Cart:", cart);
  console.log("Total: $" + total);
}

let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item.product + " - $" + item.price;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
}
