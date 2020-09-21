/** @jsx jsx */
import { Grid, Box, jsx } from 'theme-ui';
import PrimaryCard from '../../category-card/primary/primary';
import styles from './primary.style';

const getCategoryData = (edges: any): any => {
	const data: any = [];
	edges.forEach((category: any, index: number) => {
		data.push({
			id: `category-${index}`,
			title: category.category_title,
			thumbnail: category.imageSharp.childImageSharp.fluid,
			path: category.category_slug,
		});
	});
	return data;
};

const CategoryBlocks = ({ categoryBlock }: any) => {
	const categories = getCategoryData(categoryBlock);
	return (
		<Box sx={styles.wrapper}>
			<Grid sx={styles.grid}>
				{categories.map((item: any) => (
					<PrimaryCard
						key={`category-block--key${item.id}`}
						path={item.path}
						thumbnail={item.thumbnail}
						title={item.title}
					/>
				))}
			</Grid>
		</Box>
	);
};

export default CategoryBlocks;
