import React, { useState } from 'react'
import './hub.css'

import pro1 from '../assets/b1.png';
import pro2 from '../assets/b2.jpg';
import pro3 from '../assets/b3.jpg';
import pro4 from '../assets/b4.jpg';
import pro5 from '../assets/b5.jpg';
import pro6 from '../assets/b6.jpeg';
import pro7 from '../assets/b7.jpg';
import pro8 from '../assets/b8.avif';
import pro9 from '../assets/b9.jpeg';
import pro10 from '../assets/b10.webp';

export default function Hub({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Face Cream", description: "Hydrating face cream that nourishes and protects skin, leaving it soft, smooth, and radiant with daily use.", image: pro1, amount: 299 },
    { id: 2, name: "Serum", description: "Lightweight, fast-absorbing serum enriched with essential nutrients to rejuvenate, hydrate, and brighten skin for a youthful glow.", image: pro2, amount: 499 },
    { id: 3, name: "Protein Shake", description: "Delicious, protein-rich shake that fuels muscle recovery, boosts energy, and supports overall fitness goals with every sip.", image: pro3, amount: 899 },
    { id: 4, name: "Powered Protein 1Kg", description: "High-quality protein powder that enhances muscle growth, recovery, and strength, perfect for athletes and fitness enthusiasts.", image: pro4, amount: 1299 },
    { id: 5, name: "Creatine", description: "Premium creatine supplement designed to improve strength, power, and endurance, supporting intense workouts and muscle recovery.", image: pro5, amount: 699 },
    { id: 6, name: "Sunscreen", description: "Broad-spectrum sunscreen that protects against harmful UV rays while moisturizing and nourishing the skin for all-day defense.", image: pro6, amount: 349 },
    { id: 7, name: "Aloe Vera Gel", description: "Pure aloe vera gel that soothes, hydrates, and heals skin, providing relief from sunburns, dryness, and irritation.", image: pro7, amount: 199 },
    { id: 8, name: "Shampoo", description: "Gentle yet effective shampoo that cleanses, nourishes, and strengthens hair, leaving it fresh, soft, and shiny.", image: pro8, amount: 399 },
    { id: 9, name: "Wild Stone", description: "Masculine fragrance with a bold, refreshing scent that keeps you fresh and confident all day long.", image: pro9, amount: 599 },
    { id: 10, name: "Alpino 1Kg Oats", description: "Nutritious, fiber-rich oats that promote heart health, digestion, and sustained energy, perfect for a healthy breakfast or snack.", image: pro10, amount: 449 }
  ];
  const filterProduct = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className='input'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="product">
        {filterProduct.map((product) => (
          <div key={product.id} className="pro">
            <img src={product.image} alt={product.name} />
            <br />
            <div className="btn">
              <button onClick={() => addToCart(product)}>Add</button>
              <h4>Rs {product.amount}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
