const styles = {
	footer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: 80,
		backgroundColor: 'white',
		borderTop: '1px solid #E6E6E6',
		'@media only screen and (max-width: 480px)': {
			paddingTop: 20,
		},
		'.container': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			'@media only screen and (max-width: 480px)': {
				flexDirection: 'column-reverse',
			},
		},
	},

	copyright: {
		a: {
			color: 'primary',
			fontWeight: '700',
			textDecoration: 'none',
		},
		'@media only screen and (max-width: 480px)': {
			p: {
				marginTop: '5px',
			},
		},
	},
};

export default styles;
