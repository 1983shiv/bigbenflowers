const styles = {
	wrapper: {},
	fieldWrapper: {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		width: '100%',
		input: {
			width: '100%',
			fontSize: 1,
			fontWight: '400',
			borderRadius: 6,
			padding: ['14px 20px 14px 50px', '14px 25px 14px 62px'],
			backgroundColor: 'lightergray',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'muted',
			boxShadow: 'none',
			transition: 'border-color 0.2s ease',
			'&:focus': {
				outline: 'none',
				boxShadow: 'none',
				borderColor: 'darkgray',
			},
		},
		svg: {
			fill: 'text',
			position: 'absolute',
			'&.search-icon': {
				left: [20, 25],
				pointerEvents: 'none',
			},
			'&.close-icon': {
				width: 12,
				height: 12,
				right: 20,
				marginRight: 0,
				cursor: 'pointer',
				':hover': {
					fill: 'primary',
				},
			},
		},
	},
	searchResult: {
		position: 'fixed',
		top: 79,
		height: 'calc(100vh - 79px)',
		overflow: 'auto',
		zIndex: 10,
		width: '100vw',
		left: 0,
		backgroundColor: 'white',
		minHeight: '100vh',
		paddingX: 40,
		paddingTop: 40,
		paddingBottom: 230,
		borderTopWidth: '1px',
		borderTopStyle: 'solid',
		borderTopColor: 'muted',
		'@media only screen and (max-width: 1360px)': {
			paddingX: 30,
			paddingTop: 30,
		},
		'@media only screen and (max-width: 480px)': {
			paddingX: 20,
			paddingTop: 20,
			paddingBottom: 150,
		},
		'&.notFound': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		'>div': {
			padding: 0,
			marginBottom: 0,
			backgroundColor: 'transparent',
			'>h3': {
				fontSize: [3, 4],
				fontFamily: 'body',
				marginBottom: 30,
			},
		},
	},
	notFoundCard: {
		textAlign: 'center',
		img: {
			marginBottom: 30,
		},
		h2: {
			fontSize: 2,
			color: 'primary',
			marginBottom: [12, 15],
		},
	},
};

export default styles;
