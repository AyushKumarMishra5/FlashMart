import React, { useState } from 'react'
import './phone.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/sm1.jpg';
import pro2 from '../assets/sm2.avif';
import pro3 from '../assets/sm3.webp';
import pro4 from '../assets/sm4.webp';
import pro5 from '../assets/sm5.webp';
import pro6 from '../assets/sm6.webp';
import pro7 from '../assets/sm7.jpg';
import pro8 from '../assets/sm8.jpg';
import pro9 from '../assets/sm9.png';
import pro10 from '../assets/sm10.jpg';

export default function Phone({ addToCart }) {
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: "Poco X5 Pro", description: "A high-performance smartphone with a 120Hz AMOLED display, Snapdragon processor, and 67W fast charging.", image: pro1, amount: 21999 },
    { id: 2, name: "Vivo V25 Pro", description: "A sleek and stylish smartphone with a 50MP OIS camera, AMOLED display, and MediaTek Dimensity processor.", image: pro2, amount: 29999 },
    { id: 3, name: "Vivo Y75", description: "A budget-friendly smartphone with a 44W fast charger, 50MP camera, and a stunning AMOLED display.", image: pro3, amount: 17999 },
    { id: 4, name: "Vivo T1 Pro", description: "A gaming-focused smartphone with a Snapdragon processor, 66W fast charging, and a high-refresh-rate display.", image: pro4, amount: 23999 },
    { id: 5, name: "Realme GT Neo 3", description: "A flagship killer with a MediaTek Dimensity processor, 150W fast charging, and a 120Hz AMOLED display.", image: pro5, amount: 31999 },
    { id: 6, name: "Samsung Galaxy S23 Ultra", description: "A premium flagship smartphone with a 200MP camera, Snapdragon 8 Gen 2 processor, and S Pen support.", image: pro6, amount: 124999 },
    { id: 7, name: "Samsung Galaxy Z Fold 5", description: "A foldable smartphone with a large 7.6-inch display, Snapdragon 8 Gen 2 processor, and multitasking capabilities.", image: pro7, amount: 154999 },
    { id: 8, name: "Samsung Galaxy S22 Ultra", description: "A powerful smartphone with a 108MP camera, S Pen integration, and a stunning Dynamic AMOLED display.", image: pro8, amount: 94999 },
    { id: 9, name: "Samsung Galaxy A73 5G", description: "A mid-range smartphone with a 108MP camera, 5G support, and a Super AMOLED+ display.", image: pro9, amount: 41999 },
    { id: 10, name: "IQOO Neo 7", description: "A gaming powerhouse with a MediaTek Dimensity 8200 processor, 120Hz AMOLED display, and 120W fast charging.", image: pro10, amount: 31999 }
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
