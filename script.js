
document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.querySelectorAll('.product-item button');
    const cartCount = document.querySelector('.user-cart a:nth-child(2)');
    let cartItems = 0;

    cartButton.forEach(button => {
        button.addEventListener('click', function() {
            cartItems++;
            cartCount.textContent = `Cart (${cartItems})`;
        });
    });
});
