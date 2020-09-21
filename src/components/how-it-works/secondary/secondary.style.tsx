const styles = {
	wrapper: {
		gridGap: '20px',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		padding: ['20px 0', '30px 0', '40px 0', '50px 0'],
		borderBottom: `1px solid #E6E6E6`,
		'@media only screen and (max-width: 1024px)': {
			gridTemplateColumns: '1fr 1fr',
			gridGap: '30px',
		},
		'@media only screen and (max-width: 480px)': {
			gridTemplateColumns: '1fr',
		},
		'.featureCard': {
			alignItems: 'flex-start',
			flexDirection: 'row',
			maxWidth: ['320px', '420px'],
			'&:nth-of-type(3)': {
				img: {
					width: '34px',
					'@media only screen and (max-width: 768px)': {
						width: '27px',
					},
				},
			},
			h4: {
				fontSize: '16px',
				marginBottom: '5px',
				'@media only screen and (max-width: 768px)': {
					fontWeight: 600,
				},
			},
			p: {
				color: 'text',
				fontSize: ['14px', '15px'],
				lineHeight: '1.5',
			},
			img: {
				flexShrink: 0,
				marginBottom: 0,
				marginRight: '20px',
				height: 'auto',
				width: '40px',
				'@media only screen and (max-width: 768px)': {
					width: '30px',
					marginTop: '1px',
				},
			},
		},
	},
};

export default styles;
