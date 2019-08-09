import React, { Component }  from 'react';
import { AsyncStorage } from 'AsyncStorage';


import Header from './HeaderBar';
import Footer from './FooterBar';

class ValidateduserID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        getUserId: '',
        loading: true,
      };
  }

  async componentDidMount() {
    this.getValueFunction();

  }

  getValueFunction = () => {
    AsyncStorage.getItem('UserId').then(value =>
      this.setState({ getUserId: value })
    );
  };

  render() {
    return (
      <div>
      <Header />
      <div class="container">
  
  <div style={{ marginTop: '170px', }} className="row">
    <div className="col-sm-4 col-md-offset-4">
       
    <text style={{fontSize: 35, textAlign: 'center'}}>
             <text style={{color: 'green', marginLeft: '50px'}}>{this.state.getUserId}</text>
                </text>
                <br />
                <text style={{ marginLeft: '100px', fontSize: 25}}>
                   Validated
            </text>
               
  </div>

  </div>
  </div>
      <Footer/>
    </div>
    )
  }
}



export default ValidateduserID;