import React, { useState } from 'react';
import './men.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/ts1.webp';
import pro2 from '../assets/ts2.avif';
import pro3 from '../assets/ts3.webp';
import pro4 from '../assets/ts4.jpeg';
import pro5 from '../assets/ts5.webp';
import pro6 from '../assets/ts6.webp';
import pro7 from '../assets/ts7.webp';
import pro8 from '../assets/ts8.png';
import pro9 from '../assets/ts9.jpg';
import pro10 from '../assets/ts10.webp';

export default function Men({ addToCart }) {
  const [search, setSearch] = useState('');

  const products = [
    { id: 1, name: "Urban Edge Tee", description: "Stay effortlessly cool with this premium cotton tee, designed for ultimate comfort and timeless street style.", image: pro1, amount: 349 },
    { id: 2, name: "Oversized Rebel", description: "Make a bold statement with this relaxed-fit oversized tee, perfect for a laid-back yet edgy look.", image: pro2, amount: 599 },
    { id: 3, name: "Minimalist Classic", description: "A sleek, no-fuss t-shirt with a clean design that pairs well with anything in your wardrobe.", image: pro3, amount: 499 },
    { id: 4, name: "Graphite Vibe", description: "A stylish, deep-toned tee that gives you a modern, versatile look for any occasion.", image: pro4, amount: 699 },
    { id: 5, name: "Vintage Aesthetic", description: "Soft-washed for a retro feel, this vintage-inspired tee brings nostalgia with a fresh twist.", image: pro5, amount: 549 },
    { id: 6, name: "Monochrome Fit", description: "A must-have solid tee that blends simplicity with elegance for the perfect minimalist wardrobe staple.", image: pro6, amount: 449 },
    { id: 7, name: "Street Graffiti Tee", description: "Unleash your artistic side with this bold, graffiti-style tee designed for trendsetters and creatives.", image: pro7, amount: 649 },
    { id: 8, name: "Vierdo Statement Tee", description: "Express yourself with this iconic Vierdo tee, blending bold graphics with premium comfort.", image: pro8, amount: 799 },
    { id: 9, name: "Retro Wave", description: "A fusion of classic 90s vibes and modern-day aesthetics, this tee brings the best of both worlds.", image: pro9, amount: 599 },
    { id: 10, name: "Ultimate Comfort Tee", description: "Crafted from ultra-soft fabric, this breathable tee ensures all-day ease while keeping you stylish.", image: pro10, amount: 399 }
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
              <button onClick={() => handleAddToCart(product)}>Add</button>
              <h4>{product.name}</h4>
              <h4>Rs {product.amount}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
