import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('./index.css');

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [{
        name: 'Home',
        link: '/home',
      },{
        name: 'User',
        link: '/user',
      }],
      menu: [{
        name: '基础',
        icon: 'shenfen',
        childs: []
      }, {
        name: '数据',
        icon: 'bangzhuzhongxin',
        childs: [{
          name: '树形结构',
          link: '/tree',
        }, {
          name: '分页',
          link: '/tree',
        }]
      }, {
        name: '模态',
        icon: 'zuobiao',
        childs: [{
          name: '画廊',
          link: '/gallery',
        }]
      }],
      showMenu: true,
      isActive: '',
    }
  }

  render() {
    const {...state} = this.state;
    return (
      <div>
        <div className="tim-nav">
          <div className="tim-nav-logo"
            onClick={() =>{}}>
            <img 
              src={require('../../assets/img/logo.png')} 
              alt="tim js"
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
        <menu className={state.showMenu ? 'tim-nav-menu' : 'tim-nav-menu-hidden'}>
          {
            state.menu.map((item, index) => 
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
