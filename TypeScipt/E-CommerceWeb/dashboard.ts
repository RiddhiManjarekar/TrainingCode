interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }

document.addEventListener('DOMContentLoaded', () => {
    const username: string | null = localStorage.getItem('username');
    if (username) {
      (document.getElementById('username') as HTMLElement).innerText = username;
    }
  
    axios.get<string[]>('https://fakestoreapi.com/products/categories')
      .then(response => {
        const categories = response.data;
        const categorySelect = document.getElementById('category-select') as HTMLSelectElement;
        categories.forEach(category => {
          const option = document.createElement('option');
          option.value = category;
          option.textContent = category;
          categorySelect.appendChild(option);
        });
        fetchAllProducts();
      });
  
    document.getElementById('category-select')?.addEventListener('change', function (this: HTMLSelectElement) {
      if (this.value === 'all') {
        fetchAllProducts();
      } else {
        fetchProductsByCategory(this.value);
      }
    });
  
    document.getElementById('shop')?.addEventListener('click', fetchAllProducts);
  
    function fetchAllProducts() {
      axios.get<Product[]>('https://fakestoreapi.com/products')
        .then(response => renderProducts(response.data));
    }
  
    function fetchProductsByCategory(category: string) {
      axios.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)
        .then(response => renderProducts(response.data));
    }
  
    function renderProducts(products: Product[]) {
      const container = document.getElementById('products-container') as HTMLElement;
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
        button.addEventListener('click', function (this: HTMLButtonElement) {
          const productId = this.getAttribute('data-id');
          if (productId) {
            const selectedProduct = products.find(product => product.id.toString() === productId);
            if (selectedProduct) addToCart(selectedProduct);
          }
        });
      });
    }
  
    function addToCart(product: Product) {
      let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
    }
  
    function updateCartCount() {
      const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
      (document.getElementById('cart-count') as HTMLElement).innerText = cart.length.toString();
    }
  
    document.getElementById('cart')?.addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  
    document.getElementById('logout')?.addEventListener('click', () => {
      localStorage.removeItem('username');
      window.location.href = 'index.html';
    });
  });
  