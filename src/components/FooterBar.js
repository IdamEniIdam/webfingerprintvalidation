import React, { Component }  from 'react';


function Footer() {
  return (
    <div>



<footer style={{backgroundColor: 'white'}} className="navbar-fixed-bottom navbar-default">
					<div className="container text-center">
						<div className="row">
                            <img alt='footerimage' style={{width: '100px'}}  src={require('./images/ibibio_poweredBy.png')} /><br />
                            <small> Copyright &copy; {new Date().getFullYear()}</small>
                           
						</div>
					</div>
				</footer>

    </div>

  );
}

export default Footer;