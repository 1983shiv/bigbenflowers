/** @jsx jsx */
import React from 'react';
import { Box, Heading, Text, jsx } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import styles from './ad-block.style';
// fallback image
import bannerImg from '../../images/ad-banner/1.jpg';

type Props = {
	tag?: string;
	title: string;
	tagBgColor?: string;
	bannerImage: string;
	btn?: React.ReactNode;
	shortDescription: string;
};

const AdBlock: React.FC<Props> = ({
	btn,
	tag,
	title,
	tagBgColor,
	bannerImage,
	shortDescription,
}) => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${
					bannerImage && bannerImage ? bannerImage : bannerImg
				})`,
				...styles.wrapper,
			}}
		>
			<Box sx={styles.content}>
				{tag && (
					<Box
						as="span"
						sx={{
							backgroundColor: tagBgColor ? tagBgColor : '#AFCD5F',
							...styles.tag,
						}}
					>
						{RichText.asText(tag)}
					</Box>
				)}
				<Heading as="h3">{RichText.asText(title)}</Heading>
				<Text as="p">{RichText.asText(shortDescription)}</Text>
				{btn && btn}
			</Box>
		</Box>
	);
};

export default AdBlock;
