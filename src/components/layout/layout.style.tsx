const styles = {
	body: {
		margin: '0',
		fontFamily: '"Open Sans", sans-serif',
		fontSize: '13px',
		WebkitTapHighlightColor: 'transparent',
		WebkitFontSmoothing: 'antialiased',
		textShadow: 'rgba(0, 0, 0, 0.004) 1px 1px 1px',
	},
	p: {
		lineHeight: 2,
	},
	'@media only screen and (min-width: 768px)': {
		body: {
			fontSize: '15px',
		},
		p: {
			lineHeight: '1.4',
		},
	},
	'.drawer:focus': {
		outline: 'none',
	},
	'.drawer-content-wrapper': {
		maxWidth: '480px',
		footer: {
			display: 'none',
		},
	},
	'@media only screen and (max-width: 480px)': {
		'.drawer-content-wrapper': {
			footer: {
				minHeight: '70px',
				maxWidth: '480px',
				width: '100%',
				position: 'absolute',
				paddingTop: '0',
				bottom: '0',
				left: '0',
				zIndex: '1',
				'>div': {
					justifyContent: 'center',
				},
				'.copyright': {
					display: 'none',
				},
			},
		},
	},
};

export default styles;
