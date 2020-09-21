const styles = {
	wrapper: {
		paddingTop: 45,
		paddingBottom: [25, 45],
		paddingX: [20, 45, 75],
		marginBottom: [20, 30],
		borderRadius: 6,
		textAlign: ['left', 'center'],
		backgroundColor: 'white',
		'@media only screen and (max-width: 767px)': {
			'.featureCard': {
				paddingTop: 20,
				paddingBottom: 20,
				textAlign: 'left',
			},
		},
	},
	header: {
		marginBottom: [25, 45],
		h3: {
			color: 'primary',
			fontSize: ['17px', 2],
			marginBottom: 10,
		},
	},
};

export default styles;
