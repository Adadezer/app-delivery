addToCart = (beer, myProducts, setMyProducts) => {
  const foundProduct = myProducts.find((el) => el.id === beer.id);

  if (foundProduct) {
    const arrayWithNewProduct = myProducts.map((el) => {
      if (el.id === foundProduct.id) {
        el.quantity += 1;
      }
      return el;
    });

    setMyProducts(arrayWithNewProduct);
  } else {
    setMyProducts((prev) => [...prev, beer]);
  }
};

removeFromCart = (beer, myProducts, setMyProducts) => {
  try {
    const foundProduct = myProducts.find((el) => el.id === beer.id);

    if (foundProduct) {
      const arrayWithNewProduct = myProducts.map((el) => {
        if (el.id === foundProduct.id) {
          if (el.quantity <= 1) {
            return undefined;
          }
          el.quantity -= 1;
        }
        return el;
      });

      setMyProducts([...arrayWithNewProduct.filter((el) => el)]);
    }
  } catch (error) {
    console.error(error);
  }
};

addImputToCart = (beer, myProducts, setMyProducts) => {
  const foundProduct = myProducts.find((el) => el.id === beer.id);

  if (foundProduct) {
    const arrayWithNewProduct = myProducts.map((el) => {
      if (el.id === foundProduct.id) {
        el.quantity = beer.quantity;
      }
      return el;
    });

    setMyProducts(arrayWithNewProduct);
  } else {
    setMyProducts((prev) => [...prev, beer]);
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  addImputToCart,
};
