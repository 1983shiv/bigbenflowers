const styles = {
	wrapper: {
		a: {
			color: 'white',
			display: 'flex',
			flexDirection: 'column',
			textDecoration: 'none',
		},
		'&:hover': {
			'.gatsby-image-wrapper': {
				transform: 'scale(1.1)',
			},
			figcaption: {
				background:
					'linear-gradient(to top, rgba(0, 0, 0, 0.7) , rgba(0, 0, 0, 0))',
				h3: {
					bottom: 'calc(50% - 20px)',
				},
				'.textBtn': {
					opacity: 1,
					visibility: 'visible',
				},
			},
		},
	},
	figure: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		position: 'relative',
		borderRadius: 6,
		overflow: 'hidden',
		'.gatsby-image-wrapper': {
			width: '100%',
			height: [120, 280],
			transition: 'all 0.2s ease',
		},
	},
	figcaption: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: ['center', 'flex-end'],
		padding: [20, 30],
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: '100%',
		height: '100%',
		background: [
			'linear-gradient(to top, rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0))',
			'linear-gradient(to top, rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0))',
		],
		h3: {
			fontSize: ['17px', 2],
			fontWeight: '600',
			position: 'absolute',
			width: 'calc(100% - 60px)',
			bottom: ['calc(50% - 17px)', 30],
			transition: 'bottom 0.25s ease-out',
		},
	},
	textBtn: {
		opacity: 0,
		visibility: 'hidden',
		position: 'absolute',
		bottom: 30,
		fontWeight: '700',
		textTransform: 'capitalize',
		width: 'calc(100% - 60px)',
		display: ['none', 'flex'],
		alignItems: 'center',
		justifyContent: 'center',
		transition: 'opacity 0.2s ease',
		svg: {
			width: 20,
			height: 'auto',
			marginLeft: 10,
			position: 'relative',
			marginTop: 1,
		},
	},
};

export default styles;
