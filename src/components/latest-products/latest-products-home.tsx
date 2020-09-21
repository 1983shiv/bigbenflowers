import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProductGrid from "../product-grid/product-grid";

const latestStaticQuery = graphql`
	query {
		allShopifyProduct(sort: { fields: [createdAt], order: DESC }, limit: 10) {
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

const LatestProductsHome = () => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${latestStaticQuery}`}
		render={({ allShopifyProduct }) => {
			const products = allShopifyProduct?.edges;
			return (
				<ProductGrid
					id="latestProducts"
					gridTitle="Latest Product"
					products={products}
				/>
			);
		}}
	/>
);

export default LatestProductsHome;
