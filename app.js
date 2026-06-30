/* ══════════════════════════════════════
   PACO STORE — app.js
══════════════════════════════════════ */

/* ─── PRODUCT DATA ─── */
const products = [
  {
    id: 1,
    name: 'نایک ایر مکس ۲۷۰',
    brand: 'Nike',
    price: 1850000,
    priceText: '۱,۸۵۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&fit=crop&sat=-50',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80&fit=crop',
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    desc: 'نایک ایر مکس ۲۷۰ با بزرگ‌ترین واحد Air heel تا به حال در یک کفش سبک‌وزن، راحتی بی‌نظیری ارائه می‌دهد. رویه مش قابل تنفس، پشتیبانی عالی و سبکی منحصربه‌فرد از ویژگی‌های این محصول است.',
    rating: 4.8,
    reviews: 124,
    tag: 'پرفروش',
    colors: ['#000000', '#FFFFFF', '#2563EB'],
  },
  {
    id: 2,
    name: 'آدیداس اولترابوست ۲۳',
    brand: 'Adidas',
    price: 2100000,
    priceText: '۲,۱۰۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80&fit=crop',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&fit=crop',
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    desc: 'آدیداس اولترابوست ۲۳ با فناوری Boost محبوب، انرژی هر قدم را به شما باز می‌گرداند. ساخته شده با موادی که ۵۰٪ از ضایعات پلاستیکی دریا است، این کفش هم برای محیط زیست و هم برای پاهای شما عالی است.',
    rating: 4.7,
    reviews: 89,
    tag: 'جدید',
    colors: ['#1a1a1a', '#FFFFFF'],
  },
  {
    id: 3,
    name: 'کانورس آل استار',
    brand: 'Converse',
    price: 950000,
    priceText: '۹۵۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=600&q=80&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80&fit=crop',
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    desc: 'کانورس آل استار، کلاسیک ابدی که هرگز از مد نمی‌افتد. رویه چرم مصنوعی، زیره لاستیکی مقاوم و استایل بی‌نظیر آن را به یکی از پرطرفدارترین کفش‌های جهان تبدیل کرده است.',
    rating: 4.6,
    reviews: 210,
    tag: '',
    colors: ['#000000', '#FFFFFF', '#EF4444'],
  },
  {
    id: 4,
    name: 'نیو بالانس ۵۷۴',
    brand: 'New Balance',
    price: 1350000,
    priceText: '۱,۳۵۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&fit=crop',
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80&fit=crop',
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    desc: 'نیو بالانس ۵۷۴ ترکیبی از راحتی کلاسیک و ظاهر مدرن است. پشتیبانی ENCAP در کف پا و طراحی ارگونومیک آن برای استفاده روزانه ایده‌آل است.',
    rating: 4.5,
    reviews: 67,
    tag: '',
    colors: ['#94A3B8', '#10B981', '#2563EB'],
  },
  {
    id: 5,
    name: 'پوما RS-X',
    brand: 'Puma',
    price: 1650000,
    priceText: '۱,۶۵۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&fit=crop',
    ],
    sizes: [39, 40, 41, 42, 43],
    desc: 'پوما RS-X از اواخر دهه ۸۰ الهام گرفته و با فناوری RS امروزی ارتقا یافته. طراحی بولد و جسورانه آن، این کفش را به انتخاب اول کسانی که دوست دارند در جمع دیده شوند تبدیل کرده.',
    rating: 4.4,
    reviews: 45,
    tag: '',
    colors: ['#EF4444', '#FFFFFF'],
  },
  {
    id: 6,
    name: 'ریباک کلاسیک لدر',
    brand: 'Reebok',
    price: 1280000,
    priceText: '۱,۲۸۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80&fit=crop',
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    desc: 'ریباک کلاسیک لدر با رویه چرم اصل نرم و راحت، یکی از محبوب‌ترین کفش‌های کلاسیک جهان است. زیره EVA برای راحتی تمام روز طراحی شده.',
    rating: 4.5,
    reviews: 93,
    tag: '',
    colors: ['#FFFFFF', '#000000'],
  },
  {
    id: 7,
    name: 'نایک زوم پگاسوس',
    brand: 'Nike',
    price: 2450000,
    priceText: '۲,۴۵۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&q=80&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&fit=crop',
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    desc: 'نایک زوم پگاسوس با فناوری React foam و Zoom Air در پاشنه، برای دونده‌های جدی طراحی شده. این کفش سرعت و راحتی را در بالاترین سطح ارائه می‌دهد.',
    rating: 4.9,
    reviews: 156,
    tag: 'محبوب',
    colors: ['#000000', '#2563EB', '#EF4444'],
  },
  {
    id: 8,
    name: 'آسیکس جل نیمبوس',
    brand: 'ASICS',
    price: 1950000,
    priceText: '۱,۹۵۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1556906781-9a412961a28c?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1556906781-9a412961a28c?w=600&q=80&fit=crop',
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    desc: 'آسیکس جل نیمبوس با سیستم ژل منحصربه‌فرد در پاشنه و زیره، ضربه‌گیری استثنایی ارائه می‌دهد. مناسب برای دویدن‌های طولانی و ورزش‌های سنگین.',
    rating: 4.7,
    reviews: 78,
    tag: '',
    colors: ['#2563EB', '#FFFFFF'],
  },
];

