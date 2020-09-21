const styles = {
	wrapper: {
		width: '100vw',
		minHeight: '70px',
		padding: ['11px 10px', '11px 30px'],
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'fixed',
		top: '0',
		left: '0',
		zIndex: 10,
		backgroundColor: 'white',
		boxShadow: '0 2px 4px rgba(41, 41, 41, 0.06)',
		'.logo': {
			img: {
				'@media only screen and (min-width: 768px)': {
					width: '84px',
				},
			},
		},
		'@media only screen and (max-width: 991px)': {
			'>.picksySearch': {
				display: 'none',
			},
		},
		'.picksySearch': {
			flex: '3',
			input: {
				border: '0',
				backgroundColor: 'lightgray',
				transition: 'background-color 0.2s ease',
				'&:focus': {
					backgroundColor: 'muted',
				},
			},
			'.searchResult': {
				top: '70px',
			},
		},
	},
	mobileSearch: {
		width: '100%',
	},
	logoArea: {
		flex: '1',
	},
	hamburgBtn: {
		display: 'none',
		'@media only screen and (max-width: 1080px)': {
			display: 'inline-flex',
			marginRight: '4px',
		},
	},
	searchBtn: {
		display: 'none',
		'@media only screen and (max-width: 991px)': {
			display: 'inline-flex',
		},
	},
	icons: {
		flex: '1',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		color: 'primary',
		a: {
			color: 'inherit',
			padding: ['8px 2px', '8px'],
		},
		svg: {
			width: '21px',
			height: '21px',
		},
		button: {
			position: 'relative',
			svg: {
				width: '22px',
				height: '22px',
			},
		},
	},
	badge: {
		minWidth: '14px',
		minHeight: '16px',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		fontSize: '12px',
		lineHeight: '14px',
		fontWeight: '700',
		backgroundColor: 'primary',
		position: 'absolute',
		top: '9px',
		right: '7px',
		paddingLeft: '2px',
		paddingRight: '2px',
	},
};

export default styles;
