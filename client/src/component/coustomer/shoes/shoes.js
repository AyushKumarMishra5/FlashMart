import React, { useState } from 'react'
import './shoes.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/s11.png';
import pro2 from '../assets/s2.png';
import pro3 from '../assets/s3.jpg';
import pro4 from '../assets/s4.jpg';
import pro5 from '../assets/s5.webp';
import pro6 from '../assets/s6.webp';
import pro7 from '../assets/s7.webp';
import pro8 from '../assets/s8.jpg';
import pro9 from '../assets/s9.webp';
import pro10 from '../assets/s10.webp';

export default function Shoes({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
      // Nike Shoes
      { id: 1, name: "Nike Air Zoom Pegasus", description: "Experience ultimate comfort and speed with the Nike Air Zoom Pegasus, featuring responsive cushioning and a sleek, breathable design.", image: pro1, amount: 5999 },
      { id: 2, name: "Nike Revolution 6", description: "A perfect blend of style and function, the Nike Revolution 6 offers lightweight support and all-day comfort for casual wear or running.", image: pro2, amount: 4299 },
      { id: 3, name: "Casual Slip-On Sneakers", description: "Effortless style meets comfort in these slip-on sneakers, designed for everyday use with a cushioned insole and breathable fabric.", image: pro3, amount: 1799 },
      { id: 4, name: "Chunky Sole Trainers", description: "Stand out with these trendy chunky sole trainers, offering maximum support and a bold street-style look.", image: pro4, amount: 2499 },
      { id: 5, name: "Everyday Walking Shoes", description: "Lightweight and durable, these walking shoes provide excellent arch support, making them perfect for daily wear.", image: pro5, amount: 2199 },
      { id: 6, name: "Lace-Up Sport Sneakers", description: "Designed for active lifestyles, these sport sneakers provide excellent grip, flexibility, and breathable comfort.", image: pro6, amount: 2599 },
      { id: 7, name: "RedTape Athleisure Sneakers", description: "A stylish addition to your footwear collection, these RedTape sneakers offer premium comfort and a modern design.", image: pro7, amount: 3299 },
      { id: 8, name: "RedTape Running Shoes", description: "Hit the track with confidence in these RedTape running shoes, engineered for speed, stability, and long-lasting performance.", image: pro8, amount: 3899 },
      { id: 9, name: "RedTape High-Top Sneakers", description: "Elevate your casual wear with these RedTape high-top sneakers, featuring a sleek design and cushioned sole for extra support.", image: pro9, amount: 3499 },
      { id: 10, name: "RedTape Formal Loafers", description: "Perfect for work or formal outings, these RedTape loafers combine elegance with comfort for an effortlessly stylish look.", image: pro10, amount: 4499 }
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
