"use client";
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // 1. Get all the variants by the title of the cartItem
    // 2. Update the cartItem with the new variant stock
    // 3. Update the cartItems with the new cartItem
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);

    setTotal(total);
  }, [cartItems]);

  const cartSize = cartItems.length;

  const addItemToCart = (variant, quantity, productTitle) => {
    const { title, price, stock } = variant;

    // Check if an item with the same title already exists in the cart
    const existingItem = cartItems.find(
      (cartItem) => cartItem.variant.title === title
    );
    const newQuantity = existingItem
      ? existingItem.quantity + quantity
      : quantity;

    if (isOutOfStock(newQuantity, stock)) return;

    if (existingItem) {
      // If an item with the same title already exists, update its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.variant.title === title
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
                totalPrice:
                  cartItem.variant.price * (cartItem.quantity + quantity)
              }
            : cartItem
        )
      );
    } else {
      // If the item doesn't exist in the cart, add it to the cartItems array
      setCartItems([
        ...cartItems,
        {
          title: productTitle,
          variant,
          quantity,
          totalPrice: price * quantity
        }
      ]);
    }
  };

  const isOutOfStock = (quantity, stock) => {
    if (quantity > stock) {
      alert(`Sorry, we only have ${stock} items in stock`);
      return true;
    }
    return false;
  };

  const removeItemFromCart = (title) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.variant.title !== title)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increment = (title) => {
    const productIndex = cartItems.findIndex((item) => {
      return item.variant.title === title;
    });

    if (productIndex === -1) return;

    const newQuantity = cartItems[productIndex].quantity + 1;
    const stock = cartItems[productIndex].variant.stock;
    if (isOutOfStock(newQuantity, stock)) return;

    const newCart = [...cartItems];
    newCart[productIndex].quantity += 1;
    newCart[productIndex].totalPrice =
      newCart[productIndex].variant.price * newCart[productIndex].quantity;
    setCartItems(newCart);
  };

  const decrement = (title) => {
    const productIndex = cartItems.findIndex(
      (item) => item.variant.title === title
    );
    if (productIndex === -1) return;
    const newCart = [...cartItems];
    newCart[productIndex].quantity -= 1;
    newCart[productIndex].totalPrice =
      newCart[productIndex].variant.price * newCart[productIndex].quantity;
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

export const useCart = () => useContext(CartContext);
