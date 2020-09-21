//@ts-nocheck
import React, { useState, useEffect } from "react";
import Client from "shopify-buy";
import { getLocalState } from "../helper/local-storage";
import { CART_PRODUCTS } from "./local-cart-provider";

export const CartContext = React.createContext();

const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN, // Load from env
  domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`, // Load from env
});

const CartProvider = ({ children }) => {
  let initialStoreState = {
    client,
    updating: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
  };

  const [store, updateStore] = useState(initialStoreState);
  const [initialize, setIntialize] = useState(false);

  useEffect(() => {
    const initializeCheckout = async () => {
      const setCheckoutInState = (checkout) => {
        updateStore((prevState) => {
          return { ...prevState, checkout };
        });
      };
      const createNewCheckout = () => store.client.checkout.create();
      const newCheckout = await createNewCheckout();
      setCheckoutInState(newCheckout);
    };

    initializeCheckout();
  }, [initialize]);

  return (
    <CartContext.Provider
      value={{
        store,
        addToCartAndCheckout: async () => {
          const { checkout, client } = store;
          const checkoutId = checkout.id;
          updateStore((prevState) => {
            return { ...prevState, updating: true };
          });
          const products = getLocalState(CART_PRODUCTS);
          const lineItemsToUpdate = [];

          products.forEach((product) => {
            lineItemsToUpdate.push({
              variantId: product.variantId,
              quantity: product.quantity,
            });
          });
          let windowReference = window.open();

          return client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then((checkout) => {
              windowReference.location = checkout.webUrl;
              setIntialize(Date.now());
              updateStore((prevState) => {
                return {
                  ...prevState,
                  checkout,
                  updating: false,
                };
              });
            });
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
