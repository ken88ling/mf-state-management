import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import './index.css';

const App = () => (
  <div className='container'>
    <Header />
    Name: Nav
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
