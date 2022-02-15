import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from 'nav/Header';

import './index.css';
import useStore from 'host/store';

const App = () => {
  const { count, increment } = useStore();

  return (
    <div className='container'>
      <Header />
      <div>Name: Host</div>
      <div>Count : {count}</div>
      <div>
        <button onClick={increment}>Add to Cart</button>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
