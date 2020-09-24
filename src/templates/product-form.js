/** @jsx jsx */

import React, { useState, useContext, useEffect, useCallback } from "react";
import { jsx } from "theme-ui";
import find from "lodash/find";
import isEqual from "lodash/isEqual";
import PropTypes from "prop-types";
import { Box, Text, Textarea } from "theme-ui";
import { CartContext } from "../provider/cart-provider";
import { LocalCartContext } from "../provider/local-cart-provider";
import styles from "../components/product-single.style";
// import "date-fns";
// import Grid from "@material-ui/core/Grid";
// // import { withStyles } from "@material-ui/core/styles";
// import MomentUtils from "@date-io/moment";
// import {
//   MuiPickersUtilsProvider,
//   DatePicker,
//   KeyboardDatePicker,
// } from "material-ui-pickers";

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product;
  const [variant, setVariant] = useState({ ...initialVariant });
  const [qtty, setqtty] = useState(1);
  // const [delDate, setdelDate] = useState("");
  const [personalNote, setpersonalNote] = useState("");
  const [delDate, setdelDate] = React.useState();

  const handleDateChange = (date) => {
    setdelDate(date);
  };

  const {
    store: { client, adding },
  } = useContext(CartContext);

  const { products, add, update } = useContext(LocalCartContext);

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant;
  const [available, setAvailable] = useState(productVariant.availableForSale);

  const checkAvailability = useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          (variant) => variant.id === productVariant.shopifyId
        );
        if (result.length > 0) {
          setAvailable(result[0].available);
        }
      });
    },
    [client.product, productVariant.shopifyId, variants]
  );

  useEffect(() => {
    checkAvailability(product.shopifyId);
  }, [productVariant, checkAvailability, product.shopifyId]);

  const handleQuantityChange = ({ target }) => {
    setqtty(target.value);
  };

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target;
    const currentOptions = [...variant.selectedOptions];

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    };

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    );

    setVariant({ ...selectedVariant });
  };

  const handleDeliveryDate = (e) => {
    setdelDate(e.target.value);
  };

  const handlePersonalNote = (e) => {
    setpersonalNote(e.target.value);
  };

  // const handleAddToCart = () => { setpersonalNote
  //   addVariantToCart(productVariant.shopifyId, quantity);
  // };

  const handleAddToCart = () => {
    if (!available) {
      return false;
    }

    const item = {
      title: product.title,
      thumbnail: product?.images[0]?.localFile?.childImageSharp?.fluid,
      quantity: 1,
      price: productVariant.priceV2.amount,
      currency: productVariant.priceV2.currencyCode,
      variantId: productVariant.shopifyId,
      delDate,
      personalNote,
    };
    add(item);
  };

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    });
    if (match === undefined) return true;
    if (match.availableForSale === true) return false;
    return true;
  };

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(variant.price);

  return (
    <Box sx={{ padding: "12px" }}>
      <Box sx={{ marginTop: "5px", marginBottom: "5px" }}>
        <Text sx={styles.price}>{price}</Text>
      </Box>
      <Box sx={{ marginTop: "15px", marginBottom: "15px", display: "block" }}>
        {/* <Text as="p" className="line-item-property__field"> */}
        <label htmlFor="delivery-date">Delivery Date</label>
        <input
          placeholder="Delivery Date"
          required
          className="required"
          id="delivery-date"
          type="text"
          name="properties[Delivery Date]"
          onChange={(e) => handleDeliveryDate(e)}
          sx={{ marginLeft: "94px", padding: "5px", width: "50%" }}
        />
        {/* </Text> */}
      </Box>
      {/* <Box sx={{ marginTop: "15px", marginBottom: "15px" }}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid container>
            <DatePicker
              label="Delivery Date"
              keyboard
              placeholder="MM/DD/YYYY"
              format={"MM/DD/YYYY"}
              // handle clearing outside => pass plain array if you are not controlling value outside
              mask={(value) =>
                value
                  ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                  : []
              }
              value={delDate}
              onChange={(e) => {
                handleDateChange(e, delDate);
              }}
              disableOpenOnEnter
              animateYearScrolling={false}
              autoOk={true}
              clearable
              onInputChange={(e) => {
                handleDateChange(e.target.value);
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Box> */}
      <Box sx={{ marginTop: "15px", marginBottom: "15px", display: "block" }}>
        {options.map(({ id, name, values }, index) => (
          <React.Fragment key={id}>
            <label htmlFor={name}>{name} </label>
            <select
              name={name}
              key={id}
              onChange={(event) => handleOptionChange(index, event)}
              sx={{ marginLeft: "150px", padding: "5px", width: "50%" }}
            >
              {values.map((value) => (
                <option
                  value={value}
                  key={`${name}-${value}`}
                  disabled={checkDisabled(name, value)}
                >
                  {value}
                </option>
              ))}
            </select>
          </React.Fragment>
        ))}
      </Box>
      {/* <Box sx={{ marginTop: "15px", marginBottom: "15px" }}>
        <label htmlFor="quantity">Quantity </label>
        <input
          placeholder="Qty"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          step="1"
          onChange={(e) => handleQuantityChange(e)}
          value={qtty}
          sx={{ marginLeft: "123px", padding: "5px", width: "50%" }}
        />
      </Box> */}
      {/* handlePersonalNote */}
      <Box sx={{ marginTop: "15px", marginBottom: "15px" }}>
        <Box as="p" className="line-item-property__field">
          <label htmlFor="delivery-date">Personal Message</label>
          <Textarea
            required
            placeholder="Type your personal message if any"
            className="required"
            id="personalnote"
            type="text"
            name="properties[personalnote]"
            onChange={(e) => handlePersonalNote(e)}
          />
        </Box>
      </Box>
      <button
        type="submit"
        disabled={!available || adding}
        onClick={handleAddToCart}
        sx={{ backgroundColor: "#fff", width: "100%", padding: "10px" }}
      >
        Add to Cart
      </button>
      {!available && <p>This Product is out of Stock!</p>}
    </Box>
  );
};

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  // addVariantToCart: PropTypes.func,
};

export default ProductForm;
