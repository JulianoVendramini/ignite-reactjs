import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer } from 'miragejs'

import { GlobalStyle } from './styles/global';

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return[
        {
          id: 1,
          title: 'transaction 1',
          amount: 400,
          type: 'deposti',
          category: 'food',
          createAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
