// Product Detail Page Logic
let currentProduct = null;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    currentProduct = productsData.find(p => p.id === productId);
    
    if (currentProduct) {
        renderProductDetail();
        renderRelatedProducts();
        setupProductControls();
    } else {
        window.location.href = 'products.html';
    }
});

function renderProductDetail() {
    // Update breadcrumb
    document.getElementById('breadcrumbName').textContent = currentProduct.name;
    
    // Update product images
    const mainImage = document.getElementById('mainImage');
    mainImage.src = currentProduct.images[0];
    
    const thumbnailImages = document.getElementById('thumbnailImages');
    thumbnailImages.innerHTML = currentProduct.images.map((img, index) => `
        <img src="${img}" alt="Product thumbnail ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" 
             onclick="changeMainImage('${img}', this)">
    `).join('');
    
    // Update product info
    document.getElementById('productName').textContent = currentProduct.name;
    document.getElementById('ratingStars').textContent = '⭐'.repeat(Math.round(currentProduct.rating));
    document.getElementById('ratingValue').textContent = `(${currentProduct.rating})`;
    document.getElementById('reviewCount').textContent = `${currentProduct.reviews} reviews`;
    
    // Update prices
    document.getElementById('productPrice').textContent = `$${currentProduct.price}`;
    document.getElementById('originalPrice').textContent = `$${currentProduct.originalPrice}`;
    const discount = Math.round((1 - currentProduct.price / currentProduct.originalPrice) * 100);
    document.getElementById('discount').textContent = `${discount}% OFF`;
    
    // Update description
    document.getElementById('productDescription').textContent = currentProduct.description;
    
    // Update features
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = currentProduct.features.map(feature => `
        <li>${feature}</li>
    `).join('');
    
    // Update additional info
    document.getElementById('availability').textContent = currentProduct.availability ? 'In Stock' : 'Out of Stock';
    document.getElementById('category').textContent = currentProduct.category;
    document.getElementById('sku').textContent = currentProduct.sku;
}

function changeMainImage(src, element) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

function setupProductControls() {
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
        });
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            quantityInput.value = Math.min(10, parseInt(quantityInput.value) + 1);
        });
    }
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            const product = {
                ...currentProduct,
                quantity: quantity
            };
            cart.addItem(product);
            quantityInput.value = 1;
        });
    }
}

function renderRelatedProducts() {
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if (!relatedGrid) return;
    
    const related = productsData
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    relatedGrid.innerHTML = related.map(product => `
        <div class="product-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${'⭐'.repeat(Math.round(product.rating))} ${product.rating}
                </div>
                <div class="product-price">
                    <span class="price">$${product.price}</span>
                    <span class="original-price">$${product.originalPrice}</span>
                </div>
                <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${product.id}, event)">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId, event) {
    event.stopPropagation();
    const product = productsData.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
    }
}