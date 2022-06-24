import React from 'react';
import NavBar from '../components/navbar';
import Ordered from '../components/Ordered';
import '../components/style/ordered-sellerOrder.css';

export default function Orders() {
  return (
    <>
      <NavBar />
      <h1 className="h1-seller">Meus Pedidos</h1>
      <Ordered />
    </>
  );
}
