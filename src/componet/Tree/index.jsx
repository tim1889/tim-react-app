import React, { Component } from 'react';
require('./index.css');

export default class Figure extends Component {
  constructor (props) {
    super();
    this.state = {
      tree: [{
        id: '001',
        name: 'NS',
        children: [{
          id: '011',
          name: '塞尔达',
          children: [{
            id: '111',
            name: '林克'
          }, {
            id: '112',
            name: '米法'
          }, {
            id: '113',
            name: '哥布林'
          }]
        }, {
          id: '012',
          name: '星露谷',
          children: [{
            id: '121',
            name: '塞巴斯'
          }, {
            id: '122',
            name: '潘妮'
          }, {
            id: '123',
            name: '海莉'
          }]
        }]
      },{
        id: '002',
        name: 'PS4',
        children: [{
          id: '022',
          name: '吼吼',
          children: [{
            id: '222',
            name: '呀呀'
          }]
        }]
      },{
        id: '003',
        name: 'steam',
        children: [{
          id: '033',
          name: '吼吼',
          children: [{
            id: '333',
            name: '呀呀'
          }]
        }]
      },{
        id: '004',
        name: 'storm',
        children: [{
          id: '044',
          name: '吼吼',
          children: [{
            id: '444',
            name: '呀呀'
          }]
        }]
      }],
      indexLeve2: null,
      indexLeve3: null,
    };
  }

  render () {
    const {...state} = this.state;
    const indexLevel2 = state.tree[state.indexLeve2];
    const indexLevel3 = indexLevel2 && indexLevel2.children[state.indexLeve3];
    return (
      <div className="tim-tree-box">
        <ul className="time-tree-item">
          {
            state.tree.map((item, index) =>
              <li key={item.id}
                onClick={() => {
                  this.setState({
                    indexLeve2: index
                  })
                }}>
                <i className="icon-fangxingweixuanzhong"
                  onClick={() => {
                    console.log('~~~~')
                  }}></i>
                <span>{item.name}</span>
              </li>
            )
          }
        </ul>
        <ul className="time-tree-item">
          {
            indexLevel2 && indexLevel2.children.map((item, index) =>
              <li key={item.id}
                onClick={() => {
                  this.setState({
                    indexLeve3: index
                  })
                }}>
                <i className="icon-fangxingweixuanzhong"></i>
                <span>{item.name}</span>
              </li>
            )
          }
        </ul>
        <ul className="time-tree-item">
          {
            indexLevel3 && indexLevel3.children.map((item, index) =>
              <li key={item.id}>
                <i className="icon-fangxingweixuanzhong"></i>
                <span>{item.name}</span>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}