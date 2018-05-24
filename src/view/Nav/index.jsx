import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'element-react';
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
      }],
      menus: [{
        name: 'leve1',
        icon: 'menu',
        childs: [{
          name: 'leve2',
          link: '',
        }, {
          name: 'leve2',
          link: '',
        }]
      }, {
        name: 'leve1',
        icon: 'share',
        childs: [{
          name: 'leve2',
          link: '',
        }, {
          name: 'leve2',
          link: '',
        }, {
          name: 'leve2',
          link: '',
        }, {
          name: 'leve2',
          link: '',
        }]
      }, {
        name: 'leve1',
        icon: 'setting',
        childs: [{
          name: 'leve2',
          link: '',
        }, {
          name: 'leve2',
          link: '',
        }, {
          name: 'leve2',
          link: '',
        }, {
          name: 'leve2',
          link: '',
        }]
      }]
    }
  }

  render() {
    return (
      <div>
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

        <menu className="tim-nav-menu">
          <Menu 
            theme="dark"
            onOpen={() => console.log('onOpen')} 
            onClose={() => console.log('onClose')}>
            {
              this.state.menus.map((item, index) => 
                <Menu.SubMenu
                  className="tim-menu-level1"
                  index={index.toString()}
                  key={index}
                  title={<span>
                    <i className={"el-icon-" + item.icon}></i>
                    <span>{item.name}</span>
                  </span>}>
                  {
                    item.childs.map((cItem, cIndex) => 
                      <Menu.Item index={index + '-' + cIndex} key={cIndex}>
                        <Link to={cItem.link}>{cItem.name}</Link>
                      </Menu.Item>
                    )
                  }
                </Menu.SubMenu>
              )
            }
          </Menu>
        </menu>
        <div className="tim-scroll-hidden"/>
        
        <div className="tim-app-body">
          {this.props.children}
        </div>
      </div>
    );
  }
};
