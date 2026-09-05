import { products } from "./products.js";

import {
    searchProducts,
    filterProductsByCategory
} from "./inventoryUtils.js";

import {
    displayProducts,
    displaySummary
} from "./display.js";


const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");


function updateDisplay() {
    let filteredProducts = products;

    const searchQuery = searchInput.value.trim();
    const selectedCategory = categoryFilter.value;

    if (searchQuery !== "") {
        filteredProducts = searchProducts(
            filteredProducts,
            searchQuery
        );
    }

    filteredProducts = filterProductsByCategory(
        filteredProducts,
        selectedCategory
    );

    displayProducts(filteredProducts);
    displaySummary(products);
}


searchBtn.addEventListener("click", updateDisplay);

categoryFilter.addEventListener("change", updateDisplay);


resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "All";

    displayProducts(products);
    displaySummary(products);
});


displayProducts(products);
displaySummary(products);