/** @jsx jsx */
import Img from "gatsby-image";
import { Box, Heading, Text, jsx } from "theme-ui";
import styles from "./category-banner.style";

type PropsType = {
	title?: string;
	subtitle?: string;
	bgImage?: any;
};

const CategoryBanner: React.FC<PropsType> = ({
	title,
	subtitle,
	bgImage,
}: any) => {
	const bgBannerImg = bgImage?.localFile?.childImageSharp?.fluid;
	return (
		<Box as="section" sx={styles.wrapper}>
			{bgBannerImg ? <Img fluid={bgBannerImg} /> : null}
			<Box as="header" sx={styles.bannerContent}>
				<Heading as="h1">{title.replace(/-/g, " ")}</Heading>
				{subtitle && <Text as="p">{subtitle}</Text>}
			</Box>
		</Box>
	);
};

export default CategoryBanner;
