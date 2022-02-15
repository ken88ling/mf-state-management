import React from 'react';
import useStore from 'host/store';

function Header() {
  const { count, clear } = useStore();

  return (
    <div style={{ border: '1px solid black' }}>
      Header
      <div>{count}</div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default Header;
