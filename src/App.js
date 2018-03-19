import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from 'redux-logger'
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
import './App.css';
import NewGroup from "./components/NewGroup.js"
import About from "./components/About.js"
import Landing from "./components/Landing.js"
import Toggle from "./components/Toggle.js"


const apiUrl = 'https://travelsquadback.herokuapp.com/'

class App extends Component {

  get activeComponent() {
    console.log(this.props)
    switch (this.props.url) {
      case "/":
        return <Landing/>;
      case "/new":
        return <NewGroup/>;
      case "/about":
        return <About/>;
      default:
    }
  }

  render() {
    return (
      <div>
        {this.activeComponent}
      </div>
    )
  }
}

export default App;