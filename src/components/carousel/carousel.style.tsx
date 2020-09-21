/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

const Wrapper = ({ ...props }) => (
	<Box
		{...props}
		sx={{
			position: 'relative',
			'.react-multi-carousel-list': {
				marginX: `-${props.gutter}`,
			},
			'.react-multi-carousel-item': {
				paddingX: props.gutter,
			},
			'.react-multi-carousel-dot-list': {
				marginTop: '25px',
				'@media only screen and (max-width: 480px)': {
					marginTop: '10px',
				},
				'.react-multi-carousel-dot': {
					lineHeight: '1',
					button: {
						width: '8px',
						height: '8px',
						border: '0',
						borderRadius: '8px',
						marginRight: '8px',
						backgroundColor: 'carouselDot',
						transition: 'width 0.2s ease',
					},
					'&.react-multi-carousel-dot--active': {
						button: {
							width: '20px',
							backgroundColor: 'carouselActiveDot',
						},
					},
				},
			},
		}}
	/>
);

export default Wrapper;

export const styles = {
	carouselNav: {
		button: {
			alignItems: 'center',
			backgroundColor: 'white',
			border: 0,
			borderRadius: '50%',
			boxShadow: '0px 4px 4px rgba(115, 125, 144, 0.2)',
			cursor: 'pointer',
			display: 'flex',
			height: 40,
			justifyContent: 'center',
			padding: 0,
			position: 'absolute',
			top: 'calc(50% - 20px)',
			width: 40,
			fontSize: '18px',
			':focus': {
				outline: 'none',
			},
			'@media screen and (max-width: 375px)': {
				width: '32px',
				height: '32px',
				top: 'calc(50% - 16px)',
				fontSize: '16px',
			},
		},
	},
	prev: {
		left: '-20px',
		'@media screen and (max-width: 375px)': {
			left: '-16px',
		},
	},
	next: {
		right: '-20px',
		'@media screen and (max-width: 375px)': {
			right: '-16px',
		},
	},
};
