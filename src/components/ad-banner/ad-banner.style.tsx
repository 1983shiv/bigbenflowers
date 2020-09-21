const styles = {
	wrapper: {
		display: 'grid',
		marginTop: '20px',
		'.carousel-button-group': {
			opacity: 0,
			visibility: 'hidden',
			transition: 'all 0.25s ease',
		},
		'&:hover': {
			'.carousel-button-group': {
				opacity: 1,
				visibility: 'visible',
			},
		},
		img: {
			width: '100%',
			height: 'auto',
			objectFit: 'cover',
		},
	},
};

export default styles;
