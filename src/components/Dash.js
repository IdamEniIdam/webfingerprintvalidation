import React from 'react';
import { AsyncStorage } from 'AsyncStorage';
import Header from './HeaderBar';
import Footer from './FooterBar';



class Dash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserId: '',
      logged: {},
    };
  }

  async componentDidMount() {
    this.getValueFunction();
    let loggedID = await AsyncStorage.getItem('biometricbank', null);
    this.setupID(loggedID);
    console.log(loggedID)
  }

  setupID = (data) => {
    this.setState({logged: JSON.parse(data)})
  }
  





  getValueFunction = () => {
    AsyncStorage.getItem('UserId').then(value =>
      this.setState({ getUserId: value })
    );
  };
  // <div className="col-sm-6 col-md-offset-3"> 

  render(){
    let logged = this.state.logged
    const url = "https://ws1.ibib.io:7071/"+logged.p+ "/jpg/" + logged.nin + ".jpg"
    return (
      <div>
          <Header />
        <div className="container">
        <div className="col-xs-8">
        <text style={{fontSize: '20px'}}>
        AvailableCredit: {logged.availableCredit} 
        </text>
        </div>
       </div>
          <Footer />
      </div>
  
    );
  }
 
}

export default Dash;