import React,{Component} from "react";
import "./style.css";
import Clock from '../../components/Clock';
import Contact from '../../components/Contact';
import Message from '../../components/Message';

class Home extends Component {
  state = {
    showContact:false,
    showMessage:false
  }

  handleContact = (event) => {
    event.preventDefault();
    console.log("handle contact triggered")
    this.setState({showContact:!this.state.showContact}); 
  }
  handleMessage = (event) => {
    event.preventDefault();
    this.setState({showMessage:!this.state.showMessage}); 
  }
  
  render(){
  return (
    <div className="home-container">
      <div className="home-header">
        <h4>Hey, Welcome.</h4>
        <p>CB = Christopher Bennett</p>
        <div className="links">
        <p>Find me on these</p>
        <a href="https://github.com/ralphluring">Git Hub</a>
        <a href="https://www.linkedin.com/in/christopher-bennett-5ba181178/">Linkedin</a>
        </div>

        <button className="contact-button button-style" onClick={this.handleContact}>Contact Info</button>
        <button className="message-button button-style" onClick={this.handleMessage}>Message Me</button>
      </div>
      <div className="contact-container">
        {this.state.showContact ? <Contact handleClose={this.handleContact}/> : ""}
        {this.state.showMessage ? <Message /> : ""}
      </div>
      <Clock time={this.props.time}/>
    </div>
  );
  }
}

export default Home;