import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProductGridCarousel from "../product-grid/product-grid-carousel";

const birthdaylatestStaticQuery = graphql`
  query {
    allShopifyProduct(filter: { tags: { eq: "Birthday" } }, limit: 10) {
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
                fluid(maxWidth: 400, quality: 100) {
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

const BirthdayHome = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${birthdaylatestStaticQuery}`}
    render={({ allShopifyProduct }) => {
      const products = allShopifyProduct?.edges;
      return (
        <ProductGridCarousel
          id="latestProducts"
          gridTitle="Happy Birthday.."
          products={products}
        />
      );
    }}
  />
);

export default BirthdayHome;
