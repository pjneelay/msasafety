import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/GLOBE_LOCKUP_LOGO-R.png";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="logo">
                <img src={logo}  />
            </div>
            <div className="preset-buttons">
                <Link to="/athletix">
                <button className="btn btn-transparent">Athletix</button>
                </Link>
            </div>
            <div className="preset-buttons">
                <Link to="/athletix">
                <button className="btn btn-white">G-Xtreme</button>
                </Link>
            </div>
      </div>
    );
  };
  
  export default Homepage;