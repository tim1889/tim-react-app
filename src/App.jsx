import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Index from './view/Index/index.jsx';


export default class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Index}/>
      </div>
    );
  }
};  