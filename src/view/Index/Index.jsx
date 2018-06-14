import React, { Component } from 'react';
import Gallery from '../../componet/Gallery/index.jsx';
require('./index.css');


export default class Home extends Component {
  constructor () {
    super();
    this.state = {
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
    )
  }
}