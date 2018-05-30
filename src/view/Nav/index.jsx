import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('./index.css');
export default class User extends Component {
  constructor() {
    super();
    this.state = {
      nav: [{
        name: 'Home',
        link: '/home',
      },{
        name: 'User',
        link: '/user',
      }]
    }
  }

  render() {
    return (
      <div className="tim-nav">
        <div className="tim-nav-logo">
          <img 
            // src={require('../../assets/img/agent_logo.png')} 
            alt=""
          />
        </div>
        <nav>
          { 
            this.state.nav.map((item, index) =>
              <Link to={item.link}
                key={index} 
                className="tim-nav-link">
                {item.name}
              </Link>
            )
          }
        </nav>
        <div className="tim-nav-userinfo">
          <img alt=""/>
          <span>yaha</span>
        </div>
      </div>
    );
  }
};
