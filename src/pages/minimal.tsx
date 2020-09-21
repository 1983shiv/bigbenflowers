import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
import SEO from '../components/seo';
import PrimaryLayout from '../components/layout/primary/primary';
import HomeBanner from '../components/home-banner/home-banner';
import HowItWorks from '../components/how-it-works/secondary/secondary';
import CategoryBlocks from '../components/category-blocks/secondary/secondary';
import FeaturedProducts from '../components/featured-products/featured-products-home';
import AdBanner from '../components/ad-banner/ad-banner';
import TrendingProducts from '../components/trending-products/trending-products-home';
import CallusBanner from '../components/call-us-banner/call-us-banner';

const indexPageStaticQuery = graphql`
	query {
		prismic {
			allHomeminimals {
				edges {
					node {
						banner_title
						banner_subtitle
						banner_button_text
						banner_image
						how_it_works {
							thumbnail
							title
							short_description
						}
						call_us_banner
						call_us_banner_content
						call_us_button_text
					}
				}
			}
			allHomes {
				edges {
					node {
						category_section_title
						category_section_short_intro
						category_block {
							category_slug
							category_title
							image
							imageSharp {
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

const IndexPage: React.FC<{}> = () => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${indexPageStaticQuery}`}
		render={(data) => {
			const categorySectionTitle = get(
				data,
				'prismic.allHomes.edges[0].node.category_section_title'
			);
			const categorySectionIntro = get(
				data,
				'prismic.allHomes.edges[0].node.category_section_short_intro'
			);
			const categoryItems = get(
				data,
				'prismic.allHomes.edges[0].node.category_block'
			);
			const node = get(data, 'prismic.allHomeminimals.edges[0].node');
			const adBlocks = get(data, 'prismic.allCommons.edges[0].node.ad_blocks');
			const bannerImage = node.banner_image.url;
			const bannerTitle = node.banner_title;
			const bannerSubTitle = node.banner_subtitle;
			const bannerButtonText = node.banner_button_text;
			const howItworks = node.how_it_works;
			const callUsBanner = node.call_us_banner;
			const callUsBannerContent = node.call_us_banner_content;
			const callUsButtonText = node.call_us_button_text;

			return (
				<PrimaryLayout
					fluid={true}
					homeLink="/minimal"
					pathPrefix="/minimal/collection"
					showNoticeBar={false}
				>
					<SEO title="Home" />
					{/* End of home seo */}

					<HomeBanner
						banner={bannerImage}
						bannerTitle={bannerTitle}
						bannerSubTitle={bannerSubTitle}
						bannerButtonText={bannerButtonText}
					/>
					{/* End of banner */}

					<HowItWorks items={howItworks} />
					{/* End of how it works */}

					<CategoryBlocks
						title={categorySectionTitle}
						shortIntro={categorySectionIntro}
						categoryItems={categoryItems}
					/>
					{/* End of category blocks */}

					<FeaturedProducts withLink={true} />
					{/* End of latest products */}

					<AdBanner
						data={adBlocks}
						scrollTo="#trendingProducts"
						scrollOffset={60}
					/>
					{/* End of trending products */}

					<TrendingProducts withLink={true} />
					{/* End of trending products */}

					<CallusBanner
						callUsBanner={callUsBanner}
						callUsTitle={callUsBannerContent}
						callUsButtonText={callUsButtonText}
					/>
					{/* End of call us banner */}
				</PrimaryLayout>
			);
		}}
	/>
);

export default IndexPage;
