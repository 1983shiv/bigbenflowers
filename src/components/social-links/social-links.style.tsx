const styles = {
	socialLinks: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: -15,
		marginRight: -15,
		a: {
			display: 'flex',
			alignItems: 'center',
			color: 'darkgray',
			marginLeft: 15,
			marginRight: 15,
			textDecoration: 'none',
			':hover': {
				color: 'primary',
			},
			'&.facebook': {
				':hover': {
					color: 'facebook',
				},
			},
			'&.twitter': {
				':hover': {
					color: 'twitter',
				},
			},
			'&.youtube': {
				':hover': {
					color: 'youtube',
				},
			},
			'&.github': {
				':hover': {
					color: 'github',
				},
			},
			'&.instagram': {
				':hover': {
					color: 'instagram',
				},
			},
			'&.linkedin': {
				':hover': {
					color: 'linkedin',
				},
			},
		},
	},
};

export default styles;
