import React, { createContext, useState, useContext, useMemo } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productId = product.id;
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: product.quantity,
                selectedColor: product.selectedColor,
                selectedSize: product.selectedSize,
              }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const adjustQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) } // Ensure quantity doesn't go below 1
          : item
      );
    });
  };

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const discount = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + (item.sales - item.price) * item.quantity,
        0
      ),
    [cart]
  );

  const delivery = 10;
  const total = subtotal + delivery - discount;

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        adjustQuantity,
        subtotal,
        delivery,
        discount,
        total,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
