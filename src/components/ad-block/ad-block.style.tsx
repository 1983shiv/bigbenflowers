const styles = {
	wrapper: {
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		minHeight: ['270px', '280px'],
		borderRadius: '5px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '34px 30px 40px',
		'@media screen and (min-width: 1920px)': {
			minHeight: '325px',
			padding: '34px 40px 40px',
		},
	},
	content: {
		maxWidth: '245px',
		width: '100%',
		h3: {
			color: 'primary',
			fontSize: ['22px', '28px'],
			lineHeight: '1.607',
			fontWeight: '600',
			fontFamily: 'Open Sans, sans-serif',
			marginBottom: '8px',
		},
		p: {
			color: 'primary',
			fontSize: '14px',
			lineHeight: '1.785',
		},
		a: {
			display: 'inline-block',
		},
		button: {
			minWidth: '130px',
			minHeight: '45px',
			borderRadius: '5px',
			boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
			fontSize: '14px',
			fontWeight: '600',
			fontFamily: 'Open Sans, sans-serif',
			marginTop: '20px',
			transition: 'all 0.2s ease',
			'@media screen and (min-width: 768px)': {
				minWidth: '130px',
				minHeight: '45px',
			},
			':hover': {
				opacity: '0.999',
			},
		},
	},
	tag: {
		color: 'white',
		fontSize: '12px',
		fontWeight: '600',
		textTransform: 'uppercase',
		borderRadius: '5px',
		display: 'inline-block',
		padding: '5px 10px',
		marginBottom: '8px',
	},
};

export default styles;
