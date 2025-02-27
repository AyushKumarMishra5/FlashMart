import React, { useState } from 'react'
import './watches.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/wa1.webp';
import pro2 from '../assets/wa2.jpg';
import pro3 from '../assets/wa3.avif';
import pro4 from '../assets/wa4.jpg';
import pro5 from '../assets/wa5.webp';
import pro6 from '../assets/wa6.webp';
import pro7 from '../assets/wa7.jpg';
import pro8 from '../assets/wa8.jpg';
import pro9 from '../assets/wa9.jpg';
import pro10 from '../assets/wa10.jpg';

export default function Watches({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Elegance Royal Watch", description: "An elegant and timeless royal watch, crafted with precision and designed for sophistication.", image: pro1, amount: 1299 },
    { id: 2, name: "Luxury Royal Watch", description: "A luxurious royal watch featuring a sleek design and premium materials, perfect for formal occasions.", image: pro2, amount: 1599 },
    { id: 3, name: "Classic Royal Watch", description: "A classic royal watch with a minimalist dial and durable build, combining style and functionality.", image: pro3, amount: 1999 },
    { id: 4, name: "Premium Royal Watch", description: "A premium royal watch with advanced features, offering both elegance and modern technology.", image: pro4, amount: 2499 },
    { id: 5, name: "Vintage Royal Watch", description: "A vintage-inspired royal watch with intricate detailing, perfect for those who appreciate timeless design.", image: pro5, amount: 1799 },
    { id: 6, name: "Modern Royal Watch", description: "A contemporary royal watch with a bold design, ideal for making a statement.", image: pro6, amount: 2199 },
    { id: 7, name: "Sport Royal Watch", description: "A durable and stylish royal watch designed for active lifestyles, blending functionality and elegance.", image: pro7, amount: 1499 },
    { id: 8, name: "Gold Royal Watch", description: "A stunning royal watch with a gold finish, exuding luxury and sophistication.", image: pro8, amount: 2999 },
    { id: 9, name: "Silver Royal Watch", description: "A sleek silver royal watch with a polished finish, perfect for everyday elegance.", image: pro9, amount: 1899 },
    { id: 10, name: "Limited Edition Royal Watch", description: "An exclusive royal watch with unique design elements, offering a rare and luxurious experience.", image: pro10, amount: 3499 }
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
