/** @jsx jsx */
import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { Flex, Box, Heading, Text, jsx } from "theme-ui";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import SEO from "../components/seo";
import PrimaryLayout from "../components/layout/primary/primary";
import SocialShare from "../components/social-share/social-share";
import CallusBanner from "../components/call-us-banner/call-us-banner";
import { CartContext } from "../provider/cart-provider";
import { LocalCartContext } from "../provider/local-cart-provider";
import useOnClickOutside from "../hooks/useOutsideClick";
import styles from "../components/product-single.style";
import ProductGrid from "../components/product-grid/product-grid";
import ProductForm from "./product-form.js";
import AddGiftstoProductPage from "../components/featured-products/gift-products-productpage";
import AddVasetoProductPage from "../components/featured-products/vase-products-productpage";
// import ReactBnbGallery from "react-bnb-gallery";
// import ImageGallery from "@types/react-image-gallery@1.0.0";
import ImageGallery from "react-image-gallery";
// import "~react-image-gallery/styles/css/image-gallery.css";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const ProductPage: React.FC<any> = ({
  data: { shopifyProduct, shopifyCollection, prismic },
  location: { href },
}) => {
  let product = shopifyProduct;
  product.listView = false;

  const categoryProducts = shopifyCollection?.products || [];
  const {
    title,
    price,
    variants,
    variants: [initialVariant],
    thumbnail,
    prevPrice,
    listView = false,
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
          setAvailable(result[0]?.available);
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
        thumbnail: product?.images[0]?.localFile?.childImageSharp?.fluid,
        quantity: 1,
        price: productVariant.priceV2.amount,
        currency: productVariant.priceV2.currencyCode,
        variantId: productVariant.shopifyId,
        delDate,
      };
      console.log("item   ", item);
      add(item);
    }
  };

  const addClass = ["productCard"];
  if (quantity > 0 && showCounter) {
    addClass.push("active");
  }
  if (!available) {
    addClass.push("disabled");
  }

  // const onChangeHandler = (e) => {
  //   e.preventDefault();
  //   setdelDate({ [e.target.name]: e.target.value });
  // };

  const callUsBannerData = prismic?.allHomeminimals?.edges[0]?.node;
  const getPrice = (price: any) =>
    Intl.NumberFormat(undefined, {
      currency: price.currencyCode,
      minimumFractionDigits: 2,
      style: "currency",
    }).format(parseFloat(price && price.amount ? price.amount : 0));

  let photoArr: Array<object> = [];

  const setPhotoArr = () => {
    product?.images.map((item: any) => {
      let thumbnailArr = item.localFile.childImageSharp.fluid.srcSetWebp.split(
        ","
      );
      photoArr.push({
        original: thumbnailArr[3].split(" ")[0],
        thumbnail: thumbnailArr[0].split(" ")[0],
      });
    });
  };

  setPhotoArr();
  return (
    <PrimaryLayout
      bgColor="#ffffff"
      fluid={true}
      homeLink="/"
      pathPrefix="/collection"
      showNoticeBar={false}
    >
      <Box sx={styles.wrapper}>
        <SEO title={product.title} />
        <Flex sx={styles.product}>
          <Box
            className={product?.images.length > 1 ? "has-items" : ""}
            sx={styles.image}
          >
            <ImageGallery items={photoArr} />
            {/* {console.log(photosArr)} */}
            {/* <ReactBnbGallery show="false" photos={photoArr} /> */}
            {/* {product?.images.map((item: any) => (
              <Img
                key={item?.id}
                fluid={item?.localFile?.childImageSharp?.fluid}
                alt={product?.title}
              />
            ))} */}
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.header}>
              <Heading as="h1">{product.title}</Heading>
              {/* <Flex sx={styles.cartArea}>
                <Text sx={styles.price}>
                  {getPrice(product?.variants[0]?.priceV2)}
                </Text>
                <Box
                  className={quantity > 0 && showCounter ? "isActive" : ""}
                  sx={styles.cart}
                >
                  {!quantity && (
                    <Button
                      className={addClass.join(" ")}
                      onClick={() => handleAddToCart()}
                    >
                      Add to cart
                    </Button>
                  )}
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
              </Flex> */}
            </Box>
            <ProductForm product={product} />
            <Box sx={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
              <AddVasetoProductPage />
            </Box>
            <Box sx={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
              <AddGiftstoProductPage />
            </Box>

            {/* <Text as="p">{product?.description}</Text> */}
            {/* <div
              dangerouslySetInnerHTML={{ __html: product?.description }}
            ></div> */}
            {product?.tags && (
              <Box sx={styles.tagArea}>
                <Text sx={styles.tagTitle}>Tag:</Text>
                <Box>
                  {product?.tags.map((item: string) => (
                    <Box key={item} as="span">
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
            <SocialShare title={product?.title} url={href} />
          </Box>
        </Flex>
        <ProductGrid
          id="relatedProducts"
          gridTitle="Related Products"
          products={categoryProducts}
          withLink={true}
          isCategoryProduct={true}
        />
        {/* <CallusBanner
          scrollTo="#relatedProducts"
          callUsBanner={callUsBannerData?.call_us_banner}
          callUsTitle={callUsBannerData?.call_us_banner_content}
          callUsButtonText={callUsBannerData?.call_us_button_text}
        /> */}
      </Box>
    </PrimaryLayout>
  );
};

export const pageQuery = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      description
      descriptionHtml
      tags
      createdAt
      shopifyId
      options {
        id
        name
        values
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      availableForSale
      variants {
        id
        price
        priceV2 {
          amount
          currencyCode
        }
        shopifyId
        availableForSale
        selectedOptions {
          name
          value
        }
      }
      images {
        id
        originalSrc
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    shopifyCollection(products: { elemMatch: { handle: { eq: $handle } } }) {
      products {
        id
        title
        handle
        createdAt
        shopifyId
        availableForSale
        variants {
          id
          price
          priceV2 {
            amount
            currencyCode
          }
          shopifyId
          availableForSale
        }
        images {
          id
          originalSrc
          localFile {
            childImageSharp {
              fluid(maxWidth: 910, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
    prismic {
      allHomeminimals {
        edges {
          node {
            call_us_banner
            call_us_banner_content
            call_us_button_text
          }
        }
      }
    }
  }
`;

export default ProductPage;
