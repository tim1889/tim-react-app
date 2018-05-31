import React, { Component } from 'react';

export default class CheackBox extends Component {
  render () {
    return (
      <i className="icon-fangxingweixuanzhong"
                  onClick={() => {
                    console.log('~~~~')
                  }}></i>
    )
  }
}