import React, { Component } from 'react';
import Toggle from "./Toggle.js"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Landing = () => (
      <div className="landing">
        <header className="App-head./er">
          <Link to="/">
            <h1>TravelSquad</h1>
          </Link>
          <button><Link to="/new">new group</Link></button>
        </header>
        <Toggle/>
      </div>
)

export default Landing;
