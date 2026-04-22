// // Product Data
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
        name: 'Cheese Beef Burger',
        category: 'fast-food',
        price: 14.99,
        originalPrice: 18.99,
        rating: 4.7,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=300&h=300&fit=crop'
        ],
        description: 'Delicious beef burger topped with melted cheese and fresh veggies.',
        features: ['100% beef', 'Cheddar cheese', 'Soft bun'],
        sku: 'BURGER-002',
        availability: true
    },
    {
        id: 4,
        name: 'Caesar Salad',
        category: 'healthy',
        price: 8.99,
        originalPrice: 11.99,
        rating: 4.3,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop'
        ],
        description: 'Fresh Caesar salad with crispy croutons and parmesan cheese.',
        features: ['Low calories', 'Fresh veggies', 'Healthy choice'],
        sku: 'SALAD-001',
        availability: true
    },

    {
        id: 5,
        name: 'Chocolate Cake',
        category: 'desserts',
        price: 6.99,
        originalPrice: 9.99,
        rating: 4.8,
        reviews: 150,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?w=300&h=300&fit=crop'
        ],
        description: 'Rich and moist chocolate cake with creamy frosting.',
        features: ['Premium cocoa', 'Soft texture', 'Sweet delight'],
        sku: 'DESSERT-001',
        availability: true
    },

    {
        id: 6,
        name: 'Fresh Orange Juice',
        category: 'beverages',
        price: 4.99,
        originalPrice: 6.99,
        rating: 4.4,
        reviews: 80,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop'
        ],
        description: 'Freshly squeezed orange juice full of vitamins.',
        features: ['100% natural', 'No sugar added', 'Refreshing'],
        sku: 'DRINK-001',
        availability: true
    },

    // New Data 👇
    {
        id: 7,
        name: 'Pepperoni Pizza',
        category: 'pizza',
        price: 11.99,
        originalPrice: 15.99,
        rating: 4.6,
        reviews: 140,
        image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=300&h=300&fit=crop'
        ],
        description: 'Classic pepperoni pizza with rich tomato sauce.',
        features: ['Spicy pepperoni', 'Cheesy', 'Crispy crust'],
        sku: 'PIZZA-002',
        availability: true
    },
    {
        id: 9,
        name: 'Strawberry Smoothie',
        category: 'beverages',
        price: 5.99,
        originalPrice: 7.99,
        rating: 4.7,
        reviews: 102,
        image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=300&h=300&fit=crop'
        ],
        description: 'Refreshing strawberry smoothie made with fresh fruits.',
        features: ['Cold drink', 'Natural', 'Sweet'],
        sku: 'DRINK-002',
        availability: true
    },

    {
        id: 10,
        name: 'Ice Cream Sundae',
        category: 'desserts',
        price: 4.99,
        originalPrice: 6.99,
        rating: 4.9,
        reviews: 175,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop'
        ],
        description: 'Delicious ice cream topped with chocolate syrup.',
        features: ['Cold dessert', 'Sweet', 'Creamy'],
        sku: 'DESSERT-002',
        availability: true
    },
    {
        id: 11,
        name: 'Vanilla Ice Cream',
        category: 'desserts',
        price: 3.99,
        originalPrice: 5.99,
        rating: 4.6,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop'
        ],
        description: 'Classic vanilla ice cream with a creamy texture.',
        features: ['Cold dessert', 'Classic flavor', 'Creamy'],
        sku: 'DESSERT-003',
        availability: true
    },
    {
        id: 14,
        name: 'Mango Juice',
        category: 'beverages',
        price: 4.49,
        originalPrice: 6.49,
        rating: 4.5,
        reviews: 90,
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=300&fit=crop'
        ],
        description: 'Fresh mango juice with natural sweetness.',
        features: ['Refreshing', 'Natural', 'Cold'],
        sku: 'DRINK-003',
        availability: true
    },
    {
        id: 15,
        name: 'Double Beef Burger',
        category: 'fast-food',
        price: 15.99,
        originalPrice: 19.99,
        rating: 4.8,
        reviews: 220,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop'
        ],
        description: 'Double beef burger with cheese and special sauce.',
        features: ['Double meat', 'Juicy', 'Filling'],
        sku: 'BURGER-003',
        availability: true
    },
    {
        id: 16,
        name: 'French Fries',
        category: 'fast-food',
        price: 3.49,
        originalPrice: 5.49,
        rating: 4.3,
        reviews: 140,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop'
        ],
        description: 'Crispy golden French fries.',
        features: ['Crispy', 'Hot', 'Salty'],
        sku: 'FAST-001',
        availability: true
    },
    {
        id: 17,
        name: 'Chocolate Donuts',
        category: 'desserts',
        price: 5.49,
        originalPrice: 7.49,
        rating: 4.7,
        reviews: 110,
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop'
        ],
        description: 'Soft donuts covered with chocolate glaze.',
        features: ['Sweet', 'Soft', 'Chocolate'],
        sku: 'DESSERT-004',
        availability: true
    },
    {
        id: 18,
        name: 'Chicken Nuggets',
        category: 'fast-food',
        price: 6.99,
        originalPrice: 9.99,
        rating: 4.5,
        reviews: 130,
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300&h=300&fit=crop'
        ],
        description: 'Crispy chicken nuggets served with sauce.',
        features: ['Crispy', 'Tender', 'Kids favorite'],
        sku: 'FAST-002',
        availability: true
    },
    {
        id: 19,
        name: 'Strawberry Cake',
        category: 'desserts',
        price: 7.99,
        originalPrice: 10.99,
        rating: 4.8,
        reviews: 160,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop'
        ],
        description: 'Fresh strawberry cake with cream layers.',
        features: ['Fresh fruit', 'Soft', 'Sweet'],
        sku: 'DESSERT-005',
        availability: true
    },
    {
        id: 20,
        name: 'Iced Coffee',
        category: 'beverages',
        price: 4.99,
        originalPrice: 6.99,
        rating: 4.6,
        reviews: 95,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop'
        ],
        description: 'Cold iced coffee with rich flavor.',
        features: ['Cold drink', 'Energy boost', 'Refreshing'],
        sku: 'DRINK-004',
        availability: true
    },
    {
        id: 21,
        name: 'Grilled Salmon',
        category: 'protein',
        price: 18.99,
        originalPrice: 22.99,
        rating: 4.8,
        reviews: 140,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=300&fit=crop'
        ],
        description: 'Fresh grilled salmon rich in protein and omega-3.',
        features: ['High protein', 'Omega-3', 'Healthy'],
        sku: 'PROTEIN-001',
        availability: true
    },
    {
        id: 23,
        name: 'Beef Steak',
        category: 'protein',
        price: 21.99,
        originalPrice: 26.99,
        rating: 4.9,
        reviews: 200,
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=300&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=300&fit=crop'
        ],
        description: 'Juicy beef steak packed with protein.',
        features: ['High protein', 'Rich taste', 'Premium quality'],
        sku: 'PROTEIN-003',
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
// const testimonials = [
//     {
//         id: 1,
//         name: 'John Smith',
//         avatar: 'https://i.pravatar.cc/300?img=1',
//         role: 'Customer',
//         rating: 5,
//         text: 'Amazing quality products and fast delivery! Highly recommended.',
//     },
//     {
//         id: 2,
//         name: 'Sarah Johnson',
//         avatar: 'https://i.pravatar.cc/300?img=2',
//         role: 'Customer',
//         rating: 5,
//         text: 'Best food delivery service I\'ve used. Fresh and delicious!',
//     },
//     {
//         id: 3,
//         name: 'Mike Davis',
//         avatar: 'https://i.pravatar.cc/300?img=3',
//         role: 'Customer',
//         rating: 4,
//         text: 'Great selection of products. Will definitely order again.',
//     },
//     {
//         id: 4,
//         name: 'Emma Wilson',
//         avatar: 'https://i.pravatar.cc/300?img=4',
//         role: 'Customer',
//         rating: 5,
//         text: 'Customer service is excellent. Very satisfied with my purchase!',
//     }
// ];

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
    },

    // New Data 👇
    {
        id: 5,
        name: 'David Brown',
        avatar: 'https://i.pravatar.cc/300?img=5',
        role: 'Customer',
        rating: 5,
        text: 'The food was super fresh and tasty. Loved it!',
    },
    {
        id: 6,
        name: 'Olivia Taylor',
        avatar: 'https://i.pravatar.cc/300?img=6',
        role: 'Customer',
        rating: 4,
        text: 'Good experience overall, will order again.',
    },
    {
        id: 7,
        name: 'James Anderson',
        avatar: 'https://i.pravatar.cc/300?img=7',
        role: 'Customer',
        rating: 5,
        text: 'Fast delivery and excellent packaging!',
    },
    {
        id: 8,
        name: 'Sophia Martinez',
        avatar: 'https://i.pravatar.cc/300?img=8',
        role: 'Customer',
        rating: 5,
        text: 'Absolutely loved the desserts. Highly recommend!',
    },
    {
        id: 9,
        name: 'Daniel Thomas',
        avatar: 'https://i.pravatar.cc/300?img=9',
        role: 'Customer',
        rating: 4,
        text: 'Nice variety of products and good quality.',
    },
    {
        id: 10,
        name: 'Isabella White',
        avatar: 'https://i.pravatar.cc/300?img=10',
        role: 'Customer',
        rating: 5,
        text: 'Amazing service and delicious food!',
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