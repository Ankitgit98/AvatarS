import React,{Component} from "react";
import "tachyons";
import ReactDOM from "react-dom";

import Arraylist from "./Arraylist";



export default class Avatar extends Component{ 
    
    
    
    render(){
      const avatars = [

        { id: 1, name: "Ankit", work: "Web Devloper" },
    
        { id: 2, name: "Ankit Gupta", work: "JAVA Developer" },
    
        { id: 3, name: "Bittu", work: "PHP Developer" },
    
        { id: 4, name: "Aman", work: "Front-end Devloper" },
    
        { id: 5, name: "kirtika", work: "Support Engineer" },
    
        { id: 6, name: "Gyatri", work: "JAVA-lite Developer" },
    
        { id: 7, name: "Bhawna", work: ".Net Web Developer " },
    
        { id: 8, name: "Khushi", work: "Support Engineer" },
    
        { id: 9, name: "Vinay", work: "Sales/Marketing Executive" },
      ];
    
      const avatarscard = avatars.map((avatarsc, index) => {

        return <Arraylist
              // for  preventing re-rending of array whenever new element add's.
              //  key={avatars[index].id}
      
              id={avatars[index].id}
              name={avatars[index].name}
              work={avatars[index].work}
            />            
      })
     
return (
  
  
 <div className="bg-light-red dib  " >
 
 <div className=" flex justify-center ">
      <h1 className=" bg-light-green br4-l pa4 dt">Avatar'S</h1>     

</div>
         {avatarscard}       
                 
 </div>
 
        
      );

    
}}