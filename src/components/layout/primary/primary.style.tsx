const styles = {
	main: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		overflow: 'hidden',
		'>.container': {
			flexGrow: 1,
			py: [20, 30],
		},
		'.fluid': {
			'*': {
				fontFamily: '"Open Sans",sans-serif',
			},
			'#feature, #trendingProducts': {
				h3: {
					fontSize: '20px',
					fontWeight: 600,
				},
			},
			section: {
				header: {
					button: {
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
					},
				},
				'&::after': {
					display: 'none',
				},
			},
			'.home-banner': {
				justifyContent: 'center',
				marginBottom: '10px',
				header: {
					h1: {
						fontWeight: 400,
						'@media only screen and (max-width: 1440px)': {
							marginBottom: '27px',
						},
						'@media only screen and (max-width: 767px)': {
							fontWeight: 600,
							marginTop: '0',
							marginBottom: '20px',
						},
						'@media only screen and (max-width: 480px)': {
							marginBottom: '15px',
						},
						p: {
							margin: '0',
							fontSize: '48px',
							'@media only screen and (max-width: 1440px)': {
								fontSize: '42px',
							},
							'@media only screen and (max-width: 768px)': {
								fontSize: '36px',
							},
							'@media only screen and (max-width: 667px)': {
								fontSize: '26px',
							},
						},
					},
					button: {
						marginTop: 40,
						'@media only screen and (max-width: 667px)': {
							marginTop: 27,
						},
					},
				},
			},
			'.productCard': {
				'.content': {
					span: {
						fontSize: '15px',
					},
					h4: {
						fontSize: '14px',
					},
				},
			},
			'.picksyAdBanner': {
				marginBottom: '30px',
				'.react-multi-carousel-item > div': {
					'@media only screen and (min-width: 1440px)': {
						minHeight: '330px',
						button: {
							marginTop: '27px',
						},
					},
					'@media only screen and (min-width: 1920px)': {
						minHeight: '380px',
					},
				},
			},
			'.call-us-banner': {
				backgroundPosition: 'center',
				header: {
					color: 'primary',
					h1: {
						fontWeight: 400,
						fontSize: '46px',
						lineHeight: '1.6',
						marginBottom: '0',
						'@media only screen and (max-width: 1440px)': {
							fontSize: '34px',
							lineHeight: '1.5',
						},
						'@media only screen and (max-width: 1024px)': {
							fontSize: '32px',
						},
						'@media only screen and (max-width: 768px)': {
							fontSize: '28px',
						},
						'@media only screen and (max-width: 480px)': {
							fontSize: '20px',
							fontWeight: 600,
						},
					},
					p: {
						fontSize: ['14px', '16px'],
						marginTop: '20px',
						'@media screen and (max-width: 767px)': {
							marginTop: '10px',
						},
					},
					'@media screen and (min-width: 768px)': {
						button: {
							marginTop: '30px',
						},
					},
					'@media screen and (max-width: 767px)': {
						button: {
							minWidth: '136px',
							marginTop: '10px',
						},
					},
				},
			},
			'.socialLinks': {
				a: {
					fontSize: '15px',
				},
			},
		},
	},
};

export default styles;
