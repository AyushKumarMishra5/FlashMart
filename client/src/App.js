import './App.css';
import Overview from './component/overview/Overview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './component/sidebar/Sidebar';
import Coustomer from './component/coustomer/Coustomer';
import Settings from './component/settings/Settings';
import Cart from './component/cart/cart';
import Report from './component/report/Report';
import Support from './component/support/Support';
import Payment from './component/payment/Payment';

import { useState } from 'react';

import Men from './component/coustomer/men/men';
import Women from './component/coustomer/women/women';
import Shoes from './component/coustomer/shoes/shoes';
import Accessories from './component/coustomer/accessories/accessories';
import Airpods from './component/coustomer/airpods/airpods';
import Apple from './component/coustomer/apple/apple';
import Decoration from './component/coustomer/decoration/decoration';
import Drinks from './component/coustomer/drinks/drinks';
import Hub from './component/coustomer/hub/hub';
import Laptop from './component/coustomer/laptop/laptop';
import Mug from './component/coustomer/mug/mug';
import Nutrition from './component/coustomer/nutrition/nutrition';
import Other from './component/coustomer/other/other';
import Phone from './component/coustomer/phone/phone';
import Serum from './component/coustomer/serum/serum';
import Watches from './component/coustomer/watches/watches';

import Signin from './loginSign/Signin';
import Login from './loginSign/Login';

import Address from './component/settings/address/Address'
import Faq from './component/settings/faq/faq'
import Select from './component/settings/selectAdd/select'

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) =>{
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const handleSubmit = () => {
    setIsAuthenticated(true);
  };

  const handleLogin = () =>{
    setIsAuthenticated(true);
  }

  return (
    <BrowserRouter>
      {!isAuthenticated? (
        <>
        <Routes>
          <Route path='/' element={<Signin onSubmit={handleSubmit} />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          
        </Routes>
        </>

      ) : (
        
          <div className="app-container">
            <Sidebar />
            <div className="content-container">
              <Routes>
                <Route path="/" element={<Overview addToCart={addToCart} />} />
                <Route path="/category" element={<Coustomer />} />
                <Route path="/category/men" element={<Men addToCart={addToCart} />} />
                <Route path="/category/women" element={<Women addToCart={addToCart} />} />
                <Route path="/category/shoes" element={<Shoes addToCart={addToCart} />} />
                <Route path="/category/accessories" element={<Accessories addToCart={addToCart} />} />
                <Route path="/category/airpods" element={<Airpods addToCart={addToCart} />} />
                <Route path="/category/apple" element={<Apple addToCart={addToCart} />} />
                <Route path="/category/decoration" element={<Decoration addToCart={addToCart} />} />
                <Route path="/category/drinks" element={<Drinks addToCart={addToCart} />} />
                <Route path="/category/hub" element={<Hub addToCart={addToCart} />} />
                <Route path="/category/laptop" element={<Laptop addToCart={addToCart} />} />
                <Route path="/category/mug" element={<Mug addToCart={addToCart} />} />
                <Route path="/category/nutrition" element={<Nutrition addToCart={addToCart} />} />
                <Route path="/category/other" element={<Other />} />
                <Route path="/category/phone" element={<Phone addToCart={addToCart} />} />
                <Route path="/category/serum" element={<Serum addToCart={addToCart} />} />
                <Route path="/category/watches" element={<Watches addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                <Route path="/orders" element={<Report cart={cart} />} />
                <Route path="/support" element={<Support />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/payments" element={<Payment cart={cart} setCart={setCart} />} />
                <Route path="/settings/address" element={<Address />} />
                <Route path="/settings/faq" element={<Faq />} />
                <Route path="/settings/select" element={<Select />} />
              </Routes>
            </div>
          </div>
      )}
        </BrowserRouter>
  );
}

export default App;
