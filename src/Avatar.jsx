import React, { Component } from "react";
import "tachyons";
import Arraylist from "./Arraylist";

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Avatar'S",
    }; 
  }

  titleNameChange() {
    this.setState({
      name: "The New Avatar's",
    });
  }

  render() {
    const avatars = [

      { id: 1, name: "Ankit", work: "Web Devloper" },

      { id: 2, name: "Ankit Gupta", work: "JAVA Developer" },

      { id: 3, name: "Bittu", work: "PHP Developer" },

      { id: 4, name: "Aman", work: "Front-end Devloper" },

      { id: 5, name: "kirtika", work: "Support Engineer" },

      { id: 6, name: "pretty", work: "Manager" },

      { id: 7, name: "Bhawna", work: ".Net Web Developer " },  

      { id: 8, name: "Khushi", work: "Support Engineer" },

      { id: 9, name: "Vinay", work: "Sales/Marketing Executive" },

    ];

    const avatarscard = avatars.map((avatarsc, index) => {
      console.log("working")
      return (
        <Arraylist
          // for  preventing re-rending of array whenever new element add's.
          key ={avatars[index].id}

          id ={avatars[index].id}
          name ={avatars[index].name}
          work ={avatars[index].work}
        />
      );
    });

    return (
      <div className ="bg-light-red  tc">
        <div className =" flex justify-center ">
          <h1 className =" bg-light-green br4 pa3 dt"> {this.state.name}</h1>
        </div>

        {avatarscard}

        <div className ="">
          <button
            className ="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green"
            onClick={() => this.titleNameChange()}
          >
            Changed
          </button>
          
        </div>
      </div>
    );
  }
}

export default Avatar;
