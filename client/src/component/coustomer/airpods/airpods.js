import React, { useState } from 'react'
import './airpods.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/e1.webp';
import pro2 from '../assets/e2.webp';
import pro3 from '../assets/e3.webp';
import pro4 from '../assets/e4.jpg';
import pro5 from '../assets/e5.webp';
import pro6 from '../assets/e6.jpg';
import pro7 from '../assets/e7.webp';
import pro8 from '../assets/e8.webp';
import pro9 from '../assets/e9.jpg';
import pro10 from '../assets/e10.jpeg';

export default function Airpods({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Noise Buds VS104", description: "Experience deep bass and crystal-clear sound with Noise Buds VS104, featuring ENC, ultra-low latency, and 45 hours of playtime.", image: pro1, amount: 1499 },
    { id: 2, name: "Noise Buds X", description: "Noise Buds X offers Hybrid ANC, powerful drivers, and a sleek design for an immersive audio experience with long-lasting comfort.", image: pro2, amount: 1999 },
    { id: 3, name: "Noise Air Buds Pro 2", description: "With powerful 12mm drivers and Quad Mic ENC, Noise Air Buds Pro 2 ensures clear calls and immersive music experience.", image: pro3, amount: 2499 },
    { id: 4, name: "Noise Pure Pods", description: "Lightweight and compact Noise Pure Pods deliver HD sound, fast charging, and seamless connectivity for everyday listening.", image: pro4, amount: 1699 },
    { id: 5, name: "Realme Buds Air 3", description: "Realme Buds Air 3 features 42dB ANC, 10mm dynamic bass boost drivers, and fast charging for uninterrupted music experience.", image: pro5, amount: 3499 },
    { id: 6, name: "Realme Buds Q2", description: "Enjoy powerful bass and seamless connectivity with Realme Buds Q2, offering 28 hours of total playtime and gaming mode.", image: pro6, amount: 1999 },
    { id: 7, name: "Realme TechLife Buds T100", description: "Realme TechLife Buds T100 delivers AI ENC for clear calls, ultra-lightweight design, and immersive sound quality.", image: pro7, amount: 1299 },
    { id: 8, name: "Realme Buds Wireless 2 Neo", description: "With an ergonomic neckband design, Realme Buds Wireless 2 Neo provides deep bass, fast charging, and 17 hours of playtime.", image: pro8, amount: 1599 },
    { id: 9, name: "Apple AirPods Pro 2nd Gen", description: "Immerse yourself in rich, high-quality sound with Apple AirPods Pro 2nd Gen, featuring active noise cancellation and spatial audio.", image: pro9, amount: 25999 },
    { id: 10, name: "Apple AirPods 3rd Gen", description: "Experience powerful bass, adaptive EQ, and a sleek design with Apple AirPods 3rd Gen for seamless connectivity and crystal-clear calls.", image: pro10, amount: 17999 }
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
