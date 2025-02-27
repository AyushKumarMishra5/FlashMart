import React, { useState } from 'react'
import './drinks.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/d1.webp';
import pro2 from '../assets/d2.webp';
import pro3 from '../assets/d3.webp';
import pro4 from '../assets/d4.jpg';
import pro5 from '../assets/d5.jpg';
import pro6 from '../assets/d6.webp';
import pro7 from '../assets/d7.jpeg';
import pro8 from '../assets/d8.avif';
import pro9 from '../assets/d9.avif';
import pro10 from '../assets/d10.webp';

export default function Drinks({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Cola", description: "A classic carbonated soft drink with a rich, sweet flavor, perfect for quenching your thirst.", image: pro1, amount: 299 },
    { id: 2, name: "Watermelon Soda", description: "A refreshing and fruity soda with the sweet, juicy taste of fresh watermelon.", image: pro2, amount: 499 },
    { id: 3, name: "Lemon Soda", description: "A fizzy and tangy lemon-flavored soda, offering a burst of citrusy refreshment.", image: pro3, amount: 899 },
    { id: 4, name: "Mango Fizz", description: "A tropical mango-flavored soda that brings the sweet and tangy taste of ripe mangoes to life.", image: pro4, amount: 1299 },
    { id: 5, name: "Prime Energy", description: "A premium energy drink packed with electrolytes and vitamins to fuel your day.", image: pro5, amount: 699 },
    { id: 6, name: "Red Bull", description: "An iconic energy drink that gives you wings, boosting your energy and focus instantly.", image: pro6, amount: 349 },
    { id: 7, name: "Monster Energy", description: "A high-performance energy drink designed to unleash your inner beast and keep you going.", image: pro7, amount: 199 },
    { id: 8, name: "Fizz", description: "A sparkling and refreshing soda with a light, bubbly taste, perfect for any occasion.", image: pro8, amount: 399 },
    { id: 9, name: "Pepsi", description: "A globally loved cola with a bold, refreshing taste that never disappoints.", image: pro9, amount: 599 },
    { id: 10, name: "Hello Drink", description: "A unique and flavorful soft drink that greets your taste buds with a delightful experience.", image: pro10, amount: 449 }
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
