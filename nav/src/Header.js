import React from 'react';
import { useCount } from 'host/store';

function Header() {
  const [count, setCount] = useCount();

  return (
    <div style={{ border: '1px solid black' }}>
      Header
      <div>{count}</div>
      <button onClick={() => setCount(0)}>Clear</button>
    </div>
  );
}

export default Header;
