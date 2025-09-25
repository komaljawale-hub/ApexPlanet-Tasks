// NAVBAR ACTIVE LINK
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav a").forEach(a => {
    if (a.href === location.href) a.classList.add("active");
  });
});

// TO-DO APP
const STORAGE_KEY = "tasks";
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }
function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="delTask(${i})">Delete</button>`;
    list.appendChild(li);
  });
}
form.addEventListener("submit", e => {
  e.preventDefault();
  tasks.push(input.value);
  input.value = "";
  save(); renderTasks();
});
function delTask(i) { tasks.splice(i, 1); save(); renderTasks(); }
renderTasks();

// PRODUCT LISTING
const products = [
  { name: "Laptop", category: "Electronics", price: 70000 },
  { name: "Phone", category: "Electronics", price: 30000 },
  { name: "Shoes", category: "Fashion", price: 2000 },
  { name: "T-Shirt", category: "Fashion", price: 800 },
  { name: "Headphones", category: "Electronics", price: 2500 }
];
const grid = document.getElementById("productGrid");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");

// Fill category filter
const categories = ["All", ...new Set(products.map(p => p.category))];
categorySelect.innerHTML = categories.map(c => `<option>${c}</option>`).join("");

// Render products
function renderProducts() {
  let filtered = [...products];
  const cat = categorySelect.value;
  const sort = sortSelect.value;

  if (cat !== "All") filtered = filtered.filter(p => p.category === cat);

  if (sort === "price-asc") filtered.sort((a,b)=>a.price-b.price);
  if (sort === "price-desc") filtered.sort((a,b)=>b.price-a.price);

  grid.innerHTML = "";
  filtered.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <h4>${p.name}</h4>
        <p>${p.category}</p>
        <p class="price">₹${p.price}</p>
      </div>`;
  });
}
categorySelect.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);
renderProducts();
