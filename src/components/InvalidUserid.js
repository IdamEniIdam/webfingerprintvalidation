import React, { Component }  from 'react';
import { AsyncStorage } from 'AsyncStorage';
import Header from './HeaderBar';
import Footer from './FooterBar';


class Invaliduserid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fingerprints: false,
      getUserId: '',
    };
  }

  async componentDidMount() {
    this.getValueFunction() 
  }



  getValueFunction = () => {
    AsyncStorage.getItem('UserId').then(value =>
      this.setState({ getUserId: value })
    );
  };

  render(){
    return (
      <div>
          <Header />
          <div className="container">
  
  <div style={{marginTop: '130px' }} className="row">
    <div className="col-sm-6 col-md-offset-3">  
                 <text style={{textAlign: 'center', fontSize: 50, color: 'blue'}}>Kindly validate your entry and try again.</text>
  </div>
  </div>
  </div>
          <Footer />
      </div>
  
    );
  }
 
}

export default Invaliduserid;