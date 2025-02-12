// Элементы DOM
const productContainer = document.getElementById("productContainer");
const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");


fetch('https://fakestoreapi.com/products?limit=10')
    .then(res=>res.json())
    .then(data=>{
        kartochkanichiqar(data)
    })



// Функция для отображения продуктов
function kartochkanichiqar(products) {
    productContainer.innerHTML = ""; // Очищаем контейнер
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description.slice(0, 50)}...</p>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Sotib olish</button>
        `;
        productContainer.appendChild(card);
    });
}