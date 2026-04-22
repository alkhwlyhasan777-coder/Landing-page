// Cart Management System
class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartCount();
    }

    // Load cart from localStorage
    loadCart() {
        const saved = localStorage.getItem('foodhub_cart');
        return saved ? JSON.parse(saved) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('foodhub_cart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    // Add item to cart
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += (product.quantity || 1);
        } else {
            this.items.push({
                ...product,
                quantity: product.quantity || 1
            });
        }

        this.saveCart();
        this.showNotification('Product added to cart!', 'success');
    }

    // Remove item from cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }

    // Update item quantity
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, parseInt(quantity));
            this.saveCart();
        }
    }

    // Get cart total
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    // Get item count
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // Update cart count display
    updateCartCount() {
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = this.getItemCount();
        }
    }

    // Clear cart
    clearCart() {
        this.items = [];
        this.saveCart();
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Implementation in navbar section
        console.log(`${type}: ${message}`);
    }
}

// Global cart instance
const cart = new Cart();