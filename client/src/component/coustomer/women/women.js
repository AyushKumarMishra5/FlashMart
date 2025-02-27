import React, { useState } from 'react'
import './women.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/w1.webp';
import pro2 from '../assets/w2.webp';
import pro3 from '../assets/w3.webp';
import pro4 from '../assets/w4.avif';
import pro5 from '../assets/w5.jpg';
import pro6 from '../assets/w6.webp';
import pro7 from '../assets/w7.jpeg';
import pro8 from '../assets/w8.webp';
import pro9 from '../assets/w9.jpg';
import pro10 from '../assets/w10.jpg';

export default function Women({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Classic White Tee", description: "Timeless and versatile, this ultra-soft cotton tee is perfect for any occasion, offering all-day comfort with a flattering fit.", image: pro1, amount: 499 },
    { id: 2, name: "Vintage Graphic Tee", description: "A stylish throwback design with a vintage print, this relaxed-fit t-shirt adds personality to your everyday look.", image: pro2, amount: 599 },
    { id: 3, name: "Oversized Boyfriend Tee", description: "Stay effortlessly chic with this oversized tee, designed for a laid-back, comfortable fit that pairs perfectly with jeans or shorts.", image: pro3, amount: 699 },
    { id: 4, name: "Minimalist Striped Tee", description: "A wardrobe essential with subtle stripes, crafted from breathable fabric to keep you cool and stylish all day long.", image: pro4, amount: 649 },
    { id: 5, name: "Cropped Ribbed Tee", description: "Trendy and flattering, this ribbed crop tee hugs your figure in all the right places while offering superior comfort.", image: pro5, amount: 549 },
    { id: 6, name: "Athleisure Performance Tee", description: "Stay active in style with this moisture-wicking, lightweight tee designed for workouts, yoga, or casual wear.", image: pro6, amount: 799 },
    { id: 7, name: "Floral Print T-Shirt", description: "Add a touch of femininity to your outfit with this soft, breathable tee featuring a delicate floral print.", image: pro7, amount: 629 },
    { id: 8, name: "Relaxed Fit Tie-Dye Tee", description: "A splash of color and comfort come together in this eye-catching tie-dye tee, perfect for casual summer vibes.", image: pro8, amount: 699 },
    { id: 9, name: "V-Neck Soft Cotton Tee", description: "Simple yet sophisticated, this V-neck t-shirt is crafted from ultra-soft cotton for an effortlessly stylish everyday look.", image: pro9, amount: 579 },
    { id: 10, name: "Embroidered Logo Tee", description: "A premium touch to a classic tee, featuring subtle embroidery that enhances its elegance while ensuring ultimate comfort.", image: pro10, amount: 749 }
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
