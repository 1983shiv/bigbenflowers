import React from "react";
import { StaticQuery, graphql } from "gatsby";
import get from "lodash/get";
import SEO from "../components/seo";
import SecondaryLayout from "../components/layout/secondary/secondary";
import HomeBanner from "../components/home-banner/home-banner";
import AdBanner from "../components/ad-banner/ad-banner";
import AllProducts from "../components/all-products/all-products";

const modernPageStaticQuery = graphql`
	query {
		prismic {
			allHomemoderns {
				edges {
					node {
						banner_title
						banner_subtitle
						banner_image
					}
				}
			}
			allCommons {
				edges {
					node {
						ad_blocks {
							badge_title
							badge_color
							title
							block_image
							short_description
							add_a_button
							button_title
						}
					}
				}
			}
		}
	}
`;

const ModernHome: React.FC<{}> = () => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${modernPageStaticQuery}`}
		render={(data) => {
			const homeBanner = get(data, "prismic.allHomemoderns.edges[0].node");
			const adBlocks = get(data, "prismic.allCommons.edges[0].node.ad_blocks");
			return (
				<SecondaryLayout>
					<SEO title="Home" />
					<HomeBanner
						bannerTitle={homeBanner?.banner_title}
						bannerSubTitle={homeBanner?.banner_subtitle}
						banner={homeBanner?.banner_image?.url}
						showActionBtn={false}
					/>
					<AdBanner data={adBlocks} scrollTo="#allProducts" scrollOffset={70} />
					<AllProducts />
				</SecondaryLayout>
			);
		}}
	/>
);

export default ModernHome;
