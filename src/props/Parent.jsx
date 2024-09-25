import React from "react";
import Child from "./Child";


const Parent =()=>{
    const Person ={
        Name:'sethu sabari',
        Age : 23,
        City: 'chennai'}

        return(
            <>
            <h1>This is Parent component</h1>
            <Child Person={Person}/>
            
            </>
        )
}
export default Parent;