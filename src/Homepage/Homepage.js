import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/GLOBE_LOCKUP_LOGO-R.png";
import jacket from "../assets/G-Xtreme_Jacket.jpg";
import pant from "../assets/Globe_Pant_System.jpg";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="homepage">
            <div style={{backgroundColor:'black'}}>
                    <div className="logo">
                        <img src={logo}  />
                    </div>
            </div>
            <div className='menu'>
                    <div className='menuoption'>
                        <Link to="/athletix">
                            <img  src="https://source360-msa.azurewebsites.net/assets/athletix.png"/>
                            <div>
                                <h2 style={{marginLeft:'9rem'}}>ATHLETIX</h2>
                            </div>
                        </Link>
                     </div>

                    <div className='menuoption'>
                        <Link to="/">
                            <img  src={jacket}/>
                            <div>
                                <h2 style={{marginLeft:'30rem'}}>GX3 COAT</h2>
                            </div>
                        </Link>
                    </div>

                    <div className='menuoption'>
                        <Link to="/">
                            <img  src={pant}/>
                            <div>
                                <h2 style={{marginLeft:'53rem'}}>GX3 PANT</h2>
                            </div>
                        </Link>
                    </div>
            </div>
      </div>
    );
  };
  
  export default Homepage;