import React, { Component } from 'react';
import Toggle from "./Toggle.js"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Landing = () => (
      <div className="landing">
        <header className="landing-header">
          <Link to="/">
            <h1>TravelSquad</h1>
          </Link>
        </header>
        <button><Link to="/new">new group</Link></button>
        <Toggle/>
      </div>
)

export default Landing;
