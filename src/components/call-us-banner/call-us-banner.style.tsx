const styles = {
	banner: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: ['center', 'center right'],
		minHeight: [280, 350],
		padding: [20, 30, 60],
		borderRadius: 6,
		position: 'relative',
		overflow: 'hidden',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
		'::after': {
			content: '""',
			display: 'block',
			width: '100%',
			height: '100%',
			background: [
				'linear-gradient(to right, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0))',
				'linear-gradient(to right, rgba(0, 0, 0, 0.48) , rgba(0, 0, 0, 0))',
			],
			position: 'absolute',
			top: 0,
			left: 0,
			zIndex: 0,
		},
		a: {
			display: 'inline-block',
		},
	},
	bannerContent: {
		color: 'white',
		position: 'relative',
		zIndex: 1,
		h1: {
			fontSize: [3, 4],
			lineHeight: [1.7, '45px'],
			marginBottom: [15, 30],
		},
		button: {
			minWidth: 146,
			marginTop: [27, 35],
			svg: {
				position: 'relative',
				top: [0, '1px'],
			},
		},
	},
};

export default styles;
