import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Search from "./search";

const searchStaticQuery = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          title
          tags
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
                fluid(maxWidth: 320) {
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

export default () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${searchStaticQuery}`}
    render={({ allShopifyProduct }) => {
      return <Search allShopifyProduct={allShopifyProduct} />;
    }}
  />
);
