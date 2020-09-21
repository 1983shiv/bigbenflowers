const styles = {
	wrapper: {
		paddingY: 20,
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
		borderBottomColor: 'muted',
		pointerEvent: 'all',
		'&.disabled': {
			opacity: 0.6,
			cursor: 'not-allowed',
			pointerEvents: 'none',
		},
		'&:hover': {
			button: {
				opacity: 1,
				visibility: 'visible',
			},
		},
	},
	imageWrapper: {
		width: [90, 105],
		height: [90, 105],
		position: 'relative',
		overflow: 'hidden',
		borderRadius: 6,
		img: {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},
		button: {
			opacity: 0,
			visibility: 'hidden',
			position: 'absolute',
			width: '100%',
			top: 0,
			height: '100%',
			backgroundColor: 'rgba(0, 0, 0, 0.25)',
			color: 'white',
			transition: 'all 0.3s ease',
		},
	},
	contentWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		width: ['calc(100% - 90px)', 'calc(100% - 105px)'],
		paddingLeft: 15,
		'@media only screen and (max-width: 767px)': {
			flexWrap: 'wrap',
			flexDirection: 'column',
			justifyContent: 'flex-start',
		},
	},
	title: {
		fontSize: 0,
		lineHeight: 2,
		marginBottom: 10,
	},
	unitPrice: {
		color: 'darkgray',
		fontSize: 0,
	},
	totalPrice: {
		color: 'primary',
		fontWeight: '700',
		fontSize: 0,
	},
	counterWrapper: {
		display: 'flex',
		flexDirection: 'column-reverse',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginTop: [20, 0],
		'@media only screen and (max-width: 767px)': {
			flexDirection: 'row',
			alignItems: 'center',
		},
	},
	cartCounter: {
		display: 'flex',
		alignItems: 'center',
		minWidth: [100, 106],
		minHeight: [32, 36],
		borderRadius: 6,
		overflow: 'hidden',
		backgroundColor: 'primary',
		boxShadow: '0 6px 12px rgba(0, 0, 0, 0.16)',
		div: {
			width: [42, 48],
			color: 'white',
			textAlign: 'center',
			fontSize: 0,
			fontWeight: '700',
		},
		button: {
			padding: 0,
			minWidth: 32,
			minHeight: [32, 36],
			svg: {
				width: 24,
				height: 24,
				marginLeft: 0,
			},
		},
	},
};

export default styles;
