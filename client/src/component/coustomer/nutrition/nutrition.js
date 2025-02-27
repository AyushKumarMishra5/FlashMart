import React, { useState } from 'react'
import './nutrition.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/n1.webp';
import pro2 from '../assets/n2.jpeg';
import pro3 from '../assets/n3.webp';
import pro4 from '../assets/n4.webp';
import pro5 from '../assets/n5.jpeg';
import pro6 from '../assets/n6.png';
import pro7 from '../assets/n7.png';
import pro8 from '../assets/n8.webp';
import pro9 from '../assets/n9.webp';
import pro10 from '../assets/n10.jpg';

export default function Nutrition({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Whey Protein", description: "High-quality whey protein for muscle growth and recovery, ideal for fitness enthusiasts.", image: pro1, amount: 1299 },
    { id: 2, name: "Plant-Based Protein", description: "Vegan-friendly protein powder made from natural plant sources, rich in essential amino acids.", image: pro2, amount: 1399 },
    { id: 3, name: "Casein Protein", description: "Slow-digesting protein that supports muscle repair overnight, keeping you fueled for longer.", image: pro3, amount: 1499 },
    { id: 4, name: "Micronized Creatine", description: "Pure micronized creatine monohydrate for increased strength, power, and performance.", image: pro4, amount: 699 },
    { id: 5, name: "Creatine HCL", description: "Highly absorbable creatine HCL for improved muscle endurance and reduced water retention.", image: pro5, amount: 799 },
    { id: 6, name: "Angai Protein Original", description: "Traditional angai protein powder packed with natural ingredients to boost strength and stamina.", image: pro6, amount: 999 },
    { id: 7, name: "Angai Herbal Protein", description: "Herbal-infused angai protein powder that enhances muscle health and vitality naturally.", image: pro7, amount: 1099 },
    { id: 8, name: "Angai Energy Blend", description: "Specially formulated angai protein with added nutrients for sustained energy and focus.", image: pro8, amount: 1199 },
    { id: 9, name: "Angai Performance Mix", description: "Advanced angai protein mix for athletes looking to maximize their performance and endurance.", image: pro9, amount: 1299 },
    { id: 10, name: "Angai Gold Edition", description: "Premium angai protein powder with superior quality ingredients for elite muscle support.", image: pro10, amount: 1399 }
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
            <div className="overlay">{product.description}]</div>
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
