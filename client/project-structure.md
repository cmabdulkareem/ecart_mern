e-cart-mern-app/
├── public/
│   └── assets/
│       └── images/
│       └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── images/
│   │   └── styles/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── user/
│   │   └── admin/
│   │
│   ├── layouts/
│   │   ├── UserLayout.jsx
│   │   └── AdminLayout.jsx
│   │
│   ├── pages/
│   │   ├── user/
│   │   │   └── Home.jsx
│   │   │   └── ProductDetails.jsx
│   │   │   └── Cart.jsx
│   │   │   └── Checkout.jsx
│   │   │   └── Orders.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   └── admin/
│   │       └── Dashboard.jsx
│   │       └── Products.jsx
│   │       └── Orders.jsx
│   │       └── Users.jsx
│   │       └── Reports.jsx
│
│   ├── routes/
│   │   └── AdminRoutes.jsx
│   │   └── UserRoutes.jsx
│
│   ├── services/
│   │   └── api.js
│   │   └── productService.js
│   │   └── orderService.js
│   │   └── authService.js
│   │
│   ├── store/
│   │   └── index.js
│   │   └── cartSlice.js
│   │   └── userSlice.js
│   │   └── adminSlice.js
│   │
│   ├── hooks/
│   │   └── useCart.js
│   │   └── useAuth.js
│   │   └── useAdmin.js
│   │
│   ├── utils/
│   │   └── formatCurrency.js
│   │   └── validators.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── vite.config.js
├── package.json
└── README.md
