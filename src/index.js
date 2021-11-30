import React from 'react';
import ReactDOM from 'react-dom';

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'
import './assets/css/index.css'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';


import Layout from './components/layout/Layout'
document.title = 'Conghau ♥'

const store = createStore(
  rootReducer
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
