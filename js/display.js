import {
    getStockStatus,
    calculateTotalInventoryValue,
    countLowStockProducts,
    countOutOfStockProducts
} from "./inventoryUtils.js";

export function displayProducts(products) {
    const productList = document.getElementById("productList");
    const noResultsMessage = document.getElementById("noResultsMessage");

    productList.innerHTML = "";

    if (products.length === 0) {
        noResultsMessage.textContent = "No products found";
        noResultsMessage.style.display = "block";
        return;
    }

    noResultsMessage.style.display = "none";

    products.forEach(({ id, name, category, price, stock }) => {
        const productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <h3>${name}</h3>
            <p>Category: ${category}</p>
            <p>Price: ₱${price.toLocaleString()}</p>
            <p>Stock: ${stock}</p>
            <p>Status: ${getStockStatus(stock)}</p>
        `;

        productList.appendChild(productCard);
    });
}

export function displaySummary(products) {
    document.getElementById("totalInventoryValue").textContent =
        `₱${calculateTotalInventoryValue(products).toLocaleString()}`;

    document.getElementById("lowStockCount").textContent =
        countLowStockProducts(products);

    document.getElementById("outOfStockCount").textContent =
        countOutOfStockProducts(products);
}