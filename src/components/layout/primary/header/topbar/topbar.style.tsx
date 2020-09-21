const styles = {
	topbar: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: 80,
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
		borderBottomColor: 'muted',
		backgroundColor: 'white',
		'@media only screen and (min-width: 1024px)': {
			'.container.fluid': {
				'.grid': {
					gridTemplateColumns: '1fr 3fr 1fr',
					'.topbar-search': {
						'label.search': {
							marginLeft: 'auto',
							marginRight: 'auto',
							maxWidth: '100%',
						},
					},
					'.topbar-links': {
						marginLeft: 'auto',
					},
				},
			},
		},
		'@media only screen and (max-width: 1080px)': {
			borderBottom: 0,
			boxShadow: '0 2px 4px rgba(41,41,41,0.06)',
		},
		'.logo a': {
			position: 'relative',
			marginTop: '6px',
			marginRight: '30px',
			'@media only screen and (max-width: 1080px)': {
				marginLeft: '10px',
				marginRight: '0',
			},
		},
	},
	grid: {
		gridGap: [10, 30, 40],
		alignItems: 'center',
		gridTemplateColumns: 'auto 1fr auto',
		'@media only screen and (max-width: 667px)': {
			gridTemplateColumns: '1fr auto auto',
		},
		'.search': {
			display: 'flex',
			maxWidth: 480,
			marginLeft: 'auto',
			'@media only screen and (max-width: 667px)': {
				display: 'none',
			},
		},
	},
	hamburgBtn: {
		display: 'none',
		'@media only screen and (max-width: 1080px)': {
			display: 'inline-flex',
		},
	},
	searchBtn: {
		display: 'none',
		svg: {
			width: 17.5,
			height: 17.5,
		},
		'@media only screen and (max-width: 667px)': {
			display: 'inline-flex',
		},
	},
	rightPart: {
		display: 'flex',
		alignItems: 'center',
		div: {
			marginTop: '2px',
		},
		a: {
			display: 'flex',
			color: 'primary',
			textDecoration: 'none',
			transition: 'color 0.2s',
			svg: {
				width: [19.2, 19],
				height: [19.2, 19],
			},
			':hover': {
				color: 'menu',
			},
		},
	},
	drawerTitle: {
		maxWidth: 480,
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		paddingY: 15,
		paddingLeft: 30,
		paddingRight: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'background',
		zIndex: 10,
		h2: {
			color: 'primary',
			fontSize: 17,
		},
	},
};

export default styles;
