function getDefaultProductDisplay(products){
    let selected=products.map(product=>product.name);
    return selected;
}

function getProductsHTML(filteredProducts) {
    return filteredProducts.map(product => `
        <div class="product-wrapper">
            <input type="checkbox" name="product-checkbox" value="${product.id}">
            ${product}
        </div>
    `).join("");
}



function renderProducts(products){
    const productContainer=document.getElementById("product-container")
    productContainer.innerHTML=getProductsHTML(products)
}

(function initialize() {
    renderProducts(getDefaultProductDisplay(products));
    setupSearch(products);
    discountBroduct(products);
    setUpPrice(products);
    setUpPrice2(products)
})();
