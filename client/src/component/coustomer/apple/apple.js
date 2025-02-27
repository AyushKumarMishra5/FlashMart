import React, { useState } from 'react'
import './apple.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/ap1.webp';
import pro2 from '../assets/ap2.jpg';
import pro3 from '../assets/ap3.webp';
import pro4 from '../assets/ap4.jpg';
import pro5 from '../assets/ap5.webp';
import pro6 from '../assets/ap6.webp';
import pro7 from '../assets/ap7.jpeg';
import pro8 from '../assets/ap8.webp';
import pro9 from '../assets/ap9.jpg';
import pro10 from '../assets/ap10.jpg';

export default function Apple({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "iPhone 15 Pro Max", description: "Apple's flagship smartphone featuring a titanium design, A17 Pro chip, and a powerful triple-camera system for stunning photos and videos.", image: pro1, amount: 159999 },
    { id: 2, name: "iPhone 15 Pro", description: "Premium iPhone with a sleek titanium build, A17 Pro chip, ProMotion display, and advanced photography capabilities.", image: pro2, amount: 134999 },
    { id: 3, name: "iPhone 15 Plus", description: "Larger display and enhanced battery life with the powerful A16 Bionic chip and dynamic camera system for an immersive experience.", image: pro3, amount: 99999 },
    { id: 4, name: "iPhone 15", description: "Sleek and powerful with an advanced dual-camera system, A16 Bionic chip, and a durable Ceramic Shield front cover.", image: pro4, amount: 79999 },
    { id: 5, name: "iPhone 14 Pro Max", description: "High-performance iPhone with an always-on display, ProMotion technology, and a 48MP main camera for professional-quality shots.", image: pro5, amount: 127999 },
    { id: 6, name: "iPhone 14 Pro", description: "Experience the power of the A16 Bionic chip, ProMotion display, and a triple-camera setup for exceptional performance and photography.", image: pro6, amount: 117999 },
    { id: 7, name: "iPhone 14 Plus", description: "Big screen and big battery life, featuring the A15 Bionic chip and advanced camera system for stunning photos and videos.", image: pro7, amount: 89999 },
    { id: 8, name: "iPhone 14", description: "A powerful and stylish iPhone with a dual-camera system, Ceramic Shield, and A15 Bionic chip for smooth performance.", image: pro8, amount: 69999 },
    { id: 9, name: "iPhone 13 Pro Max", description: "Super Retina XDR display, A15 Bionic chip, and a Pro camera system with macro photography for an outstanding experience.", image: pro9, amount: 109999 },
    { id: 10, name: "iPhone 13", description: "Compact yet powerful with an A15 Bionic chip, dual-camera system, and incredible battery life for everyday use.", image: pro10, amount: 61999 }
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
