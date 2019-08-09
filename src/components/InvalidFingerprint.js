import React, { Component }  from 'react';
import { AsyncStorage } from 'AsyncStorage';
import Header from './HeaderBar';
import Footer from './FooterBar';


class InvalidFingerprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fingerprints: false,
    };
  }

  async componentDidMount() {
  }


  render(){
    return (
      <div>
          <Header />
          <div class="container">
  
  <div style={{marginTop: '130px' }} className="row">
    <div className="col-sm-6 col-md-offset-3">  
                 <text style={{textAlign: 'center', fontSize: 50, color: 'yellow'}}>fingerprints did not match please try again!.</text>
  </div>
  </div>
  </div>
          <Footer />
      </div>
  
    );
  }
 
}

export default InvalidFingerprint;