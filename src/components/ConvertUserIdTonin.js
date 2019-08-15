import React from 'react';
import { AsyncStorage } from 'AsyncStorage';
import { ClipLoader } from 'react-spinners';
import * as FileSystem from 'fs';

import Header from './HeaderBar';
import Footer from './FooterBar';

class ConvertUserIDtoNIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        getUserId: '',
      };

      this.ConvertingUseridtonin = this.ConvertingUseridtonin.bind(this);
  }

  async componentDidMount() {
    this.ConvertingUseridtonin();
  }

  getValueFunction = () => {
    AsyncStorage.getItem('UserId').then(value =>
      this.setState({ getUserId: value })
    );
  };


  ConvertingUseridtonin() {
    this.generateUserIDtoNIN()
      .then(response => {
        if (!response.error) {
          AsyncStorage.setItem(
            "biometricbank",
            JSON.stringify(response)
          )
          // this.connectNIMC().then(() => {
          //   let url = "https://ws1.ibib.io:7071/" + response.p + "/png/" + response.nin + ".png"
          //   console.log(url)
          //   FileSystem.downloadAsync(
          //     url,
          //     FileSystem.documentDirectory + 'nimc.png'
          //   ).then(({ uri }) => {
          //     this.to64(uri)
          //   })
          // })
            .then(() => {
              this.props.history.push("/fingerprint");
            });
        }
        else if (response.error) {
          this.props.history.push("/invaliduserid");
        }
      })
      .catch(
        (err) => {
          
          this.props.history.push("/error");
          console.log(err)
        });
  }


  generateUserIDtoNIN = async () => {

    let u = await AsyncStorage.getItem("UserId", null);

    // let n = '12345678910'
    // let m = await AsyncStorage.getItem("phone", null);
    // let m = '07038335277'
    // let u = 'FHLYU1-3304'
    // let url = "https://ws1.ibib.io:7071/vh?u=" + u;
    let url =  "https://ws1.ibib.io:7071/creditInfo?u=" + u;
    // let url = "https://ws1.ibib.io:7071/prov?n=" + n + "&m=" + m;
    // alert( url)

    return new Promise(async (resolve, reject) => {
      try {
        const provApiCall = await fetch(url);
        console.log(provApiCall)
        const provCall = await provApiCall.json();
        // alert(provCall)
        resolve(provCall); 
         
      } catch (err) {
        // AsyncStorage.removeItem("UserId")
        // AsyncStorage.removeItem("phone")
        console.log(err)
        reject(false);
      }

    });
  };

  to64 = async (url) => {
    console.log(url)

    const file = await FileSystem.readAsStringAsync(
      url,
      {
        encoding: FileSystem.EncodingType.Base64
      });

    AsyncStorage.setItem("imagePath", file)
  }



  connectNIMC = () => {
    return new Promise(resolve => {
      setTimeout(() => {
     
        resolve(true);
      }, 500);
    });
  };


  render() {
    return (
      <div>
      <Header />
      <div className="container">
  
  <div style={{ marginTop: '170px', }} className="row">
    <div className="col-sm-4 col-md-offset-4">
       
    <text style={{fontSize: 35, textAlign: 'center'}}>
             <text style={{color: 'green', marginLeft: '50px'}}>{this.state.getUserId}</text>
                </text>
                <br />
                <text style={{ marginLeft: '50px', fontSize: 20}}>
                   Converting UserId to NiN
            </text>
            <div style={{ marginLeft: '150px', marginTop: '20px'}} className='sweet-loading'>
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



export default ConvertUserIDtoNIN;