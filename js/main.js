const getProducts = async () => {

    try {
        const res = await fetch('./data/products.json')
        const data = await res.json()
        const products = data.products
        console.log(products)

        return products
    } catch(error) {
        console.error('Hove um erro ao carregar os produtos...')
        console.error(error)
    }
}

const ProductWrapper = document.getElementById('products')

window.addEventListener('DOMContentLoaded', async function() {
    let products = await getProducts()

    products = products.filter(product => product.category === 'filter-sneaker')
    displayProductItems(products)
})

const displayProductItems = items => {
    let displayProduct = items.map(product => 

        ` <div class="product-content">
            <div class="product-top flex1">
                <div class="product-image">
                    <img src=${product.url} alt=${product.title}>
                </div>
                <div class="product-icon">
                    <i class="uil uil-heart"></i>
                </div>
            </div>
            <div class="product-bottom">
                <h4>${product.title}</h4>
                <div class="product-tating">
                    <i class="uil uil-star"></i>
                    <i class="uil uil-star"></i>
                    <i class="uil uil-star"></i>
                    <i class="uil uil-star"></i>
                    <i class="uil uil-star"></i>
                </div>
                <div class="product-price">
                    <div class="price">R$ ${product.price}</div>
                    <button class="btn">comprar</button>
                </div>
            </div>
         </div> 
        `
    );

    displayProduct = displayProduct.join("")
    ProductWrapper.innerHTML = displayProduct;
}