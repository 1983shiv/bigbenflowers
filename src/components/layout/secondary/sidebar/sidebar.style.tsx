const styles = {
	wrapper: {
		width: '100%',
		height: '100%',
		overflow: 'auto',
		'.tree-menu ': {
			'.parent': {
				'@media only screen and (max-width: 1440px)': {
					'svg:not(.chevron)': {
						width: '25px',
						height: '25px',
					},
					'.handler span': {
						paddingLeft: '8px',
						paddingRight: '10px',
					},
					'&.organic': {
						'svg:not(.chevron)': {
							width: '23px',
							height: '23px',
						},
					},
					'&.fish--meat': {
						'svg:not(.chevron)': {
							width: '30px',
							height: '30px',
						},
					},
				},
			},
		},
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: ['20px 18px 15px 30px', '20px 30px 15px'],
		button: {
			minWidth: 'auto',
			minHeight: 'auto',
			display: 'none',
			'@media only screen and (max-width: 1024px)': {
				display: 'inline-flex',
			},
		},
	},
	text: {
		color: 'menu',
		fontWeight: '600',
		fontSize: ['15px', '13px'],
		margin: '0',
	},
};

export default styles;
