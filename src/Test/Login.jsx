import React from "react";

function Login(){
    function handleclick(e){
        console.log('submitted')
    }


    return(
        <>
        <h1>Login page</h1>

        <input type="text" placeholder="Enter u r name"></input><br></br>
        <input type="Password" placeholder="Enter u r password"></input><br></br>
        <button onClick={handleclick}>CLick me</button>
        </>
    )

}
export default Login;