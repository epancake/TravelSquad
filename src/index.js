import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener, push } from 'redux-first-routing';
import reducer from './components/reducer';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
