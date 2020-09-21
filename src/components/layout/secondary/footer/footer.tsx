/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import SocialLinks from '../../../social-links/social-links';
import styles from './footer.style';

const menuStaticQuery = graphql`
	query {
		prismic {
			allCommons {
				edges {
					node {
						copyright_text
						social_links {
							social_link {
								... on PRISMIC__ExternalLink {
									url
								}
							}
							social_type
						}
					}
				}
			}
		}
	}
`;

const getSocialData = (links: any) => {
	const data: any = [];
	links.forEach((link: any) => {
		data.push({ type: link?.social_type, link: link?.social_link?.url });
	});
	return data;
};

const Footer = () => (
	<StaticQuery<GatsbyTypes.Query>
		query={`${menuStaticQuery}`}
		render={(data: any) => {
			const footerData = data?.prismic?.allCommons?.edges[0]?.node;
			const socialData = getSocialData(footerData?.social_links || []);
			return (
				<Box as="footer" sx={styles.wrapper}>
					<Text sx={styles.copyright}>
						{RichText.render(footerData?.copyright_text || '')}
					</Text>
					<Box sx={styles.socialLinks}>
						<Text as="span">Find us on:</Text>
						<SocialLinks items={socialData} />
					</Box>
				</Box>
			);
		}}
	/>
);

export default Footer;
