const styles = {
	wrapper: {
		display: 'inline-flex',
		alignItems: 'center',
		button: {
			display: 'flex',
			textDecoration: 'none',
			position: 'relative',
			border: 0,
			padding: 0,
			cursor: 'pointer',
			backgroundColor: 'transparent',
			':focus': {
				outline: 'none',
			},
		},
	},
	counter: {
		position: 'absolute',
		top: -13,
		right: -16,
		minWidth: 19,
		minHeight: 18,
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '50%',
		backgroundColor: 'primary',
		color: 'white',
		fontSize: 12,
		fontWeight: '600',
		padding: '2px',
	},
};

export default styles;
