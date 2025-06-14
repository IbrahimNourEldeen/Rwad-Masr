//for search

function filterProducts(searchTerm, products) {
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).map(product => product.name);
}
function setupSearch(products) {
    const searchField = document.getElementById('search-field');
    searchField.addEventListener("keyup", () => {
        const searchTerm = searchField.value;
        const filteredProducts = filterProducts(searchTerm, products);
        renderProducts(filteredProducts);
    });
}


//for min discount
function setUpPrice(products){
    const MinPrice=document.getElementById('min-price');
    MinPrice.addEventListener("keyup", () =>{
        const minTerm=MinPrice.value;
        const filteredPrices=products.filter(product=>{
            if(product.price>=minTerm) return product;
        }).map(product=>product.name);
        renderProducts(filteredPrices);
    })
}
//for max discount
function setUpPrice2(products){
    const maxPrice=document.getElementById('max-price');
    maxPrice.addEventListener("keyup", () =>{
        const maxTerm=maxPrice.value;
        const filteredPrices=products.filter(product=>{
            if(product.price<=maxTerm) return product;
        }).map(product=>product.name);
        renderProducts(filteredPrices);
        if(!maxTerm){
            renderProducts(getDefaultProductDisplay(products));
        }
    })
}


//for sorting

// function assindingSort(products){
//     const Sort=document.querySelector('[value=Low-to-High]')
//     Sort.addEventListener('click',()=>{
//         if(Sort.attributes=='selected'){console.log("hi")}
//     })
// }assindingSort(products)


// for discount

function discountBroduct(products){

    const discountInput=document.getElementById('discount-checkbox')

    discountInput.addEventListener("click",()=>{
        if(discountInput.checked){
            const filterDiscount = products.filter((product)=>{
                if(product.discount==true) return product;
            }).map(product=>product.name);
            renderProducts(filterDiscount);
        }else{
            renderProducts(getDefaultProductDisplay(products));
        }
    })
}





// function displaySelectedProducts(products){
//     const inp=document.querySelector('[name=product-checkbox]')
//     if(inp.checked) console.log("hi");
//     else{}

// }displaySelectedProducts(products)







function displaySelected(products){
    checkoutBtn=document.getElementById("checkout-btn");

    checkoutBtn.addEventListener("click",()=>{
        const res=products.map(product=>{
            return `
                <li>${product.name}    ${product.price}</li>
            `
        })
        document.getElementById('selected-products').innerHTML=res
    })
}displaySelected(products)






















function calculateTotalPrice(selectedProducts)
{
    return 0;
}
function getProductById(products,productId)
{
    return products[0];
}