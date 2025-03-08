import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const initialCart = useMemo(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }, []);

  const [quantities, setQuantities] = useState(initialCart.map(() => 1));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (cart.length === 0) {
      setCart(initialCart);
    }
  }, [cart.length, initialCart, setCart]);

  useEffect(() => {
    setQuantities(cart.map(() => 1));
  }, [cart]);

  const increase = (index) => {
    const newQuant = [...quantities];
    newQuant[index] += 1;
    setQuantities(newQuant);
  };

  const decrease = (index) => {
    const newQuant = [...quantities];
    if (newQuant[index] > 1) {
      newQuant[index] -= 1;
      setQuantities(newQuant);
    }
  };

  const totalAmount = () => {
    return cart.reduce(
      (total, item, index) => total + item.amount * quantities[index],
      0
    );
  };

  const handleRemoveCart = (item, index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`${item.name} deleted from cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Please add items to the cart before checking out.");
    } else {
      navigate("/settings/address");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="cart">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} width="50" />
              <div className="info">
                <h3>{item.name}</h3>
                <h5>{item.description}</h5>
                <div className="other">
                  <h5>In stock</h5>
                  <h4>Eligible for free shipping</h4>
                  <label>
                    <input type="checkbox" name="gift" /> Is this item a gift?
                  </label>
                </div>
                <div className="quant">
                  <button onClick={() => decrease(index)}>-</button>
                  <h1>{quantities[index]}</h1>
                  <button onClick={() => increase(index)}>+</button>
                </div>
                <h4>Rs {item.amount * quantities[index]}</h4>
              </div>
              <div className="del">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => handleRemoveCart(item, index)}
                  style={{ color: "#000000" }}
                ></i>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="order">
        <button onClick={() => navigate("/")}>Back to Products</button>
        <button onClick={handleCheckout}>Checkout Rs {totalAmount()}</button>
      </div>
    </>
  );
};

export default Cart;
