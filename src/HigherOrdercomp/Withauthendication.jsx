import React from "react";


const isAuthendication =false;

export default function Withauthendication(component){
    return function(){
        if(!isAuthendication){
            return<div>User not Authendication</div>
        }
    return<component/>
    }
}
