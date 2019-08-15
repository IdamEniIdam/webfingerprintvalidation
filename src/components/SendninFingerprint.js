import React from 'react';
import { AsyncStorage } from 'AsyncStorage';
import { ClipLoader } from 'react-spinners';

import Header from './HeaderBar';
import Footer from './FooterBar';

class ValidatingninandFingerprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        getUserId: '',
      };

      this.validatingninandfingerprint = this.validatingninandfingerprint.bind(this);
  }

  async componentDidMount() {
    this.validatingninandfingerprint();
  }

  getValueFunction = () => {
    AsyncStorage.getItem('UserId').then(value =>
      this.setState({ getUserId: value })
    );
  };


  validatingninandfingerprint() {
    this.sendingninandfingerprint()
      .then(result => {
        if (!result.error && result.userID) {
          AsyncStorage.setItem(
            "ninandfingerprintbank",
            JSON.stringify(result)
          )
            .then(() => {
              this.props.history.push("/validated-userid");
            });
        }
        else if (result.error) {
          this.props.history.push("/wrongfingerprint")
        }
      })
      .catch(
        (err) => {
          console.log(err)
          this.props.history.push("/error");
        });
  }


  sendingninandfingerprint = async () => {

    let n = await AsyncStorage.getItem("UserId", null);
    let m = await AsyncStorage.getItem("fingerprint", null);
    // let m = '07038335277'
    let url = "https://ws1.ibib.io:7071/prov?n=" + n + "&m=" + m;
    console.log(url)

    return new Promise(async (resolve, reject) => {
      try {
        const provApiCall = await fetch(url,{method:"GET"});
        console.log(provApiCall)
        const provCall = await provApiCall.json();
        console.log(provCall)

        resolve(provCall);
      } catch (err) {
        // AsyncStorage.removeItem("UserId")
        // AsyncStorage.removeItem("phone")
        console.log(err)
        reject(false);
      }

      setTimeout(() => {

        resolve(true);
      }, 200);
    });
  };


  render() {
    return (
      <div>
      <Header />
      <div class="container">
  
  <div style={{ marginTop: '110px', }} className="row">
    <div className="col-sm-4 col-md-offset-4">
       
    <text style={{fontSize: 35, textAlign: 'center'}}>
             <text style={{color: 'green', marginLeft: '50px'}}>{this.state.getUserId}</text>
                </text>
                <br />
                <text style={{ marginLeft: '50px', fontSize: 20}}>
                   Please wait! <br />
                   Generating encryption keys
            </text>
            <div style={{ marginLeft: '130px', marginTop: '20px'}} className='sweet-loading'>
        <ClipLoader
          color={'green'} 
          loading={this.state.loading} 
        />
        </div>
  </div>


  </div>
  </div>
      <Footer/>
    </div>
    )
  }
}



export default ValidatingninandFingerprint;