import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import datatest from '../util/datatest';
import './style/cardOrder.css';

export default function CardOrder({ order }) {
  return (
    <div>
      <Link
        to={ `/customer/orders/${order.id}` }
        style={ { textDecoration: 'none', color: 'white' } }
        className="cardOrder"
      >
        <div
          data-testid={ `${datatest[33]}${order.id}` }
          className="cardOrder-order"
        >
          { `Pedido ${order.id} ` }
        </div>
        <div
          data-testid={ `${datatest[34]}${order.id}` }
          className="cardOrder-status"
        >
          { order.status }
        </div>
        <div className="cardOrder-data-price">
          <div
            data-testid={ `${datatest[35]}${order.id}` }
            className="cardOrder-data"
          >
            {moment(order.saleDate).locale('pt-br').format('DD/MM/YYYY') }
          </div>
          <div
            data-testid={ `${datatest[36]}${order.id}` }
            className="cardOrder-price"
          >
            { Number(order.totalPrice).toFixed(2).replace('.', ',') }
          </div>
        </div>
      </Link>
    </div>
  );
}

CardOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};
