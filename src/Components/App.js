import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import PhotoListContainer from './Photos/PhotoListContainer'
 import QoutesListContainer from './Qoutes/QoutesListContainer'
import './App.css';
import Nav from '../Components/layout/Nav'

class App extends Component {
  // constructor() {
  //   super()
  //   }


  render() {
    return (

      <div className="App">
       <Nav />
       <div className="view-container">
       <Switch>
            <Route exact path='/' component={Home} />
            <Route  path="/photos" component={PhotoListContainer} />
            <Route  path="/qoutes" component={QoutesListContainer} />
          </Switch>
       </div>

      </div>
    );
  }
}

export default App;
