/* Tabs */
function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

/* Pizza Items */
const products = [
  { name: "Margherita Pizza", price: 199, rating: 4.6, image: "https://th.bing.com/th/id/OIP.WvD5iGRciq3ykcyCIi0U6wHaHa?w=208&h=208&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  { name: "Farmhouse Pizza", price: 299, rating: 4.8, image: "https://th.bing.com/th/id/OIP.Wwvs1R8VhiTkTUC5GwAaCgHaF7?w=196&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  { name: "Paneer Tikka Pizza", price: 349, rating: 5, image: "https://th.bing.com/th/id/OIP.8YaoccIY45Kd_Wn6x7afxwHaHG?w=174&h=150&c=6&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  { name: "Veg Loaded Pizza", price: 249, rating: 4.2, image: "https://th.bing.com/th/id/OIP.jlVsVgcmu3xcW9Ujh25WQgHaEJ?w=321&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  { name: "Cheese Burst Pizza", price: 399, rating: 4.9, image: "https://th.bing.com/th/id/OIP.uPLxa7PJJ4jTVaikeM1SvQAAAA?w=306&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  { name: "Pepperoni Pizza", price: 449, rating: 4.8, image: "https://th.bing.com/th/id/OIP.Dm-zsaTqJEgQeRmOzFUk9AHaE8?w=244&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  { name: "Marinara Pizza", price: 750, rating: 5, image: "https://th.bing.com/th/id/OIP.SV8thHmK7ABqtRynoYnaoAHaFj?w=250&h=187&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  { name: "Chicago Pizza", price: 899, rating: 4.7, image: "https://th.bing.com/th/id/OIP.-bFJbzIDJjBGU3CqHccZDwHaEN?w=303&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  { name: "corn Pizza", price: 108, rating: 3.9, image: "https://th.bing.com/th/id/OIP.CljVPpWhs0yRFX8WDo3_awHaE8?w=277&h=186&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  {name: "onion Pizza", price: 75, rating: 3.2, image: "https://th.bing.com/th/id/OIP.9-QVRYPwjVF2nDln-Q9MsAHaFF?w=201&h=150&c=6&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" }
];




/* Render Products */
function renderProducts(list) {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";
  list.forEach((p, index) => {
    let card = document.createElement("div");
    card.className = "product-box";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p class="price">₹ ${p.price}</p>
      <p>⭐ ${p.rating}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

/* Sorting */
function sortProducts() {
  const option = document.getElementById("sortOption").value;
  let sorted = [...products];
  if (option === "priceLowHigh") sorted.sort((a,b)=>a.price-b.price);
  if (option === "priceHighLow") sorted.sort((a,b)=>b.price-a.price);
  if (option === "ratingHighLow") sorted.sort((a,b)=>b.rating-a.rating);
  renderProducts(sorted);
}

/* Cart */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    let div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
  });
  document.getElementById("cartTotal").innerText = total.toFixed(2);
  document.getElementById("cartCount").innerText = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index,1);
  updateCart();
}

/* Checkout */
function checkout() {
  document.getElementById("checkoutForm").style.display = "block";
}

function submitOrder(e) {
  e.preventDefault();
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
  document.getElementById("checkoutForm").style.display = "none";
  document.getElementById("orderMessage").innerText = "✅ Order placed successfully! Your Pizza will arrive soon 🍕";
}

/* Init */
window.onload = function() {
  renderProducts(products);
  updateCart();
}
