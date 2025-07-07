import React, { useEffect, useState, useCallback } from 'react';
import './Report.css';

export default function Report() {
  const [orderDetails, setOrderDetails] = useState(null);
  const [status, setStatus] = useState("Processing...");
  const [timeStamp, setTimeStamp] = useState([]);
  const [isTracking, setIsTracking] = useState(false);

  const startTracking = useCallback(() => {
    if (isTracking) return;
    setIsTracking(true);

    const statuses = [
      { stage: "Processing...", time: 60000 },
      { stage: "Packed", time: 60000 },
      { stage: "Shipped", time: 60000 },
      { stage: "Out for Delivery", time: 60000 },
      { stage: "Delivered", time: 600000 }
    ];

    let accumulatedTime = 0;

    statuses.forEach((statusObj, index) => {
      accumulatedTime += statusObj.time;

      setTimeout(() => {
        setStatus(statusObj.stage);
        const currentTime = new Date().toLocaleTimeString();

        setTimeStamp(prev => {
          const updatedTimeStamp = [...prev, { stage: statusObj.stage, time: currentTime }];
          localStorage.setItem("trackingStatus", JSON.stringify({
            status: statusObj.stage,
            timeStamp: updatedTimeStamp
          }));
          return updatedTimeStamp;
        });

        if (index === statuses.length - 1) {
          setIsTracking(false);
        }
      }, accumulatedTime);
    });
  }, [isTracking]);

  useEffect(() => {
    const storedOrder = localStorage.getItem("orderDetails");
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
      startTracking();
    }
  }, [startTracking]);

  const cancelOrder = () => {
    localStorage.removeItem("orderDetails");
    setOrderDetails(null);
    setStatus("Order Cancelled");
    setTimeStamp([]);
    setIsTracking(false);
  };

  if (!orderDetails) {
    return <p className="no-order">No recent orders found.</p>;
  }

  return (
    <>
      <div className="report-container">
        <h2>Order Summary</h2>
        <p className="success-message">
          Order placed successfully! You ordered <strong>{orderDetails.items}</strong> item(s).
        </p>
        <p><strong>Order IDs:</strong> #{orderDetails.orderId}</p>
        <p><strong>Delivery Mode:</strong> {orderDetails.deliveryMode}</p>
        <p><strong>Date:</strong> {orderDetails.date}</p>
        <p><strong>Time:</strong> {orderDetails.time}</p>
      </div>

      <div className="cancel">
        <button onClick={cancelOrder}>Cancel Order</button>
      </div>

      <div className="track-order">
        <p><strong>Current Status:</strong> {status}</p>

        {timeStamp.length > 0 && (
          <div className="status-log">
            <h3>Status Updates:</h3>
            {timeStamp.map((entry, index) => (
              <div key={index} className="status-entry">
                <span className="status-stage">{entry.stage}</span>
                <span className="status-time">{entry.time}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
