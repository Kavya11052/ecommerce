const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartModal = document.getElementById('cart-modal');
const closeCartButton = document.getElementById('close-cart');
let count = 0;
let total = 0;
let cart = [];
const buttons = document.querySelectorAll('.product-card button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.getAttribute('data-name');
        const productPrice = parseInt(productCard.getAttribute('data-price'));
        const productImage = productCard.getAttribute('data-image');
        count++;
        total += productPrice;
        cart.push({ name: productName, price: productPrice, image: productImage });
        cartCount.textContent = count;
        updateCartModal();
    });
});
function updateCartModal() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        const text = document.createElement('span');
        text.textContent = `${item.name} - ₹${item.price}`;
        listItem.appendChild(img);
        listItem.appendChild(text);
        cartItems.appendChild(listItem);
    });
    cartTotal.textContent = total;
}
document.getElementById('cart-button').addEventListener('click', () => {
    cartModal.style.display = 'block';
});
closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});
