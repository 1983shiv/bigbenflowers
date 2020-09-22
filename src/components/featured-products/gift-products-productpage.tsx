import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProductGrid from "../product-grid/product-grid";

const giftStaticQuery = graphql`
  query {
    allShopifyProduct(filter: { tags: { eq: "Gifts" } }, limit: 10) {
      edges {
        node {
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
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

const AddGiftstoProductPage: React.FC<{ withLink?: boolean }> = ({
  withLink = false,
}) => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${giftStaticQuery}`}
    render={({ allShopifyProduct }) => {
      const products = allShopifyProduct?.edges;
      console.log("products---------", products);
      return (
        <ProductGrid
          id="feature"
          withLink={withLink}
          gridTitle="Add Gits"
          products={products}
        />
      );
    }}
  />
);

export default AddGiftstoProductPage;
