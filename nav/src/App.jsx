import React from 'react';
import ReactDOM from 'react-dom';
import { CountProvider } from 'host/store';

import Header from './Header';

import './index.css';

const App = () => (
  <CountProvider>
    <div className='container'>
      <Header />
      Name: Nav
    </div>
  </CountProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
