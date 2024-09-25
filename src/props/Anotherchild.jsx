import React from "react";
import Nestedchild from "./Nestedchild";


const Anotherchild=(props)=>{

    const {Person}=props
    return(
        <>
        <h1>This is Anotherchild component</h1>

        <Nestedchild Person={Person}/>

        
        </>
    )
}
export default Anotherchild;