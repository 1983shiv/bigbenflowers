import React, { useState, useContext, useEffect, useCallback } from "react";
import find from "lodash/find";
import isEqual from "lodash/isEqual";
import PropTypes from "prop-types";
import { Flex, Box, Text, Button, Textarea } from "theme-ui";
import { CartContext } from "../provider/cart-provider";
import { LocalCartContext } from "../provider/local-cart-provider";
import styles from "../components/product-single.style";

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product;
  const [variant, setVariant] = useState({ ...initialVariant });
  const [quantity, setQuantity] = useState(1);
  const [delDate, setdelDate] = useState("");
  const [personalNote, setpersonalNote] = useState("");

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
    setQuantity(target.value);
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
    // console.log(e.target.value);
    setdelDate(e.target.value);
  };

  const handlePersonalNote = (e) => {
    // console.log(e.target.value);
    setpersonalNote(e.target.value);
  };

  // const handleAddToCart = () => { setpersonalNote
  //   addVariantToCart(productVariant.shopifyId, quantity);
  // };

  const handleAddToCart = () => {
    if (!available) {
      return false;
    }

    // price: productVariant.priceV2.amount,
    const item = {
      title: product.title,
      thumbnail: product?.images[0]?.localFile?.childImageSharp?.fluid,
      quantity: 1,
      price: parseInt(4),
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
    <>
      <Box>
        <Text sx={styles.price}>{price}</Text>
      </Box>
      {options.map(({ id, name, values }, index) => (
        <React.Fragment key={id}>
          <Box>
            <label htmlFor={name}>{name} </label>
            <select
              name={name}
              key={id}
              onChange={(event) => handleOptionChange(index, event)}
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
          </Box>
        </React.Fragment>
      ))}
      <Box>
        <label htmlFor="quantity">Quantity </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          step="1"
          onChange={handleQuantityChange}
          value={quantity}
        />
      </Box>
      {/* handlePersonalNote */}
      <Box>
        <Text as="p" className="line-item-property__field">
          <label htmlFor="delivery-date">Delivery Date</label>
          <input
            required
            className="required"
            id="delivery-date"
            type="text"
            name="properties[Delivery Date]"
            onChange={(e) => handleDeliveryDate(e)}
          />
        </Text>
      </Box>
      <Box>
        <Text as="p" className="line-item-property__field">
          <label htmlFor="delivery-date">Personal Message</label>
          <input
            required
            className="required"
            id="personalnote"
            type="text"
            name="properties[personalnote]"
            onChange={(e) => handlePersonalNote(e)}
          />
        </Text>
      </Box>
      <button
        type="submit"
        disabled={!available || adding}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {!available && <p>This Product is out of Stock!</p>}
    </>
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
