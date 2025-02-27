import React, {useEffect, useState} from 'react'
import './select.css'

import { useNavigate } from 'react-router-dom'

export default function Select() {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const storedAddress = localStorage.getItem("User Address");
    if (storedAddress) {
      setAddress(JSON.parse(storedAddress));
    }
  }, []);

  const navigate = useNavigate();
  return (
    <div className="orders-container">
      <h2>Your Delivery Address</h2>
      {address ? (
        <div className="card">
          <h3>Shipping Address</h3>
          <p><strong>Name:</strong> {address.username}</p>
          <p><strong>State:</strong> {address.state}</p>
          <p><strong>City:</strong> {address.city}</p>
          <p><strong>Pincode:</strong> {address.pincode}</p>
          <p><strong>Address:</strong> {address.address}</p>
        </div>
      ) : (
        <p>No address found. Please fill the form.</p>
      )}

      <button onClick={()=> navigate('/payments')}>
        Continue
      </button>
    </div>
  )
}
