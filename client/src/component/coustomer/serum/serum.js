import React, { useState } from 'react'
import './serum.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/se1.webp';
import pro2 from '../assets/se2.webp';
import pro3 from '../assets/se3.jpg';
import pro4 from '../assets/se4.webp';
import pro5 from '../assets/se5.webp';
import pro6 from '../assets/se6.jpg';
import pro7 from '../assets/se7.webp';
import pro8 from '../assets/se8.avif';
import pro9 from '../assets/se9.webp';
import pro10 from '../assets/se10.webp';

export default function Serum({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Vitamin C Serum", description: "Brightening serum infused with Vitamin C to enhance skin radiance and reduce dark spots.", image: pro1, amount: 599 },
    { id: 2, name: "Hyaluronic Acid Serum", description: "Hydrating serum with hyaluronic acid that deeply moisturizes and plumps the skin.", image: pro2, amount: 699 },
    { id: 3, name: "Retinol Serum", description: "Anti-aging serum with retinol that boosts collagen production and smooths fine lines.", image: pro3, amount: 799 },
    { id: 4, name: "Niacinamide Serum", description: "Pore-refining serum with niacinamide that controls oil and improves skin texture.", image: pro4, amount: 649 },
    { id: 5, name: "Salicylic Acid Serum", description: "Blemish-fighting serum with salicylic acid that clears acne and unclogs pores.", image: pro5, amount: 599 },
    { id: 6, name: "Peptide Serum", description: "Firming serum with peptides that supports skin elasticity and reduces wrinkles.", image: pro6, amount: 899 },
    { id: 7, name: "Kojic Acid Serum", description: "Skin-brightening serum with kojic acid that fades hyperpigmentation and evens skin tone.", image: pro7, amount: 749 },
    { id: 8, name: "Centella Asiatica Serum", description: "Soothing serum with centella asiatica that calms sensitive and irritated skin.", image: pro8, amount: 799 },
    { id: 9, name: "Ceramide Serum", description: "Barrier-strengthening serum with ceramides that locks in moisture and repairs dry skin.", image: pro9, amount: 849 },
    { id: 10, name: "Alpha Arbutin Serum", description: "Dark spot correcting serum with alpha arbutin that visibly reduces discoloration.", image: pro10, amount: 799 }
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
