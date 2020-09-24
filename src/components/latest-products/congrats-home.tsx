import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProductGridCarousel from "../product-grid/product-grid-carousel";

const congratslatestStaticQuery = graphql`
  query {
    allShopifyProduct(filter: { tags: { eq: "Congrats" } }, limit: 10) {
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

const CongratsHome: React.FC<{ withLink?: boolean }> = ({
  withLink = true,
}) => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${congratslatestStaticQuery}`}
    render={({ allShopifyProduct }) => {
      const products = allShopifyProduct?.edges;
      return (
        <ProductGridCarousel
          id="latestProducts"
          withLink={withLink}
          gridTitle="Congrats"
          products={products}
        />
      );
    }}
  />
);

export default CongratsHome;
