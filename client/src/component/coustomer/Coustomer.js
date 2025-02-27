import React from 'react'
import './Coustomer.css'

import var1 from '../assets/var1.avif';
import var2 from '../assets/var2.jpg';
import var3 from '../assets/var3.jpg';
import var4 from '../assets/var4.jpg';
import var5 from '../assets/var5.avif';
import var6 from '../assets/var6.webp';
import var7 from '../assets/var7.webp';
import var8 from '../assets/var8.avif';
import var9 from '../assets/var9.jpg';
import var10 from '../assets/var10.png';
import var11 from '../assets/var11.jpg';
import var12 from '../assets/var12.jpg';
import var13 from '../assets/var13.png';
import var14 from '../assets/var14.jpg';
import var15 from '../assets/var15.avif';
import var16 from '../assets/var16.png';
import { useNavigate } from 'react-router-dom';

export default function Coustomer() {
  const category = [
    {id: 1, name: "Men", image: var1, redirect: "/category/men"},
    {id: 2, name: "Women", image: var2, redirect: "/category/women"},
    {id: 3, name: "Shoes", image: var3, redirect: "/category/shoes"},
    {id: 4, name: "Nutrition", image: var4, redirect: "/category/nutrition"},
    {id: 5, name: "Drinks", image: var5, redirect: "/category/drinks"},
    {id: 6, name: "Coffee Mug", image: var6, redirect: "/category/mug"},
    {id: 7, name: "Watches", image: var7, redirect: "/category/watches"},
    {id: 8, name: "Accessories", image: var8, redirect: "/category/accessories"},
    {id: 9, name: "Laptop", image: var9, redirect: "/category/laptop"},
    {id: 10, name: "Apple", image: var10, redirect: "/category/apple"},
    {id: 11, name: "Phone", image: var11, redirect: "/category/phone"},
    {id: 12, name: "Serum", image: var12, redirect: "/category/serum"},
    {id: 13, name: "Decoration", image: var13, redirect: "/category/decoration"},
    {id: 14, name: "Airpods", image: var14, redirect: "/category/airpods"},
    {id: 15, name: "Shopping Hub", image: var15, redirect: "/category/hub"},
    {id: 16, name: "Other", image: var16, redirect: "/category/other"},
  ]
  const navigate = useNavigate();
  return (
    <>
    <div className="container">
        {
          category.map((variety)=>[
            <div key={variety.id} onClick={()=> navigate(variety.redirect)} className="box">
              <img src={variety.image} alt="" />
              <br />
              <h2>{variety.name}</h2>
            </div>
          ])
        }
    </div>
    </>
  )
}
