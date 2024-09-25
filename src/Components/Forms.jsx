import React from "react";

export const Froms=()=>{

    const[data,setdata]=useState("");
    const[value,setvalue]=useState("");

    function inputchange(e){
        console.log(e.target.value);
        setdata(e.target.value)
        }
    function handleclick(e){
        setvalue(data);
    }
    return(

        <div>
            <h1>FOrm Handling</h1>



        </div>
    )
}