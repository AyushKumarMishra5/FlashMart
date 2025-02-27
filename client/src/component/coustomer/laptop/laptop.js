import React, { useState } from 'react'
import './laptop.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/l1.webp';
import pro2 from '../assets/l2.jpg';
import pro3 from '../assets/l3.webp';
import pro4 from '../assets/l4.jpg';
import pro5 from '../assets/l5.jpg';
import pro6 from '../assets/l6.webp';
import pro7 from '../assets/l7.webp';
import pro8 from '../assets/l8.avif';
import pro9 from '../assets/l9.png';
import pro10 from '../assets/l10.webp';

export default function Laptop({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Dell Inspiron 15", description: "A versatile and powerful laptop with a 15-inch display, perfect for everyday productivity and entertainment.", image: pro1, amount: 49999 },
    { id: 2, name: "Dell XPS 13", description: "A premium ultrabook with a stunning 13-inch display, designed for professionals seeking performance and portability.", image: pro2, amount: 89999 },
    { id: 3, name: "Dell G5 Gaming Laptop", description: "A high-performance gaming laptop with a powerful GPU and fast refresh rate, ideal for gamers and creators.", image: pro3, amount: 109999 },
    { id: 4, name: "Dell Latitude 14", description: "A durable and business-ready laptop with advanced security features, perfect for professionals on the go.", image: pro4, amount: 74999 },
    { id: 5, name: "Dell Alienware m15", description: "A cutting-edge gaming laptop with top-tier specs and a sleek design, built for immersive gaming experiences.", image: pro5, amount: 149999 },
    { id: 6, name: "Dell Vostro 15", description: "A reliable and affordable laptop for small businesses, offering great performance and value.", image: pro6, amount: 54999 },
    { id: 7, name: "Dell Precision 17", description: "A workstation laptop designed for professionals, offering exceptional performance for demanding tasks.", image: pro7, amount: 129999 },
    { id: 8, name: "Dell Chromebook 11", description: "A lightweight and portable Chromebook, perfect for students and casual users.", image: pro8, amount: 29999 },
    { id: 9, name: "MacBook Air M2", description: "A sleek and powerful ultrabook with Apple's M2 chip, offering incredible performance and battery life.", image: pro9, amount: 119999 },
    { id: 10, name: "MacBook Pro 16", description: "A professional-grade laptop with a stunning 16-inch display, designed for creators and power users.", image: pro10, amount: 199999 }
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
