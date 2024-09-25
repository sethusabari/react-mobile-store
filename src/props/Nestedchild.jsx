import React from "react";


const Nestedchild =(props)=>{

    const {Name,Age,City}=props.Person
    return(
        <>
        <h1>This is Nestedchild component</h1>
        <li>{'Name is  '  +  Name}</li>
        <li>{'Age is  '  +   Age}</li>
        <li>{'City is  '  +  City}</li>
        
        </>
    )
}
export default Nestedchild;