# FlashMart - MERN Stack E-commerce Platform
FlashMart is a fast, reliable e-commerce platform where users can shop a wide range of products with secure payments and quick delivery. From electronics to fashion and home essentials, enjoy a seamless shopping experience with real-time tracking and hassle-free service. Shop anytime, anywhere, with ease! 🚀🛒

# Overview
 FlashMart is a full-stack e-commerce platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a seamless shopping experience with dynamic 
    product listings, user authentication, and secure payment integration.

# Features
User Authentication: Secure login and signup using MERN authentication for real-time users.
    Product Management: Dynamic product listing handled within React.
    Responsive Design: Provides responsive design but is not yet fully ready for mobile apps.
    Shopping Cart: Add, remove, and update items in the cart.
    Order Processing: Checkout and order confirmation system.
    Admin Panel: Manage users, products, and orders.
    Dynamic Pagination: Efficient browsing through products.
    RESTful APIs: Backend APIs for all operations.
    Live Concern Form: A real-time form in the UI for users to share concerns instantly.
    AirShipping Infusion: A unique feature that sets FlashMart apart from other platforms by integrating an AirShipping service for faster and more efficient deliveries.

# Tech Stack
   Frontend: React.js, Redux, Bootstrap
   Backend: Node.js, Express.js
   Database: MongoDB with Mongoose
   Authentication: JSON Web Tokens (JWT)
   UI/UX: React Bootstrap for a clean and modern design
   Deployment: Deployed using Vercel/Netlify (frontend) and Render/Heroku/Railway (backend)

# Installation
Prerequisites
Ensure you have the following installed:
   Node.js
   MongoDB
## Steps to be done Localaly
## 1. Clone the Repository:
    git clone https://github.com/AyushKumarMishra5/flashmart.git
    cd flashmart

##  3. Install the Dependencies
    cd server
    npm install
    cd ../client
    npm install

## 5. Setup Enironment Variables
   ## Create .env file in your backend and add the following
    MONGO_URI=your_mongodb_connection_string

## 6. Now Start the Backend server
    cd server
    npm start

## 7. Now run your frontend
    cd client
    npm run start

## API Endpoints
| Method | Endpoint            | Description                   |
|--------|---------------------|-------------------------------|
| GET    | /api/products       | Fetch all products            |
| GET    | /api/products/:id   | Fetch single product details  |
| POST   | /api/users/register | Register a new user           |
| POST   | /api/users/login    | Authenticate user             |
| POST   | /api/orders         | Create a new order            |
| GET    | /api/orders/:id     | Get order details             |

# Deployment
   To deploy the app, use services like:
   Frontend: Vercel / Netlify
   Backend: Render / Heroku
   Database: MongoDB Atlas

## Contributing
Feel free to contribute! Fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Author: Ayush Kumar Mishra
## GitHub: AyushKumarMishra5

