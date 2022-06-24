import React from 'react';
import '../App.css';
import rockGlass from '../images/rockGlass.svg';

function Loading() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </div>
  );
}

export default Loading;
