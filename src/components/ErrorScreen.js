import React from 'react';
import { AsyncStorage } from 'AsyncStorage';
import Header from './HeaderBar';
import Footer from './FooterBar';


class ErrorScreen extends React.Component {
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
  
  <div style={{marginTop: '170px' }} className="row">
    <div className="col-sm-6 col-md-offset-3">  
                 <text style={{textAlign: 'center', fontSize: 25, color: 'blue'}}>Your submission returned an error. <br />Check your network connection and try again.</text>
  </div>
  </div>
  </div>
          <Footer />
      </div>
  
    );
  }
 
}

export default ErrorScreen;