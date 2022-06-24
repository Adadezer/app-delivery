import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import deliveryContext from '../context/deliveryContext';
import NavBar from '../components/navbar';
import datatest from '../util/datatest';
import './style/checkout.css';

export default function Checkout() {
  const {
    totalCart,
    myProducts,
    setMyProducts,
    setTotalCart,
  } = useContext(deliveryContext);
  const [sellers, setSellers] = useState([]);
  const [mySeller, setMySeller] = useState('');
  const [myAdress, setMyAdress] = useState('');
  const [myAdressNumber, setMyAdressNumber] = useState('');
  const navigate = useNavigate();

  const deleteProduct = (prod) => {
    const newArrayOfProducts = myProducts.filter((element) => (element.id !== prod.id));
    if (newArrayOfProducts.length === 0) setTotalCart(0);
    const result = newArrayOfProducts.map((element) => {
      const subTotal = element.quantity * element.value;

      return subTotal;
    });

    const totalCartValue = result.reduce((acc, crr) => acc + crr, 0);

    setTotalCart(totalCartValue);
    setMyProducts(newArrayOfProducts);
  };

  const checkoutOrder = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const myOrder = await axios.post('http://localhost:3001/seller/sales', {
        user,
        mySeller,
        myAdress,
        myAdressNumber,
        totalCart,
        myProducts,
      }, {
        headers: {
          Authorization: user.token,
        },
      });

      const { id } = myOrder.data.createdSale;
      setMyProducts([]);
      setTotalCart(0);

      navigate(`/customer/orders/${id}`);
      return myOrder;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getSellers = async () => {
      const seller = await axios.get('http://localhost:3001/users');
      const mySeler = seller.data.filter((el) => el.role === 'seller');

      setSellers([...mySeler]);
    };

    getSellers();
  }, []);

  return (
    <div className="checkout-container">
      <NavBar />
      <div className="title-finish">Finalizar Pedido</div>
      <table className="checkout-table table table-hover table-borderless">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            myProducts.map((prod, index) => (
              <tr key={ index }>
                <td
                  data-testid={ `${datatest[22]}${Number(index)}` }
                  className="columna-item"
                >
                  { Number(index + 1) }
                </td>
                <td data-testid={ `${datatest[23]}${index}` }>{ prod.item }</td>
                <td data-testid={ `${datatest[24]}${index}` }>{ prod.quantity }</td>
                <td data-testid={ `${datatest[25]}${index}` }>
                  { Number(prod.value).toFixed(2).replace('.', ',') }
                </td>
                <td data-testid={ `${datatest[26]}${index}` }>
                  { Number(prod.value * prod.quantity).toFixed(2).replace('.', ',') }
                </td>
                <td
                  data-testid={ `${datatest[27]}${index}` }
                  className="columna-rmvItem"
                >
                  <button
                    type="button"
                    onClick={ (
                      () => deleteProduct(prod)
                    ) }
                    className="button-remove"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
        <div className="cart-totalValue-text">
          Valor Total: R$
          <div
            data-testid={ datatest[28] }
            className="cart-totalValue-number"
          >
            { Number(totalCart).toFixed(2).replace('.', ',') }
          </div>
        </div>
      </table>
      <div className="title-details">
        Detalhes e Endereço para Entrega
      </div>
      <div className="details-delivery">
        <div className="details-seller">
          <span>P. Vendedora Responsável</span>
          <select
            data-testid={ datatest[29] }
            onChange={ ({ target }) => setMySeller(target.value) }
            className=""
          >
            <option value="vendedor">Selecione um Vendedor</option>
            {
              sellers.map((el, index) => (
                <option
                  key={ index }
                  value={ el.id }
                >
                  { el.name }
                </option>
              ))
            }
          </select>
        </div>
        <div className="details-address">
          <span>Endereço</span>
          <input
            data-testid={ datatest[30] }
            type="text"
            onChange={ ({ target }) => setMyAdress(target.value) }
          />
        </div>
        <div className="details-number">
          <span>Número</span>
          <input
            data-testid={ datatest[31] }
            type="text"
            onChange={ ({ target }) => setMyAdressNumber(target.value) }
          />
        </div>
        <button
          type="button"
          data-testid={ datatest[32] }
          onClick={ () => checkoutOrder() }
          className="button-finish"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}
