import PropTypes from 'prop-types';
import React, { useState } from 'react';
import deliveryContext from './deliveryContext';

export default function Provider({ children }) {
  const [nameUser, setNameUser] = useState('');
  const [totalCart, setTotalCart] = useState(0);
  const [myProducts, setMyProducts] = useState([]);
  const [salesDetails, setDetailsSales] = useState([]);

  const myContext = {
    nameUser,
    setNameUser,
    totalCart,
    setTotalCart,
    myProducts,
    setMyProducts,
    salesDetails,
    setDetailsSales,
  };

  return (
    <deliveryContext.Provider value={ myContext }>
      {children}
    </deliveryContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
