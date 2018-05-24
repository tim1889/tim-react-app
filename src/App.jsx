import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Nav from './view/Nav/index.jsx';
import Home from './view/Home/index.jsx';
import User from './view/User/index.jsx';

const Index = () => <div></div>;

export default class App extends Component {
  render() {
    return (
      <Nav>
        <Route path='/' component={Index}/>
        <Route path='/home' component={Home}/>
        <Route path='/user' component={User}/>
      </Nav>
    );
  }
};