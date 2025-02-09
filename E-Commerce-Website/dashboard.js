document.addEventListener('DOMContentLoaded', function() {
  const username = localStorage.getItem('username');
  document.getElementById('username').innerText = username;

  
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

  document.getElementById('category-select').addEventListener('change', function() {
    if (this.value === 'all') {
      fetchAllProducts(); 
      fetchProductsByCategory(this.value);
    }
  });

  
  document.getElementById('shop').addEventListener('click', function() {
    fetchAllProducts();
  });

  
  function fetchAllProducts() {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const products = response.data;
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

      
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
          button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const selectedProduct = products.find(product => product.id == productId);
            addToCart(selectedProduct);
          });
        });
      });
  }

  function fetchProductsByCategory(category) {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => {
        const products = response.data;
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

  
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
          button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const selectedProduct = products.find(product => product.id == productId);
            addToCart(selectedProduct);
          });
        });
      });
  }


  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
  }

  
  document.getElementById('cart').addEventListener('click', function() {
    window.location.href = 'cart.html';
  });


  document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
  });
});
