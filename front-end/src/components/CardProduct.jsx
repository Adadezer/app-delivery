import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import deliveryContext from '../context/deliveryContext';
import datatest from '../util/datatest';
import { addToCart, removeFromCart, addImputToCart } from '../util/myCart';
import './style/cardProduct.css';

export default function CardProduct({ product }) {
  const [quantity, setQuantity] = useState(0);
  const {
    totalCart,
    setTotalCart,
    myProducts,
    setMyProducts,
  } = useContext(deliveryContext);

  const handleInputValue = (target) => {
    if (quantity < 0) return setQuantity(0);

    setQuantity(Number(target.value));
    setTotalCart(target.value * Number(product.price));

    const beer = {
      id: product.id,
      item: product.name,
      value: product.price,
      quantity: target.value,
    };

    addImputToCart(beer, myProducts, setMyProducts);
  };

  const cartNegative = (beer) => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
      setTotalCart((totalCart - Number(product.price)));
    }

    removeFromCart(beer, myProducts, setMyProducts);
  };

  const cartPositive = (beer) => {
    setQuantity(quantity + 1);
    setTotalCart((totalCart + Number(product.price)));

    addToCart(beer, myProducts, setMyProducts);
  };

  return (
    <div className="cardProduct">
      <div className="cardProduct-img-price">
        <div
          data-testid={ `${datatest[16]}${product.id}` }
          className="carProduct-price"
        >
          {`R$ ${product.price.replace('.', ',')}`}
        </div>
        <div>
          <img
            data-testid={ `${datatest[17]}${product.id}` }
            src={ product.urlImage }
            alt={ product.name }
            width={ 100 }
            className={ `cardProduct-img-${product.id}` }
          />
        </div>
      </div>

      <div className="cardProduct-name-values">
        <div data-testid={ `${datatest[15]}${product.id}` }>
          {product.name}
        </div>
        <div className="cardProduct-input-buttons">
          <button
            type="button"
            data-testid={ `${datatest[19]}${product.id}` }
            onClick={ () => cartNegative({
              id: product.id,
              item: product.name,
              value: product.price,
            }) }
            className="cardProduct-button-minus"
          >
            -
          </button>
          <input
            type="text"
            data-testid={ `${datatest[20]}${product.id}` }
            value={ quantity }
            onChange={ ({ target }) => handleInputValue(target) }
          />
          <button
            type="button"
            data-testid={ `${datatest[18]}${product.id}` }
            onClick={ () => cartPositive({
              id: product.id,
              item: product.name,
              value: product.price,
              quantity: 1,
            }) }
            className="cardProduct-button-plus"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};
