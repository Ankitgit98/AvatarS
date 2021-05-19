import React from "react";
import "./Profile.css";

const Arraylist = (props) => {
  return (
    <>
       
      <div className="avatarstyle  shadow-4-m ma4 bg-light-blue dib pa4 grow shadow-5 tc">
 
 <img  src={`https://joeschmoe.io/api/v1/${props.name}`}  alt="Avatar's" />
 
 <h1 className= "tc "> 
 {props.name} </h1>  
 <p >{props.work}</p>        
</div>

    </>
  );
};

export default Arraylist;
