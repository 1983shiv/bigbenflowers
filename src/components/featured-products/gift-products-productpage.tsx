import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import ProductGrid from "../product-grid/product-grid";
import ProductGridCarousel from "../product-grid/product-grid-carousel";

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
                fluid(maxWidth: 150, quality: 100) {
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
      return (
        <ProductGridCarousel
          id="feature"
          withLink={withLink}
          gridTitle="Add Gifts to Cherish your Loved Ones..."
          products={products}
        />
      );
    }}
  />
);

export default AddGiftstoProductPage;
