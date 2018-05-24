import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import registerServiceWorker from './registerServiceWorker';
import 'element-theme-default';
require('./assets/js/resize.js');
require('./assets/css/icon/iconfont.css');
require('./assets/css/main.css');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);

registerServiceWorker();

