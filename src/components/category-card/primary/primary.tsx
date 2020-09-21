/** @jsx jsx */
import { Link } from "gatsby";
import Img from "gatsby-image";
import { RichText } from "prismic-reactjs";
import { IoMdArrowForward } from "react-icons/io";
import { Box, Heading, Text, jsx } from "theme-ui";
import styles from "./primary.style";

type PropsType = {
	thumbnail: string;
	title: string;
	path: string;
	btnTex?: string;
};

const PrimaryCard: React.FC<PropsType> = ({
	thumbnail,
	title,
	path,
	btnTex,
}) => {
	const categoryTitle = RichText.asText(title);
	return (
		<Box sx={styles.wrapper}>
			<Link to={`/collection/${path}`}>
				<Box as="figure" sx={styles.figure}>
					{thumbnail ? <Img fluid={thumbnail} alt={categoryTitle} /> : null}
					<Box as="figcaption" sx={styles.figcaption}>
						<Heading as="h3">{categoryTitle}</Heading>
						<Text className="textBtn" sx={styles.textBtn}>
							<Text as="span">{btnTex ? btnTex : "View Items"} </Text>
							<IoMdArrowForward />
						</Text>
					</Box>
				</Box>
			</Link>
		</Box>
	);
};

export default PrimaryCard;
