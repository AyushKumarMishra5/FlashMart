import React, { useState } from 'react'
import './accessories.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/ac1.jpg';
import pro2 from '../assets/ac2.jpg';
import pro3 from '../assets/ac3.png';
import pro4 from '../assets/ac4.jpg';
import pro5 from '../assets/ac5.jpg';
import pro6 from '../assets/ac6.jpg';
import pro7 from '../assets/ac7.webp';
import pro8 from '../assets/ac8.webp';
import pro9 from '../assets/ac9.webp';
import pro10 from '../assets/ac10.jpeg';

export default function Accessories({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Modern Security Lock", description: "A sleek and durable security solution designed to provide enhanced safety while complementing your door’s aesthetics.", image: pro1, amount: 2499 },
    { id: 2, name: "Stainless Steel Kitchen Basin", description: "A spacious, rust-resistant kitchen basin with a polished finish, designed for effortless cleaning and a modern touch.", image: pro2, amount: 3999 },
    { id: 3, name: "Luxury Rain Shower", description: "A high-pressure rainfall shower system that delivers a spa-like experience, making every shower refreshing and relaxing.", image: pro3, amount: 5999 },
    { id: 4, name: "Decorative Maze Wall Art", description: "An intricately designed maze-inspired decorative piece that adds a unique and artistic touch to your living space.", image: pro4, amount: 1999 },
    { id: 5, name: "Premium Background Wallpaper", description: "A stylish and high-quality wallpaper that transforms any room with elegant patterns and long-lasting durability.", image: pro5, amount: 2999 },
    { id: 6, name: "Essential Car Repair Kit", description: "A compact and versatile kit containing all the necessary tools for quick and efficient car maintenance and repairs.", image: pro6, amount: 3499 },
    { id: 7, name: "Elegant Charm Bracelet", description: "A beautifully crafted bracelet with intricate details, adding a touch of elegance and sophistication to any outfit.", image: pro7, amount: 1499 },
    { id: 8, name: "Stylish Hairband Set", description: "A collection of chic and comfortable hairbands designed to keep your hair in place while adding a fashionable touch.", image: pro8, amount: 799 },
    { id: 9, name: "Multipurpose Laptop Accessories", description: "A set of must-have laptop add-ons that enhance productivity, organization, and overall user experience.", image: pro9, amount: 2599 },
    { id: 10, name: "Trendy Fashion Rings", description: "A set of finely crafted rings that complement any look, perfect for daily wear or special occasions.", image: pro10, amount: 1999 }
  ];
  const filterProduct = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())
  );
  const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`, {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "light",
        });
      };
  return (
    <>
    <ToastContainer />
      <div className='input'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="product">
        {filterProduct.map((product) => (
          <div key={product.id} className="pro">
            <img src={product.image} alt={product.name} />
            <div className="overlay">{product.description}</div>
            <br />
            <div className="btn">
              <h4>{product.name}</h4>
              <button onClick={() => handleAddToCart(product)}>Add</button>
              <h4>Rs {product.amount}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
