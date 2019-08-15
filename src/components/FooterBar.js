import React from 'react';
import { Link } from "react-router-dom";



function Footer() {
  return (
    <div>



<footer style={{backgroundColor: 'white'}} className="navbar-fixed-bottom navbar-default">
					<div className="container text-center">
						<div className="row">
                            <img alt='footerimage' style={{width: '100px'}}  src={require('./images/ibibio_poweredBy.png')} /><br />
                            <div className="col-sm-8 col-md-offset-2"><Link to=''>Terms of Use</Link> <Link to=''>Private Policy</Link> <Link to=''>Report a Problem</Link> <Link to=''>Contact Us</Link>  </div><br />
                            <small> Copyright &copy; {new Date().getFullYear()}</small>
                           
						</div>
					</div>
				</footer>

    </div>

  );
}

export default Footer;