/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { RichText } from "prismic-reactjs";
import { Box, Heading, jsx } from "theme-ui";
import styles from "./secondary.style";

type PropsType = {
	path: string;
	title: any;
	thumbnail: string;
};

const CategoryBlock: React.FC<PropsType> = ({ path, title, thumbnail }) => {
	const categoryTitle = RichText.asText(title);
	return (
		<Box sx={styles.wrapper}>
			<Link to={path}>
				{thumbnail ? <Img fluid={thumbnail} alt={categoryTitle} /> : null}
				<Heading as="h3">{categoryTitle}</Heading>
			</Link>
		</Box>
	);
};

export default CategoryBlock;
