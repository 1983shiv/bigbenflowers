import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProductGridCarousel from "../product-grid/product-grid-carousel";

const occassionlatestStaticQuery = graphql`
  query {
    allShopifyProduct(filter: { tags: { eq: "Occassions" } }, limit: 10) {
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
                fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
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

const OccassionsHome = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${occassionlatestStaticQuery}`}
    render={({ allShopifyProduct }) => {
      const products = allShopifyProduct?.edges;
      return (
        <ProductGridCarousel
          id="latestProducts"
          gridTitle="What's Your Occassions"
          products={products}
        />
      );
    }}
  />
);

export default OccassionsHome;
