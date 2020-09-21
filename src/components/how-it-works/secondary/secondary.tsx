/** @jsx jsx */
import React from 'react';
import { Grid, jsx } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import FeatureCard from '../../feature-card/feature-card';
import styles from './secondary.style';

const HowItWorks: React.FC<any> = ({ items }) => {
	return (
		<Grid sx={styles.wrapper}>
			{items.map((item: any, index: number) => (
				<FeatureCard
					key={index}
					thumbnail={item.thumbnail.url}
					title={RichText.asText(item.title)}
					shortInfo={RichText.asText(item.short_description)}
				/>
			))}
		</Grid>
	);
};

export default HowItWorks;
