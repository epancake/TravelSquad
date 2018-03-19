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
import GroupPage from "./components/NewGroup.js"


const middleware = [logger, thunk]

const store = createStore(
  rootReducer, 
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/new" component={NewGroup}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)


export default App;