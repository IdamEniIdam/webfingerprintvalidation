import React, { Component }  from 'react';
import { AsyncStorage } from 'AsyncStorage';
import Header from './HeaderBar';
import Footer from './FooterBar';


class FingerPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fingerprints: false,
      getUserId: '',
      saveFingerPrint: '',
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

  handleNameChange = event => {
    this.setState({ saveFingerPrint: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.saveFingerPrint){
      AsyncStorage.setItem('fingerprint', this.state.saveFingerPrint);
      this.props.history.push("/");
      this.setState({ saveFingerPrint: '' })
    }else{
      console.log('fingerPrint not saved')
    }
  };

  render(){
    return (
      <div>
          <Header />
          <div class="container">
  
  <div style={{ marginTop: '50px' }} className="row">
    <div className="col-sm-4 col-md-offset-4">
  
    <text style={{fontSize: 25, textAlign: 'center', marginLeft: '90px'}}>
             <text style={{color: 'green', textAlign: 'center'}}>{this.state.getUserId}</text>
                </text>
            

                <img style={{borderRadius: '6px', width: '350px'}} src={require('./images/animatedfinerprint.webp')} />
       
                 <text style={{textAlign: 'center', fontSize: 15}}>
                 <br/> 
                Please place your fingerprint over the touch sensor on the fingerprint scanner for proper fingerprint scanning...
                 </text>


        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input
          style={{textAlign: 'center', marginLeft: '80px'}} 
            name='fingerprint'
            id='fingerprint'
            value={this.state.saveFingerPrint}
            onChange={this.handleNameChange}
             />
        </div>
        <button type='submit' className='btn btn-success btn-block'>
          Submit
        </button>
      </form>
  </div>
  </div>
  </div>
          <Footer />
      </div>
  
    );
  }
 
}

export default FingerPrint;