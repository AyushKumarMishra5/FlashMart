import React, { useState } from "react";
import './Address.css';
import { useNavigate } from 'react-router-dom';

export default function Address() {
  const [formData, setFormData] = useState({
    username: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
  });

  const navigate = useNavigate();

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.username.trim().length < 3) {
      alert("Name must be at least 3 characters long.");
      return false;
    }
    if (!formData.state) {
      alert("Please select a state.");
      return false;
    }
    if (formData.city.trim().length < 3) {
      alert("City must be at least 3 characters long.");
      return false;
    }
    if (!/^\d{6}$/.test(formData.pincode)) {
      alert("Pincode must be a 6-digit number.");
      return false;
    }
    if (formData.address.trim().length < 10) {
      alert("Address must be at least 10 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("User Address", JSON.stringify(formData));
      alert("Address saved successfully!");
      navigate('/settings/select');
    }
  };

  return (
    <>
      <h2>Fill the input fields to get your product delivered to your location</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label>State:</label>
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>

          <label>City:</label>
          <input
            type="text"
            placeholder="Enter your city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label>Pincode:</label>
          <input
            type="text"
            placeholder="Enter pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <label>Address:</label>
          <input
            type="text"
            placeholder="Flat No./House No./Area"
            name="address"
            value={formData.address}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
