/** @jsx jsx */
import { Box, Image, Heading, Text, jsx } from 'theme-ui';
import styles from './feature-card.style';

type PropsType = {
	thumbnail: string;
	title: string;
	shortInfo: string;
};

const FeatureCard: React.FC<PropsType> = ({ thumbnail, title, shortInfo }) => {
	return (
		<Box className="featureCard" sx={styles.wrapper}>
			<Image src={thumbnail} alt={title} />
			<Box>
				<Heading as="h4">{title}</Heading>
				<Text as="p">{shortInfo}</Text>
			</Box>
		</Box>
	);
};

export default FeatureCard;
