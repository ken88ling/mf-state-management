import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from 'nav/Header';

import './index.css';
import { CountProvider, useCount } from 'host/store';

const App = () => {
  const [count, setCount] = useCount(0);

  return (
    <div className='container'>
      <Header count={count} onClear={() => setCount(0)} />
      <div>Name: Host</div>
      <div>Count : {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Add to Cart</button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById('app')
);
