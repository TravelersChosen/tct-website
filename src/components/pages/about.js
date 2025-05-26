// pages/about.js

import React from "react";
import { Bots } from "../HelperComponents/Bots";


const About = () => {
  const botNames = ["LB9", "TCT", "GDB"]
  
    return (
    <div className= "About" style={{backgroundColor: '#282c34' }}>
            <header className="App-header">
        <h1>
          About Us
        </h1>
      </header>
      <Bots bots = {botNames}/>
    </div>
    );
};

export default About;