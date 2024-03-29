const getProducts = async () => {

    try {
        const res = await fetch('./data/products.json');
        const data = await res.json();
        const products = data.products;

        return products;

    } catch(error) {
        console.error('Hove um erro ao carregar os produtos...');
        console.error(error);
    }
};

const ProductWrapper = document.getElementById('products');

window.addEventListener('DOMContentLoaded', async function() {
    let products = await getProducts();

    products = products.filter(product => product.category === 'sneakers');
    displayProductItems(products);
    loadData();
});

const displayProductItems = items => {
    let displayProduct = items.map(product => `
    <div class="product-content">
            <div class="product-top flex1">
                <div class="product-image">
                    <img src=${product.img} alt=${product.name}>
                </div>
                <div class="product-icon">
                    <i class="uil uil-heart"></i>
                </div>
            </div>
            <div class="product-bottom">
                <h4>${product.name}</h4>
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

    displayProduct = displayProduct.join("");
    ProductWrapper.innerHTML = displayProduct;
};


const filters = [...document.querySelectorAll('.collection__filter div')];

filters.forEach(filterCategory => {

    filters[0].classList.add('active');

    filterCategory.addEventListener('click', async e => {

        const id = e.target.getAttribute('data-filter');
        const target = e.target;
        const products = await getProducts();

        filters.forEach(btn => {
            btn.classList.remove('active');
        })

        target.classList.add('active');

        let menuCategory = products.filter(product => {
            if(product.category === id) {
                return product;
            }
        })

        displayProductItems(menuCategory);
    })
});


const categoriesProducts = document.querySelector('.shop .shop__products');
const loadMore = document.querySelector('.more-items');

let currentIndex = 0;

async function loadData() {

    let maxResult = 4;
    let products = await getProducts();

    if(currentIndex >= products.length) {
        loadMore.disabled = true;
        loadMore.innerText = 'Não há mais produtos...';

        return;
    }

    for(let i = 0; i < maxResult; i++) {
        const product = products[i + currentIndex];
        categoriesProducts.insertAdjacentHTML('beforeend', `
        <div class="product">
            <div class="shop-top flex1">
                <img src=${product.img} alt=${product.name}>
            </div>
            <div class="bottom-shop">
                <div class="flex1">
                    <h4>${product.name}</h4>
                    <a href="" class="btn">comprar</a>
                </div>
            </div>
            <div class="shop-price flex1">
            <div>R$ ${product.price}</div>
            </div>
        </div>
        `
        );
    }

    currentIndex += maxResult;
}

loadMore.addEventListener('click', e => {
    e.preventDefault()
    return (
        loadData()
    )
    
})
