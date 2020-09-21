/** @jsx jsx */
import { Box, Grid, Heading, Text, jsx } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import FeatureCard from '../../feature-card/feature-card';
import styles from './primary.style';

const HowItWorks = (props: any) => {
	const { howItWorksTitle, howItWorksSubtitle, howItWorksGroup } = props;
	return (
		<Box as="section" sx={styles.wrapper}>
			<Box as="header" sx={styles.header}>
				<Heading as="h3">{RichText.asText(howItWorksTitle)}</Heading>
				<Text>{RichText.asText(howItWorksSubtitle)}</Text>
			</Box>

			<Grid gap={[0, 20, 50, 105]} columns={['1fr', '1fr 1fr 1fr']}>
				{howItWorksGroup.map((item: any, index: number) => (
					<FeatureCard
						key={index}
						thumbnail={item.image.url}
						title={RichText.asText(item.title)}
						shortInfo={RichText.asText(item.description)}
					/>
				))}
			</Grid>
		</Box>
	);
};

export default HowItWorks;
