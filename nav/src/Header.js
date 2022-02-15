import React from 'react';

function Header({ count, onClear }) {
  return (
    <div style={{ border: '1px solid black' }}>
      Header
      <div>{count}</div>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default Header;
