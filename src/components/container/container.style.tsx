/** @jsx jsx */
import { Box, jsx } from 'theme-ui';

const Wrapper = ({ ...props }) => (
	<Box
		{...props}
		sx={{
			width: '100%',
			maxWidth: `${props.fluid ? '1760px' : '1240px'}`,
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingX: '20px',
			'@media only screen and (min-width: 1200px) and (max-width: 1760px)': {
				paddingX: `${props.fluid ? '30px' : '20px'}`,
			},
		}}
	/>
);

export default Wrapper;
