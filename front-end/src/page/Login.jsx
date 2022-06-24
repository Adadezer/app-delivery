import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import deliveryContext from '../context/deliveryContext';
import './style/login.css';
import datatest from '../util/datatest';

export default function Login() {
  const [inpLogin, setInpLogin] = useState('');
  const [pass, setPass] = useState('');
  const [divDisplay, setDivDisplay] = useState('display');
  const { setNameUser } = useContext(deliveryContext);
  const navigate = useNavigate();

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));
    const isLoggedIn = () => {
      if (userLocalStorage) {
        if (userLocalStorage.role === 'customer') {
          return navigate(`/${userLocalStorage.role}/products`);
        }
        navigate(`/${userLocalStorage.role}/orders`);
      } else {
        navigate('/login');
      }
    };

    isLoggedIn();
  }, [navigate]);

  const validLogin = () => {
    const regexEmail = (
      /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    );
    const MIN_NUMBER = 6;
    return !(regexEmail.test(inpLogin) && pass.length >= MIN_NUMBER);
  };

  const loginUser = async (email, password) => {
    try {
      const result = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      const { userRole, userName, userEmail, token } = result.data;
      setNameUser(userName);

      localStorage.user = JSON.stringify({
        role: userRole,
        name: userName,
        email: userEmail,
        token,
      });

      if (userRole === 'seller') {
        return navigate(`/${userRole}/orders`);
      }
      navigate(`/${userRole}/products`);
      return result.data;
    } catch (error) {
      setDivDisplay('noDisplay');
      console.log(error);
    }
  };

  const btnNewRegister = () => {
    const redirectToRegister = '/register';
    navigate(redirectToRegister);
  };

  return (
    <div className="tela-login">
      <form className="form-login">
        <h1>Login</h1>
        <label htmlFor="email" className="form-label">
          Email
          <input
            name="email"
            type="email"
            data-testid={ datatest[1] }
            id="email"
            onChange={ (e) => { setInpLogin(e.target.value); } }
            className="form-control"
          />
        </label>
        <label htmlFor="password" className="form-label">
          Senha
          <input
            name="password"
            type="password"
            data-testid={ datatest[2] }
            id="password"
            onChange={ (e) => { setPass(e.target.value); } }
            className="form-control"
          />
        </label>
        <button
          type="button"
          data-testid={ datatest[3] }
          disabled={ validLogin() }
          onClick={ () => loginUser(inpLogin, pass) }
          className={
            `${validLogin() === true
              ? 'color-buttom-login-disable' : 'color-buttom-login'} `
          }
        >
          Login
        </button>
        <button
          type="button"
          data-testid={ datatest[4] }
          onClick={ () => btnNewRegister() }
          className="notHaveAccount"
        >
          Ainda não tenho conta
        </button>
        <div
          className={ `${divDisplay} elementOcult` }
          data-testid={ datatest[5] }
        >
          Elemento oculto. (Mensagens de erro)
        </div>
      </form>
    </div>
  );
}
