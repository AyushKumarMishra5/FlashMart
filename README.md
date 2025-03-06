
# FlashMart - MERN Stack E-commerce Platform
FlashMart is a fast, reliable e-commerce platform where users can shop a wide range of products with secure payments and quick delivery. From electronics to fashion and home essentials, enjoy a seamless shopping experience with real-time tracking and hassle-free service. Shop anytime, anywhere, with ease! 🚀🛒

# Overview
 FlashMart is a full-stack e-commerce platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a seamless shopping experience with dynamic 
    product listings, user authentication, and secure payment integration.

# Features
1 User Authentication: Secure login and signup using MERN authentication for real-time users.
2 Product Management: Dynamic product listing handled within React.
3 Responsive Design: Provides responsive design but is not yet fully ready for mobile apps.
4 Shopping Cart: Add, remove, and update items in the cart.
5 Order Processing: Checkout and order confirmation system.
6 Admin Panel: Manage users, products, and orders.
7 Dynamic Pagination: Efficient browsing through products.
8 RESTful APIs: Backend APIs for all operations.
9 Live Concern Form: A real-time form in the UI for users to share concerns instantly.
10 Amazing Delivery modes and Live tracking Status

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

# Screenshots
## Dexstop view
### Dashboard
![image](https://github.com/user-attachments/assets/b279e89d-c8f2-458d-a249-8e5f42e5276e)
### Categories
![image](https://github.com/user-attachments/assets/2c7b9b9c-e6ff-4ecb-8c39-c5eb5b73553f)
### Cart Page
![image](https://github.com/user-attachments/assets/02e284f6-9890-4643-a471-58ea89c96122)
### Payment Page
![image](https://github.com/user-attachments/assets/ea028e38-d002-4f92-b2a8-3becc3711a96)
### Order confirmation page
![image](https://github.com/user-attachments/assets/54a637b0-2272-498f-9a66-f52b6a603fd8)

## Mobile View
![WhatsApp Image 2025-03-06 at 19 23 36_616a6e62](https://github.com/user-attachments/assets/36442a65-3752-4115-a635-4cce560243f7)
![WhatsApp Image 2025-03-06 at 19 24 20_0d5ae576](https://github.com/user-attachments/assets/ffba7567-7843-4c4f-954e-a1c9418ff17b)

# How to use
1. First get to the website and register your account
2. Now log in your account filling the details
3. Get into your shopping dashboard, browze products, get description by hovering on it and add to get in your cart
4. Click on the checkout to conitnue further
5. Add the delivery address where you want your product to get delivered
6. Select the payment mode and Delivery mod and click on conitnue button
7. Finally the order has been places and now you have a live tracking where you can get the current status of your product.
   
## License
This project is licensed under the MIT License.

## Author: Ayush Kumar Mishra
## GitHub: AyushKumarMishra5

