import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
const layoutRoot = document.getElementById('layout-root');

class Layout extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount () {
    layoutRoot.appendChild(this.el);
  }

  componentWillUnmount () {
    layoutRoot.removeChild(this.el);
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

export default class Figure extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isView: true,
      imgUrl: require('./test3.jpg'),
      imgList: [
        require('./test1.jpg'),
        require('./test2.jpg'),
        require('./test3.jpg'),
        require('./test4.jpg'),
        require('./test5.jpg')
      ]
    };
  }

  render () {
    const { ...state } = this.state;
    return (
      <Layout>
        <div className="tim-layout"  style={{display: state.isView ? 'block' : 'none'}}>
          <header className="tim-figure-header">
            <i className="el-icon-close close-figure"></i>
          </header>
          <div>
            <i className="el-icon-arrow-left"></i>
            <img className="figur-view" src={state.imgUrl}/>
            <i className="el-icon-arrow-right"></i>
          </div>
          <footer className="tim-figure-footer">
            <ul>
              {
                state.imgList.map((item, index) => 
                  <li className="figure-list" key="index">
                    <img src={item}/>
                  </li>  
                )
              }
            </ul>
          </footer>
        </div>
      </Layout>
    );
  }
} 