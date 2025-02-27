import React from 'react'
import './Settings.css'

import var1 from '../assets/set1.png'
import var2 from '../assets/set2.jpg'
import { useNavigate } from 'react-router-dom'

export default function Settings() {
  const category = [
    {id: 1, name: "Edit Address", image: var1, redirect: "/settings/address"},
    {id: 2, name: "FAQs", image: var2, redirect: "/settings/faq"},
    {id: 3, name: "Select Address", image: var1, redirect: "/settings/select"},
  ]
  const navigate = useNavigate();
  return (
    <>
    <div className="container">
      {
        category.map((options) =>[
          <div key={options.id} className="box">
            <img src={options.image} onClick={()=> navigate(options.redirect)} alt="" />
            <br />
            <h2>{options.name}</h2>
          </div>
        ])
      }
    </div>
    </>
  )
}
