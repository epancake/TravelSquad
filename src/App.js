import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from 'redux-logger'
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
import './App.css';
import GroupPage from "./components/GroupPage.js"
import Landing from "./components/Landing.js"
import Toggle from "./components/Toggle.js"


const apiUrl = 'https://travelsquadback.herokuapp.com/'

const middleWare = [logger, thunk]

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare)),
)

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/new" component={GroupPage}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)
  
  // componentDidMount() {
  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(response => {console.log('r', response); return response})
  //     .then(data => {
  //       this.setState({
  //         groups: data.groups,
  //         users: data.users
  //     })})
  //     .then(console.log('s', this.state.groups));  
  // }

export default App;