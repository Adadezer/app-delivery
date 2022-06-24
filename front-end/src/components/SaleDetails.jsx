import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoBeer } from 'react-icons/io5';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import datatest from '../util/datatest';
import './style/saleDetails.css';

export default function SaleDetailsById() {
  const [saleDetails, setSalesDetails] = useState([]);
  const [mySales, setMySales] = useState([]);
  const params = useParams();

  const updateStatus = async (status) => {
    const { id } = params;
    try {
      const result = await axios.patch(`http://localhost:3001/seller/sales/${id}`, {
        status,
      });
      console.log('venda atualizada', result);
      const responseDetails = await axios.get(`http://localhost:3001/seller/sales/${id}`);
      setSalesDetails([responseDetails.data]);
      setMySales(responseDetails.data.sales);
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const renderSaleDetails = async () => {
      const { id } = params;
      try {
        const responseDetails = await axios.get(`http://localhost:3001/seller/sales/${id}`);
        setSalesDetails([responseDetails.data]);
        setMySales(responseDetails.data.sales);
        return responseDetails;
      } catch (err) {
        return console.log('Mensagem de erro:', err);
      }
    };
    renderSaleDetails();
  }, [params]);

  console.log('salesDetails', saleDetails);
  if (saleDetails.length === 0) {
    return (<h1>Carregando</h1>);
  }

  return (
    <div className="saleDetails-container">
      <div className="title-saleDetails">Detalhes do Pedido</div>
      <table className="saleDetails-table table table-hover table-borderless">
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
          {mySales.map((item, index) => (
            <tr key={ index }>
              <td data-testid={ `${datatest[58]}${saleDetails[0].id}` }>{index + 1}</td>
              <td data-testid={ `${datatest[59]}${saleDetails[0].id}` }>{item.name}</td>
              <td data-testid={ `${datatest[60]}${saleDetails[0].id}` }>
                {item.SalesProducts.quantity}
              </td>
              <td data-testid={ `${datatest[61]}${saleDetails[0].id}` }>
                {Number(item.price).toFixed(2).replace('.', ',')}
              </td>
              <td data-testid={ `${datatest[62]}${saleDetails[0].id}` }>
                {Number(item.price * item.SalesProducts.quantity)
                  .toFixed(2).replace('.', ',')}

              </td>
            </tr>
          ))}
        </tbody>
        <div
          data-testid={ datatest[63] }
          className="saleDetails-totalValue"
        >
          Total: R$
          {Number(saleDetails[0].totalPrice).toFixed(2).replace('.', ',')}
        </div>
      </table>
      <div className="saleDetails-info">
        <div
          data-testid={ `${datatest[53]}${saleDetails[0].id}` }
          className="saleDetails-info-order"
        >
          Pedido
          {saleDetails[0].id}
        </div>
        <div
          data-testid={ `${datatest[55]}${saleDetails[0].id}` }
          className="saleDetails-info-date"
        >
          {moment(saleDetails[0].saleDate).locale('pt-br').format('DD/MM/YYYY')}
        </div>
        <div
          data-testid={ `${datatest[54]}${saleDetails[0].id}` }
          className="saleDetails-info-status"
        >
          { saleDetails[0].status }
        </div>

        <div className="saleDetails-button-prepare">
          <div>
            <IoBeer />
          </div>
          <button
            type="button"
            data-testid={ datatest[56] }
            disabled={ saleDetails[0].status !== 'Pendente' }
            onClick={ () => updateStatus('Preparando') }
          >
            PREPARAR PEDIDO
          </button>
        </div>

        <div className="saleDetails-button-outDelivery">
          <div>
            <GiFullMotorcycleHelmet />
          </div>
          <button
            disabled={ saleDetails[0].status !== 'Preparando' }
            type="button"
            data-testid={ datatest[57] }
            onClick={ () => updateStatus('Em Trânsito') }
          >
            SAIU PARA ENTREGA
          </button>
        </div>
      </div>
    </div>
  );
}
