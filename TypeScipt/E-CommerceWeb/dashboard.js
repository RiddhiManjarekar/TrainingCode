document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d;
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').innerText = username;
    }
    axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
        const categories = response.data;
        const categorySelect = document.getElementById('category-select');
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
        fetchAllProducts();
    });
    (_a = document.getElementById('category-select')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function () {
        if (this.value === 'all') {
            fetchAllProducts();
        }
        else {
            fetchProductsByCategory(this.value);
        }
    });
    (_b = document.getElementById('shop')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', fetchAllProducts);
    function fetchAllProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => renderProducts(response.data));
    }
    function fetchProductsByCategory(category) {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => renderProducts(response.data));
    }
    function renderProducts(products) {
        const container = document.getElementById('products-container');
        container.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.price} USD</p>
          <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
            container.appendChild(productDiv);
        });
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.getAttribute('data-id');
                if (productId) {
                    const selectedProduct = products.find(product => product.id.toString() === productId);
                    if (selectedProduct)
                        addToCart(selectedProduct);
                }
            });
        });
    }
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        document.getElementById('cart-count').innerText = cart.length.toString();
    }
    (_c = document.getElementById('cart')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
    (_d = document.getElementById('logout')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    });
});
