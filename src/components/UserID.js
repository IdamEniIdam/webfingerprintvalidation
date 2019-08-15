import React  from 'react';
import { AsyncStorage } from 'AsyncStorage';





class GetUserID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      email: '',
      nameError: '',
      emailError: '',
      prevInputLength: 0,
    };
  }

  async componentDidMount() {

  }

  handleUserIDChange = (e) => {
    var userID = e.target.value;
    console.log(this.state.prevInputLength);
    if (userID.length === 6 && userID.length +1 > this.state.prevInputLength ){
       userID += "-";
    }
    this.setState({userid: userID.toUpperCase(), prevInputLength: userID.length});
  }

  handleNameChange = event => {
    this.setState({ userid: event.target.value }, () => {
      this.validateName();
     
    });
  };



  validateName = () => {
    const { userid } = this.state;
    this.setState({
      nameError:
        userid.length > 10 ? null : 'User ID must be 10 characters'
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.userid){
      AsyncStorage.setItem('UserId', this.state.userid);
      this.props.props.history.push("/converting-userid-to-nin");
      this.setState({ userid: '' })
    }else{
      console.log('userID not saved')
    }
  };


  

  render() {
    return (
      <div className="container">
        <div className="row" className="col-sm-4 col-md-offset-4">
          <text style={{fontSize: '30px',    fontFamily: 'ocr-b.ttf', color: 'green'}}>UserID Validation Service</text>
        </div>

      <div style={{ marginTop: '110px'}} className="row">
        <div style={{borderStyle: 'solid', borderWidth: '0.5px', height: '170px', borderColor: 'grey', borderRadius: '5px', alignItems: 'center' }} className="col-sm-4 col-md-offset-4">

      
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <br />
          <text style={{textAlign: 'center'}}>UserID</text>
          <input
          style={{textAlign: 'center'}} 
            name='name'
            className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
            id='userid'
            maxLength='11'
            placeholder='Enter your user ID'
            value={this.state.userid}
            onChange={this.handleNameChange}
            onBlur={this.validateName}
            onChange={this.handleUserIDChange}  
            required       
             />
          <div className='invalid-feedback'>{this.state.nameError}</div>
        </div>
        <button type='submit' className='btn btn-success btn-block'>
          Submit
        </button>
      </form>

      </div>

</div>



</div>

    );
  }
  }

  export default GetUserID;