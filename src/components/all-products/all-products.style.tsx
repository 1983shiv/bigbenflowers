const styles = {
	wrapper: {
		padding: 30,
		marginTop: 20,
		borderRadius: 6,
		backgroundColor: 'white',
		h3: {
			color: 'primary',
			fontSize: ['18px', 2],
			fontWeight: '600',
			fontFamily: 'Open Sans, sans-serif',
			marginBottom: ['15px', '0'],
		},
	},
	productGrid: {
		gridGap: 30,
		gridTemplateColumns: [
			'1fr 1fr',
			'1fr 1fr 1fr',
			'1fr 1fr 1fr',
			'1fr 1fr 1fr 1fr',
			'1fr 1fr 1fr 1fr 1fr',
		],
		marginBottom: [-15, -30],
		'.productCard': {
			marginBottom: [15, 30],
		},
	},
	loadMoreBtn: {
		color: 'primary',
		fontWeight: '500',
		fontSize: '14px',
		backgroundColor: '#F1F4F6',
		marginTop: 50,
		transition: 'background-color 0.2s ease',
		marginLeft: 'auto',
		marginRight: 'auto',
		fontFamily: 'Open Sans, sans-serif',
		'@media screen and (min-width: 768px)': {
			minHeight: '45px',
		},
		'&:hover': {
			backgroundColor: 'muted',
		},
	},
};

export default styles;
