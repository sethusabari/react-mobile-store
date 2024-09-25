import React, { createContext, useState } from "react";

export const Usercontext=createContext('')


const First =()=>{
    const[name]=useState('Sethu sabari')
    return(
        <>
        <h1>This First Component</h1>
        <Usercontext.Provider value={name}>
            <Second></Second>
        </Usercontext.Provider>
        </>
    )

}
export default First;