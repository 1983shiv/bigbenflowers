/** @jsx jsx */
import React, { Fragment } from "react";
import { Flex, Box, Grid, Heading, Text, jsx, Button } from "theme-ui";
import ProductCard from "../product-card/product-card";
import ProductCardWithLink from "../product-card/with-link";
import styles from "./product-grid.style";

type PropsType = {
  id?: string;
  close?: Function;
  isCategoryProduct?: boolean;
  withLink?: boolean;
  gridTitle?: string;
  products: any;
};

const ProductGrid: React.FC<PropsType> = ({
  id,
  close,
  gridTitle,
  products,
  withLink = true,
  isCategoryProduct = false,
}) => {
  const getPrice = (price: any) =>
    Intl.NumberFormat(undefined, {
      currency: price.currencyCode,
      minimumFractionDigits: 2,
      style: "currency",
    }).format(parseFloat(price && price.amount ? price.amount : 0));
  return (
    <Box id={id} sx={styles.wrapper}>
      <Flex sx={styles.header}>
        {gridTitle && <Heading as="h3">{gridTitle}</Heading>}
        {close && (
          <Button variant="text" onClick={close}>
            Clear
          </Button>
        )}
      </Flex>
      {products ? (
        <Grid sx={styles.productGrid}>
          {products.map((product: any) => {
            const {
              id,
              title,
              handle,
              shopifyId,
              variants,
              availableForSale,
              images: [firstImage],
              variants: [firstVariant],
            } = isCategoryProduct ? product : product.node;
            return (
              <Fragment key={id}>
                {withLink ? (
                  <ProductCardWithLink
                    title={title}
                    path={`/product/${handle}`}
                    shopifyId={shopifyId}
                    availableForSale={availableForSale}
                    price={getPrice(firstVariant?.priceV2)}
                    thumbnail={firstImage?.localFile?.childImageSharp?.fluid}
                    variants={variants}
                  />
                ) : (
                  <ProductCard
                    title={title}
                    shopifyId={shopifyId}
                    availableForSale={availableForSale}
                    price={getPrice(firstVariant?.priceV2)}
                    thumbnail={firstImage?.localFile?.childImageSharp?.fluid}
                    variants={variants}
                  />
                )}
              </Fragment>
            );
          })}
        </Grid>
      ) : (
        <Text>No Products found!</Text>
      )}
    </Box>
  );
};

export default ProductGrid;
