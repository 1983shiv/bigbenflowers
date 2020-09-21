/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Wrapper, { styles } from './carousel.style';

type CarouselPropsType = {
	responsive: {};
	gutter?: string;
	showDots?: boolean;
	ssr?: boolean;
	renderDotsOutside?: boolean;
};

type CustomButtonType = {
	next?: Function;
	previous?: Function;
};

const ButtonGroup: React.FC<CustomButtonType> = ({ next, previous }) => {
	return (
		<Box sx={styles.carouselNav} className="carousel-button-group">
			<Box
				as="button"
				sx={styles.prev}
				className="prev"
				onClick={() => previous()}
			>
				<IoIosArrowBack />
			</Box>

			<Box as="button" sx={styles.next} className="next" onClick={() => next()}>
				<IoIosArrowForward />
			</Box>
		</Box>
	);
};

const Carousel: React.FunctionComponent<CarouselPropsType> = ({
	ssr,
	gutter,
	children,
	responsive,
	showDots,
	renderDotsOutside,
}) => {
	return (
		<Wrapper gutter={gutter}>
			<MultiCarousel
				ssr={ssr}
				infinite={true}
				arrows={false}
				swipeable={true}
				responsive={responsive}
				showDots={showDots}
				renderDotsOutside={renderDotsOutside}
				renderButtonGroupOutside={true}
				customButtonGroup={<ButtonGroup />}
			>
				{children}
			</MultiCarousel>
		</Wrapper>
	);
};

export default Carousel;
