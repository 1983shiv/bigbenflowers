import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ProductGrid from '../product-grid/product-grid';

const trendingStaticQuery = graphql`
	query {
		allShopifyProduct(filter: { tags: { eq: "Trending" } }, limit: 10) {
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

const TrendingProductsHome: React.FC<{ withLink?: boolean }> = ({
	withLink = false,
}) => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${trendingStaticQuery}`}
		render={({ allShopifyProduct }) => {
			const products = allShopifyProduct?.edges;
			return (
				<ProductGrid
					id="trendingProducts"
					withLink={withLink}
					gridTitle="Trending Product"
					products={products}
				/>
			);
		}}
	/>
);

export default TrendingProductsHome;
