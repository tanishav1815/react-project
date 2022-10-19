import React from "react";
import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = () => {
  

  return (
    
      <>
      <div className="head1">
        The
      </div>
      <div className="head2">
        Siren
      </div>

      <div className="navbar">
        <Link to="/" className="links"><p>Home</p></Link>

        <Link to="/Bollywood"  className="links"><p>Bollywood</p></Link>

        <Link to="/Technology"  className="links"><p>Technology</p></Link>

        <Link to='/Hollywood' className="links"><p>Hollywood</p></Link>

        <Link to="/Fitness"  className="links"><p>Fitness</p></Link>

        <Link to="/Food"  className="links"><p>Food</p></Link>
        
      </div>
      
      <hr />
      <button className="menu" >
      <img src="../../images/menu.png" className="menuimg"/>

      </button>

      </>
    
  )
}


export default Navbar;