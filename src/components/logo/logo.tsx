/** @jsx jsx */
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Image, jsx } from 'theme-ui';
import styles from './logo.style';

type PropsType = {
	imgSrc?: string;
	imgAlt?: string;
	path?: string;
};

const logoStaticQuery = graphql`
	query {
		prismic {
			allCommons {
				edges {
					node {
						logo
					}
				}
			}
		}
	}
`;

const Logo: React.FC<PropsType> = ({ imgSrc, imgAlt, path = '/' }) => {
	return (
		<StaticQuery<GatsbyTypes.Query>
			query={`${logoStaticQuery}`}
			render={({ prismic }) => {
				const logo = prismic?.allCommons?.edges[0].node?.logo;

				return (
					<Box className="logo" sx={styles.wrapper}>
						<Link to={path}>
							<Image
								sx={styles.logo}
								src={imgSrc ? imgSrc : logo.url}
								alt={imgAlt ? imgAlt : logo.alt}
							/>
						</Link>
					</Box>
				);
			}}
		/>
	);
};

export default Logo;
