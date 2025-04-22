e-cart-mern-app/
├── public/
│   └── assets/
│       └── images/
│       └── favicon.svg / favicon.ico
│
├── src/
│   ├── assets/
│   │   └── images/
│   │   └── styles/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   └── Header.jsx
│   │   │   └── Footer.jsx
│   │   │   └── Loader.jsx
│   │   ├── user/
│   │   │   └── ProductCard.jsx
│   │   │   └── CartItem.jsx
│   │   └── admin/
│   │       └── Sidebar.jsx
│   │       └── AdminTable.jsx
│   │
│   ├── layouts/
│   │   ├── UserLayout.jsx
│   │   └── AdminLayout.jsx
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   └── UserLogin.jsx
│   │   │   └── UserSignup.jsx
│   │   │   └── AdminLogin.jsx
│   │   │
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
│   │   └── ProtectedRoute.jsx
│
│   ├── services/
│   │   └── api.js
│   │   └── authService.js
│   │   └── productService.js
│   │   └── orderService.js
│
│   ├── hooks/
│   │   └── useAuth.js
│   │   └── useAdmin.js
│   │   └── useCart.js
│
│   ├── utils/
│   │   └── formatCurrency.js
│   │   └── validators.js
│
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
├── vite.config.js
├── README.md
