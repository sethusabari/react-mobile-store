import React, { useState } from "react";

const Sample=()=>{
    const[name,setname]=useState("Sethusabari")
    return(
        <>
        <h1>Use state</h1>
        <p>My name is {name}</p>
        <button onClick={()=>{setname("Sethu")}}Click me></button>
        </>
    )
}
export default Sample;