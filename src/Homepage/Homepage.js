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
                        <Link to="/gxtreme">
                            <div style={{height:'30rem',backgroundColor:'white'}}>
                                <img style={{padding:'37px'}} src={jacket}/>
                            </div>
                            
                            <div>
                                <h2 className="head2" style={{marginLeft:'9rem',marginTop:'-4rem'}}>GX3 COAT</h2>
                            </div>
                        </Link>
                    </div>

                    <div className='menuoption'>
                        <Link to="/">
                            <div style={{height:'30rem',backgroundColor:'white'}}>
                                <img style={{padding:'61px'}} src={pant}/>
                            </div>
                            <div>
                                <h2 className="head3" style={{marginLeft:'9rem',marginTop:'-4rem'}}>GPS PANT</h2>
                            </div>
                        </Link>
                    </div>

                    <div className='menuoption'>
                        <Link to="/athletix">
                          <div style={{height:'30rem',backgroundColor:'white'}}>
                            <img style={{padding:'13px',marginTop:'35px'}} src="https://source360-msa.azurewebsites.net/assets/athletix.png"/>
                          </div>  
                            <div>
                                <h2 className="head1" style={{marginLeft:'9rem',marginTop:'-4rem'}}>ATHLETIX</h2>
                            </div>
                        </Link>
                     </div>
            </div>
      </div>
    );
  };
  
  export default Homepage;