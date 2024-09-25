import React from "react";
import { Link, Outlet} from "react-router-dom";

const About=()=>{
    return(
        <>
        <h1>This is ABout Component</h1>
        <h2>About Navbar</h2>
        <ul>
            <li><Link to="mail">Mail</Link></li>
            <li><Link to="contact">Contact</Link></li>
        </ul>
        <Outlet></Outlet>
        
        </>
    )
}
export default About;