const discounts = [
  {
    id: 101,
    name: 'نایک ایر فورس ۱',
    brand: 'Nike',
    oldPrice: 2200000,
    price: 1430000,
    priceText: '۱,۴۳۰,۰۰۰ تومان',
    oldPriceText: '۲,۲۰۰,۰۰۰',
    disc: '-۳۵٪',
    img: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80&fit=crop',
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    desc: 'نایک ایر فورس ۱ از ۱۹۸۲ تا به امروز یکی از پرفروش‌ترین کفش‌های تاریخ است. این کفش با واحد Air در کف، راحتی کلاسیک و ظاهری که هرگز کهنه نمی‌شود را ارائه می‌دهد.',
    rating: 4.9,
    reviews: 342,
    tag: '-۳۵٪',
    colors: ['#FFFFFF', '#000000'],
  },
  {
    id: 102,
    name: 'آدیداس گزل',
    brand: 'Adidas',
    oldPrice: 1800000,
    price: 1260000,
    priceText: '۱,۲۶۰,۰۰۰ تومان',
    oldPriceText: '۱,۸۰۰,۰۰۰',
    disc: '-۳۰٪',
    img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&q=80&fit=crop',
    ],
    sizes: [37, 38, 39, 40, 41, 42],
    desc: 'آدیداس گزل با طراحی اصیل دهه ۶۰، کفشی است که کلاسیک بودن را به تمام و کمال تعریف می‌کند. مناسب برای استفاده روزانه و چهره‌ای خاص در هر موقعیتی.',
    rating: 4.6,
    reviews: 134,
    tag: '-۳۰٪',
    colors: ['#FFFFFF', '#1a1a1a'],
  },
  {
    id: 103,
    name: 'سالومون اسپیدکراس',
    brand: 'Salomon',
    oldPrice: 2800000,
    price: 1960000,
    priceText: '۱,۹۶۰,۰۰۰ تومان',
    oldPriceText: '۲,۸۰۰,۰۰۰',
    disc: '-۳۰٪',
    img: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&q=80&fit=crop',
    ],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    desc: 'سالومون اسپیدکراس برای تریل ران‌نینگ ساخته شده و در سخت‌ترین مسیرها قابل اعتماد است. زیره Contagrip چسبندگی عالی بر روی انواع سطوح را تضمین می‌کند.',
    rating: 4.8,
    reviews: 56,
    tag: '-۳۰٪',
    colors: ['#10B981', '#000000'],
  },
  {
    id: 104,
    name: 'هوکا بوندی ۸',
    brand: 'HOKA',
    oldPrice: 2600000,
    price: 1820000,
    priceText: '۱,۸۲۰,۰۰۰ تومان',
    oldPriceText: '۲,۶۰۰,۰۰۰',
    disc: '-۳۰٪',
    img: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&q=80&fit=crop',
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    desc: 'هوکا بوندی ۸ با کف ضخیم و فوم پیشرفته، بهترین ضربه‌گیر در دنیای کفش ورزشی است. برای افرادی که مشکلات مفاصل دارند یا دنبال راحتی ماکسیمال هستند ایده‌آل است.',
    rating: 4.7,
    reviews: 88,
    tag: '-۳۰٪',
    colors: ['#F97316', '#FFFFFF'],
  },
  {
    id: 105,
    name: 'وانس اولد اسکول',
    brand: 'Vans',
    oldPrice: 1100000,
    price: 770000,
    priceText: '۷۷۰,۰۰۰ تومان',
    oldPriceText: '۱,۱۰۰,۰۰۰',
    disc: '-۳۰٪',
    img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80&fit=crop',
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    desc: 'وانس اولد اسکول با نوار کناری معروف، یکی از نمادهای فرهنگ اسکیت‌بوردینگ و استایل خیابانی است. جاودانه، راحت و همه‌پسند.',
    rating: 4.6,
    reviews: 201,
    tag: '-۳۰٪',
    colors: ['#000000', '#FFFFFF', '#EF4444'],
  },
  {
    id: 106,
    name: 'نیو بالانس ۹۹۰',
    brand: 'New Balance',
    oldPrice: 3200000,
    price: 2304000,
    priceText: '۲,۳۰۴,۰۰۰ تومان',
    oldPriceText: '۳,۲۰۰,۰۰۰',
    disc: '-۲۸٪',
    img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80&fit=crop',
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    desc: 'نیو بالانس ۹۹۰ نماد کیفیت آمریکایی است. ساخته شده با چرم اصل و ترکیب موادی که در هیچ کفش دیگری پیدا نمی‌شود. این کفش هم برای روزهای کاری و هم تفریح مناسب است.',
    rating: 4.8,
    reviews: 112,
    tag: '-۲۸٪',
    colors: ['#94A3B8', '#000000'],
  },
];

