import React from "react";

const List=()=>{
    const person=[
        {id:1,Name:'Sethu',city:'Chennai'},
        {id:2,Name:'Sethu sabari',city:'panruti'},
        {id:3,Name:'sabari',city:'Madurai'},
        {id:4,Name:'Sethumass',city:'theni'},
        {id:5,Name:'sethunathan',city:'pallavaram'},
        {id:6,Name:'Sethubro',city:'chrompet'},
    ]
    return(

        <div>
            <h1>List Key</h1>
            {
                person.map((items)=>{
                    return <li>{items.id}.{items.id},{items.Name}</li>
                })
            }
        </div>
    )
}
export default List;