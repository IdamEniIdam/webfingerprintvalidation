import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import HomePage from './components/Homepage';
import FingerPrint from './components/FingerPrint';
import  ValidateduserID from './components/ValidatedUserID';
import ConvertUserIDtoNIN from './components/ConvertUserIdTonin';
import ErrorScreen from './components/ErrorScreen';
import Invaliduserid from './components/InvalidUserid';
import ValidatingninandFingerprint from './components/SendninFingerprint';
import InvalidFingerprint from './components/InvalidFingerprint';
import Dash from './components/Dash'



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
      <Router>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/fingerprint' component={FingerPrint} />
          <Route exact path='/validated-userid' component={ValidateduserID} />
          <Route exact path='/converting-userid-to-nin' component={ConvertUserIDtoNIN} />
          <Route exact path='/error' component={ErrorScreen} />
          <Route exact path='/invaliduserid' component={Invaliduserid } />
          <Route exact path='/fingerprintvalidation' component={ValidatingninandFingerprint} />
          <Route exact path='/invalidfingerprint' component={InvalidFingerprint } />
          <Route exact path='/dash' component={Dash } />
      </Router>
</div>
    )
  }
}

export default App;
