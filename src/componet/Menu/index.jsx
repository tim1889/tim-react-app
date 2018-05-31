import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('./index.css');

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      isActive: ''
    }
  }

  render() {
    const {...state} = this.state;
    return (
      <div>
      fasdfsdaf
        <menu className="tim-nav-menu">
          {
            this.props.menu.map((item, index) => 
              <div key={index}>
                <span 
                  className="level-1"
                  onClick={() => {
                    const i = state.isActive === index ? '' : index;
                    this.setState({ isActive: i });
                  }}>
                  <i className={"icon-" + item.icon}></i>
                  {item.name}
                  <i className={state.isActive === index ? 'icon-xiangxia2' : 'icon-xiangyou1'}></i>
                </span>
                <ul style={{"height": state.isActive === index 
                  ? (1.1 * item.childs.length + 'rem') 
                  : 0}}>
                  {
                    item.childs.map((cItem, cIndex) => 
                      <li key={cIndex}>
                        <Link to={cItem.link}>{cItem.name}</Link>
                      </li>
                    )
                  }
                </ul>
              </div>
            )
          }
        </menu>
        <div className="tim-scroll-hidden"/>
        
        <div className="tim-app-body">
          {this.props.children}
        </div>
      </div>
    );
  }
};