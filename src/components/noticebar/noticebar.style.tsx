const styles = {
	wrapper: {
		color: 'white',
		paddingY: '9px',
		fontSize: 0,
		fontWeight: '600',
		textAlign: 'center',
		button: {
			opacity: 1,
			position: 'absolute',
			top: 0,
			minWidth: 20,
			minHeight: 20,
			right: 19,
			svg: {
				width: 11,
				height: 11,
			},
			':hover': {
				opacity: 0.9,
			},
		},
		'.container': {
			position: 'relative',
		},
	},
};

export default styles;
