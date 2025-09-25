const products = [
    { name: "MacBook Air", price: 999, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-hero-202306?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1689050551319" },
    { name: "MacBook Pro 14", price: 1999, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-14-spacegray-hero-202306?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1689050551421" },
    { name: "MacBook Pro 16", price: 2499, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-16-spacegray-hero-202306?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1689050551333" }
];

// Render products dynamically
const container = document.querySelector('.product-container');

function displayProducts(list) {
    container.innerHTML = '';
    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img loading="lazy" src="${p.img}" alt="${p.name}">
            <h2>${p.name}</h2>
            <p>Price: $${p.price}</p>
        `;
        card.addEventListener('click', () => alert(`Clicked on ${p.name}`));
        container.appendChild(card);
    });
}

// Initial render
displayProducts(products);

// Sorting
document.getElementById('sort').addEventListener('change', (e) => {
    let sorted = [...products];
    if (e.target.value === 'low') sorted.sort((a,b) => a.price - b.price);
    else if (e.target.value === 'high') sorted.sort((a,b) => b.price - a.price);
    displayProducts(sorted);
});
