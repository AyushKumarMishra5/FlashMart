import React, { useEffect, useState } from 'react';
import './Report.css';

export default function Report() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem("orderDetails");
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    }
  }, []);

  if (!orderDetails) {
    return <p className="no-order">No recent orders found.</p>;
  }

  return (
    <div className="report-container">
      <h2>Order Summary</h2>
      <p className="success-message">Order placed successfully! You ordered <strong>{orderDetails.items}</strong> item(s).</p>
      <p><strong>Order ID:</strong> #{orderDetails.orderId}</p>
      <p><strong>Delivery Mode:</strong> {orderDetails.deliveryMode}</p>
      <p><strong>Date:</strong> {orderDetails.date}</p>
      <p><strong>Time:</strong> {orderDetails.time}</p>
    </div>
  );
}
