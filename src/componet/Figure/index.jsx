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
      indexImg: 0,
      imgList: [
        require('./img/test1.jpg'),
        require('./img/test2.jpg'),
        require('./img/test3.jpg'),
        require('./img/test4.jpg'),
        require('./img/test5.jpg')
      ]
    };
  }

  render () {
    const { ...state } = this.state;
    const indexImg = this.state.imgList[this.state.indexImg];
    return (
      <Layout>
        <div className="tim-layout" style={{top: state.isView ? '0' : '100%'}}>
          <header className="tim-figure-header">
          <i className="icon-dibu"></i>
          <i className="icon-guanbi1"
            onClick={() => {
              this.setState({
                isView: false
              });
            }}>
          </i>
          </header>
          <div>
            <i className="icon-xiangzuo1"
              onClick={() => {
                if (state.indexImg === 0) { return; }
                const i = state.indexImg - 1;
                this.setState({
                  indexImg: i
                })
              }}>
            </i>
            <img className="figur-view" src={indexImg} alt={state.imgUrl}/>
            <i className="icon-xiangyou1"
              onClick={() => {
                if (state.indexImg === (state.imgList.length - 1)) { return; }
                const i = state.indexImg + 1;
                this.setState({
                  indexImg: i
                })
              }}>
            </i>
          </div>
          <footer className="tim-figure-footer">
            <ul>
              {
                state.imgList.map((item, index) => 
                  <li className="figure-list" 
                    key={index}
                    onClick={() => {
                      this.setState({
                        indexImg: index
                      })
                    }}>
                    <img src={item} alt={item}/>
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