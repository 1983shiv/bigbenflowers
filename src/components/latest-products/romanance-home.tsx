import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProductGridCarousel from "../product-grid/product-grid-carousel";

const romancelatestStaticQuery = graphql`
  query {
    allShopifyProduct(filter: { tags: { eq: "Love & Romance" } }, limit: 10) {
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

const LoveRomanceHome = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${romancelatestStaticQuery}`}
    render={({ allShopifyProduct }) => {
      const products = allShopifyProduct?.edges;
      return (
        <ProductGridCarousel
          id="latestProducts"
          gridTitle="Love & Romance"
          products={products}
        />
      );
    }}
  />
);

export default LoveRomanceHome;
