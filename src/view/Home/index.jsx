import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Figure from '../../componet/Figure/index.jsx';
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
      <div>
        <section>
          <h2>画 廊</h2>
          <Figure 
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
          <h2></h2>
        </section>
      </div>
    )
  }
}