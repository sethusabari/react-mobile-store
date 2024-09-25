import React from "react";
import Anotherchild from "./Anotherchild";


const Child=(props)=>{

    const {Person}=props
    return(
        <>
        <h1>This is child component</h1>
        <Anotherchild Person={Person}/>
        
        </>
    )
}
export default Child;