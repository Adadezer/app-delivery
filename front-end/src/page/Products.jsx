import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import CardProduct from '../components/CardProduct';
import deliveryContext from '../context/deliveryContext';
import NavBar from '../components/navbar';
import datatest from '../util/datatest';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { totalCart } = useContext(deliveryContext);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const result = await axios.get('http://localhost:3001/customer/products');
      setProducts(result.data);
      return result.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBar />
      <div className="cardsProduct-container">
        {
          products.map((element, index) => (
            <CardProduct product={ element } key={ index } />
          ))
        }
      </div>
      <button
        type="button"
        onClick={ () => navigate('/customer/checkout') }
        data-testid="customer_products__button-cart"
        disabled={ totalCart === 0 }
        className="button-seeCart"
      >
        <div className="aux-icon">
          <h1 className="icon-cart">
            <GiShoppingCart />
          </h1>
          <div className="title-cart">
            Ver Carrinho R$:
            <span data-testid={ datatest[21] }>
              { Number(totalCart).toFixed(2).replace('.', ',') }
            </span>
          </div>
        </div>
      </button>
    </>
  );
}
