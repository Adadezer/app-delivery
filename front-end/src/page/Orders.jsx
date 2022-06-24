import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar';
import CardOrder from '../components/CardOrder';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const myOrders = async () => {
    const result = await axios.get('http://localhost:3001/seller/sales');

    setOrders([...result.data]);
  };

  useEffect(() => {
    myOrders();
  }, []);

  return (
    <>
      <NavBar />
      <div className="order-container">
        {
          orders.map((order, index) => (
            <div key={ index }>
              <CardOrder order={ order } />
            </div>
          ))
        }
      </div>
    </>
  );
}
