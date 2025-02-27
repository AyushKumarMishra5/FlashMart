import React, { useState } from 'react'
import './decoration.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/de1.jpg';
import pro2 from '../assets/de2.jpeg';
import pro3 from '../assets/de3.webp';
import pro4 from '../assets/de4.webp';
import pro5 from '../assets/de5.jpg';
import pro6 from '../assets/de6.webp';
import pro7 from '../assets/de7.webp';
import pro8 from '../assets/de8.avif';
import pro9 from '../assets/de9.webp';
import pro10 from '../assets/de10.webp';

export default function Decoration({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Elegant Home Accent", description: "A stylish decorative piece that enhances any living space with its modern and sophisticated charm.", image: pro1, amount: 1299 },
    { id: 2, name: "Artistic Wall Décor", description: "A beautifully crafted wall piece that adds a touch of elegance and creativity to your interiors.", image: pro2, amount: 2499 },
    { id: 3, name: "Luxurious Table Centerpiece", description: "An exquisite table décor item that elevates your home ambiance with its refined aesthetics.", image: pro3, amount: 1899 },
    { id: 4, name: "Minimalist Decorative Vase", description: "A sleek and contemporary vase that brings a refreshing and artistic vibe to any space.", image: pro4, amount: 999 },
    { id: 5, name: "Handcrafted Wooden Showpiece", description: "A unique wooden décor piece that showcases craftsmanship and adds a rustic charm to your home.", image: pro5, amount: 2199 },
    { id: 6, name: "Illuminated Decorative Lantern", description: "A warm and inviting lantern that creates a cozy ambiance with its soft glow and elegant design.", image: pro6, amount: 1499 },
    { id: 7, name: "Aesthetic Room Ornament", description: "A chic decorative item designed to bring beauty and sophistication to any corner of your home.", image: pro7, amount: 799 },
    { id: 8, name: "Timeless Candle Holder", description: "A classic candle holder that blends seamlessly into any decor, perfect for enhancing cozy evenings.", image: pro8, amount: 599 },
    { id: 9, name: "Modern Sculpture Décor", description: "A striking sculpture that makes a bold statement, adding a touch of artistic elegance to your interiors.", image: pro9, amount: 3299 },
    { id: 10, name: "Vintage-Inspired Home Accent", description: "A charming decorative piece with a timeless appeal, perfect for giving your space a nostalgic touch.", image: pro10, amount: 1799 }
];

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
  const filterProduct = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())
  );
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
