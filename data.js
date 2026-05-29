const PRODUCTS = [
    {
        id: 1,
        name: '超薄安全套组合',
        category: '避孕用品',
        price: 29.9,
        originalPrice: 49.9,
        image: 'https://picsum.photos/seed/condom/300/300',
        images: ['https://picsum.photos/seed/condom-pack/300/300', 'https://picsum.photos/seed/safe-sex/300/300', 'https://picsum.photos/seed/health-care/300/300'],
        description: '精选优质乳胶，超薄设计，亲密无间。10只装，多种口味选择。',
        specs: ['10只装', '草莓味', '薄荷味', '原味'],
        sales: 3280,
        stock: 500,
        features: ['超薄设计', '多种口味', '安全可靠', '独立包装']
    },
    {
        id: 2,
        name: '水润润滑剂',
        category: '润滑液',
        price: 35.0,
        originalPrice: 58.0,
        image: 'https://picsum.photos/seed/lotion/300/300',
        images: ['https://picsum.photos/seed/lotion-bottle/300/300', 'https://picsum.photos/seed/cosmetic/300/300'],
        description: '水溶性配方，温和不刺激，持久润滑。200ml大容量。',
        specs: ['100ml', '200ml'],
        sales: 2156,
        stock: 300,
        features: ['水溶性', '温和不刺激', '持久润滑', '易清洗']
    },
    {
        id: 3,
        name: '震动按摩棒',
        category: '震动器具',
        price: 129.0,
        originalPrice: 199.0,
        image: 'https://picsum.photos/seed/vibrator-pink/300/300',
        images: ['https://picsum.photos/seed/electric-toy/300/300', 'https://picsum.photos/seed/pink-beauty/300/300', 'https://picsum.photos/seed/modern-design/300/300'],
        description: '多频震动模式，静音设计，USB充电。柔软硅胶材质，安全舒适。',
        specs: ['粉色', '紫色', '白色'],
        sales: 1560,
        stock: 200,
        features: ['多频震动', '静音设计', 'USB充电', '硅胶材质']
    },
    {
        id: 4,
        name: '情趣内衣套装',
        category: '情趣服饰',
        price: 89.0,
        originalPrice: 139.0,
        image: 'https://picsum.photos/seed/lingerie/300/300',
        images: ['https://picsum.photos/seed/elegant-lingerie/300/300', 'https://picsum.photos/seed/fashion-women/300/300'],
        description: '蕾丝花边设计，性感迷人。多种款式可选，均码适合大多数身材。',
        specs: ['黑色蕾丝', '白色蕾丝', '红色诱惑'],
        sales: 2890,
        stock: 400,
        features: ['蕾丝设计', '性感迷人', '均码', '舒适面料']
    },
    {
        id: 5,
        name: '延时喷剂',
        category: '情趣辅助',
        price: 68.0,
        originalPrice: 99.0,
        image: 'https://picsum.photos/seed/spray-bottle/300/300',
        images: ['https://picsum.photos/seed/men-health/300/300', 'https://picsum.photos/seed/health-spray/300/300'],
        description: '植物配方，温和延时，提升持久力。15ml便携装。',
        specs: ['15ml', '30ml'],
        sales: 1890,
        stock: 250,
        features: ['植物配方', '温和延时', '便携装', '安全有效']
    },
    {
        id: 6,
        name: 'SM情趣套装',
        category: '情趣用品',
        price: 199.0,
        originalPrice: 299.0,
        image: 'https://picsum.photos/seed/leather/300/300',
        images: ['https://picsum.photos/seed/bondage/300/300', 'https://picsum.photos/seed/fetish/300/300', 'https://picsum.photos/seed/accessories/300/300'],
        description: '优质皮革材质，包含手铐、眼罩、皮鞭等配件。',
        specs: ['基础套装', '进阶套装'],
        sales: 890,
        stock: 100,
        features: ['优质皮革', '多配件', '精美包装', '安全扣设计']
    },
    {
        id: 7,
        name: '跳蛋震动器',
        category: '震动器具',
        price: 79.0,
        originalPrice: 119.0,
        image: 'https://picsum.photos/seed/egg-toy/300/300',
        images: ['https://picsum.photos/seed/small-vibrator/300/300', 'https://picsum.photos/seed/cute-toy/300/300'],
        description: '无线遥控，多频震动，小巧便携。防水设计，可全身水洗。',
        specs: ['单跳蛋', '双跳蛋'],
        sales: 2340,
        stock: 350,
        features: ['无线遥控', '多频震动', '防水设计', '小巧便携']
    },
    {
        id: 8,
        name: '男士飞机杯',
        category: '男士用品',
        price: 99.0,
        originalPrice: 149.0,
        image: 'https://picsum.photos/seed/mens-toy/300/300',
        images: ['https://picsum.photos/seed/adult-toy/300/300', 'https://picsum.photos/seed/silicone-product/300/300'],
        description: '仿真通道设计，柔软舒适。便携设计，隐蔽收纳。',
        specs: ['标准版', '加热版'],
        sales: 1670,
        stock: 280,
        features: ['仿真通道', '柔软舒适', '便携设计', '隐蔽收纳']
    },
    {
        id: 9,
        name: '情趣眼罩',
        category: '情趣用品',
        price: 25.0,
        originalPrice: 39.0,
        image: 'https://picsum.photos/seed/eye-mask/300/300',
        images: ['https://picsum.photos/seed/blindfold/300/300'],
        description: '柔软丝绸材质，舒适贴合。增加情趣氛围。',
        specs: ['黑色', '红色', '紫色'],
        sales: 1450,
        stock: 400,
        features: ['丝绸材质', '舒适贴合', '遮光效果好', '易清洗']
    },
    {
        id: 10,
        name: '情侣游戏卡牌',
        category: '情趣游戏',
        price: 39.0,
        originalPrice: 59.0,
        image: 'https://picsum.photos/seed/cards/300/300',
        images: ['https://picsum.photos/seed/playing-cards/300/300', 'https://picsum.photos/seed/game-box/300/300'],
        description: '52张情趣挑战卡片，增进情侣互动。',
        specs: ['标准版'],
        sales: 980,
        stock: 200,
        features: ['52张卡片', '情侣互动', '增进感情', '精美包装']
    },
    {
        id: 11,
        name: '私处护理液',
        category: '护理用品',
        price: 45.0,
        originalPrice: 68.0,
        image: 'https://picsum.photos/seed/body-wash/300/300',
        images: ['https://picsum.photos/seed/personal-care/300/300'],
        description: '温和配方，清洁护理二合一。男女通用。',
        specs: ['150ml', '250ml'],
        sales: 2100,
        stock: 320,
        features: ['温和配方', '清洁护理', '男女通用', '无刺激']
    },
    {
        id: 12,
        name: '后庭专用润滑',
        category: '润滑液',
        price: 55.0,
        originalPrice: 88.0,
        image: 'https://picsum.photos/seed/anal-lube/300/300',
        images: ['https://picsum.photos/seed/special-lube/300/300'],
        description: '高粘度配方，持久润滑。专为后庭设计。',
        specs: ['100ml', '200ml'],
        sales: 1230,
        stock: 180,
        features: ['高粘度', '持久润滑', '后庭专用', '安全配方']
    }
];

