import React from 'react'
import { Link} from "react-router-dom";
import kertas from "../assets/pmdgn.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${kertas})`}}>
      <div className="headerContainer" >

        <h2> Hello! My name is </h2>
        <h1>Nurani Syahidah</h1>
        <p>Welcome to my website!</p>
        
        <Link to="About">
        <button>About Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Home