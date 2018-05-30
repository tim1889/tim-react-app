import React, { Component } from 'react';
import Menu from '../../componet/Menu/index.jsx';
import Gallery from '../../componet/Gallery/index.jsx';
import Tree from '../../componet/Tree/index.jsx';
require('./index.css');


export default class Home extends Component {
  constructor () {
    super();
    this.state = {
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
      isView: false,
      indexImg: 0,
      imgList: [
        require('./img/test1.jpg'),
        require('./img/test2.jpg'),
        require('./img/test3.jpg'),
        require('./img/test4.jpg'),
        require('./img/test5.jpg')
      ]
    }
  }


  render () {
    const {...state} = this.state;
    return (
      <Menu menu={state.menu}>
        <section>
          <h2>画 廊</h2>
          <Gallery 
            isView={state.isView}
            indexImg={state.indexImg}
            imgList={state.imgList}
          />
          {
            state.imgList.map((item, index) => 
              <div className="tim-card" key={index}>
                <img 
                  src={item} 
                  alt="" 
                  onClick={() =>
                    this.setState({
                      indexImg: index,
                      isView: true
                    })
                  }
                />
              </div>
            )
          }
        </section>

        <section>
          <h2>树形控件</h2>
          <Tree/>
        </section>
      </Menu>
    )
  }
}