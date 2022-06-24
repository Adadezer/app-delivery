import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import datatest from '../util/datatest';
import deliveryContext from '../context/deliveryContext';
import './style/navbar.css';

export default function NavBar() {
  const { nameUser } = useContext(deliveryContext);
  const navigate = useNavigate();

  const exitFunction = () => {
    const redirectToLogin = '/login';
    navigate(redirectToLogin);
    localStorage.clear();
  };

  return (
    <nav className="container-nav fixed-top">
      <div className="nav-button-pages">
        <div className="nav-produtos">
          <Link
            to="/customer/products"
            data-testid={ datatest[11] }
            className="nav-link"
            style={ { textDecoration: 'none', color: 'white' } }
          >
            Produtos
          </Link>
        </div>
        <div className="nav-meusPedidos">
          <Link
            to="/customer/orders"
            data-testid={ datatest[12] }
            className="nav-link"
            style={ { textDecoration: 'none', color: 'white' } }
          >
            Meus Pedidos
          </Link>
        </div>
      </div>

      <div
        data-testid={ datatest[13] }
        className="nav-user"
      >
        {nameUser}
      </div>
      <button
        type="button"
        data-testid={ datatest[14] }
        onClick={ () => exitFunction() }
        className="nav-button-logout"
      >
        Sair
      </button>
    </nav>
  );
}
