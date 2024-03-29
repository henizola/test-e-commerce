import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [filterString, setFilterString] = useState("");
  const removeFromCart = (product) => {
    let index = cart.findIndex((cartItem) => cartItem.name === product.name);
    let temp = [...cart];
    temp.splice(index, 1);
    setCart([...temp]);
  };

  const getTotalPrice = () => {
    let tot = 0;

    cart.map((prod) => {
      return (tot += prod.price * prod.quantity);
    });

    return tot.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    });
  };

  const getTotalPriceTaxed = () => {
    let tot = 50;

    cart.map((prod) => {
      return (tot += prod.price * prod.quantity);
    });

    return tot.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    });
  };

  const increaseQuantity = (product) => {
    let index = cart.findIndex((cartItem) => cartItem.name === product.name);
    let temp = [...cart];
    temp[index].quantity += 1;
    setCart([...temp]);
  };

  const decreaseQuantity = (product) => {
    let index = cart.findIndex((cartItem) => cartItem.name === product.name);
    let temp = [...cart];
    if (temp[index].quantity === 1) {
      removeFromCart(product);
    } else {
      temp[index].quantity -= 1;
      setCart([...temp]);
    }
  };

  const filterProducts = (e) => {
    setFilterString(e);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        removeFromCart: removeFromCart,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
        getTotalPrice: getTotalPrice,
        filterProducts: filterProducts,
        filterString: filterString,
        getTotalPriceTaxed: getTotalPriceTaxed,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
