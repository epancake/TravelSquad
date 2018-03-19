import React, { Component } from 'react';
import NewGroup from "./NewGroup.js"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Landing = () => (
      <div className="App">
        <h2>Landing</h2>
        <header className="App-header">
          <button><Link to='/new'>Create Group</Link></button>
        </header>
        <Route exact path="/new" component={NewGroup}/>
      </div>
)

export default Landing;