const CATEGORIES = [
    { id: 'all', name: '全部商品', icon: '🎯' },
    { id: '避孕用品', name: '避孕用品', icon: '🛡️' },
    { id: '润滑液', name: '润滑液', icon: '💧' },
    { id: '震动器具', name: '震动器具', icon: '🔊' },
    { id: '情趣服饰', name: '情趣服饰', icon: '👗' },
    { id: '情趣用品', name: '情趣用品', icon: '🎭' },
    { id: '男士用品', name: '男士用品', icon: '👨' },
    { id: '护理用品', name: '护理用品', icon: '🧴' }
];

function getProductsByCategory(categoryId) {
    if (categoryId === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === categoryId);
}

function getProductById(id) {
    return PRODUCTS.find(p => p.id === parseInt(id));
}

function getCart() {
    const cart = localStorage.getItem('adult_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('adult_cart', JSON.stringify(cart));
}

function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    saveCart(cart);
}

function removeFromCart(productId) {
    const cart = getCart();
    const filtered = cart.filter(item => item.id !== productId);
    saveCart(filtered);
}

function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart(cart);
        }
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function clearCart() {
    localStorage.removeItem('adult_cart');
}

function getOrderId() {
    return 'ORD' + Date.now().toString(36).toUpperCase();
}
