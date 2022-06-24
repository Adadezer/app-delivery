import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { BsCheck2Square } from 'react-icons/bs';
import NavBar from '../components/navbar';
import datatest from '../util/datatest';
import './style/orderDetails.css';

export default function OrdersDetails() {
  const params = useParams();
  // console.log('params: ', params);
  const [myOrderDetails, setMyOrderDetails] = useState({});
  const [mySalesDetails, setMySalesDetails] = useState([]);
  const [mySeller, setMySeller] = useState('');

  useEffect(() => {
    const orderDetails = async () => {
      const { id } = params;

      const salesById = await axios.get(`http://localhost:3001/seller/sales/${id}`);
      const idSeller = salesById.data.sellerId;
      const sellerById = await axios.get(`http://localhost:3001/users/${idSeller}`);
      // console.log('sellerID: ', sellerById.data);
      // console.log('sales getById', salesById.data);
      setMySeller(sellerById.data.name);
      setMyOrderDetails(salesById.data);
      const { sales } = salesById.data;
      setMySalesDetails(sales);
    };

    orderDetails();
  }, [params]);

  return (
    <div className="orderDetails-container">
      <NavBar />
      <div className="title-orderDetails">Detalhes do Pedido</div>
      <table className="orderDetails-table table table-hover table-borderless">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {mySalesDetails.map((el, index) => (
            <tr key={ index }>
              <td data-testid={ datatest[41] }>{index + 1}</td>
              <td data-testid={ datatest[42] }>{el.name}</td>
              <td data-testid={ datatest[43] }>{Number(el.SalesProducts.quantity)}</td>
              <td data-testid={ datatest[44] }>
                {Number(el.price).toFixed(2).replace('.', ',')}
              </td>
              <td data-testid={ datatest[45] }>
                {Number(el.price * el.SalesProducts.quantity)
                  .toFixed(2).replace('.', ',')}
              </td>
            </tr>
          ))}
        </tbody>
        <div
          data-testid={ datatest[46] }
          className="orderDetails-totalValue"
        >
          Total: R$
          { Number(myOrderDetails.totalPrice).toFixed(2).replace('.', ',') }
        </div>
      </table>
      <div className="orderDetails-info">
        <div
          data-testid={ datatest[37] }
          className="orderDetails-info-order"
        >
          {`Pedido ${myOrderDetails.id}`}
        </div>
        <div
          data-testid={ datatest[38] }
          className="orderDetails-info-seller"
        >
          {mySeller}
        </div>
        <div
          data-testid={ datatest[39] }
          className="orderDetails-info-date"
        >
          {moment(myOrderDetails.saleDate).locale('pt-br').format('DD/MM/YYYY') }
        </div>
        <div
          data-testid={ datatest[40] }
          className="orderDetails-info-status"
        >
          {myOrderDetails.status}
        </div>
        <div className="orderDetails-info-button">
          <div>
            <BsCheck2Square />
          </div>
          <button
            data-testid={ datatest[47] }
            type="button"
            disabled
          >
            Marcar como entregue
          </button>
        </div>
      </div>
    </div>
  );
}
