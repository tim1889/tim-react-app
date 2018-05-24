import React, { Component } from 'react';
require('./index.css');

export default class Index extends Component {
  constructor () {
    super();
    this.state = {
      data: [{
        name: 'xxx',
        prop: 'aa'
      }, {
        name: 'zzz',
        prop: 'bb'
      }, {
        name: 'ccc',
        prop: 'cc'
      }],

    };
  }

  render () {
    return (
      <table className="tim-table">
        <thead>
          <tr>
            {
              this.state.data.map((item, index) => {
                return <th key={index}>{item.name}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}