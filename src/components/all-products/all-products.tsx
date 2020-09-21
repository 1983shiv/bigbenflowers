/** @jsx jsx */
import { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Box, Grid, Heading, jsx, Button } from "theme-ui";
import ProductCard from "../product-card/product-card";
import Loader from "../loader/loader";
import styles from "./all-products.style";

const productStaticQuery = graphql`
	query {
		allShopifyProduct {
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

const AllProducts = () => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${productStaticQuery}`}
		render={(data: any) => {
			const [visible, setVisible] = useState(20);
			const [loading, setLoading] = useState(false);
			const products = data?.allShopifyProduct?.edges;

			const handleLoadMore = () => {
				setLoading(true);
				setTimeout(() => {
					setVisible(visible + 12);
					setLoading(false);
				}, 1000);
			};

			const getPrice = (price: any) =>
				Intl.NumberFormat(undefined, {
					currency: price.currencyCode,
					minimumFractionDigits: 2,
					style: "currency",
				}).format(parseFloat(price && price.amount ? price.amount : 0));
			return (
				<Box id="allProducts" sx={styles.wrapper}>
					<Heading as="h3">All Products</Heading>
					<Grid sx={styles.productGrid}>
						{products &&
							products.slice(0, visible).map((product: any) => {
								const {
									id,
									title,
									shopifyId,
									variants,
									availableForSale,
									images: [firstImage],
									variants: [firstVariant],
								} = product.node;
								return (
									<ProductCard
										key={id}
										title={title}
										shopifyId={shopifyId}
										availableForSale={availableForSale}
										price={getPrice(firstVariant?.priceV2)}
										thumbnail={firstImage?.localFile?.childImageSharp?.fluid}
										variants={variants}
									/>
								);
							})}
					</Grid>
					{visible < products?.length && (
						<Button sx={styles.loadMoreBtn} onClick={handleLoadMore}>
							{loading ? <Loader /> : "Show more"}
						</Button>
					)}
				</Box>
			);
		}}
	/>
);

export default AllProducts;
