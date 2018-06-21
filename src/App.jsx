import React, { Component } from 'react';
import { Route } from "react-router-dom";

const Index = () => <div>Hello Tim!!!!~~</div>;

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Index}/>
      </div>
    );
  }
};