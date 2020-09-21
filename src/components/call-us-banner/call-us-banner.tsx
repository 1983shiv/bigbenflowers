/** @jsx jsx */
import { useState, useEffect } from 'react';
import { Box, Text, Button, jsx } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './call-us-banner.style';

const CallusBanner = (props: any) => {
	const windowSize = useWindowSize();
	const [offset, setOffset] = useState(60);
	const {
		callUsBanner,
		callUsTitle,
		callUsButtonText,
		scrollTo = '#feature',
	} = props;
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
			className="call-us-banner"
			sx={{
				backgroundImage: `url(${
					callUsBanner && callUsBanner.url ? callUsBanner.url : ''
				})`,
				...styles.banner,
			}}
		>
			<Box as="header" sx={styles.bannerContent}>
				{RichText.render(callUsTitle)}
				<AnchorLink
					href={scrollTo}
					style={{ textDecoration: 'none' }}
					offset={() => offset}
				>
					<Button variant="white">
						<Text as="span">
							{callUsButtonText
								? RichText.asText(callUsButtonText)
								: 'Shop Now'}
						</Text>
						<svg width="15.394" height="10" viewBox="0 0 15.394 10">
							<path
								d="M13.674,6.343,12.427,7.6l2.89,2.877-12.025.012,0,1.768,11.992-.012L12.444,15.1,13.7,16.343l4.988-5.012Z"
								transform="translate(-3.292 -6.343)"
							/>
						</svg>
					</Button>
				</AnchorLink>
			</Box>
		</Box>
	);
};

export default CallusBanner;
