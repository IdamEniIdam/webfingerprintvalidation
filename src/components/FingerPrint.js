import React  from 'react';
import { AsyncStorage } from 'AsyncStorage';
import * as Fingerprint2 from 'fingerprintjs2'
import Header from './HeaderBar';
import Footer from './FooterBar';




// const fpInstance = new Fingerprint2();

class FingerPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fingerprints: false,
      getUserId: '',
      // saveFingerPrint: '',
      // result: null
    };
  }

  async componentDidMount() {
    this.getValueFunction() 
    
    // if (window.requestIdleCallback) {
    //   requestIdleCallback(function () {
    //       Fingerprint2.get(function (components) {
    //         console.log(components) // an array of components: {key: ..., value: ...}
    //       })
    //   })
    // } else {
    //   setTimeout(function () {
    //       Fingerprint2.get(function (components) {
    //         console.log(components) // an array of components: {key: ..., value: ...}
    //       })  
    //   }, 500)
    // }

  }


  // componentWillMount(){

	// 	const stuff = this;

	// 	fpInstance.get((result)=> {

	// 			stuff.setState({fpsignature: result});
	// 	});


  // }
  

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

    var hasConsole = typeof console !== "undefined"

    var fingerprintReport = function () {
      var d1 = new Date()
      Fingerprint2.get(function(components) {
        var murmur = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31)
        var d2 = new Date()
        var time = d2 - d1
        var details = ""
        if(hasConsole) {
          console.log("time", time)
          console.log("fingerprint hash", murmur)
        }

        if(hasConsole){
          AsyncStorage.setItem('fingerprint', murmur);
          console.log('real finger print', murmur)
        }else{
          console.log('fingerPrint not saved')
        }


        for (var index in components) {
          var obj = components[index]
          var line = obj.key + " = " + String(obj.value).substr(0, 100)
          if (hasConsole) {
            console.log(line)
          }
          details += line + "\n"
        }
      })
    }

    var cancelId
    var cancelFunction
    
    // see usage note in the README
    if (window.requestIdleCallback) {
      cancelId = requestIdleCallback(fingerprintReport)
      cancelFunction = cancelIdleCallback
    } else {
      cancelId = setTimeout(fingerprintReport, 500)
      cancelFunction = clearTimeout
    }

      if (cancelId) {
        cancelFunction(cancelId)
        cancelId = undefined
      }
      fingerprintReport();
      this.props.history.push("/validated-userid");

  };

  render(){

    // const {fpsignature} = this.state;

		// if( ! fpsignature ) {
		// 	return (<div> waiting ...  </div>);
		// }
    

    return (
      <div>
          <Header />
          <div className="container">
  
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
        <button type='submit' className='btn btn-success btn-block'>
          Click to Scan Finger Print
        </button>
      </form>
  </div>
  </div>


{/* 
  <div style={{'textAlign':'center'}}>
				<br/>
				<br/>
				<span> Device FingerPrint </span>
				<hr />
				<h1> {fpsignature} </h1>
			</div> */}


  </div>
          <Footer />
      </div>
  
    );
  }
 
}

export default FingerPrint;