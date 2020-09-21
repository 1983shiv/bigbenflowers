/** @jsx jsx */
import React from 'react';
import { Flex, Text, jsx } from 'theme-ui';
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
} from 'react-share';
import styles from './social-share.style';

type PropsType = {
	title: string;
	url: string;
};

const SocialShare: React.FC<PropsType> = ({ title, url }) => {
	return (
		<Flex sx={styles.wrapper}>
			<Text sx={styles.title}>Share on: &nbsp;</Text>
			<FacebookShareButton quote={title} url={url}>
				<FacebookIcon size={35} round />
			</FacebookShareButton>
			<TwitterShareButton title={title} url={url}>
				<TwitterIcon size={35} round />
			</TwitterShareButton>
			<LinkedinShareButton title={title} url={url}>
				<LinkedinIcon size={35} round />
			</LinkedinShareButton>
		</Flex>
	);
};

export default SocialShare;
