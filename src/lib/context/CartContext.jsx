"use client";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartItems((prev) => [
      ...prev
      // {
      //   id: faker.string.uuid(),
      //   name: faker.commerce.productName(),
      //   price: faker.commerce.price({ min: 10, max: 40 }),
      //   image: faker.image.urlPicsumPhotos(),
      //   quantity: 1
      // }
    ]);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotal(total);
  }, [cartItems]);

  const cartSize = cartItems.length;

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increment = (id) => {
    const productIndex = cartItems.findIndex((item) => item.id === id);
    if (productIndex === -1) return;
    const newCart = [...cartItems];
    newCart[productIndex].quantity += 1;
    setCartItems(newCart);
  };

  const decrement = (id) => {
    const productIndex = cartItems.findIndex((item) => item.id === id);
    if (productIndex === -1) return;
    const newCart = [...cartItems];
    newCart[productIndex].quantity -= 1;
    setCartItems(newCart);
    if (newCart[productIndex].quantity === 0) {
      newCart.splice(productIndex, 1);
      setCartItems(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartSize,
        total,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        increment,
        decrement
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
