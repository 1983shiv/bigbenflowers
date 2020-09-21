const styles = {
	wrapper: {
		width: '100%',
		padding: ['20px', '30px'],
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		fontSize: '14px',
		'@media only screen and (max-width: 767px)': {
			flexDirection: 'column',
		},
	},
	copyright: {
		p: {
			margin: '0',
			fontSize: 0,
		},
		a: {
			color: 'primary',
			fontWeight: '700',
			textDecoration: 'none',
		},
	},
	socialLinks: {
		display: 'flex',
		alignItems: 'center',
		'@media only screen and (max-width: 767px)': {
			marginTop: '8px',
		},
		span: {
			marginLeft: '14px',
			marginRight: '14px',
			display: ['none', 'inline-flex'],
		},
		'.socialLinks': {
			marginLeft: '-5px',
			marginRight: '-5px',
		},
	},
};

export default styles;
