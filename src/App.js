import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import NewGroup from "./components/NewGroup.js"
import About from "./components/About.js"
import Landing from "./components/Landing.js"
import GroupPage from "./components/NewGroup.js"

class App extends Component {
  componentDidMount() {

  }

 render() {
   return (
       <Router>
         <div className="App">
           <Switch>
             <Route exact path="/" component={Landing}/>
             <Route path="/new" component={NewGroup}/>
           </Switch>
         </div>
       </Router>
   )
 }
}

export default App;
