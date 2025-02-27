import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

export default function Payment({ cart, setCart }) {
  const [selectedDelivery, setSelectedDelivery] = useState("standard");
  const navigate = useNavigate();

  // Load cart data from localStorage when the page loads
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    } else {
      setCart([]); // Ensure empty cart if no data exists
    }
  }, [setCart]);

  const handleOrder = () => {
    console.log("Cart data before order:", cart);

    if (!cart || cart.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    const orderId = Math.floor(100000 + Math.random() * 900000);
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    localStorage.setItem("orderDetails", JSON.stringify({
      orderId,
      items: cart.length,
      paymentMethod: "Cash on Delivery (COD)",
      deliveryMode: selectedDelivery === "airshipping" ? "Fastest Delivery (Airshipping) Rs600/-" : "Standard Delivery Rs40/-",
      date: currentDate,
      time: currentTime
    }));

    localStorage.removeItem("cart"); // Clear cart after order
    setCart([]); // Update state

    navigate('/orders');
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <label className="option active">
          <input type="radio" name="payment" value="cod" checked readOnly />
          <span>Cash on Delivery (COD)</span>
        </label>

        <label className="option disabled">
          <input type="radio" name="payment" value="credit-card" disabled />
          <span>Credit Card</span>
        </label>

        <label className="option disabled">
          <input type="radio" name="payment" value="debit-card" disabled />
          <span>Debit Card</span>
        </label>

        <label className="option disabled">
          <input type="radio" name="payment" value="upi" disabled />
          <span>UPI (Google Pay, PhonePe)</span>
        </label>

        <label className="option disabled">
          <input type="radio" name="payment" value="net-banking" disabled />
          <span>Net Banking</span>
        </label>
      </div>

      <h2>Select Delivery Mode</h2>
      <div className="delivery-options">
        <label className={`option ${selectedDelivery === "standard" ? "active" : ""}`}>
          <input type="radio" name="delivery" value="standard" checked={selectedDelivery === "standard"} onChange={() => setSelectedDelivery("standard")} />
          <span>Standard Delivery Rs40/-</span>
        </label>

        <label className={`option ${selectedDelivery === "airshipping" ? "active" : ""}`}>
          <input type="radio" name="delivery" value="airshipping" checked={selectedDelivery === "airshipping"} onChange={() => setSelectedDelivery("airshipping")} />
          <span>Fastest Delivery (Airshipping) Rs600/-</span>
        </label>
      </div>

      <button className="pay-button" onClick={handleOrder}>
        Proceed with COD
      </button>
    </div>
  );
}
