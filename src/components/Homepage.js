import React from 'react';
import Header from './HeaderBar';
import GetUserID from './UserID';
import Footer from './FooterBar';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Header />
      <GetUserID props={this.props}/>
      <Footer/>
    </div>
    )
  }
}



export default HomePage;