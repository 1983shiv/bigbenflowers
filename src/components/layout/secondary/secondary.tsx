/** @jsx jsx */
import React, { useContext } from 'react';
import { Box, Flex, jsx } from 'theme-ui';
import { SearchContext } from '../../../provider/search-provider';
import useFreezeBodyScroll from '../../../hooks/useFreezeBodyScroll';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import Footer from './footer/footer';
import styles from './secondary.style';

const SecondaryLayout: React.FunctionComponent = ({ children }) => {
	const { isSearched } = useContext<any>(SearchContext);
	useFreezeBodyScroll(isSearched);

	return (
		<Flex as="main" sx={styles.main}>
			<Box as="aside" sx={styles.sidebar}>
				<Sidebar />
			</Box>
			<Box sx={styles.wrapper}>
				<Header />
				<Box sx={styles.content}>{children}</Box>
				<Footer />
			</Box>
		</Flex>
	);
};

export default SecondaryLayout;
