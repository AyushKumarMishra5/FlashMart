import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h1><i class="fa-brands fa-xing"></i>
            FlashMart
            </h1>
            <ul className='first'>
                <li>
                <Link to='/'>
                <i class="fa-solid fa-house" style={{color: "#ffffff;"}}></i>
                Home
                </Link>
                </li>

                <li>
                <Link to='/category'>
                <i class="fa-solid fa-layer-group" style={{color: "#ffffff;"}}></i>
                Category
                </Link>
                </li>

                <li>
                <Link to='/cart'>
                <i class="fa-solid fa-cart-shopping" style={{color: "#ffffff;"}}></i>
                Cart
                </Link>
                </li>

                <li>
                <Link to='/orders'>
                <i class="fa-solid fa-box" style={{color: "#ffffff;"}}></i>
                Orders
                </Link>
                </li>
            </ul>
            <ul className='second'>
                <li>
                <Link to='/payments'>
                <i class="fa-brands fa-paypal"></i>
                Payments
                </Link>
                </li>

                <li>
                <Link to='/settings'>
                <i class="fa-solid fa-gear"></i>
                Settings
                </Link>
                </li>

                <li>
                <Link to='/support'>
                <i class="fa-solid fa-phone"></i>
                Support
                </Link>
                </li>
            </ul>
        </div>
    )
}
