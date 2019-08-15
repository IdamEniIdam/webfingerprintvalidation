import React from 'react';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
    <nav style={{backgroundColor: '#80ff80'}} className="navbar navbar-default">
<div className="container-fluid">
<div className="navbar-header">
  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>                        
  </button>
  <Link className="navbar-brand" to="/"> <img alt='hearderimage' style={{width: '150px', float: 'left'}}  src={require('./images/proximity-logo.png')} /></Link>
</div>
<div className="collapse navbar-collapse" id="myNavbar">
  <ul style={{marginTop: '30px', justifyContent: 'center'}} className="nav navbar-nav">
    <li className="active"><Link to="/">Home</Link></li>
    <li><Link to="#">About</Link></li>
    <li><Link to="dash">Contact</Link></li>
  </ul>
  <ul className="nav navbar-nav navbar-right">
    <li><Link to="/"><span ></span><img alt='headerbarimage' style={{width: '150px', float: 'right', marginTop: '-10px'}}  src={require('./images/NIMC_logo_trans.png')} /></Link></li>
  </ul>
</div>
</div>
</nav>

</div>

  );
}

export default Header;