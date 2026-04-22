// Product Data
const productsData = [
    {
        id: 1,
        name: 'Grilled Chicken Burger',
        category: 'fast-food',
        price: 12.99,
        originalPrice: 16.99,
        rating: 4.5,
        reviews: 128,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop'
        ],
        description: 'Juicy grilled chicken patty with fresh lettuce, tomatoes, and special sauce.',
        features: ['Fresh ingredients', 'Grilled to perfection', 'Served with fries'],
        sku: 'BURGER-001',
        availability: true
    },
    {
        id: 2,
        name: 'Organic Salad Bowl',
        category: 'healthy',
        price: 9.99,
        originalPrice: 12.99,
        rating: 5,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop'
        ],
        description: 'Fresh organic vegetables with ranch dressing and croutons.',
        features: ['100% Organic', 'Gluten-free', 'Vegan friendly'],
        sku: 'SALAD-001',
        availability: true
    },
    {
        id: 3,
        name: 'Chocolate Cake Slice',
        category: 'desserts',
        price: 6.99,
        originalPrice: 8.99,
        rating: 4.8,
        reviews: 215,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop'
        ],
        description: 'Rich and moist chocolate cake with chocolate frosting.',
        features: ['Homemade recipe', 'Fresh daily', 'No preservatives'],
        sku: 'CAKE-001',
        availability: true
    },
    {
        id: 4,
        name: 'Fresh Orange Juice',
        category: 'beverages',
        price: 4.99,
        originalPrice: 6.99,
        rating: 4.3,
        reviews: 76,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd1f3033?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1600271886742-f049cd1f3033?w=300&h=300&fit=crop'
        ],
        description: 'Freshly squeezed orange juice, no added sugar.',
        features: ['Freshly squeezed', 'No sugar added', 'High in Vitamin C'],
        sku: 'JUICE-001',
        availability: true
    },
    {
        id: 5,
        name: 'Vegetarian Pizza',
        category: 'fast-food',
        price: 14.99,
        originalPrice: 18.99,
        rating: 4.6,
        reviews: 143,
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop'
        ],
        description: 'Loaded with fresh vegetables on a crispy crust.',
        features: ['Vegetarian', 'Fresh vegetables', 'Thin crust'],
        sku: 'PIZZA-001',
        availability: true
    },
    {
        id: 6,
        name: 'Protein Smoothie Bowl',
        category: 'healthy',
        price: 11.99,
        originalPrice: 14.99,
        rating: 4.7,
        reviews: 102,
        image: 'https://images.unsplash.com/photo-1590080876/bowl-with-smoothie-and-berries?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1590080876/bowl-with-smoothie-and-berries?w=300&h=300&fit=crop'
        ],
        description: 'Protein-packed smoothie bowl topped with granola and fresh fruits.',
        features: ['High protein', 'Low sugar', 'Perfect for breakfast'],
        sku: 'SMOOTHIE-001',
        availability: true
    },
    {
        id: 7,
        name: 'Strawberry Cheesecake',
        category: 'desserts',
        price: 7.99,
        originalPrice: 10.99,
        rating: 4.9,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1587080573748-e77f1b89f1e8?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1587080573748-e77f1b89f1e8?w=300&h=300&fit=crop'
        ],
        description: 'Creamy cheesecake topped with fresh strawberries.',
        features: ['Fresh strawberries', 'Creamy texture', 'Made fresh daily'],
        sku: 'CHEESECAKE-001',
        availability: true
    },
    {
        id: 8,
        name: 'Iced Coffee',
        category: 'beverages',
        price: 5.99,
        originalPrice: 7.99,
        rating: 4.4,
        reviews: 201,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=300&h=300&fit=crop'
        ],
        description: 'Cold brew coffee with ice and a touch of cream.',
        features: ['Cold brew', 'Smooth taste', 'Customizable'],
        sku: 'COFFEE-001',
        availability: true
    }
];

// Categories
const categories = [
    { id: 1, name: 'Fast Food', emoji: '🍔' },
    { id: 2, name: 'Healthy Food', emoji: '🥗' },
    { id: 3, name: 'Desserts', emoji: '🍰' },
    { id: 4, name: 'Beverages', emoji: '🥤' }
];

// Testimonials
const testimonials = [
    {
        id: 1,
        name: 'John Smith',
        avatar: 'https://i.pravatar.cc/300?img=1',
        role: 'Customer',
        rating: 5,
        text: 'Amazing quality products and fast delivery! Highly recommended.',
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/300?img=2',
        role: 'Customer',
        rating: 5,
        text: 'Best food delivery service I\'ve used. Fresh and delicious!',
    },
    {
        id: 3,
        name: 'Mike Davis',
        avatar: 'https://i.pravatar.cc/300?img=3',
        role: 'Customer',
        rating: 4,
        text: 'Great selection of products. Will definitely order again.',
    },
    {
        id: 4,
        name: 'Emma Wilson',
        avatar: 'https://i.pravatar.cc/300?img=4',
        role: 'Customer',
        rating: 5,
        text: 'Customer service is excellent. Very satisfied with my purchase!',
    }
];

// Offers
const offers = [
    {
        id: 1,
        title: 'Summer Sale',
        description: 'Get 20% off on all beverages',
        discount: '20%',
        category: 'beverages'
    },
    {
        id: 2,
        title: 'Healthy Lifestyle',
        description: 'Buy 2 salads, get 1 free',
        discount: '33%',
        category: 'healthy'
    },
    {
        id: 3,
        title: 'Sweet Treats',
        description: '15% off on all desserts',
        discount: '15%',
        category: 'desserts'
    }
];