const styles = {
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		padding: 30,
		position: 'relative',
		'@media only screen and (max-width: 480px)': {
			padding: '20px 30px 30px',
		},
	},
	title: {
		color: 'primary',
		fontWeight: '600',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		maxWidth: 750,
		marginX: 'auto',
		button: {
			marginRight: -18,
		},
	},
	totalPrice: {
		width: 'calc(100% + 60px)',
		padding: '15px 30px',
		marginTop: 30,
		marginLeft: '-30px',
		backgroundColor: 'background',
		position: 'relative',
		'@media only screen and (max-width: 480px)': {
			marginTop: 18,
		},
		'&::after': {
			content: '""',
			position: 'absolute',
			right: 0,
			bottom: -30,
			width: '100%',
			height: '30px',
			background:
				'linear-gradient(to bottom, rgba(255, 255, 255, 0.7) , rgba(255, 255, 255, 0))',
			zIndex: 1,
			pointerEvents: 'none',
			'@media only screen and (max-width: 480px)': {
				display: 'none',
			},
		},
		'>div': {
			width: '100%',
			maxWidth: 750,
			marginX: 'auto',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		h4: {
			fontFamily: 'body',
			fontSize: 1,
			color: 'primary',
		},
		div: {
			fontSize: 1,
		},
	},
	cartItems: {
		width: '100%',
		maxWidth: 780,
		marginX: 'auto',
		overflow: 'hidden',
		flexGrow: '1',
		height: 'calc(100% - 240px)',
		'@media only screen and (max-width: 480px)': {
			height: 'calc(100% - 206px)',
		},
		'> div': {
			paddingRight: [32, 46],
			marginRight: -30,
			paddingLeft: [0, 15],
			height: '100%',
			overflow: 'auto',
			overflowX: 'hidden',
		},
	},
	buttonStyle: {
		width: '100%',
		maxWidth: 750,
		marginX: 'auto',
		backgroundColor: 'white',
		position: 'relative',
		'&::before': {
			content: '""',
			position: 'absolute',
			right: 0,
			top: -30,
			width: '100%',
			height: '30px',
			background:
				'linear-gradient(to top, rgba(255, 255, 255, 0.7) , rgba(255, 255, 255, 0))',
			zIndex: 1,
			pointerEvents: 'none',
			'@media only screen and (max-width: 480px)': {
				display: 'none',
			},
		},
		button: {
			width: '100%',
			svg: {
				position: 'relative',
				top: '1px',
				marginRight: '10px',
			},
		},
	},
};

export default styles;
