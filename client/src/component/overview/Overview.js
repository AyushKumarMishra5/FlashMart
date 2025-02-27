import React, { useState } from 'react';
import './Overview.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.jpg';
import pro3 from '../assets/pro3.webp';
import pro4 from '../assets/pro4.avif';
import pro5 from '../assets/pro5.webp';
import pro6 from '../assets/pro6.webp';
import pro7 from '../assets/pro7.webp';
import pro8 from '../assets/pro8.webp';
import pro9 from '../assets/pro9.webp';
import pro10 from '../assets/pro10.webp';
import pro11 from '../assets/pro11.webp';
import pro12 from '../assets/pro12.jpeg';
import pro13 from '../assets/pro13.jpg';
import pro14 from '../assets/pro14.avif';
import pro15 from '../assets/pro15.webp';
import pro16 from '../assets/pro16.jpg';
import pro17 from '../assets/pro17.webp';
import pro18 from '../assets/pro18.jpg';
import pro19 from '../assets/pro19.webp';
import pro20 from '../assets/pro20.jpeg';
import pro21 from '../assets/pro21.avif';
import pro22 from '../assets/pro22.jpg';
import pro23 from '../assets/pro23.jpg';
import pro24 from '../assets/pro24.webp';
import pro25 from '../assets/pro25.webp';
import pro26 from '../assets/pro26.jpg';
import pro27 from '../assets/pro27.jpeg';
import pro28 from '../assets/pro28.webp';
import pro29 from '../assets/pro29.jpg';
import pro30 from '../assets/pro30.jpg';
import pro31 from '../assets/pro31.webp';
import pro32 from '../assets/pro32.jpg';
import pro33 from '../assets/pro33.jpg';
import pro34 from '../assets/pro34.webp';
import pro35 from '../assets/pro35.jpg';
import pro36 from '../assets/pro36.jpg';
import pro37 from '../assets/pro37.jpg';
import pro38 from '../assets/pro38.jpeg';
import pro39 from '../assets/pro39.jpg';
import pro40 from '../assets/pro40.webp';



export default function Overview({ addToCart }) {
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
    { id: 10, name: "Alpino 1Kg Oats", description: "Nutritious, fiber-rich oats that promote heart health, digestion, and sustained energy, perfect for a healthy breakfast or snack.", image: pro10, amount: 449 },
    { id: 11, name: "Running Shoes", description: "Lightweight and durable running shoes for everyday fitness and comfort.", image: pro11, amount: 1999 },
    { id: 12, name: "Formal Shoes", description: "Elegant formal shoes perfect for office and business meetings.", image: pro12, amount: 2499 },
    { id: 13, name: "Casual Sneakers", description: "Trendy sneakers designed for everyday wear and style.", image: pro13, amount: 1799 },
    { id: 14, name: "Leather Wallet", description: "Premium leather wallet with multiple compartments for cards and cash.", image: pro14, amount: 999 },
    { id: 15, name: "Sunglasses", description: "Stylish sunglasses with UV protection for outdoor activities.", image: pro15, amount: 1299 },
    { id: 16, name: "Analog Watch", description: "Classic analog wristwatch with a sleek design.", image: pro16, amount: 3499 },
    { id: 17, name: "Digital Watch", description: "Feature-packed digital watch with a modern display.", image: pro17, amount: 2999 },
    { id: 18, name: "Backpack", description: "Spacious and durable backpack for daily use and travel.", image: pro18, amount: 1599 },
    { id: 19, name: "Travel Bag", description: "Compact travel bag designed for convenience and style.", image: pro19, amount: 2199 },
    { id: 20, name: "Perfume", description: "Long-lasting fragrance to keep you refreshed all day.", image: pro20, amount: 1499 },
    { id: 21, name: "Gym Gloves", description: "Comfortable gym gloves to enhance grip and performance.", image: pro21, amount: 499 },
    { id: 22, name: "Yoga Mat", description: "High-quality yoga mat with non-slip surface for exercise.", image: pro22, amount: 799 },
    { id: 23, name: "Dumbbells (Pair)", description: "Adjustable dumbbells for home and gym workouts.", image: pro23, amount: 1999 },
    { id: 24, name: "Smart Band", description: "Fitness smart band to track your daily activity and health.", image: pro24, amount: 2499 },
    { id: 25, name: "Water Bottle", description: "BPA-free, reusable water bottle for hydration on the go.", image: pro25, amount: 699 },
    { id: 26, name: "Earbuds", description: "Wireless earbuds with high-quality sound and noise cancellation.", image: pro26, amount: 3499 },
    { id: 27, name: "Bluetooth Speaker", description: "Portable Bluetooth speaker with deep bass and clear sound.", image: pro27, amount: 2999 },
    { id: 28, name: "Laptop Bag", description: "Protective laptop bag with multiple compartments.", image: pro28, amount: 1999 },
    { id: 29, name: "Hoodie", description: "Comfortable hoodie made with premium fabric for casual wear.", image: pro29, amount: 1599 },
    { id: 30, name: "Jacket", description: "Stylish jacket for a trendy and cozy look.", image: pro30, amount: 2499 },
    { id: 31, name: "Wireless Mouse", description: "Ergonomic wireless mouse with fast response and precision.", image: pro31, amount: 1299 },
    { id: 32, name: "Gaming Headset", description: "Noise-canceling gaming headset with immersive sound.", image: pro32, amount: 3999 },
    { id: 33, name: "Smartphone Tripod", description: "Flexible tripod stand for stable smartphone photography.", image: pro33, amount: 1999 },
    { id: 34, name: "Portable Fan", description: "Rechargeable portable fan with adjustable speed settings.", image: pro34, amount: 999 },
    { id: 35, name: "Car Vacuum Cleaner", description: "Compact and powerful vacuum cleaner for car interiors.", image: pro35, amount: 2499 },
    { id: 36, name: "Laptop Cooling Pad", description: "High-performance cooling pad to prevent laptop overheating.", image: pro36, amount: 1999 },
    { id: 37, name: "Electric Toothbrush", description: "Advanced electric toothbrush with multiple cleaning modes.", image: pro37, amount: 2999 },
    { id: 38, name: "Massage Gun", description: "Deep tissue massage gun for muscle relaxation and recovery.", image: pro38, amount: 5999 },
    { id: 39, name: "VR Headset", description: "Immersive VR headset for gaming and entertainment.", image: pro39, amount: 7999 },
    { id: 40, name: "Drone Camera", description: "High-quality drone camera for capturing stunning aerial shots.", image: pro40, amount: 12999 }
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

  const filterProduct = products.filter((product)=>
    product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
    <ToastContainer />
      <div className='navbar'>
        <h2>Products</h2>
        <div className='input'>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='profile'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="Profile" />
          <h3>Welcome! User</h3>
        </div>
      </div>

      <div className="product">
        {filterProduct.map((product) => (
          <div key={product.id} className="pro">
            <img src={product.image} alt={product.name} />
            <div className="overlay">{product.description}</div>
            <br />
            <div className="btn">
              <button onClick={() => handleAddToCart(product)}>Add</button>
              <h4>{product.name}</h4>
              <h4>Rs {product.amount}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
