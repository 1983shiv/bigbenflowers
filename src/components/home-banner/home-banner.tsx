/** @jsx jsx */
import { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { Box, Text, Button, jsx } from 'theme-ui';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ArrowRight } from '../icons';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './home-banner.style';
// fallback image
import bannerImg from '../../images/home-banner.png';

type Props = {
	banner?: string;
	bannerTitle?: string[];
	bannerSubTitle?: string[];
	bannerButtonText?: string[];
	showActionBtn?: boolean;
};

const HomeBanner: React.FC<Props> = ({
	banner,
	bannerTitle,
	bannerSubTitle,
	bannerButtonText,
	showActionBtn = true,
}) => {
	const windowSize = useWindowSize();
	const [offset, setOffset] = useState(60);
	useEffect(() => {
		if (windowSize < 1081) {
			setOffset(80);
		} else {
			setOffset(60);
		}
	}, [windowSize]);

	return (
		<Box
			as="section"
			sx={{
				backgroundImage: `url(${banner && banner ? banner : bannerImg})`,
				...styles.banner,
			}}
			className="home-banner"
		>
			<Box as="header" sx={styles.bannerContent}>
				{bannerTitle && <h1>{RichText.render(bannerTitle)}</h1>}
				{bannerSubTitle && RichText.render(bannerSubTitle)}
				{showActionBtn && (
					<AnchorLink
						href="#feature"
						style={{ textDecoration: 'none', display: 'inline-block' }}
						offset={() => offset}
					>
						<Button variant="white">
							<Text as="span">
								{bannerButtonText
									? RichText.asText(bannerButtonText)
									: 'Order Now'}
							</Text>
							<ArrowRight />
						</Button>
					</AnchorLink>
				)}
			</Box>
		</Box>
	);
};

export default HomeBanner;
