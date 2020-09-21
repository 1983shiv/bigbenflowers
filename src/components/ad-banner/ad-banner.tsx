/** @jsx jsx */
import { Box, Button, jsx } from 'theme-ui';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RichText } from 'prismic-reactjs';
import { ArrowRight } from '../icons';
import Carousel from '../carousel/carousel';
import AdBlock from '../ad-block/ad-block';
import styles from './ad-banner.style';

type Props = {
	data: any;
	scrollTo?: string;
	scrollOffset?: number;
};

const AdBanner: React.FC<Props> = ({ data, scrollTo, scrollOffset }) => {
	const responsive = {
		ipad: {
			breakpoint: { max: 100000, min: 651 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 650, min: 0 },
			items: 1,
		},
	};

	return (
		<Box className="picksyAdBanner" sx={styles.wrapper}>
			<Carousel ssr={true} responsive={responsive} gutter="10px">
				{data.map((item: any, index: number) => (
					<AdBlock
						key={`adblock-key${index}`}
						tag={item.badge_title}
						tagBgColor={item.badge_color}
						bannerImage={item.block_image?.url}
						title={item.title}
						shortDescription={item.short_description}
						btn={
							<AnchorLink
								href={scrollTo}
								style={{ textDecoration: 'none' }}
								offset={scrollOffset}
							>
								<Button variant="white">
									{RichText.asText(item.button_title)} <ArrowRight />
								</Button>
							</AnchorLink>
						}
					/>
				))}
			</Carousel>
		</Box>
	);
};

export default AdBanner;
