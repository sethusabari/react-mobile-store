import React from "react";
import {Link, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Mail from "./Mail";

const Navbar =()=>{
    return(
        <>
        <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="product">Product</Link></li>
        </ul>

        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="about"element={<About/>}>
                 <Route path="mail"element={<Mail/>}/>
            </Route>
        </Routes>


        </>
    )
}
export default Navbar;