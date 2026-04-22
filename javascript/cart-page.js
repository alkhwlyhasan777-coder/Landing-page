// Cart Page Logic
document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
    updateCartSummary();
    setupCheckout();
});

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    
    if (cart.items.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCartMessage.style.display = 'block';
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    cartItemsContainer.innerHTML = cart.items.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>SKU: ${item.sku}</p>
            </div>
            <div class="cart-item-price">
                $${item.price}
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn-small" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                <input type="number" class="qty-input-small" value="${item.quantity}" 
                       onchange="updateQuantity(${item.id}, this.value)" min="1">
                <button class="qty-btn-small" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeItem(${item.id})">Remove</button>
        </div>
    `).join('');
}

function updateQuantity(productId, newQuantity) {
    newQuantity = parseInt(newQuantity);
    if (newQuantity < 1) {
        removeItem(productId);
    } else if (newQuantity > 10) {
        cart.updateQuantity(productId, 10);
    } else {
        cart.updateQuantity(productId, newQuantity);
    }
    renderCartItems();
    updateCartSummary();
}

function removeItem(productId) {
    if (confirm('Are you sure you want to remove this item?')) {
        cart.removeItem(productId);
        renderCartItems();
        updateCartSummary();
    }
}

function updateCartSummary() {
    const subtotal = cart.getTotal();
    const shipping = subtotal > 50 ? 0 : 5;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function setupCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const applyPromoBtn = document.getElementById('applyPromoBtn');
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.items.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            // Simulate checkout
            alert('Thank you for your order! This is a demo checkout.');
            cart.clearCart();
            renderCartItems();
            updateCartSummary();
        });
    }
    
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', applyPromoCode);
    }
}

function applyPromoCode() {
    const promoCode = document.getElementById('promoCode').value.trim().toUpperCase();
    const promos = {
        'SAVE10': 0.10,
        'SAVE20': 0.20,
        'SAVE30': 0.30,
        'FOODFREE': 0.25
    };
    
    if (promos[promoCode]) {
        const subtotal = cart.getTotal();
        const discount = subtotal * promos[promoCode];
        alert(`Promo code applied! You saved $${discount.toFixed(2)}`);
        // في تطبيق حقيقي، سيتم حفظ الخصم وتطبيقه على الإجمالي
    } else {
        alert('Invalid promo code');
    }
}