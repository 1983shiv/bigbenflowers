const styles = {
	main: {
		minHeight: '100vh',
		overflow: 'hidden',
	},
	wrapper: {
		width: 'calc(100% - 260px)',
		marginLeft: '260px',
		display: 'flex',
		flexDirection: 'column',
		'@media screen and (min-width: 1920px)': {
			width: 'calc(100% - 300px)',
			marginLeft: '300px',
		},
		'@media screen and (max-width: 1024px)': {
			width: '100%',
			marginLeft: '0',
		},
	},
	sidebar: {
		width: '260px',
		height: 'calc(100vh - 70px)',
		position: 'fixed',
		top: '70px',
		left: '0',
		zIndex: 9,
		backgroundColor: 'white',
		overflow: 'hidden',
		'@media screen and (min-width: 1920px)': {
			width: '300px',
		},
		'@media screen and (max-width: 1024px)': {
			display: 'none',
		},
	},
	content: {
		flexGrow: 1,
		padding: '90px 30px 20px',
		'@media only screen and (max-width: 767px)': {
			paddingLeft: '20px',
			paddingRight: '20px',
		},
		'.home-banner': {
			boxShadow: 'none',
			justifyContent: 'center',
			'@media screen and (max-width: 1600px)': {
				minHeight: '420px',
			},
			'@media screen and (max-width: 1440px)': {
				minHeight: '380px',
			},
			'@media screen and (max-width: 1360px)': {
				minHeight: '300px',
			},
			'@media screen and (max-width: 375px)': {
				backgroundPosition: '40% 46px',
				backgroundColor: '#bee4f5',
			},
			'::after': {
				content: 'none',
			},
			p: {
				color: 'primary',
				margin: '0',
				fontSize: '16px',
				'@media screen and (max-width: 767px)': {
					fontSize: '14px',
				},
			},
			h1: {
				p: {
					'@media screen and (min-width: 768px)': {
						fontSize: '36px',
						fontWeight: '400',
					},
					'@media screen and (max-width: 767px)': {
						fontSize: '24px',
					},
				},
			},
		},
		'.productCard': {
			'.content': {
				h4: {
					fontSize: '14px',
				},
			},
		},
	},
};

export default styles;
