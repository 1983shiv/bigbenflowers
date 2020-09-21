/** @jsx jsx */
import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Box, Flex, Button, Heading, Text, jsx } from "theme-ui";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { CartContext } from "../../provider/cart-provider";
import { LocalCartContext } from "../../provider/local-cart-provider";
import useOnClickOutside from "../../hooks/useOutsideClick";
import styles from "./product-card.style";

type PropsType = {
  price: any;
  path: string;
  title: string;
  thumbnail: any;
  variants: any;
  shopifyId: string;
  availableForSale: boolean;
};

const ProductCardWithLink: React.FC<PropsType> = (product) => {
  const {
    path,
    title,
    price,
    variants,
    variants: [initialVariant],
    thumbnail,
  } = product;

  const {
    store: { client },
  } = useContext(CartContext);

  const { products, add, update } = useContext(LocalCartContext);
  const counterRef = useRef(null!);
  const [showCounter, setShowCounter] = useState(false);
  useOnClickOutside(counterRef, () => setShowCounter(false));

  const [variant, setVariant] = useState({ ...initialVariant });
  const productVariant = variant;
  const productIndex = products.findIndex(
    (item) => item.variantId === productVariant.shopifyId
  );

  const cartProduct = productIndex > -1 ? products[productIndex] : false;
  const cartProductQuantity = cartProduct ? cartProduct.quantity : 0;
  const [quantity, setQuantity] = useState(0);
  const [available, setAvailable] = useState(productVariant.availableForSale);
  const checkAvailability = useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          (variant) => variant.id === productVariant.shopifyId
        );
        if (result && result.length > 0) {
          setAvailable(result[0].available);
        }
      });
    },
    [client.product, productVariant.shopifyId, variants]
  );

  useEffect(() => {
    setQuantity(cartProductQuantity);
  }, [cartProductQuantity]);

  useEffect(() => {
    checkAvailability(product.shopifyId);
  }, [productVariant, checkAvailability, product.shopifyId]);

  const handleQuantityChange = (quantity: number) => {
    update(productVariant.shopifyId, quantity);
    if (quantity < 1) {
      setShowCounter(false);
    }
  };

  const handleAddToCart = () => {
    if (!available) {
      return false;
    }
    setShowCounter(true);
    if (quantity < 1) {
      const item = {
        title,
        thumbnail,
        quantity: 1,
        price: productVariant.priceV2.amount,
        currency: productVariant.priceV2.currencyCode,
        variantId: productVariant.shopifyId,
      };
      add(item);
    }
  };

  const addClass = ["productCard"];
  if (!available) {
    addClass.push("disabled");
  }

  return (
    <Box sx={styles.wrapper} className={addClass.join(" ")}>
      <Box className="image" sx={styles.imageWrapper}>
        {thumbnail && (
          <Link to={path}>
            <Img fluid={thumbnail} alt={title} />{" "}
          </Link>
        )}
        <Box
          className={quantity > 0 && showCounter ? "isActive" : ""}
          sx={styles.cart}
        >
          <Button
            variant="badge"
            sx={styles.cartBtn}
            className={quantity > 0 ? "active" : ""}
            title="Add to Cart"
            onClick={() => handleAddToCart()}
          >
            {quantity > 0 ? (
              quantity
            ) : (
              <svg width="13" height="12" viewBox="0 0 13 12">
                <path
                  d="M67.213,68.157H65.137l-2.953-3.949a.517.517,0,0,0-.829,0L58.4,68.157H56.326a1.056,1.056,0,0,0-1.056,1.054.987.987,0,0,0,.042.292l1.5,5.3A1.643,1.643,0,0,0,58.392,76h6.756a1.659,1.659,0,0,0,1.587-1.2l1.5-5.305a.509.509,0,0,0,.015-.077l.017-.16a.434.434,0,0,0,0-.05A1.056,1.056,0,0,0,67.213,68.157ZM61.77,65.386l2.072,2.771H59.7Zm0,7.957A1.224,1.224,0,1,1,63,72.118a1.223,1.223,0,0,1-1.227,1.224Z"
                  transform="translate(-55.269 -64)"
                  fill="#5a5a5a"
                />
              </svg>
            )}
          </Button>

          {quantity ? (
            <Box ref={counterRef} sx={styles.cartCounter}>
              <Button
                title="Decrement"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                <IoIosRemove />
              </Button>
              <Box>{quantity}</Box>
              <Button
                title="Increment"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <IoIosAdd />
              </Button>
            </Box>
          ) : null}
        </Box>
      </Box>

      <Link to={path}>
        <Box
          className="content"
          style={{
            alignSelf: "center",
            display: "inline",
            position: "relative",
            textAlign: "center",
          }}
        >
          <Flex sx={styles.meta}>
            <Text as="span" sx={styles.price}>
              {price}
            </Text>
            {!available && (
              <Box as="span" sx={styles.soldOut}>
                Sold Out
              </Box>
            )}
          </Flex>
          <Heading as="h4" sx={styles.title}>
            {title}
          </Heading>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCardWithLink;
