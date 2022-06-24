import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import datatest from '../util/datatest';
import './style/ordered-sellerOrder.css';

export default function Ordered() {
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();
  const renderOrder = async () => {
    const test = await axios.get('http://localhost:3001/seller/sales');
    setSales(test.data);
  };

  useEffect(() => {
    renderOrder();
  }, []);
  const MAGIC_NUMBER_TEN = 10;

  const btnSale = (id) => {
    const redirectToSale = `/seller/orders/${id}`;
    navigate(redirectToSale);
  };

  return (
    <div className="sellerOrder-container">
      {
        sales.map((eachSale) => (
          <button
            type="button"
            key={ eachSale.id }
            onClick={ () => btnSale(eachSale.id) }
            className="sellerOrder-button"
          >
            <div
              data-testid={ `${datatest[48]}${eachSale.id}` }
              className="sellerOrder-order"
            >
              { `Pedido ${eachSale.id}` }
            </div>
            <div className="sellerOrder-status-data-price-address">
              <div className="sellerOrder-status-data-price">
                <div
                  data-testid={ `${datatest[49]}${eachSale.id}` }
                  className="sellerOrder-status"
                >
                  { eachSale.status }
                </div>
                <div className="sellerOrder-data-price">
                  <div
                    data-testid={ `${datatest[50]}${eachSale.id}` }
                    className="sellerOrder-data"
                  >
                    { eachSale.saleDate
                      .replace(/-/g, '/').split('').slice(0, MAGIC_NUMBER_TEN) }
                  </div>
                  <div
                    data-testid={ `${datatest[51]}${eachSale.id}` }
                    className="sellerOrder-price"
                  >
                    { eachSale.totalPrice.replace('.', ',') }
                  </div>
                </div>
              </div>
              <div
                data-testid={ `${datatest[52]}${eachSale.id}` }
                className="sellerOrder-address"
              >
                { eachSale.deliveryAddress }
              </div>
            </div>
          </button>
        ))
      }
    </div>
  );
}
