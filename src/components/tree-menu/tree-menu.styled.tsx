const styles = {
	wrapper: {
		'.handler': {
			display: 'grid',
			gridTemplateColumns: '35px 1fr 16px',
			alignItems: 'center',
			padding: '13px 20px',
			color: 'primary',
			fontSize: '14px',
			fontWeight: '600',
			cursor: 'pointer',
			'@media only screen and (min-width: 768px) and (max-width: 1024px)': {
				padding: '13px 30px',
			},
			svg: {
				flexShrink: '0',
			},
			'.chevron': {
				width: '16px',
				height: '16px',
				marginLeft: 'auto',
				transition: 'all 0.3s ease',
			},
			'&.active': {
				backgroundColor: '#F6F5F5',
				'.chevron': {
					transform: 'rotate(90deg)',
				},
			},
		},
	},
	menuText: {
		display: 'inline-flex',
		paddingLeft: '12px',
		paddingRight: '12px',
	},
	subItem: {
		a: {
			color: 'primary',
			display: 'block',
			fontSize: '14px',
			textDecoration: 'none',
			padding: '14px 20px 14px 68px',
		},
		'&.active-menu': {
			a: {
				fontWeight: 600,
			},
		},
	},
};

export default styles;
