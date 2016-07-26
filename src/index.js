import 'babel-polyfill';
import 'bootstrap-css';
import './index.scss';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App.js';
//import store from './store/store.js';

render(
    <App />,
  document.getElementById('root')
);
