
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }


document.addEventListener('DOMContentLoaded', () => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartContainer = document.getElementById('cart-container') as HTMLElement;
    const totalPriceDiv = document.getElementById('total-price') as HTMLElement;
    let totalPrice = 0;
  
    cartContainer.innerHTML = '';
    cart.forEach(product => {
      totalPrice += product.price;
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price} USD</p>
        <button class="remove-from-cart" data-id="${product.id}">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
    });
  
    totalPriceDiv.innerText = `Total Price: $${totalPrice}`;
  
    document.querySelectorAll('.remove-from-cart').forEach(button => {
      button.addEventListener('click', function (this: HTMLButtonElement) {
        const productId = this.getAttribute('data-id');
        if (productId) removeFromCart(parseInt(productId));
      });
    });
  });
  
  function removeFromCart(productId: number) {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
  }
  