import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Stuff from './pages/Stuff';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';

class App extends Component{
  state = {
    time:new Date()
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

 
  render(){
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} time={this.state.time}/>}/>
            <Route exact path="/stuff" render={(props) => <Stuff {...props} time={this.state.time}/>}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
