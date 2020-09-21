/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import SocialLink from './social-link';
import styles from './social-links.style';

type PropsType = {
	items: {
		type: string;
		link: string;
	}[];
};

const SocialLinks: React.FC<PropsType> = ({ items }) => {
	return (
		<Box className="socialLinks" sx={styles.socialLinks}>
			{items && items.map((item) => <SocialLink key={item.type} item={item} />)}
		</Box>
	);
};

export default SocialLinks;