/* ─── CART ─── */
let cart = JSON.parse(localStorage.getItem('pacoCart') || '[]');

function saveCart() {
  localStorage.setItem('pacoCart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = total;
    b.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCartItem(product, size) {
  const existing = cart.find(i => i.id === product.id && i.size === size);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      priceText: product.priceText,
      img: product.img,
      size: size,
      qty: 1,
    });
  }
  saveCart();
  showSuccessToast(`"${product.name}" به سبد خرید اضافه شد`);
}

function removeFromCart(id, size) {
  cart = cart.filter(i => !(i.id === id && i.size === size));
  saveCart();
  renderCart();
}

function changeQty(id, size, delta) {
  const item = cart.find(i => i.id === id && i.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => !(i.id === id && i.size === size));
  }
  saveCart();
  renderCart();
}

function renderCart() {
  const el = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  if (!el) return;

  if (cart.length === 0) {
    el.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'flex';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">سایز: ${item.size}</div>
        <div class="cart-item-price">${item.priceText}</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-controls">
          <button onclick="changeQty(${item.id}, ${item.size}, -1)" class="qty-btn">
            <i class="bi bi-dash"></i>
          </button>
          <span class="qty-num">${item.qty}</span>
          <button onclick="changeQty(${item.id}, ${item.size}, 1)" class="qty-btn">
            <i class="bi bi-plus"></i>
          </button>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart(${item.id}, ${item.size})">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (totalEl) totalEl.textContent = total.toLocaleString('fa-IR') + ' تومان';
}

/* ─── RENDER PRODUCTS ─── */
function renderProducts() {
  const slider = document.getElementById('productsSlider');
  if (!slider) return;
  slider.innerHTML = products.map(p => `
    <div class="pcard" onclick="showProductDetail(${p.id}, 'product')" style="cursor:pointer">
      ${p.tag ? `<div class="tag-badge">${p.tag}</div>` : ''}
      <div class="pcard-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="pcard-body">
        <div class="pcard-brand">${p.brand}</div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-stars">${renderStars(p.rating)} <span class="review-count">(${p.reviews})</span></div>
        <div class="pcard-price">${p.priceText}</div>
        <button class="btn-add-cart" onclick="event.stopPropagation(); showProductDetail(${p.id}, 'product')">
          <i class="bi bi-eye me-1"></i> مشاهده محصول
        </button>
      </div>
    </div>
  `).join('');
}

/* ─── RENDER DISCOUNTS ─── */
function renderDiscounts() {
  const slider = document.getElementById('discountsSlider');
  if (!slider) return;
  slider.innerHTML = discounts.map(p => `
    <div class="pcard" onclick="showProductDetail(${p.id}, 'discount')" style="cursor:pointer">
      <div class="disc-badge">${p.disc}</div>
      <div class="pcard-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="pcard-body">
        <div class="pcard-brand">${p.brand}</div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-stars">${renderStars(p.rating)} <span class="review-count">(${p.reviews})</span></div>
        <div class="pcard-price mb-2">
          <span class="price-old">${p.oldPriceText}</span>
          <span class="price-new">${p.priceText}</span>
        </div>
        <button class="btn-add-cart" onclick="event.stopPropagation(); showProductDetail(${p.id}, 'discount')">
          <i class="bi bi-eye me-1"></i> مشاهده محصول
        </button>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  let html = '';
  for (let i = 0; i < full; i++) html += '<i class="bi bi-star-fill"></i>';
  if (half) html += '<i class="bi bi-star-half"></i>';
  return `<span class="stars">${html}</span><span class="rating-num">${rating}</span>`;
}

/* ─── PRODUCT DETAIL ─── */
let currentProduct = null;
let selectedSize = null;
let currentImgIdx = 0;

function showProductDetail(id, type) {
  const arr = type === 'product' ? products : discounts;
  const product = arr.find(p => p.id === id);
  if (!product) return;
  currentProduct = product;
  selectedSize = null;
  currentImgIdx = 0;

  const isDiscount = type === 'discount';

  const detailEl = document.getElementById('page-product');
  detailEl.innerHTML = `
    <div class="product-detail-wrap">

      <!-- Back button -->
      <div class="detail-back">
        <button class="btn-back" onclick="showPage('home'); setTimeout(() => scrollToSection('${isDiscount ? 'discounts' : 'products'}'), 80)">
          <i class="bi bi-arrow-right me-2"></i>بازگشت
        </button>
      </div>

      <div class="container-xl">
        <div class="row g-5 detail-main-row">

          <!-- Images -->
          <div class="col-lg-6">
            <div class="detail-img-main-wrap">
              ${isDiscount ? `<div class="disc-badge detail-disc-badge">${product.disc}</div>` : ''}
              ${product.tag ? `<div class="tag-badge">${product.tag}</div>` : ''}
              <img id="mainProductImg" src="${product.imgs[0]}" alt="${product.name}" class="detail-main-img" />
            </div>
            <div class="detail-thumbs" id="detailThumbs">
              ${product.imgs.map((img, i) => `
                <div class="detail-thumb ${i === 0 ? 'active' : ''}" onclick="changeDetailImg(${i}, '${img}')">
                  <img src="${img}" alt="" />
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Info -->
          <div class="col-lg-6 detail-info">
            <div class="detail-brand">${product.brand}</div>
            <h1 class="detail-name">${product.name}</h1>

            <div class="detail-rating-row">
              ${renderStars(product.rating)}
              <span class="detail-reviews">${product.reviews} نظر</span>
            </div>

            <div class="detail-price-row">
              ${isDiscount ? `
                <div class="detail-old-price">${product.oldPriceText} تومان</div>
                <div class="detail-new-price">${product.priceText}</div>
                <div class="detail-disc-pill">${product.disc}</div>
              ` : `
                <div class="detail-new-price">${product.priceText}</div>
              `}
            </div>

            <div class="detail-section-title">رنگ‌بندی</div>
            <div class="detail-colors">
              ${product.colors.map((c, i) => `
                <div class="color-dot ${i === 0 ? 'active' : ''}" style="background:${c}" onclick="selectColor(this)"></div>
              `).join('')}
            </div>

            <div class="detail-section-title">انتخاب سایز</div>
            <div class="size-grid" id="sizeGrid">
              ${product.sizes.map(s => `
                <button class="size-btn" onclick="selectSize(${s}, this)">${s}</button>
              `).join('')}
            </div>
            <div class="size-hint" id="sizeHint" style="display:none">
              <i class="bi bi-exclamation-circle me-1"></i>لطفاً ابتدا یک سایز انتخاب کنید
            </div>

            <div class="detail-section-title">درباره محصول</div>
            <p class="detail-desc">${product.desc}</p>

            <div class="detail-features">
              <div class="d-feat"><i class="bi bi-truck"></i>ارسال رایگان</div>
              <div class="d-feat"><i class="bi bi-arrow-repeat"></i>بازگشت تا ۷ روز</div>
              <div class="d-feat"><i class="bi bi-shield-check"></i>ضمانت اصالت</div>
            </div>

            <div class="detail-actions">
              <button class="btn-add-to-cart" onclick="handleAddToCart()">
                <i class="bi bi-bag-plus me-2"></i>افزودن به سبد خرید
              </button>
              <button class="btn-wishlist">
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  showPage('product');
}

function changeDetailImg(idx, src) {
  currentImgIdx = idx;
  document.getElementById('mainProductImg').src = src;
  document.querySelectorAll('.detail-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
}

function selectSize(size, btn) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('sizeHint').style.display = 'none';
}

function selectColor(dot) {
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
}

function handleAddToCart() {
  if (!selectedSize) {
    const hint = document.getElementById('sizeHint');
    if (hint) {
      hint.style.display = 'flex';
      hint.classList.add('shake');
      setTimeout(() => hint.classList.remove('shake'), 500);
    }
    return;
  }
  addToCartItem(currentProduct, selectedSize);
}

/* ─── CART PAGE ─── */
function showCartPage() {
  renderCart();
  showPage('cart');
}

/* ─── CAROUSEL SLIDE ─── */
function slide(sliderId, dir) {
  const el = document.getElementById(sliderId);
  if (!el) return;
  const cardWidth = el.querySelector('.pcard')?.offsetWidth || 260;
  el.scrollBy({ left: dir * (cardWidth + 18), behavior: 'smooth' });
}

/* ─── TOAST ─── */
function showSuccessToast(text) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-msg');
  if (!toast || !msg) return;
  msg.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ─── PAGE NAVIGATION ─── */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + name);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, 80);
}

/* ─── NAVBAR SCROLL SHADOW ─── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(0,0,0,.1)'
      : '0 1px 3px rgba(0,0,0,.07)';
  }
});

/* ─── FORM VALIDATION ─── */
function setError(inputId, errId, show) {
  const input = document.getElementById(inputId);
  const err = document.getElementById(errId);
  if (!input || !err) return;
  if (show) {
    input.classList.add('is-error');
    err.classList.add('show');
  } else {
    input.classList.remove('is-error');
    err.classList.remove('show');
  }
  return !show;
}

function handleLogin() {
  const email = document.getElementById('login-email')?.value || '';
  const pass = document.getElementById('login-pass')?.value || '';
  const emailOk = setError('login-email', 'login-email-err', !/\S+@\S+\.\S+/.test(email));
  const passOk  = setError('login-pass',  'login-pass-err',  !pass.trim());
  if (emailOk && passOk) {
    showSuccessToast('✅ با موفقیت وارد شدید');
    setTimeout(() => showPage('home'), 1800);
  }
}

function handleRegister() {
  const fname  = document.getElementById('reg-fname')?.value  || '';
  const lname  = document.getElementById('reg-lname')?.value  || '';
  const email  = document.getElementById('reg-email')?.value  || '';
  const phone  = document.getElementById('reg-phone')?.value  || '';
  const pass   = document.getElementById('reg-pass')?.value   || '';
  const pass2  = document.getElementById('reg-pass2')?.value  || '';

  const r1 = setError('reg-fname', 'reg-fname-err', !fname.trim());
  const r2 = setError('reg-lname', 'reg-lname-err', !lname.trim());
  const r3 = setError('reg-email', 'reg-email-err', !/\S+@\S+\.\S+/.test(email));
  const r4 = setError('reg-phone', 'reg-phone-err', !phone.trim());
  const r5 = setError('reg-pass',  'reg-pass-err',  pass.length < 8);
  const r6 = setError('reg-pass2', 'reg-pass2-err', !pass2 || pass !== pass2);

  if (r1 && r2 && r3 && r4 && r5 && r6) {
    showSuccessToast('🎉 ثبت‌نام با موفقیت انجام شد');
    setTimeout(() => showPage('home'), 1800);
  }
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderDiscounts();
  updateCartBadge();
});
