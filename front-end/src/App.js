import React from 'react';
import Routs from './router/Routs';
import Provider from './context/deliveryProvider';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Routs />
    </Provider>
  );
}

export default App;
