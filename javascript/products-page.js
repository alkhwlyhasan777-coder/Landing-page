// Products Page Logic
let filteredProducts = [...productsData];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(filteredProducts);
    setupFilters();
});

function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const ratingFilter = document.getElementById('ratingFilter');
    const sortBy = document.getElementById('sortBy');
    const resetBtn = document.getElementById('resetFilters');

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = e.target.value;
            applyFilters();
        });
    }
    if (ratingFilter) ratingFilter.addEventListener('change', applyFilters);
    if (sortBy) sortBy.addEventListener('change', applySorting);
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
}

function applyFilters() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceRange = parseFloat(document.getElementById('priceRange').value);
    const ratingFilter = document.getElementById('ratingFilter').value;

    filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchInput);
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        const matchesPrice = product.price <= priceRange;
        const matchesRating = !ratingFilter || product.rating >= parseInt(ratingFilter);

        return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    applySorting();
}

function applySorting() {
    const sortBy = document.getElementById('sortBy').value;

    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
        default:
            filteredProducts.sort((a, b) => b.id - a.id);
    }

    renderProducts(filteredProducts);
}

function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');

    if (products.length === 0) {
        productsGrid.innerHTML = '';
        noProducts.style.display = 'block';
    } else {
        productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
        noProducts.style.display = 'none';
    }
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

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('priceRange').value = '100';
    document.getElementById('priceValue').textContent = '100';
    document.getElementById('ratingFilter').value = '';
    document.getElementById('sortBy').value = 'newest';
    
    filteredProducts = [...productsData];
    renderProducts(filteredProducts);
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