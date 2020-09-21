/** @jsx jsx */
import React from 'react';
import { Box, Heading, Text, jsx } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import Carousel from '../../carousel/carousel';
import CategoryBlock from '../../category-card/secondary/secondary';
import styles from './secondary.style';

const CategoryBlocks: React.FC<any> = ({
	title,
	shortIntro,
	categoryItems,
}) => {
	const responsive = {
		xlg: {
			breakpoint: { max: 100000, min: 1440 },
			items: 6,
		},
		lg: {
			breakpoint: { max: 1439, min: 1200 },
			items: 5,
		},
		md: {
			breakpoint: { max: 1199, min: 768 },
			items: 3,
		},
		sm: {
			breakpoint: { max: 767, min: 0 },
			items: 2,
		},
	};

	return (
		<Box sx={styles.wrapper}>
			<Box sx={styles.header}>
				<Heading as="h2">{RichText.asText(title)}</Heading>
				<Text as="p">{RichText.asText(shortIntro)}</Text>
			</Box>
			<Carousel ssr={true} responsive={responsive} gutter="10px">
				{categoryItems.map((item: any) => (
					<CategoryBlock
						key={item.category_slug}
						path={`/minimal/collection/${item.category_slug}`}
						thumbnail={item.imageSharp.childImageSharp.fluid}
						title={item.category_title}
					/>
				))}
			</Carousel>
		</Box>
	);
};

export default CategoryBlocks;
