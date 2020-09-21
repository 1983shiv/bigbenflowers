import React, { useState, useEffect, useReducer } from 'react';
import Currency from 'currency.js';
import { getLocalState, setLocalState } from '../helper/local-storage';

export const CART_PRODUCTS = 'cartProducts';
export const TOTAL_PRICE = 'totalPrice';
export const CURRENCY = 'currency';

export interface CartProduct {
  title: string;
  price: number;
  currency: string;
  thumbnail: any;
  variantId: string | number;
  quantity: number;
}

interface LocalCartContextProps {
  products: CartProduct[];
  add: Function;
  update: Function;
  clearCart: Function;
  totalPrice: number;
  currency: string;
}

export const LocalCartContext = React.createContext(
  {} as LocalCartContextProps
);

const getCartProducts = () => {
  const products = getLocalState(CART_PRODUCTS);
  return products ? products : [];
};

const getTotalPrice = () => {
  const price = getLocalState(TOTAL_PRICE);
  return price ? price : 0;
};

const getCurrency = () => {
  const currency = getLocalState(CURRENCY);
  return currency ? currency : 'USD';
};

const calculateTotalPrice = (products: CartProduct[]): number => {
  let total = Currency(0);
  let finalTotal;
  products.forEach((product) => {
    const quantity = product.quantity ? product.quantity : 1;
    const price = product.price ? product.price : '0.0';
    const itemPrice = Currency(quantity).multiply(price);
    total = Currency(total).add(itemPrice);
  });
  finalTotal = Number(total.value);
  return finalTotal;
};

const LocalCartProvider = ({ children }: any) => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currency, setCurrency] = useState('USD');
  React.useEffect(() => {
    setProducts(getCartProducts());
    setTotalPrice(getTotalPrice());
    setCurrency(getCurrency());
  }, []);
  const setPrice = () => {
    const price = calculateTotalPrice(products);
    setLocalState(TOTAL_PRICE, price);
    setTotalPrice(price);
  };

  const setCurrencyData = () => {
    const currency = products && products.length ? products[0].currency : null;
    setLocalState(CURRENCY, currency);
    setCurrency(currency);
  };

  const add = (item: CartProduct) => {
    // TODO: cookie storage
    if (products.length) {
      const index = products.findIndex(
        (product: CartProduct) => product.variantId === item.variantId
      );
      if (index !== -1) {
        // if product already available in the cart
        const product = products[index];
        const quantity = product.quantity ? product.quantity : 0;
        products[index] = { ...product, ...item, quantity: quantity + 1 }; // just increase the quantity
      } else {
        // if this product is not available in the cart
        products.push({ ...item, quantity: 1 });
      }
    } else {
      // if the cart is empty
      products.push({ ...item, quantity: 1 });
    }
    setLocalState(CART_PRODUCTS, products);
    setProducts([...products]); // have to use the shallow copy [...products]
    setPrice();
    setCurrencyData();
  };

  const update = (variantId: string, quantity: number) => {
    const index = products.findIndex(
      (product: CartProduct) => product.variantId === variantId
    );
    if (quantity < 1 && index > -1) {
      // delete if quantity, 0
      products.splice(index, 1);
    } else {
      // update quantity
      const product = products[index];
      products[index] = { ...product, quantity };
    }
    setLocalState(CART_PRODUCTS, products);
    setProducts([...products]);
    setPrice();
  };

  const clearCart = () => {
    setLocalState(CART_PRODUCTS, []);
    setLocalState(TOTAL_PRICE, 0);
    setProducts([]);
    setTotalPrice(0);
  };

  return (
    <LocalCartContext.Provider
      value={{
        products,
        add,
        update,
        totalPrice,
        currency,
        clearCart,
      }}
    >
      {children}
    </LocalCartContext.Provider>
  );
};

export default LocalCartProvider;
