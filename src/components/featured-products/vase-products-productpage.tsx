import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProductGrid from "../product-grid/product-grid";

const giftStaticQuery = graphql`
  query {
    allShopifyProduct(filter: { productType: { eq: "Vase" } }, limit: 10) {
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

const AddVasetoProductPage: React.FC<{ withLink?: boolean }> = ({
  withLink = false,
}) => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${giftStaticQuery}`}
    render={({ allShopifyProduct }) => {
      const products = allShopifyProduct?.edges;
      return (
        <ProductGrid
          id="feature"
          withLink={withLink}
          gridTitle="Add Vase"
          products={products}
        />
      );
    }}
  />
);

export default AddVasetoProductPage;
