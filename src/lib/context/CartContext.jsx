"use client";
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
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
      return acc + item.totalPrice;
    }, 0);

    setTotal(total);
  }, [cartItems]);

  const cartSize = cartItems.length;

  const addItemToCart = (variant, quantity, productTitle) => {
    const { title, price, image, color, size } = variant;

    // Check if an item with the same title already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.title === title);

    if (existingItem) {
      // If an item with the same title already exists, update its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.title === title
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
                totalPrice: cartItem.price * (cartItem.quantity + quantity)
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
          variant: {
            title,
            price,
            image,
            color,
            size
          },
          quantity,
          totalPrice: price * quantity
        }
      ]);
    }
  };

  const removeItemFromCart = (title) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.title !== title));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increment = (title) => {
    const productIndex = cartItems.findIndex(
      (item) => item.variant.title === title
    );
    if (productIndex === -1) return;
    const newCart = [...cartItems];
    newCart[productIndex].quantity += 1;
    setCartItems(newCart);
  };

  const decrement = (title) => {
    const productIndex = cartItems.findIndex(
      (item) => item.variant.title === title
    );
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

export const useCart = () => useContext(CartContext);
