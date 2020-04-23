import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Register from './components/Register/Register'
import Profile from './components/Profile'
import Preference from './components/Preferences/Preference'

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/preference" component={Preference} />
        </div>
      </Router>

    );
  }
}

export default App;
