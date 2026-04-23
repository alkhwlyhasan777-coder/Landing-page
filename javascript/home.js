// Home Page Logic
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFeaturedProducts();
    renderOffers();
    renderTestimonials();
});

function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = categories.map(category => `
        <div class="category-card" onclick="filterByCategory('${category.name.toLowerCase().replace(' ', '-')}')">                                   
            <a href="./pages/products.html">
                <h3>${category.emoji}</h3>
                <p>${category.name}</p>
            </a>
        </div>
    `).join('');
}

function renderFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredProductsGrid');
    if (!featuredGrid) return;

    const featured = productsData
    featuredGrid.innerHTML = featured.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${'⭐'.repeat(Math.round(product.rating))} ${product.rating} (${product.reviews})
                </div>
                <div class="product-price">
                    <span class="price">$${product.price}</span>
                    <span class="original-price">$${product.originalPrice}</span>
                    <span class="discount-badge">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
                </div>
                <div class="product-buttons">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, event)">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function renderOffers() {
    const offersGrid = document.getElementById('offersGrid');
    if (!offersGrid) return;

    offersGrid.innerHTML = offers.map(offer => `
        <div class="offer-card">
            <h3>${offer.title}</h3>
            <p>${offer.description}</p>
            <div style="font-size: 2rem; font-weight: bold; margin: 15px 0;">${offer.discount}</div>
            <a href="products.html" class="btn">Shop Now</a>
        </div>
    `).join('');
}

function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-meta">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
        </div>
    `).join('');
}

function filterByCategory(category) {
    window.location.href = `products.html?category=${category}`;
}

function addToCart(productId, event) {
    event.stopPropagation();
    const product = productsData.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
    }
}

function viewProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}
