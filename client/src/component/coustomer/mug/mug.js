import React, { useState } from 'react'
import './mug.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/c1.webp';
import pro2 from '../assets/c2.jpeg';
import pro3 from '../assets/c3.jpg';
import pro4 from '../assets/c4.jpg';
import pro5 from '../assets/c5.webp';
import pro6 from '../assets/c6.webp';
import pro7 from '../assets/c7.webp';
import pro8 from '../assets/c8.webp';
import pro9 from '../assets/c9.jpg';
import pro10 from '../assets/c10.webp';

export default function Mug({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Classic Coffee Mug", description: "A timeless ceramic coffee mug, perfect for enjoying your favorite hot beverages in style.", image: pro1, amount: 299 },
    { id: 2, name: "Insulated Travel Mug", description: "A durable, leak-proof travel mug designed to keep your coffee hot and your hands cool on the go.", image: pro2, amount: 499 },
    { id: 3, name: "Personalized Coffee Mug", description: "A custom ceramic mug that can be personalized with names, quotes, or designs for a unique touch.", image: pro3, amount: 899 },
    { id: 4, name: "Large Capacity Coffee Mug", description: "A spacious coffee mug with a generous capacity, ideal for those who love extra-large servings.", image: pro4, amount: 1299 },
    { id: 5, name: "Eco-Friendly Bamboo Mug", description: "A sustainable and lightweight coffee mug made from eco-friendly bamboo material.", image: pro5, amount: 699 },
    { id: 6, name: "Color-Changing Magic Mug", description: "A fun and interactive mug that changes color when filled with hot liquids, revealing hidden designs.", image: pro6, amount: 349 },
    { id: 7, name: "Stainless Steel Coffee Mug", description: "A sleek and durable stainless steel mug that retains heat and is resistant to rust and stains.", image: pro7, amount: 199 },
    { id: 8, name: "Minimalist Ceramic Mug", description: "A simple yet elegant ceramic mug with a minimalist design, perfect for everyday use.", image: pro8, amount: 399 },
    { id: 9, name: "Gift Box Coffee Mug Set", description: "A beautifully packaged set of premium coffee mugs, ideal for gifting or special occasions.", image: pro9, amount: 599 },
    { id: 10, name: "Artistic Hand-Painted Mug", description: "A unique, hand-painted coffee mug featuring intricate designs and vibrant colors.", image: pro10, amount: 449 }
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